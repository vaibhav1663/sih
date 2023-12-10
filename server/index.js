const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // no need of using dotenv if node.js version >= 20.6.0
dotenv.config();
const app = express();
const db = process.env.MONGO_CONN_URL;

mongoose.connect(db,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("We got the MongoDB.")
}).catch((err)=>{console.log(err)});


app.use(express.json());
const User = require("./model/userSchema");

const middleware = (req,res,next)=>{
    console.log("Middleware");
    next();

}

app.get("/", (req,res)=>{
    res.send("Hello")
})
app.post("/add", (req,res)=>{
    const {name, email} = req.body;

    User.findOne({email: email}).then(
        (userExist)=>{
            if(userExist){
                return res.status(422).json({error: "Email Exists"})
            }
            const user = new User({name, email});
            user.save().then(()=>{
                console.log("Added");
            })
        }

    )
})

app.listen(5000, ()=>{
    console.log("Server is runnning..")
})