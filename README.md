# Project Tracker - Team Task Management System

A comprehensive web-based team task management and AI analysis tool designed for agile teams working with React, Java/Spring Boot, and other modern technologies.

## 🚀 Overview

Project Tracker is a single-page application that helps teams manage daily tasks, track progress, and generate AI-powered insights for better project management. The system supports real-time task updates, historical data analysis, and comprehensive reporting features.

## ✨ Key Features

### 📊 Core Task Management
- **Real-time Task Tracking**: Add, edit, and update tasks with comprehensive status management
- **Team Member Management**: Complete user profiles with skills, expertise, and role tracking
- **Progress Monitoring**: Track task completion percentages, time estimates, and blockers
- **Next Steps Planning**: Define and track actionable next steps for each task

### 🤖 AI-Powered Analysis
- **Current Task State Analysis**: Generate email-ready status reports for stakeholders
- **Technical Task Analysis**: Detailed technical breakdowns for developers and architects
- **Weekly Summary Generation**: Comprehensive weekly progress reports with trends
- **Historical Trend Analysis**: Multi-day progress tracking and pattern recognition

### 📈 Data Management & Export
- **Multiple Export Formats**: JSON, CSV, and TXT exports for different use cases
- **Data Import/Load**: Load historical data from multiple files for analysis
- **AI Summary Compression**: Optimize summaries for LLM context efficiency
- **Sample Data**: Pre-loaded realistic development scenarios

## 📚 Documentation

### Getting Started
- [Installation & Setup](docs/setup-and-installation.md)
- [Quick Start Guide](docs/quick-start-guide.md)
- [Configuration Options](docs/configuration.md)

### Core Features
- [Task Management](docs/task-management.md)
- [Team Member Management](docs/team-member-management.md)
- [Daily Workflow](docs/daily-workflow.md)

### AI Analysis Features
- [Current Task State Analysis](docs/current-task-state-analysis.md)
- [Technical Task Analysis](docs/technical-task-analysis.md)
- [Weekly Summary Generator](docs/weekly-summary-generator.md)
- [AI Summary Compression](docs/ai-summary-compression.md)

### Data Management
- [Import & Export Features](docs/import-export-features.md)
- [Data Formats & Structure](docs/data-formats.md)
- [Sample Data Overview](docs/sample-data.md)

### Advanced Features
- [User Profile System](docs/user-profile-system.md)
- [Task Understanding Framework](docs/task-understanding-framework.md)
- [Historical Analysis](docs/historical-analysis.md)

### Integration & API
- [GenAI Integration Guide](docs/genai-integration.md)
- [Custom Prompt Engineering](docs/prompt-engineering.md)
- [Data Schema Reference](docs/data-schema.md)

## 🔧 Quick Start

1.  Open the `team-tracker-app.html` file in your web browser.
2.  The application will be pre-populated with sample data. You can clear this data by clicking the "Clear Today" button.
3.  Add your team members using the "Add Member" button.
4.  Update the status and progress for each team member throughout the day.
5.  Add tasks for each team member using the "Add Task" button in their section.
6.  Set task status (Active, Partially Blocked, Blocked, In Review, Completed) and add issue details when needed.
7.  At the end of the day, click "Save Today's Data" to download a JSON file of the day's progress. It is recommended to create a `team-data` folder to store these files.
8.  To generate a daily summary, click the "Daily Summary" button. You can then copy the summary to your clipboard or export it as a text file.
9.  To generate a weekly summary, click the "Weekly Summary" button, load the daily JSON files for the week, and then click "Generate".

## Customization

To change the default team members that are loaded when the application is first opened, you can edit the `initializeSampleData` function in the `team-tracker-app.html` file. Simply modify the `teamData` array within this function to include your desired team members.

```javascript
function initializeSampleData() {
    teamData = [
        {
            id: 1,
            name: 'Your Name',
            role: 'Your Role',
            status: 'active',
            yesterday: '',
            today: '',
            blockers: '',
            notes: '',
            tasks: [], // Initialize with empty tasks array
            lastUpdated: new Date().toISOString()
        },
        // Add more team members here
    ];
    memberIdCounter = teamData.length + 1;
    renderTeam();
}
```

## Important Points

*   **Regular Updates:** Encourage team members to update their status and progress throughout the day, not just during stand-up. This will give you a more accurate view of the team's progress.
*   **Task Tracking:** Use the task tracking feature to break down larger projects into manageable pieces and track progress on each item.
*   **Use the "Notes" Field:** The "Notes" field is a great place to capture additional information that doesn't fit into the other categories, such as links to documents, reminders, or kudos to other team members.
*   **Leverage AI Summaries:** Paste the generated summaries into an AI to get insights into your team's productivity, identify trends, and get suggestions for improvement.
*   **Weekly Review:** Use the weekly summary to review the team's progress over the past week and plan for the week ahead.
*   **Consistent Data Storage:** Keep all your daily JSON files in a dedicated `team-data` folder to make it easy to generate weekly summaries.

## Productivity Tips

*   Rest of the task details you can copy paste from Jira. This will not take much time.
*   With the help of this app, all you need to do is to add some extra details based on your task understanding.
*   You must pay attention during sprint refinement calls or reach out to the concerned person who has helped in that task creation or task assignee to understand the task well.
*   This might take some effort first to understand the task and then say 10 to 15 minutes per task to edit it in the `sample-data.js` task array.
*   Only on a daily basis you just have to keep editing it.
*   You can even share the csv with your team mates and ask them to edit it if you're not available on the dsu calls.