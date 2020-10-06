module.exports = function(app, con) {
    app.post('/register', (req, res) => {
        var email = req.body.email;
        var pass = res.body.password;

        var sqlreq = "SELECT * FROM people WHERE email"
    })
}