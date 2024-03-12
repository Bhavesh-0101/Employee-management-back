const express = require('express');
const router = express.Router();
const { createEmployee, getAllEmployee, uploadFile } = require('../controllers/employeeController')
var multer = require('multer');
var upload = multer();

router.post('/upload', upload.single('file'), uploadFile)
router.post('/create', createEmployee)
router.get('/getEmployee', getAllEmployee)

module.exports = router;