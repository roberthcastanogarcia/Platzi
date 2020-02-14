var resultado = document.getElementById("resultado");
var b = document.getElementById('extraer');

var imagenes = [];
imagenes["10"] = "b10.jpg";
imagenes["20"] = "b20.jpg";
imagenes["50"] = "b50.jpg";

class Billete {
  constructor(v, c) {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;

    this.imagen.src = imagenes["" + this.valor];
  }

  mostrar(){
    resultado.innerHTML += "<img src=\"" + this.imagen.src + "\" /><br />";
  }
}

function mostrarCaja() {
  resultado.innerHTML += "<strong>Estado de la caja es:</strong><br />"
  for(var bi of caja) {
    resultado.innerHTML += bi.cantidad + " billetes de $" + bi.valor + "<br />";
  }
}

function entregarDinero() {

  var t = document.getElementById('dinero');


  dinero = parseInt(t.value);


  for(bi of caja){

    if (dinero > 0) {
      papeles = Math.floor(dinero / bi.valor);
      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero % bi.valor;
      bi.cantidad = bi.cantidad - papeles;
    }

  }

  if (dinero > 0) {
    resultado.innerHTML = "Soy un cajero, he sido malo y no puedo darte esa cantidad.";
  }
  else {
    resultado.innerHTML += "<strong>Transaccion Finalizada</strong><br />";
    for(var e of entregado) {
      if (e.cantidad > 0){

        for(i = 1; i <= e.cantidad; i++){
          e.mostrar();
        }

      }
    }
    //Limpiar entregado.
    entregado = [];
  }

  mostrarCaja();

}

b.addEventListener("click", entregarDinero);

caja = [];
entregado = [];
caja.push(new Billete(50,10));
caja.push(new Billete(20,5));
caja.push(new Billete(10,10));
dinero;
papeles = 0;

mostrarCaja();
