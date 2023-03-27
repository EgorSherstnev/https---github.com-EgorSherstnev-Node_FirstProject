const Pool = require('pg').Pool;
require('dotenv').config();
const pool = new Pool({
   user: "postgres",
   password: "251600Voin!",
   host: "localhost",
   port: 5432,
   database: "node-blog"
})

module.exports = pool;