// server/controllers/pastMastersController.js
const pastMastersModel = require("../models/pastMastersModel");

const getPastMastersData = (req, res) => {
  pastMastersModel.getPastMasters((err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching past masters data" });
    }
    res.json(data);
  });
};

module.exports = {
  getPastMastersData,
};
