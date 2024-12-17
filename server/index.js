// server/index.js
const express = require("express");
const cors = require("cors");
const pastMastersRoutes = require("./routes/pastMastersRoutes");

const app = express();
const port = 5001;

// Enable CORS
app.use(cors());

// Use past masters routes
app.use(pastMastersRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
