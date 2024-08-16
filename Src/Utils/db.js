const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TestDev123',
  database: 'xyro_development'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
  }
  console.log('connected as id ' + db.threadId);
});