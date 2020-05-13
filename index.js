var i = 0;

function canvi() {
  var doc = document.body;
  var color = ["blue", "red"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

setInterval(canvi, 1000);