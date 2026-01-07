// GAME CONFIGURATION & UTILITIES

const CONFIG = {
    // Points System
    POINTS: {
        PER_QUESTION: 10,
        DICE_MIN: 5,
        DICE_MAX: 30,
        SPIN_WHEEL_MIN: 10,
        SPIN_WHEEL_MAX: 50,
        MEMORY_GAME: 25,
        CAREER_UNLOCK: 50,
        SECTION_COMPLETE: 30,
        LEVEL_COMPLETE: 100
    },
    
    // Mini-game probabilities
    MINIGAME_CHANCES: {
        DICE: 0.15,        // 15% chance
        SPIN_WHEEL: 0.10,  // 10% chance
        MEMORY: 0.08       // 8% chance
    },
    
    // Age groups
    AGE_GROUPS: {
        JUNIOR: { 
            min: 11, max: 14, 
            label: '11-14 years', 
            icon: '🎒', 
            description: 'Junior Secondary',
            level2Questions: 'basic' // Simplified academic questions
        },
        MIDDLE: { 
            min: 15, max: 16, 
            label: '15-16 years', 
            icon: '📚', 
            description: 'Senior Secondary (SS1-SS2)',
            level2Questions: 'intermediate'
        },
        SENIOR: { 
            min: 17, max: 19, 
            label: '17-19 years', 
            icon: '🎓', 
            description: 'SS3 / Post-Secondary',
            level2Questions: 'advanced' // Full WAEC/JAMB questions
        }
    },
    
    // Level configuration
    LEVELS: {
        1: { 
            name: 'Personality Discovery', 
            questionCount: 50, 
            icon: '1️⃣',
            sections: [
                { name: 'Motivations', questions: 5 },
                { name: 'Skills', questions: 5 },
                { name: 'Beliefs & Values', questions: 5 },
                { name: 'Attitude', questions: 5 },
                { name: 'Personality', questions: 8 },
                { name: 'Work Orientation', questions: 7 },
                { name: 'Identity', questions: 7 },
                { name: 'Practical Preferences', questions: 8 }
            ]
        },
        2: { 
            name: 'Academic Performance', 
            questionCount: 10, 
            icon: '2️⃣',
            sections: [
                { name: 'Academic Scores', questions: 5 },
                { name: 'Study Habits', questions: 5 }
            ]
        },
        3: { 
            name: 'Future Plans', 
            questionCount: 8, 
            icon: '3️⃣',
            sections: [
                { name: 'Education Goals', questions: 4 },
                { name: 'Career Aspirations', questions: 4 }
            ]
        },
        4: { 
            name: 'Capacity Assessment', 
            questionCount: 15, 
            icon: '4️⃣',
            sections: [
                { name: 'Family Support', questions: 5 },
                { name: 'Resources & Networks', questions: 5 },
                { name: 'Self-Belief', questions: 5 }
            ]
        },
        5: { 
            name: 'Final Matching', 
            questionCount: 5, 
            icon: '5️⃣',
            sections: [
                { name: 'Commitment & Determination', questions: 5 }
            ]
        }
    },
    
    // Storage
    STORAGE_KEY: 'nigerianTeenCareerGame',
    
    // Career unlocking sequence (from last to first)
    UNLOCK_SEQUENCE: [
        { ranks: [50, 49, 48, 47, 46], challenge: 'dice' },
        { ranks: [45, 44, 43, 42, 41], challenge: 'spin' },
        { ranks: [40, 39, 38, 37, 36], challenge: 'memory' },
        { ranks: [35, 34, 33, 32, 31], challenge: 'dice' },
        { ranks: [30, 29, 28, 27, 26], challenge: 'spin' },
        { ranks: [25, 24, 23, 22, 21], challenge: 'memory' },
        { ranks: [20, 19, 18, 17, 16], challenge: 'dice' },
        { ranks: [15, 14, 13, 12, 11], challenge: 'spin' },
        { ranks: [10, 9, 8, 7, 6], challenge: 'memory' },
        { ranks: [5, 4, 3, 2, 1], challenge: 'final' } // Top 5 require all levels
    ]
};

// UTILITY FUNCTIONS
const Utils = {
    // Local Storage
    saveProgress(gameState) {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(gameState));
            return true;
        } catch (e) {
            console.error('Failed to save progress:', e);
            return false;
        }
    },
    
    loadProgress() {
        try {
            const saved = localStorage.getItem(CONFIG.STORAGE_KEY);
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            console.error('Failed to load progress:', e);
            return null;
        }
    },
    
    clearProgress() {
        localStorage.removeItem(CONFIG.STORAGE_KEY);
    },
    
    // Random utilities
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    
    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },
    
    // Animation utilities
    createConfetti(container) {
        const colors = ['#ff6b6b', '#ffa500', '#4caf50', '#667eea', '#764ba2', '#ff69b4'];
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = Utils.randomChoice(colors);
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                container.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 3000);
            }, i * 100);
        }
    },
    
    // UI utilities
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.add('active');
            window.scrollTo(0, 0);
        }
    },
    
    updatePoints(points) {
        const pointsEl = document.getElementById('points-value');
        pointsEl.textContent = points;
        
        // Animate
        pointsEl.style.transform = 'scale(1.5)';
        pointsEl.style.color = '#ffa500';
        setTimeout(() => {
            pointsEl.style.transform = 'scale(1)';
        }, 300);
    },
    
    updateLevelBadge(level) {
        document.getElementById('current-level-badge').textContent = `LEVEL ${level}`;
        
        // Update dots
        const dots = document.querySelectorAll('.level-dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('current', 'completed');
            if (index < level - 1) {
                dot.classList.add('completed');
            } else if (index === level - 1) {
                dot.classList.add('current');
            }
        });
    },
    
    updateProgress(current, total) {
        const percentage = (current / total) * 100;
        document.getElementById('progress-fill').style.width = percentage + '%';
    },
    
    // Count letter frequencies in answers
    countLetters(answers) {
        const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
        answers.forEach(answer => {
            if (answer && counts.hasOwnProperty(answer)) {
                counts[answer]++;
            }
        });
        return counts;
    },
    
    // Format numbers
    formatNumber(num) {
        return num.toLocaleString();
    },
    
    // Get match quality label
    getMatchQuality(score) {
        if (score >= 85) return { label: 'Excellent Match', class: 'match-excellent', emoji: '🎯' };
        if (score >= 75) return { label: 'Strong Match', class: 'match-strong', emoji: '⭐' };
        if (score >= 65) return { label: 'Good Match', class: 'match-good', emoji: '👍' };
        return { label: 'Possible Match', class: 'match-possible', emoji: '💡' };
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, Utils };
}