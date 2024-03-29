require('dotenv').config();
const express = require('express');
const ConnectDatabase = require('./Database/Connect');
const route = require('./Routes/Routes');
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000;
const Product  = require("./Schema/PaymentSchema")


app.use(express.json())
app.use(cors({
    origin: "*"
}))


app.get('/', (req, res) => res.send('Hello World!'))
app.use('/data', route)

const stripe = require("stripe")(
    "sk_test_51O9gy5SEFOzonOOAbUeOgYW14BmddCV2sk2iXMYk2iakJ1cF2bnZnx4tqgtgCLuWyaB0hOsuJhclPPfYn2KtL5Kn00oPy4WkyZ"
)

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


app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    console.log("This is my products", products);
    const lineItems = products.map((Product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: Product.name,
        },
        unit_amount: Product.price * 100,
      },
      quantity: Product.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://prepbytes-demo.vercel.app/dashbo",
      cancel_url: "https://prepbytes-demo.vercel.app/cancle",
    });
    res.json({ id: session.id });
  });



