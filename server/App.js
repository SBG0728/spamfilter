const express = require("express");
const bodyParser = require("body-parser");
const filterRoutes = require("./Routes/FilterRoutes");
const emailRoutes = require("./Routes/EmailRoutes");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/filter", filterRoutes);
app.use("/email", emailRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
