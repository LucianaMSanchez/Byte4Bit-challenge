import dotenv from "dotenv";
dotenv.config()

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE,
    MONGO_HOST: process.env.MONGO_HOST,
    STRIPE_PASS: process.env.STRIPE_PASS
}