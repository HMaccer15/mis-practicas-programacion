/**
 * ═════════════════════════════════════════════════════════════
 * JAVASCRIPT - NIVEL 5: ASINCRONÍA
 * ═════════════════════════════════════════════════════════════
 * 
 * Este es un tema MUY importante para Angular.
 * La asincronía permite que tu código no se bloquee mientras
 * espera respuestas (de servidores, archivos, etc.)
 */

console.log("===== ASINCRONÍA =====\n");

// ▶ 1. CALLBACKS (forma antigua, evitar si es posible)
// ────────────────────────────────────────────────────────────

console.log("--- CALLBACKS ---");

function obtenerDatos(callback) {
    console.log("Obteniendo datos...");
    
    setTimeout(() => {
        const datos = { id: 1, nombre: "Juan" };
        callback(datos);  // Ejecutar la función que pasamos
    }, 2000);  // Simular 2 segundos de espera
}

function procesarDatos(datos) {
    console.log("Datos recibidos:", datos);
}

// obtenerDatos(procesarDatos);

// Problema: "Callback Hell" o "Pyramid of Doom"
// Cuando tienes muchas callbacks anidadas...
/*
obtenerDatos((datos1) => {
    procesarDatos(datos1, (datos2) => {
        masOperaciones(datos2, (datos3) => {
            // Código muy anidado y difícil de leer
        });
    });
});
*/

// ▶ 2. PROMESAS (mejor que callbacks)
// ────────────────────────────────────────────────────────────

console.log("\n--- PROMESAS ---");

// Una promesa tiene 3 estados:
// 1. PENDING (esperando)
// 2. FULFILLED (resuelta con éxito)
// 3. REJECTED (rechazada con error)

const promesa1 = new Promise((resolve, reject) => {
    console.log("Promesa iniciada");
    
    setTimeout(() => {
        const exito = true;
        
        if (exito) {
            resolve("¡Operación exitosa!");  // Éxito
        } else {
            reject("¡Error en la operación!");  // Error
        }
    }, 1000);
});

// Usar la promesa con .then() y .catch()
// promesa1
//     .then((resultado) => {
//         console.log("Resultado:", resultado);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     })
//     .finally(() => {
//         console.log("Operación completada");
//     });

// ▶ 3. ENCADENAR PROMESAS
// ────────────────────────────────────────────────────────────

console.log("\n--- ENCADENAR PROMESAS ---");

function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, nombre: "María", empresaId: 5 });
        }, 500);
    });
}

function obtenerEmpresa(empresaId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: empresaId, nombre: "TechCorp" });
        }, 500);
    });
}

// Encadenar promesas
/*
obtenerUsuario(1)
    .then((usuario) => {
        console.log("Usuario:", usuario);
        return obtenerEmpresa(usuario.empresaId);
    })
    .then((empresa) => {
        console.log("Empresa:", empresa);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
*/

// ▶ 4. ASYNC/AWAIT (forma moderna y más legible)
// ────────────────────────────────────────────────────────────

console.log("\n--- ASYNC/AWAIT ---");

async function obtenerDatos2() {
    try {
        console.log("Obteniendo usuario...");
        const usuario = await obtenerUsuario(1);
        console.log("Usuario obtenido:", usuario);
        
        console.log("Obteniendo empresa...");
        const empresa = await obtenerEmpresa(usuario.empresaId);
        console.log("Empresa obtenida:", empresa);
        
        return { usuario, empresa };
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Operación finalizada");
    }
}

// Llamar función async
// obtenerDatos2();

// ▶ 5. PROMISE.ALL (ejecutar múltiples promesas en paralelo)
// ────────────────────────────────────────────────────────────

console.log("\n--- PROMISE.ALL (Paralelo) ---");

async function obtenerMultiplesDatos() {
    const promesas = [
        obtenerUsuario(1),
        obtenerUsuario(2),
        obtenerUsuario(3)
    ];
    
    const resultados = await Promise.all(promesas);
    console.log("Resultados:", resultados);
}

// obtenerMultiplesDatos();

// ▶ 6. PROMISE.RACE (la primera promesa que termine)
// ────────────────────────────────────────────────────────────

console.log("\n--- PROMISE.RACE ---");

const promesa2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promesa 1"), 500);
});

const promesa3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promesa 2"), 1000);
});

// Promise.race([promesa2, promesa3]).then((resultado) => {
//     console.log("Primera en terminar:", resultado);  // "Promesa 1"
// });

// ▶ 7. MANEJO DE ERRORES EN ASYNC/AWAIT
// ────────────────────────────────────────────────────────────

console.log("\n--- MANEJO DE ERRORES ---");

function obtenerDatosConError(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, datos: "Éxito" });
            } else {
                reject(new Error("ID debe ser positivo"));
            }
        }, 500);
    });
}

async function ejemploManejodeErrores() {
    try {
        const resultado = await obtenerDatosConError(-1);
        console.log(resultado);
    } catch (error) {
        console.log("Error capturado:", error.message);
    }
}

// ejemploManejodeErrores();

// ▶ 8. FETCH API (para obtener datos de internet)
// ────────────────────────────────────────────────────────────

console.log("\n--- FETCH API ---");

// GET request
async function obtenerPost(id) {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!respuesta.ok) {
            throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        
        const datos = await respuesta.json();
        console.log("Post obtenido:", datos);
        return datos;
    } catch (error) {
        console.log("Error en fetch:", error);
    }
}

// POST request
async function crearPost() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'Mi primer post',
                body: 'Este es el contenido',
                userId: 1
            })
        });
        
        const datos = await respuesta.json();
        console.log("Post creado:", datos);
        return datos;
    } catch (error) {
        console.log("Error:", error);
    }
}

// obtenerPost(1);
// crearPost();

// ▶ 9. COMPARACIÓN DE MÉTODOS
// ────────────────────────────────────────────────────────────

console.log("\n--- COMPARACIÓN ---");

// Callback
/*
obtenerDatos((datos) => {
    procesarDatos(datos, (resultado) => {
        console.log(resultado);
    });
});
*/

// Promesa
/*
obtenerDatos()
    .then(procesarDatos)
    .then(console.log)
    .catch(console.error);
*/

// Async/Await (MÁS LEGIBLE Y MODERNA)
/*
async function principal() {
    try {
        const datos = await obtenerDatos();
        const resultado = await procesarDatos(datos);
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}
*/

// ═════════════════════════════════════════════════════════════
// RESUMEN Y FLUJO DE EJECUCIÓN
// ═════════════════════════════════════════════════════════════

console.log("\n===== FLUJO DE EJECUCIÓN =====");

console.log("1. Sincrónico");
console.log("2. Asincrónico");
console.log("3. Final");

setTimeout(() => {
    console.log("Esto aparece después de 0ms (pero aún es asincrónico)");
}, 0);

// El orden será: 1, 2, 3, luego el setTimeout

// ═════════════════════════════════════════════════════════════
// EJERCICIOS:
// ═════════════════════════════════════════════════════════════

/*
1. Crea una promesa que simule obtener un usuario del servidor
   (usa setTimeout)

2. Crea una promesa que se rechace y maneja el error con .catch()

3. Crea una función async que encadene dos promesas
   (primero obtener usuario, luego su empresa)

4. Usa Promise.all para obtener 3 usuarios simultáneamente

5. Usa fetch para obtener datos de https://jsonplaceholder.typicode.com/users/1
   y muestra el nombre del usuario

6. Crea una función que busque un usuario, y si no existe,
   devuelva un error con try/catch

7. Crea dos promesas que compitan con Promise.race()
*/

