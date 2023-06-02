require("dotenv").config();
const { sequelize } = require("./database/models");
const { server } = require("./server/Index");
const PORT = process.env.PORT || 3300;
const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
};
server.listen(PORT, () => {
  console.log(`Server is live at localhost:${PORT}`);
  connectDb();
});
