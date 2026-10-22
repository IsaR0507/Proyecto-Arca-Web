// Proyecto Arca - comportamiento de la página

// ---------------------------------------------------------------
// Contenido de las pantallas con menú lateral
// ---------------------------------------------------------------
var lorem = "El ciclo hidrológico del planeta ha dejado de comportarse según sus leyes conocidas. La evaporación, la condensación y la precipitación perdieron el equilibrio que las regía, y la lluvia dejó de responder a estaciones, a temperaturas o a presiones atmosféricas. No hay periodos secos. No hay pausas. El agua cae de forma continua, como si el sistema que antes la regulaba hubiera sido reemplazado por otro que no logramos identificar.Los registros descartan las causas habituales. No se trata de un desajuste temporal ni de un evento extremo aislado: es un estado nuevo y sostenido. El planeta no atraviesa una tormenta. Funciona, ahora, de otra manera.";

var archivos = {
  anomalias: [
    { nombre: "Alteración del ciclo natural", codigo: "RA-001", titulo: "Alteración del ciclo natural" },
    { nombre: "Registro de Respuestas del Entorno", codigo: "RA-002", titulo: "Registro de respuestas del entorno", enlace: "respuestas", textoEnlace: "Sincronizar frecuencia" },
    { nombre: "Indicio de Patrones Intencionales", codigo: "RA-003", titulo: "Indicio de patrones intencionales" },
    { nombre: "Archivo de Fauna", codigo: "RA-004", titulo: "Archivo de fauna", enlace: "fauna", textoEnlace: "Abrir archivo de fauna" }
  ],
  fauna: [
    { nombre: "Fauna Alterada", codigo: "AF-001", titulo: "Fauna Alterada" },
    { nombre: "Mutaciones Recientes", codigo: "AF-002", titulo: "Mutaciones Recientes" },
    { nombre: "Nuevos Descubrimientos", codigo: "AF-003", titulo: "Nuevos Descubrimientos" }
  ],
  teoria: [
    { nombre: "Hipótesis Aprobadas", codigo: "TC-001", titulo: "Hipótesis Aprobadas" },
    { nombre: "Clima", codigo: "TC-002", titulo: "Clima" },
    { nombre: "Fauna", codigo: "TC-003", titulo: "Fauna" },
    { nombre: "Patrones", codigo: "TC-004", titulo: "Patrones" }
  ]
};

// Qué archivo está seleccionado en cada pantalla (por defecto, el que se ve en el diseño)
var seleccionado = { anomalias: 1, fauna: 1, teoria: 1 };

function dibujarArchivos(grupo) {
  var lista = document.querySelector('[data-lista="' + grupo + '"]');
  var detalle = document.querySelector('[data-detalle="' + grupo + '"]');
  var elementos = archivos[grupo];
  var actual = elementos[seleccionado[grupo]];

  // Menú lateral
  lista.innerHTML = "";
  elementos.forEach(function (item, posicion) {
    var li = document.createElement("li");
    var boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = item.nombre;
    if (posicion === seleccionado[grupo]) {
      boton.className = "activo";
      boton.setAttribute("aria-current", "true");
    }
    boton.addEventListener("click", function () {
      seleccionado[grupo] = posicion;
      dibujarArchivos(grupo);
    });
    li.appendChild(boton);
    lista.appendChild(li);
  });

  // Contenido a la derecha
  var parrafos = '<p>' + lorem + '</p>';
  if (grupo !== "teoria") parrafos += '<p>' + lorem + '</p>';
  var enlace = "";
  if (actual.enlace) {
    enlace = '<button class="boton enlace-extra" type="button" data-ir="' + actual.enlace + '">' + actual.textoEnlace + '</button>';
  }
  var sujetos = grupo === "teoria"
    ? '<div class="sujetos"><div class="sujeto">Sujeto 01</div><div class="sujeto">Sujeto 01</div></div>'
    : '<div class="sujetos"><div class="sujeto">Sujeto 01</div><div class="sujeto">Sujeto 07</div><div class="sujeto">Sujeto 11</div></div>';

  if (grupo === "teoria") {
    detalle.innerHTML = '<div><p class="codigo">//' + actual.codigo + '</p><h3>' + actual.titulo + '</h3>' + parrafos + '</div>' + sujetos;
  } else {
    detalle.innerHTML = '<div><p class="codigo">//' + actual.codigo + '</p><h3>' + actual.titulo + '</h3>' + parrafos + enlace + '</div>' + sujetos;
  }
}

// ---------------------------------------------------------------
// Registro de empleados: 6 tarjetas iguales
// ---------------------------------------------------------------
function dibujarEmpleados() {
  var rejilla = document.getElementById("rejillaEmpleados");
  var html = "";
  for (var i = 1; i <= 6; i++) {
    html += '<article class="empleado">' +
      '<div class="foto" role="img" aria-label="Foto del científico"></div>' +
      '<div class="datos">' +
        '<span>Científico 1</span>' +
        '<div class="columnas">' +
          '<div><b>Ocupación</b><span>Análisis de Flora</span></div>' +
          '<div><b>Permanencia</b><span>8 años</span></div>' +
        '</div>' +
        '<button class="boton" type="button">ACCEDER AL REGISTRO</button>' +
      '</div>' +
    '</article>';
  }
  rejilla.innerHTML = html;
}

// ---------------------------------------------------------------
// Ondas: dos curvas que cambian con los controles
// ---------------------------------------------------------------
var campoAmplitud = document.getElementById("amplitud");
var campoBanda = document.getElementById("banda");
var ondaSolida = document.getElementById("ondaSolida");
var ondaPunteada = document.getElementById("ondaPunteada");

function crearOnda(amplitud, frecuencia, fase, desfase) {
  var puntos = [];
  var inicio = 70, fin = 530, centroY = 140;
  for (var x = inicio; x <= fin; x += 4) {
    var avance = (x - inicio) / (fin - inicio);
    // La amplitud sube y baja un poco para que no sea una onda perfecta
    var variacion = 0.65 + 0.35 * Math.sin(avance * 9 + desfase);
    var y = centroY - Math.sin(avance * frecuencia + fase) * amplitud * variacion;
    puntos.push((x === inicio ? "M" : "L") + x + " " + y.toFixed(1));
  }
  return puntos.join(" ");
}

function pintarRelleno(campo) {
  var porcentaje = (campo.value - campo.min) / (campo.max - campo.min) * 100;
  campo.style.setProperty("--lleno", porcentaje + "%");
}

function actualizarOndas() {
  var amplitud = Number(campoAmplitud.value) * 1.1;
  var frecuencia = 8 + Number(campoBanda.value) / 100 * 36; // más "banda" = más ondas
  ondaSolida.setAttribute("d", crearOnda(amplitud * 0.75, frecuencia, 0.4, 1.2));
  ondaPunteada.setAttribute("d", crearOnda(amplitud, frecuencia, 0, 0));
  pintarRelleno(campoAmplitud);
  pintarRelleno(campoBanda);
}
campoAmplitud.addEventListener("input", actualizarOndas);
campoBanda.addEventListener("input", actualizarOndas);

// ---------------------------------------------------------------
// Terminal del protocolo: escribe las líneas una por una
// ---------------------------------------------------------------
var lineasTerminal = [
  "> iniciando protocolo ARCA...",
  "> verificando integridad del mapa... [FALLO]",
  "> reconstruyendo piezas: 5 / 5",
  "> enlace con archivo restablecido",
  "> bienvenida/o al Proyecto Arca"
];
var temporizadorTerminal = null;

function escribirTerminal() {
  var terminal = document.getElementById("terminal");
  clearTimeout(temporizadorTerminal);
  terminal.textContent = "";
  var linea = 0, letra = 0;
  var textoCompleto = "";

  function siguiente() {
    if (linea >= lineasTerminal.length) {
      terminal.innerHTML = textoCompleto + '<span class="cursor"></span>';
      return;
    }
    var actual = lineasTerminal[linea];
    letra++;
    terminal.innerHTML = textoCompleto + actual.slice(0, letra) + '<span class="cursor"></span>';
    if (letra >= actual.length) {
      textoCompleto += actual + "\n";
      linea++;
      letra = 0;
      temporizadorTerminal = setTimeout(siguiente, 350);
    } else {
      temporizadorTerminal = setTimeout(siguiente, 28);
    }
  }
  siguiente();
}

// ---------------------------------------------------------------
// Navegación entre pantallas (usa el # de la dirección)
// ---------------------------------------------------------------
function mostrarPantalla(nombre) {
  var destino = document.getElementById(nombre) ? nombre : "inicio";
  document.querySelectorAll(".pantalla").forEach(function (pantalla) {
    pantalla.classList.toggle("activa", pantalla.id === destino);
  });
  window.scrollTo(0, 0);
  if (destino === "protocolo-terminal") escribirTerminal();
  if (destino === "respuestas") actualizarOndas();
}

function irA(nombre) {
  location.hash = nombre;
}

window.addEventListener("hashchange", function () {
  mostrarPantalla(location.hash.replace("#", ""));
});

// Cualquier botón con data-ir lleva a esa pantalla (también los que se crean después)
document.addEventListener("click", function (evento) {
  var boton = evento.target.closest("[data-ir]");
  if (boton && !boton.disabled) irA(boton.getAttribute("data-ir"));
});

// ---------------------------------------------------------------
// Barra superior y selector de idioma
// ---------------------------------------------------------------
var plantillaBarra = document.getElementById("plantillaBarra");
document.querySelectorAll("[data-barra]").forEach(function (pantalla) {
  pantalla.insertBefore(plantillaBarra.content.cloneNode(true), pantalla.firstChild);
});

var idiomaActual = "ES";
document.querySelectorAll(".idioma").forEach(function (boton) {
  boton.addEventListener("click", function () {
    idiomaActual = idiomaActual === "ES" ? "EN" : "ES";
    document.querySelectorAll(".codigo-idioma").forEach(function (etiqueta) {
      etiqueta.textContent = idiomaActual;
    });
    document.documentElement.lang = idiomaActual.toLowerCase();
    // Aquí se conectaría el diccionario de traducciones del proyecto
  });
});

// ---------------------------------------------------------------
// Ventana de clave para "Registros de Empleados"
// ---------------------------------------------------------------
var claveCorrecta = "arca"; // clave de prueba: cámbiala por la tuya
var ventana = document.getElementById("ventanaClave");
var campoClave = document.getElementById("campoClave");
var mensajeClave = document.getElementById("mensajeClave");

document.getElementById("botonClave").addEventListener("click", function () {
  campoClave.value = "";
  mensajeClave.textContent = "";
  ventana.showModal();
  campoClave.focus();
});
document.getElementById("cancelarClave").addEventListener("click", function () {
  ventana.close();
});
function revisarClave() {
  if (campoClave.value.trim().toLowerCase() === claveCorrecta) {
    ventana.close();
    irA("empleados");
  } else {
    mensajeClave.textContent = "Clave incorrecta. Inténtalo de nuevo.";
  }
}
document.getElementById("enviarClave").addEventListener("click", revisarClave);
campoClave.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") revisarClave();
});

// ---------------------------------------------------------------
// Arranque
// ---------------------------------------------------------------
dibujarArchivos("anomalias");
dibujarArchivos("fauna");
dibujarArchivos("teoria");
dibujarEmpleados();
mostrarPantalla(location.hash.replace("#", "") || "inicio");