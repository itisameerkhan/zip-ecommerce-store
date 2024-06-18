import mongoose from "mongoose";

const connectDB = async () => {
    try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connection successfull");
    } catch(e) {
        console.log(e);
    }
}

export default connectDB;