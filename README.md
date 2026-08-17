# Ciudad Resiliente

Ciudad ovalada en células. Núcleo de vida. Risaralda, Valle, Chocó.

```bash
python3 -m http.server 4173
```

Abre [http://localhost:4173](http://localhost:4173).

El presupuesto de cristal se verifica cada 60 s (`data/pulso.json` y `data/flujos.json`). Un minuto sin fuente no inventa desembolso. Para publicar una ayuda verificada, añade un evento en `data/pulso.json`:

```json
{
  "id": "evt-2026-08-17-001",
  "at": "2026-08-17T16:05:00-05:00",
  "kind": "desembolso",
  "origin": "Nombre del origen",
  "amount": "Monto y unidad, o Información no disponible",
  "territory": "Risaralda | Valle | Chocó | Nacional",
  "source": { "name": "Medio y fecha", "url": "https://" }
}
```

`kind`: `anuncio`, `desembolso`, `credito` o `especie`. Crédito no es donación. Oferta no es giro. En especie no es caja. Si también cambia el libro, edita `data/flujos.json` y sube `ledgerUpdated`.
