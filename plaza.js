const listEl = document.getElementById("plaza-list");
const backSelect = document.getElementById("back-select");
const statusEl = document.getElementById("plaza-status");
const proposeForm = document.getElementById("form-proponer");
const backForm = document.getElementById("form-respaldar");

function slug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function render(proposals) {
  listEl.replaceChildren();
  backSelect.replaceChildren();
  proposals.forEach((item) => {
    const article = document.createElement("article");
    article.className = "proposal";
    const kicker = document.createElement("p");
    kicker.className = "chip-label";
    kicker.textContent = `${item.status} · ${item.soil}`;
    const title = document.createElement("h3");
    if (item.href) {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.title;
      title.append(link);
    } else {
      title.textContent = item.title;
    }
    const author = document.createElement("p");
    author.className = "plain";
    author.textContent = item.author;
    const summary = document.createElement("p");
    summary.textContent = item.summary;
    const stays = document.createElement("p");
    stays.className = "plain";
    stays.textContent = `Quién se queda: ${item.stays}`;
    const backs = document.createElement("p");
    backs.className = "connects";
    const count = Array.isArray(item.backs) ? item.backs.length : 0;
    backs.textContent =
      count === 0
        ? "Aún sin respaldos de la plaza"
        : `${count} respaldo${count === 1 ? "" : "s"}`;
    article.append(kicker, title, author, summary, stays, backs);
    listEl.append(article);

    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.title;
    backSelect.append(option);
  });
}

function download(filename, text) {
  const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

proposeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(proposeForm);
  const title = String(data.get("title")).trim();
  const id = slug(title) || `celula-${today()}`;
  const body = `---
id: ${id}
author: ${String(data.get("author")).trim()}
soil: ${String(data.get("soil")).trim()}
stays: ${String(data.get("stays")).trim()}
status: propuesta
date: ${today()}
---

# ${title}

${String(data.get("summary")).trim()}

## Título, amenaza, consentimiento

Folio o instrumento: —
Amenaza (mapa o certificado de riesgo): —
Quién habita y su sí: ${String(data.get("stays")).trim()}

Sin los tres, no entra sitio. El siguiente del suelo es un radicado, no un satélite.

## Quién se queda

${String(data.get("stays")).trim()}

## Respaldos

-
`;
  download(`${id}.md`, body);
  statusEl.textContent =
    "Archivo bajado. Ábrelo como pull request en github.com/eliospina/ciudad-resiliente";
});

backForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(backForm);
  const line = `- ${String(data.get("name")).trim()} · ${String(data.get("territory")).trim()} · ${today()}`;
  try {
    await navigator.clipboard.writeText(line);
    statusEl.textContent =
      "Respaldo copiado. Pégalo en el archivo del diseño. Una firma a la vista, no un like.";
  } catch {
    statusEl.textContent = line;
  }
});

async function load() {
  const res = await fetch(`data/propuestas.json?t=${Date.now()}`, { cache: "no-store" });
  const data = await res.json();
  render(data.proposals || []);
}

load();
