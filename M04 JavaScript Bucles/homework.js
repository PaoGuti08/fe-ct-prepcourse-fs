/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

var x = 0;
var y = 0;

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if(x > y){
      console.log(x);
   } else if(x < y){
      console.log(y);
   } else console.log(x);
}

obtenerMayor(10, 5);
obtenerMayor(10, 15);
obtenerMayor(10, 10);

var  edad = 0;
function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if (edad >= 18) console.log('Allowed');
   else console.log('Not allowed');
}

mayoriaDeEdad(17);
mayoriaDeEdad(18);
mayoriaDeEdad(19);

var status = 0;
function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   if (status === 1){
      console.log('Online');
   } else if (status === 2){
      console.log('Away');
   } 
   else console.log('Offline');
}

conection(0);
conection(1);
conection(2);

var idioma = "";
function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   switch (idioma){
      case 'aleman':
         console.log('Guten Tag!');
         break;
      case 'mandarin':
         console.log('Ni Hao!');
         break;
      case 'ingles':
         console.log('Hello!');
      break;
      default:
         console.log('Hola!');
   }
}
saludo('aleman');
saludo('mandarin');
saludo('ingles');
saludo('otro');

var color = '';
function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch(color){
      case 'blue':
         console.log('This is blue');
         break;
      case 'red':
         console.log('This is red');
         break;
      case 'green':
         console.log('This is green');
         break;
      case 'orange':
         console.log('This is orange');
         break;
         default:
            console.log('Color not found');
   }
}

colors('blue');
colors('red');
colors('green');
colors('orange');
colors('otro');

var num = 0;
function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if(num === 10 || num === 5) console.log(true);
   else console.log(false);
}

esDiezOCinco(10);
esDiezOCinco(5);
esDiezOCinco(0);

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if(num < 50 && num > 20) console.log(true);
   else console.log(false);
}

estaEnRango(19);
estaEnRango(20);
estaEnRango(21);

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 1 === 0) console.log(true);
   else console.log(false);
}

esEntero(0.8);
esEntero(1);
esEntero(-10);

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 3 === 0 && num % 5 === 0){
      console.log('fizzbuzz');
   } else if(num % 3 === 0){
      console.log('fizz');
   } else if(num % 5 === 0) console.log('buzz');
   else console.log(false);
}

fizzBuzz(15);
fizzBuzz(6);
fizzBuzz(10);
fizzBuzz(2);

var num1, num2, num3;
function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if(num1 > num2 && num1 > num3 && num1 >= 0){
      console.log('Numero 1 es mayor y positivo');
   } else if(num1 < 0 || num2 < 0 || num3 < 0){
      console.log('Hay negativos');
   } else if(num3 > num1 && num3 > num2){
      num3++;
      console.log(num3);
   } else if(num1 == 0 && num2 == 0 && num3 == 0){
      console.log('Error');
   } else console.log(false);
}

operadoresLogicos(10, 9, 8);
operadoresLogicos(-10, 9, 8);
operadoresLogicos(8, 9, 10);
operadoresLogicos(0, 0, 0);
operadoresLogicos(8, 10, 8);
console.log('-----');

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if(num <= 1) console.log(false);
   for(var i = 2; i <= (num / 2); i++){
      if(num % i == 0) console.log(false);
      else console.log(true);
   }
}
esPrimo(-1);
esPrimo(0);
esPrimo(1);
esPrimo(4);
esPrimo(7);

var valor;
function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if(valor == 'verdadero') console.log('Soy verdadero');
   else console.log('Soy falso');
}

esVerdadero('verdadero');
esVerdadero('falso');

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   if(num >= 100 && num <= 999) console.log(true);
   else console.log(false);
}

console.log('****');
tieneTresDigitos(100);
tieneTresDigitos(0);

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   var cont = 0;
   do{
      num += 5;
      cont++;
   }
   while(cont <= 8);
   console.log(num);
}

doWhile(1);
doWhile(2);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
