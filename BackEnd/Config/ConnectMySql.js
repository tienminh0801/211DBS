const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbass2",
});

connection.connect((err) => {
    if (err) console.log("Cannot connect MySql because ", err);
    else console.log("Connected to MySql !!!!");
});

module.exports = connection;
