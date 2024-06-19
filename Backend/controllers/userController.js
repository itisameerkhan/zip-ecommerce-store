import User from "../models/userModel.js";

export const signupFunction = async (req, res, next) => {
  try {
    const verify = await User.findOne({ email: req.body.email });
    if (verify === null) {
      const response = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      res.json({
        success: true,
        message: "user account created successfully",
        data: response,
      });
    } else {
      throw new Error("Email already existed in database");
    }
  } catch (e) {
    next(e);
  }
};

export const loginFunction = async (req, res, next) => {
  try {
    const response = await User.findOne({ email: req.body.email });
    if (response === null) throw new Error("This account doesn't exist");
    if (response.password !== req.body.password)
      throw new Error("Invalid passwrord");
    res.json({
      success: true,
      message: response,
    });
  } catch (e) {
    next(e);
  }
};
