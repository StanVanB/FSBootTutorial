const {sequelize, Sequelize} = require('../connection');

const Department = sequelize.define('Department', {
    departmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    departmentName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Department;