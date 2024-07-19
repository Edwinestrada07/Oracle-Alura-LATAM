//////////EJEMPLO DEL JUEGO////////////////////////
let numMaxPosible = 100 
let numeroSecreto = Math.floor(Math.random()*numMaxPosible)+1; // ----->>> Con la modificación ya no es necesario asignarle un valor a la variable
let numeroUsuario = 0; //Variable inicializada en 0
let intentos = 1;
//let palabraVeces = 'intento'
let maxIntentos = 3;

while (numeroUsuario != numeroSecreto) { //condición que si son diferentes se sigue en el bucle
    numeroUsuario = parseInt(prompt(`Indica un número entre 1 y ${numMaxPosible} por favor:`)); // ----->>> Convierte lo que escribe el usuario en un number, para mayor comprensión del sistema ya que la maquina leía el número ingresado como un string

    //Si acierta entra en la bifurcasión if
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}, lo hiciste en ${intentos} ${ intentos == 1 ? 'intento' : 'intentos' }`); //Temple Strings

/*let numeroSecreto = 4;
let numeroUsuario = 0; //Variable inicializada en 0
let intentos = 1;
let palabraVeces = 'vez'

while (numeroUsuario != numeroSecreto) { //condición que si son diferentes se sigue en el bucle
    numeroUsuario = prompt("Indica un número del 1 al 10 por favor:");

    //Si acierta entra en la bifurcasión if
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}, lo hiciste en ${intentos} ${ intentos == 1 ? 'intento' : 'intentos' }`); //Temple Strings

    } else { //Si no acierta entra a una nueva bifurcasión else (donde hay una nueva condición anidada)
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        //Para incrementar los intentos del usuario cuando no acierta

        //Los proximos dos comentarios es como se escribe en diferentes lenguajes
        //intentos = intentos + 1;
        //intentos +=1;
        intentos++; /// ----->>> Se utiliza más en la actualidad

        //palabraVeces = 'intentos'; ----->>> Se cambio en el Temple String para manejar mejor la interpretación ${ intentos == 1 ? 'intento' : 'intentos' } ?=seria el if, :=seria el else

        if (intentos > maxIntentos) {
            alert(`Llegaste al número max. de ${maxIntentos} intentos, el número secreto era: ${numeroSecreto}`);
            break;
        }
    }
}
        intentos = intentos + 1;
        palabraVeces = 'Veces';
    }
}*/


//////////Ejercicios de desafio (Sesión 2)////////////////////////
//1) Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
//muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
/*const respUsuario = prompt("¿Qué dia de la semana es?");

let dia1 = "sabado";
let dia2 = "domingo"; 

if (respUsuario == dia1) {
  alert("Buen fin de semana");
} else if (respUsuario == dia2) {
  alert("Buen fin de semana");
} else {
  alert("Buena semana, trabaja fuerte");
}

//2) Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
const numero = prompt("Ingresa un número");

if (numero > 0) {
    alert("el número que ingresaste " + numero + " es positivo");
} else if (numero < 0) {
    alert("el número que ingresaste " + numero + " es negativo");
} else {
    alert("el número es cero");
}

//3) Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra 
//"¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
const numero1 = prompt("Ingresa un número para ganar el juego");

if (numero1 >= 100) {
    alert("¡Felicidades, has ganado!");
} else if (numero < 100) {
    alert("Intentalo nuevamente para ganar.");
} else {
    alert("Número incorrecto");
}

//4) Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un 
//template string para incluir el valor del saldo.
const password = prompt("Ingresa tu contraseña");

let saldo = 1000;

if (password == 1234) {
    alert(`Contraseña correcta, su saldo en la cuenta es de: ${saldo} dolares`);
}else {
    alert("contraseña incorrecta");
}

//5) Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
const IngUsuario = prompt("Ingrese su nombre");

let nombre1 = "Edwin";

if (IngUsuario == nombre1) {
    alert(`Bienvenido ${nombre1}, estas dentro del juego`);
}else {
    alert("Nombre no registrado");
}*/



//////////Ejercicios de desafio (Sesión 3)////////////////////////
//1) Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
/*let contador = 1;

while (contador < 10) {
    console.log(contador);
    contador += 1;
}
console.log(contador)

//2) Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador1 = 10;

while (contador1 > 0) {
    console.log(contador1);
    contador1 -= 1;
}
console.log(contador1)

//3) Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número 
//utilizando un bucle 'while' en la consola del navegador.
let numUsuario = prompt("Ingresa un Número");
let contador2 = 0;

while (contador2 <= numUsuario) {
    console.log(contador2);
    contador2 += 1;
}*/



//////////Ejercicios de desafio (Sesión 4)////////////////////////
//1)
/*console.log("BIENVENIDOS AL MUNDO DE LA PROGRAMACIÓN")

//2)
let nombre = "Edwin"
console.log(`Hola ${nombre}`)

//3)
let nombre1 = "Edwin Andrés"
alert(`Hola ${nombre1}, listo para navegar en el mundo de la programación?`)

//4)
let respUsuario = prompt("¿Cuál es el lenguaje de programación que más te gusta?")
console.log(respUsuario)

//5)
let valor1 = 6
let valor2 = 5
let resultado = valor1 + valor2
console.log(`la suma de ${valor1} y ${valor2} es igual a ${resultado}`)

//6)
let valor3 = 3
let valor4 = 1
let resultado1 = valor3 - valor4
console.log(`la resta de ${valor3} y ${valor4} es igual a ${resultado1}`)

//7)
let edad = prompt("ingrese su edad")
if (edad >= 18) {
   console.log(`Por tener ${edad} años obtienes tu licencia de conducción`) 
} else {
    console.log(`Como solo tienes ${edad} años no puedes manejar, ve con un adulto`)
}

//8)
let numero = prompt("Ingresa un número")
if (numero > 0) {
    console.log(`El número ${numero} ingresado es positivo`)
} else if (numero < 0) {
    console.log(`El número ${numero} ingresado es negativo`) 
} else {
    console.log(`El número ${numero} ingresado es neutro`)
}

//9)
let contador = 1
while (contador < 10) {
    console.log(contador)
    contador++
}
console.log(contador)

//10)
let nota = 8
if (nota >= 7) {
    console.log("Felicitaciones Aprobaste")
} else {
    console.log("Hechale ganas, en esta aportunidad reprobaste")
}

//11)
let numRandom = Math.random()
console.log(numRandom)

//12)
let numRandom1 = Math.floor(Math.random()*10)+1
console.log(numRandom1)

//13)
let numRandom2 = Math.floor(Math.random()*1000)+1
console.log(numRandom2)*/
















/*>> cd "7 - Oracle + Alura LATAM"
>> cd "1 - Logica de programacion"
>> cd "A) sumergete con javascript"*/

















/*alert ('¡Bienvenida y bienvenido a nuestro sitio web!');

let nombre = "luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

let nombreUsuario = prompt('Me indicas tu nombre');
let edadUsuario = prompt('Me indicas tu edad');

if (nombre === nombreUsuario) {
    alert('Puedes seguir navegando')
} else {
    alert('¡Error! completa todos los campos');
}

if (edadUsuario && edad >= 18) {
    alert('¡Puedes Obtener tu licencia de conducción!')
} else {
    alert (mensajeDeError);
}*/









