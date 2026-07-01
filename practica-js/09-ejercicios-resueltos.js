/**
 * ═════════════════════════════════════════════════════════════
 * EJERCICIOS PRÁCTICOS - SOLUCIONES
 * ═════════════════════════════════════════════════════════════
 * 
 * Este archivo contiene soluciones para todos los ejercicios
 * propuestos en cada nivel. Intenta resolver primero sin ver
 * la solución.
 */

// ═════════════════════════════════════════════════════════════
// NIVEL 1: FUNDAMENTOS
// ═════════════════════════════════════════════════════════════

console.log("===== NIVEL 1: FUNDAMENTOS =====\n");

// Ejercicio 1: Mostrar información personal
console.log("--- Ejercicio 1 ---");
const miNombre = "Tu Nombre";
const miEdad = 25;
console.log(`Mi nombre es ${miNombre} y tengo ${miEdad} años`);

// Ejercicio 2: Calcular área de círculo
console.log("\n--- Ejercicio 2 ---");
const radio = 5;
const PI = Math.PI;
const areaCirculo = PI * radio ** 2;
console.log(`Área del círculo con radio ${radio}: ${areaCirculo.toFixed(2)}`);

// Ejercicio 3: Comparar números con ternario
console.log("\n--- Ejercicio 3 ---");
const num1 = 15;
const num2 = 20;
const comparacion = num1 > num2 ? "num1 es mayor" : 
                    num1 < num2 ? "num2 es mayor" : 
                    "Son iguales";
console.log(comparacion);

// Ejercicio 4: Cadena con saltos de línea
console.log("\n--- Ejercicio 4 ---");
const mensaje = `Hola,
Esto es un texto
Con múltiples líneas
Usando template literals`;
console.log(mensaje);

// Ejercicio 5: Convertir string a número y operar
console.log("\n--- Ejercicio 5 ---");
const stringNumero = "123";
const numero = Number(stringNumero);
const resultado = numero + 50;
console.log(`${stringNumero} + 50 = ${resultado}`);

// ═════════════════════════════════════════════════════════════
// NIVEL 2: CONDICIONALES Y BUCLES
// ═════════════════════════════════════════════════════════════

console.log("\n\n===== NIVEL 2: CONDICIONALES Y BUCLES =====\n");

// Ejercicio 1: Determinar si número es par o impar
console.log("--- Ejercicio 1 ---");
function esParOImpar(n) {
    if (n % 2 === 0) {
        console.log(`${n} es par`);
    } else {
        console.log(`${n} es impar`);
    }
}
esParOImpar(7);
esParOImpar(12);

// Ejercicio 2: Sumar array de números
console.log("\n--- Ejercicio 2 ---");
const numeros = [5, 10, 15, 20, 25];

// a) Con bucle for
let sumaFor = 0;
for (let i = 0; i < numeros.length; i++) {
    sumaFor += numeros[i];
}
console.log("Suma con for:", sumaFor);

// b) Con reduce
const sumaReduce = numeros.reduce((acc, num) => acc + num, 0);
console.log("Suma con reduce:", sumaReduce);

// Ejercicio 3: Filtrar números mayores a 5
console.log("\n--- Ejercicio 3 ---");
const numeros2 = [2, 5, 8, 3, 12, 1, 9];
const mayoresA5 = numeros2.filter(n => n > 5);
console.log("Números mayores a 5:", mayoresA5);

// Ejercicio 4: Buscar nombre en array
console.log("\n--- Ejercicio 4 ---");
const nombres = ["Juan", "María", "Carlos", "Ana"];
const nombreBuscado = "Carlos";
if (nombres.includes(nombreBuscado)) {
    console.log(`${nombreBuscado} está en la lista`);
} else {
    console.log(`${nombreBuscado} NO está en la lista`);
}

// Ejercicio 5: Transformar array (multiplicar por 3)
console.log("\n--- Ejercicio 5 ---");
const nums = [1, 2, 3, 4, 5];
const triplicados = nums.map(n => n * 3);
console.log("Originales:", nums);
console.log("Triplicados:", triplicados);

// Ejercicio 6: Bucle con salto (múltiplos de 3)
console.log("\n--- Ejercicio 6 ---");
console.log("Números del 1 al 10 (sin múltiplos de 3):");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;  // Saltar múltiplos de 3
    }
    console.log(i);
}

// Ejercicio 7: forEach con índice
console.log("\n--- Ejercicio 7 ---");
const frutas = ["manzana", "plátano", "naranja"];
frutas.forEach((fruta, indice) => {
    console.log(`${indice}: ${fruta}`);
});

// ═════════════════════════════════════════════════════════════
// NIVEL 3: FUNCIONES
// ═════════════════════════════════════════════════════════════

console.log("\n\n===== NIVEL 3: FUNCIONES =====\n");

// Ejercicio 1: Área de rectángulo
console.log("--- Ejercicio 1 ---");
const areaRectangulo = (base, altura) => base * altura;
console.log("Área del rectángulo (5 x 3):", areaRectangulo(5, 3));

// Ejercicio 2: Función con parámetro por defecto
console.log("\n--- Ejercicio 2 ---");
const obtenerPorcentaje = (numero, porcentaje = 10) => (numero * porcentaje) / 100;
console.log("10% de 100:", obtenerPorcentaje(100));
console.log("25% de 100:", obtenerPorcentaje(100, 25));

// Ejercicio 3: Determinar si número es primo
console.log("\n--- Ejercicio 3 ---");
const esPrimo = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};
console.log("¿7 es primo?", esPrimo(7));      // true
console.log("¿15 es primo?", esPrimo(15));    // false

// Ejercicio 4: Obtener el mayor de múltiples números
console.log("\n--- Ejercicio 4 ---");
const obtenerMayor = (...nums) => Math.max(...nums);
console.log("Mayor entre 5, 12, 3, 8:", obtenerMayor(5, 12, 3, 8));

// Ejercicio 5: Crear un contador con closure
console.log("\n--- Ejercicio 5 ---");
const crearContador2 = () => {
    let count = 0;
    return {
        incrementar: () => ++count,
        decrementar: () => --count,
        obtener: () => count
    };
};
const contador = crearContador2();
console.log(contador.incrementar());  // 1
console.log(contador.incrementar());  // 2
console.log(contador.decrementar());  // 1
console.log(contador.obtener());      // 1

// Ejercicio 6: Suma recursiva
console.log("\n--- Ejercicio 6 ---");
const sumaRecursiva = (n) => {
    if (n <= 0) return 0;
    return n + sumaRecursiva(n - 1);
};
console.log("Suma de 1 a 5:", sumaRecursiva(5));  // 15
console.log("Suma de 1 a 10:", sumaRecursiva(10)); // 55

// Ejercicio 7: Función que retorna función
console.log("\n--- Ejercicio 7 ---");
const crearOperacion = (operador) => {
    return (a, b) => {
        switch(operador) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b;
            default: return "Operador desconocido";
        }
    };
};
const suma = crearOperacion("+");
const resta = crearOperacion("-");
console.log("5 + 3 =", suma(5, 3));    // 8
console.log("5 - 3 =", resta(5, 3));   // 2

// ═════════════════════════════════════════════════════════════
// NIVEL 4: OBJETOS
// ═════════════════════════════════════════════════════════════

console.log("\n\n===== NIVEL 4: OBJETOS =====\n");

// Ejercicio 1: Objeto libro con método
console.log("--- Ejercicio 1 ---");
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
    
    mostrarInfo() {
        return `${this.titulo} de ${this.autor} (${this.paginas} páginas)`;
    }
};
console.log(libro.mostrarInfo());

// Ejercicio 2: Objeto calculadora
console.log("\n--- Ejercicio 2 ---");
const calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
};
console.log("5 + 3 =", calculadora.sumar(5, 3));
console.log("10 - 4 =", calculadora.restar(10, 4));
console.log("6 * 7 =", calculadora.multiplicar(6, 7));
console.log("20 / 4 =", calculadora.dividir(20, 4));

// Ejercicio 3: Clase Producto con descuento
console.log("\n--- Ejercicio 3 ---");
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    
    aplicarDescuento(porcentaje) {
        return this.precio * (1 - porcentaje / 100);
    }
}
const producto = new Producto("Laptop", 1000);
console.log(`${producto.nombre}: €${producto.precio}`);
console.log(`Con 20% descuento: €${producto.aplicarDescuento(20)}`);

// Ejercicio 4: Herencia (Estudiante hereda de Persona)
console.log("\n--- Ejercicio 4 ---");
class Persona2 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    presentarse() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
    }
}

class Estudiante2 extends Persona2 {
    constructor(nombre, edad, matricula) {
        super(nombre, edad);
        this.matricula = matricula;
    }
    
    estudiar() {
        return `${this.nombre} está estudiando (Matrícula: ${this.matricula})`;
    }
}

const est = new Estudiante2("Laura", 20, "2024001");
console.log(est.presentarse());
console.log(est.estudiar());

// Ejercicio 5: Object.keys y Object.values
console.log("\n--- Ejercicio 5 ---");
const pelicula = {
    titulo: "Inception",
    año: 2010,
    director: "Christopher Nolan",
    calificacion: 8.8
};
console.log("Claves:", Object.keys(pelicula));
console.log("Valores:", Object.values(pelicula));

// Ejercicio 6: Destructuring en parámetros
console.log("\n--- Ejercicio 6 ---");
const mostrarUsuario = ({ nombre, email, edad }) => {
    return `${nombre} (${email}) - ${edad} años`;
};
const usuario = { nombre: "Pedro", email: "pedro@example.com", edad: 28 };
console.log(mostrarUsuario(usuario));

// Ejercicio 7: Combinar objetos con spread
console.log("\n--- Ejercicio 7 ---");
const usuario1 = { id: 1, nombre: "Ana" };
const usuario2 = { id: 2, nombre: "Bob" };
const usuariosombinados = { ...usuario1, ...usuario2 };
console.log("Objetos combinados:", usuariosombinados);

// ═════════════════════════════════════════════════════════════
// NIVEL 5: ASINCRONÍA
// ═════════════════════════════════════════════════════════════

console.log("\n\n===== NIVEL 5: ASINCRONÍA =====\n");

// Ejercicio 1: Promesa básica
console.log("--- Ejercicio 1 ---");
const promesaUsuario = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ id: 1, nombre: "Juan" });
    }, 500);
});

promesaUsuario.then((usuario) => {
    console.log("Usuario obtenido:", usuario);
});

// Ejercicio 2: Promesa que se rechaza
console.log("\n--- Ejercicio 2 ---");
const promesaConError = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Error en la operación"));
    }, 500);
});

promesaConError.catch((error) => {
    console.log("Error capturado:", error.message);
});

// Ejercicio 3: Función async con try/catch
console.log("\n--- Ejercicio 3 ---");
async function obtenerDatos3() {
    try {
        const resultado = await promesaUsuario;
        console.log("Datos en async:", resultado);
        return resultado;
    } catch (error) {
        console.log("Error:", error);
    }
}
obtenerDatos3();

// Ejercicio 4: Promise.all
console.log("\n--- Ejercicio 4 ---");
const p1 = Promise.resolve("Dato 1");
const p2 = Promise.resolve("Dato 2");
const p3 = Promise.resolve("Dato 3");

Promise.all([p1, p2, p3]).then((resultados) => {
    console.log("Todos los datos:", resultados);
});

// ═════════════════════════════════════════════════════════════
// PROYECTOS INTEGRADORES
// ═════════════════════════════════════════════════════════════

console.log("\n\n===== PROYECTOS INTEGRADORES =====\n");

// Proyecto 1: Gestor de Tareas (Todo List)
console.log("--- Proyecto 1: Todo List ---");

class TodoList {
    constructor() {
        this.tareas = [];
    }

    agregar(descripcion) {
        const tarea = {
            id: Date.now(),
            descripcion,
            completada: false
        };
        this.tareas.push(tarea);
        return tarea;
    }

    completar(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = true;
        }
    }

    eliminar(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
    }

    listar() {
        return this.tareas.map((tarea, indice) => {
            const estado = tarea.completada ? "✓" : " ";
            return `${indice + 1}. [${estado}] ${tarea.descripcion}`;
        }).join("\n");
    }
}

const todoList = new TodoList();
todoList.agregar("Aprender JavaScript");
todoList.agregar("Hacer ejercicio");
todoList.agregar("Leer un libro");
console.log("Tareas:\n" + todoList.listar());

// Proyecto 2: Sistema de Carrito de Compras
console.log("\n--- Proyecto 2: Carrito de Compras ---");

class Carrito {
    constructor() {
        this.articulos = [];
    }

    agregar(nombre, precio, cantidad = 1) {
        const articulo = { nombre, precio, cantidad };
        this.articulos.push(articulo);
    }

    obtenerTotal() {
        return this.articulos.reduce((total, art) => 
            total + (art.precio * art.cantidad), 0
        );
    }

    obtenerCantidadArticulos() {
        return this.articulos.reduce((total, art) => 
            total + art.cantidad, 0
        );
    }

    mostrar() {
        console.log("=== Carrito ===");
        this.articulos.forEach((art) => {
            console.log(`${art.nombre}: €${art.precio} x ${art.cantidad}`);
        });
        console.log(`Total: €${this.obtenerTotal().toFixed(2)}`);
    }
}

const carrito = new Carrito();
carrito.agregar("Laptop", 800, 1);
carrito.agregar("Mouse", 25, 2);
carrito.agregar("Teclado", 100, 1);
carrito.mostrar();

// ═════════════════════════════════════════════════════════════

console.log("\n\n✅ ¡Todos los ejercicios completados!");
console.log("Ahora intenta crear los tuyos propios.");

