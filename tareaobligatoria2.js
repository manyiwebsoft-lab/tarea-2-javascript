
// Nombre y Apellido: Manyi isabel Fonseca
// DNI: 96186185
 

// Ejercicio 1
// Dado el arreglo de frutas que contienen "manzana","banana","pera","naranja", recorrerlo con un bucle e imprimir por consola el índice y el valor de cada elemento.

const frutas = ["manzana", "banana", "pera", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log("Índice: " + i + ", Valor: " + frutas[i]);
}


// Ejercicio 2
// Con el arreglo anterior, realizar las siguientes operaciones:
// 1. Agregar "kiwi" al final.
// 2. Agregar "sandía" al inicio.
// 3. Quitar el primer elemento.
// 4. Quitar el último elemento. Imprime el arreglo final.

const frutas = ["manzana", "banana", "pera", "naranja"];

// 1. Agregar "kiwi" al final
frutas.push("kiwi");

// 2. Agregar "sandía" al inicio
frutas.unshift("sandía");

// 3. Quitar el primer elemento
frutas.shift();

// 4. Quitar el último elemento
frutas.pop();

console.log("Arreglo final:", frutas);

// Ejercicio 3
// Dado el arreglo de números = [ 10, 20, 30, 40, 50 ], el programa debe recibir un número e indicar si está en el arreglo.

const numeros = [10, 20, 30, 40, 50];
let numeroBuscado = 30; 
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroBuscado) {
        encontrado = true;
        break; 
    }
}

if (encontrado) {
    console.log("El número " + numeroBuscado + " SÍ está en el arreglo.");
} else {
    console.log("El número NO está en el arreglo.");
}

// Ejercicio 4
// Dado un arreglo de números como [1, 2, 3, 2, 4, 2, 5], contar la cantidad de veces que se repite el valor 2 y mostrarlo en consola.

const numeros = [1, 2, 3, 2, 4, 2, 5];
let valorBuscado = 2;
let contador = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === valorBuscado) {
        contador++; 
    }
}

console.log("El valor " + valorBuscado + " se repite " + contador + " veces.");

// Ejercicio 5
// Recorrer el arreglo [5, 12, 8, 20, 3, 15] con un bucle y guardar en un nuevo arreglo solo los números mayores a 10.


const numeros = [5, 12, 8, 20, 3, 15];
let mayoresA10 = [];

for (let i = 0; i < numeros.length; i++) {
    
    if (numeros[i] > 10) {
        
        mayoresA10.push(numeros[i]);
    }
}

console.log("Los números mayores a 10 son:", mayoresA10);

// Ejercicio 6
// Dado un arreglo de nombres, recorrerlo en orden inverso usando un bucle for tradicional y guardar los elementos en un nuevo arreglo.


const nombres = ["Ana", "Carlos", "Beatriz", "Daniel"];

let nombresInversos = [];

for (let i = nombres.length - 1; i >= 0; i--) {
    nombresInversos.push(nombres[i]);
}

console.log("Nombres invertidos:", nombresInversos);

// Ejercicio 7
// Dado un arreglo de precios de productos, calcular el gasto total y el precio promedio de la compra utilizando un bucle for...of y un acumulador.

const precios = [150.5, 400, 1200, 50.25];
let sumaTotal = 0;
let cantidad = 0;
for (let precio of precios) {
    sumaTotal += precio; 
    cantidad++;          
}
let promedio = sumaTotal / cantidad;
console.log("El gasto total es: " + sumaTotal);
console.log("El precio promedio es: " + promedio);

// Ejercicio 8 
// Dada una matriz de números enteros de 3x3, recorrerla utilizando bucles anidados para obtener la suma de absolutamente todos sus elementos.

const numeros = [
    [2, 65, -55],
    [1000, 0, 88],
    [-13, 89, 67]
];

let sumaTotalMatriz = 0;

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros[i].length; j++) {
        sumaTotalMatriz += numeros[i][j];
    }
}
console.log("La suma total de la matriz es: " + sumaTotalMatriz);

// Ejercicio 9
// Dado un mapa de 3x3 que representa un tablero de juego con casilleros vacíos ("~") y un barco ("B"), encontrar y imprimir en qué fila y columna se encuentra el barco.

const oceano = [
    ["~", "~", "~"],
    ["~", "B", "~"],
    ["~", "~", "~"]
];

let filaBarco = -1;
let columnaBarco = -1;

for (let i = 0; i < oceano.length; i++) {
    for (let j = 0; j < oceano[i].length; j++) {
        if (oceano[i][j] === "B") {
            filaBarco = i;
            columnaBarco = j;
        }
    }
}

console.log("El barco se encuentra en la Fila: " + filaBarco + " y Columna: " + columnaBarco);

