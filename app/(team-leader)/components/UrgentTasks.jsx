"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle, Clock, CheckCircle2, Calendar } from "lucide-react";
import Link from "next/link";

const UrgentTasks = () => {
    const urgentTasks = [
        {
            id: 1,
            title: "Fix critical security vulnerability",
            project: "E-commerce Platform",
            assignee: "Rafiq Hossain",
            priority: "Critical",
            dueDate: "2024-01-18",
            status: "Overdue",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg",
            timeLeft: "-2 days"
        },
        {
            id: 2,
            title: "Complete payment gateway integration",
            project: "Mobile Banking App",
            assignee: "Nusrat Jahan",
            priority: "High",
            dueDate: "2024-01-20",
            status: "In Progress",
            avatar: "https://randomuser.me/api/portraits/women/21.jpg",
            timeLeft: "2 days"
        },
        {
            id: 3,
            title: "Deploy production hotfix",
            project: "CRM Dashboard",
            assignee: "Tanvir Ahmed",
            priority: "High",
            dueDate: "2024-01-19",
            status: "Pending",
            avatar: "https://randomuser.me/api/portraits/men/31.jpg",
            timeLeft: "1 day"
        },
        {
            id: 4,
            title: "Client presentation preparation",
            project: "Learning Management System",
            assignee: "Farzana Rahman",
            priority: "Medium",
            dueDate: "2024-01-21",
            status: "In Progress",
            avatar: "https://randomuser.me/api/portraits/women/41.jpg",
            timeLeft: "3 days"
        },
        {
            id: 5,
            title: "Database backup and optimization",
            project: "Healthcare Portal",
            assignee: "Sabbir Khan",
            priority: "High",
            dueDate: "2024-01-22",
            status: "Not Started",
            avatar: "https://randomuser.me/api/portraits/men/51.jpg",
            timeLeft: "4 days"
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

    const getTimeLeftColor = (timeLeft) => {
        if (timeLeft.includes("-")) return "text-red-600 font-semibold";
        const days = parseInt(timeLeft);
        if (days <= 1) return "text-orange-600 font-medium";
        if (days <= 3) return "text-yellow-600";
        return "text-gray-600";
    };

    return (
        <Card className="h-fit">
            <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        Urgent Tasks
                    </div>
                    <Link href="/tasks" className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-normal">
                        View All
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {urgentTasks.map((task) => (
                    <div key={task.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all duration-200 bg-white">
                        {/* Task Header */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">{task.title}</h4>
                                <p className="text-xs text-gray-600 mb-2">{task.project}</p>
                            </div>
                            <div className="flex items-center gap-1 ml-2">
                                {getStatusIcon(task.status)}
                                <Badge
                                    variant="secondary"
                                    className={`text-xs font-medium ${getPriorityColor(task.priority)}`}
                                >
                                    {task.priority}
                                </Badge>
                            </div>
                        </div>

                        {/* Assignee */}
                        <div className="flex items-center gap-2 mb-3">
                            <Avatar className="w-7 h-7 ring-2 ring-gray-100">
                                <AvatarImage src={task.avatar} alt={task.assignee} />
                                <AvatarFallback className="text-xs bg-blue-100 text-blue-700">
                                    {task.assignee.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-gray-700 font-medium">{task.assignee}</span>
                        </div>

                        {/* Status and Due Date */}
                        <div className="flex items-center justify-between">
                            <Badge
                                variant="secondary"
                                className={`text-xs ${getStatusColor(task.status)}`}
                            >
                                {task.status}
                            </Badge>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-gray-500" />
                                <span className={`text-xs ${getTimeLeftColor(task.timeLeft)}`}>
                                    {task.timeLeft.includes("-") ? task.timeLeft : `${task.timeLeft} left`}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add Task Button */}
                <Link href="/tasks/create" className="block">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 cursor-pointer group">
                        <div className="flex items-center justify-center gap-2 text-gray-600 group-hover:text-blue-600">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Add New Task</span>
                        </div>                    </div>
                </Link>
            </CardContent>
        </Card>
    );
};

export default UrgentTasks;
