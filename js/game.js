// MAIN GAME CONTROLLER

const GameController = {
    // Game state
    state: {
        age: null,
        currentLevel: 1,
        currentQuestion: 0,
        points: 0,
        level1Answers: [],
        level2Data: {},
        level3Data: {},
        level4Data: {},
        level5Data: {},
        careerMatches: [],
        unlockedCareers: 0
    },
    
    /**
     * Initialize the game
     */
    init() {
        console.log('Initializing game...');
        
        // Always show age screen first
        Utils.showScreen('age-screen');
        
        // Check if there's saved progress
        const saved = Utils.loadProgress();
        if (saved && saved.age) {
            console.log('Found saved progress:', saved);
            // Show the clear progress button
            const clearBtn = document.getElementById('clear-progress-btn');
            if (clearBtn) {
                clearBtn.style.display = 'inline-block';
            }
            
            // Show a resume option
            this.showResumeOption(saved);
        } else {
            console.log('No saved progress, starting fresh');
            Utils.updatePoints(0);
            Utils.updateLevelBadge(1);
        }
        
        // Set up event listeners AFTER DOM is ready
        setTimeout(() => {
            this.setupEventListeners();
        }, 100);
    },
    
    /**
     * Show resume option
     */
    showResumeOption(savedState) {
        const ageScreen = document.getElementById('age-screen');
        const existingResume = document.getElementById('resume-option');
        
        // Remove existing resume option if any
        if (existingResume) {
            existingResume.remove();
        }
        
        // Create resume banner
        const resumeBanner = document.createElement('div');
        resumeBanner.id = 'resume-option';
        resumeBanner.style.cssText = `
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 15px;
            margin: 20px 0;
            text-align: center;
        `;
        
        const level = savedState.currentLevel || 1;
        const points = savedState.points || 0;
        const progress = savedState.level1Answers ? savedState.level1Answers.length : 0;
        
        resumeBanner.innerHTML = `
            <h3 style="margin-bottom: 10px;">👋 Welcome Back!</h3>
            <p style="margin: 10px 0;">You have a saved game in progress:</p>
            <p style="font-size: 1.1em; margin: 10px 0;">
                <strong>Level ${level}</strong> • 
                <strong>${points} points</strong> • 
                <strong>${progress} questions answered</strong>
            </p>
            <div style="display: flex; gap: 15px; justify-content: center; margin-top: 20px;">
                <button class="btn btn-primary" id="resume-game-btn" style="background: white; color: #667eea;">
                    Continue Game 🎮
                </button>
                <button class="btn btn-secondary" id="start-new-game-btn" style="background: rgba(255,255,255,0.2); color: white; border: 2px solid white;">
                    Start New Game 🆕
                </button>
            </div>
        `;
        
        // Insert before age options
        const ageOptions = ageScreen.querySelector('.age-options');
        if (ageOptions) {
            ageScreen.insertBefore(resumeBanner, ageOptions);
        }
        
        // Add event listeners for resume buttons
        setTimeout(() => {
            const resumeBtn = document.getElementById('resume-game-btn');
            const newGameBtn = document.getElementById('start-new-game-btn');
            
            if (resumeBtn) {
                resumeBtn.addEventListener('click', () => {
                    this.state = savedState;
                    this.resumeGame();
                });
            }
            
            if (newGameBtn) {
                newGameBtn.addEventListener('click', () => {
                    this.confirmStartNew();
                });
            }
        }, 100);
    },
    
    /**
     * Confirm starting a new game
     */
    confirmStartNew() {
        if (confirm('Are you sure? This will delete your current progress and start over.')) {
            this.clearAndRestart();
        }
    },
    
    /**
     * Clear progress and restart
     */
    clearAndRestart() {
        Utils.clearProgress();
        
        // Reset state
        this.state = {
            age: null,
            currentLevel: 1,
            currentQuestion: 0,
            points: 0,
            level1Answers: [],
            level2Data: {},
            level3Data: {},
            level4Data: {},
            level5Data: {},
            careerMatches: [],
            unlockedCareers: 0
        };
        
        // Reset UI
        Utils.updatePoints(0);
        Utils.updateLevelBadge(1);
        
        // Reload page to clear everything
        window.location.reload();
    },
    
    /**
     * Set up event listeners
     */
    setupEventListeners() {
        // Age selection
        document.querySelectorAll('.age-card').forEach(card => {
            card.addEventListener('click', () => {
                const age = card.getAttribute('data-age');
                this.selectAge(age);
            });
        });
        
        // Level start buttons
        const levelButtons = {
            'start-level1-btn': 1,
            'start-level2-btn': 2,
            'start-level3-btn': 3,
            'start-level4-btn': 4,
            'start-level5-btn': 5
        };
        
        Object.keys(levelButtons).forEach(btnId => {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.addEventListener('click', () => {
                    this.startLevel(levelButtons[btnId]);
                });
            }
        });
        
        // Navigation buttons
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        
        // Mystery box/unlock buttons
        const unlockBox = document.getElementById('unlock-mystery-box');
        if (unlockBox) unlockBox.addEventListener('click', () => this.unlockResults());
        
        const sectionContinue = document.getElementById('section-continue-btn');
        if (sectionContinue) sectionContinue.addEventListener('click', () => this.continueToNextSection());
        
        // Level 2 button
        const level2Btn = document.getElementById('level2-btn');
        if (level2Btn) level2Btn.addEventListener('click', () => this.proceedToLevel2());
        
        // Final results buttons
        const downloadBtn = document.getElementById('download-btn');
        if (downloadBtn) downloadBtn.addEventListener('click', () => this.downloadResults());
        
        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) restartBtn.addEventListener('click', () => this.restartGame());
        
        const shareBtn = document.getElementById('share-btn');
        if (shareBtn) shareBtn.addEventListener('click', () => this.shareResults());
        
        // Clear progress button
        const clearProgressBtn = document.getElementById('clear-progress-btn');
        if (clearProgressBtn) {
            clearProgressBtn.addEventListener('click', () => {
                if (confirm('This will delete all your saved progress. Are you sure?')) {
                    this.clearAndRestart();
                }
            });
        }
        
        // Add any global event listeners here
        window.addEventListener('beforeunload', () => {
            Utils.saveProgress(this.state);
        });
    },
    
    /**
     * Age selection
     */
    selectAge(ageGroup) {
        this.state.age = ageGroup;
        Utils.saveProgress(this.state);
        Utils.createConfetti(document.getElementById('game-container'));
        Utils.showScreen('level1-intro');
    },
    
    /**
     * Start a level
     */
    startLevel(level) {
        this.state.currentLevel = level;
        this.state.currentQuestion = 0;
        
        Utils.updateLevelBadge(level);
        Utils.showScreen('question-screen');
        
        this.loadQuestion();
    },
    
    /**
     * Load current question
     */
    loadQuestion() {
        console.log('loadQuestion called - Level:', this.state.currentLevel, 'Question:', this.state.currentQuestion);
        
        const level = this.state.currentLevel;
        let questions;
        
        // Get questions based on current level
        switch(level) {
            case 1:
                questions = LEVEL1_QUESTIONS;
                break;
            case 2:
                const ageGroup = this.state.age;
                if (ageGroup === '11-14') {
                    questions = LEVEL2_QUESTIONS.basic;
                } else if (ageGroup === '15-16') {
                    questions = LEVEL2_QUESTIONS.intermediate;
                } else {
                    questions = LEVEL2_QUESTIONS.advanced;
                }
                break;
            case 3:
                questions = LEVEL3_QUESTIONS;
                break;
            case 4:
                questions = LEVEL4_QUESTIONS;
                break;
            case 5:
                questions = LEVEL5_QUESTIONS;
                break;
            default:
                console.error('Invalid level:', level);
                return;
        }
        
        // Safety check
        if (!questions || questions.length === 0) {
            console.error('No questions found for level:', level);
            return;
        }
        
        console.log('Questions array length:', questions.length, 'Current index:', this.state.currentQuestion);
        
        if (this.state.currentQuestion >= questions.length) {
            console.error('Question index out of bounds - Index:', this.state.currentQuestion, 'Max:', questions.length - 1);
            // Auto-fix by resetting to 0
            this.state.currentQuestion = 0;
            console.log('Reset to question 0');
        }
        
        const currentQ = questions[this.state.currentQuestion];
        
        if (!currentQ) {
            console.error('Question not found at index:', this.state.currentQuestion);
            return;
        }
        
        console.log('Loading question:', currentQ.text);
        
        // Update UI
        const totalQuestions = questions.length;
        const questionNumberEl = document.getElementById('question-number');
        const sectionTitleEl = document.getElementById('section-title');
        const questionTextEl = document.getElementById('question-text');
        
        if (questionNumberEl) {
            questionNumberEl.textContent = `Question ${this.state.currentQuestion + 1} of ${totalQuestions}`;
        }
        if (sectionTitleEl) {
            sectionTitleEl.textContent = currentQ.section || '';
        }
        if (questionTextEl) {
            questionTextEl.textContent = currentQ.text || '';
        }
        
        // Update progress bar
        Utils.updateProgress(this.state.currentQuestion, totalQuestions);
        
        // Load options
        if (currentQ.options) {
            this.loadOptions(currentQ.options);
        }
        
        // Maybe show a mini-game
        this.maybeShowMiniGame();
        
        // Enable/disable navigation
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        if (prevBtn) {
            prevBtn.disabled = this.state.currentQuestion === 0;
        }
        if (nextBtn) {
            nextBtn.disabled = true;
        }
    },
    
    /**
     * Load question options
     */
    loadOptions(options) {
        const container = document.getElementById('options-container');
        if (!container) {
            console.error('Options container not found');
            return;
        }
        
        if (!options || options.length === 0) {
            console.error('No options provided');
            return;
        }
        
        container.innerHTML = '';
        
        options.forEach(opt => {
            const optDiv = document.createElement('div');
            optDiv.className = 'option';
            
            // Store the letter in a data attribute instead of using closure
            optDiv.setAttribute('data-letter', opt.letter);
            
            optDiv.onclick = (e) => {
                const letter = e.currentTarget.getAttribute('data-letter');
                this.selectOption(letter, e.currentTarget);
            };
            
            // Check if this option was previously selected
            const previousAnswer = this.getPreviousAnswer();
            if (previousAnswer === opt.letter) {
                optDiv.classList.add('selected');
                const nextBtn = document.getElementById('next-btn');
                if (nextBtn) nextBtn.disabled = false;
            }
            
            optDiv.innerHTML = `
                <div class="option-letter">${opt.letter}</div>
                <div class="option-text">${opt.text}</div>
            `;
            container.appendChild(optDiv);
        });
    },
    
    /**
     * Get previous answer for current question
     */
    getPreviousAnswer() {
        const level = this.state.currentLevel;
        const questionIndex = this.state.currentQuestion;
        
        if (level === 1) {
            return this.state.level1Answers[questionIndex];
        }
        // Add logic for other levels if needed
        return null;
    },
    
    /**
     * Select an option
     */
    selectOption(letter, element) {
        // Remove previous selection
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Select this option
        element.classList.add('selected');
        
        // Save answer
        const level = this.state.currentLevel;
        if (level === 1) {
            this.state.level1Answers[this.state.currentQuestion] = letter;
        }
        
        // Enable next button
        document.getElementById('next-btn').disabled = false;
        
        // Award points
        this.addPoints(CONFIG.POINTS.PER_QUESTION);
        
        // Save progress
        Utils.saveProgress(this.state);
    },
    
    /**
     * Add points with animation
     */
    addPoints(amount) {
        this.state.points += amount;
        Utils.updatePoints(this.state.points);
        Utils.saveProgress(this.state);
    },
    
    /**
     * Maybe show a mini-game
     */
    maybeShowMiniGame() {
        const gameType = MiniGames.shouldShowMiniGame();
        if (gameType) {
            const container = document.getElementById('minigame-container');
            MiniGames.showMiniGame(gameType, container);
        }
    },
    
    /**
     * Navigate to next question
     */
    nextQuestion() {
        const level = this.state.currentLevel;
        let questions;
        
        // Get questions for current level
        switch(level) {
            case 1:
                questions = LEVEL1_QUESTIONS;
                break;
            case 2:
                const ageGroup = this.state.age;
                questions = ageGroup === '11-14' ? LEVEL2_QUESTIONS.basic :
                           ageGroup === '15-16' ? LEVEL2_QUESTIONS.intermediate :
                           LEVEL2_QUESTIONS.advanced;
                break;
            case 3:
                questions = LEVEL3_QUESTIONS;
                break;
            case 4:
                questions = LEVEL4_QUESTIONS;
                break;
            case 5:
                questions = LEVEL5_QUESTIONS;
                break;
            default:
                console.error('Invalid level');
                return;
        }
        
        // Safety check
        if (!questions || questions.length === 0) {
            console.error('No questions available');
            return;
        }
        
        // Check if we've completed this level BEFORE incrementing
        if (this.state.currentQuestion >= questions.length - 1) {
            // This was the last question - complete the level
            this.state.currentQuestion = 0; // Reset for next level
            this.completeLevel();
        } else {
            // Move to next question
            this.state.currentQuestion++;
            this.loadQuestion();
        }
    },
    
    /**
     * Navigate to previous question
     */
    previousQuestion() {
        if (this.state.currentQuestion > 0) {
            this.state.currentQuestion--;
            this.loadQuestion();
        }
    },
    
    /**
     * Complete current level
     */
    completeLevel() {
        const level = this.state.currentLevel;
        
        // Award level completion bonus
        this.addPoints(CONFIG.POINTS.LEVEL_COMPLETE);
        
        if (level === 1) {
            // After Level 1, show unlock screen
            document.getElementById('total-points-earned').textContent = this.state.points;
            Utils.showScreen('unlock-screen');
            Utils.createConfetti(document.getElementById('game-container'));
        } else if (level < 5) {
            // Show next level intro
            Utils.showScreen(`level${level + 1}-intro`);
            Utils.createConfetti(document.getElementById('game-container'));
        } else {
            // All levels complete - show final results
            this.showFinalResults();
        }
        
        Utils.saveProgress(this.state);
    },
    
    /**
     * Continue to next section
     */
    continueToNextSection() {
        this.loadQuestion();
        Utils.showScreen('question-screen');
    },
    
    /**
     * Unlock and show results after Level 1
     */
    unlockResults() {
        Utils.showScreen('results-screen');
        
        // Calculate career matches
        this.state.careerMatches = CareerMatcher.calculateMatches(this.state);
        
        // Show careers sequentially (last 5 first)
        this.unlockCareersSequentially(45, 50);
    },
    
    /**
     * Unlock careers in sequence
     */
    unlockCareersSequentially(startRank, endRank) {
        const container = document.getElementById('career-results');
        const careers = this.state.careerMatches.slice(startRank - 1, endRank);
        
        careers.forEach((career, index) => {
            setTimeout(() => {
                const slot = this.createCareerCard(career, startRank + index);
                container.appendChild(slot);
                
                // Animate unlock
                setTimeout(() => {
                    slot.classList.add('unlocking');
                }, 100);
                
                Utils.createConfetti(document.getElementById('game-container'));
                this.addPoints(CONFIG.POINTS.CAREER_UNLOCK);
                this.state.unlockedCareers++;
                
                // Show Level 2 button after unlocking last career
                if (this.state.unlockedCareers === 5) {
                    document.getElementById('level2-btn').style.display = 'inline-block';
                }
            }, index * 1500);
        });
    },
    
    /**
     * Create career card element
     */
    createCareerCard(career, rank) {
        const slot = document.createElement('div');
        slot.className = 'career-slot';
        
        const quality = Utils.getMatchQuality(career.score);
        
        slot.innerHTML = `
            <div class="career-rank">#${rank}</div>
            <h3 class="career-name">${career.name}</h3>
            <div class="match-score ${quality.class}">
                ${quality.emoji} ${career.score}% Match - ${quality.label}
            </div>
            <p class="career-description">${career.description}</p>
            <div class="career-details">
                <div class="detail-item">
                    <div class="detail-label">Global Demand</div>
                    <div class="detail-value">${career.globalDemand}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Nigeria Opportunity</div>
                    <div class="detail-value">${career.nigerianOpportunity}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Salary Range</div>
                    <div class="detail-value">${career.averageSalary}</div>
                </div>
            </div>
            <details style="margin-top: 15px;">
                <summary style="cursor: pointer; font-weight: bold; color: #667eea;">View Career Path →</summary>
                <div style="margin-top: 10px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                    <p><strong>Education:</strong> ${career.educationPath}</p>
                    <p style="margin-top: 10px;"><strong>Getting Started:</strong> ${career.startingPath}</p>
                    <p style="margin-top: 10px;"><strong>Key Skills:</strong> ${career.keySkills.join(', ')}</p>
                </div>
            </details>
        `;
        
        return slot;
    },
    
    /**
     * Proceed to Level 2
     */
    proceedToLevel2() {
        this.state.currentLevel = 2;
        Utils.updateLevelBadge(2);
        Utils.showScreen('level2-intro');
    },
    
    /**
     * Show final results after all 5 levels
     */
    showFinalResults() {
        Utils.showScreen('final-results-screen');
        
        // Recalculate matches with all data
        this.state.careerMatches = CareerMatcher.calculateMatches(this.state);
        
        // Show total points
        document.getElementById('final-total-points').textContent = 
            Utils.formatNumber(this.state.points);
        
        // Show top 10 careers with detailed explanations
        const container = document.getElementById('final-career-matches');
        const topCareers = this.state.careerMatches.slice(0, 10);
        
        container.innerHTML = '<h2>Your Top 10 Career Matches</h2>';
        
        topCareers.forEach((career, index) => {
            const card = this.createDetailedCareerCard(career, index + 1);
            container.appendChild(card);
        });
        
        Utils.createConfetti(document.getElementById('game-container'));
    },
    
    /**
     * Create detailed career card for final results
     */
    createDetailedCareerCard(career, rank) {
        const card = document.createElement('div');
        card.className = 'career-slot';
        
        const quality = Utils.getMatchQuality(career.score);
        const certainty = CareerMatcher.calculateCertainty(career, this.state);
        const reasons = CareerMatcher.explainMatch(career, this.state);
        
        card.innerHTML = `
            <div class="career-rank">#${rank}</div>
            <h3 class="career-name">${career.name}</h3>
            <div style="display: flex; gap: 15px; margin: 10px 0;">
                <div class="match-score ${quality.class}">
                    ${quality.emoji} ${career.score}% Match
                </div>
                <div class="match-score" style="color: #667eea;">
                    ✓ ${certainty}% Certainty
                </div>
            </div>
            <p class="career-description">${career.description}</p>
            
            <div style="background: #f0f3ff; padding: 15px; border-radius: 10px; margin: 15px 0;">
                <h4 style="color: #667eea; margin-bottom: 10px;">Why This Career Matches You:</h4>
                <ul style="padding-left: 20px;">
                    ${reasons.map(reason => `<li style="margin: 5px 0;">${reason}</li>`).join('')}
                </ul>
            </div>
            
            <div class="career-details">
                <div class="detail-item">
                    <div class="detail-label">Category</div>
                    <div class="detail-value">${career.category}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Global Demand</div>
                    <div class="detail-value">${career.globalDemand}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Nigeria Opportunity</div>
                    <div class="detail-value">${career.nigerianOpportunity}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Salary Range</div>
                    <div class="detail-value">${career.averageSalary}</div>
                </div>
            </div>
            
            <details style="margin-top: 15px;">
                <summary style="cursor: pointer; font-weight: bold; color: #667eea;">View Complete Career Path →</summary>
                <div style="margin-top: 10px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                    <p><strong>📚 Education Path:</strong> ${career.educationPath}</p>
                    <p style="margin-top: 10px;"><strong>🚀 Getting Started:</strong> ${career.startingPath}</p>
                    <p style="margin-top: 10px;"><strong>💪 Key Skills Needed:</strong> ${career.keySkills.join(', ')}</p>
                    <p style="margin-top: 10px;"><strong>🏢 Work Environment:</strong> ${career.workEnvironment}</p>
                </div>
            </details>
        `;
        
        return card;
    },
    
    /**
     * Download results as text/PDF
     */
    downloadResults() {
        const topCareers = this.state.careerMatches.slice(0, 10);
        
        let text = `🌟 CAREER DISCOVERY RESULTS 🌟\n`;
        text += `==========================================\n\n`;
        text += `Total Points Earned: ${this.state.points}\n`;
        text += `Date: ${new Date().toLocaleDateString()}\n\n`;
        text += `YOUR TOP 10 CAREER MATCHES:\n`;
        text += `==========================================\n\n`;
        
        topCareers.forEach((career, index) => {
            text += `#${index + 1}: ${career.name} (${career.score}% match)\n`;
            text += `Category: ${career.category}\n`;
            text += `Description: ${career.description}\n`;
            text += `Salary Range: ${career.averageSalary}\n`;
            text += `Education: ${career.educationPath}\n`;
            text += `\n`;
        });
        
        // Create download
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'my-career-results.txt';
        a.click();
    },
    
    /**
     * Share results
     */
    shareResults() {
        const topCareer = this.state.careerMatches[0];
        const text = `I just completed a career discovery quiz! My top match is ${topCareer.name} with a ${topCareer.score}% match! 🎯`;
        
        if (navigator.share) {
            navigator.share({
                title: 'My Career Results',
                text: text
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(text);
            alert('Results copied to clipboard!');
        }
    },
    
    /**
     * Restart the game
     */
    restartGame() {
        if (confirm('Are you sure you want to start over? This will delete your current progress.')) {
            Utils.clearProgress();
            this.state = {
                age: null,
                currentLevel: 1,
                currentQuestion: 0,
                points: 0,
                level1Answers: [],
                level2Data: {},
                level3Data: {},
                level4Data: {},
                level5Data: {},
                careerMatches: [],
                unlockedCareers: 0
            };
            Utils.updatePoints(0);
            Utils.updateLevelBadge(1);
            Utils.showScreen('age-screen');
        }
    },
    
    /**
     * Resume saved game
     */
    resumeGame() {
        Utils.updatePoints(this.state.points);
        Utils.updateLevelBadge(this.state.currentLevel);
        
        // Determine which screen to show
        if (!this.state.age) {
            Utils.showScreen('age-screen');
        } else if (this.state.currentLevel === 1 && this.state.currentQuestion === 0) {
            Utils.showScreen('level1-intro');
        } else if (this.state.currentLevel > 1 && this.state.currentQuestion === 0) {
            // Show level intro for levels 2-5
            Utils.showScreen(`level${this.state.currentLevel}-intro`);
        } else {
            // In the middle of a level - show question screen
            Utils.showScreen('question-screen');
            this.loadQuestion();
        }
    }
};

// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
    GameController.init();
});

// Make GameController available globally
window.GameController = GameController;