module.exports = function (app, con, bcrypt, faker) {
    app.post('/register', (req, res) => {

        var email = req.body.email;
        var pass = req.body.password;

        var applying = req.body.applying ? 1 : 0
        var company_id = faker.random.number();

        const saltRounds = 10;
        const myPlaintextPassword = pass;

        var sqlreq = "SELECT * FROM people WHERE email='" + email + "' AND candidate_id!=0";
        con.query(sqlreq, function (err, result) {
            if (err) throw err;
            if (JSON.stringify(result) != '[]') {
                console.log(result)
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.statusCode = 401;
                res.send(JSON.stringify({ "message": "Email already in use" }));
            } else {
                bcrypt.genSalt(saltRounds, function (err, salt) {
                    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
                        // Store hash in your password DB.
                        var sql = "INSERT INTO people (candidate_id, firstName, company_name, company_id, applying, lastName, email, password) VALUES ('" + faker.random.uuid() + "', '" + req.body.firstName + "','" + req.body.company_name + "','" + company_id + "', " + applying + ",'" + req.body.lastName + "', '" + email + "', '" + hash + "')";
                        con.query(sql, function (err, result) {
                            if (err) throw err;
                            var uuid = faker.random.uuid();
                            req.session.uuid = uuid
                            console.log(req.session)
                            res.setHeader("Access-Control-Allow-Origin", "*")
                            res.send(JSON.stringify({ "message": "Account succefully created", "session_uuid": uuid }));
                        })
                    });
                });
            }
        });
    })
    app.get('/test', (req, res) => {
        console.log(req.session)
    })
    app.post('/login', (req, res) => {
        var email = req.body.email;
        var pass = req.body.password;

        var sql = "SELECT * FROM people WHERE email='" + email + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result)
            bcrypt.compare(pass, result[0].password, function(err, isMatch) {
                console.log(err)
                console.log(isMatch)
                if (isMatch) {
                  // Send JWT
                  res.setHeader("Access-Control-Allow-Origin", "*")
                  res.send(JSON.stringify({ "message": "Login successful", "id": result[0].candidate_id }));
                } else {
                  // response is OutgoingMessage object that server response http request
                  res.setHeader("Access-Control-Allow-Origin", "*")
                  res.statusCode = 401
                  res.send(JSON.stringify({ "message": "Nul", "id": "dkjsk" }));
                }
              });
        })
    })
}