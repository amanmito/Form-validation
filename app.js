"use strict"

var username = document.getElementById('name');
var Name_err = document.getElementById('name_err');

var gmail = document.getElementById('email');
var gmail_err = document.getElementById('email_err');
var email_regax = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;

var password = document.getElementById('pass');
var pass_err = document.getElementById('pass_err');
var upper = /[A-Z]/;
var lower = /[a-z]/;
var number = /[0-9]/;
var spsl = /[#,@,%]/;
var minchar = password.value.length <8;

var rpassword = document.getElementById('rpass');
var rpass_err = document.getElementById('rpass_err');

function  sub(){
  if (username.value==""){
    Name_err.innerHTML="Please Enter Your Name";
    username.style.border="3px solid red";
    username.focus(); 
    return false;
  }
  else if(gmail.value==""){
    gmail_err.innerHTML="Enter your Corrcect Email";
    gmail.style.border= "3px solid red";
    gmail.focus();
    return false;
 }
 else if(!email_regax.test(gmail.value)){
   gmail_err.innerHTML="Please Enter Correct email"
   gmail.style.border ="3px solid red";
   gmail.focus();
   return false;
}
else if (password.value==""){
  pass_err.innerHTML="Enter Password"
  password.style.border ="3px solid red";
  password.focus();
  return false;
}

else if(!upper.test(password.value) ||!lower.test(password.value) ||!number .test(password.value) ||!spsl .test(password.value)||!minchar){
  pass_err.innerHTML = "Enter Correct Password";
  password.style.border ="3px solid red";
  password.focus();
  return false;
}
else if(rpassword.value ==""){
  rpass_err.innerHTML = "Enter Correct Password";
  rpassword.style.border ="3px solid red";
  rpassword.focus();
  return false;
}
else if(password.value !=rpassword.value){
  rpass_err.innerHTML = "Enter Correct Password";
  rpassword.style.border ="3px solid red";
  rpassword.focus();
  return false;
}
}




function password_show_hide() {
    var x = document.getElementById("pass");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
      
    }
  }
  function rpassword_show_hide() {
    var x = document.getElementById("rpass");
    var show_eye = document.getElementById("rshow_eye");
    var hide_eye = document.getElementById("rhide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
      
    }
  }
  function valid(){
    if(username.value !=""){
        Name_err.innerHTML = "";
        username.style.border ="3px solid green";
    }
    if(gmail.value !=""){
        gmail_err.innerHTML = "";
        gmail.style.border ="3px solid green";
    }
}


username.addEventListener('blur',valid);
gmail.addEventListener('blur',valid);


  