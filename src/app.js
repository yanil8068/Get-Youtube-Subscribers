const express = require("express");
const app = express();
const router = express.Router();
const subs = require("./models/subscribers.js");

// /subscribers endpoint
router.get("/", async (req, res) => {
  try {
    const AllSubscribers = await subs.find({});
    res.send(AllSubscribers);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// /subscribers/names endpoint
router.get("/names", async (req, res) => {
  //remove nothing here
  // Find all subscribers and project only the name and subscribedChannel fields
  try {
    const subscribers = await subs.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );

    res.send(subscribers);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// /subscribers/:id endpoint
router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const SpecificSub = await subs.findById(id);
    res.send(SpecificSub);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
