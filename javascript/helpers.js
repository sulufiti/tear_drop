function animate() {
  var circle = document.getElementById("circle1")
  var x = circle.getAttribute("cx")
  var newX = 2 + parseInt(x)
  if(newX > 500) {
    newX = 50;
  }
  circle.setAttribute("cx", newX)
}
