# Team Progress Tracker

## Description

This is a simple, yet powerful, single-page application for tracking the daily and weekly progress of a team. It's built with HTML, CSS, and JavaScript, and it's designed to be used locally in your browser. The application allows you to manage team members, track their status, and generate AI-ready summaries for daily and weekly reports.

## Features

*   **Real-time Dashboard:** Live statistics on team status (Active, Blocked, Partially Blocked, In Review).
*   **Team Member Management:** Easily add and remove team members.
*   **Individual Progress Tracking:** Track what each team member did yesterday, is doing today, any blockers they have, and any additional notes.
*   **Task Tracking:** Track individual tasks for each team member with status and issue details.
*   **Status Tracking:** Set a status for each team member (Active, Blocked, Partially Blocked, In Review).
*   **AI-Ready Summaries:** Generate detailed daily and weekly summaries with a single click. The summaries are formatted to be easily pasted into an AI for further analysis.
*   **Data Management:**
    *   Save daily progress as a JSON file.
    *   Load data from a previously saved JSON file.
    *   Clear today's data without removing team members.
    *   Export daily and weekly summaries as text files.
*   **Weekly Summary Generator:**
    *   Load multiple daily JSON files to generate a comprehensive weekly report.
    *   The weekly summary includes a daily breakdown, individual analysis, common blocker patterns, and trends.

## How to Use

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