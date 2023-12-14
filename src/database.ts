import mongoose from "mongoose";
import config from "./config";

export const startConnection = async () => {
    try {
        const db = await mongoose.connect(config.MONGO_HOST)
        console.log("Database connected")
    } catch (error) {
        console.error(error)
    }
}

