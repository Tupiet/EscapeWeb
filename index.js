function displayStart() {
  var initDiv = document.getElementById("welcome");
  var startDiv = document.getElementById("start");

  initDiv.style.display = "none";
  startDiv.style.display = "inline";
}

function finalPassword() {
  var inputEnter = document.getElementById("finalTextPass");
  var welcome = document.getElementById("welcome");
  var desencripted = document.getElementById("desencripted");

  if (inputEnter.value == "a4k3ngh534nvgk3kjn4343r4rre") {
    alert("Clave correcta.");
    welcome.style.display = "none";
    desencripted.style.display = "inline";

  }
}

function move() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 100);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}