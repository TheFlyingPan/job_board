const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');
const http = require('https');
const faker = require('faker');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "job_board"
});

require('./routes')(app, con);
require('./fake')(app, con, faker);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})