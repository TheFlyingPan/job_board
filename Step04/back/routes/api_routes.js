module.exports = function (app, con){

    
    //Advertisements

app.get('/ad/', (req, res) => {
    var sql = "SELECT * FROM advertisements";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(result));
    });
})

app.get('/ad/:id', (req, res) => {
    var sql = "SELECT * FROM advertisements WHERE id=" + req.body.id;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(result));
    });
})

app.post('/createAd/', (req, res) => {
    var sql = "INSERT INTO advertisements (title, author, content, company, company_name, createdAt, beginsAt, expiresAt) VALUES ('" + req.body.title + "', '" + req.body.author + "', '" + req.body.content + "', '" + req.body.company + "', '"+ req.body.company_name +"','"+ req.body.createdAt + "', '"+ req.body.beginsAt +"', '"+ req.body.expiresAt +"')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify({"message": "Advertisement created"}));
    })
})

<<<<<<< HEAD:Step 04/back/routes/api_routes.js
app.delete('/deleteAd/:id', (req, res) => {
    var sql = "DELETE * FROM advertisements WHERE id=" + req.body.id;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(result));
    });
})

app.update('/updateAd/:id', (req, res) => {
    var sql = "UPDATE " + req.body.name +  " SET" + req.param;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(result));
    });
})
=======
>>>>>>> bc7a88161b1ce74c8730f28ec6ce84d995357230:Step04/back/routes/api_routes.js
//Companies

app.get('/companies/', (req, res) => {
    var sql = "SELECT * FROM companies";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(result));
    });
})

app.get('/company/:id', (req, res) => {
    var sql = "SELECT * FROM companies WHERE id=" + req.body.id;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(result));
    });
})

app.post('/createCompany/', (req, res) => {
    var sql = "INSERT INTO companies (name, city, country, description) VALUES ('"+ req.body.name +"','"+ req.body.city +"', '"+ req.body.country +"', '"+ req.body.description + "')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify({"message": "Company created"}));
    })
})

//Applications

app.get('/applications/', (req, res) => {
    var sql = "SELECT * FROM application";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(result));
    });
})

app.get('/application/:id', (req, res) => {
    var sql = "SELECT * FROM application WHERE id=" + req.body.id;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(result));
    });
})

app.post('/createApp/', (req, res) => {
    var sql = "INSERT INTO application (candidate_id, candidate_last, candidate_first, contact_email, contact_phone, advertisement_id, message) VALUES ('"+ req.body.candidate_id +"','"+ req.body.candidate_last +"','"+ req.body.candidate_first +"','"+ req.body.email +"','"+ req.body.phone +"', '"+ req.body.ad_id +"','"+ req.body.message +"')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(req.body);
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify({"message": "Application created"}));
    })
})

//People

app.get('/people/', (req, res) => {
    var sql = "SELECT * FROM people";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(result));
    });
})

app.get('/people/:id', (req, res) => {
    var sql = "SELECT * FROM people WHERE id=" + req.body.id;
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(result));
    });
})

app.post('/createPerson/', (req, res) => {
    var sql = "INSERT INTO people (firstName, company_name, company_id, applying, lastName) VALUES ('"+ req.body.firstName +"','"+ req.body.company_name +"','"+ req.body.company_id +"','"+ req.body.applying +"','"+ req.body.lastName +"')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify({"message": "Person created"}));
    })
})}