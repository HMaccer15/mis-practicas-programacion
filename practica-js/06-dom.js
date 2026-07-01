/**
 * ═════════════════════════════════════════════════════════════
 * JAVASCRIPT - NIVEL 6: DOM (Document Object Model)
 * ═════════════════════════════════════════════════════════════
 * 
 * El DOM es la interfaz que conecta JavaScript con HTML.
 * Permite manipular elementos de la página dinámicamente.
 */

// ═════════════════════════════════════════════════════════════
// NOTA: Este archivo es principalmente teoría y conceptos.
// Para practicar DOM, necesitas un archivo HTML.
// Ver el archivo "ejemplo-dom.html" en esta carpeta.
// ═════════════════════════════════════════════════════════════

console.log("===== DOM (DOCUMENT OBJECT MODEL) =====\n");

// ▶ 1. SELECCIONAR ELEMENTOS
// ────────────────────────────────────────────────────────────

/*
// Por ID (devuelve un elemento o null)
const elemento1 = document.getElementById("miId");

// Por clase (devuelve NodeList)
const elementos = document.getElementsByClassName("miClase");

// Por etiqueta (devuelve NodeList)
const parrafos = document.getElementsByTagName("p");

// querySelector (devuelve el primer elemento que coincida)
const elemento2 = document.querySelector(".miClase");
const elemento3 = document.querySelector("#miId");

// querySelectorAll (devuelve NodeList con todos los elementos que coincidan)
const elementos2 = document.querySelectorAll("div.contenedor");
*/

// ▶ 2. MANIPULAR CONTENIDO
// ────────────────────────────────────────────────────────────

/*
// Cambiar contenido de texto
elemento.textContent = "Nuevo texto";

// Cambiar contenido HTML
elemento.innerHTML = "<p>Nuevo párrafo</p>";

// Agregar clase
elemento.classList.add("activo");

// Eliminar clase
elemento.classList.remove("activo");

// Alternar clase
elemento.classList.toggle("activo");

// Verificar si tiene clase
if (elemento.classList.contains("activo")) {
    console.log("Tiene la clase");
}
*/

// ▶ 3. MANIPULAR ATRIBUTOS
// ────────────────────────────────────────────────────────────

/*
// Obtener atributo
const href = elemento.getAttribute("href");
const src = elemento.getAttribute("src");

// Establecer atributo
elemento.setAttribute("data-id", "123");
elemento.setAttribute("disabled", "");

// Eliminar atributo
elemento.removeAttribute("disabled");

// Propiedades directas (más rápido)
elemento.id = "nuevoId";
elemento.title = "Nuevo título";
*/

// ▶ 4. ESTILOS CSS
// ────────────────────────────────────────────────────────────

/*
// Cambiar estilos individuales
elemento.style.color = "red";
elemento.style.backgroundColor = "blue";
elemento.style.fontSize = "20px";

// Cambiar múltiples estilos a la vez (mejor opción)
elemento.style.cssText = "color: red; background-color: blue; font-size: 20px;";

// Obtener estilos
const color = elemento.style.color;
*/

// ▶ 5. CREAR Y AGREGAR ELEMENTOS
// ────────────────────────────────────────────────────────────

/*
// Crear elemento
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Contenido del nuevo div";
nuevoDiv.className = "mi-clase";

// Agregar al final del contenedor
contenedor.appendChild(nuevoDiv);

// Agregar al principio
contenedor.insertBefore(nuevoDiv, contenedor.firstChild);

// Insertar HTML completo
contenedor.insertAdjacentHTML('beforeend', '<p>Nuevo párrafo</p>');
// Opciones: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'

// Agregar múltiples elementos
const fragment = document.createDocumentFragment();
fragment.appendChild(div1);
fragment.appendChild(div2);
fragment.appendChild(div3);
contenedor.appendChild(fragment);
*/

// ▶ 6. ELIMINAR ELEMENTOS
// ────────────────────────────────────────────────────────────

/*
// Eliminar un elemento
elemento.remove();

// Eliminar elementos hijo
while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
}
*/

// ▶ 7. RECORRER EL DOM
// ────────────────────────────────────────────────────────────

/*
// Elemento padre
const padre = elemento.parentElement;

// Primer hijo
const primerHijo = elemento.firstElementChild;

// Último hijo
const ultimoHijo = elemento.lastElementChild;

// Todos los hijos
const hijos = elemento.children;  // HTMLCollection
const hijosArray = Array.from(elemento.children);  // Array

// Hermano anterior y siguiente
const anterior = elemento.previousElementSibling;
const siguiente = elemento.nextElementSibling;

// Recorrer con forEach
elemento.children.forEach((hijo) => {
    console.log(hijo);
});
*/

// ▶ 8. EVENTOS (responder a acciones del usuario)
// ────────────────────────────────────────────────────────────

/*
// Agregar event listener
boton.addEventListener("click", (evento) => {
    console.log("Se hizo clic");
    console.log(evento.target);  // Elemento que disparo el evento
    console.log(evento.type);    // Tipo de evento: "click"
});

// Remover event listener
const miHandler = () => console.log("Click");
boton.addEventListener("click", miHandler);
boton.removeEventListener("click", miHandler);

// Eventos comunes:
// - click
// - dblclick (doble clic)
// - mousedown, mouseup
// - mouseover, mouseout
// - mousemove
// - keydown, keyup, keypress
// - input (cuando cambia valor en input)
// - change (cuando se confirma cambio)
// - submit (envío de formulario)
// - focus, blur
// - load, unload
// - scroll
*/

// ▶ 9. FORMULARIOS
// ────────────────────────────────────────────────────────────

/*
// Obtener valor de input
const valor = input.value;

// Establecer valor
input.value = "Nuevo valor";

// Envío de formulario
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();  // Prevenir envío por defecto
    const datos = new FormData(formulario);
    console.log(datos);
});

// Validación simple
if (input.value.trim() === "") {
    console.log("El campo está vacío");
}
*/

// ▶ 10. EVENT DELEGATION (delegar eventos)
// ────────────────────────────────────────────────────────────

/*
// En lugar de agregar listener a cada elemento...
contenedor.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("item")) {
        console.log("Fue clic en un item");
        console.log(evento.target);
    }
});
*/

// ▶ 11. INFORMACIÓN DEL EVENTO
// ────────────────────────────────────────────────────────────

/*
documento.addEventListener("click", (evento) => {
    console.log("e.target");        // Elemento que disparó el evento
    console.log("e.currentTarget");  // Elemento con el listener
    console.log("e.type");           // Tipo de evento
    console.log("e.clientX/Y");      // Posición del mouse
    console.log("e.key");            // Tecla presionada (en keydown)
});
*/

// ▶ 12. TIMERS
// ────────────────────────────────────────────────────────────

/*
// setTimeout: ejecutar una función después de ms
const timeoutId = setTimeout(() => {
    console.log("Ejecutado después de 2 segundos");
}, 2000);

// Cancelar timeout
clearTimeout(timeoutId);

// setInterval: ejecutar función cada ms
const intervalId = setInterval(() => {
    console.log("Se repite cada segundo");
}, 1000);

// Cancelar intervalo
clearInterval(intervalId);

// requestAnimationFrame: para animaciones (mejor que setInterval)
const animationId = requestAnimationFrame((timestamp) => {
    // timestamp es un número de milisegundos
    console.log(timestamp);
});

// Cancelar animación
cancelAnimationFrame(animationId);
*/

// ▶ 13. INFORMACIÓN DEL DOCUMENTO
// ────────────────────────────────────────────────────────────

/*
console.log(document.title);           // Título de la página
console.log(window.innerWidth);        // Ancho del viewport
console.log(window.innerHeight);       // Alto del viewport
console.log(window.scrollX);           // Scroll horizontal
console.log(window.scrollY);           // Scroll vertical

// Cambiar título
document.title = "Nuevo título";

// Scroll a una posición
window.scrollTo(0, 100);
elemento.scrollIntoView();  // Desplazarse al elemento

// URL
console.log(window.location.href);
console.log(window.location.pathname);

// Recargar página
window.location.reload();

// Ir a otra URL
window.location.href = "https://ejemplo.com";
*/

// ═════════════════════════════════════════════════════════════
// RESUMEN DE SELECTORES CSS EN JAVASCRIPT
// ═════════════════════════════════════════════════════════════

console.log("\n===== SELECTORES CSS =====");

/*
// Por ID
#miId                    → getElementById("miId")
document.querySelector("#miId")

// Por clase
.miClase                 → getElementsByClassName("miClase")
document.querySelector(".miClase")

// Por etiqueta
div                      → getElementsByTagName("div")
document.querySelector("div")

// Múltiples selectores
.clase1.clase2           → document.querySelector(".clase1.clase2")
div > p                  → document.querySelector("div > p")
div + p                  → document.querySelector("div + p")

// Atributo
[data-id="5"]            → document.querySelector('[data-id="5"]')
*/

// ═════════════════════════════════════════════════════════════
// EJEMPLO COMPLETO (ver archivo "ejemplo-dom.html")
// ═════════════════════════════════════════════════════════════

console.log("\n===== EJEMPLO EN HTML =====");
console.log("Para ejemplos prácticos de DOM, abre 'ejemplo-dom.html'");

// ═════════════════════════════════════════════════════════════
// EJERCICIOS:
// ═════════════════════════════════════════════════════════════

/*
1. Crea un botón que cambie el color de fondo de la página

2. Crea un formulario que valide el email antes de enviar

3. Crea una lista dinámica donde puedas agregar y eliminar items

4. Crea un contador que aumente/disminuya al hacer clic

5. Crea un modal que se abra y cierre con botones

6. Crea un buscador que filtre elementos de una lista mientras escribes

7. Crea un efectos visual que siga el movimiento del mouse
*/

