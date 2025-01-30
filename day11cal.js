function calculation(){
    var fvalue=document.getElementById("fvalue").value;
    var svalue=document.getElementById("svalue").value;
    var optr=document.getElementById("optr").value;
// console.log(fvalue);

if(optr==='+'){
    result=parseInt(fvalue)+parseInt(svalue);
}else if(optr==='-'){
    result=fvalue-svalue;
}else if(optr==='*'){
    result=fvalue*svalue;
}else if(optr==='/'){
    result=fvalue/svalue;
}else if(optr==='%'){
    result=fvalue%svalue;
}else{
    result="Invalid Operator";
}
document.getElementById('res').innerHTML="Our result:"+result;
}