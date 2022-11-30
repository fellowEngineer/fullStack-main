const express = require("express");
const bodyParser = require("body-parser");



const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let date = new Date();


let todoList = ["EveryDay...."];
let workList = [];

let dayInfo = {
    today: dayList[date.getDay()],
    thisYear: date.getFullYear(),
    todos: todoList
}


app.get("/", (req, res) => {
    dayInfo.today = "All";
    dayInfo.todos = todoList;

    res.render("todo", {day: dayInfo});
})


app.post("/", (req, res) => {


    let item = req.body.new_todo;

    if(req.body.sub_btn == "Work")
    {
        if(req.body.sub_btn != "")
            workList.push(item);

        res.redirect("/work");
    }
    else
    {
        if(item != "")
            todoList.push(item);
        
        res.redirect("/");
    }


   
})



app.get("/work", (req, res) => {

    dayInfo.today = "Work";
    dayInfo.todos = workList;

    res.render("todo", {day: dayInfo});
})


app.post("/work", (req, res) => {

    let item = req.body.new_todo;
    if(item != "")
        workList.push(item);

    res.redirect("/work");
})











const port = 4000;

app.listen(process.env.PORT || port, () => {
    console.log("App is listening on port: " + port);
})


