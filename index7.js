// var express=require('express');
// var app=express();
// var bodyParser=require('body-parser');

// var const PORT=9122;

// app.get("/getmethod",(req,res)=>
// {
//     console.log("CLient request for get method");
//     res.send("Get Request Accepted by server");
//     res.end();
// });

// app.post("/postmethod",(req,res)=>{
// console.log("Client request Accepted by server");
// res.end();
// });
// app.put("/putmethod",(req,res)=>{
//     console.log("/putmethod,(req,res)=>{
//         console.log("client request for put Request Accepted by server");
//         res.end();
// });

// app.delete("/deletemethod",(req,res)=>{
//     console.log("client request Accepted by server");
//     res.end();
// });

// app.get("/".(req,res)=>{
//     console.log("client Request for default method");
//     res.send("client Request Accepted by server for default");
//     res.end();
// });

// app.listen(PORT,()=>{
//     console.log("Server is Running on PORT"+PORT);
// });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 9122;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET Method
app.get("/getmethod", (req, res) => {
    console.log("Client request for GET method");
    res.send("GET Request Accepted by server");
});

// POST Method
app.post("/postmethod", (req, res) => {
    console.log("Client request for POST method");
    res.send("POST Request Accepted by server");
});

// PUT Method
app.put("/putmethod", (req, res) => {
    console.log("Client request for PUT method");
    res.send("PUT Request Accepted by server");
});

// DELETE Method
app.delete("/deletemethod", (req, res) => {
    console.log("Client request for DELETE method");
    res.send("DELETE Request Accepted by server");
});

// Default Route
app.get("/", (req, res) => {
    console.log("Client request for default method");
    res.send("Client request accepted by server for default route");
});

// Start Server
app.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT);
});
