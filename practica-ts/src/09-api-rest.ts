// ============================================
// 9. EJEMPLO FINAL: API REST CON TYPESCRIPT
// ============================================

// Interfaces para una API de usuarios
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  activo: boolean;
  fechaRegistro: Date;
  roles: string[];
}

interface CrearUsuarioRequest {
  nombre: string;
  email: string;
  edad: number;
  roles?: string[];
}

interface ActualizarUsuarioRequest {
  nombre?: string;
  email?: string;
  edad?: number;
  activo?: boolean;
  roles?: string[];
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Clase para manejar usuarios (simulando una base de datos)
class UsuarioService {
  private usuarios: Usuario[] = [];
  private proximoId: number = 1;

  // Crear usuario
  crearUsuario(request: CrearUsuarioRequest): ApiResponse<Usuario> {
    try {
      // Validar datos
      if (!request.nombre || !request.email || !request.edad) {
        return {
          success: false,
          error: "Datos incompletos",
          message: "Nombre, email y edad son requeridos"
        };
      }

      if (request.edad < 18) {
        return {
          success: false,
          error: "Edad inválida",
          message: "El usuario debe ser mayor de 18 años"
        };
      }

      // Verificar email único
      const emailExiste = this.usuarios.some(u => u.email === request.email);
      if (emailExiste) {
        return {
          success: false,
          error: "Email duplicado",
          message: "Ya existe un usuario con este email"
        };
      }

      // Crear usuario
      const nuevoUsuario: Usuario = {
        id: this.proximoId++,
        nombre: request.nombre,
        email: request.email,
        edad: request.edad,
        activo: true,
        fechaRegistro: new Date(),
        roles: request.roles || ["usuario"]
      };

      this.usuarios.push(nuevoUsuario);

      return {
        success: true,
        data: nuevoUsuario,
        message: "Usuario creado exitosamente"
      };

    } catch (error) {
      return {
        success: false,
        error: "Error interno",
        message: "Ocurrió un error al crear el usuario"
      };
    }
  }

  // Obtener todos los usuarios
  obtenerUsuarios(): ApiResponse<Usuario[]> {
    return {
      success: true,
      data: [...this.usuarios],
      message: `Se encontraron ${this.usuarios.length} usuarios`
    };
  }

  // Obtener usuario por ID
  obtenerUsuarioPorId(id: number): ApiResponse<Usuario> {
    const usuario = this.usuarios.find(u => u.id === id);

    if (!usuario) {
      return {
        success: false,
        error: "Usuario no encontrado",
        message: `No se encontró usuario con ID ${id}`
      };
    }

    return {
      success: true,
      data: usuario,
      message: "Usuario encontrado"
    };
  }

  // Actualizar usuario
  actualizarUsuario(id: number, cambios: ActualizarUsuarioRequest): ApiResponse<Usuario> {
    const index = this.usuarios.findIndex(u => u.id === id);

    if (index === -1) {
      return {
        success: false,
        error: "Usuario no encontrado",
        message: `No se encontró usuario con ID ${id}`
      };
    }

    // Validar cambios
    if (cambios.email) {
      const emailExiste = this.usuarios.some(u => u.id !== id && u.email === cambios.email);
      if (emailExiste) {
        return {
          success: false,
          error: "Email duplicado",
          message: "Ya existe otro usuario con este email"
        };
      }
    }

    if (cambios.edad && cambios.edad < 18) {
      return {
        success: false,
        error: "Edad inválida",
        message: "El usuario debe ser mayor de 18 años"
      };
    }

    // Aplicar cambios
    const usuarioActualizado = { ...this.usuarios[index], ...cambios };
    this.usuarios[index] = usuarioActualizado;

    return {
      success: true,
      data: usuarioActualizado,
      message: "Usuario actualizado exitosamente"
    };
  }

  // Eliminar usuario
  eliminarUsuario(id: number): ApiResponse<boolean> {
    const index = this.usuarios.findIndex(u => u.id === id);

    if (index === -1) {
      return {
        success: false,
        error: "Usuario no encontrado",
        message: `No se encontró usuario con ID ${id}`
      };
    }

    this.usuarios.splice(index, 1);

    return {
      success: true,
      data: true,
      message: "Usuario eliminado exitosamente"
    };
  }

  // Buscar usuarios por nombre
  buscarPorNombre(nombre: string): ApiResponse<Usuario[]> {
    const resultados = this.usuarios.filter(u =>
      u.nombre.toLowerCase().includes(nombre.toLowerCase())
    );

    return {
      success: true,
      data: resultados,
      message: `Se encontraron ${resultados.length} usuarios`
    };
  }

  // Obtener estadísticas
  obtenerEstadisticas(): ApiResponse<{
    totalUsuarios: number;
    usuariosActivos: number;
    usuariosInactivos: number;
    promedioEdad: number;
  }> {
    const totalUsuarios = this.usuarios.length;
    const usuariosActivos = this.usuarios.filter(u => u.activo).length;
    const usuariosInactivos = totalUsuarios - usuariosActivos;
    const promedioEdad = totalUsuarios > 0
      ? this.usuarios.reduce((sum, u) => sum + u.edad, 0) / totalUsuarios
      : 0;

    return {
      success: true,
      data: {
        totalUsuarios,
        usuariosActivos,
        usuariosInactivos,
        promedioEdad: Math.round(promedioEdad * 100) / 100
      },
      message: "Estadísticas obtenidas"
    };
  }
}

// Uso del servicio
console.log("\n=== API REST CON TYPESCRIPT ===\n");

const servicioUsuarios = new UsuarioService();

// Crear usuarios
console.log("--- Creando usuarios ---");
const usuario1 = servicioUsuarios.crearUsuario({
  nombre: "Juan Pérez",
  email: "juan@email.com",
  edad: 30,
  roles: ["usuario", "editor"]
});
console.log("Resultado:", usuario1.success ? "✅" : "❌", usuario1.message);

const usuario2 = servicioUsuarios.crearUsuario({
  nombre: "María García",
  email: "maria@email.com",
  edad: 25
});
console.log("Resultado:", usuario2.success ? "✅" : "❌", usuario2.message);

const usuario3 = servicioUsuarios.crearUsuario({
  nombre: "Carlos López",
  email: "carlos@email.com",
  edad: 35,
  roles: ["usuario", "admin"]
});
console.log("Resultado:", usuario3.success ? "✅" : "❌", usuario3.message);

// Intentar crear usuario con email duplicado
const usuarioDuplicado = servicioUsuarios.crearUsuario({
  nombre: "Otro Juan",
  email: "juan@email.com",
  edad: 28
});
console.log("Email duplicado:", usuarioDuplicado.success ? "✅" : "❌", usuarioDuplicado.message);

// Intentar crear usuario menor de edad
const usuarioMenor = servicioUsuarios.crearUsuario({
  nombre: "Menor de Edad",
  email: "menor@email.com",
  edad: 16
});
console.log("Menor de edad:", usuarioMenor.success ? "✅" : "❌", usuarioMenor.message);

// Listar usuarios
console.log("\n--- Lista de usuarios ---");
const lista = servicioUsuarios.obtenerUsuarios();
if (lista.success && lista.data) {
  lista.data.forEach(u => {
    console.log(`  ${u.id}. ${u.nombre} (${u.email}) - ${u.activo ? 'Activo' : 'Inactivo'}`);
  });
}

// Buscar usuario
console.log("\n--- Buscar usuario por ID ---");
const busqueda = servicioUsuarios.obtenerUsuarioPorId(2);
if (busqueda.success && busqueda.data) {
  console.log(`Encontrado: ${busqueda.data.nombre} - ${busqueda.data.email}`);
} else {
  console.log("Error:", busqueda.message);
}

// Actualizar usuario
console.log("\n--- Actualizar usuario ---");
const actualizacion = servicioUsuarios.actualizarUsuario(1, {
  nombre: "Juan Carlos Pérez",
  edad: 31
});
console.log("Actualización:", actualizacion.success ? "✅" : "❌", actualizacion.message);

// Buscar por nombre
console.log("\n--- Buscar por nombre ---");
const busquedaNombre = servicioUsuarios.buscarPorNombre("Carlos");
if (busquedaNombre.success && busquedaNombre.data) {
  console.log(`Encontrados: ${busquedaNombre.data.length}`);
  busquedaNombre.data.forEach(u => {
    console.log(`  • ${u.nombre} (${u.email})`);
  });
}

// Estadísticas
console.log("\n--- Estadísticas ---");
const stats = servicioUsuarios.obtenerEstadisticas();
if (stats.success && stats.data) {
  console.log(`Total usuarios: ${stats.data.totalUsuarios}`);
  console.log(`Activos: ${stats.data.usuariosActivos}`);
  console.log(`Inactivos: ${stats.data.usuariosInactivos}`);
  console.log(`Promedio edad: ${stats.data.promedioEdad} años`);
}

// Eliminar usuario
console.log("\n--- Eliminar usuario ---");
const eliminacion = servicioUsuarios.eliminarUsuario(3);
console.log("Eliminación:", eliminacion.success ? "✅" : "❌", eliminacion.message);

// Lista final
console.log("\n--- Lista final de usuarios ---");
const listaFinal = servicioUsuarios.obtenerUsuarios();
if (listaFinal.success && listaFinal.data) {
  console.log(`Total: ${listaFinal.data.length} usuarios`);
  listaFinal.data.forEach(u => {
    console.log(`  ${u.id}. ${u.nombre} - ${u.roles.join(', ')}`);
  });
}

console.log("\n=== ¡API REST COMPLETA CON TYPESCRIPT! ===");
console.log("Ahora tienes las bases para crear APIs reales con TypeScript.");
console.log("Próximo paso: ¡Angular! 🚀");

