const express = require("express");
const HomeRouter = express.Router();
//for home page
HomeRouter.get("/", async (req, res) => {
  res.render("home.ejs");
});

module.exports = HomeRouter;
