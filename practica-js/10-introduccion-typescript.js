/**
 * ═════════════════════════════════════════════════════════════
 * INTRODUCCIÓN A TYPESCRIPT
 * ═════════════════════════════════════════════════════════════
 * 
 * TypeScript es el siguiente paso después de JavaScript.
 * Es OBLIGATORIO para Angular.
 * 
 * Este archivo es solo referencia. Para practicar TypeScript,
 * necesitarás configurar Node.js con TypeScript compiler.
 */

/*

╔════════════════════════════════════════════════════════════════╗
║         ¿QUÉ ES TYPESCRIPT?                                  ║
╚════════════════════════════════════════════════════════════════╝

TypeScript = JavaScript + Tipos Estáticos

TypeScript es un "superset" de JavaScript que se compila a
JavaScript. Añade tipado opcional que ayuda a detectar errores
antes de ejecutar.

COMPARACIÓN:

JavaScript:
    const suma = (a, b) => a + b;
    suma(5, "10");  // ¡Resultado confuso!

TypeScript:
    const suma = (a: number, b: number): number => a + b;
    suma(5, "10");  // ❌ ERROR: El argumento debe ser number

═════════════════════════════════════════════════════════════════
*/

// ═════════════════════════════════════════════════════════════
// TIPOS BÁSICOS EN TYPESCRIPT
// ═════════════════════════════════════════════════════════════

/*

┌─────────────────────────────────────────────────────────────┐
│ TIPOS PRIMITIVOS                                            │
└─────────────────────────────────────────────────────────────┘

let numero: number = 42;
let texto: string = "Hola";
let booleano: boolean = true;
let indeterminado: undefined = undefined;
let nulo: null = null;
let cualquiera: any = "Puede ser cualquier cosa";

┌─────────────────────────────────────────────────────────────┐
│ ARRAYS                                                      │
└─────────────────────────────────────────────────────────────┘

let numeros: number[] = [1, 2, 3];
let textos: Array<string> = ["a", "b", "c"];
let mixto: (number | string)[] = [1, "dos", 3];

┌─────────────────────────────────────────────────────────────┐
│ UNIONES DE TIPOS                                            │
└─────────────────────────────────────────────────────────────┘

let id: number | string;
id = 123;        // ✓ Valid
id = "abc";      // ✓ Valid
id = true;       // ✗ Error

┌─────────────────────────────────────────────────────────────┐
│ INTERFACES                                                  │
└─────────────────────────────────────────────────────────────┘

interface Usuario {
    nombre: string;
    edad: number;
    email?: string;  // Propiedad opcional
}

const usuario: Usuario = {
    nombre: "Juan",
    edad: 30
    // email no es obligatorio
};

┌─────────────────────────────────────────────────────────────┐
│ TIPOS GENÉRICOS                                             │
└─────────────────────────────────────────────────────────────┘

// Función genérica
function obtenerPrimero<T>(arr: T[]): T {
    return arr[0];
}

const num = obtenerPrimero([1, 2, 3]);  // Type: number
const str = obtenerPrimero(["a", "b"]); // Type: string

// Array de tipos
const numeros: Array<number> = [1, 2, 3];
const textos: Array<string> = ["a", "b"];

// Promise de tipos
const promesa: Promise<string> = fetch("/api/nombre").then(r => r.text());

*/

// ═════════════════════════════════════════════════════════════
// CÓDIGO TYPESCRIPT TÍPICO
// ═════════════════════════════════════════════════════════════

/*

// PASO 1: Crear una interfaz (contrato)
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

// PASO 2: Crear una clase
class TiendaProductos {
    private productos: Producto[] = [];

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }

    obtenerProducto(id: number): Producto | undefined {
        return this.productos.find(p => p.id === id);
    }

    obtenerTotal(): number {
        return this.productos.reduce((total, p) => 
            total + (p.precio * p.stock), 0
        );
    }
}

// PASO 3: Usar la clase
const tienda = new TiendaProductos();
tienda.agregarProducto({
    id: 1,
    nombre: "Laptop",
    precio: 800,
    stock: 5
});

*/

// ═════════════════════════════════════════════════════════════
// DECORADORES (IMPORTANTE PARA ANGULAR)
// ═════════════════════════════════════════════════════════════

/*

Los decoradores son funciones especiales en TypeScript que
modifican el comportamiento de clases o métodos.

En Angular, los decoradores son ESENCIALES.

@Component      → Define un componente
@Injectable     → Define un servicio inyectable
@Input          → Propiedad de entrada
@Output         → Propiedad de salida
@NgModule       → Define un módulo
@Directive      → Define una directiva

Ejemplos de decoradores:

@Component({
    selector: 'app-root',
    template: '<h1>Hola</h1>',
    styles: ['h1 { color: red; }']
})
export class AppComponent {
    @Input() titulo: string = "Mi App";
    @Output() cerrar = new EventEmitter();
}

*/

// ═════════════════════════════════════════════════════════════
// VENTAJAS DE TYPESCRIPT
// ═════════════════════════════════════════════════════════════

const VENTAJAS_TS = `

✅ VENTAJAS DE TYPESCRIPT

1. Type Safety
   - Detecta errores en tiempo de desarrollo
   - No esperes a ejecutar para encontrar bugs

2. Mejor IDE Support
   - Autocompletado más inteligente
   - Refactoring más seguro
   - Go to Definition funciona perfecto

3. Documentación Integrada
   - Los tipos sirven como documentación
   - No necesitas comentarios adicionales

4. Mantenibilidad
   - Código más predecible
   - Cambios futuros son más seguros

5. Escalabilidad
   - Proyectos grandes sin confusiones
   - Equipos grandes trabajan mejor

6. Compatibilidad
   - Se compila a JavaScript normal
   - Funciona en cualquier navegador
   - Angular lo requiere

`;

console.log(VENTAJAS_TS);

// ═════════════════════════════════════════════════════════════
// DESVENTAJAS
// ═════════════════════════════════════════════════════════════

const DESVENTAJAS_TS = `

❌ DESVENTAJAS DE TYPESCRIPT

1. Curva de Aprendizaje
   - Más conceptos que aprender
   - Puede ser abrumador al inicio

2. Configuración
   - Necesita compilación
   - Más herramientas en el proyecto

3. Verbosidad
   - Más código que escribir
   - A veces parece redundante

4. Tiempo de Compilación
   - Paso adicional antes de ejecutar
   - Puede ralentizar desarrollo

`;

console.log(DESVENTAJAS_TS);

// ═════════════════════════════════════════════════════════════
// CÓMO INSTALAR Y CONFIGURAR TYPESCRIPT
// ═════════════════════════════════════════════════════════════

const INSTALACION_TS = `

📦 INSTALACIÓN DE TYPESCRIPT

PASO 1: Instalar Node.js
    Descarga desde https://nodejs.org

PASO 2: Instalar TypeScript globalmente
    npm install -g typescript

PASO 3: Verificar instalación
    tsc --version

PASO 4: Crear proyecto
    mkdir mi-proyecto-ts
    cd mi-proyecto-ts
    npm init -y

PASO 5: Crear archivo tsconfig.json
    tsc --init

PASO 6: Crear archivo .ts
    // main.ts
    const nombre: string = "Juan";
    console.log(nombre);

PASO 7: Compilar TypeScript
    tsc main.ts

PASO 8: Ejecutar JavaScript resultante
    node main.js

RESULTADO:
    Se crea main.js (JavaScript compilado)
    Se ejecuta igual que JavaScript normal

`;

console.log(INSTALACION_TS);

// ═════════════════════════════════════════════════════════════
// EJEMPLOS PRÁCTICOS DE TYPESCRIPT
// ═════════════════════════════════════════════════════════════

const EJEMPLOS_TS = `

📝 EJEMPLOS PRÁCTICOS

EJEMPLO 1: Función tipada
─────────────────────────
function saludar(nombre: string): string {
    return \`Hola, \${nombre}!\`;
}

const resultado: string = saludar("María");
console.log(resultado);

EJEMPLO 2: Interfaz
─────────────────────────
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo?: boolean;  // opcional
}

const usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@example.com"
};

EJEMPLO 3: Clase
─────────────────────────
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): void {
        console.log(\`Me llamo \${this.nombre}\`);
    }
}

EJEMPLO 4: Tipos Genéricos
─────────────────────────
function procesar<T>(valor: T): T {
    console.log(valor);
    return valor;
}

procesar<string>("Texto");
procesar<number>(42);

EJEMPLO 5: Union Types
─────────────────────────
function mostrarId(id: string | number): void {
    if (typeof id === "string") {
        console.log(\`ID string: \${id}\`);
    } else {
        console.log(\`ID número: \${id}\`);
    }
}

EJEMPLO 6: Tipos Avanzados
─────────────────────────
type Resultado = "éxito" | "error" | "pendiente";

function procesarOperacion(resultado: Resultado): void {
    switch(resultado) {
        case "éxito":
            console.log("✓ Operación exitosa");
            break;
        case "error":
            console.log("✗ Hubo un error");
            break;
        case "pendiente":
            console.log("⏳ Esperando...");
    }
}

`;

console.log(EJEMPLOS_TS);

// ═════════════════════════════════════════════════════════════
// ROADMAP: JAVASCRIPT → TYPESCRIPT → ANGULAR
// ═════════════════════════════════════════════════════════════

const ROADMAP_FINAL = `

🎯 ROADMAP FINAL HACIA ANGULAR

┌─────────────────────────────────────────┐
│ JAVASCRIPT (8-10 semanas)               │
├─────────────────────────────────────────┤
│ ✓ Fundamentos                           │
│ ✓ Funciones y Closures                  │
│ ✓ Objetos y Clases                      │
│ ✓ Asincronía y Promesas                 │
│ ✓ DOM y Eventos                         │
│ ✓ Conceptos Avanzados                   │
└─────────────────────────────────────────┘
                   ⬇️
┌─────────────────────────────────────────┐
│ TYPESCRIPT (2-3 semanas)                │
├─────────────────────────────────────────┤
│ ✓ Tipos Básicos                         │
│ ✓ Interfaces                            │
│ ✓ Clases                                │
│ ✓ Generics                              │
│ ✓ Decoradores                           │
│ ✓ Módulos                               │
└─────────────────────────────────────────┘
                   ⬇️
┌─────────────────────────────────────────┐
│ ANGULAR (6-8 semanas)                   │
├─────────────────────────────────────────┤
│ ✓ Componentes                           │
│ ✓ Templates                             │
│ ✓ Directivas                            │
│ ✓ Servicios                             │
│ ✓ Dependency Injection                  │
│ ✓ Routing                               │
│ ✓ HTTP Client                           │
│ ✓ RxJS y Observables                    │
│ ✓ Forms                                 │
│ ✓ Testing                               │
└─────────────────────────────────────────┘

TIEMPO TOTAL: 16-21 semanas (4-5 meses)

DEDICACIÓN RECOMENDADA:
- 2-3 horas diarias
- 5-6 días a la semana
- Hacer proyectos personales
- Participar en comunidades

`;

console.log(ROADMAP_FINAL);

// ═════════════════════════════════════════════════════════════
// PASOS SIGUIENTES
// ═════════════════════════════════════════════════════════════

const PROXIMOS_PASOS = `

🚀 PRÓXIMOS PASOS

Cuando domines TODO el contenido de este curso de JavaScript:

1. Aprende TypeScript básico (2 semanas)
   - Lee documentación oficial
   - Haz pequeños proyectos

2. Aprende herramientas de desarrollo
   - npm y package.json
   - Git y GitHub
   - Webpack o Vite
   - ESLint y Prettier

3. Aprende RxJS
   - Observable
   - Subject
   - Operators (map, filter, etc.)
   - ¡Crucial para Angular!

4. Comienza con Angular
   - Componentes básicos
   - Plantillas
   - Servicios
   - Routing

5. Construye proyectos reales
   - Blog
   - E-commerce
   - Sistema de tareas
   - Red social simple

═══════════════════════════════════════════════════════════════

RECURSOS PARA CONTINUAR:

📖 Documentación Oficial
   - TypeScript: https://www.typescriptlang.org/docs/
   - Angular: https://angular.io/docs

🎥 Canales YouTube
   - Traversy Media
   - The Net Ninja
   - Angular University

🌐 Comunidades
   - Stack Overflow
   - Reddit: r/learnprogramming, r/angular
   - Discord: Comunidades de Angular

📚 Cursos Recomendados
   - Udemy: Angular - The Complete Guide
   - Pluralsight
   - Frontend Masters

`;

console.log(PROXIMOS_PASOS);

// ═════════════════════════════════════════════════════════════

console.log(`

╔════════════════════════════════════════════════════════════════╗
║                   ¡FELICIDADES DE NUEVO!                      ║
║                                                                ║
║  Has alcanzado el final de este curso de JavaScript.          ║
║                                                                ║
║  Ahora tienes la base sólida para:                             ║
║  ✓ Aprender TypeScript con facilidad                          ║
║  ✓ Dominar Angular en 6-8 semanas                             ║
║  ✓ Convertirte en un desarrollador Frontend profesional       ║
║                                                                ║
║  Recuerda siempre:                                             ║
║  - La programación se aprende haciendo, no solo leyendo        ║
║  - Cometer errores es parte del proceso                       ║
║  - La consistencia es más importante que la intensidad        ║
║  - Ayuda a otros, enseña lo que aprendiste                    ║
║                                                                ║
║  ¡Mucho éxito en tu camino como desarrollador! 🚀             ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

SIGUIENTE: Comienza a practicar TypeScript
           Ve a la documentación oficial: https://www.typescriptlang.org/docs

`);

