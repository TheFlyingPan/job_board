const loginRoutes = require('./login.js');

module.exports = function(app, con) {
    loginRoutes(app, con)
}