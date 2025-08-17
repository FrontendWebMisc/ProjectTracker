# Installation & Setup

Complete setup guide for Project Tracker, including system requirements, installation steps, and initial configuration.

## System Requirements

### Browser Support
- **Chrome 80+** (Recommended)
- **Firefox 75+** 
- **Safari 13+**
- **Edge 80+**

### System Requirements
- **Operating System**: Windows, macOS, Linux (any OS with modern browser)
- **Memory**: 2GB RAM minimum, 4GB recommended
- **Storage**: 50MB free space for application and data
- **Network**: No internet required (runs locally)

### JavaScript Features Required
- ES6+ support (arrow functions, async/await)
- Local Storage API
- File API for import/export
- JSON parsing capabilities

## Installation Options

### Option 1: Direct Download (Recommended)
1. **Download Files**: Get the project files:
   - `team-tracker-app.html` (main application)
   - `sample-data.js` (sample team data)
   - `user-profile.js` (user profile configuration)
   - `docs/` folder (documentation)

2. **Create Project Folder**:
   ```
   📁 ProjectTracker/
   ├── 📄 team-tracker-app.html
   ├── 📄 sample-data.js
   ├── 📄 user-profile.js
   ├── 📄 README.md
   └── 📁 docs/
   ```

3. **Open Application**: Double-click `team-tracker-app.html`

### Option 2: Git Clone
```bash
git clone [repository-url] ProjectTracker
cd ProjectTracker
# Open team-tracker-app.html in your browser
```

### Option 3: Download ZIP
1. Download ZIP file from repository
2. Extract to desired location
3. Open `team-tracker-app.html`

## First-Time Setup

### 1. **Verify Installation**
- Open `team-tracker-app.html` in your browser
- You should see the Project Tracker interface
- Check for any console errors (F12 → Console)

### 2. **Load Sample Data**
- Click "**Load Sample Data**" button
- Verify 3 team members appear with tasks
- Confirm all features work (add task, generate summary)

### 3. **Test Core Features**
```
✅ Task creation and editing
✅ Team member management
✅ Status updates and progress tracking
✅ Data export (JSON/CSV/TXT)
✅ Summary generation
✅ AI compression
```

### 4. **Browser Permissions**
Ensure browser allows:
- **File Downloads**: For data export functionality
- **Local Storage**: For saving application state
- **JavaScript**: Required for all functionality

## Configuration

### Sample Data Customization

#### Modify Default Team Members
Edit `sample-data.js` to customize initial team:

```javascript
function initializeSampleData() {
    return [
        {
            id: 1,
            name: 'Your Name',
            role: 'Your Role',
            title: 'Your Title',
            department: 'Your Department',
            status: 'active',
            yesterday: '',
            today: '',
            blockers: '',
            notes: '',
            tasks: [],
            skillsets: [
                {
                    category: 'Your Skills Category',
                    skills: [
                        { name: 'Skill Name', proficiency: 'Expert', experience: '3+ years' }
                    ]
                }
            ],
            languages: [
                { name: 'English', proficiency: 'Fluent' }
            ],
            lastUpdated: new Date().toISOString()
        }
        // Add more team members...
    ];
}
```

#### Configure User Profile Template
Edit `user-profile.js` for new member defaults:

```javascript
const USER_PROFILE = {
    personalInfo: {
        name: '',
        title: '',
        department: '',
        email: '',
        startDate: '',
        timezone: 'UTC'
    },
    skillsets: [
        {
            category: 'Programming Languages',
            skills: []
        }
        // Customize skill categories...
    ]
};
```

### Application Settings

#### Team Configuration
```javascript
const TEAM_CONFIG = {
    startingMemberIdCounter: 4,  // Next member ID
    maxMembersPerTeam: 20,       // Team size limit
    autoSaveEnabled: true,       // Auto-save changes
    exportFormat: 'json'         // Default export format
};
```

#### UI Customization
No configuration files needed - all styling is embedded in the HTML file. To customize:

1. Open `team-tracker-app.html` in text editor
2. Locate `<style>` section
3. Modify CSS variables and classes
4. Save and refresh browser

## Data Storage Setup

### Local Storage
- **Automatic**: Application uses browser local storage
- **Persistent**: Data survives browser restarts
- **Isolated**: Data specific to this application
- **Capacity**: ~5-10MB depending on browser

### File-Based Storage (Recommended)

#### Create Data Directory
```
📁 ProjectTracker/
├── 📄 team-tracker-app.html
├── 📁 team-data/           ← Create this folder
│   ├── 📄 2024-01-15-team-data.json
│   ├── 📄 2024-01-16-team-data.json
│   └── 📄 ...
└── 📁 exports/             ← Optional: organize exports
    ├── 📄 weekly-summary-2024-W03.txt
    └── 📄 task-analysis-2024-01-20.csv
```

#### Naming Conventions
- **Daily Data**: `YYYY-MM-DD-team-data.json`
- **Weekly Summaries**: `weekly-summary-YYYY-WNN.txt`
- **Task Analysis**: `task-analysis-YYYY-MM-DD.csv`

## Backup and Security

### Data Backup Strategy
1. **Daily Exports**: Use "Save Today's Data" every day
2. **Weekly Backups**: Export weekly summaries
3. **Cloud Storage**: Store data files in Dropbox/Google Drive
4. **Version Control**: Keep data files in git repository (optional)

### Security Considerations
- **Local Only**: All data stays on your machine
- **No Network**: Application doesn't send data anywhere
- **Browser Security**: Follows standard browser security model
- **File Access**: Only accesses files you explicitly select

### Data Privacy
- **No Tracking**: Application doesn't track usage
- **No Analytics**: No data collection or telemetry
- **Offline Operation**: Works without internet connection
- **User Control**: Complete control over all data

## Troubleshooting Installation

### Common Issues

#### Application Won't Load
```
❌ Problem: Blank page or errors
✅ Solutions:
   - Try different browser
   - Check browser console for errors (F12)
   - Ensure JavaScript is enabled
   - Disable browser extensions temporarily
```

#### Sample Data Missing
```
❌ Problem: No team members appear
✅ Solutions:
   - Click "Load Sample Data" button
   - Check sample-data.js file exists
   - Verify file permissions
   - Try refreshing page
```

#### File Operations Not Working
```
❌ Problem: Can't save or load files
✅ Solutions:
   - Check browser allows downloads
   - Disable popup blockers
   - Try in private/incognito mode
   - Check browser security settings
```

#### Performance Issues
```
❌ Problem: Slow or unresponsive
✅ Solutions:
   - Close other browser tabs
   - Clear browser cache
   - Reduce team size (<20 members)
   - Archive old tasks
```

### Browser-Specific Issues

#### Chrome
- **File Downloads**: May block downloads - click "Allow" in address bar
- **Local Files**: For local file protocol, may need `--allow-file-access-from-files` flag

#### Firefox
- **Security**: May show security warnings for local files
- **Performance**: Generally excellent performance

#### Safari
- **Downloads**: May ask permission for multiple downloads
- **Local Storage**: Sometimes strict about local storage limits

#### Edge
- **Compatibility**: Works well with modern Edge (Chromium-based)
- **Legacy Edge**: Not supported - upgrade recommended

### Performance Optimization

#### Browser Settings
```
✅ Recommended Settings:
   - Enable JavaScript
   - Allow pop-ups for application domain
   - Increase download limits if needed
   - Clear cache occasionally
```

#### Application Optimization
```
✅ Best Practices:
   - Keep team size under 20 members
   - Archive completed tasks regularly
   - Export data weekly to prevent large local storage
   - Use compression for large summaries
```

## Development Setup (Advanced)

### For Customization
1. **Code Editor**: Use VS Code, Sublime Text, or similar
2. **Version Control**: Initialize git repository
3. **Testing**: Use browser developer tools
4. **Backup**: Keep original files before modifications

### File Structure Understanding
```
📄 team-tracker-app.html    ← Main application (HTML + CSS + JavaScript)
📄 sample-data.js          ← Sample team and task data
📄 user-profile.js         ← User profile template
📄 README.md               ← Documentation overview
📁 docs/                   ← Detailed documentation
   ├── setup-and-installation.md
   ├── quick-start-guide.md
   └── [other documentation files]
```

### Customization Points
- **UI Styling**: Modify CSS in `<style>` section
- **Sample Data**: Edit `sample-data.js` function
- **User Profiles**: Modify `user-profile.js` template
- **Features**: Add JavaScript functions in main file

## Next Steps

### After Installation
1. **Read**: [Quick Start Guide](quick-start-guide.md)
2. **Explore**: [Task Management](task-management.md) features
3. **Configure**: [User Profile System](user-profile-system.md)
4. **Integrate**: [GenAI Integration Guide](genai-integration.md)

### Team Onboarding
1. **Demo**: Show features with sample data
2. **Training**: Walk through daily workflow
3. **Customization**: Add real team members and tasks
4. **Adoption**: Start with current sprint tasks

### Support Resources
- **Documentation**: Complete feature guides in `docs/` folder
- **Examples**: Use sample data as templates
- **Best Practices**: Follow workflow recommendations
- **Troubleshooting**: Check individual feature documentation

---

**🎉 Installation complete! You're ready to start managing your team's tasks and generating AI-powered insights.**