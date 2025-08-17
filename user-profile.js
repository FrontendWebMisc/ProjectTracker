// User Profile Configuration
// Edit this file to customize your personal profile details

const USER_PROFILE = {
    id: 1,
    name: 'Amarnath',
    role: 'Frontend Developer',
    
    // Professional Details
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    timezone: 'UTC+5:30',
    
    // Contact Information
    email: 'amarnath@company.com',
    phone: '+91-XXXXXXXXXX',
    
    // Skills and Proficiency
    skillsets: [
        {
            category: 'Frontend Technologies',
            skills: [
                { name: 'React', proficiency: 'Expert', experience: '5+ years' },
                { name: 'JavaScript/TypeScript', proficiency: 'Expert', experience: '6+ years' },
                { name: 'HTML5/CSS3', proficiency: 'Expert', experience: '7+ years' },
                { name: 'Vue.js', proficiency: 'Advanced', experience: '2+ years' },
                { name: 'Angular', proficiency: 'Intermediate', experience: '1+ years' }
            ]
        },
        {
            category: 'Styling & Design',
            skills: [
                { name: 'Tailwind CSS', proficiency: 'Advanced', experience: '3+ years' },
                { name: 'Bootstrap', proficiency: 'Advanced', experience: '4+ years' },
                { name: 'SASS/SCSS', proficiency: 'Advanced', experience: '3+ years' },
                { name: 'Responsive Design', proficiency: 'Expert', experience: '5+ years' },
                { name: 'UI/UX Design', proficiency: 'Intermediate', experience: '2+ years' }
            ]
        },
        {
            category: 'Development Tools',
            skills: [
                { name: 'Git/GitHub', proficiency: 'Advanced', experience: '5+ years' },
                { name: 'Webpack', proficiency: 'Advanced', experience: '3+ years' },
                { name: 'npm/yarn', proficiency: 'Advanced', experience: '4+ years' },
                { name: 'VS Code', proficiency: 'Expert', experience: '5+ years' },
                { name: 'Chrome DevTools', proficiency: 'Expert', experience: '6+ years' }
            ]
        },
        {
            category: 'Testing & Quality',
            skills: [
                { name: 'Jest', proficiency: 'Advanced', experience: '3+ years' },
                { name: 'React Testing Library', proficiency: 'Advanced', experience: '2+ years' },
                { name: 'Cypress', proficiency: 'Intermediate', experience: '1+ years' },
                { name: 'ESLint/Prettier', proficiency: 'Advanced', experience: '4+ years' }
            ]
        },
        {
            category: 'Backend & Database',
            skills: [
                { name: 'Node.js', proficiency: 'Intermediate', experience: '2+ years' },
                { name: 'Express.js', proficiency: 'Intermediate', experience: '1+ years' },
                { name: 'MongoDB', proficiency: 'Beginner', experience: '6 months' },
                { name: 'REST APIs', proficiency: 'Advanced', experience: '4+ years' },
                { name: 'GraphQL', proficiency: 'Beginner', experience: '6 months' }
            ]
        }
    ],
    
    // Languages
    languages: [
        { name: 'English', proficiency: 'Fluent' },
        { name: 'Hindi', proficiency: 'Native' },
        { name: 'Telugu', proficiency: 'Native' }
    ],
    
    // Professional Certifications
    certifications: [
        {
            name: 'React Developer Certification',
            issuer: 'Meta',
            date: '2023',
            status: 'Active'
        },
        {
            name: 'JavaScript Algorithms and Data Structures',
            issuer: 'freeCodeCamp',
            date: '2022',
            status: 'Active'
        }
    ],
    
    // Work Preferences
    workPreferences: {
        preferredWorkingHours: '9:00 AM - 6:00 PM IST',
        communicationStyle: 'Collaborative',
        meetingPreference: 'Video calls for complex topics, chat for quick updates',
        focusTime: '10:00 AM - 12:00 PM IST (Deep work)',
        availability: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: false,
            sunday: false
        }
    },
    
    // Current Focus Areas
    currentFocus: [
        'Performance optimization',
        'Accessibility improvements',
        'Modern React patterns',
        'Component library development'
    ],
    
    // Learning Goals
    learningGoals: [
        'Advanced TypeScript patterns',
        'React Server Components',
        'Web Performance optimization',
        'Design system architecture'
    ]
};

// Proficiency levels explanation
const PROFICIENCY_LEVELS = {
    'Expert': 'Can mentor others, deep understanding, innovative solutions',
    'Advanced': 'Can work independently, solve complex problems',
    'Intermediate': 'Can complete most tasks with minimal guidance',
    'Beginner': 'Learning basics, requires guidance and support'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { USER_PROFILE, PROFICIENCY_LEVELS };
}