//_______Tipos, Boolean________
var esVerdadero = true;
console.log(esVerdadero);
//____________________Tipos, Number____________________
var entero = 6;
var decimal = 6.5;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("Entero: " + entero + "\nDecimal: " + decimal + "\nHex: " + hex + "\nBinario: " + binary + "\nOctal: " + octal);
//____________________Tipos, String____________________
var marca = "toyota";
var modelo = "tacoma";
console.log("Modelo: " + modelo + "\nMarca: " + marca);
//_____________________Strings____________________
var nombre = "Raul";
var apellido = "Jimenez";
var impresion = "\nNombre: " + nombre + "\nApellido: " + apellido + "\n";
console.log("Impresion: " + impresion);
//____________________Tipos, Arrays____________________
var listaDeNumeros = [1, 2, 3];
console.log(listaDeNumeros["En la posicion 3 esta: " + 2]);
//____________________Tipos, Tuplas____________________
var futbolista;
futbolista = ['Ronaldhino', 20];
console.log("El nombre es " + futbolista[0] + " y su edad es " + futbolista[1]);
//____________________Enums____________________
var marcasDeAutos;
(function (marcasDeAutos) {
    marcasDeAutos[marcasDeAutos["Toyota"] = 100] = "Toyota";
    marcasDeAutos[marcasDeAutos["Chevrolet"] = 0] = "Chevrolet";
    marcasDeAutos[marcasDeAutos["Ford"] = 0] = "Ford";
})(marcasDeAutos || (marcasDeAutos = {}));
var tacoma = marcasDeAutos.Toyota;
console.log(tacoma);
console.log(marcasDeAutos[0]);
//____________________Any____________________
var variablesSinTipo = "Hola pepe";
console.log(variablesSinTipo);
variablesSinTipo = 96;
console.log(variablesSinTipo);
//____________________Unknown____________________ 
var valorDesconocido = 4;
valorDesconocido = true;
console.log(valorDesconocido);
//____________________Void____________________
function saludar2() {
    console.log("Hola Mundo... Buenon't");
}
saludar2();
//____________________Null y Undefined____________________
var variablesSinDefinir = undefined;
var variableNula = null;
console.log(variableNula);
//____________________Never____________________
// No tiene un punto final ya que dispara una excepcion
function error(mensaje) {
    throw new Error(mensaje);
}
//No tiene un punto final ya que dispara un error
function fallo() {
    return error("Reportar fallo");
}
// Nunca finaliza
function LoopInfinito() {
    while (true) { }
}
//____________________Union____________________
function imprimirId(id) {
    console.log("El id es " + id);
    if (typeof id === "string") {
        console.log("El ID es: " + id.toUpperCase());
    }
    else {
        console.log("El ID es: " + id.toFixed(2));
    }
}
imprimirId("Este_es_mi_ID");
imprimirId(100.99999);
imprimirId(1);
imprimirId("abc");
//____________________Assertion____________________
var algunValor = "Esto es un string";
var longitudDelString = algunValor.length;
//Se puede llevar a cabo con <tipo> antes de la var 
var algunValor2 = "Este es un string";
var longitudDelString2 = algunValor.length;
//____________________Functions____________________
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Nubia");
//____________________Funciones con retorno____________________
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
//____________________Funciones Anónimas____________________
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada X es : " + punto.x);
    console.log("La coordenada Y es : " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
//____________________Interfaces____________________
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function imprimirEtiqueta1(etiqueta) {
    console.log(etiqueta.label);
}
;
var miEtiqueta1 = { numero: 10, label: "Esta es mi etiqueta 1" };
imprimirEtiqueta1(miEtiqueta1);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
//____________________Literales____________________
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir("soltero");
//____________________Funciones como expresiones____________________
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar(imprimirEnConsola);
