const mongoose = require("mongoose");

const connectToDb = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://test:test@blog.q3dnole.mongodb.net/?retryWrites=true&w=majority"
  );
  if (res) {
    console.log("Connection Sueesfull");
  }
};

module.exports = connectToDb;
