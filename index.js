// In this code json file not found so that why we use direct path 
// CRUD operation API
var express=require('express');//express library for express wbapplication 
const PORT=6767;
var app=express();//app is aleas and it is used to access functionally of express library.
//PORT:- port is logical memory address of execution envioment of webapplicattion
var bodypaser=require('body-parser');
// body-parser:- used to read the data from body of webpage requested by client
var cors=require('cors');//cross origin resource sharing:-used to provide permissinon to
//  access this application from different devices.
var fs=require('fs');
// fs-file system -used to read and write data in file.

app.use(cors());//use():- is predefined function and it is known as midleware, middleware
// is execute in memory area,it just work for our application 
app.use(bodypaser.json());//convert data in json
app.use(bodypaser.urlencoded({extended:true}));
// provide permission to encode the data in url.

app.get("/",(req,res)=>{
    res.send("Welcome Default URL Invoked");
    res.end();
});

app.get("/",(req,res)=>{
    fs.readFile("C:\Users\navin\OneDrive\Desktop\New folder\HTML.practice\js.html\expresss.js\empdemo\emp.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err);
            res.end();
        }else{
            res.end(data);
            res.end();
        }
    });

});

app.get("/searchemp/:ecode",(req,res)=>{
    fs.readFile("C:\Users\navin\OneDrive\Desktop\New folder\HTML.practice\js.html\expresss.js\empdemo\emp.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err);
            res.end();

        }
    });

});

app.get("/searchemp/:ecode",(req,res)=>{
    fs.readFile("C:\Users\navin\OneDrive\Desktop\New folder\HTML.practice\js.html\expresss.js\empdemo\emp.json","utf-8",(err,data)=>{
        if(err)
            {
                res.send(err);
                res.end();
    
            }else{
                var found=false,i;
                var elist=JSON.parse(data);
                for(i=0;i<elist.length;i++)
                {
                    if(req,params.ecode==elist[i].ecode)
                    {
                        found=true;
                        var obj={
                            ecode:elist[i].ecode,
                            ename:elist[i].ename,
                            esal:elist[i].esal,
                            dept:elist[i].dept
                        };
                        res.send(JSON.stringify(obj));
                        //JSON.stringify() :- function convert object type json type
                        res.end();
                        
                    }
                }
                if(found==false)
                {
                    res.send("Data Not Found");
                    res.end();
                }
            }
    });
});
