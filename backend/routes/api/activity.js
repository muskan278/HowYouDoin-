const express = require("express");
const router = express.Router();
const Activity = require("./../../models/Activity");
const analyzeTone = require("./../../config/watson");

// Save activities
router.post("/new", async (req, res) => {
    const { name, description, mood, link, imageUrl } = req.body;
    try {
        const newActivity = new Activity({
            name,
            description,
            mood,
            link,
            imageUrl,
        });
        await newActivity.save();
        res.json(newActivity);
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
});

router.post("/analyzeTone", async (req, res) => {
    try {
        const text = req.body.text;
        const response = await analyzeTone(text);
        res.json(response);
    } catch (err) {
        console.log(err);
        res.send("Error!");
    }
});

module.exports = router;
