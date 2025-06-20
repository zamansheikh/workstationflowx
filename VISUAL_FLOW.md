# WorkstationFlowX - Visual Flow Documentation

## 🏢 Complete Organizational Hierarchy

```
                    ┌─────────────────┐
                    │      ADMIN      │
                    │   (Super User)  │
                    └─────────┬───────┘
                              │
                              │ Creates & Manages
                              ▼
                    ┌─────────────────┐
                    │ COMPANY OWNER   │
                    │  (Company CEO)  │
                    └─────────┬───────┘
                              │
                              │ Creates & Manages
                              ▼
                    ┌─────────────────┐
                    │ BRANCH MANAGER  │
                    │ (Branch Head)   │
                    └─────────┬───────┘
                              │
                              │ Creates & Manages
                              ▼
                    ┌─────────────────┐
                    │  TEAM LEADER    │
                    │ (Project Lead)  │
                    └─────────┬───────┘
                              │
                              │ Manages & Assigns
                              ▼
                    ┌─────────────────┐
                    │   EMPLOYEE      │
                    │ (Team Member)   │
                    └─────────────────┘
```

## 📋 Detailed Role Flow & Permissions

### 🔴 ADMIN LEVEL
```
┌─────────────────────────────────────────────────────────────┐
│                        ADMIN DASHBOARD                      │
├─────────────────────────────────────────────────────────────┤
│ 🏢 CREATE COMPANIES     │ 📊 SYSTEM ANALYTICS              │
│ 🔍 VIEW ALL COMPANIES   │ 📋 COMPANY REQUESTS              │
│ ✅ APPROVE REQUESTS      │ 🚫 REJECT APPLICATIONS           │
│ 👥 USER MANAGEMENT      │ 🔐 SYSTEM SETTINGS               │
└─────────────────────────────────────────────────────────────┘

Pages: /admin, /companies, /requests, /create_company
```

### 🔵 COMPANY OWNER LEVEL
```
┌─────────────────────────────────────────────────────────────┐
│                   COMPANY OWNER DASHBOARD                   │
├─────────────────────────────────────────────────────────────┤
│ 🏪 CREATE BRANCHES      │ 📈 COMPANY ANALYTICS             │
│ 👥 MANAGE EMPLOYEES     │ 📊 BRANCH PERFORMANCE            │
│ 💰 FINANCIAL OVERVIEW  │ 🎯 COMPANY TARGETS               │
│ 📋 BRANCH OVERVIEW      │ 📝 REPORTS & INSIGHTS            │
└─────────────────────────────────────────────────────────────┘

Pages: /company, /branches, /employee, /create_branch
```

### 🟢 BRANCH MANAGER LEVEL
```
┌─────────────────────────────────────────────────────────────┐
│                  BRANCH MANAGER DASHBOARD                   │
├─────────────────────────────────────────────────────────────┤
│ 👥 CREATE TEAMS         │ 📊 TEAM PERFORMANCE              │
│ 🏗️ MANAGE TEAMS         │ 💼 BRANCH EMPLOYEES              │
│ 📈 TEAM ANALYTICS       │ 🎯 BRANCH TARGETS                │
│ 📋 RESOURCE ALLOCATION  │ 📝 TEAM REPORTS                  │
└─────────────────────────────────────────────────────────────┘

Pages: /branch, /teams, /branch-employees, /create-team
```

### 🟣 TEAM LEADER LEVEL
```
┌─────────────────────────────────────────────────────────────┐
│                   TEAM LEADER DASHBOARD                     │
├─────────────────────────────────────────────────────────────┤
│ 📝 CREATE PROJECTS      │ 📊 PROJECT ANALYTICS             │
│ 🎯 ASSIGN TASKS         │ 👥 TEAM MEMBERS                  │
│ 📈 KPI TRACKING         │ ⏰ DEADLINE MANAGEMENT           │
│ 💼 PROJECT MANAGEMENT   │ 🚨 URGENT TASKS                  │
└─────────────────────────────────────────────────────────────┘

Pages: /team-leader, /projects, /team-members, /kpi, /analytics, /create-project
```

### 🟠 EMPLOYEE LEVEL
```
┌─────────────────────────────────────────────────────────────┐
│                    EMPLOYEE DASHBOARD                       │
├─────────────────────────────────────────────────────────────┤
│ 📋 MY PROJECTS          │ 📊 MY PERFORMANCE               │
│ ✅ UPDATE TASKS         │ 👥 MY TEAM                      │
│ ⏰ TRACK DEADLINES      │ 📈 PROGRESS TRACKING            │
│ 💬 TEAM COMMUNICATION   │ 📝 TASK COMPLETION              │
└─────────────────────────────────────────────────────────────┘

Pages: /employee-dashboard, /my-projects, /my-team, /my-performance
```

## 🔄 Data Flow Process

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    ADMIN    │───▶│   COMPANY   │───▶│   BRANCH    │───▶│    TEAM     │───▶│  EMPLOYEE   │
│   Creates   │    │   Creates   │    │   Creates   │    │   Creates   │    │ Completes   │
│ Companies   │    │  Branches   │    │    Teams    │    │  Projects   │    │    Tasks    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       │                   │                   │                   │                   │
       ▼                   ▼                   ▼                   ▼                   ▼
   📊 System           📈 Company          🎯 Branch           📝 Project         ✅ Task
   Analytics           Analytics          Analytics           Analytics         Completion
```

## 🎨 UI Theme & Design Pattern

### Color Scheme
```
🔴 Admin       → Red (#DC2626)     → System Administration
🔵 Company     → Blue (#2563EB)    → Company Management  
🟢 Branch      → Green (#16A34A)   → Branch Operations
🟣 Team Leader → Purple (#9333EA)  → Team Leadership
🟠 Employee    → Orange (#EA580C)  → Individual Work
```

### Navigation Pattern
```
┌─────────────────────────────────────────────────────┐
│ 🏢 LOGO    Welcome, [User Name]         👤 Profile │
├─────────────────────────────────────────────────────┤
│ 📊 Overview                                        │
│ 📋 [Role-Specific Menu 1]                         │
│ 👥 [Role-Specific Menu 2]                         │
│ ➕ [Create New Item]                              │
│                                                   │
│ 🚪 Logout                                         │
└─────────────────────────────────────────────────────┘
```

## 📱 Responsive Breakpoints

```
📱 Mobile (< 768px)    : Single column layout
💻 Tablet (768-1024px) : Two column layout  
🖥️ Desktop (> 1024px)  : Three+ column layout
```

## 🔗 Route Structure

```
/                           → Role Selection Page
├── (admin)/               → Admin Route Group
│   ├── admin              → Admin Dashboard
│   ├── companies          → Company Management
│   ├── requests           → Company Requests
│   └── create_company     → Create Company Form
├── (company)/             → Company Route Group  
│   ├── company            → Company Dashboard
│   ├── branches           → Branch Management
│   ├── employee           → Employee Overview
│   └── create_branch      → Create Branch Form
├── (branch)/              → Branch Route Group
│   ├── branch             → Branch Dashboard
│   ├── teams              → Team Management
│   ├── branch-employees   → Employee Management
│   └── create-team        → Create Team Form
├── (team-leader)/         → Team Leader Route Group
│   ├── team-leader        → Team Leader Dashboard
│   ├── projects           → Project Management
│   ├── team-members       → Member Management
│   ├── kpi                → KPI Tracking
│   ├── analytics          → Team Analytics
│   └── create-project     → Create Project Form
└── (employee)/            → Employee Route Group
    ├── employee-dashboard → Employee Dashboard
    ├── my-projects        → Personal Projects
    ├── my-team            → Team Information
    └── my-performance     → Performance Tracking
```

## 🚀 Quick Access URLs

### For Testing Each Role:
- **Admin**: http://localhost:3000/admin
- **Company Owner**: http://localhost:3000/company
- **Branch Manager**: http://localhost:3000/branch
- **Team Leader**: http://localhost:3000/team-leader
- **Employee**: http://localhost:3000/employee-dashboard

### Key Features by Role:
```
👑 Admin        : System Control & Company Creation
🏢 Company      : Branch Creation & Employee Management
🏪 Branch       : Team Creation & Local Management
👨‍💼 Team Leader : Project Creation & Task Assignment
👩‍💻 Employee     : Task Completion & Progress Tracking
```

---

*This document provides a comprehensive visual guide to understanding the WorkstationFlowX organizational structure and user flow.*
