// // npm install multer --save :- multer library provides functions 
// // to upload file from client to server, it provides functions to store file at server.

// // Image/file Uploading and downloading from client to server 

// const fs = require('fs');
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const PORT = 5040;
// const cors =require('cors');
// const multer=require("multer");
// const { request } = require('http');
// app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// // code save image to server
// // diskstorage():- function used to store file in server side permanent memory.
// const st = multer.diskStorage({  
//     destination:(req,file,cb)=> {
//         cb(null, 'myimages/')  //set path of folder or directory
//     },
// }) ;
// filename: (req, file, cb)=>{ //get file name form requestbody
    
//     cb(null,file.originalname)
// }
// const upload = multer({storage: st});//store
// app.post('/Uploadimage',upload.single('file'),(req,res)=>
// {
//     res.send("File Uploaded Successfully");
//     res.end();
// });

// app.get("/getimage/:picname",(req,res)=>{
//     const fullPath="C:\Users\navin\OneDrive\Desktop\New folder\HTML.practice\js.html\expresss.js\myimages.js";
//     res.sendFile(fullPath+req.params.picname);
// })

// app.listen(PORT,function(){
//     console.log('Server is running on PORT:',PORT),
// })

// npm install multer --save
// Multer is used to handle file uploads from client to server.

const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require("multer");
const path = require('path');

const PORT = 5040;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create 'myimages' folder if it doesn't exist
const uploadDir = path.join(__dirname, 'myimages');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer disk storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Directory where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use original file name
    }
});

const upload = multer({ storage: storage });

// ------------------ Upload Route ------------------
app.post('/uploadimage', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send("File Uploaded Successfully");
});

// ------------------ Download Route ------------------
app.get("/getimage/:picname", (req, res) => {
    const imagePath = path.join(uploadDir, req.params.picname);

    // Check if the file exists
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send("Image not found.");
        }
        res.sendFile(imagePath);
    });
});

// ------------------ Start Server ------------------
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
