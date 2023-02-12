const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected successfully : ${db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
