import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Job_Seeking",
    }).then(() => {
        console.log("Connected to databse.");
    }).catch((err) => {
        console.log(`Some error occured while connecting to database. ${err}`);
    });
};