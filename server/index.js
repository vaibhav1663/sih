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
app.post("/add",async (req,res)=>{
    const {uid, name, email, age, gender, field, collegeName, degree, year} = req.body;
    if(!uid || !name || !email || !age || !gender || !field || !collegeName || !degree || !year){
        return res.status(422).json({error: "Field cant be empty "});
    }
    try{
        const userExists = await User.findOne({uid: uid});
        if(userExists){
            return res.status(422).json({error: "Email Exists"})
        }
        const user = new User({uid,name, email, age, gender, field, collegeName, degree, year});
        const userRegister = await user.save();
        console.log(userRegister);
        if(userRegister){
            res.status(201).json({msg: 'Added the user'})
        }else{
            res.status(500).json({error: "Internal server error "})
        }
    }
    catch(err){
        err => {console.log(err)}
    }
})

app.listen(5000, ()=>{
    console.log("Server is runnning..")
})