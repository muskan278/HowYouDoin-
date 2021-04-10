const express = require("express");
const router = express.Router();
const ActivityDone = require("../..models/activitydone");
const auth = require("./../../middleware/auth");

router.post("/:id", auth, async (req, res) => {
  try {
    if (req.user.category === "user") {
      return res.status(400).json({ msg: "You cannot view this" });
    }
    let activityDone = new ActivityDone({
      activity: req.params.id,
      user: req.user.id,
    });
    await activityDone.save();
    res.json(activityDone);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error!");
  }
});
