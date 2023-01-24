const express = require("express");
const cors = require("cors");
const User = require("./apis/config").default;


const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send({msg : "User added."});
})

app.post("/create", async (req, res) => {
    let data = req.body;
    console.log(data);
    // need validation for data here 
    // await User.add(data);
    res.send({msg : "User added."});
})



app.listen(4000, () => {
    console.log("Running on Port 4000");
})