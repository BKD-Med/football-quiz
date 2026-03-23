// ============================================================
// script.js — Football Quiz Game Logic
// ============================================================

// ── i18n: UI text translations ──────────────────────────────
const I18N = {
  en: {
    tagline:       "TEST YOUR FOOTBALL KNOWLEDGE",
    chooseLang:    "CHOOSE LANGUAGE",
    chooseDiff:    "CHOOSE DIFFICULTY",
    easy:          "Easy",
    medium:        "Medium",
    hard:          "Hard",
    kickoff:       "KICK OFF",
    leaderboard:   "Leaderboard",
    score:         "Score",
    lives:         "Lives",
    question:      "QUESTION",
    correct:       "⚽ CORRECT!",
    wrong:         "❌ WRONG!",
    timeUp:        "⏱ TIME UP!",
    gameOver:      "GAME OVER",
    youScored:     "YOU SCORED",
    outOf:         "/ 8",
    correct_c:     "Correct",
    wrong_c:       "Wrong",
    accuracy:      "Accuracy",
    playAgain:     "PLAY AGAIN",
    showBoard:     "LEADERBOARD",
    backHome:      "HOME",
    topScores:     "TOP SCORES",
    noScores:      "No scores yet. Be the first!",
    enterName:     "Enter your name to save score...",
    save:          "SAVE",
    skip:          "SKIP",
    diff_easy:     "easy",
    diff_medium:   "medium",
    diff_hard:     "hard",
  },
  fr: {
    tagline:       "TESTEZ VOS CONNAISSANCES",
    chooseLang:    "CHOISIR LA LANGUE",
    chooseDiff:    "CHOISIR LA DIFFICULTÉ",
    easy:          "Facile",
    medium:        "Moyen",
    hard:          "Difficile",
    kickoff:       "COUP D'ENVOI",
    leaderboard:   "Classement",
    score:         "Points",
    lives:         "Vies",
    question:      "QUESTION",
    correct:       "⚽ CORRECT !",
    wrong:         "❌ FAUX !",
    timeUp:        "⏱ TEMPS ÉCOULÉ !",
    gameOver:      "PARTIE TERMINÉE",
    youScored:     "VOTRE SCORE",
    outOf:         "/ 8",
    correct_c:     "Bonnes",
    wrong_c:       "Mauvaises",
    accuracy:      "Précision",
    playAgain:     "REJOUER",
    showBoard:     "CLASSEMENT",
    backHome:      "ACCUEIL",
    topScores:     "TOP SCORES",
    noScores:      "Aucun score. Soyez le premier !",
    enterName:     "Entrez votre nom...",
    save:          "ENREGISTRER",
    skip:          "PASSER",
    diff_easy:     "facile",
    diff_medium:   "moyen",
    diff_hard:     "difficile",
  },
  ar: {
    tagline:       "اختبر معلوماتك الكروية",
    chooseLang:    "اختر اللغة",
    chooseDiff:    "اختر المستوى",
    easy:          "سهل",
    medium:        "متوسط",
    hard:          "صعب",
    kickoff:       "ابدأ اللعبة",
    leaderboard:   "لوحة المتصدرين",
    score:         "النقاط",
    lives:         "الأرواح",
    question:      "سؤال",
    correct:       "⚽ صحيح!",
    wrong:         "❌ خطأ!",
    timeUp:        "⏱ انتهى الوقت!",
    gameOver:      "انتهت اللعبة",
    youScored:     "نقاطك",
    outOf:         "/ 8",
    correct_c:     "صحيح",
    wrong_c:       "خطأ",
    accuracy:      "الدقة",
    playAgain:     "العب مرة أخرى",
    showBoard:     "المتصدرون",
    backHome:      "الرئيسية",
    topScores:     "أعلى النقاط",
    noScores:      "لا توجد نتائج بعد. كن الأول!",
    enterName:     "أدخل اسمك لحفظ النتيجة...",
    save:          "حفظ",
    skip:          "تخطى",
    diff_easy:     "سهل",
    diff_medium:   "متوسط",
    diff_hard:     "صعب",
  }
};

// ── Game State ───────────────────────────────────────────────
const STATE = {
  lang:       'en',
  difficulty: 'easy',
  questions:  [],
  qIndex:     0,
  score:      0,
  lives:      3,
  correct:    0,
  wrong:      0,
  timerInt:   null,
  timeLeft:   10,
  answered:   false,
  locked:     false,
};

// Scoring rules per difficulty
const SCORE_MAP = { easy: 10, medium: 20, hard: 30 };
const TIME_BONUS = { easy: 3, medium: 5, hard: 8 }; // bonus per second left

// ── DOM References ───────────────────────────────────────────
const $ = id => document.getElementById(id);

// ── Sound effects (Web Audio API, no files needed) ───────────
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function initAudio() {
  if (!audioCtx) audioCtx = new AudioCtx();
}

function playTone(type) {
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'correct') {
      // Happy ascending arpeggio
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523, audioCtx.currentTime);
      osc.frequency.setValueAtTime(659, audioCtx.currentTime + 0.1);
      osc.frequency.setValueAtTime(784, audioCtx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
      osc.start(); osc.stop(audioCtx.currentTime + 0.5);
    } else if (type === 'wrong') {
      // Low buzzer
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'tick') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.start(); osc.stop(audioCtx.currentTime + 0.08);
    } else if (type === 'win') {
      // Fanfare
      [523,659,784,1047].forEach((f, i) => {
        const o2 = audioCtx.createOscillator();
        const g2 = audioCtx.createGain();
        o2.connect(g2); g2.connect(audioCtx.destination);
        o2.type = 'sine';
        o2.frequency.setValueAtTime(f, audioCtx.currentTime + i * 0.12);
        g2.gain.setValueAtTime(0.18, audioCtx.currentTime + i * 0.12);
        g2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.12 + 0.3);
        o2.start(audioCtx.currentTime + i * 0.12);
        o2.stop(audioCtx.currentTime + i * 0.12 + 0.3);
      });
    }
  } catch(e) { /* Audio context not available */ }
}

// ── Utility helpers ──────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function t(key) { return I18N[STATE.lang][key] || key; }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

// ── Apply language to UI ─────────────────────────────────────
function applyLang() {
  // RTL for Arabic
  document.body.classList.toggle('rtl', STATE.lang === 'ar');

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
}

// ── HOME SCREEN ──────────────────────────────────────────────
function initHome() {
  applyLang();

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === STATE.lang);
    btn.onclick = () => {
      STATE.lang = btn.dataset.lang;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyLang();
    };
  });

  // Difficulty buttons
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.diff === STATE.difficulty);
    btn.onclick = () => {
      STATE.difficulty = btn.dataset.diff;
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
  });

  $('btn-start').onclick = startGame;
  $('btn-home-lb').onclick = showLeaderboard;
}

// ── START GAME ───────────────────────────────────────────────
function startGame() {
  initAudio(); // Unlock audio context on user gesture
  const pool = QUESTIONS[STATE.lang][STATE.difficulty];
  STATE.questions = shuffle(pool).slice(0, 8); // 8 questions per round
  STATE.qIndex   = 0;
  STATE.score    = 0;
  STATE.lives    = 3;
  STATE.correct  = 0;
  STATE.wrong    = 0;

  showScreen('screen-game');
  renderQuestion();
}

// ── RENDER QUESTION ──────────────────────────────────────────
function renderQuestion() {
  const q = STATE.questions[STATE.qIndex];
  STATE.answered = false;

  // Progress bar
  const pct = (STATE.qIndex / STATE.questions.length) * 100;
  $('progress-bar').style.width = pct + '%';

  // HUD
  $('hud-score').textContent = STATE.score;
  $('hud-q').textContent = `${STATE.qIndex + 1}/${STATE.questions.length}`;
  renderHearts();

  // Question label & text
  $('q-label').textContent = `${t('question')} ${STATE.qIndex + 1}`;
  $('q-diff-label').textContent = t('diff_' + STATE.difficulty).toUpperCase();
  $('question-text').textContent = q.q;

  // Answer buttons
  const opts = ['A', 'B', 'C', 'D'];
  const btns = document.querySelectorAll('.ans-btn');
  btns.forEach((btn, i) => {
    btn.className = 'ans-btn';
    btn.disabled = false;
    btn.querySelector('.opt-letter').textContent = opts[i];
    btn.querySelector('.opt-text').textContent = q.options[i];
    btn.onclick = () => handleAnswer(i);
  });

  // Start timer
  startTimer();
}

// ── HEARTS ───────────────────────────────────────────────────
function renderHearts() {
  const wrap = $('hearts');
  wrap.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');
    span.className = 'heart' + (i >= STATE.lives ? ' lost' : '');
    span.textContent = i < STATE.lives ? '❤️' : '🖤';
    wrap.appendChild(span);
  }
}

// ── TIMER ────────────────────────────────────────────────────
function startTimer() {
  clearInterval(STATE.timerInt);
  STATE.timeLeft = 10;
  updateTimerDisplay();

  STATE.timerInt = setInterval(() => {
    STATE.timeLeft--;
    updateTimerDisplay();
    if (STATE.timeLeft <= 3) playTone('tick');
    if (STATE.timeLeft <= 0) {
      clearInterval(STATE.timerInt);
      handleTimeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const CIRCUMFERENCE = 188.5; // 2π × 30
  const fill = $('timer-fill');
  const offset = CIRCUMFERENCE * (1 - STATE.timeLeft / 10);
  fill.style.strokeDashoffset = offset;
  $('timer-num').textContent = STATE.timeLeft;

  fill.classList.remove('warning', 'danger');
  if (STATE.timeLeft <= 3) fill.classList.add('danger');
  else if (STATE.timeLeft <= 6) fill.classList.add('warning');
}

function handleTimeUp() {
  if (STATE.answered) return;
  STATE.answered = true;
  showFeedback('timeUp', false);
  revealCorrect();
  loseLife();
  setTimeout(nextQuestion, 1400);
}

// ── ANSWER HANDLING ───────────────────────────────────────────
function handleAnswer(index) {
  if (STATE.answered || STATE.locked) return;
  STATE.answered = true;
  clearInterval(STATE.timerInt);

  const q = STATE.questions[STATE.qIndex];
  const btns = document.querySelectorAll('.ans-btn');
  btns.forEach(b => b.disabled = true);

  if (index === q.answer) {
    // Correct
    btns[index].classList.add('correct');
    const bonus = STATE.timeLeft * TIME_BONUS[STATE.difficulty];
    const pts = SCORE_MAP[STATE.difficulty] + bonus;
    STATE.score += pts;
    STATE.correct++;
    $('hud-score').textContent = STATE.score;
    showFeedback('correct', true);
    playTone('correct');
  } else {
    // Wrong
    btns[index].classList.add('wrong');
    revealCorrect();
    STATE.wrong++;
    loseLife();
    showFeedback('wrong', false);
    playTone('wrong');
  }

  setTimeout(nextQuestion, 1400);
}

function revealCorrect() {
  const q = STATE.questions[STATE.qIndex];
  document.querySelectorAll('.ans-btn')[q.answer].classList.add('correct');
}

function loseLife() {
  STATE.lives--;
  renderHearts();
  if (STATE.lives <= 0) {
    clearInterval(STATE.timerInt);
    setTimeout(endGame, 1200);
  }
}

// ── FEEDBACK TOAST ────────────────────────────────────────────
function showFeedback(type, isCorrect) {
  const toast = $('feedback-toast');
  toast.textContent = t(type);
  toast.className = 'feedback-toast show ' + (isCorrect ? 'correct' : 'wrong');
  setTimeout(() => { toast.classList.remove('show'); }, 1200);
}

// ── NEXT QUESTION ─────────────────────────────────────────────
function nextQuestion() {
  if (STATE.lives <= 0) return;
  STATE.qIndex++;
  if (STATE.qIndex >= STATE.questions.length) {
    endGame();
  } else {
    renderQuestion();
  }
}

// ── END GAME ──────────────────────────────────────────────────
function endGame() {
  clearInterval(STATE.timerInt);
  showScreen('screen-result');

  const total = STATE.questions.length;
  const acc = total > 0 ? Math.round((STATE.correct / total) * 100) : 0;

  // Trophy based on performance
  const trophy = acc >= 80 ? '🏆' : acc >= 50 ? '🥈' : '⚽';
  $('result-trophy').textContent = trophy;
  $('result-title').textContent = t('gameOver');
  $('result-score-display').innerHTML =
    `${STATE.score}<span>${t('outOf').replace('/ 8', '')}</span>`;
  $('stat-correct').textContent = STATE.correct;
  $('stat-wrong').textContent = STATE.wrong;
  $('stat-acc').textContent = acc + '%';

  if (acc >= 80) { playTone('win'); launchConfetti(); }

  $('btn-play-again').onclick = startGame;
  $('btn-show-lb').onclick = () => {
    saveScore();
    showLeaderboard();
  };
  $('btn-result-home').onclick = goHome;
  $('result-name-input').placeholder = t('enterName');
}

// ── LEADERBOARD ───────────────────────────────────────────────
function saveScore() {
  const name = $('result-name-input').value.trim() || 'Anonymous';
  const entry = {
    name,
    score: STATE.score,
    difficulty: STATE.difficulty,
    lang: STATE.lang,
    date: new Date().toLocaleDateString()
  };
  const lb = getLeaderboard();
  lb.push(entry);
  lb.sort((a, b) => b.score - a.score);
  lb.splice(10); // keep top 10
  localStorage.setItem('fq_leaderboard', JSON.stringify(lb));
}

function getLeaderboard() {
  try { return JSON.parse(localStorage.getItem('fq_leaderboard')) || []; }
  catch { return []; }
}

function showLeaderboard() {
  showScreen('screen-lb');
  const lb = getLeaderboard();
  const list = $('lb-list');
  $('lb-title-text').textContent = t('topScores');

  if (lb.length === 0) {
    list.innerHTML = `<li class="lb-empty">${t('noScores')}</li>`;
    return;
  }

  list.innerHTML = lb.map((e, i) => `
    <li class="lb-item">
      <span class="lb-rank">${['🥇','🥈','🥉'][i] || (i + 1)}</span>
      <span class="lb-name">${escapeHtml(e.name)}</span>
      <span class="lb-diff">${e.difficulty}</span>
      <span class="lb-pts">${e.score} pts</span>
    </li>
  `).join('');

  $('btn-lb-home').onclick = goHome;
  $('btn-lb-play').onclick = () => { showScreen('screen-home'); initHome(); };
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ── HOME ──────────────────────────────────────────────────────
function goHome() {
  showScreen('screen-home');
  initHome();
}

// ── CONFETTI ──────────────────────────────────────────────────
function launchConfetti() {
  const colors = ['#00e676','#ffd600','#00bcd4','#ff1744','#fff'];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      animation-duration: ${1.5 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 0.8}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

// ── BOOT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showScreen('screen-home');
  initHome();
});
