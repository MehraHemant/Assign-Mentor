import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import studentRoutes from "./routes/studentRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/student", studentRoutes)
app.use("/mentor", mentorRoutes)


app.use(notFound);
app.use(errorHandler);

app.listen(8080, ()=>{
    mongoose.connect(process.env.MONGODB)
    .then(()=>console.log("Connected to MongoDB"))
})