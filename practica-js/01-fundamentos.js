/**
 * ═════════════════════════════════════════════════════════════
 * JAVASCRIPT - NIVEL 1: FUNDAMENTOS BÁSICOS
 * ═════════════════════════════════════════════════════════════
 */

// ▶ 1. VARIABLES (var, let, const)
// ────────────────────────────────────────────────────────────

// var (antiguo, no usar en código moderno)
var nombre = "Juan";

// let (recomendado - scope limitado al bloque)
let edad = 25;

// const (recomendado - valores que no cambian)
const ciudad = "Madrid";

// ¿Por qué usar let y const en lugar de var?
// - var tiene "hoisting" confuso
// - let y const son block-scoped (más seguro)
// - const previene cambios accidentales

console.log("------- VARIABLES -------");
console.log(nombre, edad, ciudad);

// ▶ 2. TIPOS DE DATOS PRIMITIVOS
// ────────────────────────────────────────────────────────────

const numero = 42;              // number
const decimal = 3.14;           // number
const texto = "Hola";           // string
const booleano = true;          // boolean
const noDefinido = undefined;   // undefined
const nulo = null;              // null (ausencia intencional de valor)
const simbolo = Symbol("id");   // symbol (único, usado en objetos)
const bigNum = 123n;            // BigInt (números muy grandes)

console.log("\n------- TIPOS DE DATOS -------");
console.log(typeof numero);     // "number"
console.log(typeof texto);      // "string"
console.log(typeof booleano);   // "boolean"
console.log(typeof noDefinido); // "undefined"

// Nota: typeof null devuelve "object" (es un bug en JavaScript)
console.log(typeof nulo);       // "object" ⚠️

// ▶ 3. STRINGS (Cadenas de texto)
// ────────────────────────────────────────────────────────────

const nombre2 = "Maria";
const apellido = "García";

// Concatenación con +
const nombreCompleto1 = nombre2 + " " + apellido;

// Template literals (backticks) - FORMA MODERNA Y RECOMENDADA
const nombreCompleto2 = `${nombre2} ${apellido}`;

// Métodos útiles de strings
const texto2 = "JavaScript";
console.log("\n------- STRINGS -------");
console.log(texto2.length);             // 10
console.log(texto2.toUpperCase());      // "JAVASCRIPT"
console.log(texto2.toLowerCase());      // "javascript"
console.log(texto2.charAt(0));          // "J"
console.log(texto2.includes("Script")); // true
console.log(texto2.slice(0, 4));        // "Java"
console.log(texto2.replace("Script", "Estilo")); // "JavaEstilo"

// ▶ 4. NÚMEROS Y OPERACIONES MATEMÁTICAS
// ────────────────────────────────────────────────────────────

console.log("\n------- NÚMEROS Y OPERACIONES -------");

const num1 = 10;
const num2 = 3;

console.log(num1 + num2);       // 13 (suma)
console.log(num1 - num2);       // 7  (resta)
console.log(num1 * num2);       // 30 (multiplicación)
console.log(num1 / num2);       // 3.333... (división)
console.log(num1 % num2);       // 1  (módulo/residuo)
console.log(num1 ** 2);         // 100 (potencia)

// Operaciones de incremento/decremento
let contador = 5;
console.log(++contador);        // 6 (pre-incremento)
console.log(contador++);        // 6 (post-incremento, devuelve antes de sumar)
console.log(contador);          // 7

// Métodos útiles
console.log(Math.round(3.7));   // 4 (redondear)
console.log(Math.floor(3.7));   // 3 (piso)
console.log(Math.ceil(3.2));    // 4 (techo)
console.log(Math.sqrt(16));     // 4 (raíz cuadrada)
console.log(Math.max(1,5,3));   // 5
console.log(Math.min(1,5,3));   // 1
console.log(Math.random());     // número entre 0 y 1

// ▶ 5. BOOLEANOS Y OPERADORES LÓGICOS
// ────────────────────────────────────────────────────────────

console.log("\n------- BOOLEANOS Y LÓGICA -------");

const x = true;
const y = false;

// Operador AND (&&) - Ambos deben ser true
console.log(true && true);      // true
console.log(true && false);     // false

// Operador OR (||) - Al menos uno debe ser true
console.log(true || false);     // true
console.log(false || false);    // false

// Operador NOT (!)
console.log(!true);             // false
console.log(!false);            // true

// ▶ 6. COMPARACIONES
// ────────────────────────────────────────────────────────────

console.log("\n------- COMPARACIONES -------");

console.log(5 === 5);           // true (igualdad estricta - tipo y valor)
console.log(5 == "5");          // true (igualdad laxa - solo valor)
console.log(5 === "5");         // false (igualdad estricta)

console.log(5 !== 3);           // true (desigualdad)
console.log(5 > 3);             // true
console.log(5 < 3);             // false
console.log(5 >= 5);            // true
console.log(5 <= 3);            // false

// ⚠️ IMPORTANTE: Siempre usa === en lugar de ==
// El === es más seguro porque no hace conversión de tipos

// ▶ 7. CONVERSIÓN DE TIPOS
// ────────────────────────────────────────────────────────────

console.log("\n------- CONVERSIÓN DE TIPOS -------");

// A string
console.log(String(42));        // "42"
console.log((42).toString());   // "42"
console.log(42 + "");           // "42"

// A número
console.log(Number("42"));      // 42
console.log(parseInt("42"));    // 42
console.log(parseFloat("3.14")); // 3.14

// A booleano
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("texto"));  // true

// Valores "falsy" (se convierten a false)
// false, 0, "", null, undefined, NaN

// ▶ 8. OPERADOR TERNARIO (condicional compacto)
// ────────────────────────────────────────────────────────────

console.log("\n------- OPERADOR TERNARIO -------");

const edadPersona = 18;
const esAdulto = edadPersona >= 18 ? "Sí, es adulto" : "No, es menor";
console.log(esAdulto);

// Estructura: condición ? valorSiTrue : valorSiFalse

// ▶ 9. SCOPE (Ámbito de las variables)
// ────────────────────────────────────────────────────────────

console.log("\n------- SCOPE -------");

// Scope Global
const globalVar = "Soy global";

function ejemploScope() {
    // Scope de función
    const localVar = "Soy local";
    console.log(globalVar);     // ✓ Accesible
    console.log(localVar);      // ✓ Accesible
}

ejemploScope();
console.log(globalVar);         // ✓ Accesible
// console.log(localVar);       // ✗ Error: no accesible fuera de la función

// Block scope (let y const)
if (true) {
    let blockVar = "Bloque";
    console.log(blockVar);      // ✓ Accesible dentro del bloque
}
// console.log(blockVar);       // ✗ Error: no accesible fuera del bloque

// ═════════════════════════════════════════════════════════════
// EJERCICIOS PARA PRACTICAR:
// ═════════════════════════════════════════════════════════════

/*
1. Crea una variable con tu nombre y edad. Muestra en consola:
   "Mi nombre es [nombre] y tengo [edad] años"

2. Calcula el área de un círculo con radio 5
   Fórmula: π × r²

3. Compara dos números y muestra si son iguales, mayor o menor
   usando operador ternario

4. Crea una cadena de texto con saltos de línea usando template literals

5. Convierte una cadena "123" a número y suma 50 al resultado
*/

console.log("\n------- SOLUCION DE EJERCICIOS PARA PRACTICAR: -------");
// ═════════════════════════════════════════════════════════════
// SOLUCION DE EJERCICIOS PARA PRACTICAR:
// ═════════════════════════════════════════════════════════════

// 1er Ejercicio
const nombrePropio = "Hans";
let edadPropia = 30;
console.log(`Mi nombre es ${nombrePropio} y tengo ${edadPropia} años`);

// 2do Ejercicio
const PI = 3.14159;
let radio = 5;
console.log(`El área del círculo es: ${PI * (radio ** 2)}`);

// 3er Ejercicio
let number1 = 5;
let number2 = 7;
console.log(number1 === number2 ? 'Son iguales' : (number1 > number2 ? `El numero ${number1} es mayor que ${number2}` : `El numero ${number2} es mayor`));

// 4to Ejercicio
let nombreCompleto= "Hans Palacios"
console.log(`Hola mi nombre es ${nombreCompleto}.\nEstoy aprendiendo JavaScript`);

// 5to Ejercicio
let cadNumber = "123"
console.log(parseInt(cadNumber) + 50);