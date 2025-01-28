require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/index");
const authRoutes = require("./routes/auth");
const secureRoutes = require("./routes/secure");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/secure", secureRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log("Database connected & models synced!");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
