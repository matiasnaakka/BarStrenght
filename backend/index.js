require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/OrderRoutes'); // Ensure this matches the actual file name

const app = express();

// Create a new Pool instance
const pool = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "calisthenics_store"
});

// Middleware
app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


// Route for testing the database connection
app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).send('Database connection error');
    }
});

// Base route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// API Routes
app.use('/api/products', productRoutes);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = pool;  // Export pool if needed in other modules
