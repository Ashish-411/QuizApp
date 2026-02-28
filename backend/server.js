require("dotenv").config();
const express = require("express");
const connectDB = require("./database/connection");

//express setup
const app = express();
app.use(express.json());
//call the database
connectDB();

//api end points
app.get("/", (req,res) =>{
    res.send("Quiz APP backend is running");
});
//seperating routers
app.use("/api/users",require("./routes/userRoutes"));

//server start
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
});