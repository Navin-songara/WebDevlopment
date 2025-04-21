// routing :used to path of web pages of web application. routing manage the refernces of web page. it save response time.
// every seraching

var express=require("express");
var app=express();
var router=express.Router(); //Router():- function provide functionality to define routing
const PORT=5332;
app.use(router);
router.get("/student",(req,res)=>{
    console.log("request for get method from client");
    res.send("get method executed");
    res.end();
});
router.post("/emp",(req,res)=>{
    console.log("router for post method from client");
    res.send("post method executed");
    res.end();
});
app.listen(PORT,()=>{
    console.log("server is running on port"+PORT);
})