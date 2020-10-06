module.exports = function (app, con, bcrypt, faker) {
    app.post('/register', (req, res) => {

        var email = req.body.email;
        var pass = req.body.password;

        var applying = req.body.applying == true ? 1 : 0
        var company_id = faker.random.number();

        const saltRounds = 10;
        const myPlaintextPassword = pass;

        var sqlreq = "SELECT * FROM people WHERE email='" + email + "'";
        con.query(sqlreq, function (err, result) {
            if (err) throw err;
            if (result == []) {
                res.send({ "message": "Email already in use" });
            } else {
                bcrypt.genSalt(saltRounds, function (err, salt) {
                    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
                        // Store hash in your password DB.
                        var sql = "INSERT INTO people (firstName, company_name, company_id, applying, lastName, email, password) VALUES ('" + req.body.firstName + "','" + req.body.company_name + "','" + company_id + "', " + applying + ",'" + req.body.lastName + "', '" + email + "', '" + hash + "')";
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
}