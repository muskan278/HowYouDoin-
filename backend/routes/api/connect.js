const express = require("express");
const router = express.Router();
const User = require("./../../models/User");
const auth = require("./../../middleware/auth");
const Request = require("./../../models/Request");
const Profile = require("../../models/Profile");
const Therapist = require("../../models/Therapist");

// Send request
router.get("/add/:id", auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).json({ msg: "User not found!" });
        }
        if (req.user.category === user.category) {
            return res.status(400).json({ msg: "You cannot add another user" });
        }
        const request = new Request({ from: req.user.id, to: user._id });
        await request.save();
        res.json(request);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error!");
    }
});

// Confirm request
router.get("/confirm/:id", auth, async (req, res) => {
    try {
        const request = await Request.findById(req.params.id);
        if (req.user.category === "user") {
            const profile = await Profile.findOne({ user: req.user.id });
            profile.therapist = request.from;
            const therapist = await Therapist.findOne({ user: request.from });
            therapist.client.push(request.to);
            await profile.save();
            await therapist.save();
            await Request.findByIdAndDelete(request._id);
            return res.json({ msg: "Therapist added!" });
        }
        if (req.user.category === "therapist") {
            const profile = await Profile.findOne({ user: request.from });
            profile.therapist = request.to;
            const therapist = await Therapist.findOne({ user: req.user.id });
            therapist.client.push(request.from);
            await profile.save();
            await therapist.save();
            await Request.findByIdAndDelete(request._id);
            return res.json({ msg: "Client added!" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error!");
    }
});

module.exports = router;
