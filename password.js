var passwordField = document.getElementById('pwd');
var goButton = document.getElementById('submit');


var password = [
  {
    correct:"stem",
    path: "Black Hole"
  },
  {
    correct: "space",
    path: "Black Dwarf"
  },
  {
    correct: "time",
    path: "Neutron Star"
  }
]


function saveResult() {
  checkPassword(passwordField.value);
}


function checkPassword(pwd) {
  if (pwd == password[0].correct) {
	delCookie("track");
    setCookie("track","0");
	window.location.href = "loading.html";
  } 
    else if (pwd == password[1].correct) {
	delCookie("track");
    setCookie("track","1");
	window.location.href = "loading.html";
  } 
    else if (pwd == password[2].correct) {
	delCookie("track");
    setCookie("track","2");
	window.location.href = "loading.html";
  } 
    else {
    alert("Incorrect Password. Please Retry.");
    }
  }