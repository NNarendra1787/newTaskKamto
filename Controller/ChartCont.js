const LineChart = require("../Schema/LineChar1");


const findData = async(req, res)=>{
    try{
        const Data = await LineChart.find();
       return res.send({Result: Data})
    }
    catch(e){
        console.log(e);
    }
}

const AddData = async(req, res)=>{
    try{
        const data = req.body;
        const newData = await LineChart.create(data);
        res.status(200).send({Chart: newData})
    }
    catch(e){
        console.log(e);
    }
}

const AddChatData = async(req, res)=>{
    try{
        const data = req.body;
        const {id,ChartNo, Date, CurrentPeriod, PreviousPeriod, CharteTime} = data;
        const Result = await LineChart.create({
            id, ChartNo, CurrentPeriod, PreviousPeriod, Date, CharteTime,
        })

        return res.send({msg: "User data has been Stored", Result})
    }

    catch(e){
        console.log(e)
    }
}

module.exports = {
    AddChatData,
    AddData,
    findData
}