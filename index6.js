// var express=require("express");
// var app=express();
// var bodyParser=require('body parser');

// var cors=require('cors');
// const PORT=5577;

// app.use(bodyParser.json());
// app.use(bodyParser.uriencoded({
//     extended:true
// )});
// app.use(cors()};

// app.get("/"(req,res)=>{
//     req.sendFile(C:\Users\navin\OneDrive\Desktop\New folder\HTML.practice\js.html\expresss.js\student.html)
// }}//Send file function return a file from server to client 

// app.post("/savedata",(req,res)=>{
//     console.log("Data Recieved from client:-")
//     console.log("Roll No="+req.body.rno);
//     console.log("Name="+req.body.sname);
//     console.log("Marks="+req.body.marks);
//     console.log("Data submitted to server ");
// });

// app.listen(PORT,()=>{
//     console.log("Server is running at http://localhost:"+PORT);
// })





// })

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const PORT = 5577;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'student6.html')); 
    // Update path if student.html is in a different folder
});

// Route to handle POST data
app.post("/savedata", (req, res) => {
    console.log("Data Received from client:");
    console.log("Roll No = " + req.body.rno);
    console.log("Name = " + req.body.sname);
    console.log("Marks = " + req.body.marks);
    res.send("Data submitted successfully!");
});

// Start server
app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});
