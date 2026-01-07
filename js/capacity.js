// LEVELS 2-5: CAPACITY ASSESSMENT QUESTIONS
// These questions assess academic performance, resources, support systems, and determination

// LEVEL 2: ACADEMIC PERFORMANCE (10 Questions)
const LEVEL2_QUESTIONS = {
    // For 11-14 years (Basic)
    basic: [
        {
            id: 51,
            section: "ACADEMIC PERFORMANCE",
            text: "What are your best subjects in school?",
            options: [
                { letter: "A", text: "Mathematics and Further Mathematics" },
                { letter: "B", text: "English, Literature, or Languages" },
                { letter: "C", text: "Biology, Health Education, or Agricultural Science" },
                { letter: "D", text: "Social Studies, Civic Education, or History" },
                { letter: "E", text: "Physics, Chemistry, or Computer Studies" }
            ]
        },
        {
            id: 52,
            section: "ACADEMIC PERFORMANCE",
            text: "How would you describe your overall academic performance?",
            options: [
                { letter: "A", text: "I'm among the top students in my class" },
                { letter: "B", text: "I perform well in subjects I like" },
                { letter: "C", text: "I'm average but trying to improve" },
                { letter: "D", text: "I struggle but I'm working hard" },
                { letter: "E", text: "School is very difficult for me" }
            ]
        },
        {
            id: 53,
            section: "STUDY HABITS",
            text: "How often do you study outside of class?",
            options: [
                { letter: "A", text: "Every day for at least 2 hours" },
                { letter: "B", text: "Most days, when I have time" },
                { letter: "C", text: "Only when I have tests or exams" },
                { letter: "D", text: "Rarely, I rely on what I learn in class" },
                { letter: "E", text: "Almost never" }
            ]
        },
        {
            id: 54,
            section: "STUDY HABITS",
            text: "Who helps you with your schoolwork?",
            options: [
                { letter: "A", text: "I have a personal lesson teacher" },
                { letter: "B", text: "My parents or older siblings help me" },
                { letter: "C", text: "My friends and I study together" },
                { letter: "D", text: "My teachers at school help me" },
                { letter: "E", text: "I mostly study alone without help" }
            ]
        },
        {
            id: 55,
            section: "LEARNING STYLE",
            text: "How do you learn best?",
            options: [
                { letter: "A", text: "By reading and taking notes" },
                { letter: "B", text: "By watching videos or demonstrations" },
                { letter: "C", text: "By listening and discussing with others" },
                { letter: "D", text: "By doing practical activities and experiments" },
                { letter: "E", text: "By memorizing and repeating information" }
            ]
        }
    ],
    
    // For 15-16 years (Intermediate)
    intermediate: [
        {
            id: 51,
            section: "ACADEMIC PERFORMANCE",
            text: "What subjects are you best at in SS1/SS2?",
            options: [
                { letter: "A", text: "Mathematics, Economics, or Accounting" },
                { letter: "B", text: "Literature, Languages, or Creative Arts" },
                { letter: "C", text: "Biology, Health Science, or Agricultural Science" },
                { letter: "D", text: "Government, History, or CRS/IRS" },
                { letter: "E", text: "Physics, Chemistry, or Computer Science" }
            ]
        },
        {
            id: 52,
            section: "ACADEMIC PERFORMANCE",
            text: "What is your average score in your best subjects?",
            options: [
                { letter: "A", text: "75% and above (A/B grade)" },
                { letter: "B", text: "60-74% (C grade)" },
                { letter: "C", text: "50-59% (D/E grade)" },
                { letter: "D", text: "40-49% (Pass grade)" },
                { letter: "E", text: "Below 40%" }
            ]
        },
        {
            id: 53,
            section: "ACADEMIC PERFORMANCE",
            text: "Have you taken any external exams? How did you perform?",
            options: [
                { letter: "A", text: "Not yet, but I'm preparing well" },
                { letter: "B", text: "I've taken BECE/JCE and passed well" },
                { letter: "C", text: "I'm planning to write WAEC/NECO soon" },
                { letter: "D", text: "I haven't taken any yet and I'm worried" },
                { letter: "E", text: "This doesn't apply to me" }
            ]
        },
        {
            id: 54,
            section: "STUDY HABITS",
            text: "How many hours per day do you dedicate to studying?",
            options: [
                { letter: "A", text: "4+ hours daily" },
                { letter: "B", text: "2-3 hours daily" },
                { letter: "C", text: "1 hour daily" },
                { letter: "D", text: "Only when I have tests" },
                { letter: "E", text: "Less than 30 minutes" }
            ]
        },
        {
            id: 55,
            section: "STUDY HABITS",
            text: "What resources do you have access to for studying?",
            options: [
                { letter: "A", text: "Internet, textbooks, lesson teachers, and study materials" },
                { letter: "B", text: "Textbooks and internet sometimes" },
                { letter: "C", text: "Only textbooks from school" },
                { letter: "D", text: "I borrow books from friends" },
                { letter: "E", text: "Very limited resources" }
            ]
        }
    ],
    
    // For 17-19 years (Advanced - includes WAEC/JAMB)
    advanced: [
        {
            id: 51,
            section: "WAEC/NECO RESULTS",
            text: "Have you written WAEC or NECO? What was your result?",
            options: [
                { letter: "A", text: "Yes, I had 6+ credits including English and Mathematics" },
                { letter: "B", text: "Yes, I had 5 credits including English and Mathematics" },
                { letter: "C", text: "Yes, but I didn't get English or Mathematics credit" },
                { letter: "D", text: "I'm writing it this year" },
                { letter: "E", text: "I haven't written it yet" }
            ]
        },
        {
            id: 52,
            section: "WAEC/NECO RESULTS",
            text: "If you've written WAEC/NECO, how many times have you taken it?",
            options: [
                { letter: "A", text: "Once, and I passed well" },
                { letter: "B", text: "Once, but I'm considering rewriting" },
                { letter: "C", text: "Twice" },
                { letter: "D", text: "Three or more times" },
                { letter: "E", text: "Not applicable - I haven't written it" }
            ]
        },
        {
            id: 53,
            section: "JAMB/ENTRANCE EXAMS",
            text: "Have you written JAMB or any university entrance exam?",
            options: [
                { letter: "A", text: "Yes, I scored 250+ in JAMB" },
                { letter: "B", text: "Yes, I scored 200-249 in JAMB" },
                { letter: "C", text: "Yes, I scored 180-199 in JAMB" },
                { letter: "D", text: "Yes, but I scored below 180" },
                { letter: "E", text: "I haven't written JAMB yet" }
            ]
        },
        {
            id: 54,
            section: "JAMB/ENTRANCE EXAMS",
            text: "What subjects did you take/will you take for JAMB?",
            options: [
                { letter: "A", text: "Mathematics, Economics, and related subjects" },
                { letter: "B", text: "Literature, Government, and Arts subjects" },
                { letter: "C", text: "Biology, Chemistry, and Health Science subjects" },
                { letter: "D", text: "Mixed subjects (not specialized)" },
                { letter: "E", text: "I don't know yet" }
            ]
        },
        {
            id: 55,
            section: "ACADEMIC PREPARATION",
            text: "How are you preparing for university or further education?",
            options: [
                { letter: "A", text: "Attending extra lessons and studying hard" },
                { letter: "B", text: "Studying on my own with online resources" },
                { letter: "C", text: "Relying on my school education" },
                { letter: "D", text: "Looking for vocational training instead" },
                { letter: "E", text: "Not sure about further education yet" }
            ]
        }
    ]
};

// LEVEL 3: FUTURE PLANS & ASPIRATIONS (8 Questions)
const LEVEL3_QUESTIONS = [
    {
        id: 61,
        section: "EDUCATION GOALS",
        text: "What is your education goal?",
        options: [
            { letter: "A", text: "University degree (B.Sc, B.A, etc.)" },
            { letter: "B", text: "Polytechnic/College of Education (HND/NCE)" },
            { letter: "C", text: "Professional certification or vocational training" },
            { letter: "D", text: "I want to start working and learn on the job" },
            { letter: "E", text: "I'm not sure yet" }
        ]
    },
    {
        id: 62,
        section: "EDUCATION GOALS",
        text: "If you go to university, what would you like to study?",
        options: [
            { letter: "A", text: "Business, Accounting, Economics, or Finance" },
            { letter: "B", text: "Arts, Design, Media, or Creative fields" },
            { letter: "C", text: "Medicine, Nursing, Public Health, or Life Sciences" },
            { letter: "D", text: "Law, Social Sciences, or Humanities" },
            { letter: "E", text: "Engineering, Computer Science, or Technology" }
        ]
    },
    {
        id: 63,
        section: "EDUCATION GOALS",
        text: "What is preventing you from achieving your education goals? (Select biggest challenge)",
        options: [
            { letter: "A", text: "School fees and financial problems" },
            { letter: "B", text: "My academic performance or exam scores" },
            { letter: "C", text: "Lack of guidance on what to study" },
            { letter: "D", text: "Family responsibilities or pressure" },
            { letter: "E", text: "Nothing major, I'm on track" }
        ]
    },
    {
        id: 64,
        section: "EDUCATION GOALS",
        text: "How confident are you about achieving your education goals?",
        options: [
            { letter: "A", text: "Very confident - I have a clear plan" },
            { letter: "B", text: "Somewhat confident - I'm working toward it" },
            { letter: "C", text: "Not very confident - There are many obstacles" },
            { letter: "D", text: "Not confident - I don't know how to start" },
            { letter: "E", text: "I don't have clear education goals yet" }
        ]
    },
    {
        id: 65,
        section: "CAREER ASPIRATIONS",
        text: "When do you hope to start your chosen career?",
        options: [
            { letter: "A", text: "Within 1-2 years (immediately after school)" },
            { letter: "B", text: "Within 3-5 years (after university/training)" },
            { letter: "C", text: "Within 5-10 years (after advanced education)" },
            { letter: "D", text: "I don't know yet" },
            { letter: "E", text: "I'm already working toward my career" }
        ]
    },
    {
        id: 66,
        section: "CAREER ASPIRATIONS",
        text: "What is most important to you in your future career?",
        options: [
            { letter: "A", text: "High income and financial stability" },
            { letter: "B", text: "Doing work I'm passionate about" },
            { letter: "C", text: "Making a positive impact on society" },
            { letter: "D", text: "Having status and respect" },
            { letter: "E", text: "Job security and work-life balance" }
        ]
    },
    {
        id: 67,
        section: "CAREER ASPIRATIONS",
        text: "Are you willing to relocate for your career?",
        options: [
            { letter: "A", text: "Yes, anywhere in Nigeria" },
            { letter: "B", text: "Yes, but only to major cities (Lagos, Abuja, etc.)" },
            { letter: "C", text: "Maybe, depends on the opportunity" },
            { letter: "D", text: "No, I want to stay in my current location" },
            { letter: "E", text: "I would like to work abroad if possible" }
        ]
    },
    {
        id: 68,
        section: "CAREER ASPIRATIONS",
        text: "What alternative plan do you have if your first career choice doesn't work out?",
        options: [
            { letter: "A", text: "I have a clear backup career plan" },
            { letter: "B", text: "I would try a related field" },
            { letter: "C", text: "I would learn a trade or vocational skill" },
            { letter: "D", text: "I would take any job available" },
            { letter: "E", text: "I haven't thought about it yet" }
        ]
    }
];

// LEVEL 4: CAPACITY ASSESSMENT (15 Questions)
const LEVEL4_QUESTIONS = [
    // Family Support (5 questions)
    {
        id: 71,
        section: "FAMILY SUPPORT",
        text: "Does anyone in your immediate family work in your chosen career field?",
        options: [
            { letter: "A", text: "Yes, and they're helping guide me" },
            { letter: "B", text: "Yes, but they're not very involved" },
            { letter: "C", text: "No, but they support my choice" },
            { letter: "D", text: "No, and they want me to choose something else" },
            { letter: "E", text: "I don't have a chosen career yet" }
        ]
    },
    {
        id: 72,
        section: "FAMILY SUPPORT",
        text: "What is the highest level of education in your family?",
        options: [
            { letter: "A", text: "University degree or higher (B.Sc, Masters, PhD)" },
            { letter: "B", text: "Polytechnic or College of Education (HND/NCE)" },
            { letter: "C", text: "Secondary school (WAEC/NECO)" },
            { letter: "D", text: "Primary school" },
            { letter: "E", text: "No formal education" }
        ]
    },
    {
        id: 73,
        section: "FAMILY SUPPORT",
        text: "Can your family afford to pay for your further education or training?",
        options: [
            { letter: "A", text: "Yes, fully without any problems" },
            { letter: "B", text: "Yes, but with some difficulty" },
            { letter: "C", text: "Only partially, I'll need scholarships" },
            { letter: "D", text: "No, I'll need to work and study" },
            { letter: "E", text: "No, I'll need full scholarships or loans" }
        ]
    },
    {
        id: 74,
        section: "FAMILY SUPPORT",
        text: "How supportive is your family of your career goals?",
        options: [
            { letter: "A", text: "Very supportive - They encourage me completely" },
            { letter: "B", text: "Supportive - They're okay with my choice" },
            { letter: "C", text: "Neutral - They don't have strong opinions" },
            { letter: "D", text: "Somewhat resistant - They prefer other options" },
            { letter: "E", text: "Very resistant - They don't approve at all" }
        ]
    },
    {
        id: 75,
        section: "FAMILY SUPPORT",
        text: "Do you have family responsibilities that might affect your education/career?",
        options: [
            { letter: "A", text: "No, I'm free to focus on my goals" },
            { letter: "B", text: "Minor responsibilities, but manageable" },
            { letter: "C", text: "Yes, I help with family business or income" },
            { letter: "D", text: "Yes, I care for younger siblings or family members" },
            { letter: "E", text: "Yes, I have major responsibilities that limit my options" }
        ]
    },
    
    // Resources & Networks (5 questions)
    {
        id: 76,
        section: "RESOURCES & NETWORKS",
        text: "Do you have access to reliable internet and a smartphone/computer?",
        options: [
            { letter: "A", text: "Yes, I have my own devices with regular internet" },
            { letter: "B", text: "Yes, but internet is limited or expensive" },
            { letter: "C", text: "I share devices with family members" },
            { letter: "D", text: "I only have access at school or cyber cafe" },
            { letter: "E", text: "Very limited or no access" }
        ]
    },
    {
        id: 77,
        section: "RESOURCES & NETWORKS",
        text: "Do you know anyone working in your chosen career field that you can learn from?",
        options: [
            { letter: "A", text: "Yes, several people who have offered to mentor me" },
            { letter: "B", text: "Yes, one or two people I can reach out to" },
            { letter: "C", text: "I know people but haven't connected with them yet" },
            { letter: "D", text: "No, but I'm looking for mentors" },
            { letter: "E", text: "No, I don't know anyone in that field" }
        ]
    },
    {
        id: 78,
        section: "RESOURCES & NETWORKS",
        text: "Have you attended any career talks, workshops, or training related to your interests?",
        options: [
            { letter: "A", text: "Yes, multiple times" },
            { letter: "B", text: "Yes, once or twice" },
            { letter: "C", text: "No, but opportunities are available" },
            { letter: "D", text: "No, and I don't know where to find them" },
            { letter: "E", text: "No opportunities available in my area" }
        ]
    },
    {
        id: 79,
        section: "RESOURCES & NETWORKS",
        text: "How far is the nearest university or polytechnic from where you live?",
        options: [
            { letter: "A", text: "In my city/town (less than 1 hour away)" },
            { letter: "B", text: "In my state (1-3 hours away)" },
            { letter: "C", text: "In a nearby state (3-5 hours away)" },
            { letter: "D", text: "Very far (more than 5 hours away)" },
            { letter: "E", text: "I don't know" }
        ]
    },
    {
        id: 80,
        section: "RESOURCES & NETWORKS",
        text: "If you needed help with school fees or career training, where would you look?",
        options: [
            { letter: "A", text: "My family can support me" },
            { letter: "B", text: "Scholarships and grants" },
            { letter: "C", text: "Government programs or NGOs" },
            { letter: "D", text: "I would work and save money" },
            { letter: "E", text: "I don't know where to look" }
        ]
    },
    
    // Self-Belief & Determination (5 questions)
    {
        id: 81,
        section: "SELF-BELIEF",
        text: "Do you believe you can achieve your career dreams despite challenges?",
        options: [
            { letter: "A", text: "Absolutely - Nothing will stop me" },
            { letter: "B", text: "Yes - I'll find a way" },
            { letter: "C", text: "Maybe - It depends on circumstances" },
            { letter: "D", text: "Not really - There are too many obstacles" },
            { letter: "E", text: "No - I don't think it's possible for someone like me" }
        ]
    },
    {
        id: 82,
        section: "SELF-BELIEF",
        text: "When you face a major setback, what do you usually do?",
        options: [
            { letter: "A", text: "Find another way and keep trying" },
            { letter: "B", text: "Take a break, then come back stronger" },
            { letter: "C", text: "Ask for help from others" },
            { letter: "D", text: "Feel discouraged but eventually try again" },
            { letter: "E", text: "Give up and try something else" }
        ]
    },
    {
        id: 83,
        section: "SELF-BELIEF",
        text: "How do you handle criticism or negative comments about your goals?",
        options: [
            { letter: "A", text: "I use it as motivation to prove them wrong" },
            { letter: "B", text: "I listen, but stay focused on my goals" },
            { letter: "C", text: "It bothers me, but I try to move on" },
            { letter: "D", text: "It makes me doubt myself" },
            { letter: "E", text: "It makes me want to give up" }
        ]
    },
    {
        id: 84,
        section: "SELF-BELIEF",
        text: "Have you ever achieved something difficult that others said you couldn't do?",
        options: [
            { letter: "A", text: "Yes, multiple times" },
            { letter: "B", text: "Yes, once or twice" },
            { letter: "C", text: "Not yet, but I'm working on it" },
            { letter: "D", text: "No, I usually listen to what others say" },
            { letter: "E", text: "I don't remember any such situation" }
        ]
    },
    {
        id: 85,
        section: "SELF-BELIEF",
        text: "Complete this sentence: 'In 10 years, I will...'",
        options: [
            { letter: "A", text: "Definitely be successful in my chosen career" },
            { letter: "B", text: "Probably be working in my chosen field" },
            { letter: "C", text: "Hopefully have found my path" },
            { letter: "D", text: "Still be figuring things out" },
            { letter: "E", text: "I don't think that far ahead" }
        ]
    }
];

// LEVEL 5: FINAL COMMITMENT ASSESSMENT (5 Questions)
const LEVEL5_QUESTIONS = [
    {
        id: 91,
        section: "COMMITMENT & DETERMINATION",
        text: "Are you willing to spend 4-6 years in university/training for your career?",
        options: [
            { letter: "A", text: "Yes, absolutely - I'm ready for the commitment" },
            { letter: "B", text: "Yes, if I have financial support" },
            { letter: "C", text: "Maybe - I prefer shorter training programs" },
            { letter: "D", text: "No - I want to start earning money sooner" },
            { letter: "E", text: "I'm not sure yet" }
        ]
    },
    {
        id: 92,
        section: "COMMITMENT & DETERMINATION",
        text: "Would you be willing to start at a low salary to gain experience in your field?",
        options: [
            { letter: "A", text: "Yes, experience is more important initially" },
            { letter: "B", text: "Yes, for a short period (6 months to 1 year)" },
            { letter: "C", text: "Only if there's a clear path to higher pay" },
            { letter: "D", text: "No, I need to earn well from the start" },
            { letter: "E", text: "I haven't thought about this" }
        ]
    },
    {
        id: 93,
        section: "COMMITMENT & DETERMINATION",
        text: "How many hours per week are you willing to dedicate to learning skills for your career?",
        options: [
            { letter: "A", text: "20+ hours (almost like a full-time job)" },
            { letter: "B", text: "10-20 hours (significant commitment)" },
            { letter: "C", text: "5-10 hours (moderate commitment)" },
            { letter: "D", text: "2-5 hours (whatever I can manage)" },
            { letter: "E", text: "Less than 2 hours" }
        ]
    },
    {
        id: 94,
        section: "COMMITMENT & DETERMINATION",
        text: "If your first attempt at entering your chosen career fails, will you try again?",
        options: [
            { letter: "A", text: "Yes, I'll try as many times as needed" },
            { letter: "B", text: "Yes, I'll try 2-3 more times" },
            { letter: "C", text: "Maybe once more, then I'll consider alternatives" },
            { letter: "D", text: "No, I'll move to my backup plan" },
            { letter: "E", text: "I don't know" }
        ]
    },
    {
        id: 95,
        section: "COMMITMENT & DETERMINATION",
        text: "On a scale, how determined are you to succeed in your chosen career path?",
        options: [
            { letter: "A", text: "10/10 - This is my life's mission, nothing will stop me" },
            { letter: "B", text: "8-9/10 - Very determined, I'll overcome obstacles" },
            { letter: "C", text: "6-7/10 - Determined, but realistic about challenges" },
            { letter: "D", text: "4-5/10 - Somewhat determined, but flexible" },
            { letter: "E", text: "Below 4/10 - Still exploring options" }
        ]
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LEVEL2_QUESTIONS,
        LEVEL3_QUESTIONS,
        LEVEL4_QUESTIONS,
        LEVEL5_QUESTIONS
    };
}