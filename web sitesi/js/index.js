

var index=1;
var i;

document.getElementById("left").onclick=function(){
    plusDiv(-1)};
document.getElementById("right").onclick=function(){
    plusDiv(1)};
function plusDiv(n){
    show(index+=n);
}
function show(n){
    var x=document.getElementsByClassName("slider-img");
    if(n>x.length) {index=1}
    if(n<1) {index=x.length} //soldaki resimler 
    for(i=0; i<x.length; i++){
        x[i].style.display="none";
    }
    x[index-1].style.display="block";
    setTimeout(autoshow,5000);
};
autoshow();
function autoshow(){
    var x = document.getElementsByClassName("slider-img");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    index++;
    if(index>x.length){index=1}
    x[index-1].style.display="block";
    setTimeout(autoshow,5000);
};


/*

function opentext(){
    var text=document.getElementById("text");
    if(text.style.display=="none"){
        text.style.display="block";
    }
    else{
        text.style.display="none";
    }
}
var coll = document.getElementById("box");
var i;

for (i = 0; i < coll.length; i++) {
    var text = this.nextElementSibling;
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
}*/