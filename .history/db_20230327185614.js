const Pool = require('pg').Pool;
require('dotenv').config();
const pool = new Pool({
   process.env.DB_USER,
   password: "251600Voin!",
   host: "localhost",
   port: 5432,
   database: "node-blog"
})

module.exports = pool;