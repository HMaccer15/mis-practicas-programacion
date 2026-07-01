# ⚡ Guía Rápida de TypeScript

## 1️⃣ Lo MÍNIMO que debes saber

### Tipos Básicos
```typescript
let string: string = "hola";
let numero: number = 42;
let booleano: boolean = true;
let array: string[] = ["a", "b"];
let array2: Array<number> = [1, 2, 3];
```

### Funciones Tipadas
```typescript
function sumar(a: number, b: number): number {
  return a + b;
}

const multiplicar = (x: number, y: number): number => x * y;
```

### Interfaces (Contratos)
```typescript
interface Usuario {
  nombre: string;
  edad: number;
  email?: string; // Opcional
}

const usuario: Usuario = {
  nombre: "Juan",
  edad: 30
};
```

### Clases
```typescript
class Persona {
  constructor(public nombre: string, private edad: number) {}

  saludar(): void {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const p = new Persona("Ana", 25);
```

---

## 2️⃣ Los ERRORES más comunes

### ❌ Error 1: Olvidar el tipo
```typescript
// Mal
let valor = 5;
valor = "hola"; // 🔥 Error!

// Bien
let valor: number = 5;
```

### ❌ Error 2: Propiedad no definida
```typescript
// Mal
const usuario: { nombre: string } = { nombre: "Juan" };
console.log(usuario.edad); // 🔥 Propiedad no existe!

// Bien
interface Usuario {
  nombre: string;
  edad?: number;
}
const usuario: Usuario = { nombre: "Juan" };
```

### ❌ Error 3: Tipo de retorno incorrecto
```typescript
// Mal
function obtenerEdad(): number {
  return "treinta"; // 🔥 No es número!
}

// Bien
function obtenerEdad(): number {
  return 30;
}
```

### ❌ Error 4: Argumentos incorrectos
```typescript
// Mal
function sumar(a: number, b: number): number {
  return a + b;
}
sumar("5", "3"); // 🔥 Son strings, no numbers!

// Bien
sumar(5, 3);
```

---

## 3️⃣ TIPS para escribir mejor código TypeScript

### ✅ Tip 1: Usa tipos específicos, no `any`
```typescript
// Evita (muy general)
function procesar(data: any): any {
  return data;
}

// Usa (específico)
function procesar<T>(data: T): T {
  return data;
}
```

### ✅ Tip 2: Aprovecha la inferencia
```typescript
// Innecesario
const numero: number = 42;

// Better
const numero = 42; // TypeScript infiere: number
```

### ✅ Tip 3: Usa Union Types para flexibilidad
```typescript
// Mal
function procesar(valor: any) {}

// Bien
function procesar(valor: string | number) {}
```

### ✅ Tip 4: Reutiliza interfaces
```typescript
// Mal: interfaces separadas
interface PersonaBasica { nombre: string; }
interface PersonaEmpleado { nombre: string; departamento: string; }

// Bien: extender interfaces
interface Persona { nombre: string; }
interface Empleado extends Persona { departamento: string; }
```

### ✅ Tip 5: Usa métodos auxiliares en clases
```typescript
class Usuario {
  private clave: string = "";

  establecerClave(nueva: string): boolean {
    if (!this.esClaveValida(nueva)) return false;
    this.clave = nueva;
    return true;
  }

  private esClaveValida(clave: string): boolean {
    return clave.length >= 8;
  }
}
```

---

## 4️⃣ ACCESOS RÁPIDOS

### Compilar TypeScript a JavaScript
```bash
tsc archivo.ts
# Resultado: archivo.js
```

### Ver la estructura de tipos
```bash
# En tu IDE, presiona Ctrl+espacio para autocompletado
# También muestra el tipo de la variable
```

### Usar ts-node para ejecutar directamente
```bash
npx ts-node archivo.ts
```

### Revisar tipos en el playground
Visita: https://www.typescriptlang.org/play

---

## 5️⃣ HOJA DE REFERENCIA

| Concepto | Ejemplo | Cuándo usar |
|----------|---------|-----------|
| `string` | `"hola"` | Texto |
| `number` | `42` | Números |
| `boolean` | `true` | Verdadero/falso |
| `[]` | `string[]` | Listas |
| `interface` | `interface User { }` | Definir forma de objetos |
| `type` | `type ID = string \| number` | Uniones y tipos complejos |
| `class` | `class Persona { }` | POO |
| `<T>` | `function<T>(x: T)` | Genéricos |
| `?` | `edad?: number` | Opcional |
| `readonly` | `readonly name: string` | No modificable |
| `private` | `private x: number` | Solo en la clase |
| `protected` | `protected x: number` | En la clase y subclases |
| `public` | `public x: number` | Acceso libre (por defecto) |

---

## 6️⃣ FLUJO DE APRENDIZAJE RECOMENDADO

```
Día 1: Tipos Básicos
  └─ Entiende string, number, boolean, arrays

Día 2: Funciones
  └─ Tipado de funciones y parámetros

Día 3: Interfaces
  └─ Cómo crear contratos para datos

Día 4: Clases
  └─ POO con TypeScript

Día 5: Genéricos
  └─ Código reutilizable

Día 6: Proyectos Pequeños
  └─ Aplica lo aprendido

Día 7: Angular
  └─ Ya estás listo!
```

---

## 7️⃣ PALABRAS CLAVE IMPORTANTES

- **Type**: Define un nuevo tipo
- **Interface**: Define la estructura de un objeto
- **Class**: Crea clases orientadas a objetos
- **Extends**: Herencia
- **Implements**: Una clase implementa una interface
- **Generic**: `<T>` para tipos genéricos
- **Readonly**: No se puede modificar después de crearse
- **Optional**: `?` significa que es opcional

---

## 8️⃣ EJERCICIO RÁPIDO (5 minutos)

Intenta completar esto sin mirar la solución:

```typescript
// 1. Crea una interface Coche
// 2. Con propiedades: marca (string), velocidad (number), encendido (boolean)
// 3. Crea una clase que implemente esta interface
// 4. Agrega método acelerar() que aumente velocidad
// 5. Agrega método detener() que ponga encendido en false

// Solución abajo... (no mires hasta intentar!)
```

<details>
<summary>🔍 Ver Solución</summary>

```typescript
interface Coche {
  marca: string;
  velocidad: number;
  encendido: boolean;
}

class MiCoche implements Coche {
  marca: string;
  velocidad: number = 0;
  encendido: boolean = false;

  constructor(marca: string) {
    this.marca = marca;
  }

  acelerar(): void {
    if (this.encendido) {
      this.velocidad += 10;
      console.log(`Velocidad: ${this.velocidad} km/h`);
    } else {
      console.log("El coche está apagado");
    }
  }

  detener(): void {
    this.encendido = false;
    this.velocidad = 0;
    console.log("Coche detenido");
  }

  encender(): void {
    this.encendido = true;
    console.log(`${this.marca} encendido`);
  }
}

const miAuto = new MiCoche("Toyota");
miAuto.encender();
miAuto.acelerar();
miAuto.acelerar();
miAuto.detener();
```

</details>

---

## 9️⃣ CHECKLIST ANTES DE ESCRIBIR CÓDIGO

- ☐ ¿Está claro el tipo de cada variable?
- ☐ ¿Las funciones tienen tipos de parámetros y retorno?
- ☐ ¿He definido interfaces para objetos?
- ☐ ¿Estoy usando genéricos donde es apropiado?
- ☐ ¿Compila sin errores?
- ☐ ¿El código es fácil de leer?

---

## 🔟 RECURSOS ESPECIALES

### Para Practicar
- `npm run demo:*` - Ejecuta cualquier ejemplo
- `GUIA_TYPESCRIPT.md` - Guía completa
- `EJERCICIOS.md` - Ejercicios para practicar

### Herramientas Online
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Exercism.io](https://exercism.io) - Ejercicios interactivos
- [LeetCode](https://leetcode.com) - Problemas de codificación

### Comunidades
- [TypeScript Discord](https://discord.gg/typescript)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/typescript)
- [Reddit r/typescript](https://www.reddit.com/r/typescript/)

---

**Recuerda**: TypeScript es JavaScript + Tipos. Mientras más lo uses, más natural te parecerá. 🚀

¿Necesitas un concepto específico? Busca en `GUIA_TYPESCRIPT.md`.
¿Quieres practicar? Ve a `EJERCICIOS.md`.
¿Listo para Angular? ¡Es tu momento! 🎉

