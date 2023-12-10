const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    uid:{
        type: Object,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: false
    },
    gender:{
        type: String,
        required: false
    },
    field:{
        type: String,
        required: false
    },
    collegeName:{
        type: String,
        required: false
    },
    degree:{
        type: String,
        required: false
    },
    year:{
        type: Number,
        required: false
    }
});

const User = mongoose.model("USERS", userSchema);

module.exports = User;