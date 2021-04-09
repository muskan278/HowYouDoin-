const mongoose = require("mongoose");

const ActivityDoneSchema = new mongoose.Schema({
    activity:
    {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Activity",
            required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const ActivityDone = mongoose.model("ActivityDone", AcvitityDoneSchema);

module.exports = ActivityDone;