/**
 * ═════════════════════════════════════════════════════════════
 * JAVASCRIPT - NIVEL 3: FUNCIONES
 * ═════════════════════════════════════════════════════════════
 */

console.log("===== FUNCIONES =====\n");

// ▶ 1. FUNCIÓN BÁSICA
// ────────────────────────────────────────────────────────────

function saludar() {
    console.log("¡Hola!");
}

saludar();  // Llamar a la función

// ▶ 2. FUNCIÓN CON PARÁMETROS
// ────────────────────────────────────────────────────────────

function saludarPersona(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

saludarPersona("María");
saludarPersona("Juan");

// ▶ 3. FUNCIÓN CON MÚLTIPLES PARÁMETROS
// ────────────────────────────────────────────────────────────

function sumar(a, b) {
    return a + b;  // return devuelve un valor
}

const resultado = sumar(5, 3);
console.log(resultado);  // 8

// ▶ 4. PARÁMETROS POR DEFECTO
// ────────────────────────────────────────────────────────────

function multiplicar(a, b = 1) {  // b tiene valor por defecto de 1
    return a * b;
}

console.log(multiplicar(5));      // 5 (5 * 1)
console.log(multiplicar(5, 3));   // 15 (5 * 3)

// ▶ 5. FUNCIÓN ANÓNIMA (sin nombre)
// ────────────────────────────────────────────────────────────

const restar = function(a, b) {
    return a - b;
};

console.log(restar(10, 4));  // 6

// ▶ 6. ARROW FUNCTION (forma moderna, =>)
// ────────────────────────────────────────────────────────────

// Forma básica
const dividir = (a, b) => {
    return a / b;
};

console.log(dividir(10, 2));  // 5

// Forma compacta (si es una sola línea)
const dividirCorto = (a, b) => a / b;
console.log(dividirCorto(20, 4));  // 5

// Un solo parámetro (sin paréntesis)
const cuadrado = x => x * x;
console.log(cuadrado(5));  // 25

// Sin parámetros
const obtenerPI = () => 3.14159;
console.log(obtenerPI());  // 3.14159

// ▶ 7. FUNCIONES QUE DEVUELVEN ARRAYS U OBJETOS
// ────────────────────────────────────────────────────────────

const crearUsuario = (nombre, edad) => {
    return [nombre, edad];
};

const usuario = crearUsuario("Carlos", 30);
console.log(usuario);  // ["Carlos", 30]

// ▶ 8. SPREAD OPERATOR (...) - Pasando array como argumentos
// ────────────────────────────────────────────────────────────

const numerosPrueba = [5, 2, 8];
console.log(Math.max(...numerosPrueba));  // 8 (en lugar de Math.max([5,2,8]))

// ▶ 9. REST PARAMETERS (...) - Recibir múltiples argumentos
// ────────────────────────────────────────────────────────────

const sumarVarios = (...numeros) => {
    return numeros.reduce((acc, num) => acc + num, 0);
};

console.log(sumarVarios(1, 2, 3));          // 6
console.log(sumarVarios(1, 2, 3, 4, 5));    // 15

// ▶ 10. DESTRUCTURING (desempacar valores)
// ────────────────────────────────────────────────────────────

// Destructuring de array
const [primero, segundo, ...resto] = [10, 20, 30, 40, 50];
console.log(primero);   // 10
console.log(segundo);   // 20
console.log(resto);     // [30, 40, 50]

// Destructuring en parámetros de función
const mostrarDatos = ([nombre, edad]) => {
    console.log(`${nombre} tiene ${edad} años`);
};

mostrarDatos(["Ana", 25]);

// ▶ 11. SCOPE VARIABLES EN FUNCIONES
// ────────────────────────────────────────────────────────────

let variableGlobal = "Soy global";

function ejemploScope() {
    let variableLocal = "Soy local";
    
    console.log(variableGlobal);   // ✓ Accesible
    console.log(variableLocal);    // ✓ Accesible
}

ejemploScope();
// console.log(variableLocal);     // ✗ Error

// ▶ 12. CLOSURES (función dentro de función)
// ────────────────────────────────────────────────────────────

const crearContador = () => {
    let contador = 0;  // Variable privada
    
    return {
        incrementar: () => {
            contador++;
            console.log(contador);
        },
        obtenerValor: () => contador
    };
};

const miContador = crearContador();
miContador.incrementar();   // 1
miContador.incrementar();   // 2
console.log(miContador.obtenerValor());  // 2

// ▶ 13. FUNCIONES QUE RETORNAN FUNCIONES
// ────────────────────────────────────────────────────────────

const multiplicarPor = (factor) => {
    return (numero) => numero * factor;
};

const multiplicarPor2 = multiplicarPor(2);
const multiplicarPor5 = multiplicarPor(5);

console.log(multiplicarPor2(10));  // 20
console.log(multiplicarPor5(10));  // 50

// ▶ 14. RECURSIÓN (función que se llama a sí misma)
// ────────────────────────────────────────────────────────────

// Factorial: 5! = 5 × 4 × 3 × 2 × 1 = 120
const factorial = (n) => {
    if (n <= 1) return 1;           // Caso base
    return n * factorial(n - 1);    // Caso recursivo
};

console.log(factorial(5));  // 120

// Fibonacci
const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(6));  // 8

// ═════════════════════════════════════════════════════════════
// COMPARACIÓN DE SINTAXIS
// ═════════════════════════════════════════════════════════════

console.log("\n===== COMPARACIÓN DE SINTAXIS =====\n");

// Función tradicional
function restaTradicional(a, b) {
    return a - b;
}

// Función anónima
const restaAnonima = function(a, b) {
    return a - b;
};

// Arrow function
const restaArrow = (a, b) => a - b;

console.log(restaTradicional(10, 3));   // 7
console.log(restaAnonima(10, 3));       // 7
console.log(restaArrow(10, 3));         // 7

// ═════════════════════════════════════════════════════════════
// EJERCICIOS:
// ═════════════════════════════════════════════════════════════

/*
1. Crea una función que calcule el área de un rectángulo
   (base × altura)

2. Crea una función con parámetros por defecto para obtener
   el porcentaje de un número

3. Crea una arrow function que determine si un número es primo

4. Crea una función que acepte múltiples números y devuelva
   el mayor (usa rest parameters)

5. Crea un closure que mantenga un registro de cuántas veces
   se llamó a una función

6. Crea una función recursiva que calcule la suma de números
   del 1 al n

7. Crea una función que retorne otra función (similar al
   ejemplo de multiplicarPor)
*/

