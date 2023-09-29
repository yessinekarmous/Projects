const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;

module.exports = {
  register: async (req, res) => {
    const { email } = req.body;
    const VerifEmail = await User.findOne({ email });
    if (VerifEmail) {
      return res.status(400).json({ message: "Email already in use" });
    } else {
      try {
        const user = new User(req.body);
        const newUser = await user.save();
        // const userToken = jwt.sign({ id: newUser._id }, SECRET);
        // console.log("Register User Token: " + userToken);
        // console.log(newUser);
        // res
        //   .status(201)
        //   .cookie("userToken", userToken, { httpOnly: true })
        //   .json(newUser);
        res.status(201).json(newUser);
      } catch (err) {
        const validationErrors = [];
        if (err.errors) {
          for (const key of Object.keys(err.errors)) {
            validationErrors.push(err.errors[key].message);
          }
        }
        res.status(400).json({ validationErrors });
      }
    }
  },

  login: async (req, res) => {
    const userFromDB = await User.findOne({ email: req.body.email });
    if (!userFromDB) {
      res.status(404).json({ message: "User not existant" });
    } else {
      try {
        const isPasswordValid = await bcrypt.compare(
          req.body.password,
          userFromDB.password
        );
        if (isPasswordValid) {
          const userToken = jwt.sign({ id: userFromDB._id }, SECRET);
          console.log("Login User Token: " + userToken, "-------------------");
          if (userFromDB.role === "player") {
            if (userFromDB.Situation === "accepted") {
              res
                .status(201)
                .cookie("userToken", userToken, { httpOnly: true })
                .json({
                  userFromDB,
                  message: "Login succesful",
                  userToken: userToken,
                });
            } else if (userFromDB.Situation === "rejected") {
              res
                .status(406)
                .json({ message: "Application has been rejected" });
            } else {
              res
                .status(408)
                .json({ message: "Application not yet responded" });
            }
          } else {
            res
              .status(201)
              .cookie("userToken", userToken, { httpOnly: true })
              .json({
                userFromDB,
                message: "Login succesful",
                userToken: userToken,
              });
          }
        } else {
          res.status(401).json({ message: "Invalid password" });
        }
      } catch (err) {
        res.status(400).json(err);
      }
    }
  },

  logout: async (req, res) => {
    res.clearCookie("userToken");
    res.json({ successMessage: "User logged out" });
  },
  getAll: async (req, res) => {
    try {
      // const isAdmin = checkAdminStatus(req.user);

      // if (!isAdmin) {
      //   return res.status(403).json({ message: "Access denied. Only admins can perform this action." });
      // }

      // Récupérez tous les utilisateurs
      const users = await User.find();

      if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
      }

      // Retournez les données des utilisateurs
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Server error" });
    }
  },
  deleteAllUsers: async (req, res) => {
    const { params } = req;
    try {
      const result = await User.findByIdAndDelete(params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      console.error("Error deleting users:", error);
      res.status(500).json({ message: "Server error" });
    }
  },
  deleteAllUserss: async (req, res) => {
    const { params } = req;
    try {
      const result = await User.deleteMany();
      res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      console.error("Error deleting users:", error);
      res.status(500).json({ message: "Server error" });
    }
  },

  FindOne: async (req, res) => {
    const { email } = req.params;

    try {
      const oneUser = await User.findOne({ email });
      res.status(200).json(oneUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  Update: async (req, res) => {
    const { email } = req.params;
    const { body } = req;
    try {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        body,
        { new: true },
        { runValidators: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
