// ============================================
// 2. TIPOS AVANZADOS
// ============================================

// Intersection Types (combinación de tipos)
type Persona = {
  nombre: string;
  edad: number;
};

type Empleado = {
  id: number;
  departamento: string;
};

type PersonaEmpleado = Persona & Empleado;

const empleado: PersonaEmpleado = {
  nombre: "Carlos",
  edad: 30,
  id: 1,
  departamento: "IT"
};

// Tuple Types
let tupla: [string, number] = ["hola", 42];
let tupla2: [string, number?] = ["hola"];
let tupla3: [string, ...number[]] = ["ID", 1, 2, 3, 4];

// Enum - Conjunto de constantes
enum Dia {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo
}

let hoy: Dia = Dia.Martes;

enum Estado {
  Activo = "ACTIVO",
  Inactivo = "INACTIVO",
  Pendiente = "PENDIENTE"
}

let estado: Estado = Estado.Activo;

console.log("\n=== TIPOS AVANZADOS ===");
console.log("Empleado:", empleado);
console.log("Tupla:", tupla);
console.log("Día hoy:", Dia[hoy]); // Martes
console.log("Estado:", estado);

