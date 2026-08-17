const lessons = [
  {
    id: "agua",
    chip: "Agua",
    question: "¿Cómo se abastece de agua una célula?",
    answer:
      "Cosecha de lluvia con descarte del primer lavado, cisterna, filtro y, si hace falta, UV. Grises aparte de negras: riego y lavado vs fosa y humedal. El río no es desagüe.",
    connects: "Verde · alimentos",
    nodes: ["agua", "naturaleza", "alimento", "nucleo"],
    simple: {
      question: "¿De dónde se bebe?",
      answer: "De la lluvia, cerca de casa. El río queda limpio.",
      connects: "Verde · huerta",
    },
  },
  {
    id: "energia",
    chip: "Luz",
    question: "¿De dónde sale la luz?",
    answer:
      "Energía solar en techo y sombra, batería de célula, microred entre vecinas. Si una falla, las otras prestan kilovatios. El calor residual seca y calienta agua.",
    connects: "Casa · núcleo",
    nodes: ["energia", "vivienda", "nucleo"],
    simple: {
      question: "¿De dónde sale la luz?",
      answer:
        "Energía solar en techo y sombra, batería de célula, microred entre vecinas. Si una falla, prestan kilovatios. El calor residual seca y calienta agua.",
      connects: "Casa · núcleo",
    },
  },
  {
    id: "alimento",
    chip: "Alimento",
    question: "¿Qué alimentos produce cada suelo?",
    answer:
      "EVA 2018: Pereira 38 cultivos, Valle 70, Chocó 41. Toca un suelo. Cadena corta: menos flete, precio más bajo, ingreso en quien cultiva.",
    connects: "Agua · verde",
    nodes: ["alimento", "agua", "naturaleza", "nucleo"],
    simple: {
      question: "¿De dónde sale lo que se come?",
      answer: "De la huerta a paso. Tierra a la vista.",
      connects: "Agua · verde",
    },
  },
  {
    id: "escuela",
    chip: "Escuela",
    question: "¿Qué se enseña?",
    answer:
      "Caudal y turbidez, curva solar, C/N del compost, sismo, código. Fracción biológica aparte de la técnica.",
    connects: "Casa · núcleo",
    nodes: ["escuela", "vivienda", "nucleo"],
    simple: {
      question: "¿Dónde se aprende?",
      answer: "Junto a la huerta y al taller. El oficio de la célula se enseña a paso de casa.",
      connects: "Casa · huerta",
    },
  },
  {
    id: "naturaleza",
    chip: "Verde",
    question: "¿Qué hace el verde?",
    answer:
      "Corredores entre células: sombra, raíz, aire. En Chocó, con la selva. En Risaralda no se tala la ladera.",
    connects: "Agua · alimentos",
    nodes: ["naturaleza", "agua", "alimento"],
    simple: {
      question: "¿Dónde se camina?",
      answer: "Entre árboles. Sombra, raíz, aire. El agua y la huerta quedan a paso.",
      connects: "Agua · casa",
    },
  },
  {
    id: "vivienda",
    chip: "Casa",
    question: "¿Cómo se habita el techo en ladera?",
    answer:
      "Como prolongación ligera del terreno, no como otro piso. Terrazas que siguen las curvas de nivel: patio, pérgola, huerto, mirador. Estructura liviana y simétrica; sin masa pesada arriba. Núcleos rígidos alineados; sin columnas discontinuas. Juntas sísmicas entre cuerpos. Anclaje y drenaje con el talud. El cálculo junta edificio, cimentación y ladera.",
    connects: "Luz · verde · casa",
    nodes: ["vivienda", "energia", "naturaleza", "nucleo"],
    simple: {
      question: "¿Cómo se habita el techo en ladera?",
      answer:
        "El techo sigue la ladera, no se apila. Terrazas en la curva de nivel: huerto, patio, sol. Liviano arriba, juntas entre cuerpos, drenaje con el talud. Edificio y ladera se calculan juntos.",
      connects: "Verde · luz",
    },
  },
  {
    id: "salud",
    chip: "Salud",
    question: "¿Cómo se atiende la salud?",
    answer:
      "Casa de salud a paso: atención primaria, parto de bajo riesgo, vacunas, salud mental. Hospital de red: cirugía, urgencias, internación. Agua potable y aire son parte del sistema.",
    connects: "Casa · escuela · núcleo",
    nodes: ["salud", "vivienda", "escuela", "nucleo"],
    simple: {
      question: "¿Dónde se atiende el cuerpo?",
      answer: "A paso de la casa, entre verde. El hospital de red cubre lo que la célula no cubre.",
      connects: "Casa · núcleo",
    },
  },
  {
    id: "ciclo",
    chip: "Ciclo",
    question: "¿Qué se hace con los residuos?",
    answer:
      "Separación en origen. Dos metabolismos: biológico a suelo, técnico a pieza. RCD a agregado reciclado. Residual en kg/persona, publicado.",
    connects: "Verde · agua · alimentos · casa",
    nodes: ["naturaleza", "agua", "alimento", "vivienda"],
  },
  {
    id: "diseno",
    chip: "Diseñar",
    group: "waste",
    question: "¿Cómo se evita el residuo en el diseño?",
    answer:
      "Diseño para desmontaje: tornillo antes que pegamento, un solo polímero, sin envase multicapa. Pasaporte de materiales en cada elemento.",
    connects: "Casa · taller · escuela",
    nodes: ["vivienda", "escuela", "nucleo"],
  },
  {
    id: "organico",
    chip: "Orgánico",
    group: "waste",
    question: "¿Qué se hace con la fracción húmeda?",
    answer:
      "Compost termófilo (55–65 °C) o biodigestor: biogás para cocina, digestato al verde. Lixiviado tratado, nunca al río. Aceite, RAEE y metal no entran: contaminan el ciclo.",
    connects: "Alimentos · verde · agua",
    nodes: ["alimento", "naturaleza", "agua"],
  },
  {
    id: "tecnico",
    chip: "Técnico",
    group: "waste",
    question: "¿Cómo se clasifica la fracción técnica?",
    answer:
      "PET, HDPE, PP, vidrio por color, férrico y no férrico, RAEE en línea propia. Tasa de captura alta, contaminación baja. El taller clasifica; lo que no cierra aquí sube a planta, ya limpio.",
    connects: "Taller · casa · escuela",
    nodes: ["vivienda", "escuela", "nucleo"],
  },
  {
    id: "escombro",
    chip: "Escombro",
    group: "waste",
    question: "¿Qué se hace con el escombro?",
    answer:
      "RCD: concreto triturado a agregado reciclado, acero a fundición o taller, madera sana a cubierta, tierra al corredor. Triturar en sitio para no acarrear el volumen.",
    connects: "Casa · verde · núcleo",
    nodes: ["vivienda", "naturaleza", "nucleo"],
  },
  {
    id: "residual",
    chip: "Residual",
    group: "waste",
    question: "¿Qué se hace con lo que aún no tiene ciclo?",
    answer:
      "Se publica: kg/persona al día, tasa de captura, % de rechazo. Película multicapa, composites, sanitarios. No se quema a cielo abierto. El residual debe bajar cada año.",
    connects: "Red · núcleo",
    nodes: ["nucleo", "energia", "escuela"],
  },
  {
    id: "paso",
    chip: "Paso",
    question: "¿Cómo se traza el paso?",
    answer:
      "Caminos iluminados y vistos al agua, a los alimentos, a la casa de salud. Sombra. Niños y mayores cruzan. El carro no manda el trazado.",
    connects: "Verde · casa",
    nodes: ["naturaleza", "vivienda", "escuela"],
    simple: {
      question: "¿Cómo se cruza?",
      answer: "A pie, con sombra, al agua, a la huerta, al centro.",
      connects: "Verde · casa",
    },
  },
  {
    id: "taller",
    chip: "Taller",
    question: "¿Qué hace el taller?",
    answer:
      "Reparar, remanufacturar, clasificar en la célula.",
    connects: "Casa · escuela",
    nodes: ["vivienda", "escuela", "nucleo"],
  },
  {
    id: "red",
    chip: "Red",
    question: "¿De quién son los datos?",
    answer:
      "De quien vive ahí. Caudal, turbidez, estado de carga, kg residuales: tablero de célula, código abierto. Sin cámara en el hogar.",
    connects: "Luz · núcleo",
    nodes: ["energia", "nucleo", "agua"],
  },
  {
    id: "inteligencia",
    chip: "Inteligencia",
    question: "¿Qué hace la inteligencia?",
    answer:
      "Cruza balances: agua, kilovatios, humedad del compost, kg residuales, % de contaminación. Avisa. Decide el núcleo.",
    connects: "Óvalo · núcleo",
    nodes: ["nucleo", "agua", "energia", "alimento", "escuela"],
  },
  {
    id: "nucleo",
    chip: "Núcleo",
    question: "¿Qué es el núcleo?",
    answer:
      "Asamblea, fiesta, todas las tradiciones. Dignidad, verdad a la vista, hospitalidad, oficio, fiesta, reciprocidad, suelo. Centro de desarrollo: gemelo de flujos, taller digital.",
    connects: "Todas las células llegan aquí.",
    nodes: ["nucleo", "agua", "energia", "alimento", "vivienda", "escuela", "naturaleza", "salud"],
    simple: {
      question: "¿Qué hay en el centro?",
      answer: "Gente. Asamblea, canto, árboles. Todas las tradiciones.",
      connects: "Todo el óvalo",
    },
  },
  {
    id: "cultura",
    chip: "Cultura",
    group: "vida",
    question: "¿Qué cultura habita el óvalo?",
    answer:
      "El núcleo es escenario y taller: música, danza, mural, oralidad, cine al aire. Chirimía, salsa, currulao, verso, cocina de los tres suelos.",
    connects: "Núcleo · escuela · paso",
    nodes: ["nucleo", "escuela", "naturaleza"],
  },
  {
    id: "economia",
    chip: "Economía",
    group: "vida",
    question: "¿De qué se vive?",
    answer:
      "Oficios de célula: casa de salud, agua, compost, taller, cocina, escuela, escena, sensores, desmontaje sísmico. Alimentos locales: menos flete; el precio puede bajar y el ingreso se queda en quien cultiva. Comercio entre células y con el territorio.",
    connects: "Alimentos · taller · núcleo",
    nodes: ["alimento", "vivienda", "nucleo"],
  },
  {
    id: "seguridad",
    chip: "Seguridad",
    group: "vida",
    question: "¿Cómo se reduce el riesgo?",
    answer:
      "Forma: caminos vistos, luz en el paso, usos mezclados, núcleo vivo de día y de noche. Oficio cerca. Presupuesto de cristal. Sin cámara en el hogar. El muro alto cría callejón muerto.",
    connects: "Paso · núcleo · casa",
    nodes: ["naturaleza", "nucleo", "vivienda", "escuela", "salud"],
  },
  {
    id: "vida",
    chip: "Vida",
    group: "vida",
    question: "¿Qué se mide además del concreto?",
    answer:
      "Minutos a pie al agua, a la casa de salud, a la escuela, a los alimentos. Aire, sombra, oficio a distancia corta, escena cultural. Residual y turbidez a la vista.",
    connects: "Óvalo",
    nodes: ["nucleo", "agua", "alimento", "escuela", "naturaleza", "vivienda", "salud"],
  },
  {
    id: "centro",
    chip: "Centro",
    group: "vida",
    question: "¿Qué hace el centro de desarrollo?",
    answer:
      "Gemelo cívico de flujos: caudal, kWh, kg residuales, humedad de compost, en un tablero que cualquiera lee. Taller digital: piezas de agua y luz, sensores abiertos, pasaporte de materiales. Universidades como oficio, no como dueñas.",
    connects: "Red · escuela · núcleo",
    nodes: ["nucleo", "energia", "escuela"],
  },
  {
    id: "transparencia",
    chip: "Cristal",
    group: "vida",
    question: "¿Quién ve el dinero?",
    answer:
      "Quien habita. Desde la fundación: cada peso con origen, ruta, territorio, célula y fuente. Lo anunciado no es lo ejecutado. Crédito no es donación. El tablero del núcleo y el rastreador son el mismo cristal.",
    connects: "Rastreador · núcleo",
    nodes: ["nucleo", "vivienda", "escuela"],
  },
  {
    id: "dignidad",
    chip: "Dignidad",
    group: "valores",
    question: "¿Qué cubre la dignidad?",
    answer:
      "Trato de persona. Salud cerca, alimentos, techo, nombre en el presupuesto.",
    connects: "Salud · casa · núcleo",
    nodes: ["salud", "vivienda", "nucleo"],
  },
  {
    id: "verdad",
    chip: "Verdad",
    group: "valores",
    question: "¿Cómo se publica el presupuesto?",
    answer:
      "A nadie. Origen, ruta, territorio, célula, fuente. Lo anunciado no es lo ejecutado.",
    connects: "Núcleo · rastreador",
    nodes: ["nucleo", "escuela"],
  },
  {
    id: "hospitalidad",
    chip: "Hospitalidad",
    group: "valores",
    question: "¿De quién es el centro?",
    answer:
      "De quien llegue. Todas las tradiciones, ninguna dueña. Asamblea, canto, duelo, fiesta.",
    connects: "Núcleo · paso",
    nodes: ["nucleo", "naturaleza", "escuela"],
  },
  {
    id: "oficio",
    chip: "Oficio",
    group: "valores",
    question: "¿Qué oficios sostiene la célula?",
    answer:
      "Agua, salud, cocina, taller, escuela, escena. Oficio cerca de la casa.",
    connects: "Taller · salud · alimentos",
    nodes: ["vivienda", "salud", "alimento", "nucleo"],
  },
  {
    id: "fiesta",
    chip: "Fiesta",
    group: "valores",
    question: "¿Qué fiesta cabe en el núcleo?",
    answer:
      "Chirimía, salsa, currulao, verso, mural, cocina.",
    connects: "Núcleo · escuela",
    nodes: ["nucleo", "escuela", "naturaleza"],
  },
  {
    id: "reciprocidad",
    chip: "Reciprocidad",
    group: "valores",
    question: "Si una célula falla, ¿qué hacen las otras?",
    answer:
      "Prestan luz, agua, alimentos, cama, oficio.",
    connects: "Luz · agua · núcleo",
    nodes: ["energia", "agua", "alimento", "nucleo"],
  },
  {
    id: "sostenibilidad",
    chip: "Sostenible",
    group: "habitar",
    question: "¿Cómo se vive aquí?",
    answer:
      "Agua de lluvia y cisterna. Grises aparte de negras. El río no es desagüe. Residual publicado. La ladera no se tala.",
    connects: "Agua · verde · huerta",
    nodes: ["agua", "naturaleza", "alimento"],
    simple: {
      question: "¿Cómo se vive aquí?",
      answer: "El agua se bebe y vuelve. Se camina entre árboles.",
      connects: "Agua · verde",
    },
  },
  {
    id: "energias",
    chip: "Energía solar",
    group: "habitar",
    question: "¿Quién enciende la célula?",
    answer:
      "Energía solar en techo y sombra, batería, microred. Si una célula falla, las otras prestan kilovatios.",
    connects: "Luz · casa · núcleo",
    nodes: ["energia", "vivienda", "nucleo"],
    simple: {
      question: "¿Quién enciende la célula?",
      answer:
        "Energía solar en techo y en la sombra de la huerta. Batería de célula para la noche y el nublado. Microred: si una falla, las vecinas prestan kilovatios. El calor residual seca y calienta agua.",
      connects: "Luz · casa",
    },
  },
  {
    id: "autoctono",
    chip: "De aquí",
    group: "habitar",
    question: "¿Qué nace aquí?",
    answer:
      "EVA 2018 (datos.gov.co): Pereira, 38 cultivos; Valle del Cauca, 70; Chocó, 41. Pereira: café y fruta de clima medio (aguacate, cítricos, lulo, mora, granadilla, guanábana, piña, pitahaya, maracuyá, tomate de árbol) más hortalizas. Valle: 29 frutales y 14 hortalizas nombradas; mango, papaya, uva, pimentón, cilantro, ahuyama. Chocó: cacao, chontaduro, borojó, coco, plátano, yuca, ñame, arroz; la pesca de río no entra en la EVA. Palma y caña única no son la canasta.",
    connects: "Huerta · verde",
    nodes: ["alimento", "naturaleza"],
    simple: {
      question: "¿Qué nace aquí?",
      answer:
        "Cada cota tiene su canasta. En Pereira se nombraron 38 cultivos en 2018: café, y también lulo, mora, aguacate, cítricos, tomate. En el Valle, 70: mango, papaya, hortaliza; la caña no tiene que serlo todo. En Chocó, 41: cacao, chontaduro, borojó, plátano, yuca, y lo que da el río. Cosecha a paso: el flete deja de mandar el precio.",
      connects: "Huerta · verde",
    },
  },
  {
    id: "territorialidad",
    chip: "Territorio",
    group: "habitar",
    question: "¿En qué tierra se planta?",
    answer:
      "En la suya. Pereira en ladera, 1200–1800 m: sismo, alud, café de sombra. Valle, 900–1100 m: calor, río, crecida. Chocó en cota baja: lluvia, dosel, río-camino. El kit (sitio, agua, luz, huerta) cambia con eso.",
    connects: "Toca un suelo",
    nodes: ["naturaleza", "agua", "alimento", "vivienda"],
    simple: {
      question: "¿En qué tierra se planta?",
      answer:
        "En la que es. Pereira en la ladera: sismo y café. El Valle más abajo: calor y río. El Chocó en lo bajo: lluvia y dosel. No se copia un plano: el sitio manda el kit.",
      connects: "Verde · casa",
    },
  },
  {
    id: "identidad",
    chip: "Cultura",
    group: "habitar",
    question: "¿Qué se oye en el núcleo?",
    answer:
      "Chirimía, salsa, currulao, verso, cocina. Todas las tradiciones, ninguna dueña.",
    connects: "Núcleo · escuela",
    nodes: ["nucleo", "escuela", "naturaleza"],
    simple: {
      question: "¿Qué se oye en el núcleo?",
      answer: "Canto de esta tierra. Asamblea, fiesta, árboles.",
      connects: "Núcleo",
    },
  },
  {
    id: "educacion",
    chip: "Escuela",
    group: "habitar",
    question: "¿Qué se enseña?",
    answer:
      "Caudal, curva solar, compost, sismo, oficio del suelo. El aula queda junto a la huerta y al taller.",
    connects: "Escuela · huerta · casa",
    nodes: ["escuela", "alimento", "vivienda"],
    simple: {
      question: "¿Qué se enseña?",
      answer: "El oficio de esta tierra, junto a la huerta.",
      connects: "Escuela · huerta",
    },
  },
  {
    id: "agricultura",
    chip: "Huerta",
    group: "habitar",
    question: "¿Cómo se baja el precio de los alimentos?",
    answer:
      "Producción a paso de célula: menos flete, menos intermediario; el precio puede bajar y el ingreso queda en quien cultiva. La variedad de cada cota alarga la oferta en el año. Frontera agrícola UPRA 2023: Risaralda 148.196 ha (54 % cultivada), Valle 783.581 ha (48 %), Chocó 452.218 ha (21 %). Hay tierra para huerta. En Valle, la caña ocupó el 58,7 % del área sembrada en 2023: el margen es diversificar. En Chocó el monte vuelve solo; el 21 % es margen de agroforestería, no de palma ni potrero.",
    connects: "Huerta · agua · verde",
    nodes: ["alimento", "agua", "naturaleza"],
    simple: {
      question: "¿Cómo se baja el precio de los alimentos?",
      answer:
        "Cosecha cerca. Menos flete, oferta más continua. El monte vuelve solo: se poda, se siembra, se come.",
      connects: "Huerta · verde",
    },
  },
  {
    id: "suelo",
    chip: "Suelo",
    group: "valores",
    question: "¿Cómo se planta en cada suelo?",
    answer:
      "Misma célula. Territorialidad: la cota manda el kit. Lo autóctono y la agricultura cambian; las tomas de red siguen. Toca un suelo.",
    connects: "Toca un suelo · verde · agua · luz",
    nodes: ["naturaleza", "alimento", "agua"],
  },
  {
    id: "fase-celula",
    chip: "Primera célula",
    group: "hacer",
    question: "¿Qué se planta primero?",
    answer:
      "Una célula de este suelo: sol, huerta, escuela, canto. Techo y casa de salud para habitarla.",
    connects: "Verde · luz · huerta · escuela · núcleo",
    nodes: ["naturaleza", "energia", "alimento", "escuela", "nucleo", "salud", "vivienda"],
  },
  {
    id: "fase-red",
    chip: "Unir",
    group: "hacer",
    question: "¿Y cuando hay más de una célula?",
    answer:
      "Paso iluminado. Escuela. Taller. Corredor verde. Hospital de red: lo que una no cubre, lo cubre la vecina. Si una falla, las otras prestan luz, agua, cama.",
    connects: "Escuela · taller · verde · paso · salud",
    nodes: ["escuela", "taller", "naturaleza", "salud", "energia"],
  },
  {
    id: "fase-nucleo",
    chip: "Núcleo",
    group: "hacer",
    question: "¿Cuándo abre el centro?",
    answer:
      "Cuando las células ya se sostienen. Asamblea, fiesta, todas las tradiciones. Presupuesto de cristal. Centro de desarrollo: gemelo de flujos, taller digital.",
    connects: "Todas las células llegan aquí.",
    nodes: ["nucleo", "vivienda", "escuela", "salud", "energia", "agua"],
  },
  {
    id: "fase-suelo",
    chip: "Tres suelos",
    group: "hacer",
    question: "¿Qué cambia entre suelos?",
    answer:
      "La cota, el sitio y el kit. Territorialidad: ladera, valle o selva. Lo autóctono y la agricultura cambian. La red sigue prestando luz, agua y cama. Toca un suelo.",
    connects: "Toca Risaralda, Valle o Chocó",
    nodes: ["naturaleza", "alimento", "agua"],
  },
];

const soils = {
  risaralda: {
    question: "¿Dónde se planta en ladera?",
    kit: "1200–1800 m, hombro de ladera: no cicatriz de alud ni fondo de cañada. Techo como terraza del terreno: curvas de nivel, liviano arriba, núcleos alineados, juntas sísmicas, anclaje y drenaje con el talud. Agua de nacimiento y cosecha. Energía solar en cubierta. Sombrío de café sujeta el suelo.",
    food: "Café de sombra, plátano, aguacate, cítricos, lulo, mora, granadilla, guanábana, guayaba, papaya, piña, pitahaya, maracuyá, tomate de árbol, fresa. Hortalizas de clima medio (tomate, cebolla de rama, cilantro, ahuyama). Fríjol, maíz, yuca. Gallina de patio. EVA Pereira 2018: 38 cultivos. Frontera agrícola Risaralda 2023: 148.196 ha (UPRA). El café no se tala para un bloque.",
    connects: "Sitio · agua · luz · huerta",
    nodes: ["vivienda", "agua", "energia", "naturaleza", "alimento"],
  },
  valle: {
    question: "¿Dónde se planta junto al río?",
    kit: "Cota 900–1100 m. Sitio: terraza sobre el cauce, retiro de orilla, no playa de río. Sombra primero: el calor mata. Agua de cosecha y río tratado; humedal; el río no es desagüe. Luz en techo. Piso que convive con crecida.",
    food: "EVA Valle 2018: 70 cultivos (29 frutales, 14 hortalizas). Mango, papaya, guayaba, maracuyá, cítricos, piña, uva, tomate, pimentón, cilantro, ahuyama, maíz, fríjol, yuca, plátano. Frontera agrícola 2023: 783.581 ha; 48 % cultivada. En 2023 la caña fue el 58,7 % del área sembrada: diversificar dentro de la frontera, no caña única. Cadena corta: menos flete en el precio.",
    connects: "Sitio · sombra · agua · huerta",
    nodes: ["vivienda", "agua", "naturaleza", "alimento", "energia"],
  },
  choco: {
    question: "¿Dónde se planta en selva y río?",
    kit: "Cota baja, lluvia casi permanente. Sitio: alto relativo al río, borde de bosque. Cisterna tapada: si cría mosquito, enferma. Más batería: más nubes. Paso por pie y bote cuando el puente no está. Se poda y se siembra bajo dosel. Palma y potrero no son el cultivo.",
    food: "EVA Chocó 2018: 41 cultivos. Cacao, chontaduro, borojó, coco, plátano, banano, yuca, ñame, malanga, arroz, maíz, maracuyá, piña, guanábana. Pesca de río: no entra en la EVA. Frontera agrícola 2023: 452.218 ha; 21 % cultivada. El monte crece solo; el margen es huerta y agroforestería, no palma. Quibdó reportó 12 cultivos en EVA: la canasta real del dosel es más ancha.",
    connects: "Sitio · agua · batería · río",
    nodes: ["vivienda", "naturaleza", "agua", "energia", "alimento"],
  },
};

const oval = document.getElementById("ovalo");
const lessonRoot = document.getElementById("ovalo-lesson");
const questionEl = document.getElementById("lesson-q");
const answerEl = document.getElementById("lesson-a");
const linksEl = document.getElementById("lesson-links");
const chipsEl = document.getElementById("system-chips");
const wasteChipsEl = document.getElementById("waste-chips");
const vidaChipsEl = document.getElementById("vida-chips");
const valorChipsEl = document.getElementById("valor-chips");
const habitarChipsEl = document.getElementById("habitar-chips");
const tourBtn = document.getElementById("tour-btn");
const wasteBtn = document.getElementById("waste-btn");
const vidaBtn = document.getElementById("vida-btn");
const valoresBtn = document.getElementById("valores-btn");
const hacerBtn = document.getElementById("hacer-btn");
const tourStepEl = document.getElementById("tour-step");
const soilNoteEl = document.getElementById("soil-note");
const wastePathEl = document.getElementById("waste-path");
const layerHabitarBtn = document.getElementById("layer-habitar");
const layerTerritorioBtn = document.getElementById("layer-territorio");
const habitarPanel = document.getElementById("habitar-panel");
const territorioPanel = document.getElementById("territorio-panel");
const layerTitle = document.getElementById("layer-title");
const layerLead = document.getElementById("layer-lead");

const habitarTour = [
  "sostenibilidad",
  "energias",
  "autoctono",
  "territorialidad",
  "identidad",
  "educacion",
  "agricultura",
];
const hacerTour = ["fase-celula", "fase-red", "fase-nucleo", "fase-suelo"];
const soilTour = ["risaralda", "valle", "choco"];
const cityTour = [
  "salud",
  "alimento",
  "escuela",
  "vivienda",
  "agua",
  "energia",
  "naturaleza",
  "paso",
  "taller",
  "red",
  "inteligencia",
  "nucleo",
  "ciclo",
];
const wasteTour = ["ciclo", "diseno", "organico", "tecnico", "escombro", "residual"];
const vidaTour = ["vida", "salud", "cultura", "economia", "seguridad", "centro", "transparencia"];
const valoresTour = [
  "dignidad",
  "verdad",
  "hospitalidad",
  "oficio",
  "fiesta",
  "reciprocidad",
  "suelo",
];

let layer = "habitar";
let currentId = null;
let currentSoil = null;
let tourTimer = null;
let tourIndex = 0;
let tourIds = habitarTour;
let tourKind = null;

function lessonById(id) {
  return lessons.find((item) => item.id === id);
}

function allChipButtons() {
  return document.querySelectorAll(".chips button");
}

function setWastePathVisible(on) {
  if (!wastePathEl) return;
  wastePathEl.hidden = !on;
}

function chipParent(lesson) {
  if (lesson.group === "hacer") return null;
  if (lesson.group === "habitar") return null;
  if (lesson.group === "waste") return wasteChipsEl;
  if (lesson.group === "vida") return vidaChipsEl;
  if (lesson.group === "valores") return valorChipsEl;
  return chipsEl;
}

function alimentoText() {
  if (currentSoil && soils[currentSoil]?.food) return soils[currentSoil].food;
  return lessonById("alimento").answer;
}

function lessonCopy(lesson) {
  if (layer === "habitar" && lesson.simple) return lesson.simple;
  if (lesson.id === "alimento") {
    return {
      question: lesson.question,
      answer: alimentoText(),
      connects: lesson.connects,
    };
  }
  return lesson;
}

function setText(el, value) {
  if (!el) return;
  el.classList.remove("in");
  el.textContent = value;
  requestAnimationFrame(() => el.classList.add("in"));
}

function highlight(nodes) {
  const set = new Set(nodes);
  oval.classList.toggle("teaching", nodes.length > 0);
  oval.querySelectorAll(".cell").forEach((cell) => {
    const on = set.has(cell.dataset.id);
    cell.classList.toggle("is-on", on);
    cell.classList.toggle("is-dim", nodes.length > 0 && !on);
  });
  oval.querySelectorAll(".flow").forEach((flow) => {
    const parts = flow.dataset.nodes.split(" ");
    flow.classList.toggle(
      "is-on",
      parts.length === 2 && set.has(parts[0]) && set.has(parts[1]),
    );
  });
}

function showLesson(id, options = {}) {
  const lesson = lessonById(id);
  if (!lesson) return;
  if (layer === "habitar" && !lesson.simple) {
    stopTour();
    setLayer("territorio", { silent: true });
  }
  const copy = lessonCopy(lesson);
  currentId = id;
  setText(questionEl, copy.question);
  setText(answerEl, copy.answer);
  setText(linksEl, copy.connects);
  highlight(lesson.nodes);
  setWastePathVisible(lesson.group === "waste" || tourKind === "waste");
  allChipButtons().forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.id === id));
  });
  document.querySelectorAll("#hacer-path button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.id === id));
  });
  if (options.scroll && (id === "transparencia" || id === "verdad")) {
    document.getElementById("rastreador")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function applySoil(soilId) {
  const soil = soils[soilId];
  if (!soil) return;
  currentSoil = soilId;
  currentId = "fase-suelo";
  oval.dataset.soil = soilId;
  setText(questionEl, soil.question);
  setText(answerEl, `${soil.kit} ${soil.food}`);
  setText(linksEl, soil.connects);
  setText(soilNoteEl, soil.kit);
  highlight(soil.nodes);
  setWastePathVisible(false);
  document.querySelectorAll("#soil-cards [data-soil]").forEach((item) => {
    item.classList.toggle("is-on", item.dataset.soil === soilId);
  });
  allChipButtons().forEach((btn) => {
    btn.setAttribute("aria-pressed", "false");
  });
  document.querySelectorAll("#hacer-path button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.id === "fase-suelo"));
  });
}

function setLayer(next, options = {}) {
  layer = next;
  lessonRoot.dataset.layer = next;
  oval.dataset.layer = next;
  const habitar = next === "habitar";
  layerHabitarBtn.setAttribute("aria-pressed", String(habitar));
  layerTerritorioBtn.setAttribute("aria-pressed", String(!habitar));
  habitarPanel.hidden = !habitar;
  territorioPanel.hidden = habitar;
  if (habitar) {
    layerTitle.textContent = "Habitar";
    layerLead.textContent = "Se camina entre árboles. El suelo manda.";
    oval.removeAttribute("data-soil");
    currentSoil = null;
    document.querySelectorAll("#soil-cards [data-soil]").forEach((item) => {
      item.classList.remove("is-on");
    });
  } else {
    layerTitle.textContent = "Territorio";
    layerLead.textContent = "Tres cotas. Un óvalo. Toca ladera, valle o selva.";
  }
  if (!options.silent) {
    stopTour();
    if (habitar) showLesson("sostenibilidad");
    else showLesson("fase-suelo");
  }
}

function tourButtonFor(kind) {
  if (kind === "waste") return wasteBtn;
  if (kind === "vida") return vidaBtn;
  if (kind === "valores") return valoresBtn;
  if (kind === "hacer") return hacerBtn;
  return tourBtn;
}

function playTourStep() {
  if (tourKind === "soils") applySoil(tourIds[tourIndex]);
  else showLesson(tourIds[tourIndex]);
  tourStepEl.textContent = `${tourIndex + 1} / ${tourIds.length}`;
}

function stopTour() {
  if (tourTimer) {
    clearInterval(tourTimer);
    tourTimer = null;
  }
  tourKind = null;
  tourBtn.textContent = "Recorrer";
  tourBtn.setAttribute("aria-pressed", "false");
  if (wasteBtn) {
    wasteBtn.textContent = "Residuos bajos";
    wasteBtn.setAttribute("aria-pressed", "false");
  }
  if (vidaBtn) {
    vidaBtn.textContent = "Vida en común";
    vidaBtn.setAttribute("aria-pressed", "false");
  }
  if (valoresBtn) {
    valoresBtn.textContent = "Valores";
    valoresBtn.setAttribute("aria-pressed", "false");
  }
  if (hacerBtn) {
    hacerBtn.textContent = "Hacer";
    hacerBtn.setAttribute("aria-pressed", "false");
  }
  tourStepEl.hidden = true;
  setWastePathVisible(false);
}

function startTour(ids, kind) {
  stopTour();
  tourIds = ids;
  tourKind = kind;
  tourIndex = 0;
  playTourStep();
  const btn = tourButtonFor(kind);
  btn.textContent = "Pausar";
  btn.setAttribute("aria-pressed", "true");
  tourStepEl.hidden = false;
  const ms = kind === "habitar" ? 5200 : kind === "soils" ? 7200 : 6200;
  tourTimer = setInterval(() => {
    tourIndex = (tourIndex + 1) % tourIds.length;
    playTourStep();
  }, ms);
}

function bindActivate(el, fn) {
  el.addEventListener("click", fn);
  el.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      fn();
    }
  });
}

function addChip(lesson, parent) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = lesson.chip;
  btn.dataset.id = lesson.id;
  btn.setAttribute("aria-pressed", "false");
  btn.addEventListener("click", () => {
    stopTour();
    showLesson(lesson.id, {
      scroll: lesson.id === "transparencia" || lesson.id === "verdad",
    });
  });
  parent.append(btn);
}

lessons.forEach((lesson) => {
  const parent = chipParent(lesson);
  if (parent) addChip(lesson, parent);
});

habitarTour.forEach((id) => {
  const lesson = lessonById(id);
  if (lesson && habitarChipsEl) addChip(lesson, habitarChipsEl);
});

document.querySelectorAll("#hacer-path button").forEach((btn) => {
  btn.addEventListener("click", () => {
    stopTour();
    showLesson(btn.dataset.id);
  });
});

document.querySelectorAll("#ovalo .cell").forEach((cell) => {
  bindActivate(cell, () => {
    stopTour();
    showLesson(cell.dataset.id);
  });
});

layerHabitarBtn.addEventListener("click", () => {
  if (layer !== "habitar") setLayer("habitar");
});

layerTerritorioBtn.addEventListener("click", () => {
  if (layer !== "territorio") setLayer("territorio");
});

tourBtn.addEventListener("click", () => {
  if (tourKind === "habitar" || tourKind === "soils") stopTour();
  else if (layer === "habitar") startTour(habitarTour, "habitar");
  else startTour(soilTour, "soils");
});

wasteBtn.addEventListener("click", () => {
  if (tourKind === "waste") stopTour();
  else startTour(wasteTour, "waste");
});

vidaBtn.addEventListener("click", () => {
  if (tourKind === "vida") stopTour();
  else startTour(vidaTour, "vida");
});

valoresBtn.addEventListener("click", () => {
  if (tourKind === "valores") stopTour();
  else startTour(valoresTour, "valores");
});

hacerBtn.addEventListener("click", () => {
  if (tourKind === "hacer") stopTour();
  else startTour(hacerTour, "hacer");
});

document.querySelectorAll("#soil-cards [data-soil]").forEach((card) => {
  bindActivate(card, () => {
    stopTour();
    applySoil(card.dataset.soil);
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

const pulsoEl = document.getElementById("pulso");
const pulsoStatusEl = document.getElementById("pulso-status");
const pulsoClockEl = document.getElementById("pulso-clock");
const pulsoEventsEl = document.getElementById("pulso-events");

let lastCheckAt = null;
let lastFlowsStamp = "";
let lastFlowIds = new Set();
let ledgerUpdatedLabel = "";
let pulsoEventCount = 0;
let pulsoTimer = null;
let clockTimer = null;

function formatBogota(date) {
  return new Intl.DateTimeFormat("es-CO", {
    timeZone: "America/Bogota",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function agoLabel(from) {
  if (!from) return "";
  const sec = Math.max(0, Math.round((Date.now() - from.getTime()) / 1000));
  if (sec < 60) return `hace ${sec} s`;
  const min = Math.floor(sec / 60);
  return `hace ${min} min`;
}

function kindLabel(kind) {
  if (kind === "desembolso") return "Desembolso";
  if (kind === "credito") return "Crédito";
  if (kind === "especie") return "En especie";
  if (kind === "anuncio") return "Anuncio";
  return kind || "Registro";
}

function renderPulsoEvents(events) {
  if (!pulsoEventsEl) return;
  pulsoEventsEl.replaceChildren();
  const rows = Array.isArray(events) ? [...events].reverse().slice(0, 8) : [];
  for (const event of rows) {
    const li = document.createElement("li");
    const when = document.createElement("div");
    when.className = "when";
    when.textContent = event.at ? formatBogota(new Date(event.at)) : "";
    const body = document.createElement("div");
    body.append(
      `${kindLabel(event.kind)} · ${event.origin || "Origen no nombrado"} · ${event.amount || "Información no disponible"} · ${event.territory || "Información no disponible"}`,
    );
    if (event.source?.url) {
      const a = document.createElement("a");
      a.href = event.source.url;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = event.source.name || "Fuente";
      body.append(" · ");
      body.append(a);
    } else if (event.source?.name) {
      body.append(` · ${event.source.name}`);
    }
    li.append(when, body);
    pulsoEventsEl.append(li);
  }
}

function renderFlowRow(flow, isNew) {
  const tr = document.createElement("tr");
  if (isNew) tr.className = "is-new";
  tr.dataset.id = flow.id;
  tr.append(
    cell(flow.origin),
    cell(flow.amount),
    cell(flow.route),
    cell(flow.territory),
    cell(flow.executed),
    flow.source.url ? cell(flow.source.name, flow.source.url) : cell(flow.source.name),
  );
  return tr;
}

async function loadFlows(options = {}) {
  const body = document.getElementById("flujos-body");
  if (!body) return;
  const res = await fetch(`data/flujos.json?t=${Date.now()}`, { cache: "no-store" });
  const data = await res.json();
  const ids = new Set((data.flows || []).map((flow) => flow.id));
  const stamp = JSON.stringify(data.flows);
  if (!options.force && stamp === lastFlowsStamp && lastFlowIds.size) return data;
  const firstPaint = lastFlowIds.size === 0;
  body.replaceChildren();
  for (const flow of data.flows) {
    const isNew = !firstPaint && !lastFlowIds.has(flow.id);
    body.append(renderFlowRow(flow, isNew));
  }
  lastFlowIds = ids;
  lastFlowsStamp = stamp;
  return data;
}

async function loadPulso() {
  const res = await fetch(`data/pulso.json?t=${Date.now()}`, { cache: "no-store" });
  return res.json();
}

function setPulsoStatus(text, live) {
  if (pulsoStatusEl) pulsoStatusEl.textContent = text;
  pulsoEl?.classList.toggle("is-live", live);
  pulsoEl?.classList.toggle("is-stale", !live);
}

function tickClock() {
  if (!pulsoClockEl || !lastCheckAt) return;
  const ledger = ledgerUpdatedLabel ? `Cifras con fuente al ${ledgerUpdatedLabel}.` : "";
  const novedad =
    pulsoEventCount > 0
      ? `${pulsoEventCount} registro(s) en el pulso.`
      : "Este minuto: sin nuevo desembolso verificado.";
  pulsoClockEl.textContent = `Leído ${agoLabel(lastCheckAt)} (${formatBogota(lastCheckAt)}). ${ledger} ${novedad}`.trim();
}

async function verifyAid() {
  try {
    const [pulso, ledger] = await Promise.all([loadPulso(), loadFlows()]);
    lastCheckAt = new Date();
    const events = pulso.events || [];
    pulsoEventCount = events.length;
    ledgerUpdatedLabel = pulso.ledgerUpdated || ledger?.updated || "";
    renderPulsoEvents(events);
    setPulsoStatus(
      "Verificación cada 60 s. Sin fuente, no entra cifra. Lo anunciado no es lo ejecutado.",
      true,
    );
    tickClock();
  } catch {
    setPulsoStatus("No se pudo leer el caudal. No se inventa cifra.", false);
    if (pulsoClockEl && lastCheckAt) {
      pulsoClockEl.textContent = `Última lectura válida ${agoLabel(lastCheckAt)}.`;
    }
  }
}

function startPulso() {
  verifyAid();
  if (pulsoTimer) clearInterval(pulsoTimer);
  if (clockTimer) clearInterval(clockTimer);
  pulsoTimer = setInterval(verifyAid, 60 * 1000);
  clockTimer = setInterval(tickClock, 1000);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") verifyAid();
  });
}

startPulso();
startTour(habitarTour, "habitar");
