const mongoose = require('mongoose');

const Chart = new mongoose.Schema({
    no:{
        type: Number,
        // required: true,
    },
    ChartNo:{
        type: Number,
        // required: true,
    },
    Date: {
        type: String,
        // required: true,
    },
    CurrentPeriod: {
        type: Number,
        // required: true,
    },
    PreviousPeriod: {
        type: Number,
        // required: true,
    },
    CharteTime:{
        type: String,
        // required: true,
    },

})

const LineChart = mongoose.model("ChartDetails", Chart)
module.exports = LineChart;