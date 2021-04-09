const express = require("express"),
    router = express.Router();
const Therapist = require("../../models/Therapist");
const auth = require("./../../middleware/auth");
const { check, validationResult } = require("express-validator");

router.post(
    "/new",
    [
        auth,
        [
            check(
                "description",
                "Description must be of atleast 100 characters"
            ).isLength({ min: 100 }),
            check("location", "Location is required").not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const { description, location } = req.body;
        const therapistFields = { description, location };
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        try {
            let therapist = await Therapist.findOne({ user: req.user.id });
            if (therapist) {
                // update therapist
                therapist = await Therapist.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: therapistFields },
                    { new: true }
                );

                return res.json(therapist);
            }
            // create therapist
            therapist = new Therapist({
                ...therapistFields,
                user: req.user.id,
            });
            await therapist.save();
            res.json(therapist);
        } catch (err) {
            console.log(err);
            res.status(500).send("Server error!");
        }
    }
);

router.get("/all", async (req, res) => {
    try {
        const therapists = await Therapist.find().populate("user", ["name"]);
        res.json(therapists);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error!");
    }
});

router.get("/:id", async (req, res) => {
    try {
        const therapist = await Therapist.findOne({
            user: req.params.id,
        }).populate("user", ["name"]);
        if (!therapist) {
            return res.status(400).json({ msg: "No therapist found!" });
        } else {
            res.json(therapist);
        }
    } catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).json({ msg: "Profile not found!" });
        }
        res.status(500).send("Server error!");
    }
});

module.exports = router;
