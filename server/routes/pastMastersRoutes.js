// server/routes/pastMastersRoutes.js
const express = require("express");
const pastMastersController = require("../controllers/pastMastersController");

const router = express.Router();

// Route to get past masters data
router.get("/api/pastmasters", pastMastersController.getPastMastersData);

module.exports = router;
