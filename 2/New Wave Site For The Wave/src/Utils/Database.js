const mysql = require('mysql2')

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'thewave_localdevelopment',
    password: 'GrrbUaACZgy+n#AGZKudqrUq',
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
})


module.exports = pool;
