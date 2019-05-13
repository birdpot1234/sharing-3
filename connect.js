

var config = require('./connect_config');
var knex = require('knex')(config.dbConnectData_focusCare_dev);

console.log(config.dbConnectData_focusCare_dev.connection.database)

module.exports = knex;