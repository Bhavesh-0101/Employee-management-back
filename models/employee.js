const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employee_id: Number,
  employee_name: String,
  employee_status: String,
  joining_date: Date,
  birth_date: Date,
  skills: String,
  salary_details: String
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;