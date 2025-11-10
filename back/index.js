import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './usermodeldb/user.js';
import signup_router from './usermodeldb/signup.js';
import login_router from './usermodeldb/login.js';
import router from './usermodeldb/userspost.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", login_router);
app.use("/",router)

app.use('/', signup_router);
app.get('/', (req, res) => {
  res.send('Backend is running');
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});