const { Team } = require("../models/Teams.model");

module.exports.CreateTeam = async (req, res) => {
  try {
    const createdTeam = await Team.create(req.body);
    res.status(200).json(createdTeam);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindAll = async (req, res) => {
  try {
    const allTeams = await Team.find();
    res.status(200).json(allTeams);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindOne = async (req, res) => {
  const { params } = req;
  try {
    const oneTeam = await Team.findById(params.id);
    res.status(200).json(oneTeam);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Update = async (req, res) => {
  const { params, body } = req;
  try {
    const updatedTeam = await Team.findByIdAndUpdate(
      params.id,
      body,
      { new: true },
      { runValidators: true }
    );
    res.status(200).json(updatedTeam);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Delete = async (req, res) => {
  const { params } = req;
  try {
    const deletedPlayer = await Team.findByIdAndDelete(params.id);
    res.status(200).json(deletedPlayer);
  } catch (err) {
    res.status(400).json(err);
  }
};
