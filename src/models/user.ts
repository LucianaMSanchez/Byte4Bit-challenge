import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema ({
    name: {
        type: String, 
        require: true,
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
        trim: true
    }, 
    admin: {
        type: String, 
        require: true,
        trim: true
    },
},{
    versionKey: false,
    timestamps: true
});

// userSchema.pre('save', function(next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(this.password, salt);
//     this.password = hash;
//     next();
// });

// userSchema.methods.comparePassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

export default model("User", userSchema);
