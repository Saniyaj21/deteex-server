import { User } from '../models/userModel.js';

export const userInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    const allUsers = await User.find()

    res.status(200).json({ success: true, user, allUsers });
  } catch (error) {
    res.status(400).json({ success: false, message: 'User not available' });
  }
}


export const logOutUser = async (req, res) => {
  try {
    res.status(200)
      .cookie("token", null, {
        expiresIn: new Date(
          Date.now()
        ),
        httpOnly: true,
        sameSite: "None",
        secure: true
      }).json({
        success: true,
        message: "user Logout successfully"
      })

  } catch (error) {
    res.status(400).json({ success: false, message: 'Logout Failed.' });
  }
}

