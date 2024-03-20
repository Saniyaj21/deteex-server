import { Company } from '../models/companyModel.js';
import { v2 as cloudinary } from 'cloudinary';


export const addCompany = async (req, res) => {
  try {
    const { cmpName, cmpEmail, address, phoneNo, cmpType, reqRoles, employees } = req.body

    const myCloud = await cloudinary.uploader.upload(req.body.file, {
      folder: "deteex",
      width: 250,
      crop: "scale",
    });

    const company = await Company.create({
      cmpName,
      cmpEmail,
      cmpLogo: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url
      },
      address,
      phoneNo,
      cmpType,
      reqRoles
    })



    res.status(200).json({ success: true, company });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: 'User not available' });
  }
}

export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params
    const company = await Company.findOneAndDelete({ _id: id })

    // Deleting Images From Cloudinary
    await cloudinary.uploader.destroy(company.cmpLogo.public_id);

    const allCompany = await Company.find()
    res.status(200).json({ success: true, allCompany });

  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: 'User not available' });
  }
}
export const getAllCompany = async (req, res) => {
  try {

    const allCompany = await Company.find()
    res.status(200).json({ success: true, allCompany });
  } catch (error) {
    res.status(400).json({ success: false, message: 'User not available' });
  }
}

