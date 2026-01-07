// LEVEL 1: COMPLETE 50 PERSONALITY ASSESSMENT QUESTIONS

const LEVEL1_QUESTIONS = [
    // PART 1: MOTIVATIONS (Questions 1-5)
    {
        id: 1,
        section: "PART 1: WHAT DRIVES YOU?",
        text: "If you could do something special, what would it be?",
        options: [
            { letter: "A", text: "Travel anywhere quickly without paying transport" },
            { letter: "B", text: "See things without being noticed" },
            { letter: "C", text: "Help sick people get well" },
            { letter: "D", text: "Understand what people really want" },
            { letter: "E", text: "See what will happen tomorrow" }
        ]
    },
    {
        id: 2,
        section: "PART 1: WHAT DRIVES YOU?",
        text: "Someone gave you ₦50,000! What will you do first?",
        options: [
            { letter: "A", text: "Keep it safe and maybe add to it slowly" },
            { letter: "B", text: "Buy materials to start selling something" },
            { letter: "C", text: "Help your family or someone in need" },
            { letter: "D", text: "Use it for a family celebration" },
            { letter: "E", text: "Pay for your school fees or buy books" }
        ]
    },
    {
        id: 3,
        section: "PART 1: WHAT DRIVES YOU?",
        text: "Why do you want to work or have a career?",
        options: [
            { letter: "A", text: "To make money and be financially stable" },
            { letter: "B", text: "To create something or express myself" },
            { letter: "C", text: "To help people and make a difference" },
            { letter: "D", text: "To be respected and recognized" },
            { letter: "E", text: "To solve problems and learn new things" }
        ]
    },
    {
        id: 4,
        section: "PART 1: WHAT DRIVES YOU?",
        text: "What makes you most proud?",
        options: [
            { letter: "A", text: "When you save money or make a profitable deal" },
            { letter: "B", text: "When you create something beautiful or entertaining" },
            { letter: "C", text: "When you help someone who really needs it" },
            { letter: "D", text: "When people praise or admire you" },
            { letter: "E", text: "When you figure out how something works" }
        ]
    },
    {
        id: 5,
        section: "PART 1: WHAT DRIVES YOU?",
        text: "If you became successful, what would matter most to you?",
        options: [
            { letter: "A", text: "Having enough money to take care of myself and my family" },
            { letter: "B", text: "Being known for my talent or creativity" },
            { letter: "C", text: "Knowing I made the world better" },
            { letter: "D", text: "Having influence and respect in my community" },
            { letter: "E", text: "Being an expert people come to for solutions" }
        ]
    },
    
    // PART 2: SKILLS (Questions 6-10)
    {
        id: 6,
        section: "PART 2: WHAT ARE YOU GOOD AT?",
        text: "What do people usually ask you for help with?",
        options: [
            { letter: "A", text: "Calculating money or knowing if a price is fair" },
            { letter: "B", text: "Making things look nice or fixing appearances" },
            { letter: "C", text: "Listening to their problems or giving advice" },
            { letter: "D", text: "Talking to difficult people or explaining things" },
            { letter: "E", text: "Fixing broken things or solving technical problems" }
        ]
    },
    {
        id: 7,
        section: "PART 2: WHAT ARE YOU GOOD AT?",
        text: "At school or in your area, what are you naturally good at?",
        options: [
            { letter: "A", text: "Mathematics, counting, or managing money" },
            { letter: "B", text: "Arts, crafts, music, or making things beautiful" },
            { letter: "C", text: "Understanding people's feelings and helping them" },
            { letter: "D", text: "Speaking, debating, or convincing people" },
            { letter: "E", text: "Science, figuring out how things work, or using technology" }
        ]
    },
    {
        id: 8,
        section: "PART 2: WHAT ARE YOU GOOD AT?",
        text: "When there's a problem in your family or community, what do you do best?",
        options: [
            { letter: "A", text: "Find a way to solve it with the resources available" },
            { letter: "B", text: "Come up with creative solutions no one thought of" },
            { letter: "C", text: "Make sure everyone affected is okay" },
            { letter: "D", text: "Bring people together to discuss it" },
            { letter: "E", text: "Analyze the problem and find the root cause" }
        ]
    },
    {
        id: 9,
        section: "PART 2: WHAT ARE YOU GOOD AT?",
        text: "What can you do for hours without getting tired?",
        options: [
            { letter: "A", text: "Planning, organizing, or managing things" },
            { letter: "B", text: "Creating, designing, or performing" },
            { letter: "C", text: "Talking to people and understanding their situations" },
            { letter: "D", text: "Meeting new people and networking" },
            { letter: "E", text: "Learning new skills or researching information" }
        ]
    },
    {
        id: 10,
        section: "PART 2: WHAT ARE YOU GOOD AT?",
        text: "People say you are really good at:",
        options: [
            { letter: "A", text: "Being responsible and managing resources" },
            { letter: "B", text: "Having good taste and creative ideas" },
            { letter: "C", text: "Being caring and understanding" },
            { letter: "D", text: "Being confident and persuasive" },
            { letter: "E", text: "Being smart and logical" }
        ]
    },
    
    // PART 3: BELIEFS & VALUES (Questions 11-15)
    {
        id: 11,
        section: "PART 3: WHAT DO YOU BELIEVE?",
        text: "What do you believe is the biggest problem in Nigeria?",
        options: [
            { letter: "A", text: "Poverty and lack of economic opportunities" },
            { letter: "B", text: "Lack of recognition for our culture and creativity" },
            { letter: "C", text: "Poor healthcare and social services" },
            { letter: "D", text: "Bad leadership and communication" },
            { letter: "E", text: "Lack of good education and technology" }
        ]
    },
    {
        id: 12,
        section: "PART 3: WHAT DO YOU BELIEVE?",
        text: "How do you think Nigeria will get better?",
        options: [
            { letter: "A", text: "When people learn to manage money better and create businesses" },
            { letter: "B", text: "When we value and export our culture and creativity" },
            { letter: "C", text: "When we care for each other and help the vulnerable" },
            { letter: "D", text: "When we have better leaders who can unite people" },
            { letter: "E", text: "When we invest in education and technology" }
        ]
    },
    {
        id: 13,
        section: "PART 3: WHAT DO YOU BELIEVE?",
        text: "What quote speaks to you most?",
        options: [
            { letter: "A", text: "\"No money, no respect\" - Money is important in this life" },
            { letter: "B", text: "\"Follow your talent\" - Do what you love and success will follow" },
            { letter: "C", text: "\"Be your brother's keeper\" - We must help each other" },
            { letter: "D", text: "\"Your network is your net worth\" - Connections matter most" },
            { letter: "E", text: "\"Knowledge is power\" - Education and skills open doors" }
        ]
    },
    {
        id: 14,
        section: "PART 3: WHAT DO YOU BELIEVE?",
        text: "If you had power to change one thing in your community, it would be:",
        options: [
            { letter: "A", text: "Create more jobs and business opportunities" },
            { letter: "B", text: "Build spaces for arts, sports, and entertainment" },
            { letter: "C", text: "Improve healthcare and support for struggling families" },
            { letter: "D", text: "Improve how leaders communicate and listen to youth" },
            { letter: "E", text: "Bring better schools and technology access" }
        ]
    },
    {
        id: 15,
        section: "PART 3: WHAT DO YOU BELIEVE?",
        text: "What kind of life do you want to live?",
        options: [
            { letter: "A", text: "A comfortable life where I don't worry about money" },
            { letter: "B", text: "An exciting life doing what I love" },
            { letter: "C", text: "A meaningful life helping others" },
            { letter: "D", text: "An influential life where people know and respect me" },
            { letter: "E", text: "A life of continuous learning and growth" }
        ]
    },
    
    // PART 4: ATTITUDE (Questions 16-20)
    {
        id: 16,
        section: "PART 4: HOW DO YOU ACT?",
        text: "When something goes wrong, your first reaction is:",
        options: [
            { letter: "A", text: "Think about how to minimize losses" },
            { letter: "B", text: "Look for a creative way around it" },
            { letter: "C", text: "Check if anyone is hurt or affected" },
            { letter: "D", text: "Communicate with others about what happened" },
            { letter: "E", text: "Analyze what went wrong and why" }
        ]
    },
    {
        id: 17,
        section: "PART 4: HOW DO YOU ACT?",
        text: "How do you feel about taking risks?",
        options: [
            { letter: "A", text: "I'm careful - I only take calculated risks" },
            { letter: "B", text: "I'm willing to take risks for something I believe in" },
            { letter: "C", text: "I'm cautious - I think about how it affects others" },
            { letter: "D", text: "I take social risks - I'm not afraid to put myself out there" },
            { letter: "E", text: "I take risks if I've studied and understand the situation" }
        ]
    },
    {
        id: 18,
        section: "PART 4: HOW DO YOU ACT?",
        text: "When you start something new, you:",
        options: [
            { letter: "A", text: "Plan carefully and make sure you have what you need" },
            { letter: "B", text: "Jump in with enthusiasm and figure it out as you go" },
            { letter: "C", text: "Consider how it will affect the people around you" },
            { letter: "D", text: "Tell everyone about it and get them excited too" },
            { letter: "E", text: "Research it thoroughly before starting" }
        ]
    },
    {
        id: 19,
        section: "PART 4: HOW DO YOU ACT?",
        text: "How do you handle stress or pressure?",
        options: [
            { letter: "A", text: "I stay focused on practical solutions" },
            { letter: "B", text: "I find creative outlets to express myself" },
            { letter: "C", text: "I talk to people I trust about how I'm feeling" },
            { letter: "D", text: "I stay positive and motivate others around me" },
            { letter: "E", text: "I step back and think logically about the situation" }
        ]
    },
    {
        id: 20,
        section: "PART 4: HOW DO YOU ACT?",
        text: "What's your attitude toward work?",
        options: [
            { letter: "A", text: "Work is how you survive and build wealth" },
            { letter: "B", text: "Work should be something you enjoy and are passionate about" },
            { letter: "C", text: "Work is an opportunity to serve and help others" },
            { letter: "D", text: "Work is how you build your reputation and connections" },
            { letter: "E", text: "Work is how you learn, grow, and challenge yourself" }
        ]
    },
    
    // PART 5: PERSONALITY (Questions 21-28)
    {
        id: 21,
        section: "PART 5: WHO ARE YOU?",
        text: "At a party or gathering, you are usually:",
        options: [
            { letter: "A", text: "Watching and observing, maybe handling logistics" },
            { letter: "B", text: "Performing, dancing, or entertaining" },
            { letter: "C", text: "Making sure everyone is comfortable and included" },
            { letter: "D", text: "Moving around talking to many different people" },
            { letter: "E", text: "In a corner having deep conversations with few people" }
        ]
    },
    {
        id: 22,
        section: "PART 5: WHO ARE YOU?",
        text: "Your friends would describe you as:",
        options: [
            { letter: "A", text: "Practical and reliable" },
            { letter: "B", text: "Creative and unique" },
            { letter: "C", text: "Caring and supportive" },
            { letter: "D", text: "Outgoing and confident" },
            { letter: "E", text: "Intelligent and curious" }
        ]
    },
    {
        id: 23,
        section: "PART 5: WHO ARE YOU?",
        text: "When making decisions, you rely most on:",
        options: [
            { letter: "A", text: "Facts, numbers, and practical considerations" },
            { letter: "B", text: "Your instincts and feelings" },
            { letter: "C", text: "How it will affect people you care about" },
            { letter: "D", text: "What others think or advice from people you trust" },
            { letter: "E", text: "Logic, analysis, and research" }
        ]
    },
    {
        id: 24,
        section: "PART 5: WHO ARE YOU?",
        text: "How do you prefer to spend your free time?",
        options: [
            { letter: "A", text: "Planning for the future or organizing things" },
            { letter: "B", text: "Doing creative activities or consuming entertainment" },
            { letter: "C", text: "Spending quality time with family and friends" },
            { letter: "D", text: "Socializing and meeting new people" },
            { letter: "E", text: "Reading, learning, or exploring how things work" }
        ]
    },
    {
        id: 25,
        section: "PART 5: WHO ARE YOU?",
        text: "In a group project, you naturally become the one who:",
        options: [
            { letter: "A", text: "Manages the budget and resources" },
            { letter: "B", text: "Comes up with the creative concept" },
            { letter: "C", text: "Makes sure everyone is okay and working well together" },
            { letter: "D", text: "Presents the work and communicates with others" },
            { letter: "E", text: "Does the research and technical work" }
        ]
    },
    {
        id: 26,
        section: "PART 5: WHO ARE YOU?",
        text: "Which of these describes you best?",
        options: [
            { letter: "A", text: "I'm a planner - I like structure and organization" },
            { letter: "B", text: "I'm a dreamer - I have big ideas and imagination" },
            { letter: "C", text: "I'm a helper - I notice when people need support" },
            { letter: "D", text: "I'm a connector - I bring people together" },
            { letter: "E", text: "I'm a thinker - I analyze and solve problems" }
        ]
    },
    {
        id: 27,
        section: "PART 5: WHO ARE YOU?",
        text: "When you're angry or upset, you:",
        options: [
            { letter: "A", text: "Focus on fixing the situation practically" },
            { letter: "B", text: "Express it through creative outlets or physical activity" },
            { letter: "C", text: "Talk about your feelings with someone close" },
            { letter: "D", text: "Try to resolve it by communicating with whoever is involved" },
            { letter: "E", text: "Need time alone to think and process" }
        ]
    },
    {
        id: 28,
        section: "PART 5: WHO ARE YOU?",
        text: "What kind of environment do you work best in?",
        options: [
            { letter: "A", text: "Structured and organized with clear expectations" },
            { letter: "B", text: "Free and flexible where you can be creative" },
            { letter: "C", text: "Supportive and collaborative with good people" },
            { letter: "D", text: "Dynamic and social with lots of interaction" },
            { letter: "E", text: "Quiet and focused where you can concentrate" }
        ]
    },
    
    // PART 6: WORK ORIENTATION (Questions 29-35)
    {
        id: 29,
        section: "PART 6: HOW DO YOU LIKE TO WORK?",
        text: "Do you prefer to work:",
        options: [
            { letter: "A", text: "With clear goals and measurable results" },
            { letter: "B", text: "On projects that allow personal expression" },
            { letter: "C", text: "Directly with people, helping them" },
            { letter: "D", text: "In teams and collaborative environments" },
            { letter: "E", text: "Independently or with minimal supervision" }
        ]
    },
    {
        id: 30,
        section: "PART 6: HOW DO YOU LIKE TO WORK?",
        text: "What kind of tasks do you enjoy most?",
        options: [
            { letter: "A", text: "Tasks with numbers, budgets, or management" },
            { letter: "B", text: "Tasks that involve design, creativity, or performance" },
            { letter: "C", text: "Tasks that involve caring for or teaching others" },
            { letter: "D", text: "Tasks that involve communication and persuasion" },
            { letter: "E", text: "Tasks that involve research, analysis, or technical skills" }
        ]
    },
    {
        id: 31,
        section: "PART 6: HOW DO YOU LIKE TO WORK?",
        text: "How do you feel about routine?",
        options: [
            { letter: "A", text: "I like routine - it helps me stay organized and efficient" },
            { letter: "B", text: "I dislike routine - I need variety and new challenges" },
            { letter: "C", text: "I'm flexible - as long as I'm helping people, I'm okay" },
            { letter: "D", text: "I need some variety - I like mixing routine with new people/situations" },
            { letter: "E", text: "I can handle routine if I'm learning something" }
        ]
    },
    {
        id: 32,
        section: "PART 6: HOW DO YOU LIKE TO WORK?",
        text: "What type of work schedule appeals to you?",
        options: [
            { letter: "A", text: "Regular hours with predictable income" },
            { letter: "B", text: "Flexible hours where I control my time" },
            { letter: "C", text: "Hours that allow me to balance work and caring for others" },
            { letter: "D", text: "Variable hours with lots of people interaction" },
            { letter: "E", text: "Any hours, as long as the work is interesting" }
        ]
    },
    {
        id: 33,
        section: "PART 6: HOW DO YOU LIKE TO WORK?",
        text: "It's Saturday at the market. What catches your attention?",
        options: [
            { letter: "A", text: "Checking prices and looking for good deals" },
            { letter: "B", text: "Watching street performers or musicians" },
            { letter: "C", text: "Helping an elderly person carry their load" },
            { letter: "D", text: "Gisting and making friends with other youth" },
            { letter: "E", text: "Noticing how traders display goods to attract customers" }
        ]
    },
    {
        id: 34,
        section: "PART 6: HOW DO YOU LIKE TO WORK?",
        text: "How do you want to learn your career?",
        options: [
            { letter: "A", text: "Through apprenticeship and on-the-job training" },
            { letter: "B", text: "By practicing and developing my natural talent" },
            { letter: "C", text: "Through volunteering and helping others" },
            { letter: "D", text: "By networking and learning from mentors" },
            { letter: "E", text: "Through formal education or structured courses" }
        ]
    },
    {
        id: 35,
        section: "PART 6: HOW DO YOU LIKE TO WORK?",
        text: "What frustrates you most about work or school?",
        options: [
            { letter: "A", text: "Wasting time or resources" },
            { letter: "B", text: "Having to follow too many boring rules" },
            { letter: "C", text: "Seeing people suffer or be treated unfairly" },
            { letter: "D", text: "Not being heard or recognized for my efforts" },
            { letter: "E", text: "Not understanding why things are done a certain way" }
        ]
    },
    
    // PART 7: IDENTITY (Questions 36-42)
    {
        id: 36,
        section: "PART 7: WHO WILL YOU BECOME?",
        text: "When you imagine yourself successful, you see yourself as:",
        options: [
            { letter: "A", text: "A business owner or someone financially independent" },
            { letter: "B", text: "An artist, creator, or entertainer people admire" },
            { letter: "C", text: "Someone who has helped many people" },
            { letter: "D", text: "A leader or influential person in the community" },
            { letter: "E", text: "An expert or professional in your field" }
        ]
    },
    {
        id: 37,
        section: "PART 7: WHO WILL YOU BECOME?",
        text: "What kind of reputation do you want to have?",
        options: [
            { letter: "A", text: "Someone who is trustworthy and good with money" },
            { letter: "B", text: "Someone who is talented and original" },
            { letter: "C", text: "Someone who is kind and always there for others" },
            { letter: "D", text: "Someone who is charismatic and well-connected" },
            { letter: "E", text: "Someone who is knowledgeable and skilled" }
        ]
    },
    {
        id: 38,
        section: "PART 7: WHO WILL YOU BECOME?",
        text: "If people were describing you in 10 years, what would make you happiest to hear?",
        options: [
            { letter: "A", text: "\"They're financially stable and successful in business\"" },
            { letter: "B", text: "\"They're so talented and creative\"" },
            { letter: "C", text: "\"They've helped so many people\"" },
            { letter: "D", text: "\"Everyone knows and respects them\"" },
            { letter: "E", text: "\"They're brilliant at what they do\"" }
        ]
    },
    {
        id: 39,
        section: "PART 7: WHO WILL YOU BECOME?",
        text: "What role do you usually play in your family?",
        options: [
            { letter: "A", text: "The responsible one who manages things" },
            { letter: "B", text: "The entertaining one who brings joy" },
            { letter: "C", text: "The caring one who looks after others" },
            { letter: "D", text: "The outgoing one who represents the family" },
            { letter: "E", text: "The smart one who solves problems" }
        ]
    },
    {
        id: 40,
        section: "PART 7: WHO WILL YOU BECOME?",
        text: "Which Nigerian success story inspires you most?",
        options: [
            { letter: "A", text: "Someone who built a business from nothing (like Dangote, Linda Ikeji)" },
            { letter: "B", text: "Someone whose talent brought them fame (like Wizkid, Genevieve)" },
            { letter: "C", text: "Someone who fights for the people (like activists, charity workers)" },
            { letter: "D", text: "Someone who became a respected leader or voice" },
            { letter: "E", text: "Someone who excels in their professional field (doctors, engineers, tech innovators)" }
        ]
    },
    {
        id: 41,
        section: "PART 7: WHO WILL YOU BECOME?",
        text: "What legacy do you want to leave?",
        options: [
            { letter: "A", text: "Wealth and financial security for my family" },
            { letter: "B", text: "Creative work that people remember" },
            { letter: "C", text: "Having made life better for people" },
            { letter: "D", text: "Being remembered as someone influential" },
            { letter: "E", text: "Knowledge or innovations that last" }
        ]
    },
    {
        id: 42,
        section: "PART 7: WHO WILL YOU BECOME?",
        text: "How do you want your community to see you?",
        options: [
            { letter: "A", text: "As someone who is smart with money and resources" },
            { letter: "B", text: "As someone with special talents and abilities" },
            { letter: "C", text: "As someone who cares and can be trusted" },
            { letter: "D", text: "As someone who brings people together" },
            { letter: "E", text: "As someone who knows things and can solve problems" }
        ]
    },
    
    // PART 8: PRACTICAL PREFERENCES (Questions 43-50)
    {
        id: 43,
        section: "PART 8: DAILY LIFE QUESTIONS",
        text: "Your community wants to raise money. What will you suggest?",
        options: [
            { letter: "A", text: "Sell pure water, zobo, or snacks" },
            { letter: "B", text: "Do a talent show or drama performance" },
            { letter: "C", text: "Go door-to-door explaining why people should contribute" },
            { letter: "D", text: "Organize a football match or viewing center event" },
            { letter: "E", text: "Set up a phone charging or repair service" }
        ]
    },
    {
        id: 44,
        section: "PART 8: DAILY LIFE QUESTIONS",
        text: "A free training is happening. Which will you attend?",
        options: [
            { letter: "A", text: "\"How to Start a Small Business with Little Money\"" },
            { letter: "B", text: "\"Learn Phone Repair, Tailoring, or Hairdressing\"" },
            { letter: "C", text: "\"Becoming a Community Health Worker\"" },
            { letter: "D", text: "\"How to Speak Confidently and Convince People\"" },
            { letter: "E", text: "\"Basic Computer Skills and Phone Technology\"" }
        ]
    },
    {
        id: 45,
        section: "PART 8: DAILY LIFE QUESTIONS",
        text: "When you have free time and data, what do you do online?",
        options: [
            { letter: "A", text: "Search for business ideas or prices of things" },
            { letter: "B", text: "Watch comedy skits, music videos, or movies" },
            { letter: "C", text: "Read news or learn about what's happening" },
            { letter: "D", text: "Chat with friends on WhatsApp or social media" },
            { letter: "E", text: "Watch \"how to\" videos or learn new skills" }
        ]
    },
    {
        id: 46,
        section: "PART 8: DAILY LIFE QUESTIONS",
        text: "If you were buying a phone, what matters most?",
        options: [
            { letter: "A", text: "It must be cheap but strong (value for money)" },
            { letter: "B", text: "It must look good" },
            { letter: "C", text: "Battery must last long (no light problem)" },
            { letter: "D", text: "Good for WhatsApp and social media" },
            { letter: "E", text: "Fast and can do many things" }
        ]
    },
    {
        id: 47,
        section: "PART 8: DAILY LIFE QUESTIONS",
        text: "Your teacher says do a project on any topic. What will you choose?",
        options: [
            { letter: "A", text: "How people in your area make money" },
            { letter: "B", text: "The history and culture of your community" },
            { letter: "C", text: "Health problems affecting youth in Nigeria" },
            { letter: "D", text: "Why people make certain decisions" },
            { letter: "E", text: "How technology can solve Nigerian problems" }
        ]
    },
    {
        id: 48,
        section: "PART 8: DAILY LIFE QUESTIONS",
        text: "Two of your friends are fighting. What do you do?",
        options: [
            { letter: "A", text: "Bring both of them together to settle it" },
            { letter: "B", text: "Try to distract them with something fun" },
            { letter: "C", text: "Listen to both sides and show you care" },
            { letter: "D", text: "Help them understand each other's point" },
            { letter: "E", text: "Talk to them separately to understand the real problem" }
        ]
    },
    {
        id: 49,
        section: "PART 8: DAILY LIFE QUESTIONS",
        text: "If there were free clubs in your area, which would you join?",
        options: [
            { letter: "A", text: "Business and entrepreneurship club" },
            { letter: "B", text: "Drama, music, or dance group" },
            { letter: "C", text: "Youth health advocates or peer educators" },
            { letter: "D", text: "Youth leadership or mentorship program" },
            { letter: "E", text: "Computer training or tech skills group" }
        ]
    },
    {
        id: 50,
        section: "PART 8: DAILY LIFE QUESTIONS",
        text: "If money was not a problem, where would you like to go?",
        options: [
            { letter: "A", text: "A nice hotel or resort" },
            { letter: "B", text: "See museums, festivals, or cultural events" },
            { letter: "C", text: "Travel with your friends or family" },
            { letter: "D", text: "Go to the village or somewhere with nature" },
            { letter: "E", text: "Visit a big city to see how things work" }
        ]
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL1_QUESTIONS };
}