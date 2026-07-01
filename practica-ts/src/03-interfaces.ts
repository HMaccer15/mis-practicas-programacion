// ============================================
// 3. INTERFACES Y TIPOS
// ============================================

// Interface básica
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

// Interface extendida
interface Admin extends Usuario {
  permisos: string[];
}

const admin: Admin = {
  id: 2,
  nombre: "Luis",
  email: "luis@email.com",
  createdAt: new Date(),
  permisos: ["leer", "escribir", "eliminar"]
};

// Interface para funciones
interface Operacion {
  (a: number, b: number): number;
}

const sumar: Operacion = (a, b) => a + b;
const multiplicar: Operacion = (a, b) => a * b;

// Interface indexable
interface Config {
  [key: string]: string | number | boolean;
}

const config: Config = {
  debug: true,
  puerto: 3000,
  host: "localhost"
};

console.log("\n=== INTERFACES ===");
console.log("Usuario:", usuario);
console.log("Admin:", admin);
console.log("Suma de 5 + 3:", sumar(5, 3));
console.log("Multiplicación 4 * 7:", multiplicar(4, 7));
console.log("Config:", config);

