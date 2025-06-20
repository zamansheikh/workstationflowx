"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Page = () => {
    const projects = [
        {
            id: "PRJ-001",
            name: "E-commerce Platform",
            client: "Tech Solutions Inc.",
            teamLead: "Zaman Sheikh",
            status: "In Progress",
            priority: "High",
            progress: 75,
            startDate: "2024-01-01",
            dueDate: "2024-02-15",
            budget: "$25,000",
            teamSize: 5,
            description: "Building a comprehensive e-commerce platform with advanced features"
        },
        {
            id: "PRJ-002",
            name: "Mobile Banking App",
            client: "FinanceBank Ltd.",
            teamLead: "Abdullah Al Kafi",
            status: "Planning",
            priority: "Medium",
            progress: 20,
            startDate: "2024-01-15",
            dueDate: "2024-03-30",
            budget: "$40,000",
            teamSize: 7,
            description: "Secure mobile banking application with biometric authentication"
        },
        {
            id: "PRJ-003",
            name: "CRM Dashboard",
            client: "BusinessCorp",
            teamLead: "Picklu Nath",
            status: "Completed",
            priority: "Low",
            progress: 100,
            startDate: "2023-11-01",
            dueDate: "2023-12-30",
            budget: "$15,000",
            teamSize: 3,
            description: "Custom CRM dashboard for sales team management"
        },
        {
            id: "PRJ-004",
            name: "Learning Management System",
            client: "EduTech Academy",
            teamLead: "Sakib A Hasan",
            status: "In Progress",
            priority: "High",
            progress: 60,
            startDate: "2024-01-10",
            dueDate: "2024-04-20",
            budget: "$35,000",
            teamSize: 6,
            description: "Comprehensive LMS with video streaming and assessment tools"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'In Progress': return 'bg-blue-100 text-blue-800';
            case 'Planning': return 'bg-yellow-100 text-yellow-800';
            case 'On Hold': return 'bg-gray-100 text-gray-800';
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
                    <h1 className="text-3xl font-bold text-gray-800">Projects Management</h1>
                    <p className="text-gray-600 mt-2">Manage and track all your team projects</p>
                </div>
                <Link href="/create-project">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Create New Project
                    </Button>
                </Link>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{project.client}</p>
                                <p className="text-sm text-gray-500">{project.description}</p>
                            </div>
                            <div className="flex flex-col gap-2 ml-4">
                                <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </Badge>
                                <Badge className={`text-xs ${getPriorityColor(project.priority)}`}>
                                    {project.priority}
                                </Badge>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-3">
                                <Avatar className="w-8 h-8">
                                    <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" />
                                    <AvatarFallback>{project.teamLead.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium">{project.teamLead}</p>
                                    <p className="text-xs text-gray-500">Team Lead</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-600">Budget:</span>
                                    <span className="ml-2 font-medium">{project.budget}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Team Size:</span>
                                    <span className="ml-2 font-medium">{project.teamSize} members</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Start Date:</span>
                                    <span className="ml-2 font-medium">{project.startDate}</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Due Date:</span>
                                    <span className="ml-2 font-medium">{project.dueDate}</span>
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600">Progress</span>
                                <span className="font-medium">{project.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full transition-all"
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                                View Details
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                                Edit Project
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
