const User = require("../models/user_model");
const asynchandler = require("express-async-handler");

const register_login_member = asynchandler(async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    res.status(400);
    throw new Error("please enter all fields");
  }
  const finduser = await User.findOne({ phone });
  if (!finduser) {
    const user = await User.create({
      name,
      phone,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        phone: user.phone,
      });
    }
  } else {
    res.status(400);
    throw new Error("failed to create user");
  }
});

module.exports = register_login_member;
