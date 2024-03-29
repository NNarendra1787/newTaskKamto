const Product = require("../Schema/PaymentSchema");

const addToPatment = async (req, res) => {
  try{
    const data = req.body;
    const newData = await Product.create(data);
    return res.send({"data": newData})
  }catch(e){
    return res.send(e)
  }
};

const AddToPayment = async (req, res) => {
  try {
    const data = req.body;
    const { CurrentPlan, Amount, NextBilingAmt, NextBilingDate } = data;
    const result = await Product.create({
      CurrentPlan,
      Amount,
      NextBilingAmt,
      NextBilingDate,
    });

    return res.status(200).send({ msg: "User Data available", result });
  } catch (e) {
    return res.status(500).send("Error in Data", e);
  }
};

const FindPaymentData = async(req, res)=>{
  try{
    const data = await Product.find();
    return res.send(data)
  }
  catch(e){
    console.log(e);
  }
}

module.exports = {
  FindPaymentData,
  AddToPayment,
  addToPatment,
}
