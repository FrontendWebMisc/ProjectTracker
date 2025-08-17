# Data Formats & Structure

Complete reference for all data formats used in Project Tracker, including JSON schemas, CSV structures, and export formats.

## Overview

Project Tracker uses structured data formats to ensure consistency, interoperability, and comprehensive analysis capabilities. Understanding these formats helps with data integration, custom analysis, and troubleshooting.

## JSON Data Structure

### Complete Team Data Format
```javascript
{
  "date": "2024-01-20",           // Export date (ISO 8601)
  "version": "1.0",               // Data format version
  "exportedBy": "Project Tracker", // Application identifier
  "teamData": [                   // Array of team members
    {
      "id": 1,                    // Unique member identifier
      "name": "Team Member Name", // Full name
      "role": "Frontend Developer", // Job role/position
      "title": "Senior Frontend Developer", // Official title
      "department": "Engineering", // Department/team
      "status": "active",         // Current work status
      "yesterday": "Completed responsive layout", // Previous day work
      "today": "Working on mobile optimization", // Current day focus
      "blockers": "Waiting for design assets", // Current blockers
      "notes": "Making good progress", // Additional notes
      
      // Detailed skill information
      "skillsets": [
        {
          "category": "Frontend Technologies",
          "skills": [
            {
              "name": "React",
              "proficiency": "Expert",
              "experience": "4+ years"
            }
          ]
        }
      ],
      
      // Language capabilities
      "languages": [
        {
          "name": "English",
          "proficiency": "Fluent"
        }
      ],
      
      // Individual tasks
      "tasks": [
        {
          "title": "Dashboard Responsive Design",
          "status": "active",
          "issue": "Waiting for UX approval",
          "notes": "Working on mobile-first approach",
          "nextSteps": "Complete tablet breakpoint implementation",
          
          // Comprehensive task understanding
          "understanding": {
            "summary": "Creating responsive dashboard layout",
            "primaryLanguage": "React",
            "secondaryLanguage": "CSS3",
            "taskDescription": "Develop responsive dashboard interface...",
            "requirements": [
              "Implement CSS Grid and Flexbox for layout",
              "Create responsive breakpoints",
              "Optimize component sizing"
            ],
            "technicalContext": "React-based frontend with CSS modules",
            "businessImpact": "Improves user experience across devices",
            "estimatedEffort": "3-4 days",
            "dependencies": ["UX wireframes", "Design system components"],
            "skillsRequired": ["React", "CSS3", "Responsive Design"]
          },
          
          // Progress tracking
          "priority": "high",
          "complexity": "medium",
          "riskLevel": "low",
          "progressMetrics": {
            "estimatedHours": 24,
            "hoursSpent": 8,
            "completionPercentage": 35
          },
          
          // Historical tracking
          "assignmentHistory": [
            {
              "assignedTo": "Team Member Name",
              "assignedDate": "2024-01-15",
              "reason": "Expert in React and responsive design"
            }
          ],
          "blockerHistory": [
            {
              "date": "2024-01-16",
              "blocker": "Waiting for design assets",
              "impact": "Cannot proceed with UI implementation",
              "resolution": "pending"
            }
          ]
        }
      ],
      "lastUpdated": "2024-01-20T10:30:00.000Z" // Last modification timestamp
    }
  ]
}
```

### Minimal JSON Format
```javascript
{
  "date": "2024-01-20",
  "teamData": [
    {
      "id": 1,
      "name": "John Doe",
      "role": "Developer",
      "status": "active",
      "tasks": [
        {
          "title": "Fix login bug",
          "status": "active",
          "notes": "Investigating authentication issue"
        }
      ]
    }
  ]
}
```

## CSV Export Formats

### Daily Summary CSV
```csv
Date,Member Name,Role,Status,Today's Focus,Blockers,Notes,Tasks Count,Active Tasks,Blocked Tasks
2024-01-20,John Doe,Frontend Developer,active,Dashboard work,Design assets,Good progress,3,2,1
2024-01-20,Jane Smith,Backend Developer,active,API development,None,On track,2,2,0
```

### Task Details CSV
```csv
Date,Member Name,Role,Task Title,Task Status,Task Issue,Task Notes,Days in Progress,Status Changes,Technical Context,Business Impact,Estimated Effort,Required Skills,Dependencies
2024-01-20,John Doe,Frontend Developer,Dashboard Responsive Design,active,,Working on mobile-first approach,5,2,React-based frontend with CSS modules,Improves user experience across devices,3-4 days,"React, CSS3, Responsive Design","UX wireframes, Design system components"
```

### Weekly Summary CSV
```csv
Week,Member Name,Role,Tasks Completed,Tasks Active,Tasks Blocked,Total Hours,Productivity Score,Key Achievements,Main Blockers
2024-W03,John Doe,Frontend Developer,2,3,1,32,85%,Completed user profile page,Waiting for design assets
```

## Export File Naming Conventions

### Standard Naming Format
```
{type}-{date/period}-{optional-identifier}.{extension}

Examples:
- team-data-2024-01-20.json          (Daily team data)
- weekly-summary-2024-W03.txt        (Weekly summary)
- task-analysis-2024-01-20.csv       (Task analysis)
- compressed-summary-2024-01-20.txt  (Compressed AI summary)
```

### Recommended Directory Structure
```
📁 team-data/
├── 📁 daily/
│   ├── 📄 2024-01-15-team-data.json
│   ├── 📄 2024-01-16-team-data.json
│   └── 📄 2024-01-17-team-data.json
├── 📁 weekly/
│   ├── 📄 weekly-summary-2024-W03.txt
│   └── 📄 weekly-analysis-2024-W03.csv
├── 📁 summaries/
│   ├── 📄 daily-summary-2024-01-20.txt
│   └── 📄 task-state-analysis-2024-01-20.txt
└── 📁 compressed/
    ├── 📄 compressed-weekly-2024-W03.txt
    └── 📄 compressed-task-analysis-2024-01-20.txt
```

## Field Definitions

### Team Member Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | Number | Yes | Unique identifier for team member |
| `name` | String | Yes | Full name of team member |
| `role` | String | Yes | Job role (e.g., "Frontend Developer") |
| `title` | String | No | Official job title |
| `department` | String | No | Department or team name |
| `status` | Enum | Yes | Current work status (active, blocked, etc.) |
| `yesterday` | String | No | What was accomplished yesterday |
| `today` | String | No | Current day's focus |
| `blockers` | String | No | Current blockers or issues |
| `notes` | String | No | Additional notes or comments |
| `skillsets` | Array | No | Detailed skill information |
| `languages` | Array | No | Spoken/written language capabilities |
| `tasks` | Array | No | Individual task assignments |
| `lastUpdated` | ISO String | Yes | Last modification timestamp |

### Task Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String | Yes | Task name or description |
| `status` | Enum | Yes | Current task status |
| `issue` | String | No | Current blocker or issue |
| `notes` | String | No | Progress notes and updates |
| `nextSteps` | String | No | Immediate next actions |
| `understanding` | Object | No | Comprehensive task details |
| `priority` | Enum | No | Task priority level |
| `complexity` | Enum | No | Implementation complexity |
| `riskLevel` | Enum | No | Risk assessment |
| `progressMetrics` | Object | No | Time and completion tracking |
| `assignmentHistory` | Array | No | Assignment change history |
| `blockerHistory` | Array | No | Blocker occurrence history |

### Enumerated Values

#### Status Values
```javascript
// Team Member Status
"active"           // Currently working
"blocked"          // Cannot proceed
"partially-blocked" // Some work possible
"reviewing"        // In review/approval phase
"completed"        // Work finished

// Task Status  
"active"           // Currently being worked on
"blocked"          // Cannot proceed
"partially-blocked" // Some progress possible
"reviewing"        // In review phase
"completed"        // Task finished
```

#### Priority Levels
```javascript
"critical"    // Must be completed immediately
"high"        // Important for current sprint
"medium"      // Standard priority
"low"         // Can be delayed if needed
```

#### Complexity Levels
```javascript
"high"        // Complex implementation, multiple systems
"medium"      // Standard complexity, some challenges
"low"         // Straightforward implementation
```

#### Risk Levels
```javascript
"high"        // Many unknowns, external dependencies
"medium"      // Some identified risks
"low"         // Well-understood, minimal risk
```

#### Proficiency Levels
```javascript
"Expert"      // 5+ years, can mentor others
"Advanced"    // 3-5 years, independent work
"Intermediate" // 1-3 years, some guidance needed
"Beginner"    // <1 year, requires supervision
```

## Validation Rules

### Required Field Validation
```javascript
// Minimum required for team member
{
  "id": "Must be unique positive integer",
  "name": "Must be non-empty string",
  "role": "Must be non-empty string", 
  "status": "Must be valid enum value",
  "lastUpdated": "Must be valid ISO 8601 date"
}

// Minimum required for task
{
  "title": "Must be non-empty string",
  "status": "Must be valid enum value"
}
```

### Data Type Validation
```javascript
// String fields
"name": "1-100 characters, no special characters in names"
"role": "1-50 characters"
"notes": "0-1000 characters"

// Numeric fields  
"id": "Positive integer, unique within dataset"
"estimatedHours": "Positive number, reasonable range (1-200)"
"completionPercentage": "Integer 0-100"

// Date fields
"lastUpdated": "ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)"
"date": "ISO 8601 date format (YYYY-MM-DD)"

// Array fields
"tasks": "Array of valid task objects"
"skillsets": "Array of valid skillset objects"
```

### Business Logic Validation
```javascript
// Status consistency
"If member status is 'blocked', at least one task should be blocked"
"If all tasks are completed, member status should not be 'active'"

// Progress validation
"hoursSpent should not exceed estimatedHours by more than 50%"
"completionPercentage should align with hoursSpent ratio"

// Timeline validation  
"assignmentDate should be before or equal to current date"
"blockerHistory dates should be chronological"
```

## Import/Export Compatibility

### JSON Import Requirements
- **Valid JSON**: Must parse without syntax errors
- **Required Fields**: All mandatory fields must be present
- **Data Types**: Fields must match expected types
- **Enum Values**: Status values must be from allowed set

### CSV Import Limitations
- **Basic Fields Only**: Advanced features require JSON
- **No Nested Data**: Complex objects not supported
- **Header Required**: First row must contain field names
- **UTF-8 Encoding**: Required for special characters

### Cross-Application Compatibility

#### Jira Integration
```javascript
// Map Jira fields to Project Tracker format
{
  "title": "jira.summary",
  "status": "mapJiraStatus(jira.status)",
  "notes": "jira.description", 
  "priority": "mapJiraPriority(jira.priority)"
}
```

#### GitHub Issues Integration
```javascript
// Map GitHub fields to Project Tracker format
{
  "title": "github.title",
  "status": "mapGitHubState(github.state)",
  "notes": "github.body",
  "assignedTo": "github.assignee.login"
}
```

## Version History

### Version 1.0 (Current)
- Complete task understanding framework
- Progress metrics and historical tracking
- Comprehensive skill and language support
- AI-optimized data structure

### Planned Enhancements
- **Version 1.1**: Enhanced time tracking fields
- **Version 1.2**: Project and milestone groupings
- **Version 1.3**: Integration API endpoints

## Related Documentation

- [Task Management](task-management.md) - Understanding task structure
- [Team Member Management](team-member-management.md) - Team data organization
- [Import & Export Features](import-export-features.md) - File operations
- [Data Schema Reference](data-schema.md) - Technical schema details