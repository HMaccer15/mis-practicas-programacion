/**
 * ═════════════════════════════════════════════════════════════
 * JAVASCRIPT - NIVEL 4: OBJETOS
 * ═════════════════════════════════════════════════════════════
 */

console.log("===== OBJETOS =====\n");

// ▶ 1. CREAR UN OBJETO LITERAL
// ────────────────────────────────────────────────────────────

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    esEstudiante: false
};

// Acceder a propiedades
console.log(persona.nombre);           // "Juan"
console.log(persona["edad"]);          // 30 (notación de corchetes)

// Modificar propiedades
persona.edad = 31;
persona["ciudad"] = "Barcelona";
console.log(persona);

// Agregar nuevas propiedades
persona.email = "juan@example.com";
console.log(persona);

// Eliminar propiedades
delete persona.email;
console.log(persona);

// ▶ 2. OBJETOS CON MÉTODOS (funciones dentro de objetos)
// ────────────────────────────────────────────────────────────

const usuario = {
    nombre: "María",
    edad: 28,
    saludar: function() {
        console.log(`Hola, me llamo ${this.nombre}`);
    },
    cumplirAños: function() {
        this.edad++;
        console.log(`Ahora tengo ${this.edad} años`);
    }
};

usuario.saludar();       // "Hola, me llamo María"
usuario.cumplirAños();   // "Ahora tengo 29 años"

// Forma moderna (sin escribir function)
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    velocidadActual: 0,
    
    acelerar() {
        this.velocidadActual += 10;
        console.log(`Velocidad: ${this.velocidadActual} km/h`);
    },
    
    frenar() {
        this.velocidadActual = 0;
        console.log("Detenido");
    }
};

coche.acelerar();  // Velocidad: 10 km/h
coche.acelerar();  // Velocidad: 20 km/h
coche.frenar();    // Detenido

// ▶ 3. OBJETOS ANIDADOS
// ────────────────────────────────────────────────────────────

const estudiante = {
    nombre: "Carlos",
    edad: 20,
    direccion: {
        calle: "Calle Principal 123",
        ciudad: "Madrid",
        codigoPostal: "28001"
    },
    calificaciones: [8.5, 9.2, 7.8]
};

console.log(estudiante.direccion.ciudad);      // "Madrid"
console.log(estudiante.calificaciones[0]);     // 8.5

// ▶ 4. DESESTRUCTURACIÓN DE OBJETOS
// ────────────────────────────────────────────────────────────

const { nombre, edad, ciudad } = persona;
console.log(nombre);  // "Juan"
console.log(edad);    // 31

// Extraer con renombre
const { nombre: nombrePersona, edad: edadPersona } = persona;
console.log(nombrePersona);  // "Juan"

// Desestructuración anidada
const { direccion: { ciudad: ciudadEstudiante } } = estudiante;
console.log(ciudadEstudiante);  // "Madrid"

// ▶ 5. SPREAD OPERATOR CON OBJETOS
// ────────────────────────────────────────────────────────────

const persona1 = { nombre: "Ana", edad: 25 };
const persona2 = { ...persona1, ciudad: "Valencia" };
console.log(persona2);  // { nombre: "Ana", edad: 25, ciudad: "Valencia" }

// Combinar objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinado = { ...obj1, ...obj2 };
console.log(combinado);  // { a: 1, b: 2, c: 3, d: 4 }

// ▶ 6. THIS (referencia al objeto actual)
// ────────────────────────────────────────────────────────────

const trabajador = {
    nombre: "Pedro",
    salario: 2000,
    
    mostrarInfo() {
        console.log(`${this.nombre} gana €${this.salario}`);
    },
    
    aumentarSalario(cantidad) {
        this.salario += cantidad;
    }
};

trabajador.mostrarInfo();  // "Pedro gana €2000"
trabajador.aumentarSalario(500);
trabajador.mostrarInfo();  // "Pedro gana €2500"

// ⚠️ IMPORTANTE: Arrow function no tiene su propio 'this'
const objetoArrow = {
    valor: 42,
    normal: function() {
        console.log(this.valor);  // 42 (function tiene this)
    },
    flecha: () => {
        console.log(this.valor);  // undefined (arrow function hereda this del contexto global)
    }
};

// ▶ 7. CONSTRUCTORES (blueprints para crear objetos)
// ────────────────────────────────────────────────────────────

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    
    this.presentarse = function() {
        console.log(`Soy ${this.nombre} y tengo ${this.edad} años`);
    };
}

const persona3 = new Persona("Laura", 27);
const persona4 = new Persona("David", 32);

persona3.presentarse();  // "Soy Laura y tengo 27 años"
persona4.presentarse();  // "Soy David y tengo 32 años"

// ▶ 8. CLASES (forma moderna de constructores, ES6)
// ────────────────────────────────────────────────────────────

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    
    hacer_sonido() {
        console.log(`${this.nombre} hace un sonido`);
    }
}

const perro = new Animal("Max", "Perro");
const gato = new Animal("Mishi", "Gato");

perro.hacer_sonido();  // "Max hace un sonido"

// ▶ 9. HERENCIA DE CLASES
// ────────────────────────────────────────────────────────────

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    info() {
        console.log(`${this.marca} ${this.modelo}`);
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, numeroPuertas) {
        super(marca, modelo);  // Llamar al constructor de la clase padre
        this.numeroPuertas = numeroPuertas;
    }
    
    info() {
        super.info();  // Llamar método de la clase padre
        console.log(`Tiene ${this.numeroPuertas} puertas`);
    }
}

const miAuto = new Auto("Toyota", "Corolla", 4);
miAuto.info();
// "Toyota Corolla"
// "Tiene 4 puertas"

// ▶ 10. GETTERS Y SETTERS
// ────────────────────────────────────────────────────────────

class CuentaBancaria {
    constructor(saldo) {
        this._saldo = saldo;  // _ indica que es "privada"
    }
    
    get saldo() {
        return this._saldo;
    }
    
    set saldo(cantidad) {
        if (cantidad > 0) {
            this._saldo = cantidad;
        } else {
            console.log("El saldo debe ser positivo");
        }
    }
}

const cuenta = new CuentaBancaria(1000);
console.log(cuenta.saldo);  // 1000 (usa getter)
cuenta.saldo = 1500;        // Usa setter
console.log(cuenta.saldo);  // 1500

// ▶ 11. MÉTODOS ÚTILES DE OBJETOS
// ────────────────────────────────────────────────────────────

const objeto = { a: 1, b: 2, c: 3 };

// Object.keys() - obtener todas las claves
console.log(Object.keys(objeto));       // ["a", "b", "c"]

// Object.values() - obtener todos los valores
console.log(Object.values(objeto));     // [1, 2, 3]

// Object.entries() - obtener pares clave-valor
console.log(Object.entries(objeto));    // [["a", 1], ["b", 2], ["c", 3]]

// Object.assign() - copiar propiedades
const copia = Object.assign({}, objeto);
console.log(copia);                     // { a: 1, b: 2, c: 3 }

// Object.freeze() - impedir cambios
const congelado = Object.freeze({ x: 10 });
// congelado.x = 20;  // No funciona, sigue siendo 10

// ▶ 12. ESTRUCTURAS COMPLEJAS
// ────────────────────────────────────────────────────────────

const empresa = {
    nombre: "TechCorp",
    empleados: [
        { id: 1, nombre: "Juan", departamento: "IT" },
        { id: 2, nombre: "María", departamento: "RRHH" },
        { id: 3, nombre: "Carlos", departamento: "IT" }
    ],
    
    obtenerEmpleadosPorDepartamento(depto) {
        return this.empleados.filter(emp => emp.departamento === depto);
    },
    
    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
    }
};

console.log(empresa.obtenerEmpleadosPorDepartamento("IT"));

// ═════════════════════════════════════════════════════════════
// EJERCICIOS:
// ═════════════════════════════════════════════════════════════

/*
1. Crea un objeto "libro" con propiedades: título, autor, páginas
   y un método que muestre la información

2. Crea un objeto "calculadora" con métodos para sumar, restar,
   multiplicar y dividir

3. Crea una clase "Producto" con propiedades y un método
   que calcule el descuento

4. Crea una clase "Estudiante" que herede de "Persona"
   (crea Persona primero)

5. Crea un objeto con información de una película (título, año,
   género) e usa Object.keys y Object.values

6. Crea un objeto con propiedades usando destructuring
   de parámetros de función

7. Usa spread operator para combinar dos objetos de usuarios
*/

