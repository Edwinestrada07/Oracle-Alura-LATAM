/////////////////B) lógica programación  (funciones-listas)////////////////////////////
////////////////B.1) Desafio

//2) Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

//3) Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console". 
function clickConsole() {
    console.log('El botón fue clicado')
}

//4) Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil.
//Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function clickPrompt() {
    let respUsuario = prompt("Escribe el nombre de alguna ciudad de brasil")

    alert(`Estuve en ${respUsuario} y me acordé de ti`)
}

//5) Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function clickAlert() {
    alert("Yo amo JS")
}

//6) Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function clickSuma() {
    let a = parseInt(prompt('Digite el primer número')) // ----> el parseInt convierte el número ingresado en un entero, ya que JS lo toma como string
    let b = parseInt(prompt('Digite el segundo número'))

    let respuesta = a + b

    alert(`La suma de los dos números es: ${respuesta}`)
}


//////////Ejercicios de desafio (B.1 sesión2)////////////////////////
//1)Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo() {
    console.log("¡Hola, mundo!");
    return;
}

holaMundo();

//2)Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
    return;
}

saludar("Edwin");

//3)Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function numeroDoble(numero) {
    console.log(`Tu número es: ${numero * 2}`);
    return;
}

numeroDoble(15);

//4)Crear una función que reciba tres números como parámetros y devuelva su promedio.
function numeros(numero1, numero2, numero3) {
    console.log(`El promedio es: ${(numero1 + numero2 + numero3) / 3}`);
    return;
}

numeros(1, 4, 5);

//5)Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayorQue(numer1, numer2) {
    if(numer1 > numer2) {
        return numer1;
    } else {
        return numer2;
    }
}

let mayor = mayorQue(2, 5);
console.log("El mayor es: " + mayor);

//6)Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numeroMulti(number) {
    console.log(`el resultado es: ${number * number}`);
    return;
}

numeroMulti(3);


//////////Ejercicios de desafio (B.1 sesión3)////////////////////////
//1)Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y 
//peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // Redondea el resultado a dos decimales
}

let peso = 70; // Peso en kilogramos
let altura = 1.70; // Altura en metros

let imc = calcularIMC(peso, altura);
console.log("El IMC es: " + imc);

//2)Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {   
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

// Ejemplo de uso
let numero = 3;
let factorial = calcularFactorial(numero);
console.log("El factorial de " + numero + " es: " + factorial); // El factorial de 5 es: 120

//3)Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en pesos
function convertidor(pesos) {
    console.log(`La conversión es: ${pesos * 0.00025} USD, y su valor en pesos es: ${pesos}`);
    return;
}

convertidor(160000);

//4)Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y 
//la anchura que se proporcionarán como parámetros.
function salaRectangular(altura, anchura) {
    console.log(`El área es: ${altura * anchura} y el perímetro es: ${2 * altura + 2 * anchura}`);
    return;
}

salaRectangular(50, 100);

//5)Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio 
//que se proporcionará como parámetro. Considera Pi = 3,14.
function salaCircular(radio) {
    let Pi = 3.14;
    console.log(`El área es: ${Pi * (radio * radio)} y el perímetro es: ${2 * Pi * radio}`);
    return;
}

salaCircular(10, 10);

//6)Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function multiplicar(numero) {
    for(let i = 1; i <= 10; i++) {
        multiplicar = numero * i;
        console.log(numero + " x " + i + " = " + multiplicar);
    }
}

multiplicar(2);


//////////Ejercicios de desafio (B.1 sesión4)////////////////////////
//1)Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);

//2)Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

//3)Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);