import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  otp: String,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // auto delete after 10 min
  },
});

const OTP = mongoose.model("otp", otpSchema);
export default OTP;
