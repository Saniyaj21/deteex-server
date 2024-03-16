// user controller
import { User } from '../models/userModel.js';
import jwt from 'jsonwebtoken'

export const googleSignup = async (req, res) => {
    try {
        const { email, name, avatar } = req.body
        let user = await User.findOne({ email: email });

        if (user) {
            // console.log("User exists");
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET,);

            user.token = token;
            user.save();


            res.status(200).json({
                success: true,
                token,
                user
            });
        } else {
            let user = await User.create({
                name,
                email,
                avatar
            });

            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET,);

            user.token = token;
            user.save();


            res.status(200).json({
                success: true,
                token,
                user
            });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
