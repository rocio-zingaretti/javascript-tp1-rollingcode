/* 1  - Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
*/ 
/* alert ("un mensaje") */



/* 2   Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
*/
/* document.write ("Hello World") */




/* 3 Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
 */
/* document.write (3 + 5) */



/* 4  Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
*/
//let nombreUsuario = prompt("¿Cuál es tu nombre?");
//document.write("Hola " + nombreUsuario);



/* 5  Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
*/
/* let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));
document.write("La suma es: " + (numero1 + numero2)); */


/* 6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/

/* 
let numeroA = parseInt(prompt("Ingresa el primer número:"));
let numeroB = parseInt(prompt("Ingresa el segundo número:"));

if (numero1 > numero2) {
  document.write("El mayor es: " + numero1);
} else if (numero2 > numero1) {
  document.write("El mayor es: " + numero2);
} else {
  document.write("Ambos números son iguales.");
} */




/* 7  Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */

/* let num1 = +(prompt ("ingrese el primer numero"))
let num2 = +(prompt ("ingrese el segundo numero"))
let num3 = +(prompt ("ingrese el tercer numero"))

if((num1 > num2)  && (num1 > num3)) {
  console.log ('el numero mayor es ${num1}');
} else if((num2 > num1) && (num2 > num3)) {
  console.log('el numero mayor es ${num2}');
} else if ((num3 > num1) && (num3 > num2)) {
  console.log('el numero mayor es ${num3}');
} else {
  console.log("todos los numeros son iguales");
} */




//8.- Escribe un programa que pida un número y diga si es divisible por 2

let numero = (prompt ("ingrese un numero"))

if (
  numero % 2 === 0
) {
  console.log(`El número ${numero} es divisible por 2`);
} else {
  console.log(`El número ${numero} no es divisible por 2`)
}



//9. Escribe un programa que pida una frase y escriba las vocales que aparecen/ Nota: tener en cuenta la funcion length, y substring o charAt(developer mozilla).

/* let phrase = prompt ('escriba una frase').trim(); //quiero espacios en blanco

phrase = phrase.toLowerCase(); //paso los caracteres a minusculas

console.log(phrase);

console.log((phrase.length)); //cuenta todas las posiciones que haya en la frase

let vocalesEncontradas= ''; //inicializo un array nuevo para guardar las vocales que aparezcan.

for (let i = 0; i < phrase.length; i++) {
    let caracter = phrase.charAt(i); //obtener el caracter en una posicion especifica

    if(
        caracter === "a" ||
        caracter === "e" ||
        caracter === "i" ||
        caracter === "o" ||
        caracter === "u"
    ){
     vocalesEncontradas += caracter;
    }
}

console.log(`cantidad de vocales encontradas: ${vocalesEncontradas.length} (${vocalesEncontradas})`); */

//10- escribe un programa que pida un numero y nos diga si es divisible por 2, 3 5 y 7 (solo hay que comprobar si lo es por uno de los cuatro).
/* 
let num = +(prompt('ingrese un numero'));

if(
    num % 2 === 0 ||
    num % 3 === 0 ||
    num % 5 === 0 ||
    num % 7 === 0 
) {
    console.log('el numero ingresado es divisible');
} else { 
    console.log('no es divisible por 2, 3, 5 ni 7');
    
} */



//11- añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible.

/* 
let numero = parseInt(prompt("Introduce un número:"));

    // Declarar la variable divisores
    let divisores = [];

    if (numero % 2 === 0) {
        divisores.push(2);
    }
    if (numero % 3 === 0) {
        divisores.push(3);
    }
    if (numero % 5 === 0) {
        divisores.push(5);
    }
    if (numero % 7 === 0) {
        divisores.push(7);
    }

   
    if (divisores.length > 0) {
        console.log(`El número ${numero} es divisible por: ${divisores.join(', ')}.`);
    } else {
        console.log(`El número ${numero} no es divisible por 2, 3, 5 ni 7.`);
    } */



    