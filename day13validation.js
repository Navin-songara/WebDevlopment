function validation(){
    var uname=document.login.uname;
    var pws=document.login.password;

    // alert(uname.value);
    // pws(pws.value);

    if(uname_validation(uname)){
        if(pws_validation(pws,5,32)){

        }else{
            return false;
        }
    }else{
        return false;
    }
}

function uname_validation(userName){
    // alert("uname_validation function"+userName.value)
    var latter=/^[A-Za-z]+$/;
    if(userName.value.match(latter)){
        return true;
    }else{
        alert("Username must be in alphabet charater only");
        return false;
    }
}

function pws_validation(pws,min,max){
    var pws_len=pws.valuelength;
    if(pws_len<min || pws_len>max){
        alert("password length be between "+min+"to"+max);
        return false;
    }else{
        return true;
    }
}