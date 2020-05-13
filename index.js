var i = 0;

function canvi() {
  var doc = document.body;
  var color = ["#aa0000", "#000075"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

setInterval(canvi, 1000);