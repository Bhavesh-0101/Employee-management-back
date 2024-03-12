const express = require('express')
const app = express();
const router = require('./routes/router')
const mongoose = require('mongoose')
const cors = require('cors');
//var username = encodeURIComponent("YOUR_DATABASE_USERNAME");
const port = '8080'
const mongodb = `mongodb+srv://bhaveshprajapati0601:9Pv8mXo83WGgTrxR@cluster0.8zpqxzu.mongodb.net/employee-management?retryWrites=true&w=majority`

app.use(express.json())

mongoose.connect(mongodb).then(() => {
    console.log('connected')
    console.log(`listening on port ${port}`)
}).catch(err => console.log(err));
app.listen(port);


app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));
app.use('/api', router)
