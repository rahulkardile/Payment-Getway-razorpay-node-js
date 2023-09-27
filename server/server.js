import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Razorpay from "razorpay";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT 
const MONGO_URL = process.env.MONGO_URL

const Razorpay_KEY = process.env.Key_Rayzor_Id;
const Razorpay_SECREAT = process.env.Key_Rayzor_Secret;

var instance = new Razorpay({
    key_id: Razorpay_KEY,
    key_secret: Razorpay_SECREAT, 
});

try {
    mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Database is Connected");
    })
} catch (error) {
    console.log(error);
}

app.get("/", (req, res) => {
    res.send("Hello From Server.")
})

const checkout = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };
    const order = await instance.orders.create(options);
    res.status(200).json({success: true, order})
    
    .then(()=> {
        console.log(order);
    })
}

app.post("/checkout", checkout);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

