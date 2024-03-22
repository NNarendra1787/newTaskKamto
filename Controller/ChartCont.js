const LineChart = require("../Schema/LineChar1");

const findData = async (req, res) => {
  try {
    const Data = await LineChart.find();
    return res.send( Data );
  } catch (e) {
    console.log(e);
  }
};

const AddData = async (req, res) => {
  try {
    const data = req.body;
    const newData = await LineChart.create(data);
    res.status(200).send({ Chart: newData });
  } catch (e) {
    res.status(500).send({ err: e });
  }
};

const AddChatData = async (req, res) => {
    try{

        const data = req.body;
        const { id, ChartNo, Date, CurrentPeriod, PreviousPeriod, CharteTime } =
        data;
        const Result = await LineChart.create({
            id,
            ChartNo,
            CurrentPeriod,
            PreviousPeriod,
            Date,
            CharteTime,
        });
        
        return res.send({ msg: "User data has been Stored", Result });
    }catch(e){
        return res.send({err: e})
    }
};

module.exports = {
  AddChatData,
  AddData,
  findData,
};
