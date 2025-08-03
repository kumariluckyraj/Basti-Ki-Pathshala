import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  role: String, // e.g., 'intern', 'admin'
  motivation: String,
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);
