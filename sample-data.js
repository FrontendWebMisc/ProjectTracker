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
                    notes: 'Working on mobile-first approach',
                    nextSteps: 'Complete tablet breakpoint implementation and test on actual devices',
                    understanding: {
                        summary: 'Creating a responsive dashboard layout that works seamlessly across all device sizes',
                        primaryLanguage: 'React',
                        secondaryLanguage: 'CSS3',
                        taskDescription: 'Develop a responsive dashboard interface that adapts to different screen sizes and devices. The dashboard should provide an optimal viewing experience across mobile, tablet, and desktop platforms with consistent functionality and visual appeal.',
                        requirements: [
                            'Implement CSS Grid and Flexbox for layout structure',
                            'Create responsive breakpoints for mobile (320px+), tablet (768px+), and desktop (1024px+)',
                            'Optimize component sizing and spacing for different screen densities',
                            'Ensure cross-browser compatibility (Chrome, Firefox, Safari, Edge)',
                            'Test on actual devices for touch interactions and viewport behavior',
                            'Maintain consistent design system and component library usage',
                            'Optimize performance for mobile devices with slower processors'
                        ],
                        details: [
                            '• Using CSS Grid and Flexbox for layout structure',
                            '• Implementing breakpoints for mobile, tablet, and desktop',
                            '• Optimizing component sizing and spacing for different screens',
                            '• Testing across various devices and browsers for consistency'
                        ],
                    }
                },
                {
                    title: 'User profile page',
                    status: 'partially-blocked',
                    issue: 'Waiting for design assets from UX team',
                    notes: 'Can start with basic layout structure',
                    nextSteps: 'Follow up with UX team on design assets timeline, start basic layout wireframe',
                    understanding: {
                        summary: 'Building a comprehensive user profile page with editable fields and settings',
                        primaryLanguage: 'React',
                        secondaryLanguage: 'JavaScript',
                        taskDescription: 'Create a comprehensive user profile management page that allows users to view, edit, and manage their personal information, account settings, and preferences. The page should include secure authentication features and file upload capabilities for profile pictures.',
                        requirements: [
                            'Create user information display and edit forms with proper validation',
                            'Implement secure profile picture upload with file size and type restrictions',
                            'Add password change functionality with strength validation',
                            'Include security settings (2FA, login history, session management)',
                            'Integrate with existing user authentication system and APIs',
                            'Implement form state management and error handling',
                            'Add data persistence and real-time validation feedback',
                            'Ensure accessibility compliance (WCAG 2.1 AA)',
                            'Include proper loading states and user feedback mechanisms'
                        ],
                        details: [
                            '• Creating user information display and edit forms',
                            '• Implementing profile picture upload functionality',
                            '• Adding password change and security settings',
                            '• Integrating with user authentication system'
                        ],
                    }
                },
                {
                    title: 'Real-time Notification System',
                    status: 'active',
                    issue: '',
                    notes: 'Implementing WebSocket connection for live notifications',
                    nextSteps: 'Complete WebSocket reconnection logic and implement notification sound system',
                    understanding: {
                        summary: 'Building a real-time notification system using WebSocket for instant user alerts',
                        primaryLanguage: 'React',
                        secondaryLanguage: 'WebSocket',
                        taskDescription: 'Develop a comprehensive real-time notification system that delivers instant alerts to users through WebSocket connections. The system should handle various notification types, provide visual feedback, and maintain notification history.',
                        requirements: [
                            'Implement WebSocket connection management for real-time communication',
                            'Create notification components (toast, banner, modal variants)',
                            'Build notification center with history and filtering capabilities',
                            'Add notification preferences and user settings',
                            'Implement notification sound and visual indicators',
                            'Handle connection failures and reconnection logic',
                            'Add notification batching for performance optimization',
                            'Create admin interface for sending system-wide notifications'
                        ],
                        details: [
                            '• Setting up WebSocket client connection',
                            '• Creating reusable notification components',
                            '• Implementing notification state management',
                            '• Adding sound and visual notification indicators'
                        ],
                    }
                },
                {
                    title: 'Data Visualization Dashboard',
                    status: 'reviewing',
                    issue: '',
                    notes: 'Charts implementation completed, reviewing performance optimization',
                    nextSteps: 'Performance testing with large datasets and prepare for code review',
                    understanding: {
                        summary: 'Creating interactive data visualization dashboard with charts and analytics',
                        primaryLanguage: 'React',
                        secondaryLanguage: 'D3.js',
                        taskDescription: 'Build an interactive data visualization dashboard that displays business metrics through various chart types, filters, and real-time data updates. The dashboard should be performant and provide actionable insights.',
                        requirements: [
                            'Implement multiple chart types (line, bar, pie, scatter, heatmap)',
                            'Add interactive filtering and date range selection',
                            'Create responsive chart layouts for different screen sizes',
                            'Implement real-time data updates and live chart refreshing',
                            'Add export functionality (PDF, CSV, PNG formats)',
                            'Build custom chart components with D3.js integration',
                            'Optimize performance for large datasets',
                            'Add drill-down capabilities for detailed analytics'
                        ],
                        details: [
                            '• Integrating Chart.js and D3.js libraries',
                            '• Creating responsive chart containers',
                            '• Implementing data filtering and aggregation',
                            '• Adding export and sharing capabilities'
                        ],
                    }
                }
            ],
            lastUpdated: new Date().toISOString()
        },
        {
            id: 2,
            name: 'Bob Smith',
            role: 'Backend Developer',
            title: 'Senior Backend Developer',
            department: 'Engineering',
            skillsets: [
                {
                    category: 'Backend Technologies',
                    skills: [
                        { name: 'Java', proficiency: 'Expert', experience: '5+ years' },
                        { name: 'Spring Boot', proficiency: 'Expert', experience: '4+ years' },
                        { name: 'Node.js', proficiency: 'Advanced', experience: '4+ years' },
                        { name: 'Express.js', proficiency: 'Advanced', experience: '4+ years' },
                        { name: 'Python', proficiency: 'Advanced', experience: '3+ years' }
                    ]
                },
                {
                    category: 'Java Ecosystem',
                    skills: [
                        { name: 'Spring Security', proficiency: 'Expert', experience: '3+ years' },
                        { name: 'Spring Data JPA', proficiency: 'Expert', experience: '4+ years' },
                        { name: 'Hibernate', proficiency: 'Advanced', experience: '3+ years' },
                        { name: 'Maven', proficiency: 'Advanced', experience: '4+ years' },
                        { name: 'JUnit', proficiency: 'Advanced', experience: '4+ years' }
                    ]
                },
                {
                    category: 'Database & Storage',
                    skills: [
                        { name: 'MongoDB', proficiency: 'Expert', experience: '3+ years' },
                        { name: 'PostgreSQL', proficiency: 'Advanced', experience: '2+ years' },
                        { name: 'Redis', proficiency: 'Advanced', experience: '2+ years' }
                    ]
                },
                {
                    category: 'API & Integration',
                    skills: [
                        { name: 'REST APIs', proficiency: 'Expert', experience: '4+ years' },
                        { name: 'GraphQL', proficiency: 'Advanced', experience: '1+ years' },
                        { name: 'Payment APIs', proficiency: 'Advanced', experience: '2+ years' }
                    ]
                }
            ],
            languages: [
                { name: 'English', proficiency: 'Fluent' },
                { name: 'Spanish', proficiency: 'Intermediate' }
            ],
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
                    notes: 'Documentation review completed, ready to implement once keys arrive',
                    nextSteps: 'Escalate API key request to product manager, prepare test environment setup',
                    understanding: {
                        summary: 'Integrating third-party payment gateway to handle secure transactions',
                        primaryLanguage: 'Node.js',
                        secondaryLanguage: 'Express.js',
                        taskDescription: 'Develop a secure payment gateway integration that handles online transactions through third-party providers like Stripe or PayPal. The system should process payments securely, handle various payment methods, and provide real-time transaction status updates.',
                        requirements: [
                            'Integrate with Stripe/PayPal payment gateway APIs',
                            'Implement secure payment processing with PCI DSS compliance',
                            'Create webhook handlers for real-time payment status updates',
                            'Build payment confirmation and receipt generation system',
                            'Add support for multiple payment methods (cards, digital wallets)',
                            'Implement error handling and retry mechanisms for failed transactions',
                            'Create transaction logging and audit trail functionality',
                            'Add refund and partial refund capabilities',
                            'Implement payment security measures (encryption, tokenization)'
                        ],
                        details: [
                            '• Setting up Stripe/PayPal API integration',
                            '• Implementing secure payment processing flow',
                            '• Adding webhook handlers for payment status updates',
                            '• Creating payment confirmation and receipt system'
                        ],
                    }
                },
                {
                    title: 'Error handling for API endpoints',
                    status: 'active',
                    issue: '',
                    notes: 'Implementing standardized error response format',
                    nextSteps: 'Complete middleware implementation and add comprehensive unit tests',
                    understanding: {
                        summary: 'Creating comprehensive error handling system for all API endpoints',
                        primaryLanguage: 'Node.js',
                        secondaryLanguage: 'Express.js',
                        taskDescription: 'Implement a robust error handling system for all API endpoints to improve reliability, debugging capabilities, and user experience. The system should provide consistent error responses and comprehensive logging.',
                        requirements: [
                            'Implement try-catch blocks for all API endpoints',
                            'Create standardized error response format with consistent structure',
                            'Add comprehensive logging for error tracking and debugging',
                            'Set up proper HTTP status codes for different error types',
                            'Implement error middleware for centralized error handling',
                            'Add request validation and sanitization',
                            'Create error documentation for API consumers',
                            'Implement rate limiting and security error handling'
                        ],
                        details: [
                            '• Implementing try-catch blocks for all endpoints',
                            '• Creating standardized error response format',
                            '• Adding logging for error tracking and debugging',
                            '• Setting up proper HTTP status codes for different error types'
                        ],
                    }
                },
                {
                    title: 'Employee Management REST API',
                    status: 'active',
                    issue: '',
                    notes: 'CRUD operations implemented, working on advanced search functionality',
                    nextSteps: 'Implement pagination for employee list endpoint and add Swagger documentation',
                    understanding: {
                        summary: 'Develop a comprehensive RESTful API for employee management with full CRUD operations',
                        primaryLanguage: 'Java',
                        secondaryLanguage: 'Spring Boot',
                        taskDescription: 'Create a robust RESTful web service in Java using Spring Boot that manages employee records with comprehensive CRUD operations, search capabilities, and proper data validation.',
                        requirements: [
                            'Use Spring Boot framework with proper project structure',
                            'Implement GET /employees - Retrieve all employees with pagination',
                            'Implement GET /employees/{id} - Retrieve employee by ID',
                            'Implement POST /employees - Create new employee with validation',
                            'Implement PUT /employees/{id} - Update existing employee details',
                            'Implement DELETE /employees/{id} - Delete employee record',
                            'Employee entity fields: id (Long), name (String), email (String), department (String), dateOfJoining (Date)',
                            'Use H2 in-memory database for persistence with JPA',
                            'Include comprehensive input validation and error handling',
                            'Write unit tests for service and controller layers',
                            'Provide API documentation using Swagger/OpenAPI',
                            'Add search and filtering capabilities by department and date range'
                        ],
                        details: [
                            '• Setting up Spring Boot project with required dependencies',
                            '• Creating Employee entity with JPA annotations',
                            '• Implementing repository layer with Spring Data JPA',
                            '• Building REST controllers with proper HTTP mappings'
                        ],
                    }
                },
                {
                    title: 'Microservices Authentication Service',
                    status: 'partially-blocked',
                    issue: 'Waiting for security team approval on JWT implementation',
                    notes: 'Basic authentication flow completed, implementing JWT token management',
                    nextSteps: 'Schedule security review meeting, prepare JWT implementation documentation',
                    understanding: {
                        summary: 'Building a centralized authentication microservice using Spring Security and JWT',
                        primaryLanguage: 'Java',
                        secondaryLanguage: 'Spring Security',
                        taskDescription: 'Develop a secure authentication microservice that handles user login, registration, JWT token generation and validation, and role-based access control across the application ecosystem.',
                        requirements: [
                            'Implement user registration with email verification',
                            'Create secure login endpoint with password encryption',
                            'Generate and validate JWT tokens with proper expiration',
                            'Implement refresh token mechanism for session management',
                            'Add role-based access control (RBAC) with permissions',
                            'Create password reset functionality with secure tokens',
                            'Implement account lockout after failed login attempts',
                            'Add OAuth2 integration for social login (Google, GitHub)',
                            'Create admin endpoints for user management',
                            'Implement comprehensive security logging and monitoring',
                            'Add rate limiting to prevent brute force attacks',
                            'Use Spring Security with custom authentication providers'
                        ],
                        details: [
                            '• Configuring Spring Security with JWT authentication',
                            '• Creating user entity with roles and permissions',
                            '• Implementing token generation and validation services',
                            '• Setting up OAuth2 providers for social authentication'
                        ],
                    }
                }
            ],
            lastUpdated: new Date().toISOString()
        },
        {
            id: 3,
            name: 'Carol Davis',
            role: 'QA Engineer',
            title: 'Senior QA Engineer',
            department: 'Quality Assurance',
            skillsets: [
                {
                    category: 'Testing Frameworks',
                    skills: [
                        { name: 'Selenium', proficiency: 'Expert', experience: '5+ years' },
                        { name: 'JUnit', proficiency: 'Expert', experience: '4+ years' },
                        { name: 'TestNG', proficiency: 'Advanced', experience: '3+ years' },
                        { name: 'Jest', proficiency: 'Advanced', experience: '3+ years' },
                        { name: 'Cypress', proficiency: 'Expert', experience: '3+ years' },
                        { name: 'MockMvc', proficiency: 'Advanced', experience: '2+ years' }
                    ]
                },
                {
                    category: 'Backend Testing',
                    skills: [
                        { name: 'Spring Boot Test', proficiency: 'Advanced', experience: '3+ years' },
                        { name: 'TestContainers', proficiency: 'Advanced', experience: '2+ years' },
                        { name: 'API Testing', proficiency: 'Expert', experience: '4+ years' },
                        { name: 'Integration Testing', proficiency: 'Expert', experience: '4+ years' }
                    ]
                },
                {
                    category: 'Test Types & Methodologies',
                    skills: [
                        { name: 'UI Testing', proficiency: 'Expert', experience: '5+ years' },
                        { name: 'API Testing', proficiency: 'Expert', experience: '4+ years' },
                        { name: 'Performance Testing', proficiency: 'Advanced', experience: '3+ years' },
                        { name: 'Security Testing', proficiency: 'Intermediate', experience: '2+ years' },
                        { name: 'Accessibility Testing', proficiency: 'Advanced', experience: '2+ years' }
                    ]
                },
                {
                    category: 'Code Quality & Review',
                    skills: [
                        { name: 'Code Review', proficiency: 'Expert', experience: '4+ years' },
                        { name: 'Static Analysis', proficiency: 'Advanced', experience: '2+ years' },
                        { name: 'Test Planning', proficiency: 'Expert', experience: '5+ years' }
                    ]
                }
            ],
            languages: [
                { name: 'English', proficiency: 'Fluent' },
                { name: 'French', proficiency: 'Intermediate' }
            ],
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
                    notes: 'Reviewing Bob\'s payment integration code',
                    nextSteps: 'Complete security analysis and provide feedback on error handling patterns',
                    understanding: {
                        summary: 'Conducting thorough code review for payment gateway API endpoints',
                        primaryLanguage: 'Node.js',
                        secondaryLanguage: 'Security Analysis',
                        taskDescription: 'Perform comprehensive code review of payment gateway integration focusing on security, code quality, and compliance with payment industry standards. Ensure the implementation meets security requirements before production deployment.',
                        requirements: [
                            'Review code quality and adherence to coding standards',
                            'Validate security implementation for payment handling (PCI DSS compliance)',
                            'Check error handling and edge case coverage',
                            'Ensure proper documentation and comprehensive test coverage',
                            'Verify input validation and sanitization',
                            'Review API security (authentication, authorization, encryption)',
                            'Validate transaction logging and audit trail implementation',
                            'Check for potential security vulnerabilities and data leaks'
                        ],
                        details: [
                            '• Reviewing code quality and best practices',
                            '• Checking security implementation for payment handling',
                            '• Validating error handling and edge cases',
                            '• Ensuring proper documentation and test coverage'
                        ],
                    }
                },
                {
                    title: 'UI testing for dashboard',
                    status: 'active',
                    issue: '',
                    notes: 'Testing responsive design across different devices',
                    nextSteps: 'Finish mobile device testing and create accessibility compliance report',
                    understanding: {
                        summary: 'Comprehensive UI testing of dashboard across multiple devices and browsers',
                        primaryLanguage: 'Testing Frameworks',
                        secondaryLanguage: 'Browser DevTools',
                        taskDescription: 'Execute comprehensive UI testing of the responsive dashboard across multiple devices, browsers, and screen sizes to ensure consistent user experience and accessibility compliance. Validate performance and functionality across all supported platforms.',
                        requirements: [
                            'Test responsive layout on mobile (320px+), tablet (768px+), and desktop (1024px+)',
                            'Validate cross-browser compatibility (Chrome, Firefox, Safari, Edge)',
                            'Check accessibility compliance (WCAG 2.1 AA guidelines)',
                            'Perform performance testing for loading times and user interactions',
                            'Test touch interactions and gesture support on mobile devices',
                            'Validate keyboard navigation and screen reader compatibility',
                            'Check visual consistency across different screen densities',
                            'Test functionality under different network conditions (slow 3G, WiFi)'
                        ],
                        details: [
                            '• Testing responsive layout on mobile, tablet, and desktop',
                            '• Validating cross-browser compatibility',
                            '• Checking accessibility compliance (WCAG guidelines)',
                            '• Performance testing for loading times and interactions'
                        ],
                    }
                },
                {
                    title: 'API Integration Testing Suite',
                    status: 'active',
                    issue: '',
                    notes: 'Setting up test environment for Spring Boot API testing',
                    nextSteps: 'Configure TestContainers setup and implement first set of endpoint tests',
                    understanding: {
                        summary: 'Creating comprehensive integration test suite for Spring Boot REST APIs',
                        primaryLanguage: 'Java',
                        secondaryLanguage: 'JUnit',
                        taskDescription: 'Develop a complete integration testing framework for Spring Boot REST APIs using JUnit, MockMvc, and TestContainers. The suite should cover all API endpoints, error scenarios, and data validation.',
                        requirements: [
                            'Set up Spring Boot Test configuration with test profiles',
                            'Create integration tests for all REST endpoints using MockMvc',
                            'Implement database testing with TestContainers',
                            'Add authentication and authorization testing scenarios',
                            'Create test data fixtures and factories for consistent testing',
                            'Implement API contract testing with schema validation',
                            'Add performance testing for API response times',
                            'Create test reports with coverage metrics',
                            'Set up continuous integration pipeline for automated testing',
                            'Add negative testing for error handling validation'
                        ],
                        details: [
                            '• Configuring Spring Boot Test with MockMvc',
                            '• Setting up TestContainers for database integration tests',
                            '• Creating test data builders and fixtures',
                            '• Implementing API contract validation tests'
                        ],
                    }
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