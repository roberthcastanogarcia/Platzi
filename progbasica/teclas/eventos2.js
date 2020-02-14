document.addEventListener("mousedown", bajarLapiz);
document.addEventListener("mouseup", subirLapiz);

cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

papel.strokeStyle = "blue";
papel.lineWidth = 3;

function getCanvasX(event){
  return event.clientX - cuadrito.getBoundingClientRect().left;
}

function getCanvasY(event){
  return event.clientY - cuadrito.getBoundingClientRect().top;
}

function comenzarTrazo(x, y) {
  papel.beginPath();
  papel.moveTo(x, y);
}

function finalizarTrazo(x, y) {
  papel.lineTo(x, y);
  papel.stroke();
  papel.closePath();
}

function bajarLapiz(event){
  x = getCanvasX(event);
  y = getCanvasY(event);
  comenzarTrazo(x, y);
}

function subirLapiz(event){
  x = getCanvasX(event);
  y = getCanvasY(event);
  finalizarTrazo(x, y);
}
