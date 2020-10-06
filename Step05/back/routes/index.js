const apiRoutes = require('./api_routes.js');

module.exports = function(app, con) {
    apiRoutes(app, con)
}