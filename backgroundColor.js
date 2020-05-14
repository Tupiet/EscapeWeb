var iBody = 0;
var iDivVirus = 0;

function canvi() {
  var bodyBack = document.body;
  var virusDiv = document.getElementById("virusAlert");
  var colorBody = ["#aa0000", "#000075"];
  var colorVirusDiv = ["#000075", "#aa0000"];
  bodyBack.style.backgroundColor = colorBody[iBody];
  iBody = (iBody + 1) % colorBody.length;
  virusDiv.style.backgroundColor = colorVirusDiv[iDivVirus];
  iDivVirus = (iDivVirus + 1) % colorVirusDiv.length;
}

setInterval(canvi, 1000);