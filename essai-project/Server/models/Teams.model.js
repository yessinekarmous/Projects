const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    TeamName: {
      type: String,
      required: [true, "Team name is required."],
    },
    ContactPerson: {
      type: String,
      required: [true, "Contact person is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required, please provide it."],
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address."],
    },
    ContactPhoneNumber: {
      type: String,
      required: [true, "Contact phone number is required."],
    },
    DesiredPositions: {
      type: [String], // Liste des postes recherchés (par exemple: ["GK", "ST", "MF"])
    },
    Budget: {
      type: Number, // Budget disponible pour le recrutement
    },
    AdditionalInfo: {
      type: String, // Informations complémentaires sur l'équipe et les besoins
    },
  },
  { timestamps: true }
);

module.exports.Team = mongoose.model("Team", TeamSchema);
