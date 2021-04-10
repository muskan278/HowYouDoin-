const express = require("express");
const router = express.Router();
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const config = require("config");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

// @route GET api/profile/me
// @desc Get current's user's profile
// @access Private
router.get("/user/me", auth, async (req, res) => {
  try {
    const userProfile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);
    if (!userProfile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(userProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Some error occured" });
  }
});

// Create a new user's profile
router.post("/new", auth, async (req, res) => {
  const { medication, problems, address } = req.body;
  let profileFields = {};
  if (problems) {
    profileFields.problems = problems
      .split(",")
      .map((problem) => problem.trim());
  }
  profileFields.medication = medication;
  profileFields.address = address;
  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      // update profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }
    // create profile
    profile = new Profile({ ...profileFields, user: req.user.id });
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error!");
  }
});

// Get all user's name
router.get("/all", auth, async (req, res) => {
  try {
    if (req.user.category === "user") {
      return res.status(400).json({ msg: "You cannot view this" });
    }
    const users = await User.find({ category: "user" }).select("-password");
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error!");
  }
});

// Get the clients' profiles
router.get("/myclients", auth, async (req, res) => {
  if (req.user.category === "user") {
    return res.status(400).json({ msg: "You are not allowed to view this" });
  }
  try {
    const clients = await Profile.find({
      therapist: req.user.id,
    }).populate("user", ["name"]);
    res.json(clients);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error!");
  }
});

// Get a particular user's profile
router.get("/:id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.id,
    }).populate("user", ["name"]);
    if (!profile) {
      return res.status(400).json({ msg: "No profile found" });
    }
    if (profile.therapist !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "You are not allowed to view this profile" });
    }
    return res.json(profile);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error!");
  }
});

module.exports = router;
