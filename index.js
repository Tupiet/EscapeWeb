function canvi() {
  var id = document.getElementById("numberID");
  while (id.text != 0) {
    alert("id != 0");
    document.body.style.backgroundColor = "#AA0000";
    id.text = 0;
  }
  while (id.text == 0) {
    alert("id = 0");
    document.body.style.backgroundColor = "#00AA00";
    id.text = 1;
  }

}