import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET);
};

export const signupFunction = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const verify = await User.findOne({ email });
    if (verify === null) {
      const hashedPassword = await bcryptjs.hash(password, 8);
      const response = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      const jwtToken = generateAccessToken({
        username,
        email,
        password: hashedPassword,
      });

      res.json({
        success: true,
        message: "user account created successfully",
        data: response,
        jwtToken: jwtToken,
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
    const { email, password } = req.body;
    const response = await User.findOne({ email });
    if (response === null) throw new Error("This account doesn't exist");
    const isValidPassword = await bcryptjs.compare(password, response.password);
    console.log(isValidPassword);
    if (!isValidPassword) throw new Error("Invalid passwrord");
    const jwtToken = generateAccessToken({
      email,
      password: response.password,
    });

    res.json({
      success: true,
      message: response,
      jwtToken: jwtToken,
      phase: "login",
    });
  } catch (e) {
    next(e);
  }
};

export const handleCartFunction = async (req, res, next) => {
  try {
    console.log(req.body);
    const { jwtToken, name, image_url, new_price } = req.body;
    const jwtAuth = await jwt.decode(jwtToken, process.env.JWT_SECRET);
    const userResponse = await User.find({ email: jwtAuth.email });
    const response = await User.updateOne(
      { email: userResponse[0].email },
      {
        $push: {
          cart: {
            name,
            image_url,
            new_price,
          },
        },
      }
    );
    res.json({
      success: true,
      message: "data updated successfully",
      response: response,
    });
  } catch (e) {
    next(e);
  }
};

export const getCartDataFunction = async (req, res, next) => {
  try {
    const { jwtToken } = req.body;
    const jwtAuth = await jwt.decode(jwtToken, process.env.JWT_SECRET);
    const userResponse = await User.findOne({ email: jwtAuth.email });
    res.json({
      success: true,
      message: "cart data",
      data: userResponse.cart,
    });
  } catch (e) {
    next(e);
  }
};
