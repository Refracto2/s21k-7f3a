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
  2: { t: "Nuovo schema", f: "Da mercoledì le corse infrasettimanali sono al mattino su strada, prima di colazione. Questa settimana niente corso il mercoledì: il martedì l'hai già fatto." },
  3: { t: "Salite", f: "Da qui 3 corsi: lunedì forza, mercoledì corpo libero, venerdì Hyrox. Martedì mattina salite brevi; domenica primo lungo con 3 km a ritmo gara." },
  4: { t: "Scarico", f: "Volume ridotto di circa il 25%: corso del mercoledì e Hyrox controllati, padel tranquillo." },
  5: { t: "Costruzione", f: "Lungo da 16 km con la borraccia versione gara." },
  6: { t: "Ritmo gara", f: "Saliscendi martedì mattina e ultimi 5 km del lungo a ritmo gara." },
  7: { t: "Volume", f: "Soglia l'8 dicembre e lungo da 18 km tutto aerobico." },
  8: { t: "Picco", f: "Prova generale da 19 km (o Stracada 21 km, se confermata). Ultima settimana di palestra." },
  9: { t: "Casa e strada", f: "Niente palestra né tapis: forza a casa, nuoto, corse su strada. Giovedì padel oppure 45' di bici o cyclette." },
  10: { t: "Rifinitura", f: "Domenica test di 12 km con 7 a ritmo gara: decide l'obiettivo cronometrico. Giovedì padel o bici, non domenica." },
  11: { t: "Settimana gara", f: "Niente padel (rischio distorsioni). Poco volume, tanto sonno, carico di carboidrati venerdì e sabato." },
};

/* ---------- scarpe ---------- */
const SH = {
  gym: "Reebok Nano X5 Edge",
  road: "ASICS Gel Roadmiles 4",
  easy: "Kiprun Kipcore (le Roadmiles se piove: tengono meglio sul bagnato)",
  tapis: "Kiprun Kipcore",
  padel: "Scarpe da padel; in alternativa le Nano X5 Edge. Mai le scarpe da corsa: poco sostegno laterale.",
  home: "Nano X5 Edge o a piedi nudi",
};

/* ---------- costruttori di sedute ---------- */
const KM = (min, kmh) => Math.round(min * kmh / 6) / 10;
const TAPIS = "Tapis roulant, pendenza 1%";
const POST = "Subito dopo il corso (19:30–20:20)";
const OUT = "Outdoor, percorso piatto";
const AM = "Mattina, prima di colazione (≤45' porta a porta)";
const SLOT_LONG = "09:30–11:30: abitua il corpo all'orario della gara (via alle 9:50)";
const SLOT_WEEKDAY = "12:30–14:00 se puoi (luce e temperatura migliori), altrimenti 17:30–18:30 su percorso illuminato";
const H2O_POST = "300–500 ml d'acqua tra corso e corsa; tieni la borraccia sul tapis.";
const PRE = { t: "Protocollo ginocchia (12', a casa)", list: PROTO.prelungo.list };
const ACT5 = { t: "Attivazione 5' a casa", list: ["10 glute bridge", "10 tibialis raise al muro", "10 leg swing avanti-indietro per gamba", "10 calf raise lenti"] };
const RUNTIP = "Passo corto e cadenza alta (≥165 passi/min): meno carico su ginocchia e caviglie.";
const PRE_Q = "15' prima: 20–30 g di carboidrati (mezza banana o 250 ml del mix standard) e un bicchiere d'acqua. Al rientro la colazione standard.";
const PRE_E = "A digiuno va bene: solo un bicchiere d'acqua. Al rientro la colazione standard.";
const DARK = "Con il buio: percorso illuminato e gilet riflettente o frontale.";
const MIX_STD = "Soft flask da 500 ml: 30 g di maltodestrine + 15 g di fruttosio + un pizzico di sale (≈43 g di carboidrati). 3–4 sorsi ogni 15' dal 20' di corsa.";
const MIX_RACE = "Soft flask da 500 ml versione gara: 45 g di maltodestrine + 22 g di fruttosio + un pizzico di sale (≈65 g di carboidrati). 3–4 sorsi ogni 15' dal 20'; quando c'è acqua, sciacqua la bocca.";
const BRK_LONG = "Colazione 2,5–3 h prima: 60 g di fette biscottate, 40 g di marmellata, 1 banana, yogurt greco con 15 g di miele.";

function forza(o = {}) {
  return Object.assign({
    kind: "gym", goal: "strength", title: "Forza (corso)", place: "Palestra", slot: "18:30–19:30", durMin: 60, rpe: [7, 8],
    steps: [{ t: "Corso di forza", d: "Bilanciere e kettlebell multiarticolari. Tieni 1–2 ripetizioni di margine su squat e stacchi: domani mattina corri." }],
    fuel: "Spuntino con carboidrati e proteine 1,5–2 h prima.", shoe: SH.gym,
  }, o);
}
function func(o = {}) {
  return Object.assign({
    kind: "gym", goal: "functional", title: "Functional (corso)", place: "Palestra", slot: "18:30–19:30", durMin: 60, rpe: [7, 8],
    steps: [{ t: "Corso functional", d: "Circuito ad alta intensità con pesi. Dopo hai la corsa: non andare a cedimento sulle gambe." }],
    fuel: "Spuntino 1–2 h prima; 300–500 ml d'acqua tra corso e corsa.", shoe: SH.gym,
  }, o);
}
function corpo(o = {}) {
  return Object.assign({
    kind: "gym", goal: "functional", title: "Corpo libero HIIT (corso)", place: "Palestra", slot: "18:30–19:30", durMin: 60, rpe: [7, 8],
    steps: [{ t: "Corso a corpo libero, alta intensità", d: "Jump squat, affondi saltati e box: atterra morbido e silenzioso. Se il ginocchio destro dà fastidio in flessione profonda, fermati al parallelo e fai la versione senza salto." }],
    fuel: "Spuntino 1,5–2 h prima con carboidrati e un po' di proteine. Borraccia durante il corso.", shoe: SH.gym,
  }, o);
}
function hyrox(o = {}) {
  return Object.assign({
    kind: "gym", goal: "hyrox", title: "Hyrox (corso)", place: "Palestra", slot: "18:30–19:30", durMin: 60, rpe: [8, 9],
    steps: [{ t: "Classe Hyrox", d: "Nei tratti di corsa della classe tieni RPE 7: parti controllato e chiudi forte. La corsa della classe non conta nel volume del piano." }],
    fuel: "Entro 1 h: carboidrati e proteine. Bevi 500 ml nella serata.", shoe: SH.gym,
  }, o);
}
function bike(o = {}) {
  return Object.assign({
    kind: "bike", goal: "bike", title: "Cyclette (facoltativa)", place: "Palestra", slot: "Sera, se vuoi la 4ª seduta in palestra", durMin: 30, optional: true,
    hr: "119–146 (Z1–Z2)", hrR: [119, 146], rpe: [2, 4],
    steps: [{ t: "30' facili", d: "Cadenza 85–95 rpm, resistenza bassa, FC 119–146. Allena il motore aerobico senza impatto sulle ginocchia. Se stamattina la qualità è stata dura, saltala." }],
    fuel: "Niente di particolare: acqua.", shoe: SH.gym,
  }, o);
}
function padel(o = {}) {
  return Object.assign({
    kind: "padel", goal: "padel", title: "Padel", place: "Campo da padel", slot: "Sera", durMin: 90, rpe: [5, 7], padel: true,
    steps: [
      { t: "Riscaldamento 8'", d: "Corsetta, skip, rotazioni di anche e caviglie, qualche spostamento laterale progressivo." },
      { t: "Partita", d: "Gioca, ma senza tuffi e affondi profondi: caviglie e ginocchia servono per la mezza." },
    ],
    fuel: "Acqua durante la partita; se dura più di 1 h, metà del mix standard.", shoe: SH.padel,
    note: "Con «Padel di domenica» si sposta alla domenica mattina e il lungo passa a sabato.",
  }, o);
}
const PADEL_OR_BIKE = {
  title: "Padel o bici 45'", slot: "Sera, o quando puoi", durMin: 45, rpe: [3, 6],
  steps: [
    { t: "Se giochi a padel", d: "Riscaldamento 8' e partita tranquilla, senza tuffi e affondi profondi." },
    { t: "Se non giochi: bici o cyclette 45'", d: "Z1–Z2 (FC 119–146), cadenza 85–95 rpm, resistenza bassa. Aerobico senza impatto sulle ginocchia." },
  ],
  fuel: "Acqua. Se la seduta supera l'ora, metà del mix standard.",
  shoe: "Padel: scarpe da padel o Nano X5 Edge. Bici: quelle che vuoi.",
};
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
    steps: [{ t: "Prepara il lungo", d: "Cena con carboidrati (pasta o riso), poche fibre, circa 2,5 L d'acqua nella giornata. Prepara la soft flask con il mix e il kit." }],
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
    fuel: H2O_POST, shoe: SH.tapis,
  }, o);
}
/* corse del mattino su strada */
function amE(min, n, o = {}) {
  const km = Math.round((KM(min, 10) + n * 0.11) * 10) / 10;
  const steps = [ACT5, { t: `${min - 3}' in Z2`, d: "5:50–6:15/km, FC 132–146. Comanda la FC, non il passo. " + RUNTIP }];
  if (n) steps.push({ t: `${n} allunghi da 20"`, d: "Su un rettilineo: accelera fino a 3:55–4:15/km per 20\", poi 60\" camminando o trotterellando. FC a fine allungo 150–165." });
  steps.push({ t: "3' in Z1", d: "6:30/km e camminata fino a casa." });
  return Object.assign({
    kind: "run", goal: n ? "strides" : "easy", title: n ? `Facile ${min}' + ${n} allunghi` : `Corsa facile ${min}'`, place: OUT + ", su strada", slot: AM,
    durMin: min + (n ? Math.round(n * 1.4) : 0), km, pace: n ? "6:00/km; allunghi 3:55–4:15/km" : "5:50–6:15/km", hr: "132–146 (Z2)", hrR: [132, 146], rpe: [2, 4],
    steps, fuel: PRE_E, shoe: SH.easy, note: DARK,
  }, o);
}
function amQ(o) {
  const q = Object.assign({ kind: "run", goal: "quality", place: OUT + ", su strada", slot: AM, fuel: PRE_Q, shoe: SH.road, note: DARK }, o);
  q.steps = [ACT5].concat(q.steps);
  return q;
}
function outEasy(min, n, o = {}) {
  const km = Math.round((KM(min, 10) + n * 0.11) * 10) / 10;
  const steps = [{ t: `${min - 2}' in Z2`, d: "5:50–6:15/km, FC 132–146. Comanda la FC, non il passo. " + RUNTIP }];
  if (n) steps.push({ t: `${n} allunghi da 20"`, d: "Su un rettilineo: accelera fino a 3:55–4:15/km per 20\", poi 60\" camminando o trotterellando. FC a fine allungo 150–165, se passa 168 allunga il recupero." });
  steps.push({ t: "2' in Z1", d: "6:30/km e camminata." });
  return Object.assign({
    kind: "run", goal: n ? "strides" : "easy", title: n ? `Facile ${min}' + ${n} allunghi` : `Corsa facile ${min}'`, place: OUT, slot: SLOT_WEEKDAY,
    durMin: min + (n ? Math.round(n * 1.4) : 0), km, pace: n ? "6:00/km; allunghi 3:55–4:15/km" : "5:50–6:15/km", speed: "", hr: "132–146 (Z2)", hrR: [132, 146], rpe: [2, 4],
    steps, fuel: "Niente da portare. Bevi 300–500 ml nell'ora prima.", shoe: SH.easy,
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
    fuel: "Spuntino con proteine dopo (yogurt greco, latte, uova).", shoe: SH.home,
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
    fuel: "Nessuna esigenza particolare.", shoe: SH.home,
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

/* ---------- qualità: settimana 1 al tapis, dalla 2 al mattino su strada ---------- */
const Q = {
  w1: {
    kind: "run", goal: "quality", title: "Fartlek ritmo gara", place: TAPIS, slot: POST, durMin: 35, km: 6.0,
    pace: "Blocchi 5:10/km, recuperi 6:07/km", speed: "Blocchi 11,6 km/h, recuperi 9,8 km/h", hr: "Blocchi 155–163; recuperi Z2", hrR: [132, 163], rpe: [5, 6],
    steps: [
      { t: "10' riscaldamento", d: "10,0 km/h, FC 132–146 (sei già caldo dal corso)." },
      { t: "5 × (2' ritmo gara + 2' facile)", d: "Blocchi a 11,6 km/h (range 11,4–11,8), FC 155–163. Recupero a 9,8 km/h." },
      { t: "5' defaticamento", d: "9,0 km/h, poi camminata." },
    ], fuel: H2O_POST, shoe: SH.tapis,
  },
  w2: amQ({
    title: "Ritmo gara a blocchi", durMin: 36, km: 6.3,
    pace: "Blocchi 5:05–5:15/km, recuperi 6:00–6:15/km", hr: "Blocchi 155–165", hrR: [132, 165], rpe: [5, 7],
    steps: [
      { t: "10' in Z2", d: "5:50–6:15/km, FC 132–146: è il riscaldamento." },
      { t: "3 × (5' ritmo gara + 2' facile)", d: "5:05–5:15/km, FC 155–165. Recupero 2' a 6:00–6:15/km. Se la FC passa 166 nel terzo blocco, rallenta a 5:20." },
      { t: "5' in Z1", d: "6:30/km, poi camminata fino a casa." },
    ],
    note: "Prima uscita con le Roadmiles: se senti sfregamenti, domenica usa le Kipcore. " + DARK,
  }),
  w3: amQ({
    title: "Salite brevi", durMin: 36, km: 5.8,
    pace: "Salita a sensazione (RPE 7); Z2 nel resto", hr: "Fino a 160 in salita", hrR: [132, 160], rpe: [6, 7],
    steps: [
      { t: "12' in Z2", d: "Corsa facile fino alla salita." },
      { t: "6 × 60–75\" in salita", d: "Salita o cavalcavia al 4–6%: RPE 7, busto alto, passo corto, braccia attive. Recupero scendendo al passo o al trotto." },
      { t: "8' in Z1", d: "Rientro a casa." },
      { t: "Se non hai salite", d: "6 × 2' in Z3 (5:20–5:40/km) con 1'30\" facile: stesso tempo totale." },
    ],
    note: "Il percorso di gara sale subito dopo il via e resta collinare fino al km 13. " + DARK,
  }),
  w4: amE(25, 4, { title: "Facile 25' + 4 allunghi (scarico)" }),
  w5: amQ({
    title: "Ritmo gara lungo", durMin: 38, km: 6.8,
    pace: "Blocchi 5:05–5:15/km", hr: "Blocchi 155–166", hrR: [132, 166], rpe: [6, 7],
    steps: [
      { t: "10' in Z2", d: "5:50–6:15/km." },
      { t: "2 × 10' ritmo gara, recupero 3'", d: "5:05–5:15/km, FC 155–166. Recupero a 6:10/km." },
      { t: "5' in Z1", d: "Rientro a casa." },
    ],
  }),
  w6: amQ({
    title: "Saliscendi", durMin: 40, km: 6.6,
    pace: "Salita RPE 7; piano 5:05–5:15/km", hr: "155–165", hrR: [132, 166], rpe: [6, 7],
    steps: [
      { t: "10' in Z2", d: "5:50–6:15/km." },
      { t: "4 × (90\" in salita + 3' a ritmo gara in piano)", d: "Salita al 4–6% a RPE 7, scendi al trotto e riparti subito a 5:05–5:15/km in piano. Allena il rilancio dopo la salita, come dopo la Torre di San Martino." },
      { t: "5' in Z1", d: "Rientro a casa." },
      { t: "Senza salite vicino a casa", d: "Spostala sul tapis dopo il corso di mercoledì (con 3 corsi è concesso): 10' a 10 km/h, 4 × (4' al 4% a 9,5 km/h + 3' all'1% a 11,6 km/h), 4' a 9 km/h, con le Kipcore." },
    ],
  }),
  w7: amQ({
    title: "Soglia", slot: "Mattina (festivo), prima di colazione", durMin: 37, km: 6.5,
    pace: "Blocchi 4:45–4:55/km", hr: "Blocchi 159–172 (Z4)", hrR: [132, 173], rpe: [7, 8],
    steps: [
      { t: "10' in Z2", d: "5:50–6:15/km." },
      { t: "3 × 6' a soglia, recupero 2'", d: "4:45–4:55/km, FC 159–172. Recupero 2' trotterellando. Se le gambe sono pesanti, fai 2 blocchi." },
      { t: "5' in Z1", d: "Rientro a casa." },
    ],
  }),
  w8: amE(30, 5, { title: "Facile 30' + 5 allunghi (pre prova generale)" }),
  w9: amQ({
    title: "Ritmo gara 2 × 2 km", durMin: 40, km: 7.3,
    pace: "Blocchi 5:05–5:15/km", hr: "Blocchi 155–166", hrR: [132, 166], rpe: [5, 7],
    steps: [
      { t: "10' in Z2", d: "5:50–6:15/km." },
      { t: "2 × 2 km a ritmo gara", d: "5:05–5:15/km, FC 155–166. Recupero 3' di corsa lenta." },
      { t: "6' in Z1", d: "Rientro a casa." },
    ],
  }),
  w10: amQ({
    title: "Ritmo gara 3 × 1 km", durMin: 39, km: 6.9,
    pace: "Blocchi 5:05–5:10/km", hr: "Blocchi 155–165", hrR: [132, 166], rpe: [5, 6],
    steps: [
      { t: "12' in Z2", d: "5:50–6:15/km." },
      { t: "3 × 1 km a ritmo gara", d: "5:05–5:10/km, recupero 2' di corsa lenta." },
      { t: "7' in Z1", d: "Rientro a casa." },
    ],
  }),
};

/* ---------- lunghi ---------- */
function longRun(o) {
  return Object.assign({ kind: "run", goal: "long", place: OUT, slot: SLOT_LONG, shoe: SH.road }, o);
}
const L = {
  w1: longRun({
    title: "Lungo 12 km", durMin: 73, km: 12, pace: "5:50–6:15/km", hr: "132–146 (Z2)", hrR: [132, 146], rpe: [3, 4],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km per far salire la FC con calma." }, { t: "11 km in Z2", d: "5:50–6:15/km, FC 132–146. Se la FC supera 146 rallenta anche oltre 6:15: conta la FC, non il passo." }, { t: "Dopo", d: "5' di camminata, stretching di polpacci e flessori dell'anca." }],
    fuel: "Nessun cibo. Acqua solo se fa più di 18 °C (soft flask da 250 ml).", shoe: SH.tapis,
  }),
  w2: longRun({
    title: "Lungo 13 km + 4 allunghi", durMin: 80, km: 13, pace: "5:50–6:15/km", hr: "132–146 (Z2)", hrR: [132, 146], rpe: [3, 5],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "11,5 km in Z2", d: "5:50–6:15/km, FC 132–146." }, { t: "4 allunghi da 20\"", d: "Sul piano a 3:55–4:15/km, recupero 60\" camminando. FC a fine allungo 150–165." }, { t: "0,5 km sciolti", d: "Z1 e camminata." }],
    fuel: BRK_LONG + " Durante: " + MIX_STD,
  }),
  w3: longRun({
    title: "Lungo 15 km con 3 km a ritmo gara", durMin: 88, km: 15, pace: "Z2 5:50–6:15; finale 5:05–5:15/km", hr: "Z2 132–146; finale 155–166", hrR: [132, 166], rpe: [5, 6],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "11 km in Z2", d: "5:50–6:15/km, FC 132–146." }, { t: "3 km a ritmo gara", d: "5:05–5:15/km, FC 155–166. Se la FC supera 166 tieni 5:20: oggi impari la sensazione, non forzi." }],
    fuel: BRK_LONG + " Durante: " + MIX_STD,
  }),
  w4: longRun({
    title: "Lungo di scarico 11 km", durMin: 66, km: 11, pace: "5:55–6:15/km", hr: "132–144", hrR: [132, 146], rpe: [2, 4],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "10 km in Z2 bassa", d: "5:55–6:15/km, FC sotto 144. Corsa brillante, nessuno sforzo." }],
    fuel: BRK_LONG + " Durante: " + MIX_STD,
  }),
  w5: longRun({
    title: "Lungo 16 km", durMin: 97, km: 16, pace: "5:50–6:15/km", hr: "132–146 (Z2)", hrR: [132, 146], rpe: [4, 5],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "14,5 km in Z2", d: "5:50–6:15/km, FC 132–146. Dopo il km 12 è normale che la FC salga di 3–5 battiti: rallenta di 5–10 s/km per restare sotto 146." }, { t: "Ultimi 500 m sciolti", d: "Z1." }],
    fuel: BRK_LONG + " Durante, primo test della versione gara: " + MIX_RACE,
  }),
  w6: longRun({
    title: "Lungo 17 km, ultimi 5 a ritmo gara", durMin: 100, km: 17, pace: "Z2 5:50–6:15; finale 5:05–5:15/km", hr: "Z2 132–146; finale 155–166", hrR: [132, 166], rpe: [5, 7],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "11 km in Z2", d: "5:50–6:15/km, FC 132–146." }, { t: "5 km a ritmo gara", d: "5:05–5:15/km, FC 155–166. Simula il rientro verso il lago dopo la Torre di San Martino." }],
    fuel: BRK_LONG + " Durante: " + MIX_RACE,
  }),
  w7: longRun({
    title: "Lungo 18 km aerobico", durMin: 108, km: 18, pace: "5:50–6:15/km, ultimo km 5:30", hr: "132–146; ultimo km fino a 155", hrR: [132, 148], rpe: [4, 6],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "16 km in Z2", d: "5:50–6:15/km, FC 132–146." }, { t: "1 km in Z3", d: "5:20–5:40/km, FC fino a 155." }],
    fuel: BRK_LONG + " Durante: " + MIX_RACE,
  }),
  w8: longRun({
    title: "Prova generale 19 km", slot: "Partenza alle 09:50, come in gara", durMin: 110, km: 19, pace: "Z2 5:50–6:15; blocco 5:05–5:15/km", hr: "Z2 132–146; blocco 155–166", hrR: [132, 166], rpe: [6, 7],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "8 km in Z2", d: "5:50–6:15/km, FC 132–146." }, { t: "8 km a ritmo gara", d: "5:05–5:15/km, FC 155–166. Se la FC passa 166 prima del km 14, tieni 5:20." }, { t: "2 km in Z1", d: "Defaticamento." }],
    fuel: "Prova completa: colazione della gara alle 06:50 (80 g di fette biscottate, 40 g di marmellata, 20 g di miele, 1 banana, 250 ml di succo), stesse scarpe e abbigliamento. Durante: " + MIX_RACE,
    note: "In attesa di conferma: al suo posto la Stracada 21 km a Seveso (partenza libera 8:00–9:00). In quel caso parti alle 9:00, colazione alle 6:00, e fai 1 km Z1 + 9 km Z2 + 8 km a ritmo gara + 3 km facili.",
  }),
  w9: longRun({
    title: "Lungo 15 km con 4 km a ritmo gara", durMin: 87, km: 15, pace: "Z2 5:50–6:15; blocco 5:05–5:15/km", hr: "Z2 132–146; blocco 155–166", hrR: [132, 166], rpe: [5, 6],
    steps: [PRE, { t: "1 km in Z1", d: "6:20–6:40/km." }, { t: "9 km in Z2", d: "5:50–6:15/km." }, { t: "4 km a ritmo gara", d: "5:05–5:15/km, FC 155–166." }, { t: "1 km in Z1", d: "Defaticamento." }],
    fuel: BRK_LONG + " Durante: " + MIX_STD,
  }),
  w10: longRun({
    title: "Test ritmo gara 12 km", slot: "Partenza alle 09:50, come in gara", durMin: 66, km: 12, pace: "Blocco 5:08/km", hr: "Blocco 155–166", hrR: [132, 168], rpe: [5, 7],
    steps: [PRE, { t: "3 km in Z2", d: "5:50–6:15/km." }, { t: "7 km a ritmo gara", d: "Obiettivo 5:08/km (range 5:05–5:15). Annota FC media del blocco e RPE." }, { t: "2 km in Z1", d: "Defaticamento." }, { t: "Decisione obiettivo", d: "FC media del blocco ≤162 e RPE ≤6: in gara punta a 1:48 (5:07/km). FC 163–168: 1:50–1:52. Oltre 168: 1:55 e parti prudente." }],
    fuel: "Colazione della gara 3 h prima. Durante: " + MIX_STD,
  }),
};

const RACE = {
  kind: "race", goal: "race", title: "StraGardaLake 21,1 km", place: "Desenzano del Garda, lungolago Cesare Battisti", slot: "Via alle 09:50",
  durMin: 110, km: 21.1, pace: "Media 5:10–5:15/km (≈1:49–1:51), da confermare col test del 3 gennaio", hr: "≤165 in salita; 158–170 dal km 13", hrR: [150, 175], rpe: [8, 10],
  steps: [
    { t: "Colazione 06:30–06:50", d: "Circa 150 g di carboidrati: 80 g di fette biscottate, 40 g di marmellata, 20 g di miele, 1 banana, 250 ml di succo, caffè come al solito. Niente di nuovo." },
    { t: "Riscaldamento 09:20–09:35", d: "10' di corsa in Z1, protocollo ginocchia breve (bridge, tibialis, leg swing), 3 allunghi da 15\". Poi in griglia." },
    { t: "Km 0–1", d: "Strappo in salita subito dopo il via: corri a sensazione, ignora il passo." },
    { t: "Km 1–13: colline", d: "Vigneti della Lugana e colline moreniche, Torre di San Martino al km 13. Guida con la FC: tetto 165 in salita, recupera in discesa. Il passo medio qui sarà più lento del ritmo gara: è previsto." },
    { t: "Km 13–17,8: rientro", d: "Si torna verso Desenzano. Se la FC è ≤165 porta il ritmo a 5:05–5:10/km." },
    { t: "Km 17,8–21,1: lungolago", d: "Ultimi 3,3 km piatti sul lago: dai tutto (Z4–Z5)." },
  ],
  fuel: "Ristori del regolamento: acqua al km 4 e al km 19, ristori anche al km 10 e 14,5. Porta la soft flask versione gara: " + MIX_RACE,
  note: "Dagli tutto negli ultimi 5 km, non nei primi 5.", shoe: SH.road,
};

/* ---------- il piano, giorno per giorno ---------- */
const PLAN_BASE = [
  // Settimana 1 (com'era)
  { date: "2026-10-26", sessions: [forza({ shoe: "Kiprun Kipcore" })] },
  { date: "2026-10-27", sessions: [func({ shoe: "Kiprun Kipcore" }), easyT(30)] },
  { date: "2026-10-28", sessions: [mob()] },
  { date: "2026-10-29", sessions: [func({ shoe: "Kiprun Kipcore" }), Q.w1] },
  { date: "2026-10-30", sessions: [hyrox({ shoe: "Kiprun Kipcore" })] },
  { date: "2026-10-31", sessions: [prepLong()] },
  { date: "2026-11-01", sessions: [L.w1] },
  // Settimana 2: nuovo schema da mercoledì
  { date: "2026-11-02", sessions: [forza()] },
  { date: "2026-11-03", sessions: [corpo()] },
  { date: "2026-11-04", note: "Da oggi le corse infrasettimanali sono al mattino su strada. Niente corso stasera: martedì l'hai già fatto.", sessions: [Q.w2] },
  { date: "2026-11-05", sessions: [amE(30, 0), padel()] },
  { date: "2026-11-06", sessions: [hyrox()] },
  { date: "2026-11-07", sessions: [prepLong()] },
  { date: "2026-11-08", sessions: [L.w2] },
  // Settimana 3
  { date: "2026-11-09", sessions: [forza()] },
  { date: "2026-11-10", sessions: [Q.w3] },
  { date: "2026-11-11", sessions: [corpo()] },
  { date: "2026-11-12", sessions: [amE(30, 0), padel()] },
  { date: "2026-11-13", sessions: [hyrox()] },
  { date: "2026-11-14", sessions: [prepLong()] },
  { date: "2026-11-15", sessions: [L.w3] },
  // Settimana 4 (scarico)
  { date: "2026-11-16", sessions: [forza({ title: "Forza (corso), scarico", rpe: [5, 7], steps: [{ t: "Corso di forza", d: "Settimana di scarico: carichi gambe −15% e 2–3 ripetizioni di margine." }] })] },
  { date: "2026-11-17", sessions: [Q.w4] },
  { date: "2026-11-18", sessions: [corpo({ title: "Corpo libero (corso), scarico", rpe: [6, 7], steps: [{ t: "Corso a corpo libero", d: "Settimana di scarico: niente salti a esaurimento, atterraggi morbidi, fermati al parallelo se il ginocchio destro protesta." }] })] },
  { date: "2026-11-19", sessions: [amE(25, 0), padel({ rpe: [4, 6] })] },
  { date: "2026-11-20", sessions: [hyrox({ title: "Hyrox (corso) all'85%", rpe: [6, 8], steps: [{ t: "Classe Hyrox controllata", d: "Esegui la classe all'85%: niente record, chiudi con fiato in riserva." }] })] },
  { date: "2026-11-21", sessions: [prepLong()] },
  { date: "2026-11-22", sessions: [L.w4] },
  // Settimana 5: da qui 3 corsi
  { date: "2026-11-23", sessions: [forza()] },
  { date: "2026-11-24", sessions: [Q.w5] },
  { date: "2026-11-25", sessions: [corpo()] },
  { date: "2026-11-26", sessions: [amE(30, 0), padel()] },
  { date: "2026-11-27", sessions: [hyrox()] },
  { date: "2026-11-28", sessions: [prepLong()] },
  { date: "2026-11-29", sessions: [L.w5] },
  // Settimana 6
  { date: "2026-11-30", sessions: [forza()] },
  { date: "2026-12-01", sessions: [Q.w6] },
  { date: "2026-12-02", sessions: [corpo()] },
  { date: "2026-12-03", sessions: [amE(30, 0), padel()] },
  { date: "2026-12-04", sessions: [hyrox()] },
  { date: "2026-12-05", sessions: [prepLong()] },
  { date: "2026-12-06", sessions: [L.w6] },
  // Settimana 7
  { date: "2026-12-07", sessions: [forza()] },
  { date: "2026-12-08", note: "Immacolata.", sessions: [Q.w7] },
  { date: "2026-12-09", sessions: [corpo()] },
  { date: "2026-12-10", sessions: [amE(30, 0), padel()] },
  { date: "2026-12-11", sessions: [hyrox()] },
  { date: "2026-12-12", sessions: [prepLong()] },
  { date: "2026-12-13", sessions: [L.w7] },
  // Settimana 8 (picco)
  { date: "2026-12-14", sessions: [forza({ title: "Forza (corso), moderata", rpe: [6, 7], steps: [{ t: "Corso di forza", d: "Niente cedimento sulle gambe: domenica c'è la prova generale." }] })] },
  { date: "2026-12-15", sessions: [Q.w8] },
  { date: "2026-12-16", sessions: [corpo({ rpe: [6, 7], steps: [{ t: "Corso a corpo libero", d: "Settimana della prova generale: niente salti a esaurimento, atterraggi morbidi, fermati al parallelo se il ginocchio destro protesta." }] })] },
  { date: "2026-12-17", sessions: [amE(25, 0), padel({ rpe: [4, 6], steps: [{ t: "Riscaldamento 8'", d: "Corsetta, skip, rotazioni di anche e caviglie." }, { t: "Partita tranquilla", d: "Domenica c'è la prova generale: gioca rilassato, niente rincorse disperate." }] })] },
  { date: "2026-12-18", sessions: [hyrox({ title: "Hyrox (corso) all'80%, ultimo", rpe: [6, 7], steps: [{ t: "Ultima classe Hyrox", d: "Fermati all'80%: preserva gambe e glicogeno per domenica." }] })] },
  { date: "2026-12-19", sessions: [prepLong({ title: "Riposo (vigilia della prova generale)", steps: [{ t: "Prepara la prova generale", d: "Carico leggero di carboidrati (7–8 g/kg), poche fibre, 2,5 L d'acqua, kit di gara pronto. Cena come la sera prima della gara." }] })] },
  { date: "2026-12-20", sessions: [L.w8] },
  // Settimana 9 (casa e strada)
  { date: "2026-12-21", sessions: [homeA(false)] },
  { date: "2026-12-22", sessions: [Q.w9] },
  { date: "2026-12-23", sessions: [swim("nuotoA")] },
  { date: "2026-12-24", note: "Vigilia di Natale.", sessions: [amE(30, 4), padel(PADEL_OR_BIKE)] },
  { date: "2026-12-25", note: "Natale.", sessions: [rest({ steps: [{ t: "Riposo", d: "Goditi il Natale. Una passeggiata di 30' dopo pranzo aiuta." }] })] },
  { date: "2026-12-26", sessions: [homeB(false, { slot: "10:30" })] },
  { date: "2026-12-27", sessions: [L.w9] },
  // Settimana 10 (rifinitura)
  { date: "2026-12-28", sessions: [homeA(true)] },
  { date: "2026-12-29", sessions: [Q.w10] },
  { date: "2026-12-30", sessions: [swim("nuotoA")] },
  { date: "2026-12-31", note: "San Silvestro: stasera poco alcol, domenica c'è il test.", sessions: [amE(30, 5), padel(Object.assign({}, PADEL_OR_BIKE, { note: "Questa settimana lascialo al giovedì: domenica c'è il test all'orario di gara." }))] },
  { date: "2027-01-01", note: "Capodanno.", sessions: [rest({ steps: [{ t: "Riposo", d: "Idratazione, niente alcol se puoi." }] })] },
  { date: "2027-01-02", sessions: [homeB(true, { slot: "Mattina" })] },
  { date: "2027-01-03", sessions: [L.w10] },
  // Settimana 11 (gara)
  { date: "2027-01-04", sessions: [mob({ title: "Riposo + mobilità e foam roller", durMin: 20, steps: [{ t: "Mobilità 20'", d: "Mobilità completa, poi foam roller su polpacci, quadricipiti, banda ileotibiale e femorali.", list: PROTO.mobilita.list }] })] },
  { date: "2027-01-05", sessions: [amE(30, 4)] },
  { date: "2027-01-06", note: "Epifania.", sessions: [swim("nuotoB")] },
  { date: "2027-01-07", sessions: [amQ({
    title: "Richiamo ritmo gara 3 × 3'", durMin: 28, km: 4.8,
    pace: "Blocchi 5:05–5:10/km", hr: "Blocchi 155–165", hrR: [132, 166], rpe: [3, 5],
    steps: [{ t: "10' in Z2", d: "5:50–6:15/km." }, { t: "3 × 3' a ritmo gara", d: "5:05–5:10/km, recupero 2' in Z1. Deve sembrarti facile." }, { t: "5' in Z1", d: "Defaticamento." }],
  })] },
  { date: "2027-01-08", sessions: [rest({ title: "Riposo + carboidrati", steps: [{ t: "Carico di carboidrati, giorno 1", d: "Circa 8 g di carboidrati per kg (≈690 g): riso, pasta, pane bianco, fette biscottate, succo, miele, maltodestrine. Pochi grassi, fibre sotto 25 g. 2,5 L d'acqua e un pizzico di sale in più." }] })] },
  { date: "2027-01-09", sessions: [{
    kind: "run", goal: "easy", title: "Sblocco 15' + 3 allunghi", place: "Outdoor, Desenzano o a casa", slot: "10:00 (stessa fascia della gara)", durMin: 18, km: 2.5,
    pace: "6:20/km; allunghi 4:00/km", hr: "120–135", hrR: [115, 140], rpe: [2, 2], shoe: SH.road,
    steps: [{ t: "15' facilissimi", d: "Z1, solo per sciogliere tensione e gambe." }, { t: "3 allunghi da 15\"", d: "3:55–4:15/km, recupero completo." }, { t: "Pomeriggio", d: "Ritiro pettorale in Piazza Malvezzi (15:00–19:00). Carboidrati come ieri ma concentrati entro il pomeriggio, cena presto (19:30) e leggera. Prepara tutto: pettorale, soft flask versione gara, scarpe, vestiti." }],
    fuel: "Carico di carboidrati, giorno 2 (≈8,5 g/kg, ≈730 g).",
  }] },
  { date: "2027-01-10", sessions: [RACE] },
];

/* ---------- alimentazione: menu a confezioni ---------- */
const BODY_KG = 86;
/* v = kcal, carboidrati, proteine, grassi per l'unità indicata (per i prodotti "g" i valori sono per 100 g o 100 ml).
   q = qualità proteica: alta (completa), leg (legumi), cer (cereali). Pancake e pan bauletto: valori medi stimati, da verificare in etichetta. */
const FOODS = {
  colaz: { n: "Yogurt greco + muesli (colazione standard)", u: "porzione", v: [357, 37, 25, 7], q: "alta" },
  pancake: { n: "Pancake Tre Mulini", u: "pancake", v: [120, 19, 2.6, 3.6], q: "cer" },
  fetta: { n: "Fette di pan bauletto 8 cereali e soia", u: "fette", v: [66, 10.5, 3, 1.1], q: "cer" },
  pb: { n: "Burro d'arachidi", g: true, v: [600, 15, 25, 50], q: "leg" },
  marm: { n: "Marmellata", g: true, v: [250, 62, 0.5, 0] },
  miele: { n: "Miele", g: true, v: [304, 82, 0.3, 0] },
  biscotti: { n: "Biscotti senza zuccheri aggiunti", u: "biscotti", v: [44, 6.6, 0.8, 1.5], q: "cer" },
  latte: { n: "Latte parzialmente scremato", g: true, ml: true, v: [46, 5, 3.3, 1.6], q: "alta" },
  yogurt: { n: "Yogurt greco (vasetto da 170 g)", u: "vasetto", v: [124, 6, 16, 3.4], q: "alta" },
  frutto: { n: "Frutto di stagione (arancia, mela, 2 kiwi, cachi)", u: "frutto", v: [90, 21, 1, 0.3] },
  banana: { n: "Banana", u: "banana", v: [108, 25, 1.3, 0.4] },
  verdura: { n: "Verdura (250 g: mezza testa di broccoli, un finocchio, un piatto di spinaci)", u: "porzione", v: [75, 10, 6, 0.8] },
  olio: { n: "Olio extravergine", u: "cucchiai (10 g)", v: [90, 0, 0, 10] },
  pasta: { n: "Pasta", g: true, v: [355, 72, 12, 1.5], q: "cer" },
  riso: { n: "Riso", g: true, v: [355, 79, 7, 0.6], q: "cer" },
  couscous: { n: "Couscous", g: true, v: [360, 72, 12, 1.5], q: "cer" },
  gallette: { n: "Gallette di mais o riso", g: true, v: [380, 81, 8, 2.5], q: "cer" },
  lenticchie: { n: "Lenticchie in lattina (240 g sgocciolate)", u: "lattina", v: [216, 31, 15.6, 1.2], q: "leg" },
  ceci: { n: "Ceci in lattina (240 g sgocciolati)", u: "lattina", v: [288, 36, 16.8, 6], q: "leg" },
  tonno: { n: "Tonno al naturale (160 g sgocciolato)", u: "lattina", v: [176, 0, 40, 1.6], q: "alta" },
  uova: { n: "Uova", u: "uova", v: [77, 0.4, 6.9, 5.5], q: "alta" },
  albume: { n: "Albume liquido", g: true, ml: true, v: [45, 0.7, 11, 0.2], q: "alta" },
  pollo: { n: "Petto di pollo o tacchino", g: true, v: [110, 0, 23, 1.5], q: "alta" },
  manzo: { n: "Macinato magro di manzo (carne rossa della settimana)", g: true, v: [130, 0, 21, 5], q: "alta" },
  tofu: { n: "Tofu", g: true, v: [120, 2, 13, 7], q: "alta" },
  grana: { n: "Grana o parmigiano", g: true, v: [390, 0, 33, 28], q: "alta" },
  succo: { n: "Succo d'arancia 100%", g: true, ml: true, v: [45, 10, 0.7, 0.1] },
  mixstd: { n: "Soft flask mix standard (30 g maltodestrine + 15 g fruttosio)", u: "flask", v: [172, 43, 0, 0] },
  mixgara: { n: "Soft flask mix gara (45 g maltodestrine + 22 g fruttosio)", u: "flask", v: [260, 65, 0, 0] },
  pizza: { n: "Pizza fuori (pasto libero)", u: "pizza", v: [850, 110, 32, 28], q: "cer" },
  festa: { n: "Pranzo delle feste (pasto libero)", u: "", v: [1100, 120, 45, 45], q: "cer" },
  birra: { n: "Birra media o drink (1–2 a settimana)", u: "", v: [180, 13, 1.5, 0] },
};
const DAYTYPE = {
  R: { n: "Riposo", c: 4, p: 155, f: 90 },
  V: { n: "Vigilia del lungo", c: 5, p: 155, f: 85 },
  S: { n: "Allenamento singolo", c: 5, p: 155, f: 85 },
  D: { n: "Doppio (corsa + padel o bici)", c: 6.5, p: 155, f: 85 },
  L: { n: "Lungo fino a 15 km", c: 7, p: 155, f: 80 },
  LL: { n: "Lungo da 16 km in su", c: 8, p: 155, f: 75 },
  C8: { n: "Carico di carboidrati, giorno 1", c: 8, p: 130, f: 50 },
  C9: { n: "Carico di carboidrati, giorno 2", c: 8.5, p: 130, f: 50 },
  GARA: { n: "Gara", c: 0, p: 0, f: 0 },
};
const HOLIDAYS = ["2026-12-25", "2027-01-01"];

function dayType(day, next) {
  if (day.date === PLAN_INFO.race) return "GARA";
  if (day.date === "2027-01-08") return "C8";
  if (day.date === "2027-01-09") return "C9";
  const ss = day.sessions.filter(s => !s.optional);
  const long = ss.find(s => s.goal === "long");
  if (long) return long.km >= 16 ? "LL" : "L";
  let load = 0;
  for (const s of ss) {
    if (["gym", "padel", "bike"].includes(s.kind) || (s.kind === "run" && s.goal === "quality")) load += 1;
    else if (["run", "home", "swim"].includes(s.kind)) load += 0.6;
  }
  if (load >= 1.6) return "D";
  if (load >= 0.5) return "S";
  if (next && next.sessions.some(s => s.goal === "long" || s.goal === "race")) return "V";
  return "R";
}

function mealsFor(day, t) {
  const dow = new Date(day.date + "T12:00:00").getDay();
  const quality = day.sessions.some(s => s.kind === "run" && s.goal === "quality");
  const padelDay = day.sessions.some(s => s.kind === "padel" || s.kind === "bike");
  const NIGHT = ["Sera", [["latte", 250], ["biscotti", 4]]];
  const SNACK = ["Spuntino 16:30–17:00", [["fetta", 2], ["pb", 20], ["marm", 20], ["frutto", 1]]];
  if (t === "C8" || t === "C9") {
    const big = t === "C9";
    return [
      ["Colazione", [["pancake", 3], ["marm", 40], ["succo", 500], ["banana", 1]]],
      ["Metà mattina", [["fetta", 3], ["miele", 30]]],
      ["Pranzo", [["riso", big ? 220 : 200], ["pollo", 250], ["grana", 20], ["olio", 1]]],
      ["Pomeriggio", [["mixstd", 1], ["gallette", 120], ["marm", 30]]],
      ["Cena " + (big ? "19:30, leggera" : ""), [["pasta", big ? 160 : 180], ["grana", 20], ["olio", 1]]],
      ["Sera", [["yogurt", 1], ["miele", 20]]],
    ];
  }
  if (t === "L" || t === "LL") {
    const ll = t === "LL";
    return [
      ["Colazione 2,5–3 h prima", [["pancake", 3], ["marm", 30], ["banana", 1]]],
      ["Durante il lungo", [[ll ? "mixgara" : "mixstd", 1]]],
      ["Entro 1 h dalla fine", [["yogurt", 1], ["gallette", ll ? 80 : 40], ["miele", 20], ["succo", 200]]],
      ["Pranzo", [["pasta", ll ? 170 : 150], ["tonno", 1], ["grana", 20], ["verdura", 1], ["olio", 1]]],
      ["Spuntino", [["fetta", 2], ["pb", 20], ["marm", 20], ["frutto", 1]]],
      ["Cena", [["riso", ll ? 130 : 120], ["tofu", 200], ["verdura", 1], ["olio", 1]]],
      NIGHT,
    ];
  }
  if (dow === 6 || dow === 0) {
    const m = [
      ["Colazione", [["pancake", 3], ["pb", 20], ["marm", 20], ["latte", 250]]],
      ["Metà mattina", [["frutto", 1]]],
      ["Pranzo", [["riso", 130], ["pollo", 250], ["verdura", 1], ["olio", 2]]],
      ["Spuntino", [["yogurt", 1], ["frutto", 1], ["miele", 15]]],
      ["Cena", [["pasta", 130], ["uova", 2], ["grana", 20], ["verdura", 1], ["olio", 1]]],
      NIGHT,
    ];
    if (padelDay) m.splice(3, 0, ["Durante padel o bici", [["mixstd", 1]]]);
    return m;
  }
  const BRK = ["Colazione", [["colaz", 1]].concat(quality ? [] : [])];
  const MID = ["Metà mattina", [["frutto", 1], ["gallette", 40], ["marm", 20]]];
  const pre = quality ? [["Prima della corsa", [["banana", 1]]]] : [];
  let m;
  switch (dow) {
    case 1: m = [...pre, BRK, MID, ["Pranzo", [["pasta", 140], ["lenticchie", 1], ["grana", 20], ["verdura", 1], ["olio", 1]]], SNACK, ["Cena", [["riso", 120], ["pollo", 250], ["verdura", 1], ["olio", 2]]], NIGHT]; break;
    case 2: m = [...pre, BRK, MID, ["Pranzo", [["riso", 150], ["tonno", 1], ["verdura", 1], ["olio", 2]]], SNACK, ["Cena", [["fetta", 4], ["uova", 2], ["albume", 250], ["verdura", 1], ["olio", 1]]], NIGHT]; break;
    case 3: m = [...pre, BRK, MID, ["Pranzo", [["pasta", 140], ["ceci", 1], ["grana", 20], ["verdura", 1], ["olio", 1]]], SNACK, ["Cena", [["couscous", 120], ["pollo", 250], ["verdura", 1], ["olio", 2]]], NIGHT]; break;
    case 4: {
      const sn = padelDay ? ["Spuntino 16:30–17:00", [["fetta", 2], ["pb", 20], ["marm", 20], ["banana", 1]]] : SNACK;
      m = [...pre, BRK, MID, ["Pranzo", [["riso", padelDay ? 160 : 140], ["tonno", 1], ["verdura", 1], ["olio", 2]]], sn];
      if (padelDay) m.push(["Durante padel o bici", [["mixstd", 1]]]);
      m.push(["Cena", [["pasta", padelDay ? 160 : 130], ["uova", 2], ["albume", 250], ["grana", 20], ["verdura", 1], ["olio", 1]]], NIGHT);
      break;
    }
    case 5:
      if (HOLIDAYS.includes(day.date)) m = [BRK, ["Pranzo delle feste (pasto libero)", [["festa", 1]]], ["Cena", [["pasta", 100], ["manzo", 250], ["verdura", 1], ["olio", 1]]], NIGHT];
      else m = [...pre, BRK, MID, ["Pranzo", [["pasta", 150], ["manzo", 250], ["verdura", 1], ["olio", 1]]], SNACK, ["Cena: pasto libero", [["pizza", 1], ["birra", 1]]]];
      break;
  }
  if (t === "R" && !HOLIDAYS.includes(day.date)) m = m.filter(x => !x[0].startsWith("Spuntino"));
  return m;
}

function dietFor(day, next) {
  const t = dayType(day, next), T = DAYTYPE[t];
  if (t === "GARA") return { t, name: T.n, special: "Colazione 06:30–06:50: 3 pancake con 40 g di marmellata, 20 g di miele, 1 banana, 250 ml di succo, caffè come al solito. Durante: soft flask versione gara (≈65 g). Dopo: pranzo libero e un brindisi." };
  const meals = mealsFor(day, t);
  const tot = [0, 0, 0, 0]; let pHigh = 0, pLeg = 0, pCer = 0;
  const out = meals.map(([name, list]) => [name, list.map(([k, q]) => {
    const F = FOODS[k], m = F.g ? q / 100 : q;
    F.v.forEach((x, i) => tot[i] += x * m);
    const p = F.v[2] * m; if (F.q === "alta") pHigh += p; else if (F.q === "leg") pLeg += p; else if (F.q === "cer") pCer += p;
    const qty = F.g ? `${q} ${F.ml ? "ml" : "g"}` : (F.u ? `${q} ${q === 1 && F.u === "fette" ? "fetta" : q === 1 && F.u === "uova" ? "uovo" : q === 1 && F.u === "biscotti" ? "biscotto" : F.u}`.trim() : "");
    return { k, q, n: F.n, qty };
  })]);
  const target = { C: Math.round(T.c * BODY_KG), P: T.p, F: T.f };
  target.kcal = Math.round(target.C * 4 + target.P * 4 + target.F * 9);
  const free = meals.some(m => /pasto libero/.test(m[0]));
  return {
    t, name: T.n, target, meals: out, free,
    tot: { kcal: Math.round(tot[0]), C: Math.round(tot[1]), P: Math.round(tot[2]), F: Math.round(tot[3]) },
    prot: { alta: Math.round(pHigh), legumi: Math.round(pLeg), cereali: Math.round(pCer) },
  };
}

/* spesa della settimana: quante confezioni apri */
function shoppingFor(days) {
  const sum = {};
  days.forEach((d, i) => { const r = dietFor(d, days[i + 1] || null); if (r.special) return; r.meals.forEach(([, list]) => list.forEach(it => { sum[it.k] = (sum[it.k] || 0) + it.q; })); });
  const L = [];
  const add = (k, txt) => { if (sum[k]) L.push(txt(sum[k])); };
  add("pollo", x => `Pollo o tacchino: ${x} g`);
  add("manzo", x => `Macinato di manzo: ${x} g`);
  add("tonno", x => `Tonno: ${x} lattine`);
  add("uova", x => `Uova: ${x} (${Math.ceil(x / 6)} confezion${Math.ceil(x / 6) > 1 ? "i" : "e"} da 6)`);
  add("albume", x => `Albume: ${x} ml (${Math.ceil(x / 500)} brick da 500 ml, da finire in 5 giorni)`);
  add("lenticchie", x => `Lenticchie: ${x} lattin${x > 1 ? "e" : "a"}`);
  add("ceci", x => `Ceci: ${x} lattin${x > 1 ? "e" : "a"}`);
  add("tofu", x => `Tofu: ${x} g`);
  add("yogurt", x => `Yogurt greco 170 g: ${x + (sum.colaz || 0)} vasetti (colazioni comprese)`);
  add("latte", x => `Latte: ${Math.ceil(x / 1000 * 10) / 10} L`);
  add("grana", x => `Grana: ${x} g`);
  add("fetta", x => `Pan bauletto: ${x} fette (circa ${Math.ceil(x * 25 / 400)} confezion${Math.ceil(x * 25 / 400) > 1 ? "i" : "e"} da 400 g)`);
  add("pancake", x => `Pancake: ${x} (${Math.ceil(x / 6)} confezion${Math.ceil(x / 6) > 1 ? "i" : "e"} da 240 g, se sono 6 per confezione)`);
  add("gallette", x => `Gallette: ${x} g (${Math.ceil(x / 120)} confezion${Math.ceil(x / 120) > 1 ? "i" : "e"} da 120 g)`);
  add("pasta", x => `Pasta: ${x} g`);
  add("riso", x => `Riso: ${x} g`);
  add("couscous", x => `Couscous: ${x} g`);
  add("biscotti", x => `Biscotti: ${x}`);
  add("frutto", x => `Frutta: ${x} frutti`);
  add("banana", x => `Banane: ${x}`);
  add("verdura", x => `Verdura: ${x} porzioni da 250 g (una testa di broccoli o di cavolfiore = 2 porzioni)`);
  add("pb", x => `Burro d'arachidi: ${x} g`);
  return L;
}
