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

app.get('/ad/:id', (req, res) => {
    var sql = "SELECT * FROM advertisements WHERE id=" + req.params.id;
    var query;
    con.query(sql, function(err, result) {
        if (err) throw err;
        query = result;
        console.log(result)
        res.send(JSON.stringify(query));
    });
})

app.get('/ad/', (req, res) => {
    var sql = "SELECT * FROM advertisements";
    var query;
    con.query(sql, function(err, result) {
        if (err) throw err;
        query = result;
        console.log(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(JSON.stringify(query));
    });
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})