function openNav() {
  document.getElementById("mySidenav").style.width = "600px";
  document.getElementById("main").style.marginLeft = "600px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
