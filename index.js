const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://spsuri777:Spsuresh97@cluster0.ei1xgab.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB", error);
  });

// Parse request bodies as JSON
app.use(bodyParser.json());

// Routes
app.use("/products", productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});