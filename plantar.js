const scenes = [
  {
    image: "public/plant/plant-ladera.png",
    alt: "Primera célula compacta en ladera: patio al centro, cubiertas ligeras. No es un predio.",
    kicker: "Corte tipo · Pereira",
    title: "No se aterriza.",
    text: "Se planta una célula a pie. No un caserío disperso. El predio es —.",
  },
  {
    image: "public/plant/plant-corte.png",
    alt: "Corte de ladera: dren, camino, cubierta ligera, núcleos y talud.",
    kicker: "Un cálculo",
    title: "El techo sigue la ladera.",
    text: "Cubierta ligera, anclada. No teja de barro. Edificio, cimentación y talud, un cálculo.",
  },
  {
    image: "public/walk/walk-casa.png",
    alt: "Casas juntas en la célula, cubierta ligera, huerta al paso.",
    kicker: "Casa",
    title: "Se sale al patio.",
    text: "Agua, luz y comida a pie. Vecinas a unos pasos. Sin lote suelto.",
  },
  {
    image: "public/walk/walk-escuela.png",
    alt: "Escuela-taller de la misma célula, cubierta ligera, vecinas cerca.",
    kicker: "Refugio cotidiano",
    title: "La escuela aguarda.",
    text: "Escuela y casa de salud son el refugio. No hay un búnker aparte.",
  },
  {
    image: "public/plant/plant-valle.png",
    alt: "Célula compacta en terraza de valle, sombra, piso sobre la crecida.",
    kicker: "Valle · 900–1.100 m",
    title: "Sombra primero.",
    text: "Piso sobre la crecida de diseño. El río no es desagüe.",
  },
  {
    image: "public/plant/plant-choco.png",
    alt: "Casas elevadas bajo dosel junto al río-camino.",
    kicker: "Chocó · 0–100 m",
    title: "El monte vuelve solo.",
    text: "Se poda, se siembra, se come. No palma ni potrero. Sin el consejo, no hay sitio.",
  },
];

const imgEl = document.getElementById("film-image");
const kickerEl = document.getElementById("film-kicker");
const titleEl = document.getElementById("film-title");
const textEl = document.getElementById("film-text");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const bar = document.getElementById("film-bar");
const countEl = document.getElementById("film-count");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let index = 0;
let playing = false;
let timer = null;
const MS = 5600;

function show(i) {
  index = (i + scenes.length) % scenes.length;
  const scene = scenes[index];
  imgEl.src = scene.image;
  imgEl.alt = scene.alt;
  kickerEl.textContent = scene.kicker;
  titleEl.textContent = scene.title;
  textEl.textContent = scene.text;
  countEl.textContent = `${index + 1} / ${scenes.length}`;
  bar.style.width = `${((index + 1) / scenes.length) * 100}%`;
}

function stop() {
  playing = false;
  playBtn.textContent = "Proyectar";
  playBtn.setAttribute("aria-pressed", "false");
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function start() {
  if (reduced) {
    show(index + 1);
    return;
  }
  playing = true;
  playBtn.textContent = "Pausar";
  playBtn.setAttribute("aria-pressed", "true");
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    if (index === scenes.length - 1) {
      stop();
      show(scenes.length - 1);
      return;
    }
    show(index + 1);
  }, MS);
}

playBtn.addEventListener("click", () => {
  if (playing) stop();
  else start();
});
prevBtn.addEventListener("click", () => {
  stop();
  show(index - 1);
});
nextBtn.addEventListener("click", () => {
  stop();
  show(index + 1);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    stop();
    show(index + 1);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    stop();
    show(index - 1);
  } else if (event.key === " ") {
    if (event.target !== playBtn) {
      event.preventDefault();
      if (playing) stop();
      else start();
    }
  }
});

show(0);
