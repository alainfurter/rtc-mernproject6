const express = require("express");
require("./config/db");

const baseRouter = require("./routes/baseRoutes");
const bookRouter = require("./routes/bookRoutes");
const publisherRouter = require("./routes/publisherRoutes");

const { clearAndInsertData } = require("./models/db-data");
const app = express();

app.use(express.json());

clearAndInsertData();

app.use("/books", bookRouter);
app.use("/publishers", publisherRouter);
app.use("/", baseRouter);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
