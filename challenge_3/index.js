mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'cat',
    password: 'dog',
    database: 'checkout_db'
})

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('connected to checkout_db')
});