const Employee = require('../models/employee');
const express = require('express');
const app = express.Router();

app.post('/create', async (req, res) => {

    if(!req.body.employeeName || !req.body.employeeEmail) {
        return res.status(400).json({ error: 'Employee name and email are required' });
    }

    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all employees.
app.get('/', async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a single employee by employeeId.
app.get('/:id', async (req, res) => {
    const employeeId = req.params.id;

    try {        
        const employee = await Employee.findByPk(employeeId);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete an employee by employeeId.
app.delete('/:id', async (req, res) => {
    const employeeId = req.params.id;

    try {
        const employee = await Employee.findByPk(employeeId);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        await employee.destroy();
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update an employee by employeeId.
app.put('/:id', async (req, res) => {
    const employeeId = req.params.id;

    try {
        const employee = await Employee.findByPk(employeeId);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        await employee.update(req.body);
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = app;
