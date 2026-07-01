# 📚 Guía Completa de TypeScript para Principiantes

## Tabla de Contenidos
1. [¿Qué es TypeScript?](#qué-es-typescript)
2. [Instalación y Configuración](#instalación-y-configuración)
3. [Tipos Básicos](#tipos-básicos)
4. [Tipos Avanzados](#tipos-avanzados)
5. [Interfaces y Tipos](#interfaces-y-tipos)
6. [Clases](#clases)
7. [Funciones](#funciones)
8. [Genéricos](#genéricos)
9. [Decoradores](#decoradores)
10. [Módulos](#módulos)
11. [Ejemplos Prácticos](#ejemplos-prácticos)

---

## ¿Qué es TypeScript?

TypeScript es un **superset de JavaScript** que añade tipado estático. Esto significa:
- ✅ Puedes usar todo lo de JavaScript
- ✅ Añades tipos a tus variables, funciones y clases
- ✅ Se compila a JavaScript puro
- ✅ Detecta errores ANTES de ejecutar el código

### Ventajas:
- 🛡️ Previene muchos bugs
- 📖 Código más legible y autodocumentado
- 🎓 Mejor autocompletado en el IDE
- 🔍 Refactorización segura

---

## Instalación y Configuración

### 1. Instalar TypeScript globalmente (opcional):
```bash
npm install -g typescript
```

### 2. Verificar instalación:
```bash
tsc --version
```

### 3. Configuración del proyecto (tsconfig.json):
```json
{
  "compilerOptions": {
    "target": "ES2020",           // Versión de JavaScript objetivo
    "module": "commonjs",          // Sistema de módulos
    "lib": ["ES2020"],             // Librerías disponibles
    "outDir": "./dist",            // Carpeta de salida
    "rootDir": "./src",            // Carpeta de entrada
    "strict": true,                // Modo estricto (recomendado)
    "esModuleInterop": true,       // Compatible con CommonJS
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

## Tipos Básicos

### 1. **string** - Cadenas de texto
```typescript
let nombre: string = "Juan";
let saludo: string = `Hola, ${nombre}`;
```

### 2. **number** - Números (enteros y decimales)
```typescript
let edad: number = 25;
let precio: number = 19.99;
let hexadecimal: number = 0x2A;
```

### 3. **boolean** - Verdadero o falso
```typescript
let esMayor: boolean = true;
let esActivo: boolean = false;
```

### 4. **array** - Arreglos
```typescript
// Forma 1: tipo[]
let numeros: number[] = [1, 2, 3];

// Forma 2: Array<tipo>
let nombres: Array<string> = ["Ana", "Luis"];

// Array con múltiples tipos (Union types)
let mixto: (string | number)[] = [1, "dos", 3];
```

### 5. **any** - Cualquier tipo (evitar cuando sea posible)
```typescript
let algo: any = "puede ser cualquier cosa";
algo = 123;
algo = true;
```

### 6. **null** y **undefined**
```typescript
let nada: null = null;
let indefinido: undefined = undefined;
```

### 7. **literal types** - Valores específicos
```typescript
let direccion: "norte" | "sur" | "este" | "oeste" = "norte";
let respuesta: true | false = true;
let codigo: 200 | 404 | 500 = 200;
```

---

## Tipos Avanzados

### 1. **Union Types** - Múltiples tipos posibles
```typescript
let id: string | number;
id = "ABC123";  // ✅
id = 123;       // ✅
id = true;      // ❌ Error!

// Función que acepta múltiples tipos
function procesar(valor: string | number): void {
  if (typeof valor === "string") {
    console.log(valor.toUpperCase());
  } else {
    console.log(valor.toFixed(2));
  }
}
```

### 2. **Intersection Types** - Combinar tipos
```typescript
type Persona = {
  nombre: string;
  edad: number;
};

type Empleado = {
  id: number;
  departamento: string;
};

// Tipo que combina ambos
type PersonaEmpleado = Persona & Empleado;

const empleado: PersonaEmpleado = {
  nombre: "Carlos",
  edad: 30,
  id: 1,
  departamento: "IT"
};
```

### 3. **Tuple Types** - Arreglo con posiciones tipadas
```typescript
// Tupla con dos elementos: string y number
let tupla: [string, number] = ["hola", 42];

// Tupla con tipos opcionales
let tupla2: [string, number?] = ["hola"];

// Tupla con tipos rest
let tupla3: [string, ...number[]] = ["ID", 1, 2, 3, 4];
```

### 4. **Enum** - Conjunto de constantes con nombre
```typescript
enum Dia {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes
}

let hoy: Dia = Dia.Martes;

// Enum con valores personalizados
enum Estado {
  Activo = "ACTIVO",
  Inactivo = "INACTIVO",
  Pendiente = "PENDIENTE"
}

let estado: Estado = Estado.Activo;
```

### 5. **never** - Valor que nunca ocurre
```typescript
// Función que siempre lanza error o tiene loop infinito
function error(mensaje: string): never {
  throw new Error(mensaje);
}

function loop(): never {
  while (true) {}
}
```

### 6. **void** - Sin retorno
```typescript
function saludar(): void {
  console.log("¡Hola!");
  // No retorna nada
}
```

---

## Interfaces y Tipos

### 1. **Interface** - Contrato para objetos
```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number;  // Propiedad opcional
  readonly createdAt: Date;  // Solo lectura
}

const usuario: Usuario = {
  id: 1,
  nombre: "Ana",
  email: "ana@email.com",
  createdAt: new Date()
};

// Error: usuario.createdAt = new Date(); // No se puede modificar
```

### 2. **Type vs Interface**
```typescript
// Type - Más flexible
type Persona = {
  nombre: string;
  edad: number;
};

// Interface - Mejor para OOP
interface Animal {
  nombre: string;
  sonido(): void;
}

// Interfaces pueden extenderse entre sí
interface Perro extends Animal {
  raza: string;
}
```

### 3. **Propiedades opcionales e indexables**
```typescript
interface Config {
  [key: string]: string | number | boolean;
}

const config: Config = {
  debug: true,
  puerto: 3000,
  host: "localhost"
};
```

### 4. **Interfaces para funciones**
```typescript
interface Operacion {
  (a: number, b: number): number;
}

const sumar: Operacion = (a, b) => a + b;
const multiplicar: Operacion = (a, b) => a * b;
```

---

## Clases

### 1. **Sintaxis básica**
```typescript
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona = new Persona("Luis", 28);
persona.saludar();
```

### 2. **Modificadores de acceso**
```typescript
class CuentaBancaria {
  public saldo: number;      // Accesible desde cualquier lugar
  protected titular: string; // Accesible en la clase y subclases
  private pin: string;       // Solo accesible en la clase

  constructor(titular: string, saldo: number, pin: string) {
    this.titular = titular;
    this.saldo = saldo;
    this.pin = pin;
  }

  // Getter
  getSaldo(): number {
    return this.saldo;
  }

  // Setter
  depositar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo += cantidad;
    }
  }
}

const cuenta = new CuentaBancaria("Juan", 1000, "1234");
console.log(cuenta.saldo);      // ✅
// console.log(cuenta.pin);     // ❌ Error: privado
```

### 3. **Propiedades con parámetros del constructor**
```typescript
class Producto {
  constructor(
    public id: number,
    public nombre: string,
    private precio: number
  ) {}

  obtenerPrecio(): number {
    return this.precio;
  }
}

const producto = new Producto(1, "Laptop", 1200);
```

### 4. **Métodos estáticos**
```typescript
class Utilidades {
  static pi: number = 3.14159;

  static calcularAreaCirculo(radio: number): number {
    return this.pi * radio * radio;
  }
}

console.log(Utilidades.pi);
console.log(Utilidades.calcularAreaCirculo(5));
```

### 5. **Herencia**
```typescript
class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacer_sonido(): void {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  raza: string;

  constructor(nombre: string, raza: string) {
    super(nombre);  // Llamar al constructor de la clase padre
    this.raza = raza;
  }

  hacer_sonido(): void {
    console.log("¡Guau guau!");
  }
}

const perro = new Perro("Rex", "Pastor Alemán");
perro.hacer_sonido();
```

### 6. **Clases abstractas**
```typescript
abstract class Vehiculo {
  abstract velocidadMaxima(): number;

  info(): void {
    console.log("Este es un vehículo");
  }
}

class Auto extends Vehiculo {
  velocidadMaxima(): number {
    return 200;
  }
}

// const v = new Vehiculo(); // ❌ Error: no se puede instanciar clase abstracta
const auto = new Auto();
```

---

## Funciones

### 1. **Tipado básico de funciones**
```typescript
// Tipado de parámetros y retorno
function sumar(a: number, b: number): number {
  return a + b;
}

// Parámetros opcionales
function saludar(nombre: string, titulo?: string): string {
  return titulo ? `${titulo} ${nombre}` : `Hola ${nombre}`;
}

// Parámetros por defecto
function repetir(texto: string, veces: number = 1): void {
  console.log(texto.repeat(veces));
}
```

### 2. **Rest parameters**
```typescript
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((a, b) => a + b, 0);
}

console.log(sumarTodos(1, 2, 3, 4, 5)); // 15
```

### 3. **Sobrecarga de funciones**
```typescript
function procesar(valor: string): string;
function procesar(valor: number): number;
function procesar(valor: string | number): string | number {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return valor * 2;
}

console.log(procesar("hola"));   // "HOLA"
console.log(procesar(5));        // 10
```

### 4. **Arrow functions**
```typescript
const multiplicar = (a: number, b: number): number => a * b;

const numeros: number[] = [1, 2, 3, 4, 5];
const dobles: number[] = numeros.map((n): number => n * 2);
```

### 5. **Callback functions**
```typescript
function procesarDatos(
  datos: number[],
  callback: (item: number) => void
): void {
  datos.forEach(callback);
}

procesarDatos([1, 2, 3], (item) => {
  console.log(item * 2);
});
```

---

## Genéricos

Los genéricos permiten crear funciones, clases e interfaces reutilizables que funcionan con múltiples tipos.

### 1. **Funciones genéricas**
```typescript
// Sintaxis: <T> es una variable de tipo
function identidad<T>(valor: T): T {
  return valor;
}

console.log(identidad<string>("hola"));   // "hola"
console.log(identidad<number>(42));       // 42

// TypeScript puede inferir el tipo
console.log(identidad(true));             // true
```

### 2. **Restricciones genéricas**
```typescript
interface Nombreado {
  nombre: string;
}

// T debe tener la propiedad 'nombre'
function obtenerNombre<T extends Nombreado>(objeto: T): string {
  return objeto.nombre;
}

obtenerNombre({ nombre: "Juan", edad: 30 }); // ✅
// obtenerNombre({ edad: 30 });             // ❌ Error
```

### 3. **Clases genéricas**
```typescript
class Contenedor<T> {
  private items: T[] = [];

  agregar(item: T): void {
    this.items.push(item);
  }

  obtener(index: number): T {
    return this.items[index];
  }

  obtenerTodos(): T[] {
    return this.items;
  }
}

const contenedorNumeros = new Contenedor<number>();
contenedorNumeros.agregar(10);
contenedorNumeros.agregar(20);

const contenedorStrings = new Contenedor<string>();
contenedorStrings.agregar("hola");
```

### 4. **Tipos genéricos comunes**
```typescript
// Partial: todas las propiedades opcionales
type PersonaOpcional = Partial<{
  nombre: string;
  edad: number;
}>;

// Pick: seleccionar solo ciertas propiedades
type NombreYEdad = Pick<{
  nombre: string;
  edad: number;
  email: string;
}, "nombre" | "edad">;

// Record: mapeo de claves a valores
type Colores = Record<"rojo" | "verde" | "azul", string>;
const colorMap: Colores = {
  rojo: "#FF0000",
  verde: "#00FF00",
  azul: "#0000FF"
};

// Readonly: hacer propiedades de solo lectura
type PersonaInmutable = Readonly<{
  nombre: string;
  edad: number;
}>;
```

---

## Decoradores

Los decoradores son una función que se ejecuta cuando se define una clase, método o propiedad.

### 1. **Decoradores de clase**
```typescript
function logClase(constructor: Function) {
  console.log(`Se creó la clase ${constructor.name}`);
}

@logClase
class Usuario {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

// En la consola: "Se creó la clase Usuario"
```

### 2. **Decoradores de método**
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Llamando ${propertyKey} con argumentos:`, args);
    return metodoOriginal.apply(this, args);
  };

  return descriptor;
}

class Calculadora {
  @log
  sumar(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculadora();
calc.sumar(5, 3);
// Consola: "Llamando sumar con argumentos: [5, 3]"
```

### 3. **Decoradores de propiedad**
```typescript
function validarPositivo(target: any, propertyKey: string) {
  let valor: number;

  const getter = function() {
    return valor;
  };

  const setter = function(nuevoValor: number) {
    if (nuevoValor < 0) {
      throw new Error(`${propertyKey} debe ser positivo`);
    }
    valor = nuevoValor;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Producto {
  @validarPositivo
  precio: number;

  constructor(precio: number) {
    this.precio = precio;
  }
}
```

**Nota**: Para usar decoradores, debes habilitarlos en `tsconfig.json`:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

---

## Módulos

### 1. **Exportar e importar**
```typescript
// archivo: usuario.ts
export interface Usuario {
  id: number;
  nombre: string;
}

export class UsuarioService {
  obtener(id: number): Usuario {
    return { id, nombre: "Juan" };
  }
}

// archivo: main.ts
import { Usuario, UsuarioService } from "./usuario";

const servicio = new UsuarioService();
const usuario: Usuario = servicio.obtener(1);
```

### 2. **Exportación por defecto**
```typescript
// archivo: config.ts
export default {
  puerto: 3000,
  host: "localhost"
};

// archivo: main.ts
import config from "./config";
console.log(config.puerto);
```

### 3. **Importar con alias**
```typescript
import { UsuarioService as Servicio } from "./usuario";

const s = new Servicio();
```

### 4. **Importar todo**
```typescript
import * as usuario from "./usuario";

const servicio = new usuario.UsuarioService();
```

---

## Ejemplos Prácticos

### Ejemplo 1: Sistema de gestión de tareas

```typescript
interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  prioridad: "baja" | "media" | "alta";
}

class GestorTareas {
  private tareas: Tarea[] = [];
  private proximoId: number = 1;

  agregarTarea(titulo: string, prioridad: "baja" | "media" | "alta"): void {
    const tarea: Tarea = {
      id: this.proximoId++,
      titulo,
      completada: false,
      prioridad
    };
    this.tareas.push(tarea);
    console.log(`✅ Tarea agregada: ${titulo}`);
  }

  completarTarea(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = true;
      console.log(`✓ Tarea completada: ${tarea.titulo}`);
    } else {
      console.log("❌ Tarea no encontrada");
    }
  }

  obtenerTareasPendientes(): Tarea[] {
    return this.tareas.filter(t => !t.completada);
  }

  listarTareas(): void {
    if (this.tareas.length === 0) {
      console.log("📋 No hay tareas");
      return;
    }

    console.log("\n📋 TAREAS:");
    this.tareas.forEach(tarea => {
      const estado = tarea.completada ? "✓" : "○";
      console.log(
        `  ${estado} [${tarea.prioridad.toUpperCase()}] ${tarea.titulo}`
      );
    });
    console.log();
  }
}
```

### Ejemplo 2: Validador de formularios

```typescript
type ValidadorFn = (valor: any) => boolean | string;

interface ReglaValidacion {
  nombre: string;
  validador: ValidadorFn;
}

class Validador {
  private reglas: Map<string, ReglaValidacion[]> = new Map();

  agregarRegla(campo: string, regla: ReglaValidacion): void {
    if (!this.reglas.has(campo)) {
      this.reglas.set(campo, []);
    }
    this.reglas.get(campo)!.push(regla);
  }

  validar(datos: { [key: string]: any }): { valido: boolean; errores: string[] } {
    const errores: string[] = [];

    this.reglas.forEach((reglas, campo) => {
      const valor = datos[campo];

      reglas.forEach(regla => {
        const resultado = regla.validador(valor);
        if (resultado !== true) {
          errores.push(typeof resultado === "string" ? resultado : `Error en ${campo}`);
        }
      });
    });

    return {
      valido: errores.length === 0,
      errores
    };
  }
}

// Uso:
const validador = new Validador();

validador.agregarRegla("email", {
  nombre: "email",
  validador: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor) || "Email inválido"
});

validador.agregarRegla("edad", {
  nombre: "edad",
  validador: (valor) => valor >= 18 || "Debe ser mayor de 18 años"
});

const resultado = validador.validar({
  email: "usuario@email.com",
  edad: 20
});

console.log(resultado);
```

---

## Consejos Prácticos

1. **Usa `strict: true`** en tsconfig.json para mejor seguridad de tipos
2. **Aprovecha el type inference** - TypeScript puede adivinar tipos en muchos casos
3. **Evita `any`** - es como volver a JavaScript normal
4. **Lee los errores de TypeScript** - son muy descriptivos y útiles
5. **Instala types para librerías** - `npm install --save-dev @types/nombre-libreria`
6. **Usa interfaces** para contratos públicos
7. **Usa types** para tipos más complejos o uniones
8. **Aplica principios SOLID** - TypeScript los facilita

---

## Recursos Útiles

- 📖 [Documentación oficial de TypeScript](https://www.typescriptlang.org/)
- 🎓 [Handbook de TypeScript](https://www.typescriptlang.org/docs/handbook/)
- 🛠️ [Playground de TypeScript](https://www.typescriptlang.org/play)

---

**¡Felicidades! Ya conoces TypeScript. Ahora puedes aprender Angular con una base sólida.** 🚀

