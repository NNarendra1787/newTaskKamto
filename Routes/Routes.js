const { AddData, AddChatData, findData, FetchByPerticular } = require('../Controller/ChartCont');
const { LoginUser, RegisterUsers } = require('../Controller/userCont');
const { AddToPayment, addToPatment, FindPaymentData } = require("../Controller/PaymentCont")

const route = require('express').Router();

route.post("/auth0/register", RegisterUsers);
route.post("/auth0/login", LoginUser);

route.post("/addData", AddData)
route.post("/addChartData", AddChatData)

route.get("/takeData", findData);
route.get("/checkData/:CheckTime", FetchByPerticular);

//payment Route
route.post("/sendData",AddToPayment)
route.post("/dataSend",addToPatment)
route.get("/askPay", FindPaymentData)

module.exports = route;