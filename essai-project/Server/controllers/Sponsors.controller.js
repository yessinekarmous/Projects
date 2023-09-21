const { Sponsors } = require("../models/Sponsors.model");

module.exports.CreateSponsor = async (req, res) => {
  try {
    const createdSponsor = await Sponsors.create(req.body);
    res.status(200).json(createdSponsor);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindAll = async (req, res) => {
  try {
    const allSponsors = await Sponsors.find();
    res.status(200).json(allSponsors);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindOne = async (req, res) => {
  const { params } = req;
  try {
    const oneSponsor = await Sponsors.findById(params.id);
    res.status(200).json(oneSponsor);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Update = async (req, res) => {
  const { params, body } = req;
  try {
    const updatedSponsor = await Sponsors.findByIdAndUpdate(
      params.id,
      body,
      { new: true },
      { runValidators: true }
    );
    res.status(200).json(updatedSponsor);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Delete = async (req, res) => {
  const { params } = req;
  try {
    const deletedSponsor = await Sponsors.findByIdAndDelete(params.id);
    res.status(200).json(deletedSponsor);
  } catch (err) {
    res.status(400).json(err);
  }
};
