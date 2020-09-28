const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "job_board"
});

//Advertisements

app.get('/ad/', (req, res) => {
    var sql = "SELECT * FROM advertisements";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
})

app.get('/ad/:id', (req, res) => {
    var sql = "SELECT * FROM advertisements WHERE id=" + req.params.id;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
})

app.post('/createAd/', (req, res) => {
    var sql = "INSERT INTO advertisements (title, author, content, company, createdAt, beginsAt, expiresAt) VALUES ('Job de ouf', '1', 'Content de lannonce du job de ouf', '45', '28092020', '30092020', '15102020')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify({"message": "Advertisement created"}));
    })
})

//Companies

app.get('/companies/', (req, res) => {
    var sql = "SELECT * FROM companies";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
})

app.get('/company/:id', (req, res) => {
    var sql = "SELECT * FROM companies WHERE id=" + req.params.id;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
})

//Applications

app.get('/applications/', (req, res) => {
    var sql = "SELECT * FROM application";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
})

app.get('/application/:id', (req, res) => {
    var sql = "SELECT * FROM application WHERE id=" + req.params.id;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
})

//People

app.get('/people/', (req, res) => {
    var sql = "SELECT * FROM people";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
})

app.get('/people/:id', (req, res) => {
    var sql = "SELECT * FROM people WHERE id=" + req.params.id;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
})

app.post('/createPerson/', (req, res) => {
    var sql = "INSERT INTO people (firstName, company_id, applying, lastName) VALUES ('Philippe', '8', '66', 'Poutou')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify({"message": "Person created"}));
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})