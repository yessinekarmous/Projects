const { Contact } = require("../models/ContactInfo.model");

module.exports.CreateContact = async (req, res) => {
  try {
    const createdContact = await Contacts.create(req.body);
    res.status(200).json(createdContact);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindAll = async (req, res) => {
  try {
    const allContacts = await Contacts.find();
    res.status(200).json(allContacts);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.FindOne = async (req, res) => {
  const { params } = req;
  try {
    const oneContact = await Contacts.findById(params.id);
    res.status(200).json(oneContact);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Update = async (req, res) => {
  const { params, body } = req;
  try {
    const updatedContact = await Contacts.findByIdAndUpdate(
      params.id,
      body,
      { new: true },
      { runValidators: true }
    );
    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.Delete = async (req, res) => {
  const { params } = req;
  try {
    const deletedContact = await Contacts.findByIdAndDelete(params.id);
    res.status(200).json(deletedContact);
  } catch (err) {
    res.status(400).json(err);
  }
};
