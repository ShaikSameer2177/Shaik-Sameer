function login() {
    let u = document.getElementById('user').value;
    let p = document.getElementById('pass').value;
    if (u === 'admin' && p === '1234') {
        window.location = 'dashboard.html';
    } else {
        document.getElementById('msg').innerHTML = 'Wrong login';
    }
}window.onload = function(){

  let savedUser = localStorage.getItem("savedUser");

  if(savedUser){
    document.getElementById("user").value = savedUser;
    document.getElementById("remember").checked = true;
  }

}

function login(){

  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let remember = document.getElementById("remember").checked;
  let msg = document.getElementById("msg");

  if(user === "admin" && pass === "1234"){

    if(remember){
      localStorage.setItem("savedUser", user);
    }else{
      localStorage.removeItem("savedUser");
    }

    msg.innerHTML = "Login Successful ✅";

    setTimeout(()=>{
      window.location.href = "dashboard.html";
    },800);

  }else{
    msg.innerHTML = "Wrong Username or Password ❌";
  }

}