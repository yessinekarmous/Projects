const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//--The Schema--//

const AchievementsSchema = new mongoose.Schema(
  {
    PlayerContractedName: {
      type: String,
      minLength: 1,
      required: [true, "The Name Of the contracted player is required "],
    },
    PlayerContractedImg: {
      type: "String",
      required: [true, "The path to the contracted player's image is required"],
    },
    Show: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
  },
  { timestamps: true }
);

module.exports.Achievements = mongoose.model(
  "Achievements",
  AchievementsSchema
);
