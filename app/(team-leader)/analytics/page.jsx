"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    Area,
    AreaChart
} from "recharts";
import {
    TrendingUp,
    TrendingDown,
    Users,
    Target,
    Activity,
    Calendar,
    BarChart3,
    PieChart as PieChartIcon,
    LineChart as LineChartIcon
} from "lucide-react";

const AnalyticsPage = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("Last 6 Months");

    // Monthly Performance Data
    const monthlyPerformance = [
        { month: "Jul", projects: 8, completed: 6, kpi: 32000, performance: 85 },
        { month: "Aug", projects: 10, completed: 8, kpi: 38000, performance: 88 },
        { month: "Sep", projects: 12, completed: 9, kpi: 42000, performance: 82 },
        { month: "Oct", projects: 15, completed: 12, kpi: 48000, performance: 90 },
        { month: "Nov", projects: 14, completed: 11, kpi: 45000, performance: 87 },
        { month: "Dec", projects: 16, completed: 14, kpi: 52000, performance: 92 }
    ];

    // Team Performance Distribution
    const teamPerformanceData = [
        { name: "Excellent (90%+)", value: 3, color: "#10B981" },
        { name: "Good (80-89%)", value: 3, color: "#3B82F6" },
        { name: "Average (70-79%)", value: 1, color: "#F59E0B" },
        { name: "Below Average (<70%)", value: 0, color: "#EF4444" }
    ];

    // Project Status Data
    const projectStatusData = [
        { status: "Completed", count: 14, percentage: 58.3 },
        { status: "In Progress", count: 6, percentage: 25.0 },
        { status: "Planning", count: 3, percentage: 12.5 },
        { status: "On Hold", count: 1, percentage: 4.2 }
    ];

    // KPI Trend Data
    const kpiTrendData = [
        { month: "Jul", target: 35000, achieved: 32000 },
        { month: "Aug", target: 36000, achieved: 38000 },
        { month: "Sep", target: 40000, achieved: 42000 },
        { month: "Oct", target: 45000, achieved: 48000 },
        { month: "Nov", target: 44000, achieved: 45000 },
        { month: "Dec", target: 50000, achieved: 52000 }
    ];

    const periods = ["Last 3 Months", "Last 6 Months", "Last 12 Months", "This Year"];

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
                    <h1 className="text-2xl font-bold text-gray-900">Team Analytics</h1>
                    <p className="text-gray-600 mt-1">Comprehensive analytics and insights for your team performance</p>
                </div>
                <div className="flex items-center gap-4">
                    <select
                        value={selectedPeriod}
                        onChange={(e) => setSelectedPeriod(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        {periods.map((period) => (
                            <option key={period} value={period}>{period}</option>
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
                                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                                <p className="text-2xl font-bold text-gray-900">24</p>
                                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                                    <TrendingUp className="w-3 h-3" />
                                    +20% from last period
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                                <p className="text-2xl font-bold text-gray-900">87.5%</p>
                                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                                    <TrendingUp className="w-3 h-3" />
                                    +5.2% improvement
                                </p>
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
                                <p className="text-sm font-medium text-gray-600">Team Performance</p>
                                <p className="text-2xl font-bold text-gray-900">88.9%</p>
                                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                                    <TrendingUp className="w-3 h-3" />
                                    +3.1% increase
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <Activity className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Avg KPI Achievement</p>
                                <p className="text-2xl font-bold text-gray-900">92.3%</p>
                                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                                    <TrendingUp className="w-3 h-3" />
                                    Above target
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-orange-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Monthly Performance Chart */}
                <Card className="border border-gray-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-blue-600" />
                            Monthly Performance Overview
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={monthlyPerformance}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="projects" fill="#3B82F6" name="Total Projects" />
                                    <Bar dataKey="completed" fill="#10B981" name="Completed Projects" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Team Performance Distribution */}
                <Card className="border border-gray-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <PieChartIcon className="w-5 h-5 text-green-600" />
                            Team Performance Distribution
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={teamPerformanceData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {teamPerformanceData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* KPI Trend Analysis */}
                <Card className="border border-gray-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <LineChartIcon className="w-5 h-5 text-purple-600" />
                            KPI Achievement Trend
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={kpiTrendData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip formatter={(value) => formatCurrency(value)} />
                                    <Line
                                        type="monotone"
                                        dataKey="target"
                                        stroke="#F59E0B"
                                        strokeWidth={2}
                                        name="Target KPI"
                                        strokeDasharray="5 5"
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="achieved"
                                        stroke="#10B981"
                                        strokeWidth={2}
                                        name="Achieved KPI"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Project Status Overview */}
                <Card className="border border-gray-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-orange-600" />
                            Project Status Overview
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {projectStatusData.map((item, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${item.status === 'Completed' ? 'bg-green-500' :
                                                item.status === 'In Progress' ? 'bg-blue-500' :
                                                    item.status === 'Planning' ? 'bg-yellow-500' : 'bg-gray-500'
                                            }`}></div>
                                        <span className="text-sm font-medium text-gray-700">{item.status}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">{item.count} projects</span>
                                        <Badge variant="secondary" className="text-xs">
                                            {item.percentage}%
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AnalyticsPage;
