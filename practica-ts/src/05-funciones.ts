// ============================================
// 5. FUNCIONES
// ============================================

// Función tipada básica
function sumar(a: number, b: number): number {
  return a + b;
}

// Parámetros opcionales
function saludar(nombre: string, titulo?: string): string {
  return titulo ? `${titulo} ${nombre}` : `Hola ${nombre}`;
}

// Parámetros por defecto
function repetir(texto: string, veces: number = 1): string {
  return texto.repeat(veces);
}

// Rest parameters (número variable de argumentos)
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((a, b) => a + b, 0);
}

// Sobrecarga de funciones
function procesar(valor: string): string;
function procesar(valor: number): number;
function procesar(valor: string | number): string | number {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return valor * 2;
}

// Arrow functions
const multiplicar = (a: number, b: number): number => a * b;

const dividir = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
};

// Callback functions
function procesarDatos(
  datos: number[],
  callback: (item: number, index: number) => void
): void {
  datos.forEach(callback);
}

// Función que retorna una función
function crearMultiplicador(factor: number): (n: number) => number {
  return (n: number) => n * factor;
}

// Tipo de función personalizado
type Comparador = (a: number, b: number) => number;

const comparar: Comparador = (a, b) => a - b;

console.log("\n=== FUNCIONES ===");

console.log("Suma 5 + 3:", sumar(5, 3));
console.log("Saludo 1:", saludar("Ana"));
console.log("Saludo 2:", saludar("Carlos", "Dr."));
console.log("Repetir texto:", repetir("¡Hola! ", 3));
console.log("Suma todos [1,2,3,4,5]:", sumarTodos(1, 2, 3, 4, 5));

console.log("Procesar 'hola':", procesar("hola"));
console.log("Procesar 10:", procesar(10));

console.log("Multiplicar 4 * 7:", multiplicar(4, 7));
console.log("Dividir 20 / 4:", dividir(20, 4));

console.log("\nProcesar datos con callback:");
procesarDatos([10, 20, 30], (item, index) => {
  console.log(`  [${index}] = ${item} -> ${item * 2}`);
});

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);
console.log("Duplicar 5:", duplicar(5));
console.log("Triplicar 5:", triplicar(5));

console.log("Comparar 5 y 3:", comparar(5, 3));

