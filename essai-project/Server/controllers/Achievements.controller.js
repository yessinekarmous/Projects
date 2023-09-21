const { Achievements } = require("../models/Achievements.model");

module.exports.CreatePlayer = async (req, res) => {
  const { body } = req;
  try {
    const createdPlayer = await Achievements.create(body);
    res.status(200).json(createdPlayer);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindAll = async (req, res) => {
  try {
    const allPlayers = await Achievements.find();
    res.status(200).json(allPlayers);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindOne = async (req, res) => {
  const { params } = req;
  try {
    const onePlayer = await Achievements.findById(params.id);
    res.status(200).json(onePlayer);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Update = async (req, res) => {
  const { params, body } = req;
  try {
    const updatedPlayer = await Achievements.findByIdAndUpdate(
      params.id,
      body,
      { new: true },
      { runValidators: true }
    );
    res.status(200).json(updatedPlayer);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Delete = async (req, res) => {
  const { params } = req;
  try {
    const deletedPlayer = await Achievements.findByIdAndDelete(params.id);
    res.status(200).json(deletedPlayer);
  } catch (err) {
    res.status(400).json(err);
  }
};
