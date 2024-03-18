import mongoose from 'mongoose';
import validator from 'validator';


const companySchema = new mongoose.Schema({
    cmpName: {
        type: String,
        required: true,
    },
    cmpEmail: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    cmpLogo: {
        public_id: String,
        url: String
    },

    address: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    cmpType: {
        type: String,
    },
    reqRoles: [
        {
            jobRole: String,
            capacity: Number
        }
    ],
    employees: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Employee",
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now,
    },
});


export const Company = mongoose.model("Company", companySchema);