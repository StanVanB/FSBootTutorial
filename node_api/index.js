const express = require('express');
const connection = require('./connection');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');
const cors =  require('cors');

app.use(cors());

app.use(express.json());

app.get('/customers', (req, res) => {
    connection.query('SELECT * FROM customers', (err, results) => {
        if (err) {
            console.error('Error fetching customers:', err);
            res.status(500).send('Error fetching customers');
            return;
        }
        res.json(results);
    });
});

app.get('/customers/:id', (req, res) => {

    connection.query('SELECT * FROM customers WHERE customer_id = ?', [req.params.id], (err, results) => {
        if (err) {
            console.error('Error fetching customer:', err);
            res.status(500).send('Error fetching customer', err);
            return;
        }
        res.json(results);
    });
});

app.post('/customers', (req, res) => {
    const customer_name = req.body.customer_name;
    const age = req.body.age;
    const email = req.body.customer_email;

    // OR
    // const { customer_name, age, email } = req.body;

    if (!customer_name || !age || !email) {
        res.status(400).json({ error: 'Missing required fields: customer_name, age, email' });
        return;
    }

    connection.query('INSERT INTO customers (customer_name, age, customer_email) VALUES (?,?,?)', [customer_name, age, email], (err, results) => {
        if (err) {
            console.error('Error inserting customer:', err);
            res.status(500).json({ error: 'Error inserting customer' });
            return;
        }
        res.json({ message: 'Customer inserted successfully' });
    });

})

app.delete('/customers/:id', (req, res) => {

    const customerId = req.params.id;

    if (!customerId || isNaN(customerId)) {
        res.status(400).json({ error: 'Customer ID should be a number field.' });
        return;
    }

    connection.query('DELETE FROM customers where customer_id = ?', [customerId], (err, results) => {
        if (err) {
            console.error('Error deleting customer:', err);
            res.status(500).json({ error: 'Error deleting customer' });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Customer not found' });
            return;
        }
        res.json({ message: 'Customer deleted successfully' });
    });
});

app.put('/customers/:id', (req, res) => {
    const customerId = req.params.id;
    const { customer_name, age, customer_email } = req.body;

    if (!customerId || isNaN(customerId)) {
        res.status(400).json({ error: 'Customer ID should be a number field.' });
        return;
    }
    if (!customer_name || !customer_email) {
        res.status(400).json({ error: 'All fields (customer_name, customer_email) are required for update.' });
        return;
    }

    connection.query(`UPDATE customers 
        SET customer_name = ?,  customer_email = ?, age = ? 
        WHERE customer_id = ?`, [customer_name,customer_email, age, customerId], (err, results) => {
        if (err) {
            console.error('Error updating customer:', err);
            res.status(500).json({ error: 'Error updating customer' });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Customer not found' });
            return;
        }
        res.json({ message: 'Customer updated successfully' });
    });
});

app.post('/customers/login', (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400).json({ error: 'Email and password are required.' });
        return;
    }

    bcrypt.hash(password, 10, function(err, hasedpassword) {
        res.json({ email, hasedpassword });
    });
});

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});
