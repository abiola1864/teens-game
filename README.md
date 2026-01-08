# 🌟 Nigerian Teen Career Discovery Game

A comprehensive 5-level gamified career assessment system designed for Nigerian youth aged 11-19, focusing on disadvantaged communities.

## 🎯 Overview

This interactive game helps Nigerian teenagers discover careers that match their:
- Personality traits and interests
- Academic performance and abilities
- Family support and available resources
- Determination and commitment levels

## ✨ Features

### 5 Progressive Levels
1. **Level 1: Personality Discovery** (50 questions)
   - Motivations, skills, beliefs, attitude, personality, work orientation, identity
   
2. **Level 2: Academic Performance** (10 questions)
   - WAEC/NECO scores (age-appropriate)
   - Study habits and learning style
   
3. **Level 3: Future Plans** (8 questions)
   - Education goals and career aspirations
   
4. **Level 4: Capacity Assessment** (15 questions)
   - Family support and education levels
   - Resources and networks
   - Self-belief and determination
   
5. **Level 5: Final Commitment** (5 questions)
   - Commitment level and dedication assessment

### Gamification Elements
- 🎲 **Dice Game** - Roll for 5-30 bonus points
- 🎡 **Spin Wheel** - Spin for 10-50 bonus points
- 🧠 **Memory Match** - Match pairs for 25 bonus points
- ⭐ **Points System** - Earn points for every answer and achievement
- 🔓 **Sequential Unlocking** - Reveal careers one by one with animations
- 🎉 **Confetti Celebrations** - Visual rewards for progress
- 💾 **Auto-Save** - Progress automatically saved to localStorage

### Career Matching
- **50 Global Careers** - Based on McKinsey Future of Work Report
- **Sophisticated Algorithm** - Complex pattern matching and scoring
- **Nigerian Context** - Salary ranges, opportunities, and pathways specific to Nigeria
- **Capacity Consideration** - Matches consider what you can realistically achieve
- **Certainty Scores** - Shows how confident the match is (based on levels completed)

## 📁 Project Structure

```
teens-game/
├── index.html                 # Main game HTML structure
├── README.md                  # This file
├── css/
│   └── style.css             # Complete styling with animations
├── js/
│   ├── config.js             # Game configuration and utilities
│   ├── questions.js          # All 50 Level 1 questions
│   ├── capacity.js           # Levels 2-5 questions (capacity assessment)
│   ├── careers.js            # Complete 50 careers database
│   ├── algorithm.js          # Sophisticated scoring algorithm
│   ├── minigames.js          # Dice, spin wheel, memory games
│   └── game.js               # Main game controller
└── assets/                   # (Optional) For images/sounds
```

## 🚀 Setup Instructions

### Option 1: Using GitHub (Recommended)

1. **Clone the repository**
```bash
cd Desktop
git clone git@github.com:abiola1864/teens-game.git
cd teens-game
```

2. **Create folder structure**
```bash
mkdir -p css js assets
```

3. **Copy all files**
   - Copy `index.html` to root folder
   - Copy `style.css` to `css/` folder
   - Copy all `.js` files to `js/` folder

4. **Open in browser**
```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

5. **Commit and push**
```bash
git add .
git commit -m "Initial game setup with 50 questions and 5 levels"
git push origin main
```

### Option 2: Direct Setup

1. **Download all files** from the artifacts
2. **Create the folder structure** as shown above
3. **Place files** in their respective folders
4. **Open** `index.html` in any modern browser

## 🎮 How to Play

### For Users

1. **Select Your Age Group**
   - 11-14 years (Junior Secondary)
   - 15-16 years (Senior Secondary SS1-SS2)
   - 17-19 years (SS3/Post-Secondary)

2. **Complete Level 1** (50 questions)
   - Answer questions honestly about yourself
   - Play mini-games for bonus points
   - Each question = 10 points

3. **Unlock Your Top Careers**
   - Reveal careers from #50 to #1
   - Complete mini-challenges to unlock each career

4. **Progress Through Levels 2-5**
   - Level 2: Share your academic performance
   - Level 3: Discuss your future plans
   - Level 4: Assess your support system and resources
   - Level 5: Demonstrate your commitment

5. **View Final Results**
   - See your top 10 career matches with reasons
   - Download or share your results
   - Get detailed career pathways

## 🔧 Technical Details

### Technologies Used
- **Pure HTML/CSS/JavaScript** - No frameworks required
- **localStorage** - For saving progress
- **Responsive Design** - Works on mobile and desktop

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### No Server Required
This is a completely client-side application. No backend or database needed!

## 📊 Scoring Algorithm

The sophisticated matching algorithm considers:

1. **Letter Frequency Weights** (40%)
   - Each career has different weights for A, B, C, D, E answers
   
2. **Critical Questions** (25%)
   - Specific questions that are crucial for each career
   
3. **Pattern Matching** (15%)
   - Specific combinations of answers across multiple questions
   
4. **Minimum Thresholds** (10%)
   - Required minimum counts for certain answer types
   
5. **Capacity Adjustments** (10%)
   - Academic performance (WAEC/JAMB scores)
   - Family support and resources
   - Access to education and technology
   - Determination and commitment levels

## 🎨 Customization

### Adding More Careers

Edit `js/careers.js` and add new career objects:

```javascript
{
    id: 51,
    name: "Your New Career",
    category: "Category Name",
    description: "Brief description",
    globalDemand: "High",
    nigerianOpportunity: "High",
    averageSalary: "₦XX,000 - ₦XX,000/month",
    educationPath: "Required education",
    startingPath: "How to get started",
    keySkills: ["Skill 1", "Skill 2"],
    workEnvironment: "Where you work",
    weights: { A: 3, B: 2, C: 1, D: 4, E: 5 },
    criticalQuestions: [7, 23, 30],
    bonusPatterns: [
        { questions: [1, 5], answer: 'E', bonus: 10 }
    ],
    minimums: { E: 15, A: 10 }
}
```

### Changing Point Values

Edit `js/config.js`:

```javascript
POINTS: {
    PER_QUESTION: 10,      // Points per question answered
    DICE_MIN: 5,           // Minimum dice roll bonus
    DICE_MAX: 30,          // Maximum dice roll bonus
    // ... etc
}
```

### Modifying Mini-game Frequency

Edit `js/config.js`:

```javascript
MINIGAME_CHANCES: {
    DICE: 0.15,        // 15% chance (0.0 to 1.0)
    SPIN_WHEEL: 0.10,  // 10% chance
    MEMORY: 0.08       // 8% chance
}
```

## 🐛 Troubleshooting

### Progress Not Saving
- Check if localStorage is enabled in browser
- Clear browser cache and try again
- Check browser console for errors

### Mini-games Not Appearing
- Check `js/config.js` for mini-game chances
- Ensure `js/minigames.js` is properly loaded
- Check browser console for errors

### Careers Not Displaying
- Ensure `js/careers.js` is loaded
- Check that `CAREERS_DATABASE` array is properly formatted
- Verify all career objects have required fields

## 📱 Mobile Optimization

The game is fully responsive and works on:
- Smartphones (iOS & Android)
- Tablets
- Desktop computers

Touch interactions are optimized for mobile use.

## 🔐 Privacy & Data

- All data stored locally in browser (localStorage)
- No data sent to external servers
- No user tracking or analytics
- Users can clear their data anytime by clicking "Start Over"

## 🤝 Contributing

This is an open-source project for educational purposes. Contributions welcome!

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for educational and social impact purposes, specifically to help disadvantaged Nigerian youth discover career opportunities.

## 👥 Credits

- **Design & Development**: For Nigerian disadvantaged youth career guidance
- **Career Data**: Based on McKinsey Future of Work Report & World Economic Forum
- **Nigerian Context**: Salary ranges, opportunities, and pathways adapted for Nigeria

## 📧 Contact & Support

For questions, suggestions, or issues:
- Open an issue on GitHub
- Contact the maintainer through GitHub

## 🎯 Future Enhancements

Planned features:
- [ ] Mentorship matching system
- [ ] Scholarship database integration
- [ ] Career resource links (courses, certifications)
- [ ] Success stories from each career
- [ ] Video interviews with professionals
- [ ] Print-friendly PDF reports
- [ ] Offline mode (PWA)
- [ ] Multiple language support (Yoruba, Igbo, Hausa)

## 🌟 Impact Goals

This game aims to:
1. Help 10,000+ Nigerian youth discover suitable careers
2. Reduce career decision anxiety in disadvantaged communities
3. Connect youth with realistic, achievable career paths
4. Consider both interests AND capacity/resources
5. Provide hope and concrete next steps

---

**Made with ❤️ for Nigerian Youth**

*"Your background doesn't decide your future - your determination does!"* 🇳🇬✨