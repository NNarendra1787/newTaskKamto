const mongoose = require("mongoose");

const UserData = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: [true,'phone number is required'],
        minLength: 10,
        maxLength: 10,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    } 
})

const Users = mongoose.model("UserDetails", UserData)

module.exports = Users;