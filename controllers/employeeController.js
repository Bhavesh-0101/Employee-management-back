const Employee = require("../models/employee");
const xlsx = require('xlsx');

const createEmployee = async (req, res) => {
    console.log("api call", req)
    try {
        const CreatedEmployees = await Employee.create(req.body);
        console.log(CreatedEmployees);
        res.send(CreatedEmployees);
    } catch (err) {
        console.log("Error while create the Employee", err)
    }

}

const uploadFile = async (req, res) => {
    try {
        const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(worksheet);
        const employeeData = [];
        for (const item of data) {
            const employee = {
                employee_id: item["EmployeeID	"],
                employee_name: item['Employee Name'],
                birth_date: item['BirthDate'],
                employee_status: item['Employee Status'],
                joining_date: item['Joining Date'],
                salary_details: item['Salary Details'],
                skills: item['Skills']
            }
            employeeData.push(employee);
        }
        const CreatedEmployees = await Employee.insertMany(employeeData);
        res.send(CreatedEmployees);
    } catch (err) {
        console.log(err);
    }
}

const getAllEmployee = async (req, res) => {
    console.log("api call", req)
    try {
        const allEmployee = await Employee.find({});
        console.log(allEmployee);
        res.send(allEmployee);
        res.status(200)
    } catch (err) {
        console.log("Error while get the Employee", err)
    }

}

module.exports = {
    createEmployee,
    getAllEmployee,
    uploadFile
}