const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("staticFiles"));

app.get("/", (req, res) =>
{
    res.sendFile(__dirname + "/signup.html");
})





app.post("/", (req, res) =>
{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const dataObj = {
        members : [
            {
                email_address : email,
                status : "subscribed",
                merge_fields : {
                    FNAME : firstName,
                    LNAME : lastName
                }
            }
        ]
    }

    const dataObjJson = JSON.stringify(dataObj);

    console.log(dataObjJson)

    
    // const endPointMailChimp = "https://mandrillapp.com/api/1.0/";
    // const addEmail = endPointMailChimp + "/allowlists/add";

    const endPointMailChimp = "https://us11.api.mailchimp.com/3.0/lists/16b88dcc57";

    const options = {
        method: "POST",
        auth: "fellowEngineer:04da50b0b112506737843dc596746d7f-us11"
    }

    const request = https.request(endPointMailChimp, options, (response) =>
    {
        response.on("data", (data) =>
        {
            console.log(JSON.parse(data));
        })
    })

    request.write();
    request.end();


    console.log(firstName, lastName !== "" && lastName, email);
    res.send("<h1>Your post request is successfully submitted.</h1>");
})

// const apiKeyMailChimp = "04da50b0b112506737843dc596746d7f-us11";
// const audienceIdMailChimp = "16b88dcc57";



const port = 4000;
app.listen(port, () =>
{
    console.log("server is running on port: " + port);
})