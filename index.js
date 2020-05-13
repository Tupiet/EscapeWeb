function canvi() {
  alert("Holaaa");
  var id = document.getElementById("numberID");
  if (id.text == 1) {
    document.body.style.backgroundColor = "#AA0000";
    id.text = 0;
  } else {
    document.body.style.backgroundColor = "#00AA00";
    id.text = 1;
  }

}