const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create a new order
router.post('/', async (req, res) => {
    const { user_id, total, status } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO orders (user_id, total, status) VALUES ($1, $2, $3) RETURNING *',
            [user_id, total, status]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating order' });
    }
});

// Get all orders
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM orders');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching orders' });
    }
});

// Get an order by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching order' });
    }
});

module.exports = router;
