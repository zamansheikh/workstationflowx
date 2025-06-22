// types/index.ts
export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    role: 'admin' | 'companyOwner' | 'branchManager' | 'teamLeader' | 'employee';
}

export interface Project {
    id?: string;
    name?: string;
    client: string;
    description?: string;
    budget?: number;
    status?: 'planning' | 'in-progress' | 'completed' | 'on-hold';
    priority?: 'low' | 'medium' | 'high' | 'critical';
    startDate?: string;
    dueDate?: string;
    progress?: number;
    teamLead?: string;
    teamSize?: number;
    technologies: Technology[];
    phases: Phase[];
    daysLeft: number;
    avatar?: string;
}

export interface Technology {
    name: string;
    color: string;
    developer: string;
}

export interface Phase {
    name: string;
    progress: number;
    developer: string;
}

export interface Company {
    id: string;
    name: string;
    owner: string;
    email: string;
    phone: string;
    branches: number;
    employees: number;
    createdAt: string;
    logo?: string;
    description?: string;
    verified?: boolean;
}

export interface Branch {
    id: string;
    name: string;
    manager: string;
    phone: string;
    email: string;
    employeeCount: number;
    teamCount: number;
    createdAt: string;
}

export interface Employee {
    id: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    branch: string;
    joinDate: string;
    avatar?: string;
    performance?: number;
}

export interface Task {
    id: number;
    title: string;
    project: string;
    assignee: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    dueDate: string;
    status: 'Overdue' | 'In Progress' | 'Pending' | 'Completed';
    avatar: string;
    timeLeft: string;
}

export interface DashboardCardProps {
    title: string;
    quantity: string | number;
    subtitle?: string;
    icon?: React.ComponentType<any>;
}

export interface NavLink {
    path: string;
    icon: React.ComponentType<any>;
    label: string;
    unique?: boolean;
}

export interface SidebarProps {
    role: string;
    children: React.ReactNode;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface ChartData {
    name: string;
    Target: number;
    Delivery: number;
}

export interface TeamCardProps {
    teamName: string;
    teamId: string;
    teamLeader: string;
    runningProjects: number;
    deliveredProjects: number;
    workload: string;
}
