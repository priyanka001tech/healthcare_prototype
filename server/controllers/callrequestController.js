const CALL = require("../models/CALL_req.js");
const asyncHandler = require("express-async-handler");

const sendREQ = asyncHandler(async (req, res) => {
  const { senderID } = req.body;
  const { receiverID } = req.body;
  if (!senderID || !receiverID) {
    console.log("Invalid Data");
    return res.status(400);
  }
  try {
    const config = {
      sender: senderID,
      doctor: receiverID,
    };

    var req = await CALL.create(config);
    req = await req.populate("sender", "name phone");
    req = await req.populate("doctor", "-password");
    res.json(req);
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
});

module.exports = sendREQ;
