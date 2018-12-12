mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'cat',
    password: 'dog',
    database: 'checkout_db'
})

connection.connect();