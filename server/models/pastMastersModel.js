// server/models/pastMastersModel.js
const db = require("../config/db");

const getPastMasters = (callback) => {
  const query = "SELECT MasterNumber, Name, StartYear, EndYear FROM PastMastersList";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching past masters:", err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getPastMasters,
};
