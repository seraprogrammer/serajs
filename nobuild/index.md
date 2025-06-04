# 🌐 No-Build, No-Dependencies Setup with SeraJS

SeraJS supports direct use in the browser with no bundlers, no build steps, and zero dependencies. This guide shows you how to use SeraJS in a raw HTML file using native ES modules.

## ✅ What You Get

* ❌ No need for Webpack, Vite, or Babel
* ✅ Pure native import from CDN (e.g. unpkg.com)
* ⚡ Fast, minimal and reactive UI with signals and effects

## 🗂 Example: Basic Counter Component

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sera js 😎</title>
  </head>
  <body>
    <script type="module">
      import { h, setSignal, setEffect } from "//unpkg.com/serajs";

      function Hello() {
        const [count, setCount] = setSignal(0);

        setEffect(() => {
          console.log(count()); // Runs when count changes
        });

        return h(
          "div",
          null,
          h("h1", null, "Hello World!"),
          h("p", { style: { color: "red" } }, "Do you Like Serajs?"),
          h("h1", null, () => `Count: ${count()}`),
          h(
            "button",
            { onclick: () => setCount(count() + 1) },
            "Increase Count"
          )
        );
      }

      const root = document.body;
      root.appendChild(Hello());
    </script>
  </body>
</html>
```

## 🔍 Explanation

* ✅ `import { h, setSignal, setEffect } from "//unpkg.com/serajs";`
* `h(tag, props, ...children)`: Creates a virtual DOM node (like React's `createElement`).
* `setSignal(value)`: Creates a reactive state signal.

  * Returns `[getter, setter]`.
* `setEffect(callback)`: Runs a reactive effect whenever any accessed signal changes.

## 💡 Why This Is Cool

* ⚡ Instant load in the browser
* 🧪 Perfect for experiments, CodePens, or quick demos
* 🎒 Great for teaching or learning reactivity without overhead
* 🚀 Production-ready with tiny 1.25kb code size
* 💼 Practical for real apps where bundle size matters

## 🔗 Tips

* For local dev, use a live server or open in Chrome with the `--allow-file-access-from-files` flag (if importing modules from local paths).
* Always use `type="module"` for script tags when using native ES module imports.

## 📁 Zero-Setup Folder Structure

```
/your-project
  └── index.html
```

That's it! No `package.json`, no `node_modules`.

## 🧪 Try It Yourself

Paste the above code into an `index.html` file and open it in your browser.


## Here is a game example that you can make using Sera.js.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sera.js Target Game 🎯</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        overflow: hidden;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .header {
        text-align: center;
        margin-bottom: 20px;
        z-index: 10;
      }

      .title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        background: linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7f, #4d9de0);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient 3s ease infinite;
      }

      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .stats {
        display: flex;
        gap: 30px;
        justify-content: center;
        margin-bottom: 20px;
      }

      .stat-item {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 10px 20px;
        text-align: center;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }

      .stat-label {
        font-size: 0.9rem;
        opacity: 0.8;
        margin-bottom: 5px;
      }

      .stat-value {
        font-size: 1.5rem;
        font-weight: bold;
      }

      #game {
        position: relative;
        width: 90vw;
        height: 70vh;
        max-width: 1200px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(15px);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
      }

      .target {
        position: absolute;
        width: 60px;
        height: 60px;
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2rem;
        color: white;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        animation: pulse 2s infinite, float 3s ease-in-out infinite;
      }

      .target:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
      }

      .target:active {
        transform: scale(0.95);
      }

      @keyframes pulse {
        0%, 100% { box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(255, 255, 255, 0.7); }
        50% { box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3), 0 0 0 10px rgba(255, 255, 255, 0); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .target.normal {
        background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      }

      .target.bonus {
        background: linear-gradient(135deg, #ffd93d, #f39c12);
        animation: pulse 1s infinite, float 2s ease-in-out infinite, spin 4s linear infinite;
      }

      .target.speed {
        background: linear-gradient(135deg, #6bcf7f, #27ae60);
        width: 45px;
        height: 45px;
        animation: pulse 0.8s infinite, float 1.5s ease-in-out infinite, fastMove 2s linear infinite;
      }

      @keyframes spin {
        from { transform: rotate(0deg) translateY(0px); }
        25% { transform: rotate(90deg) translateY(-5px); }
        50% { transform: rotate(180deg) translateY(0px); }
        75% { transform: rotate(270deg) translateY(-5px); }
        to { transform: rotate(360deg) translateY(0px); }
      }

      @keyframes fastMove {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-15px) scale(1.05); }
      }

      .click-effect {
        position: absolute;
        pointer-events: none;
        width: 30px;
        height: 30px;
        border: 2px solid #fff;
        border-radius: 50%;
        animation: clickRipple 0.6s ease-out forwards;
      }

      @keyframes clickRipple {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(4);
          opacity: 0;
        }
      }

      .score-popup {
        position: absolute;
        font-size: 1.5rem;
        font-weight: bold;
        color: #ffd93d;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        pointer-events: none;
        animation: scoreFloat 1s ease-out forwards;
        z-index: 100;
      }

      @keyframes scoreFloat {
        0% {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translateY(-50px) scale(1.2);
          opacity: 0;
        }
      }

      .game-over {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(20px);
        border-radius: 20px;
        padding: 30px;
        text-align: center;
        z-index: 1000;
        border: 2px solid rgba(255, 255, 255, 0.2);
      }

      .restart-btn {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 10px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        margin-top: 15px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }

      .restart-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }

      .combo-indicator {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 10px;
        padding: 10px 15px;
        font-weight: bold;
        transform: scale(0);
        transition: all 0.3s ease;
      }

      .combo-indicator.show {
        transform: scale(1);
        animation: comboGlow 0.5s ease-in-out;
      }

      @keyframes comboGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
        50% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.6); }
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="title">🎯 Target Master</div>
      <div class="stats">
        <div class="stat-item">
          <div class="stat-label">Score</div>
          <div class="stat-value" id="score">0</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Time</div>
          <div class="stat-value" id="timer">60</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Combo</div>
          <div class="stat-value" id="combo">0</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Accuracy</div>
          <div class="stat-value" id="accuracy">100%</div>
        </div>
      </div>
    </div>

    <div id="game">
      <div class="combo-indicator" id="comboIndicator">
        <span id="comboText">COMBO x1</span>
      </div>
    </div>

    <script type="module">
      import { h, setSignal, setEffect } from "//unpkg.com/serajs";

      function Game() {
        const [score, setScore] = setSignal(0);
        const [timeLeft, setTimeLeft] = setSignal(60);
        const [combo, setCombo] = setSignal(0);
        const [hits, setHits] = setSignal(0);
        const [misses, setMisses] = setSignal(0);
        const [gameActive, setGameActive] = setSignal(true);
        
        const gameArea = document.getElementById("game");
        const comboIndicator = document.getElementById("comboIndicator");
        
        let targets = [];
        let gameTimer;
        let targetSpawnTimer;

        function getRandomPosition() {
          const padding = 70;
          const x = Math.random() * (gameArea.clientWidth - padding * 2) + padding;
          const y = Math.random() * (gameArea.clientHeight - padding * 2) + padding;
          return { x, y };
        }

        function createClickEffect(x, y) {
          const effect = document.createElement("div");
          effect.className = "click-effect";
          effect.style.left = `${x - 15}px`;
          effect.style.top = `${y - 15}px`;
          gameArea.appendChild(effect);
          
          setTimeout(() => {
            if (gameArea.contains(effect)) {
              gameArea.removeChild(effect);
            }
          }, 600);
        }

        function showScorePopup(x, y, points) {
          const popup = document.createElement("div");
          popup.className = "score-popup";
          popup.textContent = `+${points}`;
          popup.style.left = `${x}px`;
          popup.style.top = `${y}px`;
          gameArea.appendChild(popup);
          
          setTimeout(() => {
            if (gameArea.contains(popup)) {
              gameArea.removeChild(popup);
            }
          }, 1000);
        }

        function updateComboIndicator() {
          const comboValue = combo();
          if (comboValue > 1) {
            comboIndicator.classList.add("show");
            document.getElementById("comboText").textContent = `COMBO x${comboValue}`;
          } else {
            comboIndicator.classList.remove("show");
          }
        }

        function spawnTarget() {
          if (!gameActive()) return;

          const target = document.createElement("div");
          target.className = "target";
          
          const position = getRandomPosition();
          target.style.left = `${position.x}px`;
          target.style.top = `${position.y}px`;

          // Random target types
          const rand = Math.random();
          let targetType = "normal";
          let points = 10;
          
          if (rand < 0.1) {
            targetType = "bonus";
            target.classList.add("bonus");
            target.textContent = "★";
            points = 50;
          } else if (rand < 0.25) {
            targetType = "speed";
            target.classList.add("speed");
            target.textContent = "⚡";
            points = 25;
          } else {
            target.classList.add("normal");
            target.textContent = "🎯";
          }

          target.onclick = (e) => {
            e.stopPropagation();
            
            const currentCombo = combo() + 1;
            setCombo(currentCombo);
            setHits(hits() + 1);
            
            const totalPoints = points * Math.max(1, Math.floor(currentCombo / 3));
            setScore(score() + totalPoints);
            
            createClickEffect(e.clientX - gameArea.offsetLeft, e.clientY - gameArea.offsetTop);
            showScorePopup(position.x, position.y, totalPoints);
            
            gameArea.removeChild(target);
            targets = targets.filter(t => t !== target);
            
            updateComboIndicator();
          };

          // Auto-remove target after timeout
          const timeout = targetType === "speed" ? 1500 : targetType === "bonus" ? 3000 : 2500;
          setTimeout(() => {
            if (gameArea.contains(target)) {
              gameArea.removeChild(target);
              targets = targets.filter(t => t !== target);
              setCombo(0); // Reset combo on miss
              updateComboIndicator();
            }
          }, timeout);

          gameArea.appendChild(target);
          targets.push(target);
        }

        function handleMiss(e) {
          if (e.target === gameArea) {
            setMisses(misses() + 1);
            setCombo(0);
            updateComboIndicator();
            createClickEffect(e.clientX - gameArea.offsetLeft, e.clientY - gameArea.offsetTop);
          }
        }

        function endGame() {
          setGameActive(false);
          clearInterval(gameTimer);
          clearInterval(targetSpawnTimer);
          
          // Clear all targets
          targets.forEach(target => {
            if (gameArea.contains(target)) {
              gameArea.removeChild(target);
            }
          });
          
          // Show game over screen
          const gameOver = document.createElement("div");
          gameOver.className = "game-over";
          gameOver.innerHTML = `
            <h2>🎯 Game Over!</h2>
            <p style="margin: 15px 0;">Final Score: <strong>${score()}</strong></p>
            <p style="margin: 10px 0;">Accuracy: <strong>${Math.round((hits() / Math.max(1, hits() + misses())) * 100)}%</strong></p>
            <p style="margin: 10px 0;">Best Combo: <strong>x${combo()}</strong></p>
            <button class="restart-btn" onclick="location.reload()">Play Again</button>
          `;
          gameArea.appendChild(gameOver);
        }

        // Game timer
        gameTimer = setInterval(() => {
          const newTime = timeLeft() - 1;
          setTimeLeft(newTime);
          
          if (newTime <= 0) {
            endGame();
          }
        }, 1000);

        // Target spawning
        targetSpawnTimer = setInterval(() => {
          const maxTargets = Math.min(5, Math.floor(score() / 100) + 2);
          if (targets.length < maxTargets) {
            spawnTarget();
          }
        }, 800);

        // Event listeners
        gameArea.addEventListener('click', handleMiss);

        // Effects for updating UI
        setEffect(() => {
          document.getElementById("score").textContent = score();
        });

        setEffect(() => {
          document.getElementById("timer").textContent = timeLeft();
        });

        setEffect(() => {
          document.getElementById("combo").textContent = combo();
        });

        setEffect(() => {
          const total = hits() + misses();
          const accuracy = total === 0 ? 100 : Math.round((hits() / total) * 100);
          document.getElementById("accuracy").textContent = `${accuracy}%`;
        });

        // Start the game
        setTimeout(() => spawnTarget(), 500);

        return h("div", null);
      }

      // Initialize game
      const root = document.body;
      root.appendChild(Game());
    </script>
  </body>
</html>

```

