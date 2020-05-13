function canvi() {

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