"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Page = () => {
    const assignedProjects = [
        {
            id: "PRJ-001",
            name: "E-commerce Platform",
            client: "Tech Solutions Inc.",
            teamLead: "Zaman Sheikh",
            myRole: "Frontend Developer",
            status: "In Progress",
            priority: "High",
            myProgress: 80,
            overallProgress: 75,
            assignedTasks: [
                { task: "Design product listing page", status: "Completed", progress: 100 },
                { task: "Implement shopping cart", status: "In Progress", progress: 60 },
                { task: "Create checkout flow", status: "Pending", progress: 0 }
            ],
            dueDate: "2024-02-15",
            myDeadline: "2024-02-10"
        },
        {
            id: "PRJ-002",
            name: "Mobile Banking App",
            client: "FinanceBank Ltd.",
            teamLead: "Abdullah Al Kafi",
            myRole: "UI/UX Designer",
            status: "Planning",
            priority: "Medium",
            myProgress: 30,
            overallProgress: 20,
            assignedTasks: [
                { task: "Create wireframes", status: "Completed", progress: 100 },
                { task: "Design user interface", status: "In Progress", progress: 40 },
                { task: "User testing", status: "Pending", progress: 0 }
            ],
            dueDate: "2024-03-30",
            myDeadline: "2024-03-15"
        },
        {
            id: "PRJ-004",
            name: "Learning Management System",
            client: "EduTech Academy",
            teamLead: "Sakib A Hasan",
            myRole: "Backend Developer",
            status: "In Progress",
            priority: "High",
            myProgress: 65,
            overallProgress: 60,
            assignedTasks: [
                { task: "Setup database schema", status: "Completed", progress: 100 },
                { task: "API development", status: "In Progress", progress: 70 },
                { task: "Testing and optimization", status: "Pending", progress: 0 }
            ],
            dueDate: "2024-04-20",
            myDeadline: "2024-04-10"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'In Progress': return 'bg-blue-100 text-blue-800';
            case 'Planning': return 'bg-yellow-100 text-yellow-800';
            case 'Pending': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High': return 'bg-red-100 text-red-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'Low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">My Assigned Projects</h1>
                    <p className="text-gray-600 mt-2">Track your progress on assigned projects</p>
                </div>
            </div>

            {/* Projects List */}
            <div className="space-y-6">
                {assignedProjects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                                    <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </Badge>
                                    <Badge className={`text-xs ${getPriorityColor(project.priority)}`}>
                                        {project.priority}
                                    </Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{project.client}</p>
                                <p className="text-sm text-blue-600 font-medium">My Role: {project.myRole}</p>
                            </div>
                        </div>

                        {/* Team Lead Info */}
                        <div className="flex items-center gap-3 mb-4">              <Avatar className="w-8 h-8">
                            <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" />
                            <AvatarFallback>{project.teamLead.charAt(0)}</AvatarFallback>
                        </Avatar>
                            <div>
                                <p className="text-sm font-medium">{project.teamLead}</p>
                                <p className="text-xs text-gray-500">Team Lead</p>
                            </div>
                        </div>

                        {/* Progress Bars */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-600">My Progress</span>
                                    <span className="font-medium text-blue-600">{project.myProgress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full transition-all"
                                        style={{ width: `${project.myProgress}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-600">Overall Progress</span>
                                    <span className="font-medium text-gray-600">{project.overallProgress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-gray-400 h-2 rounded-full transition-all"
                                        style={{ width: `${project.overallProgress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* Assigned Tasks */}
                        <div className="mb-4">
                            <h4 className="font-medium text-gray-800 mb-3">My Assigned Tasks</h4>
                            <div className="space-y-2">
                                {project.assignedTasks.map((task, taskIndex) => (
                                    <div key={taskIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">{task.task}</p>
                                            <div className="flex items-center gap-3 mt-1">
                                                <Badge className={`text-xs ${getStatusColor(task.status)}`}>
                                                    {task.status}
                                                </Badge>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                                        <div
                                                            className="bg-blue-600 h-1.5 rounded-full"
                                                            style={{ width: `${task.progress}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-xs text-gray-600">{task.progress}%</span>
                                                </div>
                                            </div>
                                        </div>
                                        {task.status !== 'Completed' && (
                                            <Button variant="outline" size="sm">
                                                Update
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                            <div>
                                <span className="text-gray-600">Project Due Date:</span>
                                <span className="ml-2 font-medium">{project.dueDate}</span>
                            </div>
                            <div>
                                <span className="text-gray-600">My Deadline:</span>
                                <span className="ml-2 font-medium text-red-600">{project.myDeadline}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                                View Details
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                Update Progress
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
