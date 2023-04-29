//jshint esversion:6
const {request} = require('express')
const express = require ('express')
const app = express()
const port = 5500
app.use(express.urlencoded());
app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.post('/bmiCalculator', function(req, res){
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var bmi = w/(h*h);
    res.send("Your BMI is " + bmi);
})
app.listen(port, ()=> {
    console.log('port ${port}')
})
