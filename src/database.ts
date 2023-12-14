import mongoose from "mongoose";
import config from "./config";

export const startConnection = async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`)
        console.log("Database connected to :", db.connection.name)
    } catch (error) {
        console.error(error)
    }
}

