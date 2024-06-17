import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName :"MERN JOB SEEKING APPLICATION",
    }).then(() => console.log ("Connected to database")).catch((err) => console.log(`Some error has occurred : ${err}`))
};