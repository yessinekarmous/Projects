const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema(
  {
    SponsorName: {
      type: String,
      minLength: 1,
      required: [true, "The Name Of the Sponsor is required"],
    },
    Logo: {
      type: String,
      required: [true, "The Logo Of the Sponsor is required"],
    },
    Description: {
      type: String,
      required: [true, "The Description is required"],
    },
  },
  { timestamps: true }
);

module.exports.Sponsors = mongoose.model("Sponsors", SponsorSchema);
