const mongoose = require("mongoose");

const uri =
  process.env.DB_URL ||
  "mongodb+srv://robbertjohn62:6ykxDMDwS4pmrgRs@menuappdb.ttiw3.mongodb.net/menudb?retryWrites=true&w=majority&appName=menuappdb";

console.log("MongoDB URI:", uri);

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB connected successfully");
  } catch (err) {
    console.log("Database connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
