const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = "mongodb+srv://username:27bKylHTcLzRZqhf@brocoders.kmwx8fe.mongodb.net/sih"

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