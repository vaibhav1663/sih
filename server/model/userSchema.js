const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: false,
    },
    field: {
        type: String,
        required: false,
    },
    collegeName: {
        type: String,
        required: false,
    },
    degree: {
        type: String,
        required: false,
    },
    year: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
});

// static signup method
userSchema.statics.signup = async function (
    email,
    name,
    age,
    gender,
    role,
    field,
    collegeName,
    degree,
    year,
    password
) {
    // validation
    if (
        !email ||
        !name ||
        !age ||
        !gender ||
        !role ||
        !field ||
        !collegeName ||
        !degree ||
        !year ||
        !password
    ) {
        throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
        throw Error("Email not valid");
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        email,
        name,
        age,
        gender,
        role,
        field,
        collegeName,
        degree,
        year,
        password: hash,
    });

    return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled");
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw Error("Incorrect email");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error("Incorrect password");
    }

    return user;
};

module.exports = mongoose.model("User", userSchema);
