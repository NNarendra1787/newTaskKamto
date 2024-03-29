const LineChart = require("../Schema/LineChar1");

const findData = async (req, res) => {
  try {
    const Data = await LineChart.find();
    return res.send(Data);
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
  try {
    const data = req.body;
    const { no, ChartNo, Date, CurrentPeriod, PreviousPeriod, CharteTime } =
      data;
    const Result = await LineChart.create({
      no,
      ChartNo,
      Date,
      CurrentPeriod,
      PreviousPeriod,
      CharteTime,
    });

    return res.send({ msg: "User data has been Stored", Result });
  } catch (e) {
    return res.send();
  }
};

// const DeleteData = async(req, res)=>{
//   const Data = req.body;

// }

const FetchByPerticular = async(req, res)=>{
  try{
    const data = req.body;
    const { CharteTime } = req.params;
    const result = await LineChart.find({ CharteTime: CharteTime })
    return res.send({Data: result})
  }
  catch(e){
    return res.send(e)
  }
}

module.exports = {
  AddChatData,
  AddData,
  findData,
  FetchByPerticular
};
