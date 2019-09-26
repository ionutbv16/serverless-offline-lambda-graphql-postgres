
const dbConfig = require('./config/db');
const db = require('serverless-mysql')({config: dbConfig});
 
module.exports = db;