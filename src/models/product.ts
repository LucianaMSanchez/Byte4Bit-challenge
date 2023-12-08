import { Schema, model } from "mongoose";

const productSchema = new Schema ({
    title: {
        type: String, 
        require: true,
        trim: true
    },
    description: {
        type: String, 
        require: false,
        trim: true
    }, 
    price: {
        type: String, 
        require: true,
        trim: true
    }, 
    image: {
        type: String, 
        require: true,
        trim: true
    },
},{
    versionKey: false,
    timestamps: true
});

export default model("Product", productSchema);