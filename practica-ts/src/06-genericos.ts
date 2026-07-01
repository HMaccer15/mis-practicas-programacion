// ============================================
// 6. GENÉRICOS
// ============================================

// Función genérica básica
function identidad<T>(valor: T): T {
  return valor;
}

// Función genérica con múltiples parámetros
function intercambiar<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

// Restricciones genéricas
interface Nombreado {
  nombre: string;
}

function obtenerNombre<T extends Nombreado>(objeto: T): string {
  return objeto.nombre;
}

// Restricción con keyof
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
  return objeto[clave];
}

// Clase genérica
class Contenedor<T> {
  private items: T[] = [];

  agregar(item: T): void {
    this.items.push(item);
  }

  obtener(index: number): T | undefined {
    return this.items[index];
  }

  obtenerTodos(): T[] {
    return [...this.items];
  }

  tamaño(): number {
    return this.items.length;
  }
}

// Tipos genéricos útiles
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Record<K extends string | number | symbol, T> = {
  [P in K]: T;
};

// Ejemplo con Record
type Colores = Record<"rojo" | "verde" | "azul", string>;
const colorMap: Colores = {
  rojo: "#FF0000",
  verde: "#00FF00",
  azul: "#0000FF"
};

// Ejemplo con Pick
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
}

type UsuarioBasico = Pick<Usuario, "nombre" | "email">;

const usuarioBasico: UsuarioBasico = {
  nombre: "Juan",
  email: "juan@email.com"
};

console.log("\n=== GENÉRICOS ===");

console.log("Identidad (string):", identidad<string>("hola"));
console.log("Identidad (number):", identidad<number>(42));
console.log("Identidad (boolean):", identidad(true)); // TypeScript infiere el tipo

const [b, a] = intercambiar<string, number>("hola", 42);
console.log("Intercambiar:", { a, b });

console.log("Nombre:", obtenerNombre({ nombre: "María", edad: 30 }));

const usuario = { nombre: "Carlos", edad: 25, email: "carlos@email.com" };
console.log("Obtener propiedad 'nombre':", obtenerPropiedad(usuario, "nombre"));

const contenedorNumeros = new Contenedor<number>();
contenedorNumeros.agregar(10);
contenedorNumeros.agregar(20);
contenedorNumeros.agregar(30);
console.log("Contenedor números:", contenedorNumeros.obtenerTodos());
console.log("Tamaño:", contenedorNumeros.tamaño());

const contenedorStrings = new Contenedor<string>();
contenedorStrings.agregar("hola");
contenedorStrings.agregar("mundo");
console.log("Contenedor strings:", contenedorStrings.obtenerTodos());

console.log("Mapa de colores:", colorMap);
console.log("Usuario básico:", usuarioBasico);

