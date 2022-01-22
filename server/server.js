const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
//const PORT = process.env.PORT || 5000;
require("dotenv").config();
const server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
const server_host = process.env.YOUR_HOST || '0.0.0.0';

app.use(cors());
app.use(morgan("dev"));
connectDB();

//define routes and api
app.use(express.json({extended: false}));

app.use("/api/users", require("./routes/userAPI"));
app.use("/api/products", require("./routes/productsAPI"));
app.use("/api/auth", require("./routes/authAPI"));
app.use("/api/profile", require("./routes/ProfileAPI"));
app.use("/api/cart", require("./routes/cartAPI"));
app.use("/api/payment", require("./routes/PaymentAPI"));

app.get("/", (req, res)=>{
    res.send("App is up");
});

app.listen(server_port, server_host, ()=>{
    console.log(`Server is listening `)
});