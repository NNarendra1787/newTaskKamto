const { LoginUser, RegisterUsers } = require('../Controller/userCont');

const route = require('express').Router();

route.post("/register", RegisterUsers);
route.post("/login", LoginUser);

module.exports = route;