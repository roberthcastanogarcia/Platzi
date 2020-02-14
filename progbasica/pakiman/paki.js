var imagenes = [];
imagenes["Cauchin"] = "vaca.webp";
imagenes["Pokacho"] = "pollo.webp";
imagenes["Tocinauro"] = "cerdo.webp";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

//in: trae el indice, sea numerico o texto
//of: trae el objeto solo si el indice es numerico

for(var freddito of coleccion) {

  freddito.mostrar();
}

for(var x in coleccion[0]){
  console.log(x);
}
