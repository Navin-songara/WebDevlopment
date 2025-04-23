// load file in response :- express js provide functionality to return a file form 
// server to client means we can return a static file in response

// import express from'express';
// import path, { dirname } from 'path';

// // path library provides function to read path of web application directory 

// import { fileURLToPath } from 'url';

// //fileURLToPATH :- used to read url 

// var app=express();

// app.use(express.static('public'));
// app.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });
// app.get("/",(req,res)=>{
//     res.send("Hello MERN Programming World:");
//     res.end();
// });
// app.get("Showfile",(req,res,next)=>{
//     const filename=fileURLToPath(import.meta.url);

//     const dis name=path.dirname(--filename);

//     const retfile=path.join(--dirname,'text.html');

//     res.sendFile(.retfile);
// });

import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Convert URL to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to serve static files from "public" directory
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Route for "/"
app.get("/", (req, res) => {
  res.send("Hello MERN Programming World!");
});

// Route to show a file
app.get("/showfile", (req, res) => {
  const retfile = path.join(__dirname, 'text.html');
  res.sendFile(retfile);
});

