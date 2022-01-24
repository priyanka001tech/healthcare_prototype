import mongoose from "mongoose";

const DoctorModel_member = mongoose.Schema(
  {
    name: { type: String, required: true },
    specialist: { type: String, required: true },
    career: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timeStamps: true,
  }
);

DoctorModel_member.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

DoctorModel_member.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const doctor_model = mongoose.model("member", DoctorModel_member);
module.exports = doctor_model;
