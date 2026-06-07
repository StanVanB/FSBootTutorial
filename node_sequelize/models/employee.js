const {sequelize, Sequelize} = require('../connection');

const Employee = sequelize.define('Employee', {
    employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    employeeName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    employeeEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = Employee;