# Memorycard_game

🎮 Overview
A fully responsive Memory Matching Game built with HTML, CSS, and JavaScript. Players flip cards to find 8 matching pairs across a 4x4 grid. Features smooth 3D flip animations, shuffle functionality, match detection, and restart capability.

✨ Features
✅ 16 cards (8 matching pairs) in 4x4 responsive grid

✅ Smooth 3D flip animations with CSS transforms

✅ Automatic shuffle on start and restart

✅ Smart matching - compares image sources

✅ Mismatch feedback - shake animation + auto flip-back

✅ Win detection - alert when all 8 pairs found

✅ Restart button - resets and reshuffles

✅ Mobile responsive - works on all devices

✅ No frameworks - pure vanilla JavaScript DOM manipulation

🛠 Tech Stack
text
HTML5          - Semantic structure + responsive layout
CSS3           - CSS Grid, 3D transforms, animations  
JavaScript ES6 - DOM manipulation, event handling, game logic
📱 Screenshots
text
Desktop View              | Mobile View
──────────────────────────┼──────────────────
┌─────────────────────┐   │ ┌─────────────┐
│  🧠 Memory Game     │   │ │ 🧠 Memory  │
│  [RESTART]          │   │ │ [RESTART] │
│  ┌──┐ ┌──┐ ┌──┐    │   │ │ ┌──┐┌──┐ │
│  │  │ │  │ │  │ ... │   │ │ │?││?│ │
│  └──┘ └──┘ └──┘    │   │ │ └──┘└──┘ │
└─────────────────────┘   │ └─────────────┘
🚀 Quick Setup
bash
# 1. Download all files
# 2. Add your images to assets/ folder (img1.avif - img8.avif)
# 3. Open index.html in any browser
# NO build tools required!
3 seconds setup → instant playable game

🎯 How To Play
Cards auto-shuffle when game starts

Click any card to flip (max 2 cards at once)

MATCH: Both cards stay flipped ✅

MISMATCH: Cards shake → flip back after 1 second ❌

WIN: Match all 8 pairs → celebration alert! 🎉

RESTART: Click button to shuffle + play again

🏗 Project Structure
text
memory-game/
│
├── index.html       # Game layout + structure
├── style.css        # Responsive design + animations
├── script.js        # Game logic + DOM manipulation
├── assets/          # Your 8 image pairs
│   ├── img1.avif    # Pair appears twice
│   ├── img2.avif
│   └── ... img8.avif
└── README.md        # This file!
🔧 Customization Guide
Want to change?	Edit this file
Colors/gradients	style.css - .card-front background
Card size	style.css - .game-board max-width
Images	index.html - replace src="assets/img1.avif"
Win message	script.js - alert('You won!')
Shake time	script.js - setTimeout(..., 1000)
📊 Game Logic Flow
text
graph TD
    A[Page Load] --> B[Shuffle Cards]
    B --> C[Player Click #1]
    C --> D[Flip Card 1]
    D --> E[Player Click #2]
    E --> F{img1 === img2?}
    F -->|YES| G[Keep Flipped<br/>matchedPairs++]
    F -->|NO| H[Shake + Flip Back<br/>1 second delay]
    G --> I{matchedPairs === 8?}
    I -->|YES| J[WIN!]
    I -->|NO| K[Ready for next pair]
    H --> K
    K --> C
🎓 Learning Outcomes
DOM Manipulation: querySelectorAll, event listeners

CSS 3D Transforms: perspective, rotateY, backface-visibility

Game State: Track flipped cards, matches, lock state

Async JS: setTimeout for delays/animations

Responsive Design: CSS Grid + media queries

📈 Portfolio Ready
text
✅ Production-ready code
✅ Professional documentation  
✅ Mobile responsive
✅ Clean architecture
✅ No dependencies

🤝 Author
Indumathi - Full-Stack Developer
Technologies: HTML, CSS, JavaScript DOM
Date: January 2026

🚀 Quick Setup
bash
# 1. Download all files
# 2. Add your images to assets/ folder (img1.avif - img8.avif)
# 3. Open index.html in any browser
# NO build tools required!


🎮 Open index.html → Play immediately!


🎯 How To Play

Cards auto-shuffle when game starts

Click any card to flip (max 2 cards at once)

MATCH: Both cards stay flipped ✅

MISMATCH: Cards shake → flip back after 1 second ❌

WIN: Match all 8 pairs → celebration alert! 🎉

RESTART: Click button to shuffle + play again
