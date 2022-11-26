const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 4000;

app.get("/", (req, res) => 
{
    res.sendFile(__dirname + "/calc.html");
});

app.post("/", (req, res) => 
{
    let firstNumber = parseInt(req.body.firstNumber);
    let secondNumber = parseInt(req.body.secondNumber);
    let result = firstNumber+secondNumber;

    res.send("your answer is " + result);
});

app.get("/bmicalculator", (req,res) =>
{
    res.sendFile(__dirname + "/BmiCalc.html");
});

app.post("/bmicalculator", (req, res) =>
{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmiResult = weight / (height*height);
    res.send("Your BMI is " + bmiResult);
})







app.listen(port, ( ) => 
{
    console.log("server is running on " + port);
})