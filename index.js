var i = 0;

function canvi() {
  var bodyBack = document.body;
  var virusDiv = document.getElementById("virusAlert");
  var colorBody = ["#aa0000", "#000075"];
  var colorVirusDiv = ["#000075", "#aa0000"];
  bodyBack.style.backgroundColor = colorBody[i];
  i = (i + 1) % colorBody.length;
  virusDiv.style.backgroundColor = colorVirusDiv[i];
  i = (i + 1) % colorVirusDiv.length;
}

setInterval(canvi, 1000);