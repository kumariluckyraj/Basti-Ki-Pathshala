import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phone: String,
    role: {
      type: String,
      enum: ["volunteer", "intern"],
      default: "volunteer",
    },
    motivation: String,
  },
  { timestamps: true }
);

export default mongoose.models.Registration ||
  mongoose.model("Registration", RegistrationSchema);
