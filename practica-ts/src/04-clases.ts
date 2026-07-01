// ============================================
// 4. CLASES
// ============================================

// Clase básica
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
}

// Clase con modificadores de acceso
class CuentaBancaria {
  public saldo: number;      // Accesible desde cualquier lugar
  protected titular: string; // Accesible en la clase y subclases
  private pin: string;       // Solo accesible en la clase

  constructor(titular: string, saldo: number, pin: string) {
    this.titular = titular;
    this.saldo = saldo;
    this.pin = pin;
  }

  depositar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log(`Depósito de $${cantidad}. Nuevo saldo: $${this.saldo}`);
    }
  }

  retirar(cantidad: number): void {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(`Retiro de $${cantidad}. Nuevo saldo: $${this.saldo}`);
    } else {
      console.log("❌ Operación no válida");
    }
  }
}

// Clase con propiedades en constructor
class Producto {
  constructor(
    public id: number,
    public nombre: string,
    private precio: number
  ) {}

  obtenerPrecio(): number {
    return this.precio;
  }

  aplicarDescuento(porcentaje: number): number {
    return this.precio * (1 - porcentaje / 100);
  }
}

// Herencia
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
    console.log(`¡${this.nombre} ladra: guau guau!`);
  }

  traerPelota(): void {
    console.log(`${this.nombre} trae la pelota feliz 🎾`);
  }
}

// Métodos estáticos
class Utilidades {
  static pi: number = 3.14159;

  static calcularAreaCirculo(radio: number): number {
    return this.pi * radio * radio;
  }

  static calcularPerimetroCirculo(radio: number): number {
    return 2 * this.pi * radio;
  }
}

console.log("\n=== CLASES ===");

const persona = new Persona("Juan", 28);
persona.saludar();

const cuenta = new CuentaBancaria("María", 1000, "1234");
console.log(`Saldo inicial: $${cuenta.saldo}`);
cuenta.depositar(500);
cuenta.retirar(200);

const laptop = new Producto(1, "Laptop", 1200);
console.log(`Producto: ${laptop.nombre}`);
console.log(`Precio original: $${laptop.obtenerPrecio()}`);
console.log(`Con 10% descuento: $${laptop.aplicarDescuento(10)}`);

const perro = new Perro("Rex", "Pastor Alemán");
console.log(`Perro: ${perro.nombre}, Raza: ${perro.raza}`);
perro.hacer_sonido();
perro.traerPelota();

console.log(`\nÁrea de círculo (radio 5): ${Utilidades.calcularAreaCirculo(5)}`);
console.log(`Perímetro de círculo (radio 5): ${Utilidades.calcularPerimetroCirculo(5)}`);

