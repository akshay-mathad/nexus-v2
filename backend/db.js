   // db.js
   const { Pool } = require('pg');

   // Create a new pool instance
   const pool = new Pool({
     user: 'postgres',        // PostgreSQL username
     host: 'localhost',             // Database host
     database: 'nexus',        // Database name
     password: 'a',     // Database password
     port: 5432,                    // Default PostgreSQL port
   });

   // Export the pool for use in other files
   module.exports = pool;