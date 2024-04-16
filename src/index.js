const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const subs = require("./models/subscribers.js");
const subscriberRouter = require("./app.js");
const HomeRouter = require("./homeRouter.js");
const path = require("path");

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/subscribers", subscriberRouter);
app.use("/", HomeRouter);

app.set("views", path.join(__dirname, "views"));

// Connect to DATABASE
// const DATABASE_URL =
//   "mongodb+srv://anilyadavdatabase:anilyadav8068@cluster0.dcyqs5c.mongodb.net/subscribers"; //
const DATABASE_URL =
  "mongodb+srv://anilyadavdatabase:anilyadav8068@cluster0.dcyqs5c.mongodb.net/subscribers";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
