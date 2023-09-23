const mongoose = require("mongoose");

const PackagesSchema = new mongoose.Schema(
  {
    PackageName: {
      type: String,
      minLength: 1,
      required: [true, "The Name Of the Package is required"],
    },
    Price: {
      type: Number,
      required: [true, "The Price is required"],
    },
    Datee: {
      type: Date,
      required: [true, "The Date is required"],
    },
    Place: {
      type: String,
      required: [true, "The Place  required"],
    },
    Description: {
      type: String,
      required: [true, "The Description is required"],
    },
  },
  { timestamps: true }
);

module.exports.Packages = mongoose.model("Packages", PackagesSchema);
