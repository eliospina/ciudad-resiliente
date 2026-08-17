const notes = {
  nave: "La nave es el corazón: un espacio universal, interreligioso, de encuentro. No es de un credo. Es de quien llegue.",
  naturaleza: "Corredores verdes entre células. El óvalo respira: árboles, sombra, biodiversidad.",
  energia: "Cada célula genera y guarda su luz. Si una falla, las otras no se apagan.",
  agua: "Captar, guardar, tratar, devolver. El agua no espera un único acueducto lejano.",
  alimento: "Huertas y cocina de barrio. Comer cerca de donde se vive.",
  vivienda: "Casas que se sostienen en el temblor. Comunidades, no un solo bloque mudo.",
  escuela: "Aprender a cuidar la red: energía, agua, bosque, código abierto.",
};

const noteEl = document.getElementById("cell-note");

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", () => {
    const id = cell.dataset.id;
    noteEl.textContent = notes[id] ?? "";
  });
});

function isGap(value) {
  return !value || value.startsWith("Información no disponible") || value.startsWith("Sin fuente");
}

function cell(value, href) {
  const td = document.createElement("td");
  if (href) {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = value;
    td.append(a);
    return td;
  }
  td.textContent = value;
  if (isGap(value)) td.className = "gap";
  return td;
}

async function loadFlows() {
  const body = document.getElementById("flujos-body");
  if (!body) return;
  const res = await fetch("data/flujos.json");
  const data = await res.json();
  for (const flow of data.flows) {
    const tr = document.createElement("tr");
    tr.append(
      cell(flow.origin),
      cell(flow.amount),
      cell(flow.route),
      cell(flow.territory),
      cell(flow.executed),
      flow.source.url ? cell(flow.source.name, flow.source.url) : cell(flow.source.name),
    );
    body.append(tr);
  }
}

loadFlows();
