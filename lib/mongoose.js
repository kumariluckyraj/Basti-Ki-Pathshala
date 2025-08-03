import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.MONGODB_URI, {
    dbName: "bastikipathshala", // use your own DB name
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
