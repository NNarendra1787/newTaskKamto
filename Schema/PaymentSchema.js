const mongoose = require("mongoose")

const Payment = new mongoose.Schema({
    CurrentPlan:{
        type: String,
        required: true,
    },
    Amount:{
        type: Number,
        required: true,
    },
    NextBilingAmt:{
        type: Number,
        required: true,
    },
    NextBilingDate:{
        type: String,
        required: true,
    }
})

const Product = mongoose.model("Payment", Payment)

module.exports = Product