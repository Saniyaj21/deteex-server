// user controller
import { User } from '../models/userModel.js';
import { sendCookie } from '../utils/sendCookie.js';


export const googleSignup = async (req, res) => {
    try {
        const { email, name, avatar } = req.body
        let user = await User.findOne({ email: email });

        if (user) {
            sendCookie(user, res, 200);
        } else {
            let user = await User.create({
                name,
                email,
                avatar
            });

            sendCookie(user, res, 200);
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
