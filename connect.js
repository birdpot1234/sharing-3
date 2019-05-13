

var config = require('./connect_config');
var knex = require('knex')(config.dbConnectData_focusCare);

console.log(config.dbConnectData_focusCare.connection.database)

module.exports = knex;