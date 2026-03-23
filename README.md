# ⚽ Football Quiz Game

A fully playable, multi-language football trivia quiz with beautiful stadium-night UI.

---

## 📁 Folder Structure

```
FootballQuiz/
├── index.html       ← Main entry point (open this in browser)
├── style.css        ← All styles (stadium-night theme)
├── script.js        ← Game logic (timer, scoring, lives, leaderboard)
├── questions.js     ← All quiz questions (EN / FR / AR × 3 difficulties)
└── README.md        ← This file
```

---

## 🚀 How to Run

### Option 1 — Double-click (simplest)
1. Download / unzip the `FootballQuiz` folder.
2. Double-click `index.html`.
3. It opens in your default browser. You're done!

### Option 2 — VS Code Live Server (recommended for development)
1. Open the folder in VS Code.
2. Right-click `index.html` → **Open with Live Server**.

### Option 3 — Python quick server
```bash
cd FootballQuiz
python -m http.server 8080
# Visit http://localhost:8080
```

---

## 🎮 How to Play

| Step | Action |
|------|--------|
| 1 | Pick a language (🇬🇧 English / 🇫🇷 French / 🇩🇿 Arabic) |
| 2 | Choose difficulty: 🌱 Easy · 🔥 Medium · 💀 Hard |
| 3 | Press **KICK OFF** |
| 4 | Answer each question before the 10-second timer runs out |
| 5 | You have **3 lives** — wrong answers or timeouts cost a life |
| 6 | Answer all 8 questions or lose all lives to see your results |
| 7 | Enter your name and check the **Leaderboard** |

---

## ⚙️ Scoring

| Difficulty | Base Points | Time Bonus (per second left) |
|------------|-------------|-------------------------------|
| Easy       | 10 pts      | +3 pts/sec                    |
| Medium     | 20 pts      | +5 pts/sec                    |
| Hard       | 30 pts      | +8 pts/sec                    |

Max possible score: **Hard** × 8 questions × (30 + 10×8) = ~880 pts

---

## ✏️ How to Add / Edit Questions

Open `questions.js`. Questions are organised as:
```
QUESTIONS[language][difficulty] = [ { q, options, answer }, ... ]
```

Example:
```javascript
{
  q: "Who won the 2022 World Cup?",
  options: ["France", "Brazil", "Argentina", "Germany"],
  answer: 2   // ← zero-based index of the correct option
}
```

- `answer: 0` = first option, `answer: 1` = second, etc.
- Add as many questions as you like — the game randomly picks 8 per round.
- Supported languages: `en`, `fr`, `ar`
- Supported difficulties: `easy`, `medium`, `hard`

---

## 🌍 Languages Supported

| Code | Language | Direction |
|------|----------|-----------|
| `en` | English  | LTR       |
| `fr` | French   | LTR       |
| `ar` | Arabic   | RTL (auto)|

---

## 🔊 Sound Effects

Generated entirely via the **Web Audio API** — no audio files required:
- ✅ Correct answer → ascending arpeggio
- ❌ Wrong answer → low buzzer
- ⏱ Last 3 seconds → tick sound
- 🏆 High score → victory fanfare

---

## 📱 Mobile Support

- Fully responsive layout
- Touch-friendly 44px+ button targets
- Font scales with viewport width
- RTL layout for Arabic

---

## 🏆 Leaderboard

Scores are stored in **localStorage** (no backend needed).  
Top 10 scores are kept, sorted by points descending.  
To reset the leaderboard: open DevTools → Application → Local Storage → delete `fq_leaderboard`.
