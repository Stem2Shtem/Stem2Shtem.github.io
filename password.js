var passwordField = document.getElementById('pwd');
var goButton = document.getElementById('submit');


var password = [
  {
    correct:"0",
    path: "Black Hole"
  },
  {
    correct: "1",
    path: "Neutron Star"
  },
  {
    correct: "2",
    path: "Black Dwarf"
  }
]


function saveResult() {
  checkPassword(passwordField.value);
}


function checkPassword(pwd) {
  if (pwd == password[0].correct) {
    setCookie("track","0");
	window.location.href = "loading.html";
  } 
    else if (pwd == password[1].correct) {
    setCookie("track","1");
	window.location.href = "loading.html";
  } 
    else if (pwd == password[2].correct) {
    setCookie("track","2");
	window.location.href = "loading.html";
  } 
    else {
    alert("Incorrect Password. Please Retry.");
    }
  }