import mongoose from "mongoose";

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://llucky:llucky123@cluster0.zrwmtu7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/agni`, {
        

      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  export default connectDB;