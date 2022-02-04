const dasha = require("@dasha.ai/sdk");
const express = require("express");

const app = express();
const fs = require("fs");
const connectDB = require("./config/db.js");
connectDB();
const router = require("./routes/registrationRoutes.js");
const { not_found, error_handler } = require("./Middleware/errorMiddleware");

require("dotenv").config();
app.use(express.json());

/* 
////////////______DASHA PHN AI____///////////////
*/
async function main(num) {
  const app = await dasha.deploy("./app");

  app.connectionProvider = async (conv) =>
    conv.input.phone === "chat"
      ? dasha.chat.connect(await dasha.chat.createConsoleChat())
      : dasha.sip.connect(new dasha.sip.Endpoint("default"));

  app.ttsDispatcher = () => "dasha";

  app.setExternal("function1", (args) => {
    //TODO: implement your external function here
    console.log(args.log);
  });

  await app.start();

  const conv = app.createConversation({ phone: num });

  if (conv.input.phone !== "chat") conv.on("transcription", console.log);

  const logFile = await fs.promises.open("./log.txt", "w");
  await logFile.appendFile("#".repeat(100) + "\n");

  conv.on("transcription", async (entry) => {
    await logFile.appendFile(`${entry.speaker}: ${entry.text}\n`);
  });

  conv.on("debugLog", async (event) => {
    if (event?.msg?.msgId === "RecognizedSpeechMessage") {
      const logEntry = event?.msg?.results[0]?.facts;
      await logFile.appendFile(JSON.stringify(logEntry, undefined, 2) + "\n");
    }
  });

  const result = await conv.execute();

  console.log(result.output);

  await app.stop();
  app.dispose();

  await logFile.close();
}

/*
/////////////////////////////////////////////////
*/

app.post("/api/supportCall", async (req, res) => {
  const { number } = req.body;
  main(number)
    .catch(console.log("successful"))
    .then((err) => {
      console.log(err);
    });
  res.status(201).json({
    msg: "calling....",
  });
});

app.use("/api/user", router);

app.use(not_found);

//app.use(error_handler);
const port = 5000 || process.env.PORT;
const server = app.listen(port, () => {
  console.log(`listening port ${port}`);
});
