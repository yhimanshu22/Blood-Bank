const mongoose = require("mongoose");
const colors = require("colors");

const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:27017/blood_bank_db'

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
