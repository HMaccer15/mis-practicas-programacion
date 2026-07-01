/**
 * ═════════════════════════════════════════════════════════════
 * JAVASCRIPT - NIVEL 2: CONDICIONALES Y BUCLES
 * ═════════════════════════════════════════════════════════════
 */

// ▶ 1. CONDICIONALES: IF, ELSE IF, ELSE
// ────────────────────────────────────────────────────────────

console.log("===== CONDICIONALES =====\n");

const edad = 16;

if (edad >= 18) {
    console.log("Eres adulto");
} else if (edad >= 13) {
    console.log("Eres adolescente");
} else {
    console.log("Eres niño");
}

// ▶ 2. SWITCH (cuando tienes muchas condiciones)
// ────────────────────────────────────────────────────────────

const dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Primer día de la semana");
        break;  // ⚠️ No olvides break!
    case "viernes":
        console.log("¡Último día laboral!");
        break;
    case "sábado":
    case "domingo":
        console.log("¡Es fin de semana!");
        break;
    default:
        console.log("Día desconocido");
}

// ▶ 3. BUCLE FOR (repetir código un número específico de veces)
// ────────────────────────────────────────────────────────────

console.log("\n===== BUCLES =====\n");

// For básico
console.log("--- FOR BÁSICO ---");
for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i}`);
}

// For inverso
console.log("\n--- FOR INVERSO ---");
for (let i = 5; i > 0; i--) {
    console.log(i);
}

// ▶ 4. BUCLE WHILE (mientras se cumpla una condición)
// ────────────────────────────────────────────────────────────

console.log("\n--- WHILE ---");
let contador = 0;
while (contador < 3) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// ▶ 5. BUCLE DO-WHILE (al menos una vez, luego comprueba la condición)
// ────────────────────────────────────────────────────────────

console.log("\n--- DO-WHILE ---");
let num = 0;
do {
    console.log(`Número: ${num}`);
    num++;
} while (num < 3);

// ▶ 6. BREAK Y CONTINUE
// ────────────────────────────────────────────────────────────

console.log("\n--- BREAK (salir del bucle) ---");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Salimos del bucle
    }
    console.log(i);
}

console.log("\n--- CONTINUE (saltar esta iteración) ---");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Saltamos esta iteración
    }
    console.log(i);
}

// ▶ 7. ARRAYS (listas de elementos)
// ────────────────────────────────────────────────────────────

console.log("\n===== ARRAYS =====\n");

// Crear un array
const numeros = [10, 20, 30, 40, 50];
const frutas = ["manzana", "plátano", "naranja"];
const mixto = [1, "texto", true, null];

// Acceder a elementos (comienza en 0)
console.log(numeros[0]);    // 10
console.log(numeros[2]);    // 30
console.log(frutas[1]);     // "plátano"

// Propiedades y métodos útiles
console.log(numeros.length);        // 5
console.log(frutas.length);         // 3

// Agregar elementos
const lista = ["a", "b", "c"];
lista.push("d");                    // Agregar al final
console.log(lista);                 // ["a", "b", "c", "d"]

lista.unshift("z");                 // Agregar al inicio
console.log(lista);                 // ["z", "a", "b", "c", "d"]

// Eliminar elementos
lista.pop();                        // Eliminar el último
console.log(lista);                 // ["z", "a", "b", "c"]

lista.shift();                      // Eliminar el primero
console.log(lista);                 // ["a", "b", "c"]

// Buscar un elemento
console.log(lista.includes("b"));   // true
console.log(lista.indexOf("b"));    // 1
console.log(lista.indexOf("x"));    // -1 (no existe)

// Invertir array
const arr = [1, 2, 3];
arr.reverse();
console.log(arr);                   // [3, 2, 1]

// Concatenar arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const concatenado = arr1.concat(arr2);
console.log(concatenado);           // [1, 2, 3, 4]

// Unir elementos en string
const palabras = ["hola", "mundo"];
console.log(palabras.join(" "));    // "hola mundo"
console.log(palabras.join("-"));    // "hola-mundo"

// ▶ 8. ITERACIÓN CON FOR...OF
// ────────────────────────────────────────────────────────────

console.log("\n--- FOR...OF ---");
for (const fruta of frutas) {
    console.log(fruta);
}

// ▶ 9. ITERACIÓN CON FOR...IN (menos recomendado, pero útil para objetos)
// ────────────────────────────────────────────────────────────

console.log("\n--- FOR...IN ---");
for (const indice in frutas) {
    console.log(`${indice}: ${frutas[indice]}`);
}

// ▶ 10. MÉTODOS DE ARRAY CON CALLBACKS
// ────────────────────────────────────────────────────────────

console.log("\n===== MÉTODOS DE ARRAY AVANZADOS =====\n");

const numeros2 = [1, 2, 3, 4, 5];

// forEach: ejecuta función para cada elemento
console.log("--- forEach ---");
numeros2.forEach((num, indice) => {
    console.log(`${indice}: ${num}`);
});

// map: transforma cada elemento y devuelve nuevo array
console.log("\n--- map (transformar) ---");
const duplicados = numeros2.map(num => num * 2);
console.log(duplicados);                    // [2, 4, 6, 8, 10]

// filter: filtra elementos que cumplan condición
console.log("\n--- filter (filtrar) ---");
const pares = numeros2.filter(num => num % 2 === 0);
console.log(pares);                         // [2, 4]

// find: encuentra el primer elemento que cumple condición
console.log("\n--- find ---");
const primero = numeros2.find(num => num > 3);
console.log(primero);                       // 4

// some: devuelve true si al menos un elemento cumple condición
console.log("\n--- some ---");
console.log(numeros2.some(num => num > 10)); // false
console.log(numeros2.some(num => num > 3));  // true

// every: devuelve true si todos los elementos cumplen condición
console.log("\n--- every ---");
console.log(numeros2.every(num => num > 0)); // true
console.log(numeros2.every(num => num > 3)); // false

// reduce: reduce array a un único valor
console.log("\n--- reduce (suma todos) ---");
const suma = numeros2.reduce((acumulador, num) => {
    return acumulador + num;
}, 0);  // 0 es el valor inicial
console.log(suma);                          // 15

// ▶ 11. SLICE Y SPLICE (extraer partes de array)
// ────────────────────────────────────────────────────────────

console.log("\n--- slice (copia, no modifica) ---");
const original = [1, 2, 3, 4, 5];
const copia = original.slice(1, 4);         // Desde índice 1 hasta 3
console.log(copia);                         // [2, 3, 4]
console.log(original);                      // [1, 2, 3, 4, 5] - sin cambios

console.log("\n--- splice (modifica el array) ---");
const array = [1, 2, 3, 4, 5];
const eliminado = array.splice(1, 2);       // Elimina 2 elementos desde índice 1
console.log(array);                         // [1, 4, 5]
console.log(eliminado);                     // [2, 3]

// ═════════════════════════════════════════════════════════════
// EJERCICIOS:
// ═════════════════════════════════════════════════════════════

/*
1. Crea un programa que determine si un número es par o impar

2. Crea un array con 5 números y calcula su suma usando:
   a) Un bucle for
   b) El método reduce()

3. Filtra un array de números para obtener solo los mayores a 5

4. Crea un array de nombres y busca si "Carlos" está en la lista

5. Transforma un array de números multiplicando cada uno por 3

6. Crea un bucle que imprima números del 1 al 10, pero salta
   los múltiplos de 3

7. Usa forEach para mostrar cada elemento de un array con su índice
*/

