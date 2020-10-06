const loginRoutes = require('./login.js');

module.exports = function(app, con, bcrypt, login) {
    loginRoutes(app, con, bcrypt, login)
}