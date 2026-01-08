// COMPLETE 50 CAREERS DATABASE
// Based on McKinsey Future of Work Report & World Economic Forum

const CAREERS_DATABASE = [
    // TECHNOLOGY & DATA CAREERS (10)
    {
        id: 1,
        name: "Data Scientist",
        category: "Technology & Data",
        description: "Analyze large amounts of data to find patterns and help companies make smart decisions using statistics and computer programs.",
        globalDemand: "Very High",
        nigerianOpportunity: "High",
        averageSalary: "₦500,000 - ₦2,000,000/month",
        educationPath: "Statistics, Mathematics, Computer Science, Data Science",
        startingPath: "Learn Excel → Learn Python/R → Practice with data → Build portfolio → Get certifications",
        keySkills: ["Mathematics", "Programming", "Problem Solving", "Communication"],
        workEnvironment: "Office/Remote",
        
        // Complex Scoring Weights
        weights: { A: 3, B: 1, C: 1, D: 2, E: 5 },
        
        // Critical question patterns
        criticalQuestions: [7, 23, 30, 34, 45], // Must have E on these
        
        // Bonus patterns (specific combinations)
        bonusPatterns: [
            { questions: [12, 47], answer: 'E', bonus: 15 },
            { questions: [3, 5], answer: 'E', bonus: 10 },
            { questions: [1, 4], answer: 'E', bonus: 8 }
        ],
        
        // Minimum thresholds
        minimums: { E: 18, combinedAE: 25 }
    },
    
    {
        id: 2,
        name: "Software Developer",
        category: "Technology & Data",
        description: "Write computer code to create apps, websites, and software that people use every day.",
        globalDemand: "Very High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦300,000 - ₦1,500,000/month",
        educationPath: "Computer Science, Software Engineering",
        startingPath: "Learn HTML/CSS → JavaScript → Build projects → Freelance online → Join tech company",
        keySkills: ["Logical Thinking", "Problem Solving", "Patience", "Creativity"],
        workEnvironment: "Office/Remote",
        weights: { A: 2, B: 2, C: 0, D: 1, E: 5 },
        criticalQuestions: [7, 30, 44, 49],
        bonusPatterns: [
            { questions: [9, 24, 45], answer: 'E', bonus: 12 },
            { questions: [26, 28], answer: 'E', bonus: 10 }
        ],
        minimums: { E: 20, combinedBE: 25 }
    },
    
    {
        id: 3,
        name: "Cybersecurity Specialist",
        category: "Technology & Data",
        description: "Protect computer systems and networks from hackers and cyber attacks.",
        globalDemand: "Very High",
        nigerianOpportunity: "High",
        averageSalary: "₦400,000 - ₦1,800,000/month",
        educationPath: "Computer Science, Information Security",
        startingPath: "Learn networking → Study security basics → Get certifications (CompTIA, CEH) → Practice",
        keySkills: ["Attention to Detail", "Problem Solving", "Ethical Thinking", "Technical Skills"],
        workEnvironment: "Office/Remote",
        weights: { A: 3, B: 0, C: 2, D: 1, E: 5 },
        criticalQuestions: [7, 16, 30, 35],
        bonusPatterns: [
            { questions: [11, 14], answer: 'E', bonus: 12 },
            { questions: [17, 23], answer: 'A', bonus: 10 }
        ],
        minimums: { E: 16, A: 10 }
    },
    
    {
        id: 4,
        name: "AI/Machine Learning Engineer",
        category: "Technology & Data",
        description: "Build smart computer systems that can learn and make decisions like humans.",
        globalDemand: "Very High",
        nigerianOpportunity: "Medium",
        averageSalary: "₦600,000 - ₦2,500,000/month",
        educationPath: "Computer Science, AI, Mathematics",
        startingPath: "Master programming → Learn statistics → Study AI algorithms → Build AI projects",
        keySkills: ["Advanced Math", "Programming", "Research", "Innovation"],
        workEnvironment: "Research Labs/Tech Companies",
        weights: { A: 2, B: 1, C: 0, D: 1, E: 6 },
        criticalQuestions: [7, 9, 23, 30, 47],
        bonusPatterns: [
            { questions: [1, 4, 5], answer: 'E', bonus: 15 },
            { questions: [12, 14, 15], answer: 'E', bonus: 15 }
        ],
        minimums: { E: 22, combinedDE: 26 }
    },
    
    {
        id: 5,
        name: "Cloud Computing Specialist",
        category: "Technology & Data",
        description: "Manage computer systems and data storage on the internet instead of physical computers.",
        globalDemand: "Very High",
        nigerianOpportunity: "High",
        averageSalary: "₦450,000 - ₦2,000,000/month",
        educationPath: "Computer Science, Information Technology",
        startingPath: "Learn networking → Study cloud platforms (AWS, Azure) → Get certifications → Practice",
        keySkills: ["Technical Skills", "Problem Solving", "Business Understanding"],
        workEnvironment: "Office/Remote",
        weights: { A: 3, B: 0, C: 1, D: 2, E: 5 },
        criticalQuestions: [7, 30, 46],
        bonusPatterns: [
            { questions: [3, 13], answer: 'E', bonus: 10 },
            { questions: [18, 23], answer: 'E', bonus: 10 }
        ],
        minimums: { E: 15, A: 10 }
    },
    
    {
        id: 6,
        name: "UX/UI Designer",
        category: "Technology & Data",
        description: "Design how apps and websites look and work to make them easy and enjoyable to use.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦250,000 - ₦1,200,000/month",
        educationPath: "Graphic Design, Computer Science, HCI",
        startingPath: "Learn design tools (Figma) → Study user psychology → Build portfolio → Freelance",
        keySkills: ["Creativity", "Empathy", "Technical Skills", "Problem Solving"],
        workEnvironment: "Office/Remote",
        weights: { A: 1, B: 4, C: 2, D: 2, E: 3 },
        criticalQuestions: [6, 25, 33],
        bonusPatterns: [
            { questions: [7, 10], answer: 'B', bonus: 12 },
            { questions: [22, 26], answer: 'B', bonus: 10 }
        ],
        minimums: { B: 10, E: 12 }
    },
    
    {
        id: 7,
        name: "Mobile App Developer",
        category: "Technology & Data",
        description: "Create applications for smartphones (Android/iOS).",
        globalDemand: "High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦300,000 - ₦1,500,000/month",
        educationPath: "Computer Science, Software Engineering",
        startingPath: "Learn programming → Study mobile frameworks → Build apps → Publish on stores",
        keySkills: ["Programming", "UI Design", "Problem Solving", "User Focus"],
        workEnvironment: "Tech Companies/Freelance",
        weights: { A: 2, B: 3, C: 1, D: 1, E: 4 },
        criticalQuestions: [7, 30, 44],
        bonusPatterns: [
            { questions: [6, 33], answer: 'E', bonus: 10 },
            { questions: [25, 45], answer: 'E', bonus: 10 }
        ],
        minimums: { E: 16, B: 8 }
    },
    
    {
        id: 8,
        name: "Database Administrator",
        category: "Technology & Data",
        description: "Manage and protect large databases that store important company information.",
        globalDemand: "High",
        nigerianOpportunity: "Medium-High",
        averageSalary: "₦350,000 - ₦1,500,000/month",
        educationPath: "Computer Science, Information Systems",
        startingPath: "Learn SQL → Study database systems → Get certifications → Gain experience",
        keySkills: ["Attention to Detail", "Problem Solving", "Technical Skills", "Reliability"],
        workEnvironment: "Office",
        weights: { A: 4, B: 0, C: 1, D: 1, E: 5 },
        criticalQuestions: [7, 16, 23],
        bonusPatterns: [
            { questions: [10, 22], answer: 'A', bonus: 10 },
            { questions: [26, 28], answer: 'A', bonus: 10 }
        ],
        minimums: { E: 14, A: 12 }
    },
    
    {
        id: 9,
        name: "DevOps Engineer",
        category: "Technology & Data",
        description: "Make software development and IT operations work smoothly together.",
        globalDemand: "Very High",
        nigerianOpportunity: "Medium-High",
        averageSalary: "₦400,000 - ₦1,800,000/month",
        educationPath: "Computer Science, IT",
        startingPath: "Learn programming → Master Linux → Study automation tools → Build CI/CD pipelines",
        keySkills: ["Programming", "System Administration", "Automation", "Problem Solving"],
        workEnvironment: "Tech Companies",
        weights: { A: 3, B: 0, C: 1, D: 2, E: 5 },
        criticalQuestions: [7, 16, 30],
        bonusPatterns: [
            { questions: [8, 19, 27], answer: 'E', bonus: 12 },
            { questions: [26, 29], answer: 'E', bonus: 10 }
        ],
        minimums: { E: 17, A: 8 }
    },
    
    {
        id: 10,
        name: "Blockchain Developer",
        category: "Technology & Data",
        description: "Build applications using blockchain technology (like cryptocurrency systems).",
        globalDemand: "High",
        nigerianOpportunity: "Medium",
        averageSalary: "₦500,000 - ₦2,500,000/month",
        educationPath: "Computer Science, Cryptography",
        startingPath: "Master programming → Learn blockchain basics → Study smart contracts → Build projects",
        keySkills: ["Advanced Programming", "Cryptography", "Security", "Innovation"],
        workEnvironment: "Tech Startups/Remote",
        weights: { A: 3, B: 1, C: 0, D: 1, E: 5 },
        criticalQuestions: [7, 9, 23],
        bonusPatterns: [
            { questions: [13, 15], answer: 'E', bonus: 12 },
            { questions: [17, 31], answer: 'B', bonus: 10 }
        ],
        minimums: { E: 18, A: 10 }
    },
    
    // HEALTHCARE CAREERS (6)
    {
        id: 11,
        name: "Registered Nurse",
        category: "Healthcare",
        description: "Provide direct care to patients in hospitals, clinics, and healthcare facilities.",
        globalDemand: "Very High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦150,000 - ₦500,000/month",
        educationPath: "Nursing School (B.Sc Nursing)",
        startingPath: "Volunteer at hospital → Enter nursing school → Get licensed → Specialize",
        keySkills: ["Empathy", "Medical Knowledge", "Communication", "Stress Management"],
        workEnvironment: "Hospitals/Clinics",
        weights: { A: 2, B: 0, C: 5, D: 2, E: 2 },
        criticalQuestions: [3, 6, 30],
        bonusPatterns: [
            { questions: [1, 4], answer: 'C', bonus: 15 },
            { questions: [11, 14], answer: 'C', bonus: 12 }
        ],
        minimums: { C: 18, combinedCD: 24 }
    },
    
    {
        id: 12,
        name: "Medical Doctor",
        category: "Healthcare",
        description: "Diagnose and treat illnesses, perform surgeries, and provide medical care.",
        globalDemand: "Very High",
        nigerianOpportunity: "High",
        averageSalary: "₦300,000 - ₦2,000,000/month",
        educationPath: "Medical School (MBBS) + Specialization",
        startingPath: "Excel in sciences → Medical school → Internship → Residency → Practice",
        keySkills: ["Medical Knowledge", "Problem Solving", "Empathy", "Leadership"],
        workEnvironment: "Hospitals/Private Practice",
        weights: { A: 2, B: 0, C: 4, D: 2, E: 4 },
        criticalQuestions: [3, 7, 40],
        bonusPatterns: [
            { questions: [5, 15], answer: 'C', bonus: 12 },
            { questions: [13, 20], answer: 'E', bonus: 12 }
        ],
        minimums: { C: 15, E: 15 }
    },
    
    {
        id: 13,
        name: "Pharmacist",
        category: "Healthcare",
        description: "Prepare and dispense medications, advise patients on drug usage.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦200,000 - ₦800,000/month",
        educationPath: "Pharmacy (B.Pharm)",
        startingPath: "Excel in sciences → Pharmacy school → Internship → License → Practice",
        keySkills: ["Attention to Detail", "Medical Knowledge", "Communication", "Ethics"],
        workEnvironment: "Hospitals/Pharmacies",
        weights: { A: 3, B: 0, C: 4, D: 1, E: 3 },
        criticalQuestions: [7, 16, 23],
        bonusPatterns: [
            { questions: [3, 11], answer: 'C', bonus: 12 },
            { questions: [10, 22], answer: 'A', bonus: 10 }
        ],
        minimums: { C: 14, E: 10, A: 10 }
    },
    
    {
        id: 14,
        name: "Mental Health Counselor",
        category: "Healthcare",
        description: "Help people deal with emotional problems, stress, and mental health issues.",
        globalDemand: "High",
        nigerianOpportunity: "Medium-High",
        averageSalary: "₦150,000 - ₦600,000/month",
        educationPath: "Psychology, Counseling",
        startingPath: "Study psychology → Get counseling training → Volunteer → Get licensed → Build practice",
        keySkills: ["Empathy", "Listening", "Communication", "Patience"],
        workEnvironment: "Clinics/Private Practice/Schools",
        weights: { A: 0, B: 1, C: 5, D: 3, E: 2 },
        criticalQuestions: [6, 8, 21],
        bonusPatterns: [
            { questions: [3, 15], answer: 'C', bonus: 15 },
            { questions: [19, 23, 27], answer: 'C', bonus: 12 }
        ],
        minimums: { C: 20, D: 10 }
    },
    
    {
        id: 15,
        name: "Public Health Specialist",
        category: "Healthcare",
        description: "Work to prevent disease and promote health in communities.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦200,000 - ₦800,000/month",
        educationPath: "Public Health, Epidemiology",
        startingPath: "Study public health → Volunteer with NGOs → Work with government/NGOs → Specialize",
        keySkills: ["Research", "Community Engagement", "Data Analysis", "Communication"],
        workEnvironment: "Government/NGOs",
        weights: { A: 2, B: 0, C: 4, D: 2, E: 3 },
        criticalQuestions: [11, 12, 14],
        bonusPatterns: [
            { questions: [3, 5], answer: 'C', bonus: 12 },
            { questions: [30, 47], answer: 'C', bonus: 10 }
        ],
        minimums: { C: 16, E: 10 }
    },
    
    {
        id: 16,
        name: "Healthcare Data Analyst",
        category: "Healthcare",
        description: "Analyze medical data to improve patient care and hospital operations.",
        globalDemand: "High",
        nigerianOpportunity: "Medium",
        averageSalary: "₦250,000 - ₦1,000,000/month",
        educationPath: "Public Health, Statistics, Health Informatics",
        startingPath: "Learn statistics → Study healthcare systems → Master data tools → Work with health orgs",
        keySkills: ["Data Analysis", "Healthcare Knowledge", "Problem Solving", "Communication"],
        workEnvironment: "Hospitals/Health Organizations",
        weights: { A: 3, B: 0, C: 3, D: 1, E: 4 },
        criticalQuestions: [7, 23, 30],
        bonusPatterns: [
            { questions: [11, 47], answer: 'C', bonus: 12 },
            { questions: [14, 15], answer: 'C', bonus: 10 }
        ],
        minimums: { E: 12, C: 12 }
    },
    
    // BUSINESS & FINANCE CAREERS (8)
    {
        id: 17,
        name: "Financial Analyst",
        category: "Business & Finance",
        description: "Analyze financial data to help companies make investment decisions.",
        globalDemand: "Very High",
        nigerianOpportunity: "High",
        averageSalary: "₦300,000 - ₦1,500,000/month",
        educationPath: "Finance, Accounting, Economics",
        startingPath: "Study finance → Learn Excel/financial modeling → Get internship → Build portfolio",
        keySkills: ["Mathematics", "Analysis", "Business Sense", "Communication"],
        workEnvironment: "Banks/Investment Firms",
        weights: { A: 5, B: 0, C: 0, D: 2, E: 4 },
        criticalQuestions: [7, 23, 30],
        bonusPatterns: [
            { questions: [1, 2], answer: 'A', bonus: 12 },
            { questions: [3, 5], answer: 'A', bonus: 10 }
        ],
        minimums: { A: 18, E: 12 }
    },
    
    {
        id: 18,
        name: "Accountant",
        category: "Business & Finance",
        description: "Manage financial records, prepare taxes, ensure financial compliance.",
        globalDemand: "High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦150,000 - ₦800,000/month",
        educationPath: "Accounting, Finance",
        startingPath: "Study accounting → Get ICAN/ACCA certification → Gain experience → Specialize",
        keySkills: ["Attention to Detail", "Mathematics", "Integrity", "Organization"],
        workEnvironment: "Offices/Firms",
        weights: { A: 5, B: 0, C: 0, D: 1, E: 3 },
        criticalQuestions: [6, 7, 30],
        bonusPatterns: [
            { questions: [2, 4], answer: 'A', bonus: 12 },
            { questions: [16, 23], answer: 'A', bonus: 12 }
        ],
        minimums: { A: 20, E: 8 }
    },
    
    {
        id: 19,
        name: "Management Consultant",
        category: "Business & Finance",
        description: "Advise companies on how to solve business problems.",
        globalDemand: "High",
        nigerianOpportunity: "Medium-High",
        averageSalary: "₦400,000 - ₦2,000,000/month",
        educationPath: "Business Administration, Management",
        startingPath: "Study business → Develop analytical skills → Get consulting experience",
        keySkills: ["Problem Solving", "Communication", "Business Knowledge", "Leadership"],
        workEnvironment: "Consulting Firms/Travel",
        weights: { A: 3, B: 1, C: 1, D: 3, E: 4 },
        criticalQuestions: [8, 18, 25],
        bonusPatterns: [
            { questions: [10, 22], answer: 'D', bonus: 12 },
            { questions: [16, 19], answer: 'E', bonus: 10 }
        ],
        minimums: { D: 12, E: 12 }
    },
    
    {
        id: 20,
        name: "Product Manager",
        category: "Business & Finance",
        description: "Decide what features products should have and guide their development.",
        globalDemand: "Very High",
        nigerianOpportunity: "Medium-High",
        averageSalary: "₦400,000 - ₦2,000,000/month",
        educationPath: "Business, Engineering, Computer Science",
        startingPath: "Learn tech + business → Work in product team → Build products → Lead development",
        keySkills: ["Strategic Thinking", "Communication", "Technical Knowledge", "Leadership"],
        workEnvironment: "Tech Companies",
        weights: { A: 3, B: 2, C: 1, D: 3, E: 3 },
        criticalQuestions: [25, 26, 33],
        bonusPatterns: [
            { questions: [4, 10], answer: 'D', bonus: 10 },
            { questions: [18, 29], answer: 'D', bonus: 10 }
        ],
        minimums: { D: 12, E: 10, A: 8 }
    },
    
    {
        id: 21,
        name: "Digital Marketing Specialist",
        category: "Business & Finance",
        description: "Promote products online using social media, websites, and digital ads.",
        globalDemand: "Very High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦200,000 - ₦1,000,000/month",
        educationPath: "Marketing, Communications, Business",
        startingPath: "Learn social media → Study digital marketing → Build portfolio → Freelance/work",
        keySkills: ["Creativity", "Communication", "Data Analysis", "Trend Awareness"],
        workEnvironment: "Marketing Agencies/Remote",
        weights: { A: 2, B: 3, C: 0, D: 4, E: 2 },
        criticalQuestions: [10, 21, 45],
        bonusPatterns: [
            { questions: [13, 15], answer: 'D', bonus: 12 },
            { questions: [24, 30], answer: 'D', bonus: 10 }
        ],
        minimums: { D: 15, B: 8 }
    },
    
    {
        id: 22,
        name: "Supply Chain Manager",
        category: "Business & Finance",
        description: "Manage the flow of products from manufacturers to customers.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦300,000 - ₦1,200,000/month",
        educationPath: "Business, Logistics, Operations Management",
        startingPath: "Study logistics → Work in warehousing/transportation → Learn systems → Manage",
        keySkills: ["Organization", "Problem Solving", "Negotiation", "Data Analysis"],
        workEnvironment: "Manufacturing/Retail Companies",
        weights: { A: 5, B: 0, C: 1, D: 2, E: 3 },
        criticalQuestions: [6, 9, 33],
        bonusPatterns: [
            { questions: [8, 16], answer: 'A', bonus: 12 },
            { questions: [18, 26], answer: 'A', bonus: 10 }
        ],
        minimums: { A: 18, E: 8 }
    },
    
    {
        id: 23,
        name: "Business Development Manager",
        category: "Business & Finance",
        description: "Find new business opportunities and build relationships to grow sales.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦250,000 - ₦1,500,000/month",
        educationPath: "Business, Marketing, Sales",
        startingPath: "Learn sales → Build network → Gain experience → Develop strategy skills",
        keySkills: ["Communication", "Networking", "Negotiation", "Strategic Thinking"],
        workEnvironment: "Various Industries",
        weights: { A: 3, B: 1, C: 0, D: 5, E: 2 },
        criticalQuestions: [10, 21, 34],
        bonusPatterns: [
            { questions: [4, 5], answer: 'D', bonus: 12 },
            { questions: [13, 15], answer: 'D', bonus: 10 }
        ],
        minimums: { D: 18, A: 10 }
    },
    
    {
        id: 24,
        name: "Human Resources Manager",
        category: "Business & Finance",
        description: "Manage employee recruitment, training, and workplace relations.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦250,000 - ₦1,000,000/month",
        educationPath: "Human Resources, Psychology, Business",
        startingPath: "Study HR → Get certifications → Gain experience → Specialize in HR areas",
        keySkills: ["People Skills", "Communication", "Problem Solving", "Organization"],
        workEnvironment: "Corporate Offices",
        weights: { A: 2, B: 0, C: 3, D: 4, E: 2 },
        criticalQuestions: [8, 21, 48],
        bonusPatterns: [
            { questions: [6, 10], answer: 'C', bonus: 10 },
            { questions: [22, 26], answer: 'D', bonus: 10 }
        ],
        minimums: { D: 14, C: 10 }
    },
    
    // CREATIVE & DESIGN CAREERS (6)
    {
        id: 25,
        name: "Video Content Creator/Editor",
        category: "Creative & Design",
        description: "Create and edit videos for YouTube, social media, TV, or films.",
        globalDemand: "Very High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦150,000 - ₦1,000,000/month",
        educationPath: "Film, Media, Self-taught",
        startingPath: "Learn editing software → Create content → Build portfolio → Freelance/work",
        keySkills: ["Creativity", "Technical Skills", "Storytelling", "Attention to Detail"],
        workEnvironment: "Studios/Remote/Freelance",
        weights: { A: 1, B: 5, C: 0, D: 2, E: 2 },
        criticalQuestions: [7, 25, 45],
        bonusPatterns: [
            { questions: [9, 24], answer: 'B', bonus: 15 },
            { questions: [15, 20], answer: 'B', bonus: 12 }
        ],
        minimums: { B: 18, E: 8 }
    },
    
    {
        id: 26,
        name: "Graphic Designer",
        category: "Creative & Design",
        description: "Create visual designs for logos, posters, websites, and marketing materials.",
        globalDemand: "High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦100,000 - ₦600,000/month",
        educationPath: "Graphic Design, Fine Arts, Self-taught",
        startingPath: "Learn design software → Build portfolio → Freelance → Specialize",
        keySkills: ["Creativity", "Design Software", "Communication", "Attention to Detail"],
        workEnvironment: "Agencies/Remote/Freelance",
        weights: { A: 1, B: 5, C: 0, D: 2, E: 2 },
        criticalQuestions: [6, 10, 30],
        bonusPatterns: [
            { questions: [7, 22], answer: 'B', bonus: 12 },
            { questions: [24, 25], answer: 'B', bonus: 12 }
        ],
        minimums: { B: 18, D: 6 }
    },
    
    {
        id: 27,
        name: "Fashion Designer",
        category: "Creative & Design",
        description: "Design and create clothing, accessories, and fashion items.",
        globalDemand: "Medium-High",
        nigerianOpportunity: "High",
        averageSalary: "₦100,000 - ₦800,000/month",
        educationPath: "Fashion Design, Self-taught",
        startingPath: "Learn sewing → Study design → Build portfolio → Start fashion line",
        keySkills: ["Creativity", "Sewing", "Business Sense", "Trend Awareness"],
        workEnvironment: "Studios/Ateliers/Own Business",
        weights: { A: 2, B: 5, C: 0, D: 2, E: 0 },
        criticalQuestions: [6, 7, 25],
        bonusPatterns: [
            { questions: [2, 43], answer: 'B', bonus: 12 },
            { questions: [15, 20], answer: 'B', bonus: 12 }
        ],
        minimums: { B: 20, A: 6 }
    },
    
    {
        id: 28,
        name: "Architect",
        category: "Creative & Design",
        description: "Design buildings and oversee their construction.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦250,000 - ₦1,500,000/month",
        educationPath: "Architecture (B.Arch)",
        startingPath: "Excel in math/art → Architecture school → Internship → License → Practice",
        keySkills: ["Design", "Technical Drawing", "Math", "Creativity"],
        workEnvironment: "Architecture Firms/Own Practice",
        weights: { A: 2, B: 4, C: 0, D: 1, E: 4 },
        criticalQuestions: [7, 23, 25],
        bonusPatterns: [
            { questions: [8, 16], answer: 'B', bonus: 10 },
            { questions: [18, 26], answer: 'E', bonus: 10 }
        ],
        minimums: { B: 12, E: 12 }
    },
    
    {
        id: 29,
        name: "Interior Designer",
        category: "Creative & Design",
        description: "Design and decorate interior spaces to be functional and beautiful.",
        globalDemand: "Medium-High",
        nigerianOpportunity: "High",
        averageSalary: "₦150,000 - ₦800,000/month",
        educationPath: "Interior Design, Architecture",
        startingPath: "Learn design → Build portfolio → Gain experience → Start business",
        keySkills: ["Creativity", "Space Planning", "Communication", "Business Sense"],
        workEnvironment: "Design Firms/Own Business",
        weights: { A: 2, B: 5, C: 1, D: 2, E: 1 },
        criticalQuestions: [6, 33, 46],
        bonusPatterns: [
            { questions: [7, 10], answer: 'B', bonus: 12 },
            { questions: [22, 25], answer: 'B', bonus: 10 }
        ],
        minimums: { B: 16, D: 6 }
    },
    
    {
        id: 30,
        name: "Photographer/Videographer",
        category: "Creative & Design",
        description: "Take professional photos and videos for events, products, or art.",
        globalDemand: "Medium",
        nigerianOpportunity: "High",
        averageSalary: "₦80,000 - ₦500,000/month",
        educationPath: "Photography, Self-taught",
        startingPath: "Practice with phone → Buy camera → Build portfolio → Specialize → Market services",
        keySkills: ["Artistic Eye", "Technical Skills", "Marketing", "Customer Service"],
        workEnvironment: "Freelance/Studios",
        weights: { A: 2, B: 5, C: 0, D: 2, E: 1 },
        criticalQuestions: [6, 24, 43],
        bonusPatterns: [
            { questions: [7, 22], answer: 'B', bonus: 12 },
            { questions: [15, 32], answer: 'B', bonus: 10 }
        ],
        minimums: { B: 18, A: 6 }
    },
    
    // ENGINEERING CAREERS (5)
    {
        id: 31,
        name: "Civil Engineer",
        category: "Engineering",
        description: "Design and supervise construction of buildings, roads, and infrastructure.",
        globalDemand: "High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦200,000 - ₦1,000,000/month",
        educationPath: "Civil Engineering (B.Eng)",
        startingPath: "Excel in math/physics → Engineering school → Internship → Registration → Practice",
        keySkills: ["Math", "Problem Solving", "Technical Drawing", "Project Management"],
        workEnvironment: "Construction Sites/Offices",
        weights: { A: 3, B: 1, C: 1, D: 1, E: 5 },
        criticalQuestions: [7, 16, 47],
        bonusPatterns: [
            { questions: [8, 9], answer: 'E', bonus: 12 },
            { questions: [14, 23], answer: 'E', bonus: 10 }
        ],
        minimums: { E: 16, A: 10 }
    },
    
    {
        id: 32,
        name: "Electrical Engineer",
        category: "Engineering",
        description: "Design and maintain electrical systems and equipment.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦200,000 - ₦1,000,000/month",
        educationPath: "Electrical Engineering (B.Eng)",
        startingPath: "Excel in math/physics → Engineering school → Internship → Registration → Specialize",
        keySkills: ["Math", "Electronics", "Problem Solving", "Technical Skills"],
        workEnvironment: "Industries/Power Companies",
        weights: { A: 2, B: 0, C: 1, D: 1, E: 5 },
        criticalQuestions: [6, 7, 30],
        bonusPatterns: [
            { questions: [4, 16], answer: 'E', bonus: 12 },
            { questions: [23, 35], answer: 'E', bonus: 10 }
        ],
        minimums: { E: 18, A: 8 }
    },
    
    {
        id: 33,
        name: "Mechanical Engineer",
        category: "Engineering",
        description: "Design and build machines, engines, and mechanical systems.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦200,000 - ₦1,000,000/month",
        educationPath: "Mechanical Engineering (B.Eng)",
        startingPath: "Excel in math/physics → Engineering school → Internship → Registration → Practice",
        keySkills: ["Math", "Physics", "Problem Solving", "Design"],
        workEnvironment: "Manufacturing/Industries",
        weights: { A: 2, B: 1, C: 0, D: 1, E: 5 },
        criticalQuestions: [7, 8, 30],
        bonusPatterns: [
            { questions: [4, 9], answer: 'E', bonus: 12 },
            { questions: [16, 23], answer: 'E', bonus: 10 }
        ],
        minimums: { E: 18, A: 6 }
    },
    
    {
        id: 34,
        name: "Petroleum Engineer",
        category: "Engineering",
        description: "Find and extract oil and gas from underground reservoirs.",
        globalDemand: "Medium-High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦400,000 - ₦2,500,000/month",
        educationPath: "Petroleum Engineering (B.Eng)",
        startingPath: "Excel in sciences → Engineering school → Internship → Work in oil sector",
        keySkills: ["Math", "Geology", "Problem Solving", "Technical Skills"],
        workEnvironment: "Oil Fields/Offices",
        weights: { A: 3, B: 0, C: 0, D: 1, E: 5 },
        criticalQuestions: [7, 23, 30],
        bonusPatterns: [
            { questions: [3, 5], answer: 'A', bonus: 12 },
            { questions: [11, 13], answer: 'A', bonus: 10 }
        ],
        minimums: { E: 16, A: 12 }
    },
    
    {
        id: 35,
        name: "Renewable Energy Engineer",
        category: "Engineering",
        description: "Design systems that generate clean energy from solar, wind, etc.",
        globalDemand: "Very High",
        nigerianOpportunity: "Medium",
        averageSalary: "₦250,000 - ₦1,500,000/month",
        educationPath: "Electrical Engineering, Renewable Energy",
        startingPath: "Study engineering → Specialize in renewables → Work on projects → Innovate",
        keySkills: ["Technical Skills", "Innovation", "Environmental Awareness", "Problem Solving"],
        workEnvironment: "Energy Companies/Projects",
        weights: { A: 2, B: 1, C: 2, D: 1, E: 5 },
        criticalQuestions: [7, 12, 47],
        bonusPatterns: [
            { questions: [11, 14], answer: 'E', bonus: 15 },
            { questions: [15, 41], answer: 'E', bonus: 12 }
        ],
        minimums: { E: 18, C: 6 }
    },
    
    // EDUCATION CAREERS (4)
    {
        id: 36,
        name: "Teacher (Primary/Secondary)",
        category: "Education",
        description: "Teach children and teenagers in schools.",
        globalDemand: "High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦80,000 - ₦400,000/month",
        educationPath: "Education, Subject Specialization",
        startingPath: "Study education → Practice teaching → Get certified → Gain experience",
        keySkills: ["Communication", "Patience", "Subject Knowledge", "Caring"],
        workEnvironment: "Schools",
        weights: { A: 1, B: 1, C: 5, D: 2, E: 2 },
        criticalQuestions: [3, 6, 30],
        bonusPatterns: [
            { questions: [10, 22], answer: 'C', bonus: 12 },
            { questions: [15, 20], answer: 'C', bonus: 12 }
        ],
        minimums: { C: 18, D: 8 }
    },
    
    {
        id: 37,
        name: "Instructional Designer (EdTech)",
        category: "Education",
        description: "Create online courses and educational technology products.",
        globalDemand: "Very High",
        nigerianOpportunity: "Medium",
        averageSalary: "₦250,000 - ₦1,200,000/month",
        educationPath: "Education, Educational Technology",
        startingPath: "Learn teaching → Study technology → Create courses → Work with EdTech",
        keySkills: ["Teaching", "Technology", "Creativity", "Communication"],
        workEnvironment: "EdTech Companies/Remote",
        weights: { A: 1, B: 3, C: 3, D: 1, E: 4 },
        criticalQuestions: [3, 30, 44],
        bonusPatterns: [
            { questions: [6, 25], answer: 'C', bonus: 10 },
            { questions: [7, 46], answer: 'E', bonus: 10 }
        ],
        minimums: { C: 12, E: 14 }
    },
    
    {
        id: 38,
        name: "Corporate Trainer",
        category: "Education",
        description: "Train employees in companies on skills and professional development.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦200,000 - ₦1,000,000/month",
        educationPath: "Any field + Training certification",
        startingPath: "Develop expertise → Learn training methods → Get certified → Build portfolio",
        keySkills: ["Public Speaking", "Subject Expertise", "Communication", "Engagement"],
        workEnvironment: "Corporate/Travel",
        weights: { A: 2, B: 1, C: 3, D: 4, E: 2 },
        criticalQuestions: [10, 21, 44],
        bonusPatterns: [
            { questions: [4, 5], answer: 'D', bonus: 12 },
            { questions: [20, 29], answer: 'D', bonus: 10 }
        ],
        minimums: { D: 16, C: 10 }
    },
    
    {
        id: 39,
        name: "University Lecturer",
        category: "Education",
        description: "Teach university students and conduct research.",
        globalDemand: "Medium-High",
        nigerianOpportunity: "Medium",
        averageSalary: "₦200,000 - ₦1,000,000/month",
        educationPath: "Master's/PhD in Subject Area",
        startingPath: "Excel academically → Get Master's/PhD → Teach → Publish research → Progress",
        keySkills: ["Deep Knowledge", "Research", "Teaching", "Writing"],
        workEnvironment: "Universities",
        weights: { A: 1, B: 0, C: 3, D: 2, E: 5 },
        criticalQuestions: [9, 13, 15],
        bonusPatterns: [
            { questions: [5, 20], answer: 'E', bonus: 15 },
            { questions: [30, 34], answer: 'E', bonus: 12 }
        ],
        minimums: { E: 20, C: 10 }
    },
    
    // OPERATIONS & MANAGEMENT (5)
    {
        id: 40,
        name: "Operations Manager",
        category: "Operations & Management",
        description: "Oversee daily operations of businesses to ensure efficiency.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦300,000 - ₦1,500,000/month",
        educationPath: "Business Administration, Operations Management",
        startingPath: "Gain work experience → Learn operations → Manage teams → Optimize processes",
        keySkills: ["Organization", "Leadership", "Problem Solving", "Communication"],
        workEnvironment: "Various Industries",
        weights: { A: 4, B: 0, C: 2, D: 3, E: 2 },
        criticalQuestions: [9, 16, 25],
        bonusPatterns: [
            { questions: [8, 18], answer: 'A', bonus: 12 },
            { questions: [10, 26], answer: 'A', bonus: 10 }
        ],
        minimums: { A: 16, D: 10 }
    },
    
    {
        id: 41,
        name: "Project Manager",
        category: "Operations & Management",
        description: "Plan and execute projects to completion on time and within budget.",
        globalDemand: "Very High",
        nigerianOpportunity: "High",
        averageSalary: "₦300,000 - ₦1,500,000/month",
        educationPath: "Any field + Project Management certification",
        startingPath: "Gain experience → Get certified (PMP) → Manage small projects → Lead large ones",
        keySkills: ["Planning", "Leadership", "Communication", "Problem Solving"],
        workEnvironment: "Various Industries",
        weights: { A: 4, B: 0, C: 1, D: 3, E: 3 },
        criticalQuestions: [6, 18, 25],
        bonusPatterns: [
            { questions: [9, 16], answer: 'A', bonus: 12 },
            { questions: [26, 28], answer: 'A', bonus: 10 }
        ],
        minimums: { A: 15, D: 10 }
    },
    
    {
        id: 42,
        name: "Quality Assurance Specialist",
        category: "Operations & Management",
        description: "Ensure products and services meet quality standards.",
        globalDemand: "High",
        nigerianOpportunity: "Medium-High",
        averageSalary: "₦200,000 - ₦900,000/month",
        educationPath: "Any technical field + QA training",
        startingPath: "Learn quality systems → Get experience → Get certified → Specialize",
        keySkills: ["Attention to Detail", "Analysis", "Problem Solving", "Communication"],
        workEnvironment: "Manufacturing/Tech Companies",
        weights: { A: 4, B: 0, C: 1, D: 1, E: 4 },
        criticalQuestions: [16, 23, 35],
        bonusPatterns: [
            { questions: [10, 22], answer: 'A', bonus: 12 },
            { questions: [26, 28], answer: 'A', bonus: 10 }
        ],
        minimums: { A: 14, E: 12 }
    },
    
    {
        id: 43,
        name: "Logistics Coordinator",
        category: "Operations & Management",
        description: "Coordinate movement of goods and materials efficiently.",
        globalDemand: "High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦150,000 - ₦700,000/month",
        educationPath: "Business, Logistics, Operations",
        startingPath: "Learn logistics → Work in supply chain → Coordinate operations → Advance",
        keySkills: ["Organization", "Problem Solving", "Communication", "Attention to Detail"],
        workEnvironment: "Warehouses/Offices",
        weights: { A: 5, B: 0, C: 1, D: 2, E: 2 },
        criticalQuestions: [6, 9, 33],
        bonusPatterns: [
            { questions: [16, 18], answer: 'A', bonus: 12 },
            { questions: [26, 31], answer: 'A', bonus: 10 }
        ],
        minimums: { A: 18, E: 6 }
    },
    
    {
        id: 44,
        name: "Customer Success Manager",
        category: "Operations & Management",
        description: "Ensure customers are happy and successful using company products.",
        globalDemand: "High",
        nigerianOpportunity: "Medium-High",
        averageSalary: "₦250,000 - ₦1,000,000/month",
        educationPath: "Business, Communications",
        startingPath: "Work in customer service → Learn product deeply → Build relationships → Manage accounts",
        keySkills: ["Communication", "Empathy", "Problem Solving", "Relationship Building"],
        workEnvironment: "Tech Companies/Various",
        weights: { A: 2, B: 0, C: 3, D: 4, E: 2 },
        criticalQuestions: [6, 8, 21],
        bonusPatterns: [
            { questions: [10, 22], answer: 'D', bonus: 12 },
            { questions: [19, 27], answer: 'D', bonus: 10 }
        ],
        minimums: { D: 14, C: 10 }
    },
    
    // MEDIA & COMMUNICATIONS (3)
    {
        id: 45,
        name: "Journalist/Reporter",
        category: "Media & Communications",
        description: "Research, write, and report news stories for media outlets.",
        globalDemand: "Medium",
        nigerianOpportunity: "High",
        averageSalary: "₦100,000 - ₦600,000/month",
        educationPath: "Mass Communication, Journalism",
        startingPath: "Study journalism → Write for blogs/papers → Build portfolio → Get media job",
        keySkills: ["Writing", "Research", "Communication", "Curiosity"],
        workEnvironment: "Media Houses/Field",
        weights: { A: 0, B: 2, C: 2, D: 4, E: 3 },
        criticalQuestions: [10, 21, 45],
        bonusPatterns: [
            { questions: [4, 5], answer: 'D', bonus: 12 },
            { questions: [9, 24], answer: 'C', bonus: 10 }
        ],
        minimums: { D: 16, C: 8 }
    },
    
    {
        id: 46,
        name: "Public Relations Specialist",
        category: "Media & Communications",
        description: "Manage public image and communications for organizations.",
        globalDemand: "High",
        nigerianOpportunity: "High",
        averageSalary: "₦200,000 - ₦1,000,000/month",
        educationPath: "Mass Communication, Public Relations",
        startingPath: "Study communications → Gain experience → Build network → Specialize in PR",
        keySkills: ["Communication", "Writing", "Networking", "Crisis Management"],
        workEnvironment: "Agencies/Corporate",
        weights: { A: 1, B: 2, C: 1, D: 5, E: 1 },
        criticalQuestions: [10, 21, 34],
        bonusPatterns: [
            { questions: [4, 15], answer: 'D', bonus: 15 },
            { questions: [13, 22], answer: 'D', bonus: 12 }
        ],
        minimums: { D: 20, B: 6 }
    },
    
    {
        id: 47,
        name: "Social Media Manager",
        category: "Media & Communications",
        description: "Manage social media accounts and create content for brands.",
        globalDemand: "Very High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦150,000 - ₦800,000/month",
        educationPath: "Marketing, Communications, Self-taught",
        startingPath: "Master social media → Create content → Build following → Manage accounts",
        keySkills: ["Content Creation", "Communication", "Creativity", "Analytics"],
        workEnvironment: "Remote/Agencies",
        weights: { A: 1, B: 3, C: 0, D: 5, E: 2 },
        criticalQuestions: [21, 45, 46],
        bonusPatterns: [
            { questions: [4, 10], answer: 'D', bonus: 15 },
            { questions: [24, 30], answer: 'D', bonus: 12 }
        ],
        minimums: { D: 18, B: 8 }
    },
    
    // SKILLED TRADES (3)
    {
        id: 48,
        name: "Electrician",
        category: "Skilled Trades",
        description: "Install and repair electrical systems in buildings.",
        globalDemand: "High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦100,000 - ₦500,000/month",
        educationPath: "Apprenticeship, Vocational Training",
        startingPath: "Find master electrician → Apprentice for 2-3 years → Get certified → Start own business",
        keySkills: ["Technical Skills", "Problem Solving", "Safety Awareness", "Customer Service"],
        workEnvironment: "Construction Sites/Homes",
        weights: { A: 3, B: 0, C: 1, D: 1, E: 5 },
        criticalQuestions: [6, 34, 43],
        bonusPatterns: [
            { questions: [2, 44], answer: 'B', bonus: 12 },
            { questions: [7, 30], answer: 'E', bonus: 10 }
        ],
        minimums: { E: 12, A: 10 }
    },
    
    {
        id: 49,
        name: "Auto Mechanic",
        category: "Skilled Trades",
        description: "Repair and maintain vehicles (cars, motorcycles, etc.).",
        globalDemand: "High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦80,000 - ₦400,000/month",
        educationPath: "Apprenticeship, Vocational Training",
        startingPath: "Apprentice with mechanic → Learn different vehicle types → Get tools → Start own shop",
        keySkills: ["Technical Skills", "Problem Solving", "Physical Stamina", "Customer Service"],
        workEnvironment: "Workshops/Garages",
        weights: { A: 3, B: 0, C: 1, D: 1, E: 5 },
        criticalQuestions: [6, 34, 43],
        bonusPatterns: [
            { questions: [2, 44], answer: 'B', bonus: 12 },
            { questions: [4, 30], answer: 'E', bonus: 10 }
        ],
        minimums: { E: 12, A: 10 }
    },
    
    {
        id: 50,
        name: "Plumber",
        category: "Skilled Trades",
        description: "Install and repair water, drainage, and sewage systems.",
        globalDemand: "High",
        nigerianOpportunity: "Very High",
        averageSalary: "₦100,000 - ₦500,000/month",
        educationPath: "Apprenticeship, Vocational Training",
        startingPath: "Find master plumber → Apprentice for 2-3 years → Get certified → Start own business",
        keySkills: ["Technical Skills", "Problem Solving", "Physical Stamina", "Customer Service"],
        workEnvironment: "Construction Sites/Homes",
        weights: { A: 3, B: 0, C: 1, D: 1, E: 5 },
        criticalQuestions: [6, 34, 43],
        bonusPatterns: [
            { questions: [2, 44], answer: 'B', bonus: 12 },
            { questions: [7, 30], answer: 'E', bonus: 10 }
        ],
        minimums: { E: 12, A: 10 }
    }
];

// Make CAREERS_DATABASE available globally
window.CAREERS_DATABASE = CAREERS_DATABASE;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CAREERS_DATABASE };
}