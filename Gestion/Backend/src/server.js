import express from 'express';
import dotenv from 'dotenv';
import database from './db/db';
import cors from 'cors';


dotenv.config();
const app = express();
app.use(cors());



database().then(() => {
    console.log(`Database is connected ${process.env.MONGO_DB_URL}`);
  });
  const PORT = process.env.APPLICATION_PORT || 4005;
  console.log(process.env.MONGO_DB_URL)
  app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`);
  });
  