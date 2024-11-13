const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const menuRoutes = require("./routes/menuRoutes");
const itemRoutes = require("./routes/itemsRoutes");

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

connectDB();

app.use("/api", menuRoutes);
app.use("/api", itemRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
