var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

avance = 10;

var vp = document.getElementById('villaplatzi');
var papel = vp.getContext("2d");

document.addEventListener("keydown", moverCerdo);

var fondo = {
  url: "tile.webp",
  cargaOK: false
};

var vaca = {
  url: "vaca.webp",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.webp",
  cargaOK: false,
  x: 0,
  y: 0
};

var pollo = {
  url: "pollo.webp",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function moverCerdo(event) {
  if (event.keyCode == teclas.UP) {
    cerdo.y = cerdo.y - avance;
  }
  if (event.keyCode == teclas.DOWN) {
    cerdo.y = cerdo.y + avance;
  }
  if (event.keyCode == teclas.LEFT) {
    cerdo.x = cerdo.x - avance;
  }
  if (event.keyCode == teclas.RIGHT) {
    cerdo.x = cerdo.x + avance;
  }
  dibujar();
}

function dibujar() {

  if(fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK) {
    cantidad = aleatorio(0, 7);
    console.log(cantidad);
    for(var v=0; v < cantidad; v++){
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if(pollo.cargaOK) {
    cantidad = aleatorio(0, 5);
    console.log(cantidad);
    for(var v=0; v < cantidad; v++){
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(pollo.imagen, x, y);
    }
  }

  if(cerdo.cargaOK) {
    papel.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
  }

}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor((max - min + 1) * Math.random()) + min;
  return resultado;
}
