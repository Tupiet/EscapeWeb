function canvi() {
  var id = document.getElementById("numberID");
  if (id.text != 0) {
    //alert("id != 0");
    document.body.style.backgroundColor = "#AA0000";
    id.text = 0;
    setTimeout(canvi(), 1000);
  }
  if (id.text == 0) {
    //alert("id = 0");
    document.body.style.backgroundColor = "#00AA00";
    id.text = 1;
    setTimeout(canvi(), 1000);
  }

}