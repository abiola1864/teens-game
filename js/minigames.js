// MINI-GAMES FOR BONUS POINTS

const MiniGames = {
    currentGame: null,
    
    /**
     * Decide which mini-game to show (if any)
     */
    shouldShowMiniGame() {
        const rand = Math.random();
        
        if (rand < CONFIG.MINIGAME_CHANCES.DICE) {
            return 'dice';
        } else if (rand < CONFIG.MINIGAME_CHANCES.DICE + CONFIG.MINIGAME_CHANCES.SPIN_WHEEL) {
            return 'spin';
        } else if (rand < CONFIG.MINIGAME_CHANCES.DICE + CONFIG.MINIGAME_CHANCES.SPIN_WHEEL + CONFIG.MINIGAME_CHANCES.MEMORY) {
            return 'memory';
        }
        
        return null;
    },
    
    /**
     * Show the appropriate mini-game
     */
    showMiniGame(gameType, container) {
        this.currentGame = gameType;
        
        switch(gameType) {
            case 'dice':
                this.showDiceGame(container);
                break;
            case 'spin':
                this.showSpinWheel(container);
                break;
            case 'memory':
                this.showMemoryGame(container);
                break;
        }
    },
    
    /**
     * DICE GAME - Roll for bonus points
     */
    showDiceGame(container) {
        container.innerHTML = `
            <div class="mini-game">
                <h3>🎲 Roll for Bonus Points! 🎲</h3>
                <p>Click the dice to win 5-30 bonus points!</p>
                <div class="dice" id="dice" onclick="MiniGames.rollDice()">
                    <span style="font-size: 2em;">🎲</span>
                </div>
                <p id="dice-result" style="font-weight: bold; color: #667eea; margin-top: 10px;"></p>
            </div>
        `;
        container.style.display = 'block';
    },
    
    rollDice() {
        const dice = document.getElementById('dice');
        const result = document.getElementById('dice-result');
        
        // Disable clicking during roll
        dice.onclick = null;
        dice.classList.add('rolling');
        
        // Animate for 1 second
        let rollCount = 0;
        const rollInterval = setInterval(() => {
            const randomNum = Utils.randomInt(1, 6);
            dice.innerHTML = `<span style="font-size: 2em;">${randomNum}</span>`;
            rollCount++;
            
            if (rollCount >= 10) {
                clearInterval(rollInterval);
                
                // Final roll
                const finalRoll = Utils.randomInt(1, 6);
                const bonusPoints = finalRoll * 5;
                
                dice.classList.remove('rolling');
                dice.innerHTML = `<span style="font-size: 2em;">${finalRoll}</span>`;
                result.textContent = `You won ${bonusPoints} bonus points! 🎉`;
                
                // Add points to game
                if (window.GameController) {
                    GameController.addPoints(bonusPoints);
                }
                
                // Hide game after 2 seconds
                setTimeout(() => {
                    document.getElementById('minigame-container').style.display = 'none';
                }, 2000);
            }
        }, 100);
    },
    
    /**
     * SPIN WHEEL - Spin for bigger bonus
     */
    showSpinWheel(container) {
        container.innerHTML = `
            <div class="mini-game">
                <h3>🎡 Spin the Wheel! 🎡</h3>
                <p>Click to spin and win 10-50 bonus points!</p>
                <div class="spin-wheel" id="spin-wheel" onclick="MiniGames.spinWheel()">
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 2em; color: white; font-weight: bold;">
                        SPIN
                    </div>
                </div>
                <p id="spin-result" style="font-weight: bold; color: #667eea; margin-top: 10px;"></p>
            </div>
        `;
        container.style.display = 'block';
    },
    
    spinWheel() {
        const wheel = document.getElementById('spin-wheel');
        const result = document.getElementById('spin-result');
        
        // Disable clicking during spin
        wheel.onclick = null;
        wheel.classList.add('spinning');
        
        // Spin for 3 seconds
        setTimeout(() => {
            wheel.classList.remove('spinning');
            
            // Calculate bonus (10-50 points)
            const segments = [10, 15, 20, 25, 30, 35, 40, 45, 50];
            const bonusPoints = Utils.randomChoice(segments);
            
            result.textContent = `You won ${bonusPoints} bonus points! 🎉`;
            
            // Add points to game
            if (window.GameController) {
                GameController.addPoints(bonusPoints);
            }
            
            // Hide game after 2 seconds
            setTimeout(() => {
                document.getElementById('minigame-container').style.display = 'none';
            }, 2000);
        }, 3000);
    },
    
    /**
     * MEMORY GAME - Match pairs for bonus
     */
    showMemoryGame(container) {
        const emojis = ['🎯', '⭐', '🚀', '💡', '🎨', '🔥'];
        const cards = [...emojis, ...emojis]; // Duplicate for pairs
        const shuffled = Utils.shuffleArray(cards);
        
        let cardsHTML = '';
        shuffled.forEach((emoji, index) => {
            cardsHTML += `
                <div class="memory-card" data-emoji="${emoji}" data-index="${index}">
                    <span style="font-size: 1.5em;">❓</span>
                </div>
            `;
        });
        
        container.innerHTML = `
            <div class="mini-game">
                <h3>🧠 Memory Match! 🧠</h3>
                <p>Match all pairs to win 25 bonus points!</p>
                <p id="memory-moves">Moves: <span id="move-count">0</span></p>
                <div class="memory-game" id="memory-grid">
                    ${cardsHTML}
                </div>
                <p id="memory-result" style="font-weight: bold; color: #667eea; margin-top: 10px;"></p>
            </div>
        `;
        container.style.display = 'block';
        
        // Initialize game state
        this.memoryState = {
            flipped: [],
            matched: [],
            moves: 0,
            cards: shuffled,
            isProcessing: false // Prevent clicking during comparison
        };
        
        // Add click listeners to all cards
        setTimeout(() => {
            const cardElements = document.querySelectorAll('.memory-card');
            cardElements.forEach((card, index) => {
                card.addEventListener('click', () => {
                    this.flipCard(index);
                });
            });
        }, 100);
    },
    
    flipCard(index) {
        // Don't allow flipping if:
        // 1. Already processing a pair
        // 2. Card is already flipped
        // 3. Card is already matched
        // 4. Already have 2 cards flipped
        if (this.memoryState.isProcessing) return;
        if (this.memoryState.flipped.includes(index)) return;
        if (this.memoryState.matched.includes(index)) return;
        if (this.memoryState.flipped.length >= 2) return;
        
        const card = document.querySelector(`.memory-card[data-index="${index}"]`);
        if (!card) return;
        
        const emoji = card.getAttribute('data-emoji');
        
        // Flip the card
        card.classList.add('flipped');
        card.innerHTML = `<span style="font-size: 1.5em;">${emoji}</span>`;
        this.memoryState.flipped.push(index);
        
        // Check if we have 2 flipped cards
        if (this.memoryState.flipped.length === 2) {
            this.memoryState.isProcessing = true; // Lock clicking
            this.memoryState.moves++;
            document.getElementById('move-count').textContent = this.memoryState.moves;
            
            const [first, second] = this.memoryState.flipped;
            const firstEmoji = this.memoryState.cards[first];
            const secondEmoji = this.memoryState.cards[second];
            
            if (firstEmoji === secondEmoji) {
                // Match found!
                setTimeout(() => {
                    this.memoryState.matched.push(first, second);
                    const firstCard = document.querySelector(`.memory-card[data-index="${first}"]`);
                    const secondCard = document.querySelector(`.memory-card[data-index="${second}"]`);
                    
                    if (firstCard) firstCard.classList.add('matched');
                    if (secondCard) secondCard.classList.add('matched');
                    
                    this.memoryState.flipped = [];
                    this.memoryState.isProcessing = false; // Unlock clicking
                    
                    // Check if all matched
                    if (this.memoryState.matched.length === this.memoryState.cards.length) {
                        this.memoryGameComplete();
                    }
                }, 500);
            } else {
                // No match - flip back after delay
                setTimeout(() => {
                    const firstCard = document.querySelector(`.memory-card[data-index="${first}"]`);
                    const secondCard = document.querySelector(`.memory-card[data-index="${second}"]`);
                    
                    if (firstCard) {
                        firstCard.classList.remove('flipped');
                        firstCard.innerHTML = '<span style="font-size: 1.5em;">❓</span>';
                    }
                    if (secondCard) {
                        secondCard.classList.remove('flipped');
                        secondCard.innerHTML = '<span style="font-size: 1.5em;">❓</span>';
                    }
                    
                    this.memoryState.flipped = [];
                    this.memoryState.isProcessing = false; // Unlock clicking
                }, 1000);
            }
        }
    },
    
    memoryGameComplete() {
        const result = document.getElementById('memory-result');
        const bonusPoints = CONFIG.POINTS.MEMORY_GAME;
        
        result.textContent = `Perfect! You won ${bonusPoints} bonus points in ${this.memoryState.moves} moves! 🎉`;
        
        // Add points
        if (window.GameController) {
            GameController.addPoints(bonusPoints);
        }
        
        // Hide game after 3 seconds
        setTimeout(() => {
            const container = document.getElementById('minigame-container');
            if (container) {
                container.style.display = 'none';
            }
        }, 3000);
    },
    
    /**
     * UNLOCK CHALLENGE - For career reveals
     */
    showUnlockChallenge(careerRank, callback) {
        const challenges = ['dice', 'spin', 'memory'];
        const challenge = Utils.randomChoice(challenges);
        
        const container = document.getElementById('minigame-container');
        
        // Show appropriate challenge
        switch(challenge) {
            case 'dice':
                container.innerHTML = `
                    <div class="mini-game">
                        <h3>🔓 Unlock Career #${careerRank}</h3>
                        <p>Roll the dice to reveal this career!</p>
                        <div class="dice" id="unlock-dice" onclick="MiniGames.unlockWithDice(${careerRank}, ${callback})">
                            <span style="font-size: 2em;">🎲</span>
                        </div>
                    </div>
                `;
                break;
                
            case 'spin':
                container.innerHTML = `
                    <div class="mini-game">
                        <h3>🔓 Unlock Career #${careerRank}</h3>
                        <p>Spin to reveal this career!</p>
                        <div class="spin-wheel" id="unlock-spin" onclick="MiniGames.unlockWithSpin(${careerRank}, ${callback})" style="width: 150px; height: 150px;">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.5em; color: white; font-weight: bold;">
                                SPIN
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'memory':
                container.innerHTML = `
                    <div class="mini-game">
                        <h3>🔓 Unlock Career #${careerRank}</h3>
                        <p>Click to reveal!</p>
                        <div class="mystery-box" onclick="MiniGames.unlockInstant(${careerRank}, ${callback})">
                            🎁
                        </div>
                    </div>
                `;
                break;
        }
        
        container.style.display = 'block';
    },
    
    unlockWithDice(careerRank, callback) {
        const dice = document.getElementById('unlock-dice');
        dice.classList.add('rolling');
        
        setTimeout(() => {
            dice.classList.remove('rolling');
            if (typeof callback === 'function') {
                callback();
            }
        }, 1000);
    },
    
    unlockWithSpin(careerRank, callback) {
        const wheel = document.getElementById('unlock-spin');
        wheel.classList.add('spinning');
        
        setTimeout(() => {
            wheel.classList.remove('spinning');
            if (typeof callback === 'function') {
                callback();
            }
        }, 2000);
    },
    
    unlockInstant(careerRank, callback) {
        if (typeof callback === 'function') {
            callback();
        }
    }
};

// Make MiniGames available globally
window.MiniGames = MiniGames;

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MiniGames };
}