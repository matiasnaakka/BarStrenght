// backend/db.js
require('dotenv').config();
const { Pool } = require('pg');

// Create a new Pool instance
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,  // Only enable SSL in production
});

// Export the pool to use in other files
module.exports = pool;
