const express = require("express");
const app = express();
const router = express.Router();
const subs = require("./models/subscribers.js");

//home page
router.get("/", async (req, res) => {
  res.render("home.ejs");
});

// /subscribers endpoint
router.get("/subscribers", async (req, res) => {
  try {
    // const AllSubscribers = await subs.find({});
    // res.json(AllSubscribers);
    let subscribers = await subs.find(); // Retrieve all subscribers from the schema/model
    res.status(200).json(subscribers); // Send the subscribers as a JSON response with a status of 200 (OK)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// /subscribers/names endpoint
router.get("/subscribers/names", async (req, res) => {
  //remove nothing here
  // Find all subscribers and project only the name and subscribedChannel fields
  try {
    const subscribers = await subs.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );

    res.json(subscribers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// /subscribers/:id endpoint
router.get("/subscribers/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const SpecificSub = await subs.findById(id);
    res.json(SpecificSub);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
