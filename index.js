function displayStart() {
  var initDiv = document.getElementById("welcome");
  var startDiv = document.getElementById("start");

  initDiv.style.display = "none";
  startDiv.style.display = "inline";
}

function finalPassword() {
  var inputEnter = document.getElementById("finalTextPass");
  
  if (inputEnter.value == "Hola") {
    alert("¡Bien!");
  }
}
