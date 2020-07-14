var passwordField = document.getElementById('password');
var goButton = document.getElementById('go');

var resultField = document.getElementById('result');
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

document.cookie = "track"
resultField.innerHTML = localStorage.getItem('password');

goButton.addEventListener('click', saveResult);

function saveResult() {
  console.log('saveResult called');
 function checkPassword(password)
}


function checkPassword(password) {
  if (password == password[0].correct) {
    document.cookie = "track; expires:Thu, 18 Dec 2021 12:00:00 UTC; path=0";
  } 
    else if (password == password[1].correct) {
    document.cookie = "track; expires:Thu, 18 Dec 2021 12:00:00 UTC; path=1";
  } 
    else if (password == password[2].correct) {
    document.cookie = "track; expires:Thu, 18 Dec 2021 12:00:00 UTC; path=2";
  } 
    else {
    alert("Incorrect");
    }
  }

function pathway() {
  if (document.cookie.path == 0) {
    window.location.href = "starmerchant_about_blackholes.html";
  }
    else if (document.cookie.path == 1) {
    window.location.href = "starmerchant_about_neutronstars.html";
  }
    else if (document.cookie.path == 2) {
      window.location.href = "starmerchant_about_blackholes.html"
    }
    
}