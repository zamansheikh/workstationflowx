"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Calendar,
    DollarSign,
    Users,
    FileText,
    AlertCircle,
    CheckCircle2,
    Plus,
    X,
    Upload
} from "lucide-react";
import Link from "next/link";

const CreateProjectPage = () => {
    const [formData, setFormData] = useState({
        projectName: "",
        clientName: "",
        description: "",
        budget: "",
        startDate: "",
        dueDate: "",
        priority: "Medium",
        status: "Planning",
        teamMembers: [],
        tags: [],
        requirements: ""
    });

    const [newTag, setNewTag] = useState("");
    const [selectedMembers, setSelectedMembers] = useState([]);

    // Available team members
    const availableMembers = [
        {
            id: "TM001",
            name: "Rafiq Hossain",
            position: "Senior Frontend Developer",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg",
            skills: ["React", "JavaScript", "CSS"]
        },
        {
            id: "TM002",
            name: "Nusrat Jahan",
            position: "UI/UX Designer",
            avatar: "https://randomuser.me/api/portraits/women/21.jpg",
            skills: ["Figma", "Adobe XD", "UI Design"]
        },
        {
            id: "TM003",
            name: "Tanvir Ahmed",
            position: "Backend Developer",
            avatar: "https://randomuser.me/api/portraits/men/31.jpg",
            skills: ["Node.js", "Python", "Database"]
        },
        {
            id: "TM004",
            name: "Farzana Rahman",
            position: "Full Stack Developer",
            avatar: "https://randomuser.me/api/portraits/women/41.jpg",
            skills: ["React", "Node.js", "MongoDB"]
        },
        {
            id: "TM005",
            name: "Sabbir Khan",
            position: "DevOps Engineer",
            avatar: "https://randomuser.me/api/portraits/men/51.jpg",
            skills: ["AWS", "Docker", "CI/CD"]
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const addTag = () => {
        if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, newTag.trim()]
            }));
            setNewTag("");
        }
    };

    const removeTag = (tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const toggleMember = (member) => {
        setSelectedMembers(prev => {
            const isSelected = prev.some(m => m.id === member.id);
            if (isSelected) {
                return prev.filter(m => m.id !== member.id);
            } else {
                return [...prev, member];
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Project Data:", {
            ...formData,
            teamMembers: selectedMembers
        });
        alert("Project created successfully!");
    };

    const priorityColors = {
        "Low": "bg-green-100 text-green-800 hover:bg-green-200",
        "Medium": "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        "High": "bg-orange-100 text-orange-800 hover:bg-orange-200",
        "Critical": "bg-red-100 text-red-800 hover:bg-red-200"
    };

    const statusColors = {
        "Planning": "bg-blue-100 text-blue-800 hover:bg-blue-200",
        "In Progress": "bg-purple-100 text-purple-800 hover:bg-purple-200",
        "On Hold": "bg-gray-100 text-gray-800 hover:bg-gray-200",
        "Completed": "bg-green-100 text-green-800 hover:bg-green-200"
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Create New Project</h1>
                    <p className="text-gray-600 mt-1">Set up a new project for your team</p>
                </div>
                <Link href="/projects">
                    <Button variant="outline">
                        Back to Projects
                    </Button>
                </Link>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Form - 2/3 */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Project Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-600" />
                                Project Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="projectName">Project Name *</Label>
                                    <Input
                                        id="projectName"
                                        name="projectName"
                                        value={formData.projectName}
                                        onChange={handleInputChange}
                                        placeholder="Enter project name"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="clientName">Client Name *</Label>
                                    <Input
                                        id="clientName"
                                        name="clientName"
                                        value={formData.clientName}
                                        onChange={handleInputChange}
                                        placeholder="Enter client name"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="description">Project Description</Label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Describe the project goals and objectives"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                    rows={4}
                                />
                            </div>

                            <div>
                                <Label htmlFor="requirements">Technical Requirements</Label>
                                <textarea
                                    id="requirements"
                                    name="requirements"
                                    value={formData.requirements}
                                    onChange={handleInputChange}
                                    placeholder="List technical requirements and specifications"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                    rows={3}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Project Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-green-600" />
                                Project Settings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="budget">Budget</Label>
                                    <Input
                                        id="budget"
                                        name="budget"
                                        type="number"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        placeholder="Enter project budget"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="priority">Priority Level</Label>
                                    <select
                                        id="priority"
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="startDate">Start Date</Label>
                                    <Input
                                        id="startDate"
                                        name="startDate"
                                        type="date"
                                        value={formData.startDate}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="dueDate">Due Date</Label>
                                    <Input
                                        id="dueDate"
                                        name="dueDate"
                                        type="date"
                                        value={formData.dueDate}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="status">Initial Status</Label>
                                <select
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="Planning">Planning</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="On Hold">On Hold</option>
                                </select>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Project Tags */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Tags</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-2">
                                <Input
                                    value={newTag}
                                    onChange={(e) => setNewTag(e.target.value)}
                                    placeholder="Add project tag"
                                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                                />
                                <Button type="button" onClick={addTag} variant="outline">
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                                        {tag}
                                        <X
                                            className="w-3 h-3 cursor-pointer hover:text-red-600"
                                            onClick={() => removeTag(tag)}
                                        />
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar - 1/3 */}
                <div className="space-y-6">
                    {/* Team Assignment */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-purple-600" />
                                Assign Team Members
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                {availableMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${selectedMembers.some(m => m.id === member.id)
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                            }`}
                                        onClick={() => toggleMember(member)}
                                    >
                                        <Avatar className="w-10 h-10">
                                            <AvatarImage src={member.avatar} alt={member.name} />
                                            <AvatarFallback>
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-sm text-gray-900">{member.name}</p>
                                            <p className="text-xs text-gray-500">{member.position}</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {member.skills.slice(0, 2).map((skill, index) => (
                                                    <Badge key={index} variant="outline" className="text-xs">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        {selectedMembers.some(m => m.id === member.id) && (
                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Project Summary */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Priority:</span>
                                <Badge className={priorityColors[formData.priority]}>
                                    {formData.priority}
                                </Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Status:</span>
                                <Badge className={statusColors[formData.status]}>
                                    {formData.status}
                                </Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Team Size:</span>
                                <span className="text-sm font-medium">{selectedMembers.length} members</span>
                            </div>
                            {formData.budget && (
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Budget:</span>
                                    <span className="text-sm font-medium">${formData.budget}</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                            Create Project
                        </Button>
                        <Button type="button" variant="outline" className="w-full">
                            Save as Draft
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateProjectPage;
