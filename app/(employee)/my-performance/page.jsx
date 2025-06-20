"use client";

import React from "react";
import DashboardInfoCard from "@/components/DashboardInfoCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Award, Target, Clock, CheckCircle, AlertCircle, Calendar } from "lucide-react";

const MyPerformancePage = () => {
    const performanceMetrics = [
        { title: "Tasks Completed", value: "87", subtitle: "This month", trend: "+12%" },
        { title: "Avg Rating", value: "4.7", subtitle: "Out of 5.0", trend: "+0.3" },
        { title: "Projects Done", value: "5", subtitle: "This quarter", trend: "+2" },
        { title: "On-Time Delivery", value: "94%", subtitle: "Success rate", trend: "+5%" }
    ];

    const skillsProgress = [
        { skill: "React Development", progress: 85, level: "Expert" },
        { skill: "Project Management", progress: 70, level: "Advanced" },
        { skill: "Team Collaboration", progress: 90, level: "Expert" },
        { skill: "Problem Solving", progress: 78, level: "Advanced" },
        { skill: "Communication", progress: 82, level: "Expert" },
        { skill: "Testing & QA", progress: 65, level: "Intermediate" }
    ];

    const recentAchievements = [
        {
            id: 1,
            title: "Project Excellence Award",
            description: "Outstanding performance in E-commerce Platform project",
            date: "2024-01-15",
            type: "award",
            icon: Award
        },
        {
            id: 2,
            title: "100% On-Time Delivery",
            description: "Delivered all tasks on schedule for 3 consecutive months",
            date: "2024-01-10",
            type: "milestone",
            icon: Target
        },
        {
            id: 3,
            title: "Team Player Recognition",
            description: "Recognized for exceptional team collaboration",
            date: "2024-01-05",
            type: "recognition",
            icon: CheckCircle
        }
    ];

    const performanceTrends = [
        { month: "Oct", completed: 45, rating: 4.2 },
        { month: "Nov", completed: 52, rating: 4.4 },
        { month: "Dec", completed: 68, rating: 4.6 },
        { month: "Jan", completed: 87, rating: 4.7 }
    ];

    const upcomingDeadlines = [
        {
            id: 1,
            task: "Complete API Integration",
            project: "Mobile Banking App",
            deadline: "2024-01-20",
            priority: "High",
            status: "In Progress"
        },
        {
            id: 2,
            task: "Write Unit Tests",
            project: "E-commerce Platform",
            deadline: "2024-01-22",
            priority: "Medium",
            status: "Pending"
        },
        {
            id: 3,
            task: "Code Review",
            project: "CRM Dashboard",
            deadline: "2024-01-25",
            priority: "Low",
            status: "Pending"
        }
    ];

    const getSkillColor = (progress) => {
        if (progress >= 80) return "bg-green-500";
        if (progress >= 60) return "bg-blue-500";
        return "bg-orange-500";
    };

    const getPriorityColor = (priority) => {
        switch(priority) {
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
                    <h1 className="text-3xl font-bold text-gray-800">My Performance</h1>
                    <p className="text-gray-600">Track your progress and achievements</p>
                </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {performanceMetrics.map((metric, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                                    <p className="text-xs text-gray-500 mt-1">{metric.subtitle}</p>
                                </div>
                                <div className="flex items-center space-x-1">
                                    {metric.trend.startsWith('+') ? (
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <TrendingDown className="w-4 h-4 text-red-500" />
                                    )}
                                    <span className={`text-sm font-medium ${
                                        metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                        {metric.trend}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Skills Progress */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Target className="w-5 h-5" />
                            <span>Skills Assessment</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {skillsProgress.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                                    <div className="flex items-center space-x-2">
                                        <Badge variant="outline" className="text-xs">
                                            {skill.level}
                                        </Badge>
                                        <span className="text-sm text-gray-500">{skill.progress}%</span>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full transition-all duration-300 ${getSkillColor(skill.progress)}`}
                                        style={{ width: `${skill.progress}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Recent Achievements */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Award className="w-5 h-5" />
                            <span>Recent Achievements</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentAchievements.map((achievement) => {
                            const IconComponent = achievement.icon;
                            return (
                                <div key={achievement.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0">
                                        <IconComponent className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold text-gray-900">{achievement.title}</h4>
                                        <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <Calendar className="w-3 h-3 text-gray-400" />
                                            <span className="text-xs text-gray-500">{achievement.date}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </CardContent>
                </Card>
            </div>

            {/* Upcoming Deadlines */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" />
                        <span>Upcoming Deadlines</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {upcomingDeadlines.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900">{item.task}</h4>
                                            <p className="text-xs text-gray-600">{item.project}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Badge className={getPriorityColor(item.priority)}>
                                        {item.priority}
                                    </Badge>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-900">{item.deadline}</p>
                                        <p className="text-xs text-gray-500">{item.status}</p>
                                    </div>
                                    {item.priority === 'High' && (
                                        <AlertCircle className="w-4 h-4 text-red-500" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default MyPerformancePage;
