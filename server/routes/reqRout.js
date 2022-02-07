const express = require("express");
const sendREQ = require("../controllers/callrequestController");

const Reqrouter = express.Router();

Reqrouter.route("/call").post(sendREQ);

module.exports = Reqrouter;
