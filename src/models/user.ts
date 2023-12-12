import { Schema, model } from "mongoose";

const userSchema = new Schema ({
    name: {
        type: String, 
        require: true,
        unique: true,
        trim: true
    },
    email: {
        type: String, 
        require: true,
        trim: true
    }, 
    password: {
        type: String, 
        require: true,
        trim: true,
        select: true,
    }, 
    role: {
        type: String, 
        require: true,
        trim: true
    },
},{
    versionKey: false,
    timestamps: true
});

export default model("User", userSchema);
