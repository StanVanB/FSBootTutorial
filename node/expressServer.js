const express = require('express');
const app = express();
const port = 3000;

var customers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' }
];
// 5 mins 
// Similar to customers, create an array of users containing 3 user objects with id name and age properties.
// create an endpoint /users that returns the users array as JSON.

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/customers', (req, res) => {
    res.json(customers);
});

app.get('/customers/:id', (req, res) => {
    let customer_id = parseInt(req.params.id);
    if(customer_id) {
        let customer = customers.find(cus => cus.id === customer_id);
        if(customer){
            res.json(customer);
        } else {
            res.status(404).json('Customer not found');
        }
    } else {
        res.status(400).json('Invalid customer id');
    }
});

// // post to create a new customer
// app.post();
// // put to update an existing customer
// app.put();
// // delete to delete a customer
// app.delete();


// do the same thing with users
// filter users based on their ids

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});