const express = require('express');
const connection = require('./connection');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');

app.use(express.json());

// Get all employees.
app.get('/employees', (req, res) => {
    // SELECT returns every row from the Employees table.
    connection.query('SELECT * FROM Employees', (err, results) => {
        if (err) {
            console.error('Error fetching employees:', err);
            res.status(500).json({ error: 'Error fetching employees' });
            return;
        }
        res.json(results);
    });
});

// Get a single employee by employeeId.
app.get('/employees/:id', (req, res) => {
    const employeeId = req.params.id;

    // Validate the route parameter before running the query.
    if (!employeeId || isNaN(employeeId)) {
        res.status(400).json({ error: 'Employee ID should be a number field.' });
        return;
    }

    // The ? placeholder keeps the query parameterized and safer than string concatenation.
    connection.query('SELECT * FROM Employees WHERE employeeId = ?', [employeeId], (err, results) => {
        if (err) {
            console.error('Error fetching employee:', err);
            res.status(500).json({ error: 'Error fetching employee' });
            return;
        }
        // If MySQL returns no rows, the id does not exist.
        if (results.length === 0) {
            res.status(404).json({ error: 'Employee not found' });
            return;
        }
        res.json(results[0]);
    });
});

// Create a new employee.
app.post('/employees', (req, res) => {
    const { employeeName, employeeEmail } = req.body;

    // employeeName and employeeEmail are required by the Employees table.
    if (!employeeName || !employeeEmail) {
        res.status(400).json({ error: 'Missing required fields: employeeName, employeeEmail' });
        return;
    }

    // Insert the request body values into the Employees table.
    connection.query(
        'INSERT INTO Employees (employeeName, employeeEmail) VALUES (?, ?)',
        [employeeName, employeeEmail],
        (err, results) => {
            if (err) {
                console.error('Error inserting employee:', err);
                res.status(500).json({ error: 'Error inserting employee' });
                return;
            }
            res.status(201).json({
                message: 'Employee inserted successfully',
                // insertId is the auto-generated employeeId from MySQL.
                employeeId: results.insertId
            });
        }
    );
});

// Delete an employee by employeeId.
app.delete('/employees/:id', (req, res) => {
    const employeeId = req.params.id;

    // Validate the route parameter before deleting.
    if (!employeeId || isNaN(employeeId)) {
        res.status(400).json({ error: 'Employee ID should be a number field.' });
        return;
    }

    // Delete only the employee whose primary key matches employeeId.
    connection.query('DELETE FROM Employees WHERE employeeId = ?', [employeeId], (err, results) => {
        if (err) {
            console.error('Error deleting employee:', err);
            res.status(500).json({ error: 'Error deleting employee' });
            return;
        }
        // affectedRows is 0 when the employeeId was not found.
        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Employee not found' });
            return;
        }
        res.json({ message: 'Employee deleted successfully' });
    });
});

// Update an employee by employeeId.
app.put('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    const { employeeName, employeeEmail } = req.body;

    // Validate the route parameter before updating.
    if (!employeeId || isNaN(employeeId)) {
        res.status(400).json({ error: 'Employee ID should be a number field.' });
        return;
    }
    // Require both fields so the update does not save incomplete employee data.
    if (!employeeName || !employeeEmail) {
        res.status(400).json({ error: 'All fields (employeeName, employeeEmail) are required for update.' });
        return;
    }

    // Update the employee row that matches employeeId.
    connection.query(
        `UPDATE Employees
        SET employeeName = ?, employeeEmail = ?
        WHERE employeeId = ?`,
        [employeeName, employeeEmail, employeeId],
        (err, results) => {
            if (err) {
                console.error('Error updating employee:', err);
                res.status(500).json({ error: 'Error updating employee' });
                return;
            }
            // affectedRows is 0 when no employee exists with this id.
            if (results.affectedRows === 0) {
                res.status(404).json({ error: 'Employee not found' });
                return;
            }
            res.json({ message: 'Employee updated successfully' });
        }
    );
});

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
    const email = req.body.email;

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
    const { customer_name, age, email } = req.body;

    if (!customerId || isNaN(customerId)) {
        res.status(400).json({ error: 'Customer ID should be a number field.' });
        return;
    }
    if (!customer_name || !email) {
        res.status(400).json({ error: 'All fields (customer_name, email) are required for update.' });
        return;
    }

    connection.query(`UPDATE customers 
        SET customer_name = ?,  customer_email = ? 
        WHERE customer_id = ?`, [customer_name, age, email, customerId], (err, results) => {
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
