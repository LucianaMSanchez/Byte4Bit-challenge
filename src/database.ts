import mongoose from "mongoose";


export const startConnection = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_HOST as string)
        console.log("Connected to database")
    } catch (error) {
        console.error(error)
    }
}

