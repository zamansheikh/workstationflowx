"use client";

import React, { useState } from "react";
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    TrendingUp,
    TrendingDown,
    Target,
    DollarSign,
    Users,
    Calendar,
    BarChart3
} from "lucide-react";

const KPIPage = () => {
    const [selectedMonth, setSelectedMonth] = useState("January 2024");

    const kpiData = [
        {
            id: "TM001",
            name: "Rafiq Hossain",
            position: "Senior Frontend Developer",
            totalKPI: 4200,
            targetKPI: 5000,
            remainingKPI: 800,
            percentage: 84,
            trend: "up",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg",
            projects: ["E-commerce Platform", "Mobile App"]
        },
        {
            id: "TM002",
            name: "Nusrat Jahan",
            position: "UI/UX Designer",
            totalKPI: 3800,
            targetKPI: 4500,
            remainingKPI: 700,
            percentage: 84.4,
            trend: "up",
            avatar: "https://randomuser.me/api/portraits/women/21.jpg",
            projects: ["Mobile Banking App", "CRM Dashboard"]
        },
        {
            id: "TM003",
            name: "Tanvir Ahmed",
            position: "Backend Developer",
            totalKPI: 5200,
            targetKPI: 5500,
            remainingKPI: 300,
            percentage: 94.5,
            trend: "up",
            avatar: "https://randomuser.me/api/portraits/men/31.jpg",
            projects: ["CRM Dashboard", "Healthcare Portal"]
        },
        {
            id: "TM004",
            name: "Farzana Rahman",
            position: "Full Stack Developer",
            totalKPI: 4600,
            targetKPI: 5200,
            remainingKPI: 600,
            percentage: 88.5,
            trend: "up",
            avatar: "https://randomuser.me/api/portraits/women/41.jpg",
            projects: ["Learning Management System"]
        },
        {
            id: "TM005",
            name: "Sabbir Khan",
            position: "DevOps Engineer",
            totalKPI: 3200,
            targetKPI: 4000,
            remainingKPI: 800,
            percentage: 80,
            trend: "down",
            avatar: "https://randomuser.me/api/portraits/men/51.jpg",
            projects: ["Healthcare Portal", "Inventory Management"]
        },
        {
            id: "TM006",
            name: "Rashida Begum",
            position: "QA Engineer",
            totalKPI: 3600,
            targetKPI: 4200,
            remainingKPI: 600,
            percentage: 85.7,
            trend: "up",
            avatar: "https://randomuser.me/api/portraits/women/61.jpg",
            projects: ["All Projects - QA"]
        },
        {
            id: "TM007",
            name: "Mizanur Rahman",
            position: "Junior Developer",
            totalKPI: 2800,
            targetKPI: 3500,
            remainingKPI: 700,
            percentage: 80,
            trend: "up",
            avatar: "https://randomuser.me/api/portraits/men/71.jpg",
            projects: ["E-commerce Platform"]
        },
    ];

    const totalTeamKPI = kpiData.reduce((sum, member) => sum + member.totalKPI, 0);
    const totalTargetKPI = kpiData.reduce((sum, member) => sum + member.targetKPI, 0);
    const totalRemainingKPI = kpiData.reduce((sum, member) => sum + member.remainingKPI, 0);
    const teamPercentage = (totalTeamKPI / totalTargetKPI) * 100;

    const months = [
        "January 2024", "February 2024", "March 2024", "April 2024",
        "May 2024", "June 2024", "July 2024", "August 2024",
        "September 2024", "October 2024", "November 2024", "December 2024"
    ];

    const getPerformanceColor = (percentage) => {
        if (percentage >= 90) return "text-green-600";
        if (percentage >= 80) return "text-blue-600";
        if (percentage >= 70) return "text-yellow-600";
        return "text-red-600";
    };

    const getPerformanceBadge = (percentage) => {
        if (percentage >= 90) return "bg-green-100 text-green-800 hover:bg-green-200";
        if (percentage >= 80) return "bg-blue-100 text-blue-800 hover:bg-blue-200";
        if (percentage >= 70) return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
        return "bg-red-100 text-red-800 hover:bg-red-200";
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Team KPI Dashboard</h1>
                    <p className="text-gray-600 mt-1">Track monthly KPI performance for all team members</p>
                </div>
                <div className="flex items-center gap-4">
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        {months.map((month) => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Team KPI</p>
                                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalTeamKPI)}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Target KPI</p>
                                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalTargetKPI)}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <Target className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Remaining KPI</p>
                                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalRemainingKPI)}</p>
                            </div>
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-orange-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Team Performance</p>
                                <p className={`text-2xl font-bold ${getPerformanceColor(teamPercentage)}`}>
                                    {teamPercentage.toFixed(1)}%
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* KPI Table */}
            <Card className="border border-gray-200 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <span>
                            <Users className="w-5 h-5 text-blue-600 inline-block mr-2" />
                            Team Member KPI Details - {selectedMonth}
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-gray-50">
                                <TableRow>
                                    <TableHead className="font-semibold text-white">Team Member</TableHead>
                                    <TableHead className="font-semibold text-white">Position</TableHead>
                                    <TableHead className="font-semibold text-white">Total KPI</TableHead>
                                    <TableHead className="font-semibold text-white">Target KPI</TableHead>
                                    <TableHead className="font-semibold text-white">Remaining KPI</TableHead>
                                    <TableHead className="font-semibold text-white">Performance</TableHead>
                                    <TableHead className="font-semibold text-white">Trend</TableHead>
                                    <TableHead className="font-semibold text-white">Projects</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {kpiData.map((member) => (
                                    <TableRow key={member.id} className="hover:bg-gray-50">
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={member.avatar}
                                                    alt={member.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover ring-2 ring-gray-100"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-900">{member.name}</p>
                                                    <p className="text-sm text-gray-500">{member.id}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-sm text-gray-700">{member.position}</TableCell>
                                        <TableCell className="font-semibold text-green-600">
                                            {formatCurrency(member.totalKPI)}
                                        </TableCell>
                                        <TableCell className="font-semibold text-blue-600">
                                            {formatCurrency(member.targetKPI)}
                                        </TableCell>
                                        <TableCell className="font-semibold text-orange-600">
                                            {formatCurrency(member.remainingKPI)}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Badge
                                                    variant="secondary"
                                                    className={`font-medium ${getPerformanceBadge(member.percentage)}`}
                                                >
                                                    {member.percentage.toFixed(1)}%                                                </Badge>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center">
                                                {member.trend === "up" ? (
                                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                                ) : (
                                                    <TrendingDown className="w-4 h-4 text-red-500" />)}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-1">
                                                {member.projects.map((project, index) => (
                                                    <Badge key={index} variant="outline" className="text-xs">
                                                        {project}
                                                    </Badge>
                                                ))}
                                            </div>
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

export default KPIPage;
