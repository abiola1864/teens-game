// SOPHISTICATED CAREER MATCHING ALGORITHM

const CareerMatcher = {
    
    /**
     * Main function to calculate career matches
     * Level 1 determines WHAT careers match
     * Levels 2-5 determine CERTAINTY/ACHIEVABILITY only
     * @param {Object} gameState - Complete game state with all answers
     * @returns {Array} - Sorted array of career matches with scores
     */
    calculateMatches(gameState) {
        const level1Answers = gameState.level1Answers || [];
        const level2Data = gameState.level2Data || {};
        const level3Data = gameState.level3Data || {};
        const level4Data = gameState.level4Data || {};
        const level5Data = gameState.level5Data || {};
        
        // Calculate letter frequencies from Level 1
        const letterCounts = this.countLetters(level1Answers);
        
        // Score all careers ONLY based on Level 1 (personality match)
        const careerScores = CAREERS_DATABASE.map(career => {
            let personalityScore = 0;
            
            // 1. Base score from letter weights (40% of total)
            personalityScore += this.calculateBaseScore(career, letterCounts) * 0.4;
            
            // 2. Critical questions bonus (30% of total)
            personalityScore += this.evaluateCriticalQuestions(career, level1Answers) * 0.3;
            
            // 3. Pattern matching bonus (20% of total)
            personalityScore += this.evaluatePatternMatches(career, level1Answers) * 0.2;
            
            // 4. Minimum thresholds check (10% of total)
            personalityScore += this.checkMinimumThresholds(career, letterCounts) * 0.10;
            
            // Personality match score (never changes after Level 1)
            const matchScore = Math.round(Math.min(personalityScore, 100));
            
            // Calculate CERTAINTY based on Levels 2-5 (how achievable is this career for you)
            const certaintyScore = this.calculateCertainty(career, level2Data, level3Data, level4Data, level5Data);
            
            return {
                ...career,
                matchScore: matchScore,        // How well personality matches (from Level 1 only)
                certaintyScore: certaintyScore, // How achievable it is (from Levels 2-5)
                overallScore: matchScore,       // Sort by personality match
                matchQuality: this.getMatchQuality(matchScore)
            };
        });
        
        // Sort by PERSONALITY MATCH only (Level 1)
        // Certainty doesn't affect ranking, only shows achievability
        return careerScores.sort((a, b) => b.matchScore - a.matchScore);
    },
    
    /**
     * Count letter frequencies in answers
     */
    countLetters(answers) {
        const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
        answers.forEach(answer => {
            if (answer && counts.hasOwnProperty(answer)) {
                counts[answer]++;
            }
        });
        return counts;
    },
    
    /**
     * Calculate base score from weighted letter frequencies
     */
    calculateBaseScore(career, letterCounts) {
        let score = 0;
        const maxPossible = 50 * 6; // 50 questions * max weight of 6
        
        Object.keys(career.weights).forEach(letter => {
            const weight = career.weights[letter];
            const count = letterCounts[letter] || 0;
            score += count * weight;
        });
        
        // Normalize to 0-100
        return (score / maxPossible) * 100;
    },
    
    /**
     * Evaluate critical questions - must have specific answers
     */
    evaluateCriticalQuestions(career, answers) {
        if (!career.criticalQuestions || career.criticalQuestions.length === 0) {
            return 50; // Neutral score if no critical questions
        }
        
        let matchedCount = 0;
        
        career.criticalQuestions.forEach(questionId => {
            const answerIndex = questionId - 1; // Questions are 1-indexed
            const answer = answers[answerIndex];
            
            // Determine expected answer based on career weights
            const expectedAnswer = this.getExpectedAnswer(career.weights);
            
            if (answer === expectedAnswer) {
                matchedCount++;
            }
        });
        
        // Return percentage of critical questions matched
        return (matchedCount / career.criticalQuestions.length) * 100;
    },
    
    /**
     * Get expected answer based on highest weight
     */
    getExpectedAnswer(weights) {
        let maxWeight = -1;
        let expectedAnswer = null;
        
        Object.keys(weights).forEach(letter => {
            if (weights[letter] > maxWeight) {
                maxWeight = weights[letter];
                expectedAnswer = letter;
            }
        });
        
        return expectedAnswer;
    },
    
    /**
     * Evaluate specific answer patterns for bonus points
     */
    evaluatePatternMatches(career, answers) {
        if (!career.bonusPatterns || career.bonusPatterns.length === 0) {
            return 50; // Neutral score
        }
        
        let totalBonus = 0;
        let maxPossibleBonus = 0;
        
        career.bonusPatterns.forEach(pattern => {
            maxPossibleBonus += pattern.bonus;
            
            // Check if all questions in pattern match the required answer
            const allMatch = pattern.questions.every(questionId => {
                const answerIndex = questionId - 1;
                return answers[answerIndex] === pattern.answer;
            });
            
            if (allMatch) {
                totalBonus += pattern.bonus;
            }
        });
        
        // Return percentage of bonus points achieved
        return maxPossibleBonus > 0 ? (totalBonus / maxPossibleBonus) * 100 : 50;
    },
    
    /**
     * Check if minimum thresholds are met
     */
    checkMinimumThresholds(career, letterCounts) {
        if (!career.minimums) {
            return 100; // No minimums = full score
        }
        
        let thresholdsMet = 0;
        let totalThresholds = 0;
        
        Object.keys(career.minimums).forEach(key => {
            totalThresholds++;
            const threshold = career.minimums[key];
            
            if (key.startsWith('combined')) {
                // Handle combined letter thresholds (e.g., combinedAE)
                const letters = key.replace('combined', '').split('');
                let combinedCount = 0;
                letters.forEach(letter => {
                    combinedCount += letterCounts[letter] || 0;
                });
                
                if (combinedCount >= threshold) {
                    thresholdsMet++;
                }
            } else {
                // Handle single letter thresholds
                const count = letterCounts[key] || 0;
                if (count >= threshold) {
                    thresholdsMet++;
                }
            }
        });
        
        // Return percentage of thresholds met
        return totalThresholds > 0 ? (thresholdsMet / totalThresholds) * 100 : 100;
    },
    
    /**
     * Calculate CERTAINTY/ACHIEVABILITY (0-100%)
     * This measures how likely the student can achieve this career
     * Based on academic performance, resources, support, and determination
     */
    calculateCertainty(career, level2Data, level3Data, level4Data, level5Data) {
        let certainty = 50; // Start at neutral
        
        // Check if we have any capacity data
        const hasCapacityData = Object.keys(level2Data).length > 0 || 
                               Object.keys(level3Data).length > 0 || 
                               Object.keys(level4Data).length > 0 || 
                               Object.keys(level5Data).length > 0;
        
        if (!hasCapacityData) {
            return 0; // No certainty data yet (only Level 1 completed)
        }
        
        // Level 2: Academic Performance (30% of certainty)
        if (Object.keys(level2Data).length > 0) {
            if (level2Data.hasWaec) {
                if (level2Data.waecCredits >= 6) {
                    certainty += 15;
                } else if (level2Data.waecCredits >= 5) {
                    certainty += 10;
                } else if (level2Data.waecCredits > 0) {
                    certainty += 5;
                }
            }
            
            if (level2Data.jambScore) {
                if (level2Data.jambScore >= 250) {
                    certainty += 15;
                } else if (level2Data.jambScore >= 200) {
                    certainty += 10;
                } else if (level2Data.jambScore >= 180) {
                    certainty += 5;
                }
            }
        }
        
        // Level 3: Education Goals Alignment (15% of certainty)
        if (Object.keys(level3Data).length > 0) {
            if (level3Data.educationGoal === 'university' && career.educationPath.includes('University')) {
                certainty += 10;
            } else if (level3Data.educationGoal === 'vocational' && career.category === 'Skilled Trades') {
                certainty += 15;
            } else if (level3Data.educationGoal) {
                certainty += 5;
            }
            
            if (level3Data.hasBackupPlan) {
                certainty += 5;
            }
        }
        
        // Level 4: Support & Resources (30% of certainty)
        if (Object.keys(level4Data).length > 0) {
            if (level4Data.familySupport === 'high') {
                certainty += 10;
            } else if (level4Data.familySupport === 'medium') {
                certainty += 5;
            }
            
            if (level4Data.financialCapacity === 'full') {
                certainty += 10;
            } else if (level4Data.financialCapacity === 'partial') {
                certainty += 5;
            }
            
            if (level4Data.hasMentor) {
                certainty += 5;
            }
            
            if (level4Data.hasInternet) {
                if (career.category === 'Technology & Data') {
                    certainty += 10;
                } else {
                    certainty += 5;
                }
            }
        }
        
        // Level 5: Determination (25% of certainty)
        if (Object.keys(level5Data).length > 0) {
            if (level5Data.determinationLevel >= 8) {
                certainty += 20;
            } else if (level5Data.determinationLevel >= 6) {
                certainty += 15;
            } else if (level5Data.determinationLevel >= 4) {
                certainty += 10;
            } else {
                certainty += 5;
            }
            
            if (level5Data.willingToRelocate) {
                certainty += 5;
            }
        }
        
        // Cap certainty at 100%
        return Math.min(Math.round(certainty), 100);
    },
    
    /**
     * Get match quality label based on score
     */
    getMatchQuality(score) {
        if (score >= 85) return 'Excellent Match';
        if (score >= 75) return 'Strong Match';
        if (score >= 65) return 'Good Match';
        if (score >= 50) return 'Possible Match';
        return 'Weak Match';
    },
    
    /**
     * Get certainty quality label
     */
    getCertaintyQuality(certainty) {
        if (certainty >= 80) return 'Very High Achievability';
        if (certainty >= 60) return 'High Achievability';
        if (certainty >= 40) return 'Moderate Achievability';
        if (certainty >= 20) return 'Challenging Path';
        if (certainty > 0) return 'Very Challenging';
        return 'Complete Level 2+ for certainty';
    },
    
    /**
     * Get top N careers
     */
    getTopCareers(gameState, n = 5) {
        const allMatches = this.calculateMatches(gameState);
        return allMatches.slice(0, n);
    },
    
    /**
     * Explain why a career is a good match
     */
    explainMatch(career, gameState) {
        const reasons = [];
        const letterCounts = this.countLetters(gameState.level1Answers || []);
        
        // Analyze dominant personality traits
        const dominantLetter = Object.keys(letterCounts).reduce((a, b) => 
            letterCounts[a] > letterCounts[b] ? a : b
        );
        
        const traitExplanations = {
            A: "your practical and business-minded nature",
            B: "your creative and artistic talents",
            C: "your caring and people-focused personality",
            D: "your strong communication and leadership skills",
            E: "your analytical thinking and love for learning"
        };
        
        reasons.push(`This career suits ${traitExplanations[dominantLetter]}.`);
        
        // Check for high weights alignment
        const careerDominantLetter = this.getExpectedAnswer(career.weights);
        if (dominantLetter === careerDominantLetter) {
            reasons.push(`Your strongest traits align perfectly with what this career requires.`);
        }
        
        // Add Nigerian opportunity context
        if (career.nigerianOpportunity === 'Very High') {
            reasons.push(`This career has excellent opportunities in Nigeria right now.`);
        }
        
        return reasons;
    }
};

// Make CareerMatcher available globally
window.CareerMatcher = CareerMatcher;

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CareerMatcher };
}// SOPHISTICATED CAREER MATCHING ALGORITHM

const CareerMatcher = {
    
    /**
     * Main function to calculate career matches
     * Level 1 determines WHAT careers match
     * Levels 2-5 determine CERTAINTY/ACHIEVABILITY only
     * @param {Object} gameState - Complete game state with all answers
     * @returns {Array} - Sorted array of career matches with scores
     */
    calculateMatches(gameState) {
        const level1Answers = gameState.level1Answers || [];
        const level2Data = gameState.level2Data || {};
        const level3Data = gameState.level3Data || {};
        const level4Data = gameState.level4Data || {};
        const level5Data = gameState.level5Data || {};
        
        // Calculate letter frequencies from Level 1
        const letterCounts = this.countLetters(level1Answers);
        
        // Score all careers ONLY based on Level 1 (personality match)
        const careerScores = CAREERS_DATABASE.map(career => {
            let personalityScore = 0;
            
            // 1. Base score from letter weights (40% of total)
            personalityScore += this.calculateBaseScore(career, letterCounts) * 0.4;
            
            // 2. Critical questions bonus (30% of total)
            personalityScore += this.evaluateCriticalQuestions(career, level1Answers) * 0.3;
            
            // 3. Pattern matching bonus (20% of total)
            personalityScore += this.evaluatePatternMatches(career, level1Answers) * 0.2;
            
            // 4. Minimum thresholds check (10% of total)
            personalityScore += this.checkMinimumThresholds(career, letterCounts) * 0.10;
            
            // Personality match score (never changes after Level 1)
            const matchScore = Math.round(Math.min(personalityScore, 100));
            
            // Calculate CERTAINTY based on Levels 2-5 (how achievable is this career for you)
            const certaintyScore = this.calculateCertainty(career, level2Data, level3Data, level4Data, level5Data);
            
            return {
                ...career,
                matchScore: matchScore,        // How well personality matches (from Level 1 only)
                certaintyScore: certaintyScore, // How achievable it is (from Levels 2-5)
                overallScore: matchScore,       // Sort by personality match
                matchQuality: this.getMatchQuality(matchScore)
            };
        });
        
        // Sort by PERSONALITY MATCH only (Level 1)
        // Certainty doesn't affect ranking, only shows achievability
        return careerScores.sort((a, b) => b.matchScore - a.matchScore);
    },
    
    /**
     * Count letter frequencies in answers
     */
    countLetters(answers) {
        const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
        answers.forEach(answer => {
            if (answer && counts.hasOwnProperty(answer)) {
                counts[answer]++;
            }
        });
        return counts;
    },
    
    /**
     * Calculate base score from weighted letter frequencies
     */
    calculateBaseScore(career, letterCounts) {
        let score = 0;
        const maxPossible = 50 * 6; // 50 questions * max weight of 6
        
        Object.keys(career.weights).forEach(letter => {
            const weight = career.weights[letter];
            const count = letterCounts[letter] || 0;
            score += count * weight;
        });
        
        // Normalize to 0-100
        return (score / maxPossible) * 100;
    },
    
    /**
     * Evaluate critical questions - must have specific answers
     */
    evaluateCriticalQuestions(career, answers) {
        if (!career.criticalQuestions || career.criticalQuestions.length === 0) {
            return 50; // Neutral score if no critical questions
        }
        
        let matchedCount = 0;
        
        career.criticalQuestions.forEach(questionId => {
            const answerIndex = questionId - 1; // Questions are 1-indexed
            const answer = answers[answerIndex];
            
            // Determine expected answer based on career weights
            const expectedAnswer = this.getExpectedAnswer(career.weights);
            
            if (answer === expectedAnswer) {
                matchedCount++;
            }
        });
        
        // Return percentage of critical questions matched
        return (matchedCount / career.criticalQuestions.length) * 100;
    },
    
    /**
     * Get expected answer based on highest weight
     */
    getExpectedAnswer(weights) {
        let maxWeight = -1;
        let expectedAnswer = null;
        
        Object.keys(weights).forEach(letter => {
            if (weights[letter] > maxWeight) {
                maxWeight = weights[letter];
                expectedAnswer = letter;
            }
        });
        
        return expectedAnswer;
    },
    
    /**
     * Evaluate specific answer patterns for bonus points
     */
    evaluatePatternMatches(career, answers) {
        if (!career.bonusPatterns || career.bonusPatterns.length === 0) {
            return 50; // Neutral score
        }
        
        let totalBonus = 0;
        let maxPossibleBonus = 0;
        
        career.bonusPatterns.forEach(pattern => {
            maxPossibleBonus += pattern.bonus;
            
            // Check if all questions in pattern match the required answer
            const allMatch = pattern.questions.every(questionId => {
                const answerIndex = questionId - 1;
                return answers[answerIndex] === pattern.answer;
            });
            
            if (allMatch) {
                totalBonus += pattern.bonus;
            }
        });
        
        // Return percentage of bonus points achieved
        return maxPossibleBonus > 0 ? (totalBonus / maxPossibleBonus) * 100 : 50;
    },
    
    /**
     * Check if minimum thresholds are met
     */
    checkMinimumThresholds(career, letterCounts) {
        if (!career.minimums) {
            return 100; // No minimums = full score
        }
        
        let thresholdsMet = 0;
        let totalThresholds = 0;
        
        Object.keys(career.minimums).forEach(key => {
            totalThresholds++;
            const threshold = career.minimums[key];
            
            if (key.startsWith('combined')) {
                // Handle combined letter thresholds (e.g., combinedAE)
                const letters = key.replace('combined', '').split('');
                let combinedCount = 0;
                letters.forEach(letter => {
                    combinedCount += letterCounts[letter] || 0;
                });
                
                if (combinedCount >= threshold) {
                    thresholdsMet++;
                }
            } else {
                // Handle single letter thresholds
                const count = letterCounts[key] || 0;
                if (count >= threshold) {
                    thresholdsMet++;
                }
            }
        });
        
        // Return percentage of thresholds met
        return totalThresholds > 0 ? (thresholdsMet / totalThresholds) * 100 : 100;
    },
    
    /**
     * Calculate CERTAINTY/ACHIEVABILITY (0-100%)
     * This measures how likely the student can achieve this career
     * Based on academic performance, resources, support, and determination
     */
    calculateCertainty(career, level2Data, level3Data, level4Data, level5Data) {
        let certainty = 50; // Start at neutral
        
        // Check if we have any capacity data
        const hasCapacityData = Object.keys(level2Data).length > 0 || 
                               Object.keys(level3Data).length > 0 || 
                               Object.keys(level4Data).length > 0 || 
                               Object.keys(level5Data).length > 0;
        
        if (!hasCapacityData) {
            return 0; // No certainty data yet (only Level 1 completed)
        }
        
        // Level 2: Academic Performance (30% of certainty)
        if (Object.keys(level2Data).length > 0) {
            if (level2Data.hasWaec) {
                if (level2Data.waecCredits >= 6) {
                    certainty += 15;
                } else if (level2Data.waecCredits >= 5) {
                    certainty += 10;
                } else if (level2Data.waecCredits > 0) {
                    certainty += 5;
                }
            }
            
            if (level2Data.jambScore) {
                if (level2Data.jambScore >= 250) {
                    certainty += 15;
                } else if (level2Data.jambScore >= 200) {
                    certainty += 10;
                } else if (level2Data.jambScore >= 180) {
                    certainty += 5;
                }
            }
        }
        
        // Level 3: Education Goals Alignment (15% of certainty)
        if (Object.keys(level3Data).length > 0) {
            if (level3Data.educationGoal === 'university' && career.educationPath.includes('University')) {
                certainty += 10;
            } else if (level3Data.educationGoal === 'vocational' && career.category === 'Skilled Trades') {
                certainty += 15;
            } else if (level3Data.educationGoal) {
                certainty += 5;
            }
            
            if (level3Data.hasBackupPlan) {
                certainty += 5;
            }
        }
        
        // Level 4: Support & Resources (30% of certainty)
        if (Object.keys(level4Data).length > 0) {
            if (level4Data.familySupport === 'high') {
                certainty += 10;
            } else if (level4Data.familySupport === 'medium') {
                certainty += 5;
            }
            
            if (level4Data.financialCapacity === 'full') {
                certainty += 10;
            } else if (level4Data.financialCapacity === 'partial') {
                certainty += 5;
            }
            
            if (level4Data.hasMentor) {
                certainty += 5;
            }
            
            if (level4Data.hasInternet) {
                if (career.category === 'Technology & Data') {
                    certainty += 10;
                } else {
                    certainty += 5;
                }
            }
        }
        
        // Level 5: Determination (25% of certainty)
        if (Object.keys(level5Data).length > 0) {
            if (level5Data.determinationLevel >= 8) {
                certainty += 20;
            } else if (level5Data.determinationLevel >= 6) {
                certainty += 15;
            } else if (level5Data.determinationLevel >= 4) {
                certainty += 10;
            } else {
                certainty += 5;
            }
            
            if (level5Data.willingToRelocate) {
                certainty += 5;
            }
        }
        
        // Cap certainty at 100%
        return Math.min(Math.round(certainty), 100);
    },
    
    /**
     * Get match quality label based on score
     */
    getMatchQuality(score) {
        if (score >= 85) return 'Excellent Match';
        if (score >= 75) return 'Strong Match';
        if (score >= 65) return 'Good Match';
        if (score >= 50) return 'Possible Match';
        return 'Weak Match';
    },
    
    /**
     * Get certainty quality label
     */
    getCertaintyQuality(certainty) {
        if (certainty >= 80) return 'Very High Achievability';
        if (certainty >= 60) return 'High Achievability';
        if (certainty >= 40) return 'Moderate Achievability';
        if (certainty >= 20) return 'Challenging Path';
        if (certainty > 0) return 'Very Challenging';
        return 'Complete Level 2+ for certainty';
    },
    
    /**
     * Get top N careers
     */
    getTopCareers(gameState, n = 5) {
        const allMatches = this.calculateMatches(gameState);
        return allMatches.slice(0, n);
    },
    
    /**
     * Explain why a career is a good match
     */
    explainMatch(career, gameState) {
        const reasons = [];
        const letterCounts = this.countLetters(gameState.level1Answers || []);
        
        // Analyze dominant personality traits
        const dominantLetter = Object.keys(letterCounts).reduce((a, b) => 
            letterCounts[a] > letterCounts[b] ? a : b
        );
        
        const traitExplanations = {
            A: "your practical and business-minded nature",
            B: "your creative and artistic talents",
            C: "your caring and people-focused personality",
            D: "your strong communication and leadership skills",
            E: "your analytical thinking and love for learning"
        };
        
        reasons.push(`This career suits ${traitExplanations[dominantLetter]}.`);
        
        // Check for high weights alignment
        const careerDominantLetter = this.getExpectedAnswer(career.weights);
        if (dominantLetter === careerDominantLetter) {
            reasons.push(`Your strongest traits align perfectly with what this career requires.`);
        }
        
        // Add Nigerian opportunity context
        if (career.nigerianOpportunity === 'Very High') {
            reasons.push(`This career has excellent opportunities in Nigeria right now.`);
        }
        
        return reasons;
    }
};

// Make CareerMatcher available globally
window.CareerMatcher = CareerMatcher;

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CareerMatcher };
}