const stops = [
  {
    id: "casa",
    time: "6:20 · La casa despierta",
    title: "El techo también es suelo.",
    scene:
      "Sales al patio sin bajar una torre. La cubierta es ligera y sigue la ladera: lámina anclada, no teja de barro. Recoge lluvia, recibe sol, no carga masa arriba.",
    promise:
      "Una vivienda sísmicamente segura que no separa a la familia de la tierra ni obliga a depender del carro.",
    tech:
      "Sensores abiertos avisan sobre humedad, batería y movimiento estructural. No hay cámaras dentro del hogar. Los datos pertenecen a quien vive aquí.",
    image: "public/walk/walk-casa.png",
    alt: "Casas en terraza de ladera, cubierta de lámina liviana y sol, huerta al paso.",
    water: "cisterna 78 %",
    energy: "92 %",
  },
  {
    id: "agua",
    time: "6:28 · A dos minutos",
    title: "El agua se bebe y vuelve.",
    scene:
      "La lluvia pasa por primer lavado, cisterna y filtro. Las aguas grises riegan. El río queda limpio: no es el desagüe de la célula.",
    promise:
      "Agua cerca de casa, incluso cuando la red grande falla. La calidad se ve en un tablero que cualquiera puede leer.",
    tech:
      "Un medidor de caudal y turbidez detecta cambios. La inteligencia avisa; la asamblea decide cómo responder.",
    image: "public/walk/walk-agua.png",
    alt: "Cosecha y filtro de lluvia junto al camino. Una tinaja al frente.",
    water: "apta · 4,1 NTU",
    energy: "90 %",
  },
  {
    id: "huerta",
    time: "6:36 · Desayuno de aquí",
    title: "La comida nace a paso.",
    scene:
      "Café bajo sombra en Risaralda; mango y hortaliza en el Valle; cacao, borojó y plátano en Chocó. No se copia un cultivo: el suelo manda.",
    promise:
      "Menos flete, alimento fresco y trabajo cerca. En Chocó el monte vuelve solo: se poda, se siembra, se come.",
    tech:
      "Humedad de suelo y pronóstico de lluvia ayudan a regar menos. La semilla, el calendario y la decisión siguen en manos de quien cultiva.",
    image: "public/walk/walk-huerta.png",
    alt: "Huerta a paso de casa, tomate y plátano, tierra a la vista.",
    water: "riego 16 L/min",
    energy: "86 %",
  },
  {
    id: "escuela",
    time: "7:12 · Aprender haciendo",
    title: "La escuela está junto a la vida.",
    scene:
      "Niñas y mayores cruzan por un sendero visto y con sombra. En el aula se aprende caudal, cultivo, sismo, música y código con problemas reales de la célula.",
    promise:
      "Educación a pie, ligada al territorio y a los oficios necesarios para sostenerlo.",
    tech:
      "El gemelo de flujos convierte agua, energía y materia prima en material de clase. No puntúa personas: ayuda a comprender sistemas.",
    image: "public/walk/walk-escuela.png",
    alt: "Escuela-taller de la célula, lámina liviana, casas vecinas cerca.",
    water: "reserva 3 días",
    energy: "81 %",
  },
  {
    id: "salud",
    time: "7:18 · Cuidarse cerca",
    title: "La primera atención no queda lejos.",
    scene:
      "La casa de salud cubre vacunas, atención primaria, salud mental y parto de bajo riesgo. La red conecta con el hospital para lo que la célula no puede resolver.",
    promise:
      "Cuidado cotidiano a minutos de casa y una ruta clara para la urgencia.",
    tech:
      "Telemedicina y una historia clínica bajo control de la persona conectan especialistas cuando hace falta. Agua y aire también se tratan como salud.",
    image: "public/walk/walk-salud.png",
    alt: "Casa de salud de un piso, cubierta de lámina liviana, patio de piedra.",
    water: "potable · estable",
    energy: "79 %",
  },
  {
    id: "refugio",
    time: "7:40 · Si la montaña se mueve",
    title: "No es un búnker aparte.",
    scene:
      "En ladera y crecida, enterrar mata. La escuela y la casa de salud, de día oficio, de noche refugio: agua, luz, radio, botiquín. El núcleo no es búnker.",
    promise:
      "Nadie duerme en la calle la primera noche. No se costea un cuarto extra. No sustituye al hospital de red.",
    tech:
      "Sensores de movimiento y un canal de radio abierto. Sin cámara en el hogar. La inteligencia avisa; quien habita decide cuándo abrir el refugio.",
    image: "public/walk/walk-refugio.png",
    alt: "Salón de tierra y madera en la ladera, lámina liviana y sol, cisterna al piso. No es un búnker.",
    water: "reserva de refugio",
    energy: "batería crítica",
  },
  {
    id: "materia",
    time: "12:10 · El taller",
    title: "Lo que sobra es materia prima.",
    scene:
      "El escombro del sismo no se tira al cañón. Orgánico a suelo. Pieza a uso. Concreto triturado a agregado, primero no estructural. RCD solo si se ensaya.",
    promise:
      "Circularidad no es pasar el riesgo a la siguiente casa. El residual se publica.",
    tech:
      "Pasaporte de materiales: de qué está hecho cada elemento y cómo se desmonta. Tornillo antes que pegamento.",
    image: "public/walk/walk-materia.png",
    alt: "Taller a la intemperie: agregado, madera y acero clasificados como materia prima.",
    water: "lixiviado tratado",
    energy: "76 %",
  },
  {
    id: "suelo",
    time: "16:40 · El predio",
    title: "Baldío no es lote vacío.",
    scene:
      "Municipio de trabajo: Pereira. Hipótesis, no pin. La célula pide 4–15 hectáreas y mucho título. Bienes fiscales en Hacienda; amenaza en Planeación. SIPRA, ANT, POT. Si hay gente en el predio, la célula es de ellas.",
    promise:
      "Sin folio, sin cota 1.200–1.800 m, sin certificado de riesgo y sin el sí de quien habita, el predio es —. El siguiente es un radicado. El satélite no adjudica. El Fondo Milagro no es la caja de este óvalo.",
    tech:
      "SIPRA para frontera agrícola. Geovisor ANT si es rural. POT y amenaza en la alcaldía. Fondo de Tierras y SAE van a reforma agraria, no a este plano.",
    image: "public/walk/walk-verde.png",
    alt: "Sendero de tierra entre árboles y montañas, al atardecer.",
    water: "fuente a paso",
    energy: "sol del sitio",
  },
  {
    id: "memoria",
    time: "17:50 · La forma que ya había",
    title: "Antes de la conquista ya se habitaba.",
    scene:
      "Terraza en la ladera. Palafito al río. Maloca y círculo para reunirse. No copiamos un disfraz. Aprendemos esa forma: techo común, huerta a paso, el agua cerca. La técnica de ahora —sol, juntas, microred— sirve a esa memoria.",
    promise:
      "Nosotras no tenemos la última voz. Quien aún habita este suelo corrige. La plaza respalda o descarta.",
    tech:
      "Sensores y código abierto bajo un techo que ya se sabía hacer. La herramienta no sustituye al círculo.",
    image: "public/walk/walk-memoria.png",
    alt: "Techo circular de madera, plaza ovalada, terrazas y un paso elevado. Sol aparte, no encima del rito.",
    water: "cosecha de siempre",
    energy: "sol al servicio",
  },
  {
    id: "nucleo",
    time: "18:30 · El centro se enciende",
    title: "En el centro hay gente.",
    scene:
      "La plaza reúne asamblea, duelo, chirimía, salsa, currulao, cocina y taller. Todas las tradiciones caben; ninguna es dueña. El núcleo no es búnker ni nave ni estadio. Se dibuja después de que la primera célula vive.",
    promise:
      "La ciudad no termina en infraestructura. Termina —y vuelve a empezar— en la vida compartida.",
    tech:
      "Una pantalla pública muestra caudal, kilovatios y materia prima sin vigilar hogares. Código abierto, presupuesto a la vista y una regla: la tecnología propone; el territorio decide.",
    image: "public/walk/walk-nucleo.png",
    alt: "Plaza al atardecer. Gente reunida bajo una pérgola, montañas detrás.",
    water: "ciclo cerrado",
    energy: "73 % · noche",
  },
];

const intro = document.getElementById("intro");
const experience = document.getElementById("experience");
const closing = document.getElementById("closing");
const enterButton = document.getElementById("enter");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const progressBar = document.getElementById("progress-bar");
const progressLabel = document.getElementById("progress-label");
const walkedRoute = document.getElementById("walked-route");
const mapStops = [...document.querySelectorAll(".map-stop")];
const stopImage = document.getElementById("stop-image");

let currentIndex = 0;
const visited = new Set();
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function routeLength() {
  try {
    return walkedRoute.getTotalLength();
  } catch {
    return 0;
  }
}

function paintRoute(progress) {
  const length = routeLength();
  if (!length) return;
  walkedRoute.style.strokeDasharray = String(length);
  walkedRoute.style.strokeDashoffset = String(length * (1 - progress));
}

function renderStop(index) {
  currentIndex = Math.max(0, Math.min(index, stops.length - 1));
  const stop = stops[currentIndex];
  visited.add(stop.id);

  stopImage.src = stop.image;
  stopImage.alt = stop.alt;
  document.getElementById("stop-time").textContent = stop.time;
  document.getElementById("stop-title").textContent = stop.title;
  document.getElementById("stop-scene").textContent = stop.scene;
  document.getElementById("stop-promise").textContent = stop.promise;
  document.getElementById("stop-tech").textContent = stop.tech;
  document.getElementById("metric-water").textContent = stop.water;
  document.getElementById("metric-energy").textContent = stop.energy;
  document.getElementById("step-count").textContent = `${currentIndex + 1} / ${stops.length}`;

  previousButton.disabled = currentIndex === 0;
  nextButton.textContent =
    currentIndex === stops.length - 1 ? "Cómo participar" : "Seguir caminando";

  mapStops.forEach((node) => {
    const isActive = node.dataset.stop === stop.id;
    node.classList.toggle("is-active", isActive);
    node.classList.toggle("is-visited", visited.has(node.dataset.stop));
    if (isActive) node.setAttribute("aria-current", "step");
    else node.removeAttribute("aria-current");
  });

  const progress = (currentIndex + 1) / stops.length;
  progressBar.style.width = `${progress * 100}%`;
  progressLabel.textContent = `${stop.time} · paso ${currentIndex + 1} de ${stops.length}`;
  paintRoute(progress);

  history.replaceState(null, "", `#${stop.id}`);
}

function startExperience(index = 0) {
  intro.hidden = true;
  closing.hidden = true;
  experience.hidden = false;
  renderStop(index);
  if (!reduced) window.scrollTo({ top: 0, behavior: "smooth" });
}

function finishExperience() {
  experience.hidden = true;
  closing.hidden = false;
  progressBar.style.width = "100%";
  progressLabel.textContent = "Cómo participar";
  history.replaceState(null, "", "#participar");
  if (!reduced) window.scrollTo({ top: 0, behavior: "smooth" });
}

enterButton.addEventListener("click", () => startExperience(0));

previousButton.addEventListener("click", () => renderStop(currentIndex - 1));
nextButton.addEventListener("click", () => {
  if (currentIndex === stops.length - 1) finishExperience();
  else renderStop(currentIndex + 1);
});

mapStops.forEach((node) => {
  const open = () => {
    const next = stops.findIndex((stop) => stop.id === node.dataset.stop);
    if (next < 0) return;
    if (experience.hidden) startExperience(next);
    else renderStop(next);
  };
  node.addEventListener("click", open);
  node.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (experience.hidden) return;
  if (event.key === "ArrowRight") {
    event.preventDefault();
    if (currentIndex === stops.length - 1) finishExperience();
    else renderStop(currentIndex + 1);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    renderStop(currentIndex - 1);
  }
});

document.getElementById("copy-question").addEventListener("click", async () => {
  const question =
    "Si pudiéramos reconstruir un barrio con casa, agua, comida, escuela y salud a pie: ¿qué necesitaría tu comunidad, qué sobra en esta idea y qué nunca debería perderse de su territorio?";
  try {
    await navigator.clipboard.writeText(question);
    document.getElementById("copied").textContent =
      "Pregunta copiada. Llévala a una conversación real.";
  } catch {
    document.getElementById("copied").textContent = question;
  }
});

function openFromHash() {
  const id = decodeURIComponent(location.hash.replace("#", ""));
  if (id === "participar") {
    intro.hidden = true;
    finishExperience();
    return;
  }
  const index = stops.findIndex((stop) => stop.id === id);
  if (index >= 0) startExperience(index);
}

openFromHash();
window.addEventListener("hashchange", openFromHash);
