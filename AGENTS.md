# AGENTS.md

## Cursor Cloud specific instructions

This repo is **Ciudad Resiliente**, a fully static website (plain HTML/CSS/vanilla JS). There is
**no build step, no package manager, no lockfile, no backend, and no database** — content lives in
committed files and `data/propuestas.json`.

### Running the site (the only "service")

Serve the repo root over HTTP and open the site in a browser (see `README.md`):

```bash
python3 -m http.server 4173
# then open http://localhost:4173/
```

- It **must** be served over HTTP, not opened as a `file://` path. `plaza.js` uses
  `fetch("data/propuestas.json")`, which browsers block on the `file://` protocol, so opening the
  HTML files directly makes the proposals list fail.
- The port is arbitrary; `4173` is what the README uses.

### Lint / test / build

There is **no lint config, no test suite, and no build**. Verify changes by serving the site and
exercising the pages in a browser.

### Core functionality to sanity-check

- `index.html` — landing page ("La ciudad").
- `plaza.html` — participation page ("La plaza"): lists proposals from `data/propuestas.json`,
  lets you draft a new proposal (downloads a `.md` file) and copy an endorsement line to the
  clipboard. Clipboard copy works over `localhost`/HTTPS.

### Deployment

Deployed on Vercel as a static site (`vercel.json`: `framework: null`, `outputDirectory: "."`,
only redirects — no install/build commands).
