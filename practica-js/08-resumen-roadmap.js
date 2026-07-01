/**
 * ═════════════════════════════════════════════════════════════
 * JAVASCRIPT - GUÍA COMPLETA Y ROADMAP PARA ANGULAR
 * ═════════════════════════════════════════════════════════════
 */

/*
╔════════════════════════════════════════════════════════════════╗
║         RESUMEN: EVERYTHING YOU NEED TO KNOW                  ║
╚════════════════════════════════════════════════════════════════╝

📚 NIVEL BÁSICO (1-2 semanas)
────────────────────────────────────────────────────────────────
✓ Variables (const, let)
✓ Tipos de datos (number, string, boolean, array, object)
✓ Operadores (aritméticos, lógicos, de comparación)
✓ Condicionales (if/else, switch)
✓ Bucles (for, while, forEach, map, filter)
✓ Funciones básicas
✓ Arrays y sus métodos
✓ Objetos

📚 NIVEL INTERMEDIO (2-3 semanas)
────────────────────────────────────────────────────────────────
✓ Arrow functions (=>)
✓ Destructuring
✓ Spread operator (...)
✓ Template literals (`${}`)
✓ Closures y scope
✓ Callbacks
✓ Promesas y async/await
✓ Fetch API
✓ DOM manipulation
✓ Event listeners

📚 NIVEL AVANZADO (3-4 semanas)
────────────────────────────────────────────────────────────────
✓ Clases (ES6)
✓ Herencia
✓ Prototipos
✓ This binding
✓ Map y Set
✓ Regex
✓ Generators
✓ Iterables
✓ Proxy

═════════════════════════════════════════════════════════════════
*/

// ═════════════════════════════════════════════════════════════
// 1. CHEAT SHEET DE JAVASCRIPT
// ═════════════════════════════════════════════════════════════

const JAVASCRIPT_CHEATSHEET = `

┌─────────────────────────────────────────────────────────────┐
│ VARIABLES                                                   │
└─────────────────────────────────────────────────────────────┘

const x = 10;           // No se reasigna (preferido)
let y = 20;             // Se puede reasignar
var z = 30;             // Antiguo, evitar

┌─────────────────────────────────────────────────────────────┐
│ TIPOS DE DATOS                                              │
└─────────────────────────────────────────────────────────────┘

// Primitivos
42                      // number
3.14                    // number
"texto"                 // string
\`texto \${variable}\`   // template literal
true / false            // boolean
null                    // nulo intencional
undefined               // sin valor definido
Symbol("id")            // símbolo único

// Complejos
[1, 2, 3]               // array
{ a: 1, b: 2 }          // objeto

┌─────────────────────────────────────────────────────────────┐
│ ARRAYS - MÉTODOS ESENCIALES                                 │
└─────────────────────────────────────────────────────────────┘

arr.push(x)             // Agregar al final
arr.pop()               // Eliminar último
arr.shift()             // Eliminar primero
arr.unshift(x)          // Agregar al inicio
arr.slice(1, 3)         // Extraer copia (no modifica)
arr.splice(1, 2)        // Eliminar y modificar
arr.map(fn)             // Transformar cada elemento
arr.filter(fn)          // Filtrar elementos
arr.forEach(fn)         // Ejecutar para cada elemento
arr.find(fn)            // Encontrar un elemento
arr.some(fn)            // ¿Alguno cumple?
arr.every(fn)           // ¿Todos cumplen?
arr.reduce(fn, init)    // Reducir a un valor
arr.includes(x)         // ¿Contiene?
arr.indexOf(x)          // Índice de elemento
arr.join(", ")          // Convertir a string
arr.reverse()           // Invertir
arr.sort()              // Ordenar

┌─────────────────────────────────────────────────────────────┐
│ OBJETOS - MÉTODOS ESENCIALES                                │
└─────────────────────────────────────────────────────────────┘

obj.clave               // Acceder propiedad
obj["clave"]            // Acceder propiedad (alternativa)
obj.clave = valor       // Establecer propiedad
delete obj.clave        // Eliminar propiedad

Object.keys(obj)        // Array de claves
Object.values(obj)      // Array de valores
Object.entries(obj)     // Array de [clave, valor]
Object.assign(a, b)     // Copiar/combinar objetos
{...obj}                // Copiar (spread)

┌─────────────────────────────────────────────────────────────┐
│ STRINGS - MÉTODOS ESENCIALES                                │
└─────────────────────────────────────────────────────────────┘

str.length              // Longitud
str.toUpperCase()       // Mayúsculas
str.toLowerCase()       // Minúsculas
str.charAt(0)           // Carácter en posición
str.includes("text")    // ¿Contiene?
str.startsWith("hola")  // ¿Comienza con?
str.endsWith("mundo")   // ¿Termina con?
str.slice(0, 5)         // Extraer substring
str.split(",")          // Dividir en array
str.trim()              // Eliminar espacios
str.replace("a", "b")   // Reemplazar (una)
str.replaceAll("a", "b")// Reemplazar (todas)
str.repeat(3)           // Repetir 3 veces

┌─────────────────────────────────────────────────────────────┐
│ FUNCIONES                                                   │
└─────────────────────────────────────────────────────────────┘

// Tradicional
function nombre(param) { return param; }

// Anónima
const fn = function(param) { return param; };

// Arrow (moderna)
const fn = (param) => param;
const fn = (a, b) => a + b;
const fn = () => { /* código */ };

// Default parameters
const fn = (name = "Guest") => \`Hola \${name}\`;

// Rest parameters
const suma = (...nums) => nums.reduce((a, b) => a + b, 0);

// Destructuring
const fn = ({ nombre, edad }) => \`\${nombre}: \${edad}\`;

┌─────────────────────────────────────────────────────────────┐
│ ASINCRONÍA - MÉTODOS ESENCIALES                             │
└─────────────────────────────────────────────────────────────┘

// Promesas
const p = new Promise((resolve, reject) => {
    // resolve(valor) o reject(error)
});

p.then(resultado => {}).catch(error => {});

// Async/Await (preferido)
async function obtenerDatos() {
    try {
        const datos = await fetch(url);
        const json = await datos.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

// Promise.all (paralelo)
await Promise.all([p1, p2, p3]);

┌─────────────────────────────────────────────────────────────┐
│ CLASES                                                      │
└─────────────────────────────────────────────────────────────┘

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hablar() {
        console.log(\`\${this.nombre} hace sonido\`);
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    
    ladrar() {
        console.log("¡Guau!");
    }
}

┌─────────────────────────────────────────────────────────────┐
│ DESTRUCTURING                                               │
└─────────────────────────────────────────────────────────────┘

// Arrays
const [a, b, c] = [1, 2, 3];
const [x, , z] = [1, 2, 3];  // Saltar elemento

// Objetos
const { nombre, edad } = { nombre: "Juan", edad: 30 };
const { nombre: n } = { nombre: "Juan" };  // Renombrar

// Parámetros
const fn = ({ a, b }) => a + b;

┌─────────────────────────────────────────────────────────────┐
│ SPREAD OPERATOR (...)                                       │
└─────────────────────────────────────────────────────────────┘

// Arrays
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];  // [1, 2, 3, 4]

// Objetos
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };  // { a: 1, b: 2 }

// Parámetros
Math.max(...[1, 2, 3]);

┌─────────────────────────────────────────────────────────────┐
│ MANEJO DE ERRORES                                           │
└─────────────────────────────────────────────────────────────┘

try {
    // Código que puede fallar
    throw new Error("Mensaje de error");
} catch (error) {
    console.log(error.message);
} finally {
    // Se ejecuta siempre
}

┌─────────────────────────────────────────────────────────────┐
│ MAP Y SET                                                   │
└─────────────────────────────────────────────────────────────┘

// Map (clave-valor)
const map = new Map();
map.set("key", "value");
map.get("key");
map.has("key");
map.delete("key");
map.clear();

// Set (valores únicos)
const set = new Set([1, 2, 2, 3]);
set.add(4);
set.has(2);
set.delete(2);
set.size;
[...set];  // Convertir a array

┌─────────────────────────────────────────────────────────────┐
│ OPERADOR TERNARIO                                           │
└─────────────────────────────────────────────────────────────┘

condicion ? valorTrue : valorFalse

edad >= 18 ? "Adulto" : "Menor"

┌─────────────────────────────────────────────────────────────┐
│ OPERADORES LÓGICOS                                          │
└─────────────────────────────────────────────────────────────┘

&&          AND (y)
||          OR (o)
!           NOT (no)
??          Nullish coalescing (devuelve si null/undefined)
?.          Optional chaining (acceso seguro)

const valor = obj?.propiedad;  // undefined si obj es null

┌─────────────────────────────────────────────────────────────┐
│ THIS                                                        │
└─────────────────────────────────────────────────────────────┘

// En métodos de objeto
objeto.metodo() -> this = objeto

// En funciones tradicionales
fn() -> this = global/undefined

// En arrow functions
arrow = () => this  // Hereda del contexto

// Bindear
fn.bind(contexto)
fn.call(contexto, arg1, arg2)
fn.apply(contexto, [arg1, arg2])

`;

console.log(JAVASCRIPT_CHEATSHEET);

// ═════════════════════════════════════════════════════════════
// 2. ERRORES COMUNES A EVITAR
// ═════════════════════════════════════════════════════════════

const ERRORES_COMUNES = `

❌ ERRORES COMUNES EN JAVASCRIPT

1. ❌ Usar == en lugar de ===
   console.log(5 == "5");    // true (malo)
   console.log(5 === "5");   // false (correcto)

2. ❌ Olvidar 'this' es diferente en arrow functions
   objeto = {
       valor: 42,
       flecha: () => console.log(this.valor)  // undefined!
   }

3. ❌ No entender scope y closure
   for (var i = 0; i < 3; i++) {
       setTimeout(() => console.log(i), 1000);  // Imprime 3 tres veces
   }
   // Usar let en lugar de var

4. ❌ Modificar array original cuando no quieres
   arr.sort()    // Modifica el original!
   [...arr].sort() // Usa una copia

5. ❌ Olvidar return en una promesa
   promise.then(data => {
       console.log(data);  // ¡No devuelve nada!
   })

6. ❌ No manejar errores en async/await
   const data = await fetch(url);  // Sin try/catch!

7. ❌ Cambiar 'length' en un array
   arr.length = 0;  // Elimina todos los elementos!

8. ❌ Compartir estado mutable entre componentes
   const estado = { count: 0 };
   // Usar const estado = { ...estado, count: estado.count + 1 }

9. ❌ Mezclar var, let, const
   Usar const por defecto, let cuando sea necesario

10. ❌ No entender event bubbling
    element.addEventListener("click", (e) => {
        e.stopPropagation();  // Detiene la propagación
    });

`;

console.log(ERRORES_COMUNES);

// ═════════════════════════════════════════════════════════════
// 3. PREGUNTAS FRECUENTES
// ═════════════════════════════════════════════════════════════

const PREGUNTAS_FRECUENTES = `

❓ PREGUNTAS FRECUENTES (FAQ)

P: ¿Cuál es la diferencia entre let y const?
R: const = no se reasigna (seguro)
   let = se puede reasignar
   Usa const por defecto, let si necesitas cambiar

P: ¿Qué es closure?
R: Una función que accede a variables del contexto exterior.
   Útil para crear variables "privadas".

P: ¿Promesas vs Async/Await?
R: Son lo mismo, async/await es más legible.
   Promesa:        .then().catch()
   Async/Await:    try/catch

P: ¿Cuándo usar Map en lugar de objeto?
R: Map = colecciones dinámicas, cualquier tipo de clave
   Objeto = más simple, claves string

P: ¿Cómo evito "callback hell"?
R: Usa Promesas o Async/Await en lugar de callbacks anidados

P: ¿Qué es 'this'?
R: Depende del contexto donde se llame la función.
   En métodos = el objeto
   En funciones = global
   En arrow = hereda del contexto

P: ¿Por qué ['1'] > [0] es true?
R: Conversión de tipos confusa de JavaScript.
   Siempre usa tipos específicos y ===

P: ¿Debo usar semicolons?
R: Recomendado. Usa un linter como ESLint.

P: ¿Array.map() vs Array.forEach()?
R: map() = devuelve nuevo array (transforma)
   forEach() = no devuelve nada (ejecuta)

P: ¿Cómo copio un objeto correctamente?
R: Shallow copy:    { ...obj } o Object.assign()
   Deep copy:       JSON.parse(JSON.stringify(obj))
   Mejor:           Usar librería como lodash

`;

console.log(PREGUNTAS_FRECUENTES);

// ═════════════════════════════════════════════════════════════
// 4. ROADMAP PARA ANGULAR
// ═════════════════════════════════════════════════════════════

const ROADMAP_ANGULAR = `

🎯 ROADMAP: JAVASCRIPT → ANGULAR

SEMANA 1-2: JavaScript Fundamentos
├─ Variables, tipos de datos
├─ Operadores y condicionales
├─ Bucles y funciones
└─ Arrays y objetos

SEMANA 3-4: JavaScript Intermedio
├─ Arrow functions
├─ Destructuring
├─ Promesas y Async/Await
├─ DOM básico
└─ Event listeners

SEMANA 5-6: JavaScript Avanzado
├─ Clases (ES6)
├─ Herencia
├─ Closures y scope
└─ Módulos (import/export)

SEMANA 7-8: Herramientas (Antes de Angular)
├─ Node.js y npm
├─ Webpack/Vite
├─ Git y GitHub
├─ Terminal/CLI
└─ Linters (ESLint, Prettier)

SEMANA 9+: ANGULAR 🚀
├─ Componentes
├─ Templates
├─ Directivas
├─ Servicios
├─ Routing
├─ HTTP Client
├─ RxJS y Observables
├─ Reactive Forms
└─ Testing

═══════════════════════════════════════════════════════════════

RECURSOS RECOMENDADOS:

📖 MDN Web Docs
   https://developer.mozilla.org/en-US/docs/Web/JavaScript

📖 JavaScript.info
   https://es.javascript.info/

🎥 YouTube
   - Traversy Media
   - The Net Ninja
   - FreeCodeCamp

💻 Práctica
   - HackerRank
   - LeetCode
   - CodeWars
   - Frontend Mentor

📚 Libros
   - "Eloquent JavaScript" (Marijn Haverbeke)
   - "You Don't Know JS" (Kyle Simpson)

`;

console.log(ROADMAP_ANGULAR);

// ═════════════════════════════════════════════════════════════
// 5. PROXIMAS LECCIONES: TYPESCRIPT
// ═════════════════════════════════════════════════════════════

const PROXIMO_TYPESCRIPT = `

🔜 DESPUÉS DE JAVASCRIPT: TYPESCRIPT

TypeScript es un "superset" de JavaScript que añade tipos estáticos.

DIFERENCIAS CLAVE:

JavaScript:
const suma = (a, b) => a + b;

TypeScript:
const suma = (a: number, b: number): number => a + b;

CONCEPTOS PRINCIPALES:

1. Tipos Básicos
   number, string, boolean, any, null, undefined

2. Interfaces
   interface Usuario {
       nombre: string;
       edad: number;
   }

3. Tipos Genéricos
   Array<string>
   Promise<Usuario>

4. Enums
   enum Color { Red, Green, Blue }

5. Decoradores (importante para Angular)
   @Component, @Injectable, etc.

VENTAJAS:
✓ Detecta errores antes de ejecutar (type safety)
✓ Mejor autocompletado en IDE
✓ Código más legible y documentado
✓ Refactoring más seguro

DESVENTAJA:
✗ Paso adicional de compilación
✗ Curva de aprendizaje

PARA ANGULAR NECESITARÁS:
✓ TypeScript (obligatorio)
✓ RxJS (Observable, Subject, etc.)
✓ Decoradores

Cuando domines JavaScript, TypeScript será fácil.

`;

console.log(PROXIMO_TYPESCRIPT);

// ═════════════════════════════════════════════════════════════
// 6. EJERCICIO FINAL DE REPASO
// ═════════════════════════════════════════════════════════════

console.log("\n\n========== EJERCICIO FINAL DE REPASO ==========\n");

// Crear una clase Tienda con métodos para agregar/comprar productos

class Tienda {
    constructor(nombre) {
        this.nombre = nombre;
        this.productos = new Map();
    }

    // Agregar producto
    agregarProducto(nombre, precio, cantidad = 0) {
        this.productos.set(nombre, { precio, cantidad });
    }

    // Aumentar stock
    reponer(nombre, cantidad) {
        if (this.productos.has(nombre)) {
            const prod = this.productos.get(nombre);
            prod.cantidad += cantidad;
        }
    }

    // Comprar producto
    comprar(nombre, cantidad) {
        if (!this.productos.has(nombre)) {
            throw new Error("Producto no existe");
        }

        const producto = this.productos.get(nombre);
        if (producto.cantidad < cantidad) {
            throw new Error("Stock insuficiente");
        }

        producto.cantidad -= cantidad;
        return producto.precio * cantidad;
    }

    // Listar productos
    listarProductos() {
        console.log(`\n=== Tienda: ${this.nombre} ===`);
        for (const [nombre, { precio, cantidad }] of this.productos) {
            console.log(`${nombre}: €${precio} (Stock: ${cantidad})`);
        }
    }

    // Calcular valor total de inventario
    get valorInventario() {
        let total = 0;
        for (const { precio, cantidad } of this.productos.values()) {
            total += precio * cantidad;
        }
        return total;
    }
}

// Usar la clase
const miTienda = new Tienda("Mi Tienda");
miTienda.agregarProducto("Laptop", 800, 5);
miTienda.agregarProducto("Mouse", 25, 20);
miTienda.agregarProducto("Teclado", 100, 10);

miTienda.listarProductos();

try {
    const total = miTienda.comprar("Laptop", 2);
    console.log(`\nCompra realizada: €${total}`);
} catch (error) {
    console.log("Error:", error.message);
}

miTienda.reponer("Laptop", 3);
console.log(`\nValor del inventario: €${miTienda.valorInventario}`);
miTienda.listarProductos();

// ═════════════════════════════════════════════════════════════

console.log(`

╔════════════════════════════════════════════════════════════════╗
║                   ¡FELICIDADES!                              ║
║                                                                ║
║  Has completado el curso fundamental de JavaScript.           ║
║  Ahora estás listo para:                                       ║
║                                                                ║
║  1. Practicar más con proyectos reales                        ║
║  2. Aprender TypeScript                                       ║
║  3. Comenzar con Angular                                      ║
║                                                                ║
║  Recuerda:                                                     ║
║  - Practica diariamente                                       ║
║  - Lee el código de otros                                     ║
║  - Construye proyectos personales                             ║
║  - No tengas miedo de cometer errores                         ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
`);

