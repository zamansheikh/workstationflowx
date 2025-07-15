# WorkstationFlowX Backend Development Documentation

## 📋 Project Overview

WorkstationFlowX is a comprehensive workflow management system built with a hierarchical role-based structure. The backend needs to support a 5-tier organizational hierarchy with role-based access control, project management, team collaboration, and a public job posting system.

## 🏗️ System Architecture

### Technology Stack
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer + AWS S3/CloudStorage
- **Email**: Nodemailer
- **Validation**: Joi or Express-validator
- **API Documentation**: Swagger/OpenAPI

### Project Structure
```
workstationflowx-backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   ├── config.js
│   │   └── swagger.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── admin.controller.js
│   │   ├── company.controller.js
│   │   ├── branch.controller.js
│   │   ├── team.controller.js
│   │   ├── project.controller.js
│   │   ├── task.controller.js
│   │   ├── job.controller.js
│   │   └── public.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── role.middleware.js
│   │   ├── validation.middleware.js
│   │   └── upload.middleware.js
│   ├── models/
│   │   ├── User.model.js
│   │   ├── Company.model.js
│   │   ├── Branch.model.js
│   │   ├── Team.model.js
│   │   ├── Project.model.js
│   │   ├── Task.model.js
│   │   ├── JobPost.model.js
│   │   └── JobApplication.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── admin.routes.js
│   │   ├── company.routes.js
│   │   ├── branch.routes.js
│   │   ├── team.routes.js
│   │   ├── project.routes.js
│   │   ├── task.routes.js
│   │   ├── job.routes.js
│   │   └── public.routes.js
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── email.service.js
│   │   ├── upload.service.js
│   │   └── notification.service.js
│   ├── utils/
│   │   ├── response.util.js
│   │   ├── error.util.js
│   │   └── validation.util.js
│   └── app.js
├── uploads/
├── tests/
├── package.json
└── server.js
```

## 🎯 Role-Based System

### 1. Role Hierarchy
```
Admin (Level 1)
├── Company Owner (Level 2)
    ├── Branch Manager (Level 3)
        ├── Team Leader (Level 4)
            ├── Employee (Level 5)
```

### 2. Role Permissions Matrix

| Feature | Admin | Company Owner | Branch Manager | Team Leader | Employee |
|---------|--------|---------------|----------------|-------------|----------|
| Create Companies | ✅ | ❌ | ❌ | ❌ | ❌ |
| Manage Companies | ✅ | ❌ | ❌ | ❌ | ❌ |
| Approve Company Requests | ✅ | ❌ | ❌ | ❌ | ❌ |
| Create Branches | ❌ | ✅ | ❌ | ❌ | ❌ |
| Manage Branches | ❌ | ✅ | ❌ | ❌ | ❌ |
| Create Teams | ❌ | ❌ | ✅ | ❌ | ❌ |
| Manage Teams | ❌ | ❌ | ✅ | ❌ | ❌ |
| Create Projects | ❌ | ❌ | ❌ | ✅ | ❌ |
| Manage Projects | ❌ | ❌ | ❌ | ✅ | ❌ |
| Create Job Posts | ❌ | ❌ | ❌ | ✅ | ❌ |
| Manage Job Applications | ❌ | ❌ | ❌ | ✅ | ❌ |
| View Assigned Tasks | ❌ | ❌ | ❌ | ❌ | ✅ |
| Update Task Progress | ❌ | ❌ | ❌ | ❌ | ✅ |

## 🗄️ Database Schema

### User Model
```javascript
const userSchema = new mongoose.Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  avatar: String,
  role: { 
    type: String, 
    enum: ['admin', 'companyOwner', 'branchManager', 'teamLeader', 'employee'],
    required: true 
  },
  companyId: { type: ObjectId, ref: 'Company' },
  branchId: { type: ObjectId, ref: 'Branch' },
  teamId: { type: ObjectId, ref: 'Team' },
  isActive: { type: Boolean, default: true },
  lastLogin: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### Company Model
```javascript
const companySchema = new mongoose.Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  companyId: { type: String, required: true, unique: true },
  owner: { type: ObjectId, ref: 'User', required: true },
  email: { type: String, required: true },
  phone: String,
  website: String,
  logo: String,
  description: String,
  maxBranches: { type: Number, default: 10 },
  maxEmployees: { type: Number, default: 100 },
  isActive: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### Branch Model
```javascript
const branchSchema = new mongoose.Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  branchId: { type: String, required: true, unique: true },
  companyId: { type: ObjectId, ref: 'Company', required: true },
  manager: { type: ObjectId, ref: 'User', required: true },
  location: String,
  phone: String,
  email: String,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### Team Model
```javascript
const teamSchema = new mongoose.Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  teamId: { type: String, required: true, unique: true },
  branchId: { type: ObjectId, ref: 'Branch', required: true },
  leader: { type: ObjectId, ref: 'User', required: true },
  members: [{ type: ObjectId, ref: 'User' }],
  description: String,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### Project Model
```javascript
const projectSchema = new mongoose.Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  projectId: { type: String, required: true, unique: true },
  teamId: { type: ObjectId, ref: 'Team', required: true },
  client: String,
  description: String,
  budget: Number,
  status: { 
    type: String, 
    enum: ['planning', 'in-progress', 'completed', 'on-hold'],
    default: 'planning' 
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium' 
  },
  startDate: Date,
  dueDate: Date,
  completedDate: Date,
  progress: { type: Number, default: 0 },
  teamLead: { type: ObjectId, ref: 'User', required: true },
  assignedMembers: [{ type: ObjectId, ref: 'User' }],
  technologies: [{
    name: String,
    color: String,
    developer: { type: ObjectId, ref: 'User' }
  }],
  phases: [{
    name: String,
    progress: Number,
    developer: { type: ObjectId, ref: 'User' }
  }],
  attachments: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### Task Model
```javascript
const taskSchema = new mongoose.Schema({
  _id: ObjectId,
  title: { type: String, required: true },
  taskId: { type: String, required: true, unique: true },
  projectId: { type: ObjectId, ref: 'Project', required: true },
  assignee: { type: ObjectId, ref: 'User', required: true },
  assigner: { type: ObjectId, ref: 'User', required: true },
  description: String,
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium' 
  },
  status: { 
    type: String, 
    enum: ['pending', 'in-progress', 'completed', 'overdue'],
    default: 'pending' 
  },
  dueDate: Date,
  completedDate: Date,
  estimatedHours: Number,
  actualHours: Number,
  attachments: [String],
  comments: [{
    user: { type: ObjectId, ref: 'User' },
    text: String,
    timestamp: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### JobPost Model
```javascript
const jobPostSchema = new mongoose.Schema({
  _id: ObjectId,
  title: { type: String, required: true },
  jobId: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['full-time', 'part-time', 'contract', 'internship'],
    required: true 
  },
  experience: String,
  salary: String,
  description: { type: String, required: true },
  requirements: [String],
  skills: [String],
  benefits: [String],
  deadline: { type: Date, required: true },
  status: { 
    type: String, 
    enum: ['active', 'closed', 'draft'],
    default: 'draft' 
  },
  createdBy: { type: ObjectId, ref: 'User', required: true },
  teamId: { type: ObjectId, ref: 'Team', required: true },
  shareableLink: String,
  applicationsCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### JobApplication Model
```javascript
const jobApplicationSchema = new mongoose.Schema({
  _id: ObjectId,
  applicationId: { type: String, required: true, unique: true },
  jobPostId: { type: ObjectId, ref: 'JobPost', required: true },
  applicantName: { type: String, required: true },
  applicantEmail: { type: String, required: true },
  applicantPhone: { type: String, required: true },
  experience: String,
  education: String,
  skills: [String],
  coverLetter: { type: String, required: true },
  resume: { type: String, required: true }, // File path
  portfolio: String,
  linkedIn: String,
  github: String,
  status: { 
    type: String, 
    enum: ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'],
    default: 'pending' 
  },
  score: Number,
  notes: String,
  reviewedBy: { type: ObjectId, ref: 'User' },
  reviewedAt: Date,
  appliedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

### Company Request Model
```javascript
const companyRequestSchema = new mongoose.Schema({
  _id: ObjectId,
  companyName: { type: String, required: true },
  ownerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  website: String,
  maxBranches: Number,
  maxEmployees: Number,
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending' 
  },
  reviewedBy: { type: ObjectId, ref: 'User' },
  reviewedAt: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

## 🔐 Authentication & Authorization

### JWT Token Structure
```javascript
{
  "sub": "user_id",
  "email": "user@example.com",
  "role": "teamLeader",
  "companyId": "company_id",
  "branchId": "branch_id",
  "teamId": "team_id",
  "iat": 1234567890,
  "exp": 1234567890
}
```

### Middleware Functions
```javascript
// Authentication middleware
const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'Access denied' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.sub);
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Role-based authorization
const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
};
```

## 🛤️ API Endpoints

### Authentication Routes
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/profile
PUT /api/auth/profile
POST /api/auth/change-password
POST /api/auth/forgot-password
POST /api/auth/reset-password
```

### Admin Routes
```
GET /api/admin/dashboard
GET /api/admin/companies
POST /api/admin/companies
PUT /api/admin/companies/:id
DELETE /api/admin/companies/:id
GET /api/admin/requests
POST /api/admin/requests/:id/approve
POST /api/admin/requests/:id/reject
GET /api/admin/analytics
```

### Company Routes
```
GET /api/company/dashboard
GET /api/company/branches
POST /api/company/branches
PUT /api/company/branches/:id
DELETE /api/company/branches/:id
GET /api/company/employees
GET /api/company/analytics
```

### Branch Routes
```
GET /api/branch/dashboard
GET /api/branch/teams
POST /api/branch/teams
PUT /api/branch/teams/:id
DELETE /api/branch/teams/:id
GET /api/branch/employees
GET /api/branch/analytics
```

### Team Routes
```
GET /api/team/dashboard
GET /api/team/members
POST /api/team/members
PUT /api/team/members/:id
DELETE /api/team/members/:id
GET /api/team/projects
GET /api/team/kpi
GET /api/team/analytics
```

### Project Routes
```
GET /api/projects
POST /api/projects
GET /api/projects/:id
PUT /api/projects/:id
DELETE /api/projects/:id
GET /api/projects/:id/tasks
POST /api/projects/:id/tasks
PUT /api/projects/:id/tasks/:taskId
DELETE /api/projects/:id/tasks/:taskId
```

### Job Posting Routes
```
GET /api/jobs
POST /api/jobs
GET /api/jobs/:id
PUT /api/jobs/:id
DELETE /api/jobs/:id
GET /api/jobs/:id/applications
POST /api/jobs/:id/applications/:appId/status
GET /api/jobs/applications
```

### Public Routes (No Auth Required)
```
GET /api/public/jobs
GET /api/public/jobs/:id
POST /api/public/jobs/:id/apply
```

## 📊 Sample API Responses

### Dashboard Data - Team Leader
```json
{
  "success": true,
  "data": {
    "stats": {
      "totalProjects": 5,
      "activeProjects": 3,
      "completedProjects": 2,
      "teamMembers": 8,
      "pendingTasks": 12,
      "activeJobs": 2,
      "jobApplications": 25
    },
    "recentProjects": [
      {
        "_id": "proj_001",
        "name": "E-commerce Platform",
        "status": "in-progress",
        "progress": 75,
        "dueDate": "2024-02-15",
        "teamSize": 5
      }
    ],
    "teamPerformance": [
      {
        "name": "John Doe",
        "completedTasks": 8,
        "pendingTasks": 3,
        "performance": 85
      }
    ],
    "urgentTasks": [
      {
        "_id": "task_001",
        "title": "Fix authentication bug",
        "assignee": "Jane Smith",
        "priority": "high",
        "dueDate": "2024-01-20"
      }
    ]
  }
}
```

### Job Post Creation
```json
{
  "success": true,
  "data": {
    "_id": "job_001",
    "title": "Senior React Developer",
    "department": "Engineering",
    "location": "Remote",
    "type": "full-time",
    "experience": "3-5 years",
    "salary": "$70,000 - $90,000",
    "description": "We are looking for a senior React developer...",
    "requirements": [
      "3+ years React experience",
      "TypeScript proficiency",
      "Next.js knowledge"
    ],
    "skills": ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    "benefits": ["Health Insurance", "Remote Work", "Flexible Hours"],
    "deadline": "2024-02-15",
    "status": "active",
    "shareableLink": "https://workstationflowx.com/jobs/job_001",
    "applicationsCount": 0,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

### Job Application Submission
```json
{
  "success": true,
  "data": {
    "_id": "app_001",
    "applicationId": "APP-001",
    "jobPostId": "job_001",
    "applicantName": "John Doe",
    "applicantEmail": "john.doe@email.com",
    "applicantPhone": "+1234567890",
    "experience": "4 years",
    "education": "Bachelor's in Computer Science",
    "skills": ["React", "TypeScript", "Node.js"],
    "coverLetter": "I am excited to apply for...",
    "resume": "/uploads/resumes/john-doe-resume.pdf",
    "portfolio": "https://johndoe.dev",
    "linkedIn": "https://linkedin.com/in/johndoe",
    "github": "https://github.com/johndoe",
    "status": "pending",
    "appliedAt": "2024-01-16T14:20:00Z"
  }
}
```

## 🔄 Business Logic Implementation

### User Registration Flow
1. Validate input data
2. Check if email already exists
3. Hash password using bcrypt
4. Generate unique user ID
5. Create user record
6. Send welcome email
7. Return success response

### Project Creation Flow
1. Authenticate user (Team Leader)
2. Validate project data
3. Check team capacity
4. Generate unique project ID
5. Create project record
6. Assign team members
7. Create initial tasks
8. Send notifications
9. Return project details

### Job Application Flow
1. Validate application data
2. Check job post status (active)
3. Check application deadline
4. Upload and validate resume
5. Generate unique application ID
6. Create application record
7. Update job applications count
8. Send confirmation email
9. Notify team leader
10. Return application status

## 🗂️ File Upload Handling

### Configuration
```javascript
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads', file.fieldname);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = {
      'resume': ['.pdf', '.doc', '.docx'],
      'avatar': ['.jpg', '.jpeg', '.png'],
      'logo': ['.jpg', '.jpeg', '.png', '.svg']
    };
    
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes[file.fieldname]?.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});
```

## 📧 Email Service

### Email Templates
```javascript
const emailTemplates = {
  welcome: {
    subject: 'Welcome to WorkstationFlowX',
    html: `
      <h1>Welcome {{name}}!</h1>
      <p>Your account has been created successfully.</p>
      <p>Role: {{role}}</p>
    `
  },
  jobApplication: {
    subject: 'New Job Application - {{jobTitle}}',
    html: `
      <h1>New Application Received</h1>
      <p>Applicant: {{applicantName}}</p>
      <p>Position: {{jobTitle}}</p>
      <p>Applied: {{appliedDate}}</p>
      <a href="{{dashboardLink}}">View Application</a>
    `
  },
  applicationStatus: {
    subject: 'Application Status Update - {{jobTitle}}',
    html: `
      <h1>Application Status Update</h1>
      <p>Dear {{applicantName}},</p>
      <p>Your application for {{jobTitle}} has been {{status}}.</p>
    `
  }
};
```

## 🔍 Search & Filtering

### Job Search Implementation
```javascript
const searchJobs = async (req, res) => {
  try {
    const { 
      q, // search query
      type, // job type
      location, // location
      department, // department
      page = 1, 
      limit = 10 
    } = req.query;

    const query = { status: 'active' };
    
    if (q) {
      query.$or = [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { department: { $regex: q, $options: 'i' } }
      ];
    }
    
    if (type) query.type = type;
    if (location) query.location = { $regex: location, $options: 'i' };
    if (department) query.department = department;

    const jobs = await JobPost.find(query)
      .populate('createdBy', 'name')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await JobPost.countDocuments(query);

    res.json({
      success: true,
      data: {
        jobs,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: parseInt(limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

## 📊 Analytics & Reporting

### Dashboard Analytics
```javascript
const getDashboardAnalytics = async (req, res) => {
  try {
    const { user } = req;
    
    let analytics = {};
    
    switch (user.role) {
      case 'admin':
        analytics = await getAdminAnalytics();
        break;
      case 'companyOwner':
        analytics = await getCompanyAnalytics(user.companyId);
        break;
      case 'branchManager':
        analytics = await getBranchAnalytics(user.branchId);
        break;
      case 'teamLeader':
        analytics = await getTeamAnalytics(user.teamId);
        break;
      case 'employee':
        analytics = await getEmployeeAnalytics(user._id);
        break;
    }
    
    res.json({ success: true, data: analytics });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTeamAnalytics = async (teamId) => {
  const [
    projectStats,
    taskStats,
    memberStats,
    jobStats
  ] = await Promise.all([
    getProjectStats(teamId),
    getTaskStats(teamId),
    getMemberStats(teamId),
    getJobStats(teamId)
  ]);

  return {
    projects: projectStats,
    tasks: taskStats,
    members: memberStats,
    jobs: jobStats,
    performance: await getTeamPerformance(teamId),
    trends: await getTeamTrends(teamId)
  };
};
```

## 🔔 Notification System

### Real-time Notifications
```javascript
const io = require('socket.io')(server);

// Notification types
const NOTIFICATION_TYPES = {
  TASK_ASSIGNED: 'task_assigned',
  TASK_COMPLETED: 'task_completed',
  PROJECT_UPDATED: 'project_updated',
  JOB_APPLICATION: 'job_application',
  DEADLINE_REMINDER: 'deadline_reminder'
};

// Send notification
const sendNotification = async (userId, type, data) => {
  const notification = {
    _id: new mongoose.Types.ObjectId(),
    userId,
    type,
    title: getNotificationTitle(type, data),
    message: getNotificationMessage(type, data),
    data,
    read: false,
    createdAt: new Date()
  };

  // Save to database
  await Notification.create(notification);
  
  // Send real-time notification
  io.to(userId.toString()).emit('notification', notification);
  
  // Send email if needed
  if (shouldSendEmail(type)) {
    await sendEmail(userId, type, data);
  }
};
```

## 🧪 Testing Strategy

### Unit Tests
```javascript
describe('Job Application', () => {
  test('should create job application successfully', async () => {
    const applicationData = {
      jobPostId: 'job_001',
      applicantName: 'John Doe',
      applicantEmail: 'john@example.com',
      applicantPhone: '+1234567890',
      experience: '3 years',
      education: 'Bachelor\'s',
      skills: ['React', 'Node.js'],
      coverLetter: 'I am interested...',
      resume: '/uploads/resume.pdf'
    };

    const response = await request(app)
      .post('/api/public/jobs/job_001/apply')
      .send(applicationData)
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body.data.applicantName).toBe('John Doe');
  });
});
```

## 🚀 Deployment Configuration

### Environment Variables
```bash
# Server Configuration
PORT=3000
NODE_ENV=production

# Database
MONGODB_URI=mongodb://localhost:27017/workstationflowx

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=24h

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# File Upload
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880

# Frontend URL
FRONTEND_URL=https://workstationflowx.com

# AWS S3 (Optional)
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=workstationflowx-files
```

### Docker Configuration
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

## 📈 Performance Optimization

### Database Indexing
```javascript
// User indexes
userSchema.index({ email: 1 });
userSchema.index({ role: 1, companyId: 1 });
userSchema.index({ branchId: 1 });
userSchema.index({ teamId: 1 });

// Job indexes
jobPostSchema.index({ status: 1, deadline: 1 });
jobPostSchema.index({ createdBy: 1 });
jobPostSchema.index({ title: 'text', description: 'text' });

// Application indexes
jobApplicationSchema.index({ jobPostId: 1, status: 1 });
jobApplicationSchema.index({ applicantEmail: 1 });
```

### Caching Strategy
```javascript
const redis = require('redis');
const client = redis.createClient();

// Cache frequently accessed data
const getCachedData = async (key) => {
  const cached = await client.get(key);
  return cached ? JSON.parse(cached) : null;
};

const setCachedData = async (key, data, ttl = 3600) => {
  await client.setex(key, ttl, JSON.stringify(data));
};
```

## 🔒 Security Measures

### Input Validation
```javascript
const Joi = require('joi');

const jobPostSchema = Joi.object({
  title: Joi.string().required().min(3).max(100),
  department: Joi.string().required(),
  location: Joi.string().required(),
  type: Joi.string().valid('full-time', 'part-time', 'contract', 'internship').required(),
  experience: Joi.string().required(),
  salary: Joi.string().optional(),
  description: Joi.string().required().min(50),
  requirements: Joi.array().items(Joi.string()),
  skills: Joi.array().items(Joi.string()),
  benefits: Joi.array().items(Joi.string()),
  deadline: Joi.date().greater('now').required()
});
```

### Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
```

This comprehensive documentation provides everything a backend developer needs to implement the complete WorkstationFlowX system. The document covers architecture, database design, API endpoints, authentication, business logic, and deployment considerations.
