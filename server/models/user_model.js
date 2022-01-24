import mongoose from "mongoose";

const userModel_member = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timeStamps: true,
  }
);

const member_model = mongoose.model("member", userModel_member);
module.exports = member_model;
