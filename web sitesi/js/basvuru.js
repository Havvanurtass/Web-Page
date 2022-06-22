function val(){
    var last=document.form.lastname.value;
    var email=document.form.email.value;
    var phone=document.form.phone.value;
    var name=document.form.name.value;
    if(name==""|| name==null){
        name_error.style.display= "block";
        return false;
    } 
    else{
        name_error.style.display="none";
    }
    if(last=="" || last==null){
        last_error.style.display= "block";
        return false;
    }
    else{
        last_error.style.display="none";
    }
    if(phone==""||phone==null){
        phone_error.style.display="block";
        return false;
    }
    else{
        phone_error.style.display="none";
    }
    if((phone.lenght<10)||(phone.lenght>10)){
        phone_nerror.style.display="block";
        return false;
    }
    else{
        phone_nerror.style.display="none";
    }
    if(email==""||email==null){
        email_error.style.display="block";
        return false;
    }
    else{
        email_error.style.display="none";
    }
    if((name_error!=""||email_error!=""||phone_error!=""||last_error!="")){
    var message="Başvurunuz Başarılı Bir şekilde Gönderilmiştir.Sizinle En kısa Sürede İletişime Geçilecektir.";
    alert(message);}
};


var coll = document.getElementsByClassName("btn");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var text = this.nextElementSibling;
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  });
};



