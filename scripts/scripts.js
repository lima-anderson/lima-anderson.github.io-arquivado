function menu() {
  var x = document.querySelector(".menu");
  if (x.className === "menu") {
    x.className += " responsivo";
  } else {
    x.className = "menu";
  }
}