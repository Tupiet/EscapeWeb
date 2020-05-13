function canvi() {
  document.body.style.backgroundColor = red;
  if (document.body.style.backgroundColor == red) {
    //alert("AA0000");
    document.body.style.backgroundColor = green;
    setTimeout(canvi(), 3000);
  } else {
    //alert("NO");
    document.body.style.backgroundColor = red;
    setTimeout(canvi(), 3000);
  }

}