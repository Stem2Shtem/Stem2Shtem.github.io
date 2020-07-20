var passwordField = document.getElementById('pwd');
var goButton = document.getElementById('submit');


var password = [
  {
    correct:"ORION",
    path: "0"
  },
  {
    correct: "welcomeback!",
    path: "1"
  },
]


function saveResult() {
  checkPassword(passwordField.value);
}


function checkPassword(pwd) {
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
  if (pwd == password[0].correct) {
          link1.style.display = "block";
 } else if (pwd == password[1].correct) {
        link2.style.display = "block";
  } else {
    alert("Incorrect Password. Please Retry.");
}
}