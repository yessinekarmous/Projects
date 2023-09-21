const { Players } = require("../models/Players.model");

module.exports.CreatePlayer = async (req, res) => {
  try {
    const createdPlayer = await Players.create(req.body);
    res.status(200).json(createdPlayer);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindAll = async (req, res) => {
  try {
    const allPlayers = await Players.find();
    res.status(200).json(allPlayers);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindOne = async (req, res) => {
  const { params } = req;
  try {
    const onePlayer = await Players.findById(params.id);
    res.status(200).json(onePlayer);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Update = async (req, res) => {
  const { params, body } = req;
  try {
    const updatedPlayer = await Players.findByIdAndUpdate(
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
    const deletedPlayer = await Players.findByIdAndDelete(params.id);
    res.status(200).json(deletedPlayer);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.DeleteAll = async (req, res) => {
  try {
    const deletedPlayer = await Players.deleteMany();
    res.status(200).json(deletedPlayer);
  } catch (err) {
    res.status(400).json(err);
  }
};
