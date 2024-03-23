
import { v2 as cloudinary } from 'cloudinary';
import { Employee } from '../models/employeeModel.js';


export const addEmployee = async (req, res) => {
  try {
    console.log(req.boy);
    const {
      empName,
      email,
      birthDay,
      address,
      location,
      phoneNo,
      jobRole,
      previousCMP,
      andharNo,
      panNo,
      grantedAmount,
      paybleAmount,
      dateOfJoin,
      bankDetails,
      PFaccountNo,
      ESIaccountNo,
      UANno,
      statusOfWorker,
      reservedFor
    } = req.body;

    const myCloud = await cloudinary.uploader.upload(req.body.avatar, {
      folder: "deteex",
      width: 250,
      crop: "scale",
    });

    const employe = await Employee.create({
      empName,
      email,
      birthDay,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url
      },
      address,
      location,
      phoneNo,
      jobRole,
      previousCMP,
      andharNo,
      panNo,
      grantedAmount,
      paybleAmount,
      dateOfJoin,
      bankDetails,
      PFaccountNo,
      ESIaccountNo,
      UANno,
      statusOfWorker,
      reservedFor,
    })
    const allEmployee = await Employee.find();

    res.status(200).json({ success: true, allEmployee, employe });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: 'User not available' });
  }
}
