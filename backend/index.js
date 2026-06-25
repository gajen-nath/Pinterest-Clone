import express from 'express';
import dotenv from 'dotenv'
import connnectDb from './database/db.js';
import userRoutes from './routes/userRoutes.js'
dotenv.config();
const app = express();

const port = process.env.PORT;

//using middleware

app.use(express.json());

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`)
    connnectDb();
})

app.use("/api/user",userRoutes);