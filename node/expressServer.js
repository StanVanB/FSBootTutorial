const express = require('express');
const app = express();
const port = 3000;

var customers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
];

var users = [
    { id: 1, name: 'Alice Brown', age: 28 },
    { id: 2, name: 'Charlie Davis', age: 34 },
    { id: 3, name: 'Diana Wilson', age: 22 }
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/customers', (req, res) => {
    res.json(customers);
});

app.get('/customers/:id', (req, res) => {
    let customers_id = parseInt(req.params.id);
    if (customers_id) {
        let customer = customers.find(cus => cus.id === customers_id);
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } else {
        res.status(400).json({ error: 'Invalid customer ID' });
    }
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    let users_id = parseInt(req.params.id);
    if (users_id) {
        let user = users.find(usr => usr.id === users_id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } else {
        res.status(400).json({ error: 'Invalid user ID' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
