document.getElementById("login").onclick=function(){
    login()};

var users=[{username:"Admin",password:"Admin"},
           {username:"havvanur",password:"taş"}];
var user;
var pass;
var i;


function control(){
    user=document.getElementById("fname").value;
    pass=document.getElementById("pass").value;
    if((pass!="")&&(user!="")){
        for(i of users){
            if((i.username==user) && (i.password==pass)){
                return true;
            } 
        }
    }
}
function login(){
    control();
    if (control()){
        window.open("basvuru.html","_self");
    }
    else{
        login_error.style.display="block";
    }
}
