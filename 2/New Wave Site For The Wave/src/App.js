const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { Liquid } = require('liquidjs')
const session = require('express-session')

const glob = require('glob')
const MySQLStore = require('express-mysql-session')(session)


const SessionSettings = require('../Storage/Sessions')
const expirationDate = Date.now() + (30 + 86400 * 1000)

class App {
    constructor(settings) {
        this.port = settings.port
        this.settings = settings
        this.app = express()
        this.db = require('./Utils/Database')
        this.engine = new Liquid()
        this.app.utils = require('./Utils/Functions')(this.db)
    }

    configure() {
        this.app.engine('liquid', this.engine.express())
        this.app.set('view engine', 'liquid')
        this.app.set('views', './Views')
        this.app.use('/Public', express.static('public'))
        this.app.use(cookieParser())
        this.app.use(session({
            key: this.settings.sessions.key,
            secret: this.settings.sessions.secret,
            resave: false,
            saveUninitialized: false,
            store: new MySQLStore({ host: this.db.host, user: this.db.user, password: this.db.pass, database: this.db.name }),
            cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 }
        }))

        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(cors())
    }

    loadRoutes() {
        glob('./src/Routes/**/*.js', {}, (err, files) => {
            for(const file of files) {
                let splitPath = file.split('/')
                let name = splitPath[splitPath.length - 1].split('.')[0]
                let path = splitPath.shift()
                path = splitPath.shift()
                path = splitPath.join('/')
                path = `./${path}`

                require(path)(this.app, this.db)
                console.log(chalk.green(`Loaded route ${name}`))
            }
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(chalk.green(`Server started on port http://localhost:${this.port}`))
        })
    }
}

module.exports = App