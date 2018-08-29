function menuToggle() {
  var nav = document.getElementsByClassName("links")[0];
  var classes = nav.className.split(" ");
  var i = classes.indexOf("show");
  if (i >= 0) {
    classes.splice(i, 1);
  } else {
    classes.push("show");
  }
  nav.className = classes.join(" ");
}
