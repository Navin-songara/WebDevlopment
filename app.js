// // app.js
// var express = require('express');
// var app = express();
// const PORT = 5578;
// app.set('view engine', 'ejs');
// // it set js code execution ejs, ejs is special type js execution engine
// // for java script,
// app.set('view',__dirname +'views');
//     // it set output directory 
//     // _dirname :- represant current directory or current path of current folder
// app.get('/',(req,res)=> {
//     res.render('index'); //render function is used to draw or display ejs or gui page
// });
// app.get('/home',(req,res)=>{
//     let data ={
//         id:'cs1001',
//         name: 'Rajkumar',
//         hobbies: ['playing cricket', 'Singing', 'Dancing', 'Cycling','Listening Music']
//     }
//     res.render('home',{data: data});
// });
// app.listen(PORT,()=>{
//     console.log('Server is running on http://localhost:'+PORT);
// });

// app.js
const express = require('express');
const app = express();
const PORT = 5578;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set views folder (note the correct key: 'views', not 'view')
app.set('views', __dirname + '/views');

// Route for root
app.get('/', (req, res) => {
    res.render('index');
});

// Route for /home
app.get('/home', (req, res) => {
    let data = {
        id: 'cs1001',
        name: 'Rajkumar',
        hobbies: ['playing cricket', 'singing', 'dancing', 'cycling', 'listening music']
    };
    res.render('home', { data: data });
});

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});
