// ============================================
// 7. EJEMPLO PRÁCTICO: GESTOR DE TAREAS
// ============================================

interface Tarea {
  id: number;
  titulo: string;
  descripcion?: string;
  completada: boolean;
  prioridad: "baja" | "media" | "alta";
  fechaCreacion: Date;
}

class GestorTareas {
  private tareas: Tarea[] = [];
  private proximoId: number = 1;

  agregarTarea(
    titulo: string,
    prioridad: "baja" | "media" | "alta" = "media",
    descripcion?: string
  ): void {
    const tarea: Tarea = {
      id: this.proximoId++,
      titulo,
      descripcion,
      completada: false,
      prioridad,
      fechaCreacion: new Date()
    };
    this.tareas.push(tarea);
    console.log(`✅ Tarea agregada: "${titulo}"`);
  }

  completarTarea(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = true;
      console.log(`✓ Tarea completada: "${tarea.titulo}"`);
    } else {
      console.log("❌ Tarea no encontrada");
    }
  }

  eliminarTarea(id: number): void {
    const index = this.tareas.findIndex(t => t.id === id);
    if (index !== -1) {
      const tarea = this.tareas[index];
      this.tareas.splice(index, 1);
      console.log(`🗑️  Tarea eliminada: "${tarea.titulo}"`);
    } else {
      console.log("❌ Tarea no encontrada");
    }
  }

  obtenerTareasPendientes(): Tarea[] {
    return this.tareas.filter(t => !t.completada);
  }

  obtenerTareasCompletadas(): Tarea[] {
    return this.tareas.filter(t => t.completada);
  }

  obtenerTareasPorPrioridad(prioridad: "baja" | "media" | "alta"): Tarea[] {
    return this.tareas.filter(t => t.prioridad === prioridad && !t.completada);
  }

  editarTarea(id: number, cambios: Partial<Tarea>): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      Object.assign(tarea, cambios);
      console.log(`📝 Tarea editada: "${tarea.titulo}"`);
    } else {
      console.log("❌ Tarea no encontrada");
    }
  }

  listarTareas(): void {
    if (this.tareas.length === 0) {
      console.log("📋 No hay tareas\n");
      return;
    }

    console.log("\n📋 TODAS LAS TAREAS:");
    this.tareas.forEach(tarea => {
      const estado = tarea.completada ? "✓" : "○";
      const iconoPrioridad =
        tarea.prioridad === "alta" ? "🔴" :
        tarea.prioridad === "media" ? "🟡" : "🟢";
      
      console.log(
        `  ${estado} ${iconoPrioridad} [${tarea.id}] ${tarea.titulo}`
      );
      if (tarea.descripcion) {
        console.log(`      └─ ${tarea.descripcion}`);
      }
    });
    console.log();
  }

  resumen(): void {
    const total = this.tareas.length;
    const completadas = this.obtenerTareasCompletadas().length;
    const pendientes = total - completadas;

    console.log("\n📊 RESUMEN:");
    console.log(`  Total: ${total} | Completadas: ${completadas} | Pendientes: ${pendientes}`);
    console.log();
  }
}

// Uso del gestor de tareas
console.log("\n=== GESTOR DE TAREAS ===\n");

const gestor = new GestorTareas();

// Agregar tareas
gestor.agregarTarea("Aprender TypeScript", "alta", "Completar la guía completa");
gestor.agregarTarea("Crear proyecto Angular", "alta", "Comenzar proyecto nuevo");
gestor.agregarTarea("Revisar documentación", "media", "Leer docs oficiales");
gestor.agregarTarea("Hacer ejercicio", "baja");
gestor.agregarTarea("Comprar víveres", "media");

gestor.listarTareas();
gestor.resumen();

// Completar tareas
console.log("--- Completando tareas ---");
gestor.completarTarea(1);
gestor.completarTarea(4);

gestor.listarTareas();
gestor.resumen();

// Editar tarea
console.log("--- Editando tarea ---");
gestor.editarTarea(2, {
  descripcion: "Iniciar proyecto Angular avanzado"
});

// Obtener tareas por prioridad
console.log("--- Tareas de alta prioridad ---");
const tareasAltas = gestor.obtenerTareasPorPrioridad("alta");
console.log(`Encontradas: ${tareasAltas.length}`);
tareasAltas.forEach(t => {
  console.log(`  • ${t.titulo}`);
});

console.log("\n--- Tareas pendientes ---");
const tareasPendientes = gestor.obtenerTareasPendientes();
console.log(`Total pendientes: ${tareasPendientes.length}`);
tareasPendientes.forEach(t => {
  console.log(`  • ${t.titulo} [${t.prioridad}]`);
});

// Eliminar tarea
console.log("\n--- Eliminando tarea ---");
gestor.eliminarTarea(5);

gestor.listarTareas();
gestor.resumen();

