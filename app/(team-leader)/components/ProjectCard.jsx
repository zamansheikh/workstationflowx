"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, DollarSign, Users, Clock } from "lucide-react";

const ProjectCard = ({ project }) => {
    // Default project data if none provided
    const defaultProject = {
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
        description: "Building a comprehensive e-commerce platform with advanced features",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    };

    const projectData = project || defaultProject;

    const getStatusColor = (status) => {
        const colors = {
            "In Progress": "bg-blue-100 text-blue-800 hover:bg-blue-200",
            "Planning": "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
            "Completed": "bg-green-100 text-green-800 hover:bg-green-200",
            "On Hold": "bg-gray-100 text-gray-800 hover:bg-gray-200",
            "Delayed": "bg-red-100 text-red-800 hover:bg-red-200"
        };
        return colors[status] || "bg-gray-100 text-gray-800 hover:bg-gray-200";
    };

    const getPriorityColor = (priority) => {
        const colors = {
            "High": "bg-red-100 text-red-800 hover:bg-red-200",
            "Medium": "bg-orange-100 text-orange-800 hover:bg-orange-200",
            "Low": "bg-green-100 text-green-800 hover:bg-green-200"
        };
        return colors[priority] || "bg-gray-100 text-gray-800 hover:bg-gray-200";
    };

    const getProgressColor = (progress) => {
        if (progress >= 80) return "bg-green-500";
        if (progress >= 50) return "bg-blue-500";
        if (progress >= 25) return "bg-yellow-500";
        return "bg-red-500";
    };

    return (
        <Card className="mb-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
            <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{projectData.name}</h3>
                            <span className="text-sm text-gray-500 font-medium">#{projectData.id}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{projectData.client}</p>
                        <p className="text-sm text-gray-700 line-clamp-2">{projectData.description}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                        <Badge 
                            variant="secondary" 
                            className={`text-xs font-medium ${getStatusColor(projectData.status)}`}
                        >
                            {projectData.status}
                        </Badge>
                        <Badge 
                            variant="secondary" 
                            className={`text-xs font-medium ${getPriorityColor(projectData.priority)}`}
                        >
                            {projectData.priority}
                        </Badge>
                    </div>
                </div>

                {/* Team Lead */}
                <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-10 h-10 ring-2 ring-gray-100">
                        <AvatarImage src={projectData.avatar} alt={projectData.teamLead} />
                        <AvatarFallback className="bg-blue-100 text-blue-700 font-medium">
                            {projectData.teamLead.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium text-gray-900">{projectData.teamLead}</p>
                        <p className="text-xs text-gray-500">Team Lead</p>
                    </div>
                </div>

                {/* Project Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <div>
                            <p className="text-xs text-gray-500">Budget</p>
                            <p className="text-sm font-medium text-gray-900">{projectData.budget}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <div>
                            <p className="text-xs text-gray-500">Team Size</p>
                            <p className="text-sm font-medium text-gray-900">{projectData.teamSize} members</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <div>
                            <p className="text-xs text-gray-500">Start Date</p>
                            <p className="text-sm font-medium text-gray-900">{new Date(projectData.startDate).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <div>
                            <p className="text-xs text-gray-500">Due Date</p>
                            <p className="text-sm font-medium text-gray-900">{new Date(projectData.dueDate).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm font-semibold text-gray-900">{projectData.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className={`h-2.5 rounded-full transition-all duration-500 ${getProgressColor(projectData.progress)}`}
                            style={{ width: `${projectData.progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    >
                        View Details
                    </Button>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                    >
                        Edit Project
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
