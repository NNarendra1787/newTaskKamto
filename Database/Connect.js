const mongoose = require("mongoose");

const ConnectDatabase = async(uri)=>{
    await mongoose.connect((uri))
    .then(()=> console.log('Database Connected Successfully'))
    .catch((e)=>console.log(e))
}

module.exports = ConnectDatabase;