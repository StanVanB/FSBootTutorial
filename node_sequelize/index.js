const express = require('express');
const app = express();
const port = 3000;
const { sequelize } = require('./connection');
const Department = require('./models/department');
const Employee = require('./models/employee');

const departmentRoutes = require('./routes/department');
const employeeRoutes = require('./routes/employee');
// explain about middlewares as well
app.use(express.json());
app.use('/departments', departmentRoutes);
app.use('/employees', employeeRoutes);

Department.hasMany(Employee, { foreignKey: 'departmentId' });
Employee.belongsTo(Department, { foreignKey: 'departmentId' });

sequelize.sync().then().catch((error) => {
    console.error('Unable to create tables:', error);
}); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});