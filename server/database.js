import mongoose from "mongoose";
import { MONGOOSE_URI } from "./config.js";

export const DBconnection = async () => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true});
        console.log("db is connected");
    }catch(err){
        console.log(err);
    }
}