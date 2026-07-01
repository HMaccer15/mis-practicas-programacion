// ============================================
// 8. EJEMPLO PRÁCTICO: VALIDADOR DE FORMULARIOS
// ============================================

type ValidadorFn = (valor: any) => boolean | string;

interface ReglaValidacion {
  nombre: string;
  validador: ValidadorFn;
}

interface ResultadoValidacion {
  valido: boolean;
  errores: { [campo: string]: string[] };
}

class Validador {
  private reglas: Map<string, ReglaValidacion[]> = new Map();

  agregarRegla(campo: string, regla: ReglaValidacion): this {
    if (!this.reglas.has(campo)) {
      this.reglas.set(campo, []);
    }
    this.reglas.get(campo)!.push(regla);
    return this;  // Para encadenamiento de métodos
  }

  validar(datos: { [key: string]: any }): ResultadoValidacion {
    const errores: { [campo: string]: string[] } = {};

    this.reglas.forEach((reglas, campo) => {
      const valor = datos[campo];
      const erroresCampo: string[] = [];

      reglas.forEach(regla => {
        const resultado = regla.validador(valor);
        if (resultado !== true) {
          erroresCampo.push(typeof resultado === "string" ? resultado : `Error en ${campo}`);
        }
      });

      if (erroresCampo.length > 0) {
        errores[campo] = erroresCampo;
      }
    });

    return {
      valido: Object.keys(errores).length === 0,
      errores
    };
  }
}

// Reglas de validación predefinidas
class ReglasValidacion {
  static requerido(valor: any): boolean | string {
    return (valor !== null && valor !== undefined && valor !== "") || "Este campo es requerido";
  }

  static minLength(minimo: number): ValidadorFn {
    return (valor: string) =>
      (valor && valor.length >= minimo) || `Mínimo ${minimo} caracteres`;
  }

  static maxLength(maximo: number): ValidadorFn {
    return (valor: string) =>
      (valor && valor.length <= maximo) || `Máximo ${maximo} caracteres`;
  }

  static email(valor: string): boolean | string {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor) || "Email inválido";
  }

  static numero(valor: any): boolean | string {
    return !isNaN(valor) && valor !== "" || "Debe ser un número";
  }

  static minimo(minVal: number): ValidadorFn {
    return (valor: number) =>
      valor >= minVal || `Debe ser mayor o igual a ${minVal}`;
  }

  static maximo(maxVal: number): ValidadorFn {
    return (valor: number) =>
      valor <= maxVal || `Debe ser menor o igual a ${maxVal}`;
  }

  static patron(regex: RegExp, mensaje: string): ValidadorFn {
    return (valor: string) =>
      regex.test(valor) || mensaje;
  }
}

// Uso del validador
console.log("\n=== VALIDADOR DE FORMULARIOS ===\n");

const validador = new Validador();

// Configurar reglas para un formulario de registro
validador
  .agregarRegla("nombre", { nombre: "requerido", validador: ReglasValidacion.requerido })
  .agregarRegla("nombre", { nombre: "minLength", validador: ReglasValidacion.minLength(3) })
  .agregarRegla("nombre", { nombre: "maxLength", validador: ReglasValidacion.maxLength(50) })
  .agregarRegla("email", { nombre: "requerido", validador: ReglasValidacion.requerido })
  .agregarRegla("email", { nombre: "email", validador: ReglasValidacion.email })
  .agregarRegla("edad", { nombre: "numero", validador: ReglasValidacion.numero })
  .agregarRegla("edad", { nombre: "minimo", validador: ReglasValidacion.minimo(18) })
  .agregarRegla("edad", { nombre: "maximo", validador: ReglasValidacion.maximo(120) })
  .agregarRegla("telefono", {
    nombre: "formato",
    validador: ReglasValidacion.patron(/^\d{7,15}$/, "Teléfono inválido")
  });

// Test 1: Datos válidos
console.log("--- Test 1: Datos válidos ---");
const datosValidos = {
  nombre: "Juan Pérez",
  email: "juan@email.com",
  edad: 25,
  telefono: "1234567890"
};
const resultado1 = validador.validar(datosValidos);
console.log("Válido:", resultado1.valido);
if (resultado1.valido) {
  console.log("✅ Formulario validado correctamente");
}

// Test 2: Datos inválidos
console.log("\n--- Test 2: Datos inválidos ---");
const datosInvalidos = {
  nombre: "AI",  // Muy corto
  email: "email-sin-arroba",
  edad: 15,  // Menor de 18
  telefono: "123"  // Muy corto
};
const resultado2 = validador.validar(datosInvalidos);
console.log("Válido:", resultado2.valido);
if (!resultado2.valido) {
  console.log("❌ Errores encontrados:");
  Object.keys(resultado2.errores).forEach(campo => {
    console.log(`  ${campo}:`);
    resultado2.errores[campo].forEach(error => {
      console.log(`    • ${error}`);
    });
  });
}

// Test 3: Datos parciales
console.log("\n--- Test 3: Datos parciales (falta email) ---");
const datosParciales = {
  nombre: "Carlos López",
  edad: 30
};
const resultado3 = validador.validar(datosParciales);
console.log("Válido:", resultado3.valido);
if (!resultado3.valido) {
  console.log("❌ Errores encontrados:");
  Object.keys(resultado3.errores).forEach(campo => {
    console.log(`  ${campo}:`);
    resultado3.errores[campo].forEach(error => {
      console.log(`    • ${error}`);
    });
  });
}

