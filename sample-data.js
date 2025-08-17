// Sample data configuration for Team Progress Tracker
// Edit this file to customize your team members and initial tasks
// User profile details are now in user-profile.js

function initializeSampleData() {
    // Get user profile from external file
    const userProfile = typeof USER_PROFILE !== 'undefined' ? USER_PROFILE : {
        id: 1,
        name: 'User',
        role: 'Team Member'
    };

    return [
        {
            id: userProfile.id,
            name: userProfile.name,
            role: userProfile.role,
            title: userProfile.title || userProfile.role,
            department: userProfile.department || '',
            skillsets: userProfile.skillsets || [],
            languages: userProfile.languages || [],
            status: 'active',
            yesterday: 'Completed user authentication UI components',
            today: 'Working on dashboard responsive design',
            blockers: '',
            notes: 'Need UX review for mobile layouts',
            tasks: [
                {
                    title: 'Dashboard responsive design',
                    status: 'active',
                    issue: '',
                    notes: 'Working on mobile-first approach'
                },
                {
                    title: 'User profile page',
                    status: 'partially-blocked',
                    issue: 'Waiting for design assets from UX team',
                    notes: 'Can start with basic layout structure'
                }
            ],
            lastUpdated: new Date().toISOString()
        },
        {
            id: 2,
            name: 'Bob Smith',
            role: 'Backend Developer',
            status: 'partially-blocked',
            yesterday: 'Set up API endpoints for user management',
            today: 'Implementing payment gateway integration',
            blockers: 'Waiting for payment provider API keys',
            notes: 'Can work on error handling meanwhile',
            tasks: [
                {
                    title: 'Payment gateway integration',
                    status: 'partially-blocked',
                    issue: 'Waiting for payment provider API keys',
                    notes: 'Documentation review completed, ready to implement once keys arrive'
                },
                {
                    title: 'Error handling for API endpoints',
                    status: 'active',
                    issue: '',
                    notes: 'Implementing standardized error response format'
                }
            ],
            lastUpdated: new Date().toISOString()
        },
        {
            id: 3,
            name: 'Carol Davis',
            role: 'QA Engineer',
            status: 'reviewing',
            yesterday: 'Executed regression tests for login module',
            today: 'Code review for new API endpoints',
            blockers: '',
            notes: 'Found 2 minor UI issues, documented in Jira',
            tasks: [
                {
                    title: 'Code review for new API endpoints',
                    status: 'reviewing',
                    issue: '',
                    notes: 'Reviewing Bob\'s payment integration code'
                },
                {
                    title: 'UI testing for dashboard',
                    status: 'active',
                    issue: '',
                    notes: 'Testing responsive design across different devices'
                }
            ],
            lastUpdated: new Date().toISOString()
        }
    ];
}

// Configuration for team setup
const TEAM_CONFIG = {
    startingMemberIdCounter: 4, // Next available ID after sample data
    defaultRole: 'Team Member',
    defaultStatus: 'active'
};