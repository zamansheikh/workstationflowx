# WorkstationFlowX - Complete Workflow Management System

## Overview
WorkstationFlowX is a comprehensive workflow management system built with Next.js 15 and React 19. It provides a hierarchical role-based structure for managing workstations, companies, branches, teams, and projects.

## Project Structure & Organizational Flow

### 🎯 5-Tier Role Hierarchy

```
┌─────────────────┐
│      Admin      │ ← Highest Level
├─────────────────┤
│ Company Owner   │
├─────────────────┤
│ Branch Manager  │
├─────────────────┤
│  Team Leader    │
├─────────────────┤
│   Employee      │ ← Lowest Level
└─────────────────┘
```

### 📋 Role Responsibilities

#### 1. **Admin** (Super Administrator)
- **Route Group**: `(admin)`
- **Main Route**: `/admin`
- **Responsibilities**:
  - Create and manage companies
  - View all company requests
  - System-wide oversight
  - Approve/reject company registrations
- **Available Pages**:
  - `/admin` - Overview dashboard
  - `/companies` - Company management
  - `/requests` - Company requests
  - `/create_company` - Company creation form

#### 2. **Company Owner** (Company Level)
- **Route Group**: `(company)`
- **Main Route**: `/company`
- **Responsibilities**:
  - Manage company branches
  - Oversee all company employees
  - Create new branches
  - Company-wide analytics
- **Available Pages**:
  - `/company` - Company overview
  - `/branches` - Branch management
  - `/employee` - Employee overview
  - `/create_branch` - Branch creation

#### 3. **Branch Manager** (Branch Level)
- **Route Group**: `(branch)`
- **Main Route**: `/branch`
- **Responsibilities**:
  - Manage teams within the branch
  - Oversee branch employees
  - Create new teams
  - Branch performance tracking
- **Available Pages**:
  - `/branch` - Branch overview
  - `/teams` - Team management
  - `/branch-employees` - Employee management
  - `/create-team` - Team creation

#### 4. **Team Leader** (Team Level)
- **Route Group**: `(team-leader)`
- **Main Route**: `/team-leader`
- **Responsibilities**:
  - Lead team members
  - Create and manage projects
  - Assign tasks to team members
  - Track team performance and KPIs
  - Create and manage job postings
  - Review job applications and filter candidates
- **Available Pages**:
  - `/team-leader` - Team leader dashboard
  - `/projects` - Project management
  - `/team-members` - Team member management
  - `/kpi` - Key Performance Indicators
  - `/analytics` - Team analytics
  - `/create-project` - Project creation
  - `/job-posts` - Job posting management
  - `/create-job-post` - Job posting creation
  - `/job-applicants` - Job applicant management

#### 5. **Employee** (Individual Level)
- **Route Group**: `(employee)`
- **Main Route**: `/employee-dashboard`
- **Responsibilities**:
  - View assigned projects
  - Update task progress
  - Track personal performance
  - Communicate with team members
- **Available Pages**:
  - `/employee-dashboard` - Personal dashboard
  - `/my-projects` - Assigned projects
  - `/my-team` - Team information
  - `/my-performance` - Personal performance metrics

## 🏗️ Technical Architecture

### Frontend Stack
- **Framework**: Next.js 15
- **React Version**: 19.0.0
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React, React Icons

### Project Structure
```
app/
├── (admin)/                 # Admin route group
│   ├── layout.js           # Admin layout with sidebar
│   ├── admin/              # Admin dashboard
│   ├── companies/          # Company management
│   ├── requests/           # Company requests
│   └── create_company/     # Company creation
├── (company)/              # Company route group
│   ├── layout.js           # Company layout
│   ├── company/            # Company dashboard
│   ├── branches/           # Branch management
│   ├── employee/           # Employee overview
│   ├── create_branch/      # Branch creation
│   └── components/         # Company-specific components
├── (branch)/               # Branch route group
│   ├── layout.js           # Branch layout
│   ├── branch/             # Branch dashboard
│   ├── teams/              # Team management
│   ├── branch-employees/   # Employee management
│   ├── create-team/        # Team creation
│   └── components/         # Branch-specific components
├── (team-leader)/          # Team leader route group
│   ├── layout.js           # Team leader layout
│   ├── team-leader/        # Team leader dashboard
│   ├── projects/           # Project management
│   ├── team-members/       # Member management
│   ├── kpi/               # KPI tracking
│   ├── analytics/         # Team analytics
│   ├── create-project/    # Project creation
│   └── components/        # Team leader components
├── (employee)/            # Employee route group
│   ├── layout.js          # Employee layout
│   ├── employee-dashboard/ # Employee dashboard
│   ├── my-projects/       # Personal projects
│   ├── my-team/           # Team information
│   ├── my-performance/    # Performance tracking
│   └── components/        # Employee components
├── layout.js              # Root layout
├── globals.css            # Global styles
└── page.js               # Role selection page
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Application**
   - Navigate to `http://localhost:3000`
   - Select your role from the landing page
   - Each role has different access levels and capabilities

## 🎨 Design System

### Color Scheme
- **Primary**: Blue (#0A3355) - Navigation and primary actions
- **Secondary**: Orange (#F6A96B) - Accent and secondary elements
- **Success**: Green - Completed tasks and positive metrics
- **Warning**: Yellow - Pending tasks and warnings
- **Danger**: Red - High priority and critical items

### Components
- **Sidebar Navigation**: Role-based navigation with clean design
- **Dashboard Cards**: Consistent info cards for metrics
- **Charts**: Interactive charts using Recharts
- **Tables**: Responsive tables with sorting and filtering
- **Forms**: Consistent form design with validation

## 🔐 Authentication & Authorization

### Role-Based Access Control
- Each route group has specific role requirements
- Navigation is dynamically generated based on user role
- Permissions are enforced at the layout level

### Navigation Structure
- **Admin**: Company management focus
- **Company Owner**: Branch and employee management
- **Branch Manager**: Team and local employee management
- **Team Leader**: Project and team member management
- **Employee**: Personal task and project tracking

## 📊 Features by Role

### Admin Features
- ✅ Company creation and management
- ✅ System-wide analytics
- ✅ Request management
- ✅ User oversight

### Company Owner Features
- ✅ Branch creation and management
- ✅ Employee oversight
- ✅ Company analytics
- ✅ Branch performance tracking

### Branch Manager Features
- ✅ Team creation and management
- ✅ Branch employee management
- ✅ Team performance tracking
- ✅ Resource allocation

### Team Leader Features
- ✅ Project creation and management
- ✅ Task assignment
- ✅ Team member management
- ✅ Performance analytics
- ✅ KPI tracking
- ✅ Job posting creation and management
- ✅ Public job application system
- ✅ Applicant filtering and review

### Employee Features
- ✅ Personal project view
- ✅ Task progress tracking
- ✅ Team communication
- ✅ Performance monitoring

## 🔄 Workflow Process

1. **Admin** creates companies
2. **Company Owner** creates branches
3. **Branch Manager** creates teams
4. **Team Leader** creates projects and assigns tasks
5. **Employee** completes assigned tasks

## 🛠️ Development Guidelines

### Adding New Features
1. Identify the appropriate role level
2. Create components in the correct route group
3. Follow the existing design patterns
4. Update navigation if needed
5. Test across different screen sizes

### Component Structure
- Keep components role-specific
- Use consistent naming conventions
- Follow the established design system
- Implement proper error handling

## 📱 Responsive Design
- Mobile-first approach
- Responsive navigation
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## 🔮 Future Enhancements
- Real-time notifications
- Advanced analytics dashboard
- Mobile app integration
- API integration for data management
- Multi-language support
- ✅ **Job Posting System** (NEW)
  - Public job application portal
  - Shareable job links
  - Applicant filtering and management
  - Resume upload and review system

## 🆕 New Job Posting Features

### Team Leader Job Management
- **Job Post Creation**: Create detailed job postings with requirements, skills, and benefits
- **Job Post Management**: View, edit, and manage all job postings
- **Shareable Links**: Generate public links for job applications
- **Applicant Review**: Review applications with filtering and scoring
- **Application Management**: Track application status and add notes

### Public Job Portal
- **Public Job Listings**: Browse all active job postings at `/jobs`
- **Job Application Form**: Apply for jobs without authentication at `/jobs/[jobId]`
- **Resume Upload**: Upload resumes and portfolios
- **Application Tracking**: Track application status

### Job Posting Workflow
1. **Team Leader** creates job posting with detailed requirements
2. **System** generates shareable public link
3. **Public Users** can browse jobs and apply without authentication
4. **Team Leader** reviews applications and filters candidates
5. **Team Leader** manages application status and hiring process

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
