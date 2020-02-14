function drawLine(lienzo, color, xi, yi, xf, yf) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function drawCornerLines(lineas, ancho, lienzo, esquina) {
  espacio = ancho / lineas;

  if(esquina == 0) {

    var xi = 0;
    var yi = 0;
    var xf = 300;
    var yf = 0;

    var dxi = 0;
    var dyi = espacio;
    var dxf = -espacio;
    var dyf = 0;

  } else if (esquina == 1) {

    var xi = 0;
    var yi = 0;
    var xf = 0;
    var yf = 300;

    var dxi = 0;
    var dyi = espacio;
    var dxf = espacio;
    var dyf = 0;

  } else if (esquina == 2) {

    var xi = 0;
    var yi = 300;
    var xf = 300;
    var yf = 300;

    var dxi = espacio;
    var dyi = 0;
    var dxf = 0;
    var dyf = -espacio;

  } else {

    var xi = 0;
    var yi = 0;
    var xf = 300;
    var yf = 0;

    var dxi = espacio;
    var dyi = 0;
    var dxf = 0;
    var dyf = espacio;

  }

  var _xi = 0;
  var _yi = 0;
  var _xf = 0;
  var _xy = 0;

  for (l = 1; l <= lineas; l++) {
    _xi = xi + l*dxi;
    _yi = yi + l*dyi;
    _xf = xf + l*dxf;
    _yf = yf + l*dyf;
    drawLine(lienzo, "blue", _xi, _yi, _xf, _yf);
  }

}

function draw(){

  var d = document.getElementsByTagName('canvas');
  var ancho = d[0].width;
  var lienzo = d[0].getContext("2d");

  forma = document.getElementsByTagName('form');
  lineas = forma[0][0].valueAsNumber;
  esquina = forma[0][1].selectedIndex;

  drawCornerLines(lineas, ancho, lienzo, esquina);
}
