// 2 
var expres=require("express");
var app=expres();
const PORT=5566;
app.get("./student",(req,res)=>{
    var name=req.query.sname;
    console.log("Data Recived from client"+name);
    res.send("Data Sent to server");
        res.end();
    
})

app.listen((PORT),()=>{
    console.log("Server is Running on PORT"+PORT);
})

// Run program form terminal >node index.js
// then open browser and type bellow address
// http://localhost:5566/student/?name=amit