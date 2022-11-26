const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 4000;

const apiKey = "dece4172505578d6d2c545fe4726f9bb";
const endPoint = "https://api.openweathermap.org/data/2.5/weather";

const lat = 22.57;
const lon = 88.36;
const units = "metric";

app.get("/", (req, res) =>
{
    // const lat = (Math.random()*100).toFixed(2);
    // const lon = (Math.random()*100).toFixed(2);

    // const cityName = req.body.cityName;

    // const url = endPoint + "?" + cityName +"&lat=" + lat + "&lon=" + lon + "&units=" + units + "&appid=" + apiKey;

    // https.get(url, (response) =>
    // {
    //     console.log(response.statusCode);
    //     console.log(lat);
    //     console.log(lon);


    //     response.on("data", (data) => 
    //     {
    //         const requestedDataAsJson = JSON.parse(data);
    //         ///console.log(req.body.temparature);
    //         //console.log("name: " + requestedDataAsJson.name);
    //         ///console.log("temp: " + requestedDataAsJson.main.temp);
    //         //console.log("description: " + requestedDataAsJson.weather[0].description);
    //         const icon = requestedDataAsJson.weather[0].icon;
            
    //         res.write("<h1 style='text-align:center'>name: " + requestedDataAsJson.name + ".<br>temp: " + requestedDataAsJson.main.temp + ".<br>description: " + requestedDataAsJson.weather[0].description +"</h1>");
    //         res.write("<img style='margin:50px auto' src='http://openweathermap.org/img/wn/" + icon + "@2x.png'>")

    //         res.send();
    //     })
        
    // })

    res.sendFile(__dirname + "/index.html");
})


app.post("/", (req, res) => 
{
    const lat = (Math.random()*100).toFixed(2);
    const lon = (Math.random()*100).toFixed(2);

    const cityName = req.body.cityName;

    console.log("=================>>> " + cityName);

    //const url = endPoint + "?" + cityName + "&units=" + units + "&appid=" + apiKey;
    const url = endPoint + "?" + cityName +"&lat=" + lat + "&lon=" + lon + "&units=" + units + "&appid=" + apiKey;

    https.get(url, (response) =>
    {
        console.log(response.statusCode);
        console.log(lat);
        console.log(lon);


        response.on("data", (data) => 
        {
            const requestedDataAsJson = JSON.parse(data);
            ///console.log(req.body.temparature);
            //console.log("name: " + requestedDataAsJson.name);
            ///console.log("temp: " + requestedDataAsJson.main.temp);
            //console.log("description: " + requestedDataAsJson.weather[0].description);
            const icon = requestedDataAsJson.weather[0].icon;

            
            
            res.write("<h1 style='text-align:center'>name: " + requestedDataAsJson.name + ".<br>temp: " + requestedDataAsJson.main.temp + ".<br>description: " + requestedDataAsJson.weather[0].description +"</h1>");
            res.write("<img style='margin:50px auto' src='http://openweathermap.org/img/wn/" + icon + "@2x.png'>")

            res.send();
        })
        
    })
})









app.listen(port, () =>
{
    console.log("Server is running on PORT:"+port);
})