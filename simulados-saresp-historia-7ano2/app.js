'use strict';

const names = {
  simulado1: 'Prova 1 — Questões 01 a 10',
  simulado2: 'Prova 2 — Questões 11 a 20',
  simulado3: 'Prova 3 — Questões 21 a 30',
  simulado4: 'Prova 4 — Questões 31 a 40'
};
const root = 'https://atividades-douglas-default-rtdb.firebaseio.com/avaliacoes_historia7_saresp40_v2_2026';
const storageKey = 'hist7-saresp40-avaliacoes-v2';
const teacherHash = 'fb5b2e6809cbfa612b911daad00b1ba917fbe13f061a7161a2a38729cd62f412';
const main = document.querySelector('#main');
const letters = 'ABCDE';
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));
let attempt = null;
let savedAttempts = {};
let active = false;
let sending = false;
let away = false;
let teacher = false;
let requestNumber = 0;
try {
  const stored = JSON.parse(localStorage.getItem(storageKey));
  attempt = stored?.version === 2 ? stored.attempt : stored;
  savedAttempts = stored?.version === 2 ? stored.attempts || {} : {};
  if (attempt?.id) savedAttempts[attempt.id] = attempt;
} catch {
  attempt = null;
}

function save() {
  try {
    if (attempt?.id) savedAttempts[attempt.id] = attempt;
    localStorage.setItem(storageKey, JSON.stringify({version: 2, attempt, attempts: savedAttempts}));
  } catch {
    const status = document.querySelector('#message');
    if (status) status.textContent = 'Este navegador não conseguiu salvar o progresso local. Mantenha a página aberta até entregar.';
  }
}

function questionIds() {
  return attempt.items || BANK[attempt.exam].map((_, index) => index);
}

function home() {
  active = false;
  teacher = false;
  requestNumber++;
  document.body.classList.remove('exam');
  main.innerHTML = `<div id="s-welcome" class="screen active">
    <div class="page-body" style="justify-content:center;gap:28px;padding-top:45px">
      <div id="logo-txt"><span style="color:var(--orange)">GAMIFICAÇÃO</span><br>
        <span style="color:var(--blue)">TOTAL</span></div>
      <div class="welcome-decoration"></div>
      <div class="welcome-tagline">Preparação para o SARESP<br>História · 7º ano</div>
      <p>4 provas · 40 questões</p>
      <div class="welcome-btns">
        <button class="btn btn-primary" id="student-entry">📝 Fazer avaliação</button>
        <button class="btn btn-outline" id="teacher-entry">🔐 Painel do professor</button>
      </div>
      <p class="school">EE Sebastiana Muniz Paiva · Iguape (SP)<br>Prof. Douglas Eduardo de Sousa</p>
    </div></div>`;
  document.querySelector('#student-entry').onclick = student;
  document.querySelector('#teacher-entry').onclick = teacherLogin;
}

function examChoices() {
  return `<fieldset class="exam-picker"><legend>Escolha o simulado que deseja fazer</legend>
    ${Object.entries(names).map(([id, name]) => `<label class="exam-choice">
      <input type="radio" name="exam" value="${id}" required>
      <span>${esc(name)}<small>${BANK[id].length} questões</small></span></label>`).join('')}
    </fieldset>`;
}

function startAttempt(values) {
  if (!BANK[values.exam] || !values.aluno.trim() || !values.turma.trim()) return;
  const aluno = values.aluno.trim();
  const turma = values.turma.trim();
  attempt = Object.values(savedAttempts).find(saved => !saved.sent && saved.exam === values.exam &&
    saved.aluno === aluno && saved.turma === turma) || {
      exam: values.exam, aluno, turma, id: crypto.randomUUID(), index: 0,
      answers: {}, events: [], exits: 0, blocks: 0, start: Date.now()
    };
  away = false;
  save();
  play();
}

function student() {
  active = false;
  document.body.classList.remove('exam');
  main.innerHTML = `<h1>História · 7º ano</h1>
    <p>Cada simulado tem sua própria nota. Ao terminar, você pode refazer as questões que errou.</p>
    ${attempt ? `<button id="resume">${attempt.sent ? 'Ver resultado' : 'Continuar tentativa salva'}: ${esc(names[attempt.exam])} · ${esc(attempt.aluno)}</button>` : ''}
    <form id="start">
      <label>Nome completo<input name="aluno" required maxlength="100" autocomplete="name" value="${esc(attempt?.aluno || '')}"></label>
      <label>Série e turma<input name="turma" required maxlength="20" placeholder="Ex.: 7º A" value="${esc(attempt?.turma || '')}"></label>
      ${examChoices()}
      <p>Trocas de aba e saídas da janela são registradas para o professor. Durante a avaliação, cópia e menu de contexto ficam bloqueados.</p>
      <button class="btn btn-primary" type="submit">Iniciar simulado</button>
    </form>
    <p id="message" role="status"></p><button id="home">← Início</button>`;
  document.querySelector('#home').onclick = home;
  if (attempt) {
    document.querySelector('#resume').onclick = () => attempt.sent ? result() : play();
  }
  document.querySelector('#start').onsubmit = event => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.target));
    startAttempt(values);
  };
}

function play() {
  active = true;
  document.body.classList.add('exam');
  const ids = questionIds();
  const question = BANK[attempt.exam][ids[attempt.index]];
  const selected = attempt.answers[attempt.index] || '';
  main.innerHTML = `<small>${esc(names[attempt.exam])} · ${attempt.index + 1}/${ids.length}</small>
    <h2>${esc(question.label)}</h2>
    ${question.source ? `<div class="source">${esc(question.source)}</div>` : ''}
    ${question.images.map((path, index) => `<figure><img class="scan" src="${path}" alt="${esc(question.caption)}">
      <button data-zoom="${path}" type="button">Ampliar imagem ${index + 1}</button>
      <figcaption>${esc(question.caption)}</figcaption></figure>`).join('')}
    ${question.table ? `<div class="table-wrap"><table><caption>Leitura da tabela</caption><thead><tr>${question.table.headers.map(value => `<th scope="col">${esc(value)}</th>`).join('')}</tr></thead>
      <tbody>${question.table.rows.map(row => `<tr>${row.map(value => `<td>${esc(value)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : ''}
    <h3>${esc(question.stem)}</h3><p class="answer-rule">${esc(question.directive)}</p>
    <div class="choices">${question.options.map((option, index) => `<button type="button"
      aria-pressed="${selected.includes(letters[index])}" data-opt="${letters[index]}">
      <b>${letters[index]}</b> ${esc(option)}</button>`).join('')}</div>
    <p id="message" role="status"></p>
    <div class="actions"><button id="previous" ${attempt.index === 0 ? 'disabled' : ''}>Anterior</button>
      <button id="next">${attempt.index === ids.length - 1 ? 'Conferir e entregar' : 'Próxima'}</button></div>
    <small>${esc(question.reference)}</small>
    <p class="note">Saídas registradas: <span id="count">${attempt.exits}</span></p>`;
  main.querySelectorAll('[data-zoom]').forEach(button => {
    button.onclick = () => {
      document.querySelector('#large').src = button.dataset.zoom;
      document.querySelector('#large').style.width = '100%';
      document.querySelector('#zoom').showModal();
    };
  });
  main.querySelectorAll('[data-opt]').forEach(button => {
    button.onclick = () => {
      let selected = attempt.answers[attempt.index] || '';
      const letter = button.dataset.opt;
      if (question.key.length === 1) {
        selected = letter;
      } else if (selected.includes(letter)) {
        selected = selected.replace(letter, '');
      } else if (selected.length < question.key.length) {
        selected += letter;
      } else {
        document.querySelector('#message').textContent = 'Você já marcou duas alternativas. Desmarque uma para trocar.';
        return;
      }
      attempt.answers[attempt.index] = [...selected].sort().join('');
      document.querySelector('#message').textContent = '';
      save();
      main.querySelectorAll('[data-opt]').forEach(option => {
        option.setAttribute('aria-pressed', selected.includes(option.dataset.opt));
      });
    };
  });
  document.querySelector('#previous').onclick = () => { attempt.index--; save(); play(); };
  document.querySelector('#next').onclick = () => {
    if ((attempt.answers[attempt.index] || '').length !== question.key.length) {
      document.querySelector('#message').textContent = question.directive + ' antes de continuar.';
      return;
    }
    if (attempt.index < ids.length - 1) {
      attempt.index++;
      save();
      play();
      return;
    }
    const missing = ids.findIndex((id, index) => (attempt.answers[index] || '').length !== BANK[attempt.exam][id].key.length);
    if (missing >= 0) {
      attempt.index = missing;
      save();
      play();
      document.querySelector('#message').textContent = 'Complete esta resposta antes de entregar.';
      return;
    }
    checkout();
  };
  window.scrollTo(0, 0);
}

function logEvent(type) {
  if (!active || !attempt) return;
  if (type === 'saida') {
    if (away) return;
    away = true;
    attempt.exits++;
    const count = document.querySelector('#count');
    if (count) count.textContent = attempt.exits;
  } else {
    attempt.blocks++;
  }
  attempt.events.push({tipo: type, instante: Date.now(), questao: questionIds()[attempt.index] + 1});
  attempt.events = attempt.events.slice(-150);
  save();
}
window.addEventListener('blur', () => logEvent('saida'));
window.addEventListener('focus', () => { if (!document.hidden) away = false; });
document.addEventListener('visibilitychange', () => {
  if (document.hidden) logEvent('saida');
  else if (document.hasFocus()) away = false;
});
for (const type of ['copy', 'cut', 'contextmenu', 'selectstart', 'dragstart']) {
  document.addEventListener(type, event => {
    if (active) { event.preventDefault(); logEvent(type); }
  });
}
document.addEventListener('keydown', event => {
  if (active && ((event.ctrlKey || event.metaKey) && ['c','x','a','s','p','u'].includes(event.key.toLowerCase()) || event.key === 'PrintScreen')) {
    event.preventDefault();
    logEvent('atalho');
  }
});

function checkout() {
  main.innerHTML = `<h2>Entregar simulado?</h2><p>${esc(names[attempt.exam])}</p>
    <p>${questionIds().length} questões respondidas. Aguarde a confirmação do envio para ver sua nota.</p>
    <div class="actions"><button id="back">Voltar à prova</button><button id="send">Enviar ao professor</button></div>
    <p id="message" role="status"></p>`;
  document.querySelector('#back').onclick = play;
  document.querySelector('#send').onclick = submit;
}

async function submit() {
  if (sending) return;
  sending = true;
  document.querySelector('#send').disabled = true;
  document.querySelector('#back').disabled = true;
  try {
    const questions = questionIds().map(id => BANK[attempt.exam][id]);
    const hits = questions.filter((question, index) => attempt.answers[index] === question.key).length;
    const total = BANK[attempt.exam].length;
    const payload = {
      versao: '7ano-saresp40-v1', sequencia: attempt.seq || 1, grupo: attempt.group || attempt.id,
      anterior: attempt.parent || null, tipo: attempt.parent ? 'revisão' : 'completa',
      itens: questionIds(), avaliacao: attempt.exam, aluno: attempt.aluno, turma: attempt.turma,
      respostas: questions.map((question, index) => ({item: question.label, escolha: attempt.answers[index]})),
      acertos: hits, total: questions.length, nota: Math.round(100 * hits / questions.length) / 10,
      notaAcumulada: Math.round(100 * (total - questions.length + hits) / total) / 10,
      inicio: attempt.start, entrega: Date.now(),
      integridade: {saidas: attempt.exits, bloqueios: attempt.blocks, eventos: attempt.events}
    };
    const response = await fetch(`${root}/${attempt.exam}/${attempt.id}.json`, {
      method: 'PUT', body: JSON.stringify(payload), signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const receipt = await response.json();
    if (receipt?.avaliacao !== attempt.exam) throw new Error('Recebimento sem confirmação');
    active = false;
    attempt.sent = true;
    save();
    result();
  } catch (error) {
    document.querySelector('#message').textContent = 'Entrega não confirmada. Suas respostas continuam salvas neste navegador. Confira a conexão e tente novamente. (' + error.message + ')';
    document.querySelector('#send').disabled = false;
    document.querySelector('#back').disabled = false;
  } finally {
    sending = false;
  }
}

function result() {
  active = false;
  document.body.classList.remove('exam');
  const all = BANK[attempt.exam];
  const ids = questionIds();
  const wrong = ids.filter((id, index) => attempt.answers[index] !== all[id].key);
  const hits = ids.length - wrong.length;
  const grade = (correct, total) => (10 * correct / total).toLocaleString('pt-BR', {maximumFractionDigits: 1});
  main.innerHTML = `<h2>${esc(names[attempt.exam])}</h2>
    <p>${esc(attempt.aluno)} · ${esc(attempt.turma)} · Tentativa ${attempt.seq || 1}</p>
    <h3>Nota desta tentativa: ${grade(hits, ids.length)} / 10</h3>
    <p>${hits} de ${ids.length} acertos. Entrega recebida.</p>
    ${attempt.parent ? `<p>Nota acumulada no simulado: ${grade(all.length - wrong.length, all.length)} / 10, preservando os acertos anteriores.</p>` : ''}
    <form id="choose-next"><h3>Qual simulado você quer fazer agora?</h3>
      <p>Continuar como ${esc(attempt.aluno)} · ${esc(attempt.turma)}</p>
      ${examChoices()}<button type="submit">Iniciar o simulado escolhido</button></form>
    ${wrong.length ? `<button id="retry">Refazer somente as erradas (${wrong.length})</button>
      <h3>Entenda suas respostas</h3>${wrong.map(id => {
        const question = all[id];
        const answer = attempt.answers[ids.indexOf(id)];
        return `<article><h4>${esc(question.label)}</h4><p>${esc(question.stem)}</p>
          <p>Você marcou ${esc(answer.split('').join(' e '))}. A resposta correta é ${esc(question.key.split('').join(' e '))}.</p>
          <p>${esc(question.explanation)}</p></article>`;
      }).join('')}` : '<p>Você acertou todas as questões desta tentativa.</p>'}
    <button id="menu">Escolher outro simulado</button>`;
  if (wrong.length) {
    document.querySelector('#retry').onclick = () => {
      attempt = {
        exam: attempt.exam, aluno: attempt.aluno, turma: attempt.turma,
        group: attempt.group || attempt.id, parent: attempt.id, seq: (attempt.seq || 1) + 1,
        items: wrong, id: crypto.randomUUID(), index: 0, answers: {}, events: [], exits: 0, blocks: 0, start: Date.now()
      };
      away = false;
      save();
      play();
    };
  }
  document.querySelector('#choose-next').onsubmit = event => {
    event.preventDefault();
    startAttempt({exam: new FormData(event.target).get('exam'), aluno: attempt.aluno, turma: attempt.turma});
  };
  document.querySelector('#menu').onclick = student;
  window.scrollTo(0, 0);
}

function teacherLogin() {
  teacher = false;
  main.innerHTML = `<h2>Painel do professor</h2><form id="login">
    <label>Senha do professor<input type="password" name="senha" required autocomplete="current-password"></label>
    <button>Entrar</button></form><p id="message" role="status"></p><button id="home">← Início</button>`;
  document.querySelector('#home').onclick = home;
  document.querySelector('#login').onsubmit = async event => {
    event.preventDefault();
    const input = event.target.elements.senha;
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input.value));
    input.value = '';
    const hash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
    if (hash !== teacherHash) {
      document.querySelector('#message').textContent = 'Senha incorreta.';
      return;
    }
    teacher = true;
    dashboard();
  };
}

function dashboard() {
  if (!teacher) return teacherLogin();
  main.innerHTML = `<h2>Painel do professor · História · 7º ano</h2>
    <label>Simulado<select id="which">${Object.entries(names).map(([id,name]) =>
      `<option value="${id}">${esc(name)}</option>`).join('')}</select></label>
    <button id="refresh">Consultar resultados</button><button id="logout">Sair do painel</button>
    <p>Cada entrega aparece como uma tentativa. A nota da revisão considera as questões refeitas; a nota acumulada inclui os acertos anteriores.</p>
    <p id="status" role="status"></p><div id="results"></div>`;
  document.querySelector('#which').onchange = loadResults;
  document.querySelector('#refresh').onclick = loadResults;
  document.querySelector('#logout').onclick = home;
  loadResults();
}

async function loadResults() {
  if (!teacher) return;
  const request = ++requestNumber;
  const exam = document.querySelector('#which').value;
  document.querySelector('#results').replaceChildren();
  document.querySelector('#status').textContent = 'Consultando…';
  try {
    const response = await fetch(`${root}/${exam}.json`, {cache: 'no-store', signal: AbortSignal.timeout(15000)});
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const rows = Object.values(await response.json() || {}).sort((a,b) => b.entrega - a.entrega);
    if (!teacher || request !== requestNumber) return;
    document.querySelector('#status').textContent = `${rows.length} tentativa(s) neste simulado.`;
    document.querySelector('#results').innerHTML = rows.map(row => `<article>
      <h3>${esc(row.aluno)} · ${esc(row.turma)}</h3>
      <p>Tentativa ${esc(row.sequencia || 1)} · ${esc(row.tipo)} · ${new Date(row.entrega).toLocaleString('pt-BR')}</p>
      <p>Nota desta tentativa: ${esc(row.nota)} / 10 · ${esc(row.acertos)} de ${esc(row.total)} acertos</p>
      <p>Nota acumulada: ${esc(row.notaAcumulada ?? row.nota)} / 10</p>
      <p>Saídas de tela: ${esc(row.integridade?.saidas || 0)} · Bloqueios: ${esc(row.integridade?.bloqueios || 0)}</p>
      <details><summary>Respostas e ocorrências</summary><pre>${esc((row.respostas || []).map(answer =>
        `${answer.item}: ${answer.escolha}`).join('\n'))}</pre>
        <p>Início do percurso: ${esc(row.grupo)}</p>
        <pre>${esc((row.integridade?.eventos || []).map(event =>
          `${new Date(event.instante).toLocaleTimeString('pt-BR')} · ${event.tipo} · questão ${event.questao}`).join('\n'))}</pre></details>
      </article>`).join('');
  } catch (error) {
    if (teacher && request === requestNumber) document.querySelector('#status').textContent =
      'Consulta não concluída. Confira a conexão e as permissões do banco. (' + error.message + ')';
  }
}

home();
