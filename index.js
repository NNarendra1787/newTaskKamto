require('dotenv').config();
const express = require('express');
const ConnectDatabase = require('./Database/Connect');
const route = require('./Routes/Routes');
const app = express()
const port = process.env.PORT || 3000;


app.use(express.json())
app.use(cors, {
    origin: "*"
})

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/auth0', route)

const ConnectServerToDatabase = async()=>{
    try{
        await ConnectDatabase(process.env.MONGO_URL); 
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }
    catch(err){
        console.log(err);
    }
}

ConnectServerToDatabase();