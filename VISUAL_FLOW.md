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
│ 💼 JOB POSTING          │ 📋 MANAGE APPLICATIONS           │
│ 🔗 SHAREABLE LINKS      │ 👨‍💼 RECRUITMENT MANAGEMENT       │
└─────────────────────────────────────────────────────────────┘

Pages: /team-leader, /projects, /team-members, /kpi, /analytics, /create-project, /job-posts, /create-job-post, /job-applicants
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
│   ├── create-project     → Create Project Form
│   ├── job-posts          → Job Posts Management
│   ├── create-job-post    → Create Job Post Form
│   └── job-applicants     → Job Applications Management
├── (employee)/            → Employee Route Group
│   ├── employee-dashboard → Employee Dashboard
│   ├── my-projects        → Personal Projects
│   ├── my-team            → Team Information
│   └── my-performance     → Performance Tracking
└── jobs/                  → Public Job Portal (No Auth)
    ├── jobs               → Public Job Listings
    ├── jobs/[jobId]       → Individual Job Application
    └── job-preview        → Job Preview System
```

## 🚀 Quick Access URLs

### For Testing Each Role:
- **Admin**: http://localhost:3000/admin
- **Company Owner**: http://localhost:3000/company
- **Branch Manager**: http://localhost:3000/branch
- **Team Leader**: http://localhost:3000/team-leader
- **Employee**: http://localhost:3000/employee-dashboard

### Public Job Portal (No Authentication):
- **Job Listings**: http://localhost:3000/jobs
- **Job Application**: http://localhost:3000/jobs/[jobId]
- **Job Preview**: http://localhost:3000/job-preview

### Team Leader Job Management:
- **Job Posts**: http://localhost:3000/job-posts
- **Create Job**: http://localhost:3000/create-job-post
- **Applications**: http://localhost:3000/job-applicants

### Key Features by Role:
```
👑 Admin        : System Control & Company Creation
🏢 Company      : Branch Creation & Employee Management
🏪 Branch       : Team Creation & Local Management
👨‍💼 Team Leader : Project Creation, Task Assignment & Job Posting
👩‍💻 Employee     : Task Completion & Progress Tracking
```

---

*This document provides a comprehensive visual guide to understanding the WorkstationFlowX organizational structure and user flow.*

## 🌐 Public Job Portal

### Job Portal Flow (No Authentication Required)
```
┌─────────────────────────────────────────────────────────────┐
│                     PUBLIC JOB PORTAL                      │
├─────────────────────────────────────────────────────────────┤
│ 🔍 BROWSE JOBS          │ 📝 APPLY FOR JOBS               │
│ 🎯 FILTER BY CATEGORY   │ 📄 UPLOAD RESUME                │
│ 📍 SEARCH BY LOCATION   │ 💼 PORTFOLIO SUBMISSION         │
│ 🔗 DIRECT ACCESS        │ 📧 EMAIL NOTIFICATIONS          │
└─────────────────────────────────────────────────────────────┘

Pages: /jobs, /jobs/[jobId]
```

### Job Application Process
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   PUBLIC    │───▶│   BROWSE    │───▶│    APPLY    │───▶│    TEAM     │
│   ACCESS    │    │    JOBS     │    │  FOR JOB    │    │   LEADER    │
│   Portal    │    │   (Filter)  │    │ (No Auth)   │    │   Reviews   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       │                   │                   │                   │
       ▼                   ▼                   ▼                   ▼
  🔗 Shareable       🎯 Job Search      📝 Application      👨‍💼 Applicant
     Links           & Filtering         Submission          Management
```

## 💼 Job Posting System Flow

### Team Leader → Job Post Creation
```
┌─────────────────────────────────────────────────────────────┐
│                    JOB POSTING WORKFLOW                     │
├─────────────────────────────────────────────────────────────┤
│ 1. CREATE JOB POST      │ 2. GENERATE SHAREABLE LINK      │
│ 3. MANAGE APPLICATIONS  │ 4. REVIEW & SHORTLIST           │
│ 5. INTERVIEW PROCESS    │ 6. HIRE CANDIDATE               │
└─────────────────────────────────────────────────────────────┘
```

### Job Post Lifecycle
```
📝 DRAFT → 🔄 ACTIVE → 📋 APPLICATIONS → 👨‍💼 REVIEW → ✅ HIRED/❌ CLOSED
```

### Application Management
```
┌─────────────────────────────────────────────────────────────┐
│                  APPLICATION TRACKING                       │
├─────────────────────────────────────────────────────────────┤
│ 📨 PENDING             │ 👀 REVIEWED                      │
│ ⭐ SHORTLISTED         │ ❌ REJECTED                       │  
│ 🎯 HIRED               │ 📊 ANALYTICS                     │
└─────────────────────────────────────────────────────────────┘
```

## 🔐 Authentication System Implementation

### Login Page (`/login`)
- **Location**: `/app/login/page.tsx`
- **Features**:
  - Role-based authentication
  - Demo credentials for testing
  - Form validation and error handling
  - Responsive design with gradient styling
  - Password visibility toggle

### Authentication API (`/api/auth/login`)
- **Backend URL**: `http://localhost:3000/api/auth/login`
- **Method**: POST
- **Body**: `{ email: string, password: string }`
- **Response**: 
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "role": "admin|companyOwner|branchManager|teamLeader|employee",
        "avatar": "string|null",
        "company": { /* company object */ },
        "branch": { /* branch object */ },
        "team": { /* team object */ },
        "preferences": { /* preferences object */ }
      },
      "tokens": {
        "accessToken": "JWT_TOKEN",
        "refreshToken": "REFRESH_TOKEN"
      }
    }
  }
  ```

### Demo Credentials
Based on the real backend system:

#### Admin
- Email: `admin@system.com`
- Password: `Admin123!`
- Role: `admin`

#### Company Owner
- Email: `companyowner@system.com`
- Password: `Owner123!`
- Role: `companyOwner`

#### Branch Manager
- Email: `branchmanager@system.com`
- Password: `Manager123!`
- Role: `branchManager`

#### Team Leader
- Email: `teamleader@system.com`
- Password: `Leader123!`
- Role: `teamLeader`

#### Employee
- Email: `employee@system.com`
- Password: `Employee123!`
- Role: `employee`

### Authentication Flow
1. User selects role on login page
2. Enters credentials (or uses demo credentials)
3. System validates credentials against mock database
4. JWT tokens are generated and stored
5. User is redirected to role-specific dashboard

### Middleware Protection
- **Location**: `/middleware.ts`
- **Function**: Protects routes based on user roles
- **Features**:
  - Token validation
  - Role-based access control
  - Automatic redirects for unauthorized access

### Authentication Utilities
- **Location**: `/utils/auth.ts`
- **Functions**:
  - `getAuthState()`: Get current authentication state
  - `setAuthState()`: Store authentication data
  - `clearAuthState()`: Clear authentication data
  - `isAuthenticated()`: Check if user is logged in
  - `getCurrentUser()`: Get current user details
  - `hasRole()`: Check user role
  - `logout()`: Logout and clear session

### Testing the Login System
1. Ensure backend is running on: `http://localhost:3000`
2. Start frontend development server: `npm run dev`
3. Visit: `http://localhost:3001/login`
4. Select a role from dropdown
5. Click "Use Demo Credentials" button
6. Click "Sign In"
7. Verify redirection to appropriate dashboard

### Integration with Real Backend
- **Backend URL**: `http://localhost:3000`
- **Authentication**: Real JWT tokens
- **Token Storage**: localStorage (client-side)
- **Route Protection**: Client-side AuthGuard component
- **API Calls**: Authenticated fetch with Bearer tokens
