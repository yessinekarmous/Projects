const { Packages } = require("../models/Packages.model");

module.exports.CreatePackage = async (req, res) => {
  try {
    const createdPackage = await Packages.create(req.body);
    res.status(200).json(createdPackage);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindAll = async (req, res) => {
  try {
    const allPackages = await Packages.find();
    res.status(200).json(allPackages);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindOne = async (req, res) => {
  const { params } = req;
  try {
    const onePackage = await Packages.findById(params.id);
    res.status(200).json(onePackage);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Update = async (req, res) => {
  const { params, body } = req;
  try {
    const updatedPackage = await Packages.findByIdAndUpdate(
      params.id,
      body,
      { new: true },
      { runValidators: true }
    );
    res.status(200).json(updatedPackage);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Delete = async (req, res) => {
  const { params } = req;
  try {
    const deletedPackage = await Packages.findByIdAndDelete(params.id);
    res.status(200).json(deletedSponsor);
  } catch (err) {
    res.status(400).json(err);
  }
};
