const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    Email: [
      {
        type: String,
        minlength: 1,
        required: [true, "At least one Email is required"],
      },
    ],
    PhoneNumber: [
      {
        type: String,
        minlength: 1,
        required: [true, "At least one Phone Number is required"],
      },
    ],
    Location: [
      {
        type: String,
        minlength: 1,
        required: [true, "At least one Location is required"],
      },
    ],
  },
  { timestamps: true }
);

module.exports.Contact = mongoose.model("Contact", ContactSchema);
