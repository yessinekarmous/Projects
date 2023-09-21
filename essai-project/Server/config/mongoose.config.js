const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports.authenticate = (req, res, next) => {
  console.log("Received userToken:", req.cookies.userToken);
  const token = req.cookies.userToken;
  if (!token) {
    return res.json("Token is missing");
  } else {
    jwt.verify(token, secret, (err, payload) => {
      if (err) {
        res.status(401).json({ verified: false });
      } else {
        next();
      }
    });
  }
};
