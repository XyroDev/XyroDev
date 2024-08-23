const Settings = require('../Storage/Settings')
const App = require('./App')
const Server = new App(Settings)

Server.configure()
Server.loadRoutes()
Server.listen()