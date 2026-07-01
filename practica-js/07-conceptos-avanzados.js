/**
 * ═════════════════════════════════════════════════════════════
 * JAVASCRIPT - NIVEL 7: CONCEPTOS AVANZADOS
 * ═════════════════════════════════════════════════════════════
 * 
 * Estos conceptos son importantes para Angular y code moderno.
 */

console.log("===== CONCEPTOS AVANZADOS =====\n");

// ▶ 1. PROTOTIPOS Y HERENCIA PROTOTÍPICA
// ────────────────────────────────────────────────────────────

console.log("--- PROTOTIPOS ---");

// Cada objeto en JavaScript tiene un prototipo
function Animal(nombre) {
    this.nombre = nombre;
}

// Agregar método al prototipo
Animal.prototype.hablar = function() {
    console.log(`${this.nombre} hace un sonido`);
};

const perro = new Animal("Rex");
perro.hablar();  // "Rex hace un sonido"

// Verificar si una propiedad existe en el objeto o su prototipo
console.log("nombre" in perro);     // true
console.log("hablar" in perro);     // true

// ▶ 2. CADENA PROTOTÍPICA
// ────────────────────────────────────────────────────────────

console.log("\n--- CADENA PROTOTÍPICA ---");

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.presentarse = function() {
    return `${this.nombre}, ${this.edad} años`;
};

function Estudiante(nombre, edad, matricula) {
    Persona.call(this, nombre, edad);  // Heredar del constructor
    this.matricula = matricula;
}

// Heredar del prototipo
Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

// Método específico de Estudiante
Estudiante.prototype.estudiar = function() {
    return `${this.nombre} está estudiando`;
};

const estudiante = new Estudiante("Carlos", 20, "2024001");
console.log(estudiante.presentarse());  // "Carlos, 20 años"
console.log(estudiante.estudiar());     // "Carlos está estudiando"

// ▶ 3. THIS BINDING
// ────────────────────────────────────────────────────────────

console.log("\n--- THIS BINDING ---");

const objeto = {
    nombre: "Objeto",
    metodo: function() {
        console.log(this.nombre);
    }
};

objeto.metodo();  // "Objeto"

// El 'this' se pierde si se pasa la función sin contexto
const fn = objeto.metodo;
// fn();  // undefined o error (en strict mode)

// Soluciones:

// 1. bind() - crea una nueva función con 'this' fijo
const fnBind = objeto.metodo.bind(objeto);
fnBind();  // "Objeto"

// 2. call() - ejecuta inmediatamente con 'this' especificado
objeto.metodo.call(objeto);  // "Objeto"

// 3. apply() - similar a call pero con array de argumentos
const numeros = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, numeros));  // 5
// O usar spread operator (más moderno)
console.log(Math.max(...numeros));  // 5

// 4. Arrow function (hereda 'this' del contexto)
const objetoArrow = {
    nombre: "Arrow",
    metodo: () => {
        console.log(this);  // 'this' global, no del objeto
    }
};

// ▶ 4. MAP Y SET (estructuras de datos)
// ────────────────────────────────────────────────────────────

console.log("\n--- MAP ---");

const mapa = new Map();
mapa.set("clave1", "valor1");
mapa.set("clave2", "valor2");
mapa.set(42, "número");

console.log(mapa.get("clave1"));    // "valor1"
console.log(mapa.has("clave1"));    // true
console.log(mapa.size);             // 3

mapa.forEach((valor, clave) => {
    console.log(`${clave}: ${valor}`);
});

// Iterar Map
for (const [clave, valor] of mapa) {
    console.log(`${clave} -> ${valor}`);
}

console.log("\n--- SET ---");

const set = new Set();
set.add(1);
set.add(2);
set.add(2);  // No se agrega (repetido)
set.add(3);

console.log(set.size);       // 3
console.log(set.has(2));     // true

// Eliminar duplicados de array
const numDuplicados = [1, 2, 2, 3, 3, 3, 4];
const numUnicos = [...new Set(numDuplicados)];
console.log(numUnicos);  // [1, 2, 3, 4]

// ▶ 5. DESTRUCTURING AVANZADO
// ────────────────────────────────────────────────────────────

console.log("\n--- DESTRUCTURING AVANZADO ---");

// Valores por defecto
const [a = 10, b = 20] = [1];
console.log(a, b);  // 1, 20

// Intercambiar variables
let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y);  // 10, 5

// Destructuring de objeto anidado
const persona = {
    id: 1,
    nombre: "Juan",
    contacto: {
        email: "juan@example.com",
        telefono: "123456789"
    }
};

const { nombre, contacto: { email } } = persona;
console.log(nombre, email);

// ▶ 6. TEMPLATE LITERALS AVANZADOS (Template Tags)
// ────────────────────────────────────────────────────────────

console.log("\n--- TEMPLATE TAGS ---");

function destacar(strings, ...valores) {
    let resultado = "";
    for (let i = 0; i < strings.length; i++) {
        resultado += strings[i];
        if (i < valores.length) {
            resultado += `[${valores[i]}]`;
        }
    }
    return resultado;
}

const producto = "Laptop";
const precio = 500;
const msg = destacar`El producto es ${producto} y cuesta €${precio}`;
console.log(msg);

// ▶ 7. PROXY (interceptar operaciones en objetos)
// ────────────────────────────────────────────────────────────

console.log("\n--- PROXY ---");

const usuario = {
    nombre: "María",
    edad: 25
};

const proxy = new Proxy(usuario, {
    get(target, propiedad) {
        console.log(`Accediendo a: ${propiedad}`);
        return target[propiedad];
    },
    set(target, propiedad, valor) {
        console.log(`Estableciendo ${propiedad} = ${valor}`);
        if (propiedad === "edad" && valor < 0) {
            console.log("La edad no puede ser negativa");
            return false;
        }
        target[propiedad] = valor;
        return true;
    }
});

// console.log(proxy.nombre);      // "Accediendo a: nombre" -> "María"
// proxy.edad = 30;                // "Estableciendo edad = 30"
// proxy.edad = -5;                // Error: edad no puede ser negativa

// ▶ 8. SYMBOL (identificadores únicos)
// ────────────────────────────────────────────────────────────

console.log("\n--- SYMBOL ---");

const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2);  // false (cada Symbol es único)

const obj = {
    nombre: "Objeto",
    [sym1]: "Valor privado 1"
};

// No se muestra en Object.keys
console.log(Object.keys(obj));      // ["nombre"]
console.log(obj[sym1]);             // "Valor privado 1"

// ▶ 9. GENERATOR (funciones que se pueden pausar)
// ────────────────────────────────────────────────────────────

console.log("\n--- GENERATOR ---");

function* contador() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = contador();
console.log(gen.next());    // { value: 1, done: false }
console.log(gen.next());    // { value: 2, done: false }
console.log(gen.next());    // { value: 3, done: false }
console.log(gen.next());    // { value: undefined, done: true }

// Iterar sobre un generator
function* secuencia(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        yield i;
    }
}

console.log([...secuencia(1, 5)]);  // [1, 2, 3, 4, 5]

// ▶ 10. ITERABLES Y ITERADORES
// ────────────────────────────────────────────────────────────

console.log("\n--- ITERABLES ---");

// Un iterable es algo que se puede usar en for...of
const miArray = [1, 2, 3];

// for...of funciona porque los arrays son iterables
for (const valor of miArray) {
    console.log(valor);
}

// Crear un objeto iterable personalizado
const miRango = {
    inicio: 1,
    fin: 5,
    [Symbol.iterator]() {
        let actual = this.inicio;
        return {
            next: () => {
                if (actual <= this.fin) {
                    return { value: actual++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const valor of miRango) {
    console.log(valor);  // 1, 2, 3, 4, 5
}

// ▶ 11. REGULAR EXPRESSIONS (Expresiones Regulares)
// ────────────────────────────────────────────────────────────

console.log("\n--- REGULAR EXPRESSIONS ---");

// Crear regex
const regex1 = /hola/i;           // i = insensible a mayúsculas
const regex2 = new RegExp("hola", "i");

// test() - devuelve true/false
console.log(regex1.test("Hola mundo"));     // true
console.log(regex1.test("Adiós mundo"));    // false

// match() - obtiene coincidencias
const texto = "hola hola mundo";
console.log(texto.match(/hola/g));          // ["hola", "hola"]

// split() - dividir usando regex
console.log("hola-mundo-javascript".split(/-/));  // ["hola", "mundo", "javascript"]

// Patrones comunes
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(email.test("usuario@ejemplo.com"));  // true

const numeros = /\d+/g;
const texto2 = "Hay 5 gatos y 10 perros";
console.log(texto2.match(numeros));  // ["5", "10"]

// ▶ 12. DEBOUNCE Y THROTTLE
// ────────────────────────────────────────────────────────────

console.log("\n--- DEBOUNCE Y THROTTLE ---");

// Debounce: ejecutar después de que pare de ocurrir
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Throttle: ejecutar a lo sumo una vez cada X ms
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Ejemplo de uso (con eventos):
/*
const buscar = debounce((termino) => {
    console.log("Buscando:", termino);
}, 300);

// En una búsqueda en tiempo real, debounce espera 300ms sin escribir
inputBusqueda.addEventListener("input", (e) => {
    buscar(e.target.value);
});

const procesarScroll = throttle(() => {
    console.log("Scrolling");
}, 1000);

window.addEventListener("scroll", procesarScroll);
*/

// ═════════════════════════════════════════════════════════════
// RESUMEN DE CUÁNDO USAR CADA COSA
// ═════════════════════════════════════════════════════════════

console.log("\n===== GUÍA RÁPIDA =====");
console.log(`
✓ Usa const por defecto (no cambia)
✓ Usa let si necesitas reasignar (pocos casos)
✓ Evita var (solo en código antiguo)

✓ Usa arrow functions (=>) en callbacks
✓ Usa function tradicional en métodos de objeto
✓ Recuerda: arrow function hereda 'this'

✓ Usa async/await en lugar de .then()
✓ Usa Promise.all para paralelismo
✓ Usa try/catch para manejo de errores

✓ Usa destructuring siempre que puedas
✓ Usa spread operator (...) para copiar/combinar

✓ Usa Object.keys(), .values(), .entries()
✓ Usa Map para colecciones clave-valor
✓ Usa Set para elementos únicos

✓ Template literals para strings complejos
✓ Regular expressions para validación/búsqueda

✓ En Angular: Observable > Promise
✓ En Angular: RxJS para streams de datos
`);

// ═════════════════════════════════════════════════════════════
// EJERCICIOS:
// ═════════════════════════════════════════════════════════════

/*
1. Crea un prototipo "Empleado" que herede de "Persona"

2. Crea un Map para almacenar productos con sus precios

3. Usa una regex para validar un número de teléfono

4. Crea un generator que genere números de Fibonacci

5. Implementa debounce en una función de búsqueda

6. Crea un Proxy que valide que un objeto solo tenga
   números positivos

7. Crea un objeto iterable personalizado
*/

