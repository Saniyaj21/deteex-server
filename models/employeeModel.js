import mongoose from 'mongoose';
import validator from 'validator';


const employeeSchema = new mongoose.Schema({
    empName: {
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
        public_id: String,
        url: String
    },
    birthDay: {
        type: Date,
    },
    address: {
        type: String,
    },

    location: {
        type: String,
    },

    phoneNo: {
        type: String,
    },
    jobRole: {
        type: String,
    },
    previousCMP: {
        type: String,
    },
    andharNo: {
        type: String,
    },
    panNo: {
        type: String,
    },
    grantedAmount: {
        type: Number,
    },
    paybleAmount: {
        type: Number,
    },

    // const newDocument = new YourModel({
    //     dateOfJoin: new Date("Sat Mar 30 2024 05:30:00 GMT+0530")
    // });

    dateOfJoin: {
        type: Date,
    },
    
    bankDetails: {
        accountNo: String,
        IFSC: String,
        MICR: String,
        branchCode: String,
        brunchName: String,
        bankName: String,
    },



    PFaccountNo: {
        type: String,
    },
    ESIaccountNo: {
        type: String,
    },
    UANno: {
        type: String,
    },
    statusOfWorker: {
        type: String
    },
    // check if status is reservered for then add the conpany here bellow else no need
    reservedFor: {
        type: mongoose.Schema.ObjectId,
        ref: "Company",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


export const Employee = mongoose.model("Employee", employeeSchema);