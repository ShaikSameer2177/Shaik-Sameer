window.onload = function(){

  let user = localStorage.getItem("savedUser");

  if(user){
    document.getElementById("sname").innerHTML = user;
  }else{
    document.getElementById("sname").innerHTML = "Admin Student";
  }

}

function logout(){
  window.location.href = "login.html";
}