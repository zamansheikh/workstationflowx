"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    AlertCircle,
    Clock,
    CheckCircle2,
    Calendar,
    Filter,
    Plus,
    Search
} from "lucide-react";
import Link from "next/link";

const TasksPage = () => {
    const [filterStatus, setFilterStatus] = useState("All");
    const [filterPriority, setFilterPriority] = useState("All");

    const allTasks = [
        {
            id: "TSK-001",
            title: "Fix critical security vulnerability",
            project: "E-commerce Platform",
            assignee: "Rafiq Hossain",
            priority: "Critical",
            dueDate: "2024-01-18",
            status: "Overdue",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg",
            description: "Address security vulnerability in payment processing module",
            createdDate: "2024-01-10"
        },
        {
            id: "TSK-002",
            title: "Complete payment gateway integration",
            project: "Mobile Banking App",
            assignee: "Nusrat Jahan",
            priority: "High",
            dueDate: "2024-01-20",
            status: "In Progress",
            avatar: "https://randomuser.me/api/portraits/women/21.jpg",
            description: "Integrate Stripe payment gateway with mobile app",
            createdDate: "2024-01-12"
        },
        {
            id: "TSK-003",
            title: "Deploy production hotfix",
            project: "CRM Dashboard",
            assignee: "Tanvir Ahmed",
            priority: "High",
            dueDate: "2024-01-19",
            status: "Pending",
            avatar: "https://randomuser.me/api/portraits/men/31.jpg",
            description: "Deploy critical bug fix to production environment",
            createdDate: "2024-01-15"
        },
        {
            id: "TSK-004",
            title: "Client presentation preparation",
            project: "Learning Management System",
            assignee: "Farzana Rahman",
            priority: "Medium",
            dueDate: "2024-01-21",
            status: "In Progress",
            avatar: "https://randomuser.me/api/portraits/women/41.jpg",
            description: "Prepare demo and presentation materials for client meeting",
            createdDate: "2024-01-14"
        },
        {
            id: "TSK-005",
            title: "Database backup and optimization",
            project: "Healthcare Portal",
            assignee: "Sabbir Khan",
            priority: "High",
            dueDate: "2024-01-22",
            status: "Not Started",
            avatar: "https://randomuser.me/api/portraits/men/51.jpg",
            description: "Optimize database queries and setup automated backups",
            createdDate: "2024-01-16"
        },
        {
            id: "TSK-006",
            title: "API documentation update",
            project: "E-commerce Platform",
            assignee: "Rashida Begum",
            priority: "Medium",
            dueDate: "2024-01-25",
            status: "Completed",
            avatar: "https://randomuser.me/api/portraits/women/61.jpg",
            description: "Update API documentation for new endpoints",
            createdDate: "2024-01-08"
        },
        {
            id: "TSK-007",
            title: "UI testing and bug fixes",
            project: "Mobile Banking App",
            assignee: "Mizanur Rahman",
            priority: "Low",
            dueDate: "2024-01-28",
            status: "In Progress",
            avatar: "https://randomuser.me/api/portraits/men/71.jpg",
            description: "Conduct comprehensive UI testing and fix identified issues",
            createdDate: "2024-01-17"
        },
        {
            id: "TSK-008",
            title: "Code review and refactoring",
            project: "CRM Dashboard",
            assignee: "Rafiq Hossain",
            priority: "Medium",
            dueDate: "2024-01-30",
            status: "Pending",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg",
            description: "Review codebase and refactor for better performance",
            createdDate: "2024-01-18"
        }
    ];

    const getPriorityColor = (priority) => {
        const colors = {
            "Critical": "bg-red-100 text-red-800 border-red-200",
            "High": "bg-orange-100 text-orange-800 border-orange-200",
            "Medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
            "Low": "bg-green-100 text-green-800 border-green-200"
        };
        return colors[priority] || "bg-gray-100 text-gray-800 border-gray-200";
    };

    const getStatusColor = (status) => {
        const colors = {
            "Overdue": "bg-red-100 text-red-800",
            "In Progress": "bg-blue-100 text-blue-800",
            "Pending": "bg-yellow-100 text-yellow-800",
            "Not Started": "bg-gray-100 text-gray-800",
            "Completed": "bg-green-100 text-green-800"
        };
        return colors[status] || "bg-gray-100 text-gray-800";
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "Overdue":
                return <AlertCircle className="w-4 h-4 text-red-600" />;
            case "Completed":
                return <CheckCircle2 className="w-4 h-4 text-green-600" />;
            case "In Progress":
                return <Clock className="w-4 h-4 text-blue-600" />;
            default:
                return <Clock className="w-4 h-4 text-gray-600" />;
        }
    };

    const getDaysLeft = (dueDate) => {
        const today = new Date();
        const due = new Date(dueDate);
        const diffTime = due - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return `${Math.abs(diffDays)} days overdue`;
        if (diffDays === 0) return "Due today";
        return `${diffDays} days left`;
    };

    const getDaysLeftColor = (dueDate) => {
        const today = new Date();
        const due = new Date(dueDate);
        const diffTime = due - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return "text-red-600 font-semibold";
        if (diffDays <= 1) return "text-orange-600 font-medium";
        if (diffDays <= 3) return "text-yellow-600";
        return "text-gray-600";
    };

    const filteredTasks = allTasks.filter(task => {
        const statusMatch = filterStatus === "All" || task.status === filterStatus;
        const priorityMatch = filterPriority === "All" || task.priority === filterPriority;
        return statusMatch && priorityMatch;
    });

    const taskStats = {
        total: allTasks.length,
        completed: allTasks.filter(t => t.status === "Completed").length,
        inProgress: allTasks.filter(t => t.status === "In Progress").length,
        overdue: allTasks.filter(t => t.status === "Overdue").length,
        pending: allTasks.filter(t => t.status === "Pending" || t.status === "Not Started").length
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
                    <p className="text-gray-600 mt-1">Track and manage all team tasks</p>
                </div>
                <Link href="/tasks/create">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Task
                    </Button>
                </Link>
            </div>

            {/* Task Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                                <p className="text-2xl font-bold text-gray-900">{taskStats.total}</p>
                            </div>
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Completed</p>
                                <p className="text-2xl font-bold text-green-600">{taskStats.completed}</p>
                            </div>
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">In Progress</p>
                                <p className="text-2xl font-bold text-blue-600">{taskStats.inProgress}</p>
                            </div>
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Clock className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Pending</p>
                                <p className="text-2xl font-bold text-yellow-600">{taskStats.pending}</p>
                            </div>
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                <Clock className="w-5 h-5 text-yellow-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Overdue</p>
                                <p className="text-2xl font-bold text-red-600">{taskStats.overdue}</p>
                            </div>
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">Filters:</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-sm text-gray-600">Status:</label>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="All">All Status</option>
                                <option value="Not Started">Not Started</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Overdue">Overdue</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-sm text-gray-600">Priority:</label>
                            <select
                                value={filterPriority}
                                onChange={(e) => setFilterPriority(e.target.value)}
                                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="All">All Priority</option>
                                <option value="Critical">Critical</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Tasks Table */}
            <Card className="border border-gray-200 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                        All Tasks ({filteredTasks.length})
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-gray-50">
                                <TableRow>
                                    <TableHead className="font-semibold text-gray-700">Task</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Project</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Assignee</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Priority</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Status</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Due Date</TableHead>
                                    <TableHead className="font-semibold text-gray-700">Time Left</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredTasks.map((task) => (
                                    <TableRow key={task.id} className="hover:bg-gray-50">
                                        <TableCell>
                                            <div>
                                                <p className="font-medium text-gray-900">{task.title}</p>
                                                <p className="text-sm text-gray-500">{task.id}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-sm text-gray-700">{task.project}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Avatar className="w-8 h-8">
                                                    <AvatarImage src={task.avatar} alt={task.assignee} />
                                                    <AvatarFallback className="text-xs">
                                                        {task.assignee.split(' ').map(n => n[0]).join('')}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm text-gray-700">{task.assignee}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant="secondary"
                                                className={`font-medium ${getPriorityColor(task.priority)}`}
                                            >
                                                {task.priority}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                {getStatusIcon(task.status)}
                                                <Badge
                                                    variant="secondary"
                                                    className={`font-medium ${getStatusColor(task.status)}`}
                                                >
                                                    {task.status}
                                                </Badge>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-sm text-gray-700">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4 text-gray-500" />
                                                {new Date(task.dueDate).toLocaleDateString()}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className={`text-sm ${getDaysLeftColor(task.dueDate)}`}>
                                                {getDaysLeft(task.dueDate)}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TasksPage;
