const { AddData, AddChatData, findData } = require('../Controller/ChartCont');
const { LoginUser, RegisterUsers } = require('../Controller/userCont');

const route = require('express').Router();

route.post("/auth0/register", RegisterUsers);
route.post("/auth0/login", LoginUser);

route.post("/addData", AddData)
route.post("/addChartData", AddChatData)

route.get("/takeData", findData);

module.exports = route;