/* StraGarda 21K — piano di allenamento 26/10/2026 → 10/01/2027
   Zone FC con metodo Karvonen: FC max stimata 186, FC a riposo 51.
   Questo file contiene solo dati: l'app (index.html) lo legge all'avvio. */
"use strict";

const PLAN_INFO = {
  start: "2026-10-26",
  race: "2027-01-10",
  raceName: "StraGardaLake 21K",
  raceTime: "09:50",
  racePlace: "Lungolago Cesare Battisti, Desenzano del Garda",
  goal: "≈1:50 (1:48 se il test del 3 gennaio va bene)",
  hrMax: 186,
  hrRest: 51,
};

const ZONES = [
  { k: "Z1", n: "Recupero", hr: "119–132", pace: "6:20–6:50/km", spd: "8,8–9,5 km/h", use: "Riscaldamento, defaticamento, recuperi tra le ripetute" },
  { k: "Z2", n: "Aerobico", hr: "132–146", pace: "5:45–6:15/km", spd: "9,6–10,4 km/h", use: "Corse facili e lunghi: la base di tutto il piano" },
  { k: "Z3", n: "Medio", hr: "146–159", pace: "5:20–5:40/km", spd: "10,6–11,2 km/h", use: "Finali progressivi" },
  { k: "RG", n: "Ritmo gara", hr: "155–166", pace: "5:05–5:15/km", spd: "11,4–11,8 km/h", use: "Blocchi a ritmo mezza (obiettivo ≈1:50)" },
  { k: "Z4", n: "Soglia", hr: "159–173", pace: "4:45–4:55/km", spd: "12,2–12,6 km/h", use: "Ripetute di soglia, max 6' per blocco" },
  { k: "AL", n: "Allunghi", hr: "non è la guida (a fine allungo 150–165)", pace: "3:55–4:15/km", spd: "14,1–15,3 km/h", use: "20\" in accelerazione progressiva, recupero completo" },
];

const PROTO = {
  prelungo: {
    title: "Protocollo ginocchia pre-lungo", dur: "12'",
    intro: "Prima di ogni lungo e corsa outdoor, a casa. È il tuo riscaldamento: ginocchia e caviglie arrivano calde al primo km.",
    list: [
      "2' marcia sul posto o corda molto leggera",
      "Leg swing avanti-indietro e laterali: 10 + 10 per gamba",
      "Glute bridge: 2 × 12 (2\" di tenuta in alto)",
      "Monster walk con elastico sopra le ginocchia: 2 × 10 passi per lato",
      "Tibialis raise, schiena al muro e talloni avanti: 2 × 15",
      "Calf raise lento sui due piedi: 2 × 12 (3\" in discesa)",
      "Spanish squat isometrico con elastico dietro le ginocchia: 2 × 30\" (in alternativa wall sit 2 × 30\")",
      "Andature 2 × 20 m: skip basso e calciata",
    ],
  },
  mobilita: {
    title: "Mobilità", dur: "10'",
    intro: "Nei giorni di riposo, la sera. Respira lento, nessun rimbalzo.",
    list: [
      "Polpaccio al muro, gamba tesa: 45\" per lato",
      "Polpaccio al muro, ginocchio piegato (soleo): 45\" per lato",
      "Flessori dell'anca in affondo con bacino in retroversione: 45\" per lato",
      "Piriforme (figura 4 da supino): 45\" per lato",
      "Quadricipite in piedi o sul fianco: 30\" per lato",
      "Femorali da supino con elastico al piede: 45\" per lato",
      "Se hai il foam roller: 3' su polpacci e quadricipiti",
    ],
  },
  casaA: {
    title: "Forza a casa A (manubri e box)", dur: "40'",
    warm: ["2' corda leggera o marcia", "10 squat a corpo libero", "10 affondi camminati", "10 leg swing per gamba"],
    intro: "3 giri (2 nella versione ridotta). 60\" tra esercizi, 2' tra i giri. RPE 6–7: lascia 2–3 ripetizioni di margine.",
    list: [
      "Goblet squat con 1 manubrio: 10 (3\" in discesa)",
      "Step-up sul box con manubri: 8 per gamba (box all'altezza del ginocchio o poco sotto, specifico per le salite)",
      "Stacco rumeno con manubri: 10",
      "Affondo indietro con manubri: 8 per gamba",
      "Rematore con manubrio, appoggio sul box: 10 per braccio",
      "Calf raise eccentrico sul bordo del box: sali con 2 piedi, scendi con 1 in 3\", 10 per gamba",
      "Plank: 40\"",
    ],
    cool: "5' stretching: polpacci, flessori dell'anca, glutei.",
  },
  casaB: {
    title: "Forza a casa B (core e stabilità)", dur: "30'",
    warm: ["2' marcia sul posto", "10 cat-cow", "10 glute bridge"],
    intro: "3 giri (2 nella versione ridotta), 45\" di recupero tra gli esercizi.",
    list: [
      "Leg curl sulla palla svizzera: 10",
      "Glute bridge monopodalico: 10 per gamba",
      "Monster walk con elastico: 12 passi per lato",
      "Dead bug: 10 per lato, lento",
      "Side plank: 30\" per lato",
      "Tibialis raise al muro: 15",
      "Stacco monopodalico a corpo libero (equilibrio): 8 per gamba",
    ],
    cool: "3' respirazione e stretching dei flessori dell'anca.",
  },
  nuotoA: {
    title: "Nuoto A, aerobico", dur: "≈45'", total: "1500 m: stile libero 1200 m, dorso 200 m, rana 100 m",
    list: [
      "300 m stile libero facile",
      "4 × 50 m stile libero tecnica (25 m solo gambe con tavoletta + 25 m completo), recupero 15\"",
      "6 × 100 m stile libero a RPE 5, recupero 20\"",
      "200 m dorso continuo",
      "Defaticamento: 100 m rana + 100 m stile libero lenti",
    ],
  },
  nuotoB: {
    title: "Nuoto B, facile", dur: "≈35'", total: "1200 m: stile libero 800 m, dorso 200 m, rana 200 m",
    list: [
      "300 m stile libero facile",
      "4 × 50 m dorso, recupero 15\"",
      "4 × 100 m stile libero (con pull buoy se c'è), recupero 20\"",
      "200 m rana",
      "100 m stile libero sciolto",
    ],
  },
};

const WEEK_INFO = {
  1: { t: "Avvio", f: "Tre corse a settimana accanto ai corsi: facile martedì, ritmo gara giovedì, lungo domenica." },
  2: { t: "Costruzione", f: "Primo test dei ristori nel lungo: bevi dalla soft flask al km 4 e al km 10." },
  3: { t: "Salite", f: "Il percorso ha 251 m di dislivello: arrivano le salite al tapis e il primo gel." },
  4: { t: "Scarico", f: "Volume ridotto di circa il 25%: le gambe assorbono le tre settimane di carico." },
  5: { t: "Costruzione", f: "Lungo da 16 km con due gel nei punti dei ristori di gara." },
  6: { t: "Ritmo gara", f: "Ultimi 5 km del lungo a ritmo gara e saliscendi al tapis." },
  7: { t: "Volume", f: "Lungo da 18 km tutto aerobico e prima seduta di soglia." },
  8: { t: "Picco", f: "Prova generale da 19 km con 8 km a ritmo gara. Ultima settimana di palestra." },
  9: { t: "Casa e strada", f: "Niente palestra né tapis: forza a casa, nuoto, corse outdoor." },
  10: { t: "Rifinitura", f: "Domenica test di 7 km a ritmo gara: decide l'obiettivo cronometrico." },
  11: { t: "Settimana gara", f: "Poco volume, tanto sonno, carboidrati da venerdì. Domenica si corre." },
};

/* ---------- costruttori di sedute ---------- */
const KM = (min, kmh) => Math.round(min * kmh / 6) / 10;
const TAPIS = "Tapis roulant, pendenza 1%";
const POST = "Subito dopo il corso (19:30–20:20)";
const OUT = "Outdoor, percorso piatto";
const SLOT_LONG = "09:30–11:30: abitua il corpo all'orario della gara (via alle 9:50)";
const SLOT_WEEKDAY = "12:30–14:00 se puoi (luce e temperatura migliori), altrimenti 17:30–18:30 su percorso illuminato";
const H2O_POST = "300–500 ml d'acqua tra corso e corsa; tieni la borraccia sul tapis.";
const PRE = { t: "Protocollo ginocchia (12', a casa)", list: PROTO.prelungo.list };
const RUNTIP = "Passo corto e cadenza alta (≥165 passi/min): meno carico su ginocchia e caviglie.";

function forza(o = {}) {
  return Object.assign({
    kind: "gym", goal: "strength", title: "Forza (corso)", place: "Palestra", slot: "18:30–19:30", durMin: 60, rpe: [7, 8],
    steps: [{ t: "Corso di forza", d: "Bilanciere e kettlebell multiarticolari. Tieni 1–2 ripetizioni di margine su squat e stacchi: martedì corri." }],
    fuel: "Spuntino con carboidrati 1–2 h prima (es. banana e yogurt).",
  }, o);
}
function func(o = {}) {
  return Object.assign({
    kind: "gym", goal: "functional", title: "Functional (corso)", place: "Palestra", slot: "18:30–19:30", durMin: 60, rpe: [7, 8],
    steps: [{ t: "Corso functional", d: "Circuito ad alta intensità con pesi. Dopo hai la corsa: non andare a cedimento sulle gambe." }],
    fuel: "Spuntino 1–2 h prima; 300–500 ml d'acqua tra corso e corsa.",
  }, o);
}
function hyrox(o = {}) {
  return Object.assign({
    kind: "gym", goal: "hyrox", title: "Hyrox (corso)", place: "Palestra", slot: "18:30–19:30", durMin: 60, rpe: [8, 9],
    steps: [{ t: "Classe Hyrox", d: "Nei tratti di corsa della classe tieni RPE 7: il 23/10 sei rimasto senza fiato, quindi parti controllato e chiudi forte. La corsa della classe non conta nel volume del piano." }],
    fuel: "Entro 1 h: carboidrati e proteine (es. pasta o panino e yogurt greco). Bevi 500 ml nella serata.",
  }, o);
}
function mob(o = {}) {
  return Object.assign({
    kind: "mobility", goal: "recovery", title: "Riposo + mobilità", place: "Casa", slot: "Sera, quando vuoi", durMin: 10, rpe: [1, 2],
    steps: [{ t: "Mobilità 10'", list: PROTO.mobilita.list }],
    fuel: "Giornata normale, 2 L d'acqua.",
  }, o);
}
function rest(o = {}) {
  return Object.assign({ kind: "rest", goal: "rest", title: "Riposo", place: "", slot: "", durMin: 0, steps: [{ t: "Riposo", d: "Nessun allenamento. Se vuoi, 20–30' di camminata." }] }, o);
}
function prepLong(o = {}) {
  return rest(Object.assign({
    title: "Riposo (vigilia del lungo)",
    steps: [{ t: "Prepara il lungo", d: "Cena con carboidrati (pasta o riso), circa 2 L d'acqua nella giornata, kit e soft flask pronti. Se domenica il meteo è brutto, sposta il lungo a oggi con «Scambia sabato e domenica»." }],
  }, o));
}
function easyT(min, o = {}) {
  return Object.assign({
    kind: "run", goal: "easy", title: `Corsa facile ${min}'`, place: TAPIS, slot: POST, durMin: min, km: KM(min, 10),
    pace: "6:00/km (5:45–6:15)", speed: "10,0 km/h (9,6–10,4)", hr: "132–146 (Z2)", hrR: [132, 146], rpe: [2, 4],
    steps: [
      { t: `${min - 3}' in Z2`, d: "10,0 km/h. Se la FC supera 146 scendi a 9,6; se resta sotto 138 puoi salire a 10,4. " + RUNTIP },
      { t: "3' defaticamento", d: "9,0 km/h, poi 2' di camminata." },
    ],
    fuel: H2O_POST,
  }, o);
}
function stridesT(min, n, o = {}) {
  return Object.assign({
    kind: "run", goal: "strides", title: `Facile ${min}' + ${n} allunghi`, place: TAPIS, slot: POST, durMin: min + Math.round(n * 1.4) + 3,
    km: Math.round((KM(min, 10) + n * 0.11 + 0.45) * 10) / 10,
    pace: "Z2 6:00/km; allunghi 4:08/km", speed: "10,0 km/h; allunghi 14,5 km/h", hr: "132–146; a fine allungo 150–165", hrR: [132, 146], rpe: [3, 4],
    steps: [
      { t: `${min}' in Z2`, d: "10,0 km/h (9,6–10,4), FC 132–146." },
      { t: `${n} allunghi da 20"`, d: "14,5 km/h (4:08/km; range 14,1–15,3) per 20\", poi 60\" a 8,5 km/h. Sul tapis porta la velocità in 5\" e scendi subito. Se a fine allungo la FC passa 168, allunga il recupero." },
      { t: "3' defaticamento", d: "9,0 km/h." },
    ],
    fuel: H2O_POST,
  }, o);
}
function outEasy(min, n, o = {}) {
  const km = Math.round((KM(min, 10) + n * 0.11) * 10) / 10;
  const steps = [{ t: `${min - 2}' in Z2`, d: "5:50–6:15/km, FC 132–146. Comanda la FC, non il passo. " + RUNTIP }];
  if (n) steps.push({ t: `${n} allunghi da 20"`, d: "Su un rettilineo: accelera fino a 3:55–4:15/km per 20\", poi 60\" camminando o trotterellando. FC a fine allungo 150–165, se passa 168 allunga il recupero." });
  steps.push({ t: "2' in Z1", d: "6:30/km e camminata." });
  return Object.assign({
    kind: "run", goal: n ? "strides" : "easy", title: n ? `Facile ${min}' + ${n} allunghi` : `Corsa facile ${min}'`, place: OUT, slot: SLOT_WEEKDAY,
    durMin: min + (n ? Math.round(n * 1.4) : 0), km, pace: n ? "6:00/km; allunghi 3:55–4:15/km" : "5:50–6:15/km", speed: "", hr: "132–146 (Z2)", hrR: [132, 146], rpe: [2, 4],
    steps, fuel: "Niente da portare. Bevi 300–500 ml nell'ora prima.",
  }, o);
}
function homeA(reduced, o = {}) {
  const P = PROTO.casaA;
  return Object.assign({
    kind: "home", goal: "home", title: reduced ? "Forza a casa A, ridotta" : "Forza a casa A", place: "Casa: manubri, box", slot: "18:30 o quando vuoi", durMin: reduced ? 30 : 40, rpe: reduced ? [4, 6] : [5, 7],
    steps: [
      { t: "Riscaldamento 6'", list: P.warm },
      { t: reduced ? "Circuito, 2 giri" : "Circuito, 3 giri", d: P.intro.replace("3 giri (2 nella versione ridotta)", reduced ? "2 giri" : "3 giri"), list: P.list },
      { t: "Defaticamento", d: P.cool },
    ],
    fuel: "Spuntino con proteine dopo (yogurt greco, latte, uova).",
  }, o);
}
function homeB(reduced, o = {}) {
  const P = PROTO.casaB;
  return Object.assign({
    kind: "home", goal: "core", title: reduced ? "Core e stabilità, ridotto" : "Core e stabilità a casa", place: "Casa: palla svizzera, elastico", slot: "Mattina o pomeriggio", durMin: reduced ? 20 : 30, rpe: [4, 6],
    steps: [
      { t: "Riscaldamento 4'", list: P.warm },
      { t: reduced ? "Circuito, 2 giri" : "Circuito, 3 giri", d: P.intro.replace("3 giri (2 nella versione ridotta)", reduced ? "2 giri" : "3 giri"), list: P.list },
      { t: "Defaticamento", d: P.cool },
    ],
    fuel: "Nessuna esigenza particolare.",
  }, o);
}
function swim(which, o = {}) {
  const P = PROTO[which];
  return Object.assign({
    kind: "swim", goal: "swim", title: P.title, place: "Piscina", slot: "Orario della piscina", durMin: which === "nuotoA" ? 45 : 35,
    swimM: which === "nuotoA" ? 1500 : 1200, rpe: which === "nuotoA" ? [3, 5] : [2, 4],
    steps: [{ t: P.total, list: P.list }],
    fuel: "Bevi 300–500 ml dopo: in acqua non ti accorgi di sudare.",
  }, o);
}

/* ---------- giovedì: qualità al tapis ---------- */
const Q = {
  w1: {
    kind: "run", goal: "quality", title: "Fartlek ritmo gara", place: TAPIS, slot: POST, durMin: 35, km: 6.0,
    pace: "Blocchi 5:10/km, recuperi 6:07/km", speed: "Blocchi 11,6 km/h, recuperi 9,8 km/h", hr: "Blocchi 155–163; recuperi Z2", hrR: [132, 163], rpe: [5, 6],
    steps: [
      { t: "10' riscaldamento", d: "10,0 km/h, FC 132–146 (sei già caldo dal corso)." },
      { t: "5 × (2' ritmo gara + 2' facile)", d: "Blocchi a 11,6 km/h (range 11,4–11,8), FC 155–163. Recupero a 9,8 km/h." },
      { t: "5' defaticamento", d: "9,0 km/h, poi camminata." },
    ], fuel: H2O_POST,
  },
  w2: {
    kind: "run", goal: "quality", title: "Ritmo gara a blocchi", place: TAPIS, slot: POST, durMin: 37, km: 6.5,
    pace: "Blocchi 5:10/km", speed: "Blocchi 11,6 km/h, recuperi 9,8 km/h", hr: "Blocchi 155–165", hrR: [132, 165], rpe: [5, 7],
    steps: [
      { t: "10' riscaldamento", d: "10,0 km/h in Z2." },
      { t: "3 × (5' ritmo gara + 2' facile)", d: "11,6 km/h (11,4–11,8), FC 155–165. Recupero 9,8 km/h. Se la FC passa 166 nel terzo blocco, scendi a 11,4." },
      { t: "6' defaticamento", d: "9,5 km/h, poi camminata." },
    ], fuel: H2O_POST,
  },
  w3: {
    kind: "run", goal: "quality", title: "Salite al tapis", place: "Tapis roulant", slot: POST, durMin: 40, km: 6.5,
    pace: "Salita 6:19/km al 5%", speed: "Salita 9,5 km/h al 5%; piano 10,0 km/h all'1%", hr: "Fino a 160 in salita", hrR: [132, 160], rpe: [6, 7],
    steps: [
      { t: "10' riscaldamento", d: "10,0 km/h, pendenza 1%." },
      { t: "6 × (2' salita + 2' piano)", d: "Salita al 5% a 9,5 km/h (9,0–10,0), FC fino a 160; piano all'1% a 10,0 km/h. Busto alto, braccia attive, passo corto." },
      { t: "6' defaticamento", d: "9,0 km/h all'1%." },
    ],
    note: "Il percorso sale subito dopo il via e resta collinare fino al km 13: queste salite servono a quello.", fuel: H2O_POST,
  },
  w4: stridesT(25, 4, { title: "Facile 25' + 4 allunghi (scarico)" }),
  w5: {
    kind: "run", goal: "quality", title: "Ritmo gara lungo", place: TAPIS, slot: POST, durMin: 40, km: 7.1,
    pace: "Blocchi 5:10/km", speed: "Blocchi 11,6 km/h", hr: "Blocchi 155–166", hrR: [132, 166], rpe: [6, 7],
    steps: [
      { t: "10' riscaldamento", d: "10,0 km/h in Z2." },
      { t: "2 × 10' ritmo gara, recupero 3'", d: "11,6 km/h (11,4–11,8), FC 155–166. Recupero a 9,8 km/h." },
      { t: "7' defaticamento", d: "9,5 km/h, poi camminata." },
    ], fuel: H2O_POST,
  },
  w6: {
    kind: "run", goal: "quality", title: "Saliscendi", place: "Tapis roulant", slot: POST, durMin: 42, km: 7.1,
    pace: "Salita 6:19/km; piano 5:10/km", speed: "Salita 9,5 km/h al 4%; piano 11,6 km/h all'1%", hr: "155–165", hrR: [132, 166], rpe: [6, 7],
    steps: [
      { t: "10' riscaldamento", d: "10,0 km/h, pendenza 1%." },
      { t: "4 × (4' salita + 3' ritmo gara in piano)", d: "Salita al 4% a 9,5 km/h; poi pendenza 1% e 11,6 km/h. Allena il rilancio dopo la salita, come dopo la Torre di San Martino." },
      { t: "4' defaticamento", d: "9,0 km/h." },
    ], fuel: H2O_POST,
  },
  w7: {
    kind: "run", goal: "quality", title: "Soglia", place: TAPIS, slot: POST, durMin: 38, km: 6.9,
    pace: "Blocchi 4:53/km", speed: "Blocchi 12,3 km/h (12,2–12,6)", hr: "Blocchi 159–172 (Z4)", hrR: [132, 173], rpe: [7, 8],
    steps: [
      { t: "10' riscaldamento", d: "10,0 km/h in Z2." },
      { t: "3 × 6' a soglia, recupero 2'", d: "12,3 km/h, FC 159–172. Recupero a 9,5 km/h. Se il corso è stato durissimo, fai 2 blocchi invece di 3." },
      { t: "4' defaticamento", d: "9,0 km/h." },
    ], fuel: H2O_POST,
  },
  w8: stridesT(25, 5, { title: "Facile 25' + 5 allunghi (pre prova generale)" }),
};

/* ---------- lunghi ---------- */
function longRun(o) {
  return Object.assign({ kind: "run", goal: "long", place: OUT, slot: SLOT_LONG }, o);
}
const L = {
  w1: longRun({
    title: "Lungo 12 km", durMin: 73, km: 12, pace: "5:50–6:15/km", hr: "132–146 (Z2)", hrR: [132, 146], rpe: [3, 4],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km per far salire la FC con calma." }, { t: "11 km in Z2", d: "5:50–6:15/km, FC 132–146. Se la FC supera 146 rallenta anche oltre 6:15: conta la FC, non il passo." }, { t: "Dopo", d: "5' di camminata, stretching di polpacci e flessori dell'anca." }],
    fuel: "Nessun cibo. Acqua solo se fa più di 18 °C (soft flask da 250 ml).",
  }),
  w2: longRun({
    title: "Lungo 13 km + 4 allunghi", durMin: 80, km: 13, pace: "5:50–6:15/km", hr: "132–146 (Z2)", hrR: [132, 146], rpe: [3, 5],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "11,5 km in Z2", d: "5:50–6:15/km, FC 132–146." }, { t: "4 allunghi da 20\"", d: "Sul piano a 3:55–4:15/km, recupero 60\" camminando. FC a fine allungo 150–165." }, { t: "0,5 km sciolti", d: "Z1 e camminata." }],
    fuel: "Soft flask da 300 ml nella cintura: 3–4 sorsi al km 4 e al km 10, come ai ristori di gara.",
  }),
  w3: longRun({
    title: "Lungo 15 km con 3 km a ritmo gara", durMin: 88, km: 15, pace: "Z2 5:50–6:15; finale 5:05–5:15/km", hr: "Z2 132–146; finale 155–166", hrR: [132, 166], rpe: [5, 6],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "11 km in Z2", d: "5:50–6:15/km, FC 132–146." }, { t: "3 km a ritmo gara", d: "5:05–5:15/km, FC 155–166. Se la FC supera 166 tieni 5:20: oggi impari la sensazione, non forzi." }],
    fuel: "Soft flask da 400 ml. Primo test gel al km 10 con 4–5 sorsi d'acqua: usa la marca che userai in gara. Acqua anche al km 4.",
  }),
  w4: longRun({
    title: "Lungo di scarico 11 km", durMin: 66, km: 11, pace: "5:55–6:15/km", hr: "132–144", hrR: [132, 146], rpe: [2, 4],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "10 km in Z2 bassa", d: "5:55–6:15/km, FC sotto 144. Corsa brillante, nessuno sforzo." }],
    fuel: "Solo acqua se serve.",
  }),
  w5: longRun({
    title: "Lungo 16 km", durMin: 97, km: 16, pace: "5:50–6:15/km", hr: "132–146 (Z2)", hrR: [132, 146], rpe: [4, 5],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "14,5 km in Z2", d: "5:50–6:15/km, FC 132–146. Dopo il km 12 è normale che la FC salga di 3–5 battiti: rallenta di 5–10 s/km per restare sotto 146." }, { t: "Ultimi 500 m sciolti", d: "Z1." }],
    fuel: "Soft flask da 500 ml e 2 gel: gel al km 10 e al km 14,5, sempre con acqua. Acqua anche al km 4.",
  }),
  w6: longRun({
    title: "Lungo 17 km, ultimi 5 a ritmo gara", durMin: 100, km: 17, pace: "Z2 5:50–6:15; finale 5:05–5:15/km", hr: "Z2 132–146; finale 155–166", hrR: [132, 166], rpe: [5, 7],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "11 km in Z2", d: "5:50–6:15/km, FC 132–146." }, { t: "5 km a ritmo gara", d: "5:05–5:15/km, FC 155–166. Simula il rientro verso il lago dopo la Torre di San Martino." }],
    fuel: "Soft flask da 500 ml e 2 gel al km 10 e al km 14,5. Acqua al km 4.",
  }),
  w7: longRun({
    title: "Lungo 18 km aerobico", durMin: 108, km: 18, pace: "5:50–6:15/km, ultimo km 5:30", hr: "132–146; ultimo km fino a 155", hrR: [132, 148], rpe: [4, 6],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "16 km in Z2", d: "5:50–6:15/km, FC 132–146." }, { t: "1 km in Z3", d: "5:20–5:40/km, FC fino a 155." }],
    fuel: "Soft flask da 500 ml e 2 gel al km 10 e al km 14,5. Acqua al km 4.",
  }),
  w8: longRun({
    title: "Prova generale 19 km", slot: "Partenza alle 09:50, come in gara", durMin: 110, km: 19, pace: "Z2 5:50–6:15; blocco 5:05–5:15/km", hr: "Z2 132–146; blocco 155–166", hrR: [132, 166], rpe: [6, 7],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "8 km in Z2", d: "5:50–6:15/km, FC 132–146." }, { t: "8 km a ritmo gara", d: "5:05–5:15/km, FC 155–166. Se la FC passa 166 prima del km 14, tieni 5:20." }, { t: "2 km in Z1", d: "Defaticamento." }],
    fuel: "Prova completa: colazione della gara 3 h prima (06:50), stesse scarpe e abbigliamento, 2 gel nella cintura (km 10 e 14,5), acqua dalla soft flask al km 4, 10, 14,5 e 19.",
  }),
  w9: longRun({
    title: "Lungo 15 km con 4 km a ritmo gara", durMin: 87, km: 15, pace: "Z2 5:50–6:15; blocco 5:05–5:15/km", hr: "Z2 132–146; blocco 155–166", hrR: [132, 166], rpe: [5, 6],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "9 km in Z2", d: "5:50–6:15/km." }, { t: "4 km a ritmo gara", d: "5:05–5:15/km, FC 155–166." }, { t: "1 km in Z1", d: "Defaticamento." }],
    fuel: "Ultimo test gel: un gel al km 10 con acqua dalla soft flask (400 ml).",
  }),
  w10: longRun({
    title: "Test ritmo gara 12 km", slot: "Partenza alle 09:50, come in gara", durMin: 66, km: 12, pace: "Blocco 5:08/km", hr: "Blocco 155–166", hrR: [132, 168], rpe: [5, 7],
    steps: [PRE, { t: "3 km in Z2", d: "5:50–6:15/km." }, { t: "7 km a ritmo gara", d: "Obiettivo 5:08/km (range 5:05–5:15). Annota FC media del blocco e RPE." }, { t: "2 km in Z1", d: "Defaticamento." }, { t: "Decisione obiettivo", d: "FC media del blocco ≤162 e RPE ≤6: in gara punta a 1:48 (5:07/km). FC 163–168: 1:50–1:52. Oltre 168: 1:55 e parti prudente." }],
    fuel: "Colazione della gara 3 h prima. Soft flask da 300 ml, nessun gel.",
  }),
};

const RACE = {
  kind: "race", goal: "race", title: "StraGardaLake 21,1 km", place: "Desenzano del Garda, lungolago Cesare Battisti", slot: "Via alle 09:50",
  durMin: 110, km: 21.1, pace: "Media 5:10–5:15/km (≈1:49–1:51), da confermare col test del 3 gennaio", hr: "≤165 in salita; 158–170 dal km 13", hrR: [150, 175], rpe: [8, 10],
  steps: [
    { t: "Colazione 06:30–06:50", d: "3 h prima: 150–180 g di carboidrati (es. 4 fette biscottate con marmellata e miele, 1 banana, caffè). Niente di nuovo." },
    { t: "Riscaldamento 09:20–09:35", d: "10' di corsa in Z1, protocollo ginocchia breve (bridge, tibialis, leg swing), 3 allunghi da 15\". Poi in griglia." },
    { t: "Km 0–1", d: "Strappo in salita subito dopo il via: corri a sensazione, ignora il passo." },
    { t: "Km 1–13: colline", d: "Vigneti della Lugana e colline moreniche, Torre di San Martino al km 13. Guida con la FC: tetto 165 in salita, recupera in discesa. Il passo medio qui sarà più lento del ritmo gara: è previsto." },
    { t: "Km 13–17,8: rientro", d: "Si torna verso Desenzano. Se la FC è ≤165 porta il ritmo a 5:05–5:10/km." },
    { t: "Km 17,8–21,1: lungolago", d: "Ultimi 3,3 km piatti sul lago: dai tutto (Z4–Z5)." },
  ],
  fuel: "Ristori del regolamento: acqua al km 4 e al km 19, ristori anche al km 10 e 14,5 (il regolamento non dice se con gel). Porta 2 gel tuoi nella cintura: uno al km 10 e uno al km 14,5, ciascuno con acqua.",
  note: "Dagli tutto negli ultimi 5 km, non nei primi 5.",
};

/* ---------- il piano, giorno per giorno ---------- */
const PLAN_BASE = [
  // Settimana 1
  { date: "2026-10-26", sessions: [forza()] },
  { date: "2026-10-27", sessions: [func(), easyT(30)] },
  { date: "2026-10-28", sessions: [mob()] },
  { date: "2026-10-29", sessions: [func(), Q.w1] },
  { date: "2026-10-30", sessions: [hyrox()] },
  { date: "2026-10-31", sessions: [prepLong()] },
  { date: "2026-11-01", sessions: [L.w1] },
  // Settimana 2
  { date: "2026-11-02", sessions: [forza()] },
  { date: "2026-11-03", sessions: [func(), easyT(35)] },
  { date: "2026-11-04", sessions: [mob()] },
  { date: "2026-11-05", sessions: [func(), Q.w2] },
  { date: "2026-11-06", sessions: [hyrox()] },
  { date: "2026-11-07", sessions: [prepLong()] },
  { date: "2026-11-08", sessions: [L.w2] },
  // Settimana 3
  { date: "2026-11-09", sessions: [forza()] },
  { date: "2026-11-10", sessions: [func(), easyT(40)] },
  { date: "2026-11-11", sessions: [mob()] },
  { date: "2026-11-12", sessions: [func(), Q.w3] },
  { date: "2026-11-13", sessions: [hyrox()] },
  { date: "2026-11-14", sessions: [prepLong()] },
  { date: "2026-11-15", sessions: [L.w3] },
  // Settimana 4 (scarico)
  { date: "2026-11-16", sessions: [forza({ title: "Forza (corso), scarico", rpe: [5, 7], steps: [{ t: "Corso di forza", d: "Settimana di scarico: carichi gambe −15% e 2–3 ripetizioni di margine." }] })] },
  { date: "2026-11-17", sessions: [func({ rpe: [6, 7] }), easyT(30)] },
  { date: "2026-11-18", sessions: [mob({ durMin: 20, title: "Riposo + mobilità lunga", steps: [{ t: "Mobilità 20'", d: "Fai il giro due volte.", list: PROTO.mobilita.list }] })] },
  { date: "2026-11-19", sessions: [func({ rpe: [6, 7] }), Q.w4] },
  { date: "2026-11-20", sessions: [hyrox({ title: "Hyrox (corso) all'85%", rpe: [6, 8], steps: [{ t: "Classe Hyrox controllata", d: "Esegui la classe all'85%: niente record, chiudi con fiato in riserva." }] })] },
  { date: "2026-11-21", sessions: [prepLong()] },
  { date: "2026-11-22", sessions: [L.w4] },
  // Settimana 5
  { date: "2026-11-23", sessions: [forza()] },
  { date: "2026-11-24", sessions: [func(), easyT(40)] },
  { date: "2026-11-25", sessions: [mob()] },
  { date: "2026-11-26", sessions: [func(), Q.w5] },
  { date: "2026-11-27", sessions: [hyrox()] },
  { date: "2026-11-28", sessions: [prepLong()] },
  { date: "2026-11-29", sessions: [L.w5] },
  // Settimana 6
  { date: "2026-11-30", sessions: [forza()] },
  { date: "2026-12-01", sessions: [func(), easyT(45)] },
  { date: "2026-12-02", sessions: [mob()] },
  { date: "2026-12-03", sessions: [func(), Q.w6] },
  { date: "2026-12-04", sessions: [hyrox()] },
  { date: "2026-12-05", sessions: [prepLong()] },
  { date: "2026-12-06", sessions: [L.w6] },
  // Settimana 7
  { date: "2026-12-07", sessions: [forza()] },
  { date: "2026-12-08", note: "Immacolata: la palestra potrebbe essere chiusa.", sessions: [
    outEasy(45, 0, { slot: "10:00–11:30 (festivo)", steps: [PRE, { t: "43' in Z2", d: "5:50–6:15/km, FC 132–146. " + RUNTIP }, { t: "2' in Z1", d: "6:30/km e camminata." }] }),
    homeB(false, { title: "Core e stabilità (solo se la palestra è chiusa)", slot: "Pomeriggio" }),
  ] },
  { date: "2026-12-09", sessions: [mob()] },
  { date: "2026-12-10", sessions: [func(), Q.w7] },
  { date: "2026-12-11", sessions: [hyrox()] },
  { date: "2026-12-12", sessions: [prepLong()] },
  { date: "2026-12-13", sessions: [L.w7] },
  // Settimana 8 (picco)
  { date: "2026-12-14", sessions: [forza({ title: "Forza (corso), moderata", rpe: [6, 7], steps: [{ t: "Corso di forza", d: "Niente cedimento sulle gambe: domenica c'è la prova generale." }] })] },
  { date: "2026-12-15", sessions: [func(), easyT(40)] },
  { date: "2026-12-16", sessions: [mob()] },
  { date: "2026-12-17", sessions: [func({ rpe: [6, 7] }), Q.w8] },
  { date: "2026-12-18", sessions: [hyrox({ title: "Hyrox (corso) all'80%, ultimo", rpe: [6, 7], steps: [{ t: "Ultima classe Hyrox", d: "Fermati all'80%: preserva gambe e glicogeno per domenica." }] })] },
  { date: "2026-12-19", sessions: [prepLong({ title: "Riposo (vigilia della prova generale)", steps: [{ t: "Prepara la prova generale", d: "Cena come la sera prima della gara (pasta o riso, poche fibre), 2–2,5 L d'acqua, kit di gara pronto." }] })] },
  { date: "2026-12-20", sessions: [L.w8] },
  // Settimana 9 (casa e strada)
  { date: "2026-12-21", sessions: [homeA(false)] },
  { date: "2026-12-22", sessions: [outEasy(40, 4)] },
  { date: "2026-12-23", sessions: [swim("nuotoA")] },
  { date: "2026-12-24", note: "Vigilia di Natale.", sessions: [{
    kind: "run", goal: "quality", title: "Ritmo gara 2 × 2 km", place: OUT, slot: "09:30–11:00", durMin: 49, km: 8.5,
    pace: "Blocchi 5:05–5:15/km", hr: "Blocchi 155–166", hrR: [132, 166], rpe: [5, 7],
    steps: [PRE, { t: "15' in Z2", d: "5:50–6:15/km." }, { t: "2 × 2 km a ritmo gara", d: "5:05–5:15/km, FC 155–166. Recupero 3' di corsa lenta." }, { t: "10' in Z1", d: "Defaticamento." }],
    fuel: "Niente da portare.",
  }] },
  { date: "2026-12-25", note: "Natale.", sessions: [rest({ steps: [{ t: "Riposo", d: "Goditi il Natale. Una passeggiata di 30' dopo pranzo aiuta." }] })] },
  { date: "2026-12-26", sessions: [homeB(false, { slot: "10:30" })] },
  { date: "2026-12-27", sessions: [L.w9] },
  // Settimana 10 (rifinitura)
  { date: "2026-12-28", sessions: [homeA(true)] },
  { date: "2026-12-29", sessions: [outEasy(35, 5)] },
  { date: "2026-12-30", sessions: [swim("nuotoA")] },
  { date: "2026-12-31", note: "San Silvestro.", sessions: [{
    kind: "run", goal: "quality", title: "Ritmo gara 3 × 1 km", place: OUT, slot: "10:00–11:30", durMin: 43, km: 7.1,
    pace: "Blocchi 5:05–5:10/km", hr: "Blocchi 155–165", hrR: [132, 166], rpe: [5, 6],
    steps: [PRE, { t: "15' in Z2", d: "5:50–6:15/km." }, { t: "3 × 1 km a ritmo gara", d: "5:05–5:10/km, recupero 2' di corsa lenta." }, { t: "8' in Z1", d: "Defaticamento." }],
    fuel: "Niente da portare. Stasera poco alcol: domenica c'è il test.",
  }] },
  { date: "2027-01-01", note: "Capodanno.", sessions: [rest({ steps: [{ t: "Riposo", d: "Idratazione, niente alcol se puoi." }] })] },
  { date: "2027-01-02", sessions: [homeB(true, { slot: "Mattina" })] },
  { date: "2027-01-03", sessions: [L.w10] },
  // Settimana 11 (gara)
  { date: "2027-01-04", sessions: [mob({ title: "Riposo + mobilità e foam roller", durMin: 20, steps: [{ t: "Mobilità 20'", d: "Mobilità completa, poi foam roller su polpacci, quadricipiti, banda ileotibiale e femorali.", list: PROTO.mobilita.list }] })] },
  { date: "2027-01-05", sessions: [outEasy(30, 4)] },
  { date: "2027-01-06", note: "Epifania.", sessions: [swim("nuotoB")] },
  { date: "2027-01-07", sessions: [{
    kind: "run", goal: "quality", title: "Richiamo ritmo gara 3 × 3'", place: OUT, slot: SLOT_WEEKDAY, durMin: 28, km: 4.8,
    pace: "Blocchi 5:05–5:10/km", hr: "Blocchi 155–165", hrR: [132, 166], rpe: [3, 5],
    steps: [{ t: "10' in Z2", d: "5:50–6:15/km." }, { t: "3 × 3' a ritmo gara", d: "5:05–5:10/km, recupero 2' in Z1. Deve sembrarti facile." }, { t: "5' in Z1", d: "Defaticamento." }],
    fuel: "Niente da portare.",
  }] },
  { date: "2027-01-08", sessions: [rest({ title: "Riposo + carboidrati", steps: [{ t: "Carico di carboidrati, giorno 1", d: "Circa 7 g di carboidrati per kg (≈600 g nella giornata): pasta, riso, pane, patate, frutta. Meno fibre e grassi. 2,5 L d'acqua e un pizzico di sale in più." }] })] },
  { date: "2027-01-09", sessions: [{
    kind: "run", goal: "easy", title: "Sblocco 15' + 3 allunghi", place: "Outdoor, Desenzano o a casa", slot: "10:00 (stessa fascia della gara)", durMin: 18, km: 2.5,
    pace: "6:20/km; allunghi 4:00/km", hr: "120–135", hrR: [115, 140], rpe: [2, 2],
    steps: [{ t: "15' facilissimi", d: "Z1, solo per sciogliere tensione e gambe." }, { t: "3 allunghi da 15\"", d: "3:55–4:15/km, recupero completo." }, { t: "Pomeriggio", d: "Ritiro pettorale in Piazza Malvezzi (15:00–19:00). Carboidrati come ieri, cena presto (19:30) e leggera. Prepara tutto: pettorale, 2 gel, scarpe, vestiti." }],
    fuel: "Carico di carboidrati, giorno 2.",
  }] },
  { date: "2027-01-10", sessions: [RACE] },
];
