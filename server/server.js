const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
connectDB();
require("dotenv").config();
app.use(express.json());
const app = express();
app.use(express.json());
app.use("/api/user", router);

const port = 5000 || process.env.PORT;
const server = app.listen(port, () => {
  console.log(`listening port ${port}`);
});
