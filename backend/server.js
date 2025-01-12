const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
//const bodyParser = require('body-parser');
const connectDB = require("./config/db");

//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//app.use(bodyParser.json({ limit: '50mb' }));

//importing  routes------------------>

app.use("/api/v1/test", require("./routes/testRoutes")); //for testing 

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(
    `Node Server Running at Port ${port}`
      .bgBlue
  );
});
