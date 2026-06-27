import express from 'express';
import dotenv from 'dotenv'
import connnectDb from './database/db.js';
import userRoutes from './routes/userRoutes.js'
import pinRoutes from './routes/pinRoutes.js';
import cookieParser from 'cookie-parser'
import cloudinary from 'cloudinary';
dotenv.config();
const app = express();

const port = process.env.PORT;

cloudinary.v2.config({
    cloud_name:process.env.Cloud_Name,
    api_key:process.env.Cloud_Api,
    api_secret:process.env.Cloud_Secret,
})
//using middleware

app.use(express.json());
app.use(cookieParser());

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`)
    connnectDb();
})

app.use("/api/user",userRoutes);
app.use("/api/pin",pinRoutes)