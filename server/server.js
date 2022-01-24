const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
connectDB();
const router = require("./routes/registrationRoutes.js");
const { not_found, error_handler } = require("./Middleware/errorMiddleware");

require("dotenv").config();
app.use(express.json());

app.use("/api/user", router);

app.use(not_found);
app.use(error_handler);
const port = 5000 || process.env.PORT;
const server = app.listen(port, () => {
  console.log(`listening port ${port}`);
});
