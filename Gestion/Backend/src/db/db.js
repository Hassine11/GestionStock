import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    return (err);
  }
  return true;
};

export default database;
