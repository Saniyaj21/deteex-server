import mongoose from 'mongoose';
import validator from 'validator';


const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    avatar: {
        type: String
    },

    gender: {
        type: String,
    },
    location: {
        type: String,
    },
    birthDay: {
        type: Date,
    },
    about: {
        type: String,
    },
 
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


export const Employee = mongoose.model("Employee", employeeSchema);