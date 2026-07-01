// ============================================
// 1. TIPOS BÁSICOS
// ============================================

// String
let nombre: string = "Juan";
let saludo: string = `Hola, ${nombre}`;

// Number
let edad: number = 25;
let precio: number = 19.99;

// Boolean
let esMayor: boolean = true;
let esActivo: boolean = false;

// Array
let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis", "María"];

// Union Types (múltiples tipos)
let id: string | number;
id = "ABC123";  // ✅
id = 123;       // ✅

// Literal Types (valores específicos)
let direccion: "norte" | "sur" | "este" | "oeste" = "norte";

console.log("\n=== TIPOS BÁSICOS ===");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Números:", numeros);
console.log("ID:", id);
console.log("Dirección:", direccion);

