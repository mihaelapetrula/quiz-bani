// ─── EmailJS config ─── //
const EMAILJS_SERVICE_ID  = 'service_r1z6608';
const EMAILJS_TEMPLATE_ID = 'template_04wiqcn';
const EMAILJS_PUBLIC_KEY  = 't65e6x37oDGJ18GKv';

// Link-uri PDF tipare Google Drive
const PLATFORM_LINKS = {
  T0: 'https://drive.google.com/file/d/1J3PoSqMuxzvJC0JgfIE9soabOoF-wko3/view?usp=drive_link',
  T1: 'https://drive.google.com/file/d/1_LGuUfDnO9FLQOGYHE-y1BffCKnxV5cV/view?usp=drive_link',
  T2: 'https://drive.google.com/file/d/16hrRaGpPz4Tk8Ocw8uH6RRUgbzkEHMkI/view?usp=drive_link',
  T3: 'https://drive.google.com/file/d/12ximsQRJUeOsxhmJRhCZMm99nl4DDiII/view?usp=drive_link',
  T4: 'https://drive.google.com/file/d/1xR7xwfeRLeyOEt2SrFfP7DDk4wLU2aNR/view?usp=drive_link',
  T5: 'https://drive.google.com/file/d/1YQdMTp_c5-uHxVAc4-5zG0XZN_6lvAJB/view?usp=drive_link',
};

// ─── Date quiz ─── //
const sections = [
  { label: 'Secțiunea 1 din 3 — Comportament', range: [0, 4] },
  { label: 'Secțiunea 2 din 3 — Emoții și convingeri', range: [5, 9] },
  { label: 'Secțiunea 3 din 3 — Origini și pattern-uri', range: [10, 14] },
];

const questions = [
  // ── Secțiunea 1 ──
  {
    text: 'Când trebuie să ceri ceva — un preț, o mărire de salariu, un ajutor financiar — ce faci?',
    answers: [
      { letter: 'A', text: 'Cer, dar în sinea mea mă întreb cât va mai dura situația bună', tipar: 'T1' },
      { letter: 'B', text: 'Cer mai puțin decât am nevoie — nu știu exact cât e potrivit', tipar: 'T2' },
      { letter: 'C', text: 'Cer mai puțin decât am nevoie, ca să fiu sigur/ă că nu sunt refuzat/ă', tipar: 'T3' },
      { letter: 'D', text: 'Cer, dar adaug ceva în plus din partea mea ca să compensez', tipar: 'T4' },
      { letter: 'E', text: 'Cer clar ceea ce am nevoie, fără să justific sau să adaug extra', tipar: 'T0' },
    ],
  },
  {
    text: 'Când ai o perioadă financiară mai bună ca de obicei, primul tău gând este:',
    answers: [
      { letter: 'A', text: 'Nu știu cât va dura — mai bine nu mă bucur prea tare', tipar: 'T1' },
      { letter: 'B', text: 'Nu știu exact unde s-au dus banii luna trecută, dar cumva s-au dus', tipar: 'T2' },
      { letter: 'C', text: 'Parcă nu merit atât — alții au mai multă nevoie decât mine', tipar: 'T3' },
      { letter: 'D', text: 'Am primit mult — trebuie să dau și eu mai mult în schimb', tipar: 'T4' },
      { letter: 'E', text: 'Mă bucur și folosesc această perioadă ca să construiesc ceva stabil', tipar: 'T0' },
    ],
  },
  {
    text: 'Când cineva îți propune o oportunitate nouă — un proiect, o colaborare, o schimbare — ce faci?',
    answers: [
      { letter: 'A', text: 'Ezit mult — mi-e teamă că nu voi putea susține dacă merge bine', tipar: 'T1' },
      { letter: 'B', text: 'Vreau să accept, dar nu știu de unde să încep cu organizarea', tipar: 'T2' },
      { letter: 'C', text: 'Mă întreb dacă merit cu adevărat oportunitatea aceasta', tipar: 'T3' },
      { letter: 'D', text: 'Accept, dar imediat mă gândesc cum să ofer mai mult decât se cere', tipar: 'T4' },
      { letter: 'E', text: 'Mă entuziasmez, încep, apoi găsesc un motiv să amân sau să mă opresc', tipar: 'T5' },
    ],
  },
  {
    text: 'Cum arată relația ta cu banii în mod concret, zi de zi?',
    answers: [
      { letter: 'A', text: 'Îi verific des și mă îngrijorez chiar și când situația e stabilă', tipar: 'T1' },
      { letter: 'B', text: 'Știu că vin, dar nu știu niciodată cât rămân sau unde se duc', tipar: 'T2' },
      { letter: 'C', text: 'Evit să cer prețul corect — mi se pare că e prea mult', tipar: 'T3' },
      { letter: 'D', text: 'Câștig, dar simt că dau mereu mai mult decât primesc', tipar: 'T4' },
      { letter: 'E', text: 'Am o imagine clară și mă raportez la bani cu calm și intenție', tipar: 'T0' },
    ],
  },
  {
    text: 'Există ceva important pe care îl amâni de mult timp. Care este motivul real?',
    answers: [
      { letter: 'A', text: 'Mi-e teamă că dacă reușesc, nu voi putea menține așteptările și voi pierde totul', tipar: 'T1' },
      { letter: 'B', text: 'Nu știu de unde să încep și mă simt copleșit/ă de dezordine', tipar: 'T2' },
      { letter: 'C', text: 'Nu mă simt suficient de bun/ă — parcă nu e momentul meu', tipar: 'T3' },
      { letter: 'D', text: 'Mă îngrijorez că dacă lansez, oamenii vor cere mai mult decât pot oferi', tipar: 'T4' },
      { letter: 'E', text: 'Mă opresc mereu înainte de final — mereu apare ceva care mă blochează', tipar: 'T5' },
    ],
  },
  // ── Secțiunea 2 ──
  {
    text: 'Când cineva îți spune că ai făcut ceva bine, ce simți în interior?',
    answers: [
      { letter: 'A', text: 'Mă bucur, dar vine imediat grija că așteptările vor crește și nu voi face față', tipar: 'T1' },
      { letter: 'B', text: 'Mă bucur, dar parcă nu înțeleg de unde vine aprecierea', tipar: 'T2' },
      { letter: 'C', text: 'Mă bucur, dar minimalizez imediat — nu a fost mare lucru', tipar: 'T3' },
      { letter: 'D', text: 'Mă bucur, dar simt că trebuie să fac și mai mult data viitoare', tipar: 'T4' },
      { letter: 'E', text: 'Primesc aprecierea cu recunoștință și o las să conteze cu adevărat', tipar: 'T0' },
    ],
  },
  {
    text: 'Când te gândești să ceri mai mult — mai mult salariu, un preț mai mare, mai mult ajutor — ce simți?',
    answers: [
      { letter: 'A', text: 'Anxietate — dacă primesc mai mult, va urma ceva rău sau voi pierde ce am', tipar: 'T1' },
      { letter: 'B', text: 'Confuzie — nu știu cât să cer și nu am o referință clară', tipar: 'T2' },
      { letter: 'C', text: 'Rușine — mi se pare că cer prea mult sau că sunt lacom/ă', tipar: 'T3' },
      { letter: 'D', text: 'Vinovăție — ca și cum nu merit decât dacă ofer ceva în schimb', tipar: 'T4' },
      { letter: 'E', text: 'Blocaj — vreau să cer, dar ceva mă oprește chiar înainte să o fac', tipar: 'T5' },
    ],
  },
  {
    text: 'Când te gândești la bani, care este emoția dominantă?',
    answers: [
      { letter: 'A', text: 'Anxietate — nu știu niciodată dacă e destul sau dacă va dura', tipar: 'T1' },
      { letter: 'B', text: 'Confuzie — parcă nu înțeleg cum funcționează, oricât aș încerca', tipar: 'T2' },
      { letter: 'C', text: 'Rușine — simt că fie am prea puțin, fie cer prea mult', tipar: 'T3' },
      { letter: 'D', text: 'Oboseală — dau mereu mai mult și totuși nu pare suficient', tipar: 'T4' },
      { letter: 'E', text: 'Claritate și încredere — știu unde sunt și mă simt în control', tipar: 'T0' },
    ],
  },
  {
    text: 'Cum te raportezi la ideea de succes — al tău, concret, vizibil?',
    answers: [
      { letter: 'A', text: 'Îl vreau, dar îmi e teamă că îl voi pierde dacă îl am', tipar: 'T1' },
      { letter: 'B', text: 'Îl vreau, dar habar nu am cum să îl organizez concret', tipar: 'T2' },
      { letter: 'C', text: 'Îl vreau, dar simt că nu merit să îl am înainte să fac mai mult', tipar: 'T3' },
      { letter: 'D', text: 'Îl vreau, dar simt că trebuie să dau mai mult pentru a-l merita', tipar: 'T4' },
      { letter: 'E', text: 'Îl vreau, dar ceva mă oprește mereu înainte să ajung acolo', tipar: 'T5' },
    ],
  },
  {
    text: 'Cum te simți când vezi că altcineva câștigă bine sau are succes vizibil?',
    answers: [
      { letter: 'A', text: 'Îl/o admir, dar mă gândesc că și el/ea ar putea pierde oricând', tipar: 'T1' },
      { letter: 'B', text: 'Îl/o admir, dar nu înțeleg concret cum a ajuns acolo', tipar: 'T2' },
      { letter: 'C', text: 'Îl/o admir, dar simt o strângere — de ce nu și eu?', tipar: 'T3' },
      { letter: 'D', text: 'Îl/o admir, dar îmi vin gânduri că trebuie să muncesc și mai mult', tipar: 'T4' },
      { letter: 'E', text: 'Mă bucur sincer pentru el/ea — succesul altora nu îl diminuează pe al meu', tipar: 'T0' },
    ],
  },
  // ── Secțiunea 3 ──
  {
    text: 'Cum se vorbea despre bani în familia în care ai crescut?',
    answers: [
      { letter: 'A', text: 'Banii vin greu și se pierd ușor — trebuie să fii mereu atent/ă', tipar: 'T1' },
      { letter: 'B', text: 'Era un subiect tensionat, secret sau evitat', tipar: 'T2' },
      { letter: 'C', text: 'Nu e frumos să ceri sau să te pui în față pentru bani', tipar: 'T3' },
      { letter: 'D', text: 'Important e să dai mai mult decât primești — asta e omenie', tipar: 'T4' },
      { letter: 'E', text: 'Nu te pune prea mult în față — atrage probleme și invidie', tipar: 'T5' },
    ],
  },
  {
    text: 'Ce mesaj ai primit, direct sau indirect, despre oameni și bani?',
    answers: [
      { letter: 'A', text: 'Cine câștigă mult nu e fericit — sigur pierde altceva important', tipar: 'T1' },
      { letter: 'B', text: 'Banii sunt complicați — mai bine îi lasă alții să se ocupe', tipar: 'T2' },
      { letter: 'C', text: 'Cine câștigă mult e egoist sau materialist', tipar: 'T3' },
      { letter: 'D', text: 'Omul bun se sacrifică și dă mai mult decât primește', tipar: 'T4' },
      { letter: 'E', text: 'Banii sunt o unealtă — pot fi câștigați, gestionați și folosiți cu înțelepciune', tipar: 'T0' },
    ],
  },
  {
    text: 'Când cineva din cercul tău apropiat are mai mult decât tine — financiar sau profesional — ce simți?',
    answers: [
      { letter: 'A', text: 'Mă bucur, dar imediat mă gândesc că și el/ea poate pierde oricând', tipar: 'T1' },
      { letter: 'B', text: 'Mă bucur pentru el/ea, dar nu înțeleg cum a reușit', tipar: 'T2' },
      { letter: 'C', text: 'Mă bucur pentru el/ea, dar mă întreb discret de ce nu și eu', tipar: 'T3' },
      { letter: 'D', text: 'Mă motivează, dar simt că trebuie să muncesc și mai mult', tipar: 'T4' },
      { letter: 'E', text: 'Îl/o admir, dar simt o teamă că dacă aș reuși și eu, relațiile mele s-ar schimba', tipar: 'T5' },
    ],
  },
  {
    text: 'Dacă te gândești la momentele în care ai fost aproape de ceva important și nu s-a întâmplat, care e explicația?',
    answers: [
      { letter: 'A', text: 'Mi-a fost teamă că dacă reușeam, puteam pierde și mai mult după', tipar: 'T1' },
      { letter: 'B', text: 'Nu am știut cum să organizez resursele și m-am blocat', tipar: 'T2' },
      { letter: 'C', text: 'Nu m-am simțit suficient de bun/ă sau pregătit/ă', tipar: 'T3' },
      { letter: 'D', text: 'Am dat prea mult altora și nu mi-a mai rămas energie pentru mine', tipar: 'T4' },
      { letter: 'E', text: 'A intervenit ceva — o urgență, o boală, un conflict neprevăzut', tipar: 'T5' },
    ],
  },
  {
    text: 'Care frază te descrie cel mai bine când vine vorba de bani și de locul tău în lume?',
    answers: [
      { letter: 'A', text: 'Am, dar mereu mă tem că se va termina', tipar: 'T1' },
      { letter: 'B', text: 'Câștig, dar nu știu niciodată unde se duc banii', tipar: 'T2' },
      { letter: 'C', text: 'Mi-e greu să cer cât merit — parcă nu am dreptul', tipar: 'T3' },
      { letter: 'D', text: 'Muncesc mult și dau mult, dar nu rămâne niciodată suficient pentru mine', tipar: 'T4' },
      { letter: 'E', text: 'Sunt în flux cu banii — primesc, gestionez și dau cu echilibru', tipar: 'T0' },
    ],
  },
];

// ─── Date tipare ─── //
const tipare = {
  T0: {
    nr: 'TIPARUL 0',
    titlu: 'Cel sau Cea care trăiește în flux cu banii',
    subtitlu: 'Ai construit o relație funcțională cu banii — și există un nivel următor care te așteaptă.',
    descriere: `Relația ta cu banii este una dintre cele mai echilibrate. Nu înseamnă că nu ai provocări — înseamnă că ai dezvoltat capacitatea de a fi în flux: primești fără vinovăție, dai fără epuizare, acționezi fără să te sabotezi.

Există însă un plafon subtil care te poate ține pe loc. Chiar și în flux există straturi mai adânci de eliberat și niveluri mai înalte de accesat. Ghidul tău complet ți-a fost trimis pe email.`,
    culoare: '#2D7D46',
  },
  T1: {
    nr: 'TIPARUL 1',
    titlu: 'Cel sau Cea care se teme că pierde tot',
    subtitlu: 'Câștigă, dar trăiește în umbra fricii că tot ce a construit poate dispărea.',
    descriere: `Acest tipar este guvernat de o frică profundă și deseori inconștientă: chiar și atunci când lucrurile merg bine, ceva din interior așteaptă dezastrul. Nu ai neapărat puțini bani — ba uneori câștig bine — însă nu te poți bucura cu adevărat de abundență. Fiecare lună bună vine cu o tensiune subterană: <em>când se termină?</em>

Subconștientul a învățat că abundența este fragilă, temporară, că nu se poate conta pe ea. Iar această convingere devine o profeție care se împlinește singură: cu cât te temi mai mult că vei pierde, cu atât creezi exact condițiile care fac pierderea posibilă.`,
    culoare: '#9B2C52',
  },
  T2: {
    nr: 'TIPARUL 2',
    titlu: 'Cel sau Cea fără busolă financiară',
    subtitlu: 'Câștigă, dar banii dispar fără să știe unde.',
    descriere: `Nu ai neapărat venituri mici. Problema nu este cât câștig, ci că nu există un recipient interior care să țină banii. Vin și se duc. Mereu apar cheltuieli. Mereu ceva consumă surplusul. Nu există o relație conștientă cu banii — unde sunt, cât sunt, ce planuri au.

Această dezordine nu este lene sau iresponsabilitate. Ea reflectă o dezordine emoțională mai veche, un mesaj interiorizat că banii sunt ceva haotic, imprevizibil, care nu poate fi controlat. Și câtă vreme nu există un container interior stabil, nici unul exterior nu va rezista.`,
    culoare: '#7A5200',
  },
  T3: {
    nr: 'TIPARUL 3',
    titlu: 'Cel sau Cea care nu se simte îndreptățit',
    subtitlu: 'Are valoare, dar îi este rușine să ceară cât valorează.',
    descriere: `Aceasta este una dintre cele mai frecvente și mai subtile blocaje. Nu lipsa competenței este problema, ci convingerea profundă că a cere mult este echivalent cu a fi lacom/ă, egoist/ă sau arogant/ă.

Ești adesea extrem de valoros/oasă profesional, însă prețurile tale nu reflectă această valoare. Te compari constant cu alții și ieși pierdut/ă din comparație — nu pentru că ești mai puțin bun/ă, ci pentru că filtrul interior te diminuează sistematic. Și cu cât te micșorezi mai mult, cu atât lumea te tratează ca și cum ai valora mai puțin.`,
    culoare: '#7A3090',
  },
  T4: {
    nr: 'TIPARUL 4',
    titlu: 'Cel sau Cea care dă prea mult',
    subtitlu: 'Se recunoaște prin over-delivery și rămâne cu prea puțin.',
    descriere: `Adaugi mereu ceva în plus: o sesiune extra, un material neplătit, o reducere necerută, timp personal dăruit fără compensație. La suprafață pare generozitate — la rădăcină este o nevoie profundă de validare: <em>dacă dau mai mult decât s-a cerut, nu pot fi respins/ă.</em>

Valoarea ta nu este intrinsecă — trebuie dovedită continuu prin performanță și dărnicie. Paradoxul: cu cât dai mai mult, cu atât se consolidează convingerea că valoarea ta depinde de ce faci, nu de cine ești.`,
    culoare: '#0F6E56',
  },
  T5: {
    nr: 'TIPARUL 5',
    titlu: 'Cel sau Cea care se sabotează înainte de linia de sosire',
    subtitlu: 'Ajunge aproape de succes, apoi se oprește.',
    descriere: `Aceasta nu este frica de eșec. Este frica de succes. Începi proiecte cu energie și entuziasm, ajungi aproape de finalizare, aproape de lansare, aproape de marele pas — și atunci ceva se întâmplă. Te îmbolnăvești, creezi un conflict, apare o urgență, găsești o problemă tehnică.

Nu este întâmplător. Subconștientul sabotează exact în momentul cheie pentru că succesul înseamnă ceva periculos: schimbare, pierdere, ruptura de un grup de apartenența sau de o identitate familiară. Subconștientul preferă durerea cunoscută față de necunoscuta succesului.`,
    culoare: '#1A5FA0',
  },
};

// ─── State ─── //
let currentQ = 0;
let answers  = new Array(15).fill(null);
let resultTipar = null;

// ─── Init EmailJS ─── //
(function() {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
})();

// ─── Navigation helpers ─── //
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── INTRO → QUIZ ─── //
function startQuiz() {
  currentQ = 0;
  answers  = new Array(15).fill(null);
  showScreen('screen-quiz');
  renderQuestion();
}

// ─── Render întrebare curentă ─── //
function renderQuestion() {
  const q   = questions[currentQ];
  const pct = Math.round((currentQ / 15) * 100);

  // Progress
  document.getElementById('progress-bar-fill').style.width = pct + '%';
  document.getElementById('progress-counter').textContent  = (currentQ + 1) + ' / 15';
  document.getElementById('progress-message').textContent  = getProgressMessage(pct);

  // Section label
  const sec = sections.find(s => currentQ >= s.range[0] && currentQ <= s.range[1]);
  document.getElementById('section-label').textContent = sec ? sec.label : '';

  // Întrebare
  document.getElementById('question-text').textContent = q.text;

  // Răspunsuri
  const list = document.getElementById('answers-list');
  list.innerHTML = '';
  q.answers.forEach((ans) => {
    const div = document.createElement('div');
    div.className = 'answer-option' + (answers[currentQ] === ans.tipar ? ' selected' : '');
    div.setAttribute('data-tipar', ans.tipar);
    div.innerHTML = `
      <span class="answer-letter">${ans.letter}</span>
      <span class="answer-text">${ans.text}</span>
    `;
    div.addEventListener('click', () => selectAnswer(ans.tipar));
    list.appendChild(div);
  });

  // Buton înapoi
  const btnBack = document.getElementById('btn-back');
  btnBack.style.visibility = currentQ === 0 ? 'hidden' : 'visible';

  // Buton continuă
  document.getElementById('btn-continue').disabled = answers[currentQ] === null;
}

function getProgressMessage(pct) {
  if (pct <= 20) return 'Hai să începem! 🌱';
  if (pct <= 40) return 'Merge bine, continuă! ✨';
  if (pct <= 60) return 'Ești la jumătate, bravo! 💪';
  if (pct <= 80) return 'Aproape gata! 🌸';
  if (pct < 100) return 'Ultima întrebare! 🎯';
  return 'Gata! Calculăm tiparul tău... ✦';
}

function selectAnswer(tipar) {
  answers[currentQ] = tipar;
  document.querySelectorAll('.answer-option').forEach(el => {
    el.classList.toggle('selected', el.getAttribute('data-tipar') === tipar);
  });
  document.getElementById('btn-continue').disabled = false;
}

function nextQuestion() {
  if (answers[currentQ] === null) return;
  if (currentQ < 14) {
    currentQ++;
    renderQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

// ─── Calculează rezultat ─── //
function showResult() {
  try {
    const scores = { T0: 0, T1: 0, T2: 0, T3: 0, T4: 0, T5: 0 };
    answers.forEach(t => { if (t && scores[t] !== undefined) scores[t]++; });

    let maxScore = 0;
    let winner   = 'T1';
    for (const [key, val] of Object.entries(scores)) {
      if (val > maxScore) { maxScore = val; winner = key; }
    }
    resultTipar = winner;

    const t = tipare[winner];

    document.getElementById('result-tipar-label').textContent = t.nr;
    document.getElementById('result-title').textContent       = t.titlu;
    document.getElementById('result-title').style.color       = t.culoare;
    document.getElementById('result-subtitle').textContent    = t.subtitlu;
    document.getElementById('result-description').innerHTML   = t.descriere.replace(/\n/g, '<br><br>');
    document.getElementById('result-description').style.borderLeftColor = t.culoare;

    const ctaBox = document.getElementById('result-cta-box');
    ctaBox.innerHTML = `
      <p class="result-cta-text">Vrei analiza completă + acces la ghidul specific tiparului tău?</p>
      <button class="btn-primary" onclick="showEmailScreen()">Vreau analiza completă →</button>
    `;

    showScreen('screen-result');
  } catch(err) {
    alert('Eroare la afișarea rezultatului: ' + err.message);
    console.error(err);
  }
}

// ─── Rezultat → Email ─── //
function showEmailScreen() {
  showScreen('screen-email');
}

// ─── Trimite email ─── //
function submitEmail(e) {
  e.preventDefault();
  const name    = document.getElementById('input-name').value.trim();
  const email   = document.getElementById('input-email').value.trim();
  const consent = document.querySelector('input[name="consent"]:checked');
  const btn     = document.getElementById('btn-submit');

  if (!name || !email || !consent) return;

  btn.disabled    = true;
  btn.textContent = 'Se trimite...';

  const tiparData = tipare[resultTipar];

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    to_name:         name,
    to_email:        email,
    tipar_nr:        tiparData.nr,
    tipar_titlu:     tiparData.titlu,
    tipar_subtitlu:  tiparData.subtitlu,
    link_platforma:  PLATFORM_LINKS[resultTipar],
    newsletter:      consent.value === 'da' ? 'DA - accepta materiale viitoare' : 'NU - doar materialul din quiz',
  }).then(() => {
    showScreen('screen-confirm');
  }).catch(err => {
    btn.disabled    = false;
    btn.textContent = 'Vreau să îmi văd tiparul complet →';
    alert('EROARE: ' + JSON.stringify(err));
  });
}

// ─── Restart ─── //
function restartQuiz() {
  document.getElementById('email-form').reset();
  startQuiz();
}
