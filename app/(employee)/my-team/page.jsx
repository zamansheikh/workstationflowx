"use client";

import React from "react";
import DashboardInfoCard from "@/components/DashboardInfoCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MyTeamPage = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Team Leader",
            email: "sarah.johnson@company.com",
            phone: "+1 (555) 123-4567",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
            status: "online",
            skills: ["Project Management", "Leadership", "Strategy"],
            location: "New York, NY"
        },
        {
            id: 2,
            name: "Mike Chen",
            role: "Senior Developer",
            email: "mike.chen@company.com",
            phone: "+1 (555) 234-5678",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
            status: "online",
            skills: ["React", "Node.js", "AWS"],
            location: "San Francisco, CA"
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "UX Designer",
            email: "emily.davis@company.com",
            phone: "+1 (555) 345-6789",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
            status: "away",
            skills: ["Figma", "User Research", "Prototyping"],
            location: "Austin, TX"
        },
        {
            id: 4,
            name: "David Wilson",
            role: "QA Engineer",
            email: "david.wilson@company.com",
            phone: "+1 (555) 456-7890",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
            status: "offline",
            skills: ["Testing", "Automation", "Selenium"],
            location: "Chicago, IL"
        },
        {
            id: 5,
            name: "Lisa Anderson",
            role: "Backend Developer",
            email: "lisa.anderson@company.com",
            phone: "+1 (555) 567-8901",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
            status: "online",
            skills: ["Python", "Django", "PostgreSQL"],
            location: "Seattle, WA"
        }
    ];

    const teamStats = [
        { title: "Team Members", value: "5", subtitle: "Active members" },
        { title: "Active Projects", value: "3", subtitle: "Currently working" },
        { title: "Completed Tasks", value: "127", subtitle: "This month" },
        { title: "Team Rating", value: "4.8", subtitle: "Out of 5.0" }
    ];

    const getStatusColor = (status) => {
        switch(status) {
            case 'online': return 'bg-green-500';
            case 'away': return 'bg-yellow-500';
            case 'offline': return 'bg-gray-400';
            default: return 'bg-gray-400';
        }
    };

    const getStatusText = (status) => {
        switch(status) {
            case 'online': return 'Online';
            case 'away': return 'Away';
            case 'offline': return 'Offline';
            default: return 'Unknown';
        }
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">My Team</h1>
                    <p className="text-gray-600">Connect and collaborate with your team members</p>
                </div>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {teamStats.map((stat, index) => (
                    <DashboardInfoCard 
                        key={index}
                        title={stat.title} 
                        quantity={stat.value}
                        subtitle={stat.subtitle}
                    />
                ))}
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                    <Card key={member.id} className="hover:shadow-lg transition-shadow duration-200">
                        <CardHeader className="pb-4">
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage src={member.avatar} alt={member.name} />
                                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-white`}></div>
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-lg">{member.name}</CardTitle>
                                    <p className="text-sm text-gray-600">{member.role}</p>
                                    <Badge variant="outline" className="mt-1 text-xs">
                                        {getStatusText(member.status)}
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Contact Information */}
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Mail className="w-4 h-4" />
                                    <span className="truncate">{member.email}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Phone className="w-4 h-4" />
                                    <span>{member.phone}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <MapPin className="w-4 h-4" />
                                    <span>{member.location}</span>
                                </div>
                            </div>

                            {/* Skills */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">Skills</p>
                                <div className="flex flex-wrap gap-1">
                                    {member.skills.map((skill, index) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-2 pt-2">
                                <Button size="sm" className="flex-1">
                                    <MessageCircle className="w-4 h-4 mr-1" />
                                    Chat
                                </Button>
                                <Button size="sm" variant="outline" className="flex-1">
                                    <Mail className="w-4 h-4 mr-1" />
                                    Email
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MyTeamPage;
