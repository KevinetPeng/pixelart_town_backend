const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plotSchema = new Schema(
    {
        houseType: {
            type: Number,
            required: true,
        },
        characterType: {
            type: Number,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Plot = mongoose.model("Plot", plotSchema);

module.exports = Plot;