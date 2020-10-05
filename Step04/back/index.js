const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');
const faker = require('faker');
const bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "job_board",
    // si erreur de connection base de donnée décommenter cette ligne
    // port: "3307"
});

require('./routes')(app, con);
require('./fake')(app, con, faker);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})