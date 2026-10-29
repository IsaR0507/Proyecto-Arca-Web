// ---------------------------------------------------------------
// Contenido de las pantallas con menú lateral
// ---------------------------------------------------------------
var archivos = {
  anomalias: [
    {
      nombre: "Alteración del ciclo natural", codigo: "RA-001", titulo: "Alteración del ciclo natural",
      sujetos: [
        { nombre: "Sujeto 01", imagen: "Recursos/Imagenes/RA-Sujeto01.webp", alt: "Lluvia sobre el mar" },
        { nombre: "Sujeto 07", imagen: "Recursos/Imagenes/RA-Sujeto07.webp", alt: "Mapa de las lluvias en el mundo" },
        { nombre: "Sujeto 11", imagen: "Recursos/Imagenes/RA-Sujeto011.webp", alt: "Ciclos de las mareas del mar" }
      ],
      parrafos: [
        "El ciclo hidrológico del planeta ha dejado de comportarse según sus leyes conocidas. La evaporación, la condensación y la precipitación perdieron el equilibrio que las regía, y la lluvia dejó de responder a estaciones, a temperaturas o a presiones atmosféricas. No hay periodos secos. No hay pausas. El agua cae de forma continua, como si el sistema que antes la regulaba hubiera sido reemplazado por otro que no logramos identificar.",
        "Los registros descartan las causas habituales. No se trata de un desajuste temporal ni de un evento extremo aislado: es un estado nuevo y sostenido. El planeta no atraviesa una tormenta. Funciona, ahora, de otra manera."
      ]
    },
    {
      nombre: "Registro de Respuestas del Entorno", codigo: "RA-002", titulo: "Registro de respuestas del entorno",
      enlace: "respuestas", textoEnlace: "Sincronizar frecuencia",
      sujetos: [
        { nombre: "Sujeto 02", imagen: "Recursos/Imagenes/RP-Sujeto02.webp", alt: "Mapa de los recorridos de los animales" },
        { nombre: "Sujeto 05", imagen: "Recursos/Imagenes/RP-Sujeto05.webp", alt: "Cardumenes de diferentes animales marinos" },
        { nombre: "Sujeto 14", imagen: "Recursos/Imagenes/RP-Sujeto014.webp", alt: "Radar con ondas de animales" }
      ],
      parrafos: [
        "Los primeros análisis se centraron en el clima. Pronto fue imposible ignorar que el entorno entero parecía moverse en conjunto. Las corrientes marinas, las migraciones y los desplazamientos de la fauna comenzaron a mostrar una sincronía que ningún modelo ecológico contempla. Especies sin relación entre sí reaccionan al mismo tiempo, en la misma dirección, ante estímulos que no logramos detectar.",
        "El material adjunto documenta varios de estos casos (Sujeto 02, Sujeto 05, Sujeto 14). En todos, los organismos no huyen ni se adaptan, responden. Como si algo, en alguna parte, les estuviera indicando qué hacer."
      ]
    },
    {
      nombre: "Indicio de Patrones Intencionales", codigo: "RA-003", titulo: "Indicio de patrones intencionales",
      sujetos: [
        { nombre: "Sujeto 03", imagen: "Recursos/Imagenes/RI-Sujeto03.webp", alt: "Impresión de patrones intencionales" },
        { nombre: "Sujeto 06", imagen: "Recursos/Imagenes/RI-Sujeto06.webp", alt: "Barco captando ondas del fondo del mar" },
        { nombre: "Sujeto 13", imagen: "Recursos/Imagenes/RI-Sujeto13.webp", alt: "Computadora con ondas señaladas" }
      ],
      parrafos: [
        "Durante meses tratamos estas repeticiones como errores de medición. Volvimos a calibrar los instrumentos. Repetimos las lecturas. Los patrones seguían ahí.",
        "Al superponer los registros de los últimos años, la lluvia, las corrientes, los movimientos de la fauna, aparece una misma cadencia por debajo de todo. Se repite. Espera. Vuelve. No es el comportamiento de un fenómeno. Es el comportamiento de algo que decide.",
        "Hemos dejado de preguntarnos qué está causando esto. Ahora nos preguntamos quién."
      ]
    }
  ],
  fauna: [
    {
      nombre: "Fauna Alterada", codigo: "AF-001", titulo: "Fauna Alterada", 
      sujetos: [
        { nombre: "Sujeto 01", imagen: "Recursos/Imagenes/AF-Sujeto01.webp", alt: "Cientifico mirando la piel translucida de un pez espada" },
        { nombre: "Sujeto 02", imagen: "Recursos/Imagenes/AF-Sujeto02.webp", alt: "Calamar en cautiverio emitiendo luz" },
        { nombre: "Sujeto 03", imagen: "Recursos/Imagenes/AF-Sujeto03.webp", alt: "Pescado diseccionado" }
      ],
      parrafos: [
        "Las especies que sobrevivieron al ascenso del agua no se adaptaron poco a poco, como enseñaba la biología. Lo hicieron rápido. Demasiado rápido, y en el cuerpo.",
        "El pez espada fue el primer caso que documentamos. Los ejemplares capturados a gran profundidad presentan una piel engrosada y semitranslúcida que ninguna generación anterior tuvo, capaz de resistir una presión que debería haberlos reventado. No es una variación menor: es una estructura nueva, aparecida en apenas unas pocas camadas.",
        "El calamar siguió un camino distinto. Poblaciones enteras abandonaron las capas iluminadas del océano y descendieron a zonas donde antes la vida era imposible. Para hacerlo, su bioluminiscencia se volvió más intensa, más estable, casi permanente. Dejaron de usar la luz para cazar y empezaron a usarla para otra cosa que todavía no comprendemos.",
        "Ninguno de estos cambios tendría que haber ocurrido tan rápido. Lo que más inquieta no es que las especies se transformaran, sino que lo hicieran todas a la vez, como si algo les hubiera marcado el mismo rumbo al mismo tiempo."
      ]
    },
    {
      nombre: "Mutaciones Recientes", codigo: "AF-002", titulo: "Mutaciones Recientes",
      sujetos: [
        { nombre: "Sujeto 09", imagen: "Recursos/Imagenes/MR-Sujeto09.webp", alt: "Cientifico mirando un mapa con hilos que indican conexiones de animales" },
        { nombre: "Sujeto 17", imagen: "Recursos/Imagenes/MR-Sujeto017.webp", alt: "Cientifico mirando una computadora con animales mutados" },
        { nombre: "Sujeto 22", imagen: "Recursos/Imagenes/MR-Sujeto22.webp", alt: "Grupo de calamares con patrones de luminicencia en su cuerpo" }
      ],
      parrafos: [
        "Documentamos cambios difíciles de explicar: criaturas que empezaron a comportarse de formas que nadie les enseñó.",
        "Sujeto 09. Los calamares de profundidad encienden sus luces en secuencia, siempre el mismo patrón. Lo repetimos en pantalla una y otra vez pensando que era un error de la grabación. No lo era. Y lo que no logramos explicar es que ejemplares separados por kilómetros, que jamás se han cruzado, lo hacen a la vez. Algo los coordina. No sabemos qué, ni desde dónde.",
        "Sujeto 17. Abrimos un pez espada esperando encontrar lo de siempre. Encontramos una cavidad nueva en su sistema nervioso, un órgano que no estaba en ningún ejemplar de hace diez años. No le sirve para cazar. No le sirve para defenderse. Está ahí, intacto, como esperando. ¿Esperando qué?",
        "Sujeto 22. Crías que nacen sabiendo. Rutas, maniobras, formas de esconderse que nadie pudo enseñarles, porque sus padres tampoco las conocían. La información ya viene con ellas desde el primer latido. Alguien la está escribiendo antes de que nazcan. Y no somos nosotros.",
        "Lo repetimos en cada reunión como si decirlo en voz alta lo volviera menos grave. La evolución necesita siglos. Esto está pasando en años."
      ]
    },
    {
      nombre: "Nuevos Descubrimientos", codigo: "AF-003", titulo: "Nuevos Descubrimientos",
      sujetos: [
        { nombre: "Sujeto 04", imagen: "Recursos/Imagenes/ND-Sujeto04.webp", alt: "" },
        { nombre: "Sujeto 15", imagen: "Recursos/Imagenes/ND-Sujeto015.webp", alt: "" },
        { nombre: "Sujeto 16", imagen: "Recursos/Imagenes/ND-Sujeto016.webp", alt: "" }
      ],
      parrafos: [
        "Mandamos el sonar a las zonas más profundas, a donde nunca habíamos llegado. Nos devolvió siluetas que no deberían existir.",
        "La primera nos dejó en silencio frente a la pantalla. Una masa larga del tamaño de un edificio, moviéndose despacio en la oscuridad, sin agresividad, casi con calma. La anotamos como Leviatán porque no supimos cómo más llamarla. No caza, no huye, no reacciona cuando nos acercamos. Simplemente está ahí, como si el océano mismo se hubiera puesto a nadar. Entendimos, viéndola, por qué en la superficie ya hay quienes la veneran.",
        "Más abajo, en las grietas abisales, encontramos algo que no se dejó ver entero. Solo fragmentos: un movimiento, una sombra, el eco de algo inmenso replegándose apenas lo detectábamos. Lo registramos como Kraken. Todavía no sabemos si es una criatura o el dueño de un territorio.",
        "Pero hubo un hallazgo que nos silenció a todos. Una imagen de lo que aparenta ser...un plesiosaurio...?. Una criatura que los libros daban por extinta hace millones de años, nadando con una habilidad que sus ancestros jamás tuvieron. No es un fósil que volvió. Es algo nuevo con forma antigua.",
        "Y no fue su cuerpo lo que nos silenció, sino su voz. La grabamos sin creer lo que oíamos: sonidos profundos, orgánicos, casi imposibles. No son rugidos. Tienen cadencia, pausas, estructura. Se parecen menos a un animal y más a alguien hablando. Y por debajo de esa voz, apenas perceptible, estaba otra vez el mismo pulso que nos trajo hasta este archivo.",
        "La naturaleza no solo sobrevive. Nos está respondiendo."
      ]
    }
  ],
  teoria: [
    {
      nombre: "Hipótesis Aprobadas", codigo: "TC-001", titulo: "Hipótesis Aprobadas",
      sujetos: [
        { nombre: "Fundadores de la Hipótesis", imagen: "Recursos/Imagenes/HA-Fundadores.webp", alt: "Foto de los fundadores de la hipótesis" },
        { nombre: "Sujeto 00", imagen: "Recursos/Imagenes/HA-Sujeto 00.webp", alt: "Ilustración del planeta tierra como un organismo vivo" },
        { nombre: "Sujeto 10", imagen: "Recursos/Imagenes/HA-Sujeto010.webp", alt: "Foto de diferentes archivos que componen la hipótesis" }
      ],
      parrafos: [
        "Durante años se trató cada fenómeno por separado. El clima. La fauna. Los patrones. Se buscaba una causa distinta para cada anomalía, y ninguna encajaba.",
        "El error fue buscar causas separadas. No las hay. Hay una sola.",
        "Tesis central del Proyecto ARCA, aprobada por el equipo: el planeta no está sufriendo un desastre. El planeta está respondiendo a uno. La Tierra es un organismo vivo, y la lluvia es su sistema inmunológico. Lo que llamamos catástrofe es, desde su punto de vista, una defensa.",
        "Y si el planeta se defiende, hay que preguntarse de qué. La respuesta somos nosotros."
      ]
    },
    {
      nombre: "Clima", codigo: "TC-002", titulo: "Clima",
      sujetos: [
        { nombre: "Sujeto 019", imagen: "Recursos/Imagenes/CL-Sujeto019.webp", alt: "Foto de un diagrama con los picos de clima a lo largo de los años" },
        { nombre: "Sujeto 020", imagen: "Recursos/Imagenes/CL-Sujeto020.webp", alt: "Mapa de los patrones climáticos en cuanto a lluvia en el mundo" },
        { nombre: "Sujeto 030", imagen: "Recursos/Imagenes/CL-Sujeto030.webp", alt: "Foto de papeles en un escritorio con información climática" }
      ],
      parrafos: [
        "La lluvia nunca fue aleatoria.",
        "El fenómeno no sigue ciclos atmosféricos. Sigue una lógica más parecida a la de una fiebre: se intensifica, cede, vuelve, siempre en respuesta a algo. Cuando la actividad humana se concentra en una zona, la lluvia y las mareas se concentran allí también. No es el clima enloqueciendo. Es un cuerpo subiendo la temperatura para expulsar aquello que lo enferma.",
        "El planeta no nos está matando por accidente. Nos está tratando como una infección."
      ]
    },
    {
      nombre: "Fauna", codigo: "TC-003", titulo: "Fauna",
      sujetos: [
        { nombre: "Sujeto 06", imagen: "Recursos/Imagenes/FA-Sujeto06.webp", alt: "Foto de un cardumen de peces" },
        { nombre: "Sujeto 028", imagen: "Recursos/Imagenes/FA-Sujeto028.webp", alt: "Libro con fotos de los cambios en la fauna" },
        { nombre: "Sujeto 032", imagen: "Recursos/Imagenes/FA-Sujeto032.webp", alt: "Foto de la comparación de un pez espada de antes y después de las modificaciones" }
      ],
      parrafos: [
        "Las mutaciones del Archivo de Fauna dejaron de ser un misterio biológico al leerlas desde esta tesis.",
        "Las especies no están evolucionando por azar. Están siendo adaptadas. La velocidad imposible de los cambios, las crías que nacen sabiendo, la coordinación entre animales que nunca se cruzaron: todo apunta a un sistema que reescribe la vida marina para que prospere en el nuevo mundo. Un mundo sin nosotros.",
        "El planeta no solo busca expulsar a la humanidad. Ya está preparando a quienes la reemplazarán."
      ]
    },
    {
      nombre: "Patrones", codigo: "TC-004", titulo: "Patrones",
      sujetos: [
        { nombre: "Equipo Arca", imagen: "Recursos/Imagenes/PA-EquipoArca.webp", alt: "Equipo de investigación reaccionando a las frecuencias del latido" },
        { nombre: "Sujeto 024", imagen: "Recursos/Imagenes/PA-Sujeto024.webp", alt: "Onda de sonido convertida en frecuencia" },
        { nombre: "Sujeto 027", imagen: "Recursos/Imagenes/PA-Sujeto027.webp", alt: "Hoja con picos de frecuencia y señalizaciones" }
      ],
      parrafos: [
        "Todo lo anterior converge en una sola evidencia: el latido.",
        "La señal que Nikolai registró en las profundidades no es un fenómeno geológico. Es el centro de todo. El clima, la fauna y las anomalías no son eventos independientes: son las manifestaciones de un mismo pulso que coordina el planeta entero. Medimos su ritmo. Lo cruzamos con cada hallazgo. Coincide con todos.",
        "El planeta tiene un corazón, y late con la intención de que no estemos aquí para oírlo."
      ]
    }
  ]
};

// Fichas del Registro de Empleados
var empleados = [
  {
    codigo: "RE-001", nombre: "Helena Athenaiou", permanencia: "Fundadora", estado: "Fallecida",
    ocupacion: "Geodinámica orgánica",
    investigaciones: "Modelo predictivo del ciclo hidrológico planetario. Base teórica del proyecto, derivada de la tesis fundacional “Fisiología del colapso”. Primer marco que trata al planeta no como un escenario, sino como un organismo capaz de enfermar.",
    hallazgos: "El fenómeno fue anticipado años antes de la primera lluvia. El modelo no falló en ningún punto. Lo que se descartó por imposible terminó cumpliéndose con exactitud.",
    soluciones: "Línea de trabajo: comprensión antes que intervención. Prioridad en descifrar la lógica del planeta sobre cualquier medida de contención. Expediente interrumpido por fallecimiento."
  },
  {
    codigo: "RE-002", nombre: "Nikolai Vernadsky", permanencia: "Fundador", estado: "Fallecido",
    ocupacion: "Geodinámica orgánica",
    investigaciones: "Balizas sonoras de profundidad. Instrumentos diseñados para registrar la actividad del planeta por debajo del alcance de cualquier sonda anterior. Traducción de los modelos teóricos en mediciones de campo.",
    hallazgos: "Primer registro de un latido en el fondo del océano. Señal rítmica, constante, sin fuente identificable. No corresponde a ninguna actividad geológica conocida. El hallazgo convirtió una hipótesis en un hecho medible: el planeta tiene un ritmo.",
    soluciones: "Expediente suspendido tras el fallecimiento del investigador. Las conclusiones quedaron abiertas en el peor momento posible: justo cuando el latido obligaba a decidir qué hacer con lo que se había encontrado."
  },
  {
    codigo: "RE-003", nombre: "Li Jie Bi", permanencia: "Desde la fundación", estado: "Activa",
    ocupacion: "Ciencias de sistemas complejos y bioética",
    investigaciones: "Análisis de los sistemas del planeta como una totalidad interconectada. Estudio de la coordinación entre clima, fauna y actividad sísmica. Revisión ética de cada propuesta del equipo.",
    hallazgos: "Los patrones del fenómeno responden a una lógica coordinada, no aleatoria. Interpretación registrada: no se trata de una amenaza, sino de una forma de vida que aún no sabemos reconocer.",
    soluciones: "Oposición formal a toda medida destructiva. Observación consignada en acta: “Eliminar lo que no comprendemos, solo porque no lo comprendemos, no es ciencia. Es miedo.” Postura minoritaria. Respaldo dentro del equipo: en descenso."
  },
  {
    codigo: "RE-004", nombre: "Ren Takahashi", permanencia: "14 años", estado: "Activo",
    ocupacion: "Bioingeniería y sistemas orgánicos",
    investigaciones: "Estudio de intervención directa sobre organismos de gran escala. Líneas de trabajo orientadas a detener, no a comprender. Análisis del planeta como un cuerpo sobre el que es posible operar.",
    hallazgos: "El fenómeno se comporta como un sistema inmunológico. Conclusión registrada: la humanidad es, para el planeta, la infección que intenta expulsar. Un organismo no negocia con aquello que lo enferma.",
    soluciones: "Propuesta: neutralización del organismo planetario. Justificación: no existe coexistencia posible. Una de las dos partes debe cesar. Posición del investigador: inequívoca."
  },
  {
    codigo: "RE-005", nombre: "Seo Min-jae", permanencia: "11 años", estado: "Activo",
    ocupacion: "Geoingeniería y sistemas climáticos extremos",
    investigaciones: "Diseño de intervenciones a gran escala sobre la geología y el clima. Identificación de los puntos donde el planeta concentra su actividad. Conversión de propuestas teóricas en operaciones ejecutables sobre el terreno.",
    hallazgos: "Localizados los focos desde los cuales el fenómeno se propaga y sostiene. En teoría, puntos vulnerables. En la práctica, los lugares desde donde podría atacarse el origen del fenómeno.",
    soluciones: "Respaldo a las medidas destructivas. Motivo registrado: urgencia, no doctrina. Observación en acta: “No queda tiempo para entender al planeta. Solo para actuar antes de que no quede nadie a quien salvar.”"
  },
  {
    codigo: "RE-006", nombre: "Lin Xinyu", permanencia: "9 años", estado: "Activa",
    ocupacion: "Neurociencia y conciencia emergente",
    investigaciones: "Estudio de la posibilidad de conciencia en el fenómeno. Análisis del latido y de los patrones como si se tratara de actividad mental. Búsqueda de señales de intención detrás del comportamiento del planeta.",
    hallazgos: "Indicios de algo parecido a una voluntad. No solo un organismo que reacciona, sino una entidad que decide. Hallazgo de confirmación evitada por el resto del equipo durante meses.",
    soluciones: "Conclusión: si el planeta es consciente, es un rival. Toda entidad que compita por la supervivencia debe ser tratada como tal. Nota al margen del expediente: la conciencia del planeta no se registra como motivo para perdonarlo, sino para temerle."
  }
];

// Cuadros de "Sujeto" que se usan cuando los apartados no tiene las iamgenes
var sujetosPorDefecto = [
  { nombre: "Sujeto 01" },
  { nombre: "Sujeto 07" },
  { nombre: "Sujeto 11" }
];
var sujetosPorDefectoTeoria = [
  { nombre: "Sujeto 01" },
  { nombre: "Sujeto 01" }
];

// Qué archivo está seleccionado en cada pantalla (por defecto, el que se ve en el diseño)
var seleccionado = { anomalias: 0, fauna: 0, teoria: 0 };

// Devuelve los cuadros de "Sujeto" del apartado que está abierto en esa pantalla
function obtenerSujetos(grupo) {
  var actual = archivos[grupo][seleccionado[grupo]];
  return actual.sujetos || (grupo === "teoria" ? sujetosPorDefectoTeoria : sujetosPorDefecto);
}

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
  var parrafos = "";
  actual.parrafos.forEach(function (texto) {
    parrafos += '<p>' + texto + '</p>';
  });
  var enlace = "";
  if (actual.enlace) {
    enlace = '<button class="boton enlace-extra" type="button" data-ir="' + actual.enlace + '">' + actual.textoEnlace + '</button>';
  }
    // Cuadros de "Sujeto": con imagen si el apartado la tiene, y si no, el cuadro de color
  var listaSujetos = obtenerSujetos(grupo);
  var sujetos = '<div class="sujetos">';
  listaSujetos.forEach(function (sujeto, posicion) {
    if (sujeto.imagen) {
      // Con imagen es un botón, así también se puede abrir con el teclado
      sujetos += '<button type="button" class="sujeto sujeto--foto" data-grupo="' + grupo + '" data-posicion="' + posicion + '" aria-label="Ampliar imagen: ' + (sujeto.alt || sujeto.nombre) + '">' +
        '<img src="' + sujeto.imagen + '" alt="">' +
        '<span>' + sujeto.nombre + '</span></button>';
    } else {
      sujetos += '<div class="sujeto"><span>' + sujeto.nombre + '</span></div>';
    }
  });
  sujetos += '</div>';

  if (grupo === "teoria") {
    detalle.innerHTML = '<div><p class="codigo">//' + actual.codigo + '</p><h3>' + actual.titulo + '</h3>' + parrafos + '</div>' + sujetos;
  } else {
    detalle.innerHTML = '<div><p class="codigo">//' + actual.codigo + '</p><h3>' + actual.titulo + '</h3>' + parrafos + enlace + '</div>' + sujetos;
  }
}

// ---------------------------------------------------------------
// Registro de empleados: una tarjeta por persona + ficha completa
// ---------------------------------------------------------------


function empleadoRestringido(persona) {
  var nombre = persona.nombre.toLowerCase();

  return nombre.includes("helena") ||
         nombre.includes("nikolai");
}

function dibujarEmpleados() {
  var rejilla = document.getElementById("rejillaEmpleados");
  var html = "";

  empleados.forEach(function (persona, posicion) {

    // 1. Foto o iniciales dentro del círculo
    var contenidoFoto = persona.foto
      ? '<img src="' + persona.foto + '" alt="">'
      : persona.nombre
          .split(" ")
          .map(function (p) { return p[0]; })
          .join("")
          .slice(0, 2);

    // 2. Estado del empleado
    var claseEstado = persona.estado &&
      persona.estado.indexOf("Fallec") === 0
        ? " fallecido"
        : "";

    // 3. Bloqueo de Helena y Nikolai
    var restringido = empleadoRestringido(persona);

    var claseRestringida = restringido
      ? " empleado-tachado"
      : "";

    var botonDesactivado = restringido
      ? " disabled"
      : "";

    // 4. Construcción de la tarjeta
    html +=
      '<article class="empleado' +
        claseEstado + claseRestringida + '">' +

        '<div class="foto" role="img" aria-label="Identificador de ' +
          persona.nombre + '">' +
          contenidoFoto +
        '</div>' +

        '<div class="datos">' +

          '<span class="nombre-empleado">' +
            persona.nombre +
          '</span>' +

          (restringido
            ? '<span class="sello-restringido">ACCESO RESTRINGIDO</span>'
            : '') +

          '<div class="columnas">' +
            '<div><b>Ocupación</b><span>' +
              persona.ocupacion +
            '</span></div>' +

            '<div><b>Permanencia</b><span>' +
              persona.permanencia +
            '</span></div>' +
          '</div>' +

          '<button class="boton" type="button" data-empleado="' +
            posicion + '"' + botonDesactivado + '>' +

            (restringido
              ? 'EXPEDIENTE BLOQUEADO'
              : 'ACCEDER AL REGISTRO') +

          '</button>' +

        '</div>' +
      '</article>';
  });

  rejilla.innerHTML = html;
}


// Ventana con la ficha completa de la persona
var ventanaFicha = document.getElementById("ventanaEmpleado");

function abrirFicha(posicion) {
  var persona = empleados[posicion];
   if (!persona || empleadoRestringido(persona)) {
    return;
  }
  document.getElementById("fichaCodigo").textContent = "//" + persona.codigo;
  document.getElementById("fichaNombre").textContent = persona.nombre;
  document.getElementById("fichaPermanencia").textContent = persona.permanencia;
  document.getElementById("fichaEstado").textContent = persona.estado;
  document.getElementById("fichaOcupacion").textContent = persona.ocupacion;
  document.getElementById("fichaInvestigaciones").textContent = persona.investigaciones;
  document.getElementById("fichaHallazgos").textContent = persona.hallazgos;
  document.getElementById("fichaSoluciones").textContent = persona.soluciones;
  ventanaFicha.showModal();
}

document.getElementById("rejillaEmpleados").addEventListener("click", function (evento) {
  var boton = evento.target.closest("[data-empleado]");
  if (boton) abrirFicha(Number(boton.getAttribute("data-empleado")));
});
document.getElementById("cerrarFicha").addEventListener("click", function () {
  ventanaFicha.close();
});

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

// Valores que hay que alcanzar para sincronizar (la onda punteada es la "meta")
var objetivoAmplitud = 72;
var objetivoBanda = 35;
var tolerancia = 3;   // qué tan cerca hay que quedar (en la escala de los deslizadores)

// Una vez desbloqueado, se queda así mientras la pestaña siga abierta
var faunaDesbloqueada = false;
try { faunaDesbloqueada = sessionStorage.getItem("faunaDesbloqueada") === "si"; } catch (error) {}

var tarjetaFauna = document.getElementById("tarjetaFauna");
var iconoFauna = document.getElementById("iconoFauna");
var textoFauna = document.getElementById("textoFauna");
var botonFauna = document.getElementById("botonFauna");
var estadoSincronia = document.getElementById("estadoSincronia");

function frecuenciaDe(banda) {
  return 8 + banda / 100 * 36;   // más "banda" = más ondas
}

const candadoCerrado = `
  <svg xmlns="http://www.w3.org/2000/svg"
       width="16" height="16"
       fill="currentColor"
       viewBox="0 0 16 16"
       aria-hidden="true">
    <path fill-rule="evenodd"
      d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>
  </svg>
`;

const candadoAbierto = `
  <svg xmlns="http://www.w3.org/2000/svg"
       width="16" height="16"
       fill="currentColor"
       viewBox="0 0 16 16"
       aria-hidden="true">
    <path fill-rule="evenodd"
      d="M8 0a4 4 0 0 1 4 4v2h-1V4a3 3 0 0 0-6 0v4h7.5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 3 13.5v-3A2.5 2.5 0 0 1 5.5 8H4V4a4 4 0 0 1 4-4"/>
  </svg>
`;

function pintarCandadoFauna() {
  tarjetaFauna.classList.toggle(
    "desbloqueada",
    faunaDesbloqueada
  );

  iconoFauna.innerHTML = faunaDesbloqueada
    ? candadoAbierto
    : candadoCerrado;

  textoFauna.textContent = faunaDesbloqueada
    ? "Desbloqueado. La señal reveló el archivo de fauna."
    : "Bloqueado. Sincroniza la frecuencia para acceder.";

  botonFauna.disabled = !faunaDesbloqueada;
}

function desbloquearFauna() {
  if (faunaDesbloqueada) return;
  faunaDesbloqueada = true;
  try { sessionStorage.setItem("faunaDesbloqueada", "si"); } catch (error) {}
  pintarCandadoFauna();
}

function revisarSincronia(amplitud, banda) {
  var difAmplitud = Math.abs(amplitud - objetivoAmplitud);
  var difBanda = Math.abs(banda - objetivoBanda);
  var coincide = difAmplitud <= tolerancia && difBanda <= tolerancia;

  // 100% = exacto, baja a medida que te alejas de la meta
  var porcentaje = coincide ? 100 : Math.min(99, Math.max(0, Math.round(100 - (difAmplitud + difBanda))));
  estadoSincronia.textContent = coincide
    ? "Sincronía: 100% · Frecuencia sincronizada"
    : "Sincronía: " + porcentaje + "%";

  if (coincide) desbloquearFauna();
}

function actualizarOndas() {
  var amplitud = Number(campoAmplitud.value);
  var banda = Number(campoBanda.value);
  // Punteada: la meta (siempre igual). Continua: la que mueves con los deslizadores.
  ondaPunteada.setAttribute("d", crearOnda(objetivoAmplitud * 1.1, frecuenciaDe(objetivoBanda), 0, 0));
  ondaSolida.setAttribute("d", crearOnda(amplitud * 1.1, frecuenciaDe(banda), 0, 0));
  pintarRelleno(campoAmplitud);
  pintarRelleno(campoBanda);
  revisarSincronia(amplitud, banda);
}

// Redibuja la onda continua cada vez que se mueve un deslizador
// ("input" se dispara mientras arrastras, también con el teclado)
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
  "> EXTRAÑO DETECTADO EN EL SISTEMA",
  "> analizando comportamiento.....",
  "> .....",
  "> Ella sabe que estamos aquí...",

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
      // Fin de la animación: unos segundos para leer y se cierra
      temporizadorTerminal = setTimeout(cerrarPagina, 2500);
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

// Cierre final: fundido a negro y se intenta cerrar la pestaña.
// OJO: el navegador solo permite window.close() en pestañas abiertas por
// código (window.open). Si no lo deja, queda la pantalla negra de cierre.
function cerrarPagina() {
  try { sessionStorage.clear(); } catch (error) {}   // la próxima visita empieza de cero
  document.body.classList.add("apagando");
  setTimeout(function () {
    window.close();
    setTimeout(function () { document.body.classList.add("apagada"); }, 400);
  }, 1600);
}

// ---------------------------------------------------------------
// Protocolo ARCA: mapa que se arma arrastrando las piezas
// ---------------------------------------------------------------
var mapa = document.getElementById("mapaProtocolo");
var piezas = Array.prototype.slice.call(mapa.querySelectorAll(".pieza"));
var estadoMapa = document.getElementById("estadoMapa");
var botonContinuar = document.getElementById("botonContinuar");
var mapaCompleto = false;
var IMAN = 14;   // qué tan cerca de su silueta debe soltarse una pieza para encajar

// Dónde arranca cada pieza (desplazada de su lugar correcto)
var desorden = [[-48, 34], [44, -36], [-40, 42], [46, 30], [38, -44]];

function moverPieza(pieza, x, y) {
  pieza.dataset.x = x;
  pieza.dataset.y = y;
  pieza.setAttribute("transform", "translate(" + x + " " + y + ")");
}

function reiniciarMapa() {
  mapaCompleto = false;
  mapa.classList.remove("completo");
  piezas.forEach(function (pieza, i) {
    pieza.classList.remove("encajada");
    pieza.setAttribute("tabindex", "0");
    moverPieza(pieza, desorden[i][0], desorden[i][1]);
  });
  botonContinuar.disabled = true;
  revisarMapa();
}

// Si la pieza quedó cerca de su lugar, la encaja y ya no se mueve
function intentarEncajar(pieza) {
  var x = Number(pieza.dataset.x), y = Number(pieza.dataset.y);
  if (Math.sqrt(x * x + y * y) <= IMAN) {
    moverPieza(pieza, 0, 0);
    pieza.classList.add("encajada");
    pieza.removeAttribute("tabindex");
    revisarMapa();
  }
}

function revisarMapa() {
  var encajadas = piezas.filter(function (p) { return p.classList.contains("encajada"); }).length;
  if (encajadas === piezas.length) {
    mapaCompleto = true;
    mapa.classList.add("completo");
    botonContinuar.disabled = false;
    estadoMapa.textContent = "Mapa reconstruido. Puedes continuar.";
  } else {
    estadoMapa.textContent = "Piezas en su lugar: " + encajadas + " / " + piezas.length;
  }
}

// Arrastre con mouse, dedo o lápiz (pointer events sirven para los tres)
var arrastre = null;
mapa.addEventListener("pointerdown", function (evento) {
  var pieza = evento.target.closest(".pieza");
  if (!pieza || pieza.classList.contains("encajada")) return;
  var escala = mapa.getScreenCTM();   // pixeles de pantalla -> unidades del SVG
  pieza.parentNode.appendChild(pieza);   // la trae al frente
  arrastre = {
    pieza: pieza,
    inicioX: evento.clientX, inicioY: evento.clientY,
    x: Number(pieza.dataset.x), y: Number(pieza.dataset.y),
    escalaX: escala.a, escalaY: escala.d
  };
  pieza.classList.add("arrastrando");
  mapa.setPointerCapture(evento.pointerId);
  evento.preventDefault();
});
mapa.addEventListener("pointermove", function (evento) {
  if (!arrastre) return;
  moverPieza(arrastre.pieza,
    arrastre.x + (evento.clientX - arrastre.inicioX) / arrastre.escalaX,
    arrastre.y + (evento.clientY - arrastre.inicioY) / arrastre.escalaY);
});
function soltarPieza() {
  if (!arrastre) return;
  arrastre.pieza.classList.remove("arrastrando");
  intentarEncajar(arrastre.pieza);
  arrastre = null;
}
mapa.addEventListener("pointerup", soltarPieza);
mapa.addEventListener("pointercancel", soltarPieza);

// Teclado: Tab para elegir pieza, flechas para moverla
mapa.addEventListener("keydown", function (evento) {
  var pieza = evento.target.closest(".pieza");
  if (!pieza || pieza.classList.contains("encajada")) return;
  var pasos = { ArrowLeft: [-6, 0], ArrowRight: [6, 0], ArrowUp: [0, -6], ArrowDown: [0, 6] };
  var paso = pasos[evento.key];
  if (!paso) return;
  evento.preventDefault();
  moverPieza(pieza, Number(pieza.dataset.x) + paso[0], Number(pieza.dataset.y) + paso[1]);
  intentarEncajar(pieza);
});

// ---------------------------------------------------------------
// Navegación entre pantallas (usa el # de la dirección)
// ---------------------------------------------------------------

// Qué clave necesita cada pantalla (la de ondas y fauna están dentro de anomalías)
var requisitos = {
  anomalias: "anomalias", respuestas: "anomalias", fauna: "anomalias",
  empleados: "empleados", teoria: "teoria"
};

function mostrarPantalla(nombre) {
  // Nadie entra a un archivo bloqueado escribiendo el # en la dirección
  if (requisitos[nombre] && !desbloqueado[requisitos[nombre]]) {
    irA("landing");
    return;
  }
  // El protocolo solo existe cuando los tres archivos están abiertos
  if ((nombre === "protocolo-error" || nombre === "protocolo-terminal") && !todoDesbloqueado()) {
    irA("landing");
    return;
  }
  // Y a la animación final solo se llega con el mapa armado
  if (nombre === "protocolo-terminal" && !mapaCompleto) {
    irA("protocolo-error");
    return;
  }

  // El archivo de fauna está bloqueado hasta sincronizar la frecuencia
  if (nombre === "fauna" && !faunaDesbloqueada) {
    irA("respuestas");
    return;
  }

  var destino = document.getElementById(nombre) ? nombre : "inicio";
  document.querySelectorAll(".pantalla").forEach(function (pantalla) {
    pantalla.classList.toggle("activa", pantalla.id === destino);
  });
  window.scrollTo(0, 0);
  // Si sales de la terminal antes de que termine, se cancela el cierre
  if (destino !== "protocolo-terminal") clearTimeout(temporizadorTerminal);
  if (destino === "protocolo-error" && !mapaCompleto) reiniciarMapa();
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
// Claves de los archivos clasificados (una sola ventana para los tres)
// ---------------------------------------------------------------
var cerraduras = {
  anomalias: {
    titulo: "Registro de anomalías",
    etiqueta: "Ingresa la fecha de acceso",
    pista: "DD/MM/AAAA",
    clave: "13/09/2094"
  },
  empleados: {
    titulo: "Registros de Empleados",
    etiqueta: "Ingresa la frase de acceso",
    pista: "",
    clave: "Somos la semilla del mañana en la tierra del ayer"
  },
  teoria: {
    titulo: "Teoría Clasificada",
    etiqueta: "Ingresa la clave del archivo",
    pista: "",
    clave: "COLAPSO_2052"
  }
};

// Qué archivos ya se abrieron (se recuerda mientras la pestaña siga abierta)
var desbloqueado = { anomalias: false, empleados: false, teoria: false };
try {
  var guardado = JSON.parse(sessionStorage.getItem("arcaDesbloqueos"));
  if (guardado) Object.assign(desbloqueado, guardado);
} catch (error) {}

function guardarDesbloqueos() {
  try { sessionStorage.setItem("arcaDesbloqueos", JSON.stringify(desbloqueado)); } catch (error) {}
}

function todoDesbloqueado() {
  return desbloqueado.anomalias && desbloqueado.empleados && desbloqueado.teoria;
}

// Compara sin importar mayúsculas, tildes, espacios ni signos:
// "13/09/2094" = "13-09-2094" y "colapso 2052" = "COLAPSO_2052"
function normalizar(texto) {
  return texto.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

// Candados de las tarjetas + botón del Protocolo ARCA
var tarjetaProtocolo = document.getElementById("tarjetaProtocolo");
var equisProtocolo = document.getElementById("equisProtocolo");
var botonProtocolo = document.getElementById("botonProtocolo");

function pintarTarjetas() {
  Object.keys(cerraduras).forEach(function (archivo) {
    var tarjeta = document.querySelector('[data-tarjeta="' + archivo + '"]');
    var abierto = desbloqueado[archivo];
    tarjeta.querySelector(".icono-candado").innerHTML = abierto ? candadoAbierto : candadoCerrado;
    tarjeta.querySelector("[data-clave]").textContent = abierto ? "Acceder" : "Ingresar clave";
  });

  // Cuando los tres están abiertos, se activa el protocolo
  var listo = todoDesbloqueado();
  tarjetaProtocolo.classList.toggle("restringida", !listo);
  tarjetaProtocolo.classList.toggle("disponible", listo);
  equisProtocolo.innerHTML = listo ? candadoAbierto : "X";
  botonProtocolo.disabled = !listo;
  botonProtocolo.textContent = listo ? "ACCEDER" : "RESTRINGIDO";
}

var ventana = document.getElementById("ventanaClave");
var tituloClave = document.getElementById("tituloClave");
var etiquetaClave = document.getElementById("etiquetaClave");
var campoClave = document.getElementById("campoClave");
var mensajeClave = document.getElementById("mensajeClave");
var archivoPendiente = null;   // el archivo cuya clave se está pidiendo

// Botones con data-clave: si ya está abierto entra directo, si no pide la clave
document.addEventListener("click", function (evento) {
  var boton = evento.target.closest("[data-clave]");
  if (!boton) return;
  var archivo = boton.getAttribute("data-clave");
  if (desbloqueado[archivo]) {
    irA(archivo);
    return;
  }
  archivoPendiente = archivo;
  tituloClave.textContent = cerraduras[archivo].titulo;
  etiquetaClave.textContent = cerraduras[archivo].etiqueta;
  campoClave.placeholder = cerraduras[archivo].pista;
  campoClave.value = "";
  mensajeClave.textContent = "";
  ventana.showModal();
  campoClave.focus();
});

document.getElementById("cancelarClave").addEventListener("click", function () {
  ventana.close();
});

function revisarClave() {
  var cerradura = cerraduras[archivoPendiente];
  if (normalizar(campoClave.value) === normalizar(cerradura.clave)) {
    desbloqueado[archivoPendiente] = true;
    guardarDesbloqueos();
    pintarTarjetas();
    ventana.close();
    irA(archivoPendiente);
  } else {
    mensajeClave.textContent = "Clave incorrecta. Inténtalo de nuevo.";
    campoClave.select();
  }
}
document.getElementById("enviarClave").addEventListener("click", revisarClave);
campoClave.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") revisarClave();
});

// ---------------------------------------------------------------
// Arranque
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Visor de imágenes (carrusel): se abre al hacer clic en un "Sujeto"
// ---------------------------------------------------------------
var visor = document.getElementById("visor");
var visorImagen = document.getElementById("visorImagen");
var visorPie = document.getElementById("visorPie");
var fotosVisor = [];     // las imágenes que se pueden recorrer
var posicionVisor = 0;   // cuál se está viendo

function mostrarFotoVisor() {
  var foto = fotosVisor[posicionVisor];
  visorImagen.src = foto.imagen;
  visorImagen.alt = foto.alt || foto.nombre;
  visorPie.textContent = foto.nombre + "  (" + (posicionVisor + 1) + " / " + fotosVisor.length + ")";
}

function abrirVisor(grupo, posicionClic) {
  var todos = obtenerSujetos(grupo);
  // Solo recorremos los cuadros que tienen imagen
  fotosVisor = todos.filter(function (sujeto) { return sujeto.imagen; });
  posicionVisor = fotosVisor.indexOf(todos[posicionClic]);
  mostrarFotoVisor();
  visor.showModal();
}

function cambiarFoto(paso) {
  // El "% length" hace que después de la última vuelva a la primera
  posicionVisor = (posicionVisor + paso + fotosVisor.length) % fotosVisor.length;
  mostrarFotoVisor();
}

document.addEventListener("click", function (evento) {
  var cuadro = evento.target.closest(".sujeto--foto");
  if (cuadro) abrirVisor(cuadro.getAttribute("data-grupo"), Number(cuadro.getAttribute("data-posicion")));
});
document.getElementById("visorAdelante").addEventListener("click", function () { cambiarFoto(1); });
document.getElementById("visorAtras").addEventListener("click", function () { cambiarFoto(-1); });
document.getElementById("visorCerrar").addEventListener("click", function () { visor.close(); });

// Flechas del teclado para pasar de imagen (Esc cierra solo)
visor.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowRight") cambiarFoto(1);
  if (evento.key === "ArrowLeft") cambiarFoto(-1);
});
// Clic en el fondo oscuro cierra el visor
visor.addEventListener("click", function (evento) {
  if (evento.target === visor) visor.close();
});

dibujarArchivos("anomalias");
dibujarArchivos("fauna");
dibujarArchivos("teoria");
dibujarEmpleados();
pintarCandadoFauna();
pintarTarjetas();
reiniciarMapa();
mostrarPantalla(location.hash.replace("#", "") || "inicio");