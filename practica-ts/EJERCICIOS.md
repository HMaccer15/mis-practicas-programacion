# 🏋️ Ejercicios Prácticos de TypeScript

## Ejercicio 1: Crear una Interface de Producto

**Objetivo**: Entender interfaces y tipos básicos

```typescript
// TODO: Crea una interface llamada 'Producto' con:
// - id: number
// - nombre: string
// - precio: number
// - enStock: boolean
// - categorías: string[]

// TODO: Crea un array de productos
// TODO: Crea una función que filtre productos por categoría
```

**Solución esperada**:
```typescript
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  enStock: boolean;
  categorías: string[];
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    enStock: true,
    categorías: ["electrónica", "computadoras"]
  }
];

function filtrarPorCategoria(
  productos: Producto[],
  categoria: string
): Producto[] {
  return productos.filter(p => p.categorías.includes(categoria));
}
```

---

## Ejercicio 2: Crear una Clase de Carrito de Compras

**Objetivo**: Practicar clases, métodos y estado

```typescript
// TODO: Crea una clase 'CarritoCompras' con:
// - items: Producto[] (array privado)
// - agregarProducto(producto: Producto): void
// - removerProducto(id: number): void
// - calcularTotal(): number
// - obtenerItems(): Producto[]

// TODO: Instancia el carrito y pruébalo con algunos productos
```

**Solución esperada**:
```typescript
class CarritoCompras {
  private items: Producto[] = [];

  agregarProducto(producto: Producto): void {
    this.items.push(producto);
    console.log(`${producto.nombre} agregado al carrito`);
  }

  removerProducto(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.precio, 0);
  }

  obtenerItems(): Producto[] {
    return [...this.items];
  }
}

const carrito = new CarritoCompras();
// ... usar el carrito
```

---

## Ejercicio 3: Función Genérica de Filtrado

**Objetivo**: Aprender genéricos

```typescript
// TODO: Crea una función genérica llamada 'filtrar' que:
// - Acepte un array de cualquier tipo
// - Acepte una función de predicado
// - Retorne un array filtrado

// Ejemplo de uso:
// const numeros = [1, 2, 3, 4, 5];
// const pares = filtrar(numeros, n => n % 2 === 0);
```

**Solución esperada**:
```typescript
function filtrar<T>(items: T[], predicado: (item: T) => boolean): T[] {
  return items.filter(predicado);
}

const numeros = [1, 2, 3, 4, 5];
const pares = filtrar(numeros, n => n % 2 === 0);
console.log(pares); // [2, 4]

const palabras = ["hola", "mundo", "typescript"];
const largas = filtrar(palabras, p => p.length > 4);
console.log(largas); // ["typescript"]
```

---

## Ejercicio 4: Sistema de Permisos (Union Types)

**Objetivo**: Practicar union types y tipos literales

```typescript
// TODO: Define tipos para permisos: "leer" | "escribir" | "eliminar"
// TODO: Crea una interface 'Usuario' con:
// - nombre: string
// - permisos: ("leer" | "escribir" | "eliminar")[]

// TODO: Crea una función que verifique si un usuario tiene permiso
// - tienePermiso(usuario: Usuario, permiso: "leer" | "escribir" | "eliminar"): boolean
```

**Solución esperada**:
```typescript
type Permiso = "leer" | "escribir" | "eliminar";

interface Usuario {
  nombre: string;
  permisos: Permiso[];
}

function tienePermiso(usuario: Usuario, permiso: Permiso): boolean {
  return usuario.permisos.includes(permiso);
}

const admin: Usuario = {
  nombre: "Administrador",
  permisos: ["leer", "escribir", "eliminar"]
};

console.log(tienePermiso(admin, "escribir")); // true
```

---

## Ejercicio 5: Calculadora Genérica

**Objetivo**: Combinar clases, genéricos y tipos

```typescript
// TODO: Crea una clase 'Calculadora<T>' que:
// - Tenga un array de valores privado
// - agregarValor(valor: T): void
// - limpiar(): void
// - obtenerValores(): T[]

// TODO: Crea una subclase 'CalculadoraNumerica' que:
// - Extienda Calculadora<number>
// - Agregue método suma(): number
// - Agregue método promedio(): number
```

**Solución esperada**:
```typescript
class Calculadora<T> {
  private valores: T[] = [];

  agregarValor(valor: T): void {
    this.valores.push(valor);
  }

  limpiar(): void {
    this.valores = [];
  }

  obtenerValores(): T[] {
    return [...this.valores];
  }
}

class CalculadoraNumerica extends Calculadora<number> {
  suma(): number {
    return this.obtenerValores().reduce((a, b) => a + b, 0);
  }

  promedio(): number {
    const valores = this.obtenerValores();
    return valores.length > 0 ? this.suma() / valores.length : 0;
  }
}

const calc = new CalculadoraNumerica();
calc.agregarValor(10);
calc.agregarValor(20);
calc.agregarValor(30);
console.log(calc.suma()); // 60
console.log(calc.promedio()); // 20
```

---

## Ejercicio 6: Validador de Email Mejorado

**Objetivo**: Practicar tipos avanzados y funciones

```typescript
// TODO: Crea un tipo personalizado 'ResultadoValidacion' que contenga:
// - valido: boolean
// - mensaje: string
// - errores?: string[]

// TODO: Crea una función que valide emails y retorne ResultadoValidacion
// - Debe validar que no esté vacío
// - Debe validar el formato (@, .)
// - Debe validar longitud (5-100 caracteres)
```

**Solución esperada**:
```typescript
type ResultadoValidacion = {
  valido: boolean;
  mensaje: string;
  errores?: string[];
};

function validarEmail(email: string): ResultadoValidacion {
  const errores: string[] = [];

  if (!email || email.trim() === "") {
    errores.push("El email no puede estar vacío");
  }
  if (email.length < 5 || email.length > 100) {
    errores.push("El email debe tener entre 5 y 100 caracteres");
  }
  if (!email.includes("@") || !email.includes(".")) {
    errores.push("El email debe tener formato válido (ejemplo@dominio.com)");
  }

  if (errores.length > 0) {
    return {
      valido: false,
      mensaje: "Email inválido",
      errores
    };
  }

  return {
    valido: true,
    mensaje: "Email válido"
  };
}

console.log(validarEmail("usuario@email.com")); // valido: true
console.log(validarEmail("usuario")); // valido: false con errores
```

---

## Ejercicio 7: Composición de Funciones

**Objetivo**: Entender funciones de orden superior

```typescript
// TODO: Crea funciones que:
// 1. multipliquePor(factor: number) - retorna función
// 2. sumame(valor: number) - retorna función
// 3. componerFunciones<T>(...funciones) - compone múltiples funciones

// Uso:
// const multiplicar2 = multipliquePor(2);
// const sumar5 = sumame(5);
// const resultado = componerFunciones(multiplicar2, sumar5)(3);
// // (3 * 2) + 5 = 11
```

**Solución esperada**:
```typescript
function multipliquePor(factor: number) {
  return (valor: number) => valor * factor;
}

function sumame(valor: number) {
  return (num: number) => num + valor;
}

function componerFunciones<T>(
  ...funciones: Array<(arg: T) => T>
): (arg: T) => T {
  return (valor: T) => {
    return funciones.reduce((result, fn) => fn(result), valor);
  };
}

const multiplicar2 = multipliquePor(2);
const sumar5 = sumame(5);
const resultado = componerFunciones(multiplicar2, sumar5)(3);
console.log(resultado); // 11
```

---

## Ejercicio 8: Tipo Avanzado con Utility Types

**Objetivo**: Usar tipos genéricos predefinidos

```typescript
// TODO: Crea una interface 'Blog' con:
// - id: number
// - titulo: string
// - contenido: string
// - autor: string
// - fecha: Date
// - etiquetas: string[]

// TODO: Crea tipos usando Partial, Pick y Readonly:
// - BlogParcial: Partial<Blog>
// - BlogEdicion: Pick<Blog, "titulo" | "contenido">
// - BlogInmutable: Readonly<Blog>

// TODO: Crea una función que actualice un blog (BlogParcial)
```

**Solución esperada**:
```typescript
interface Blog {
  id: number;
  titulo: string;
  contenido: string;
  autor: string;
  fecha: Date;
  etiquetas: string[];
}

type BlogParcial = Partial<Blog>;
type BlogEdicion = Pick<Blog, "titulo" | "contenido">;
type BlogInmutable = Readonly<Blog>;

function actualizarBlog(blog: Blog, cambios: BlogParcial): Blog {
  return { ...blog, ...cambios };
}

function editarBlog(blog: Blog, cambios: BlogEdicion): Blog {
  return { ...blog, ...cambios };
}

const blog: Blog = {
  id: 1,
  titulo: "Mi Blog",
  contenido: "Contenido inicial",
  autor: "Juan",
  fecha: new Date(),
  etiquetas: ["typescript"]
};

const blogActualizado = actualizarBlog(blog, { titulo: "Nuevo Título" });
```

---

## Cómo Usar Estos Ejercicios

### Opción 1: En un archivo nuevo
```bash
# Crea src/ejercicios.ts
cp src/01-tipos-basicos.ts src/ejercicios.ts

# Edita y agrega los ejercicios
# Ejecuta con:
npm run demo:ejercicios  # (si lo configuraste en package.json)
# O:
npx ts-node src/ejercicios.ts
```

### Opción 2: Completar online
- Copia el código en [TypeScript Playground](https://www.typescriptlang.org/play)
- Resuelve los ejercicios
- Verifica los errores de TypeScript

---

## 📝 Consejos

1. **Lee los TODO**: Entiendo qué necesitas hacer antes de codificar
2. **Comienza simple**: Empieza con ejercicios 1-3
3. **Avanza gradualmente**: Ejercicios 4-6 son más desafiantes
4. **Experimenta**: No copies la solución, intenta primero
5. **Compara**: Revisa la solución solo después de intentar

---

## 🎯 Criterios de Éxito

✅ El código compila sin errores
✅ Los tipos son específicos (evita `any`)
✅ Las funciones hacen lo esperado
✅ Entiendes cada línea que escribiste
✅ Puedes explicar por qué usaste ese tipo

---

## 📊 Progreso

| Ejercicio | Tema | Dificultad | Completado |
|-----------|------|-----------|-----------|
| 1 | Interfaces | ⭐ | ☐ |
| 2 | Clases | ⭐⭐ | ☐ |
| 3 | Genéricos | ⭐⭐ | ☐ |
| 4 | Union Types | ⭐⭐ | ☐ |
| 5 | Herencia | ⭐⭐⭐ | ☐ |
| 6 | Tipos Complejos | ⭐⭐⭐ | ☐ |
| 7 | Orden Superior | ⭐⭐⭐ | ☐ |
| 8 | Utility Types | ⭐⭐⭐ | ☐ |

---

**¡Sigue practicando! Cada ejercicio te hará mejor programador en TypeScript.** 💪

