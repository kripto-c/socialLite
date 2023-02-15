import mongoose from "mongoose";
import {MONGODB_URI } from './config.js'

export const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB connected ${conn.connection.name}`);

  } catch (error:unknown) {
     console.error(`Error ${error}`);
     process.exit(1);    
  }
}
