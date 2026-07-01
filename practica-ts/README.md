# 📚 Guía Completa de TypeScript - Practica Interactiva

¡Bienvenido! Este proyecto es una guía completa y práctica para aprender TypeScript desde cero. Todo incluye ejemplos ejecutables que puedes probar inmediatamente.

## 🚀 Inicio Rápido

### Requisitos
- Node.js (v14 o superior)
- npm (viene con Node.js)

### Instalación

```bash
# Clonar o descargar el proyecto
cd practica-ts

# Instalar dependencias (ya hecho si descargaste el proyecto)
npm install
```

## 📖 Contenidos

### 1️⃣ Tipos Básicos
- **Archivo**: `src/01-tipos-basicos.ts`
- **Ejecutar**: `npm run demo:basicos`
- **Aprenderás**:
  - String, number, boolean
  - Arrays y tipos de unión
  - Literal types

```bash
npm run demo:basicos
```

### 2️⃣ Tipos Avanzados
- **Archivo**: `src/02-tipos-avanzados.ts`
- **Ejecutar**: `npm run demo:avanzados`
- **Aprenderás**:
  - Intersection types
  - Tuple types
  - Enums (enumeraciones)

```bash
npm run demo:avanzados
```

### 3️⃣ Interfaces
- **Archivo**: `src/03-interfaces.ts`
- **Ejecutar**: `npm run demo:interfaces`
- **Aprenderás**:
  - Crear interfaces
  - Propiedades opcionales
  - Interfaces extendidas
  - Funciones tipadas

```bash
npm run demo:interfaces
```

### 4️⃣ Clases
- **Archivo**: `src/04-clases.ts`
- **Ejecutar**: `npm run demo:clases`
- **Aprenderás**:
  - Sintaxis de clases
  - Modificadores de acceso (public, private, protected)
  - Herencia
  - Métodos estáticos

```bash
npm run demo:clases
```

### 5️⃣ Funciones
- **Archivo**: `src/05-funciones.ts`
- **Ejecutar**: `npm run demo:funciones`
- **Aprenderás**:
  - Tipado de funciones
  - Parámetros opcionales y por defecto
  - Rest parameters
  - Sobrecarga de funciones
  - Arrow functions

```bash
npm run demo:funciones
```

### 6️⃣ Genéricos
- **Archivo**: `src/06-genericos.ts`
- **Ejecutar**: `npm run demo:genericos`
- **Aprenderás**:
  - Funciones genéricas
  - Restricciones genéricas
  - Clases genéricas
  - Tipos genéricos útiles

```bash
npm run demo:genericos
```

### 7️⃣ Ejemplo Práctico: Gestor de Tareas
- **Archivo**: `src/07-gestor-tareas.ts`
- **Ejecutar**: `npm run demo:tareas`
- **Aprenderás**:
  - Diseño de interfaces
  - Clases con métodos
  - Manejo de arreglos
  - Tipado completo

```bash
npm run demo:tareas
```

### 8️⃣ Ejemplo Práctico: Validador de Formularios
- **Archivo**: `src/08-validador.ts`
- **Ejecutar**: `npm run demo:validador`
- **Aprenderás**:
  - Tipos para funciones
  - Validación de datos
  - Patrones avanzados

```bash
npm run demo:validador
```

### 9️⃣ Ejemplo Práctico: API REST
- **Archivo**: `src/09-api-rest.ts`
- **Ejecutar**: `npm run demo:api`
- **Aprenderás**:
  - Arquitectura de APIs
  - Validación de datos
  - Manejo de errores
  - Tipos complejos
  - Servicios y lógica de negocio

```bash
npm run demo:api
```

## 🔧 Scripts Disponibles

```bash
# Compilar TypeScript a JavaScript
npm run build

# Ver el resultado compilado
ls dist/

# Ejecutar cada ejemplo individualmente
npm run demo:basicos         # Tipos básicos
npm run demo:avanzados       # Tipos avanzados
npm run demo:interfaces      # Interfaces
npm run demo:clases          # Clases
npm run demo:funciones       # Funciones
npm run demo:genericos       # Genéricos
npm run demo:tareas          # Gestor de tareas
npm run demo:validador       # Validador de formularios
npm run demo:api             # API REST
```

## 📚 Estructura del Proyecto

```
practica-ts/
├── src/
│   ├── 01-tipos-basicos.ts          # Ejemplos de tipos básicos
│   ├── 02-tipos-avanzados.ts        # Tipos avanzados
│   ├── 03-interfaces.ts             # Interfaces
│   ├── 04-clases.ts                 # Clases y herencia
│   ├── 05-funciones.ts              # Funciones tipadas
│   ├── 06-genericos.ts              # Genéricos
│   ├── 07-gestor-tareas.ts          # Ejemplo 1: Gestor de tareas
│   ├── 08-validador.ts              # Ejemplo 2: Validador
│   ├── 09-api-rest.ts               # Ejemplo 3: API REST
│   └── index.ts                     # Ejecutar todos los ejemplos
├── dist/                            # Archivos compilados (después de npm run build)
├── GUIA_TYPESCRIPT.md               # Guía completa en Markdown
├── tsconfig.json                    # Configuración de TypeScript
├── package.json                     # Configuración del proyecto
└── README.md                        # Este archivo
```

## 🎯 Cómo Usar Esta Guía

### Opción 1: Seguir el orden
Comienza desde el ejemplo 1 y avanza secuencialmente. Cada ejemplo construye sobre el anterior.

```bash
npm run demo:basicos      # Comienza aquí
npm run demo:avanzados    
npm run demo:interfaces   
npm run demo:clases       
# ... y así sucesivamente
```

### Opción 2: Explorar temas específicos
Salta a los ejemplos que te interesen:

```bash
# Solo quieres aprender clases
npm run demo:clases

# Solo quieres ver genéricos
npm run demo:genericos
```

### Opción 3: Editar y experimentar
Abre los archivos TypeScript y modifica los ejemplos:

1. Abre `src/01-tipos-basicos.ts` en tu editor
2. Realiza cambios
3. Ejecuta `npm run demo:basicos` para ver los resultados
4. TypeScript te mostrará errores si algo está mal ✅

## 💡 Consejos para Aprender

1. **Lee la guía primero**: Abre `GUIA_TYPESCRIPT.md` para entender los conceptos
2. **Ejecuta los ejemplos**: Corre cada script para ver el código en acción
3. **Experimenta**: Modifica los ejemplos y ve qué pasa
4. **Resuelve errores**: Los mensajes de error de TypeScript son muy útiles
5. **Repite**: Practica varios días para que el conocimiento se fije

## 🔍 Errores Comunes y Cómo Resolverlos

### Error: "Cannot find module 'typescript'"
```bash
npm install
```

### Error: "tsc: command not found"
```bash
npm install -g typescript
# O usa npx
npx tsc --version
```

### Error: Compilación falla
- Verifica la sintaxis
- Asegúrate de que los tipos coincidan
- Lee el mensaje de error de TypeScript

## 📖 Conceptos Clave

| Concepto | Descripción | Archivo |
|----------|-------------|---------|
| Tipos Básicos | string, number, boolean, array | 01 |
| Union Types | Múltiples tipos posibles | 01 |
| Interfaces | Contratos para objetos | 03 |
| Clases | POO en TypeScript | 04 |
| Genéricos | Código reutilizable con tipos | 06 |
| Decoradores | Metaprogramación | (Avanzado) |

## 🚀 Próximos Pasos

Una vez que domines TypeScript, estará listo para:

1. **Angular** - Framework web completo
2. **React con TypeScript** - Librería UI con tipos
3. **Node.js + Express** - Backend con TypeScript
4. **Proyectos reales** - Aplicar lo aprendido

## 📚 Recursos Adicionales

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [TypeScript Playground](https://www.typescriptlang.org/play) - Prueba código online
- [Guía Completa en Markdown](./GUIA_TYPESCRIPT.md)

## 🐛 Reportar Problemas

Si encuentras algún error en los ejemplos:
1. Verifica que has instalado las dependencias con `npm install`
2. Asegúrate de tener Node.js v14 o superior
3. Intenta limpiar con `rm -rf node_modules && npm install`

## 📝 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 🎓 ¿Necesitas Ayuda?

- Lee los comentarios en el código
- Consulta la guía `GUIA_TYPESCRIPT.md`
- Revisa los mensajes de error de TypeScript
- Experimenta modificando los ejemplos

---

**¡Bienvenido al viaje de aprendizaje de TypeScript! 🚀**

Recuerda: La mejor manera de aprender a programar es escribiendo código. No tengas miedo de experimentar.

¿Listo? Comienza con:
```bash
npm run demo:basicos
```
