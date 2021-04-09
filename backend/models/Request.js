const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    accepted: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Request = mongoose.model("request", RequestSchema);

module.exports = Request;
