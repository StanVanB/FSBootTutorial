const Department = require('../models/department');
const express = require('express');
const app = express.Router();

app.post('/departments', async (req, res) => {
    try {
        const department = await Department.create(req.body);
        res.status(201).json(department);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = app;
