// server/routes/pastMastersRoutes.js
const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Endpoint to fetch past masters
router.get('/api/pastmasters', (req, res) => {
  const query = 'SELECT MasterNumber, Name, StartYear, EndYear, Bio, ImageURL FROM PastMastersList';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching past masters:', err);
      return res.status(500).json({ message: 'Error fetching past masters' });
    }
    res.status(200).json(results);
  });
});

module.exports = router;
