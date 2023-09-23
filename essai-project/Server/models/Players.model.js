const mongoose = require("mongoose");

//-- Le schéma du joueur --//

const PlayerSchema = new mongoose.Schema(
  {
    Fullname: {
      type: String,
      minLength: [1, "First name should have at least 1 character"],
      required: [true, "First name is required, please provide it."],
    },
    Birthdate: {
      type: Date,
      required: [true, "Birth date is required, please provide it."],
    },
    PlayerImg: {
      type: String,
      required: [true, "A personal photo is required ,please provide it"],
    },
    Nationality: {
      type: String,
      minLength: [1, "Nationality should have at least 1 character"],
      required: [true, "Nationality is required, please provide it."],
    },
    CurrentAddress: {
      type: String,
      minLength: [1, "Current Address should have at least 1 character"],
      required: [true, "Current Address is required, please provide it."],
    },
    PhoneNumber: {
      type: String,
      minLength: [1, "Phone number should have at least 1 character"],
      required: [true, "Phone number is required, please provide it."],
    },
    email: {
      type: String,
      required: [true, "Email is required, please provide it."],
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address."],
    },
    PreviousClubs: {
      type: [String],
    },
    CurrentLevel: {
      type: String,
      minLength: [1, "Current level should have at least 1 character"],
      required: [true, "Current level is required, please provide it."],
    },
    Position: {
      type: String,
      enum: [
        "GK",
        "RB",
        "LB",
        "CB",
        "CM",
        "CDM",
        "CAM",
        "LM",
        "RM",
        "RW",
        "LW",
        "ST",
      ],
      required: [true, "At least one Position is required, please provide it."],
    },
    SecondPosition: {
      type: String,
      enum: [
        "GK",
        "RB",
        "LB",
        "CB",
        "CM",
        "CDM",
        "CAM",
        "LM",
        "RM",
        "RW",
        "LW",
        "ST",
      ],
      required: [true, "Position is required, please provide it."],
    },
    PrefferedFoot: {
      type: String,
      enum: ["Left", "Right", "Both"],
    },
    Height: {
      type: Number,
      required: [true, "Height is required, please provide it."],
    },
    Weight: {
      type: Number,
      required: [true, "Weight is required, please provide it."],
    },
    EducationLevel: {
      type: String,
      default: "none",
    },
    MedicalInfo: {
      Allergies: {
        type: String,
        default: "none",
      },
      HistoryOfInjuries: {
        type: String,
        default: "none",
      },
    },
    SocialMediaLinks: {
      LinkedIn: {
        type: String,
        default: "none",
      },
      Twitter: {
        type: String,
        default: "none",
      },
    },
    PerformanceVideos: {
      type: [String], // Stocker les liens vers les fichiers vidéo téléchargés
      required: [true, "At least one performance video is required."],
    },
    ContractHistory: {
      type: String,
      default: "no",
      enum: ["yes", "no"],
    },
    Show: {
      type: Boolean,
      default: false,
    },
    AgencyContract: {
      data: Buffer,
      contentType: String,
    },
    Situation: {
      type: String,
      enum: ["accepted", "rejected", "pending"],
      default: "pending",
    },
    PlayerStatus: {
      type: String,
      enum: ["Free", "Successful"],
      default: "Free",
    },
    // if Situation was Successful
    DestinationClub: {
      type: String,
      default: "",
    },
    TransferAmount: {
      type: String,
      default: "",
    },
    MediaGallery: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// PlayerSchema.methods.addToAchievements = async function () {
//   if (this.PlayerStatus === "Successful") {
//     const Achievements = require("./Achievements.model").Achievements;

//     const achievement = new Achievements({
//       Player: this._id,
//       PlayerContractedName: this.Fullname,
//       PlayerContractedImg: this.PlayerImage,
//       Show: "Yes",
//     });

//     await achievement.save();
//   }
// };
module.exports.Players = mongoose.model("Players", PlayerSchema);
