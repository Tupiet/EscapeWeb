var i = 0;

function canvi() {
  var bodyBack = document.body;
  var colorBody = ["#aa0000", "#000075"];
  bodyBack.style.backgroundColor = colorBody[i];
  i = (i + 1) % colorBody.length;
}

setInterval(canvi, 1000);