function canvi() {
  //var backDiv = document.getElementById("backgroundDiv");
  document.body.style.backgroundColor = "#AA0000";
  if (document.body.style.backgroundColor == "#AA0000") {
    //alert("AA0000");
    document.body.style.backgroundColor = "#00AA00";
    setTimeout(canvi(), 3000);
  } else {
    //alert("NO");
    document.body.style.backgroundColor = "#AA0000";
    setTimeout(canvi(), 3000);
  }

}