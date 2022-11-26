const express = require("express");

const app = express();

app.get("/", function (req, res)
{
    res.send("Server is Started Running...");
})

app.get("/about", function (req, res)
{
    res.send("<h1>About....</h1>");
})

const port = 4000;

app.listen(port, function ()
{
    console.log("app is listening on port " + port);
})