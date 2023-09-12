const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database 121");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
