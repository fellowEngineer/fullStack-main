const express = require("express");
const bodyParser = require("body-parser");
var admin = require("firebase-admin");

var serviceAccount = require("./service_key.json");
const { urlencoded } = require("body-parser");
const { async } = require("@firebase/util");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();




const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", (req, res) => {
    res.render("home");
})

app.get("/signin", (req, res) => {
    res.render("signin");
})


app.post("/signin", async (req, res) => {
    const user = {
        email: req.body.inputEmail,
        pass: req.body.inputPassword
    };

    try{
        const userRef = db.collection("users").doc(user.email);
        const response = await userRef.get();
        const value = response.data();
        // console.log("is it " + response + "\n\n" + value);
        if(value != undefined)
        {
            res.render("user_data", {e: value});
        }
        else
        {
            res.redirect("/");
        }
    }
    catch(e){
        res.send("Error");
        console.log("error from /signin " + e);
    }
})


app.get("/signup", (req, res) => {
    res.render("signup");
})

app.post("/signup", async (req, res) => {
    try{
        const id = req.body.inputEmail;
        const user = {
            name: req.body.name,
            email: id,
            pass: req.body.inputPassword,
            mobile: req.body.mobileNumber,
            gender: req.body.gender,
            nickname: req.body.nickname
        }
        // console.log(user);

        const response = await db.collection("users").doc(id).set(user);
        // res.send(response);

    }
    catch(e){
        res.send("error form /signup "+e);
    }
    res.redirect("/");
})


app.get("/update", (req,res) => {
    res.render("update");
})
app.post("/update", async (req, res) => {
    try{
        const id = req.body.inputEmail;
        const user = {
            name: req.body.name,
            email: id,
            pass: req.body.inputPassword,
            mobile: req.body.mobileNumber,
            gender: req.body.gender,
            nickname: req.body.nickname
        }
        // console.log(user);

        const response = await db.collection("users").doc(id).update(user);
        // res.send(response);

        user.email = id;
        res.render("user_data", {e: user});

    }
    catch(e){
        res.send("error form /signup "+e);
        res.redirect("/");
    }
})

app.get("/delete", (req, res)=> {
    res.render("delete");
})
app.post("/delete", async (req, res) => {
    try{
        const id = req.body.inputEmail;
        const pass = req.body.inputPassword;

        const dbRef = db.collection("users").doc(id).delete();
        // const uData = dbRef.get().data();

        // console.log(uData);
        // if((id == uData.email) && (pass == uData.pass))
        // {
        //     dbRef.delete();
        // }
    }
    catch (e){
        console.log("error from delete " + e);
    }
    res.redirect("/");
})



app.get("/showall", async (req, res) => {

    try{
        const userRef = db.collection("users");
        const response = await userRef.get();
        let resArr = [];
        response.forEach(d => {
            resArr.push(d.data());
        })
        // console.log(resArr);
        res.render("show", {resArr});
    }
    catch(e){
        res.send("Errorn form  /showall route" + e);
    }

})


app.listen(4000, ()=>{
    console.log("running on port 4000");
})


