const express = require("express");
const register_login_member = require("../controllers/userController.js");
const {
  registerDoctor,
  authUser,
  All_Doctor,
} = require("../controllers/doctorController.js");
const Auth = require("../Middleware/authMiddleware.js");
const router = express.Router();
router.route("/login").post(register_login_member);
router.route("/LoginDoctor").post(authUser);
router.route("/").post(registerDoctor);
router.route("/GetDocs").get(All_Doctor);
module.exports = router;
