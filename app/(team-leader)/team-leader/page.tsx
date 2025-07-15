"use client";

import DashboardInfoCard from "@/components/DashboardInfoCard";
import React from "react";
import Link from "next/link";
import ProjectProgressChart from "../components/ProjectProgressChart";
import TopPerformers from "../components/TopPerformers";
import TeamList from "../components/TeamList";
import UrgentTasks from "../components/UrgentTasks";
import { FiPlus } from "react-icons/fi";
import ProjectCard from "../components/ProjectCard";

const data = [
    { name: "aug_go", Target: 100, Delivery: 55 },
    { name: "frank", Target: 100, Delivery: 65 },
    { name: "flash", Target: 100, Delivery: 25 },
    { name: "mehedi", Target: 100, Delivery: 60 },
    { name: "awekis", Target: 100, Delivery: 65 },
    { name: "nahum", Target: 100, Delivery: 10 },
    { name: "SBS", Target: 100, Delivery: 20 },
];

const Page = () => {
    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Team Leader Dashboard</h1>
                    <p className="text-gray-600">Welcome back, Zaman</p>
                </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <DashboardInfoCard title="Workload" quantity="$50,000" />
                <DashboardInfoCard title="Target" quantity="$1,200" />
                <DashboardInfoCard title="Delivery" quantity="$1,000" />
                <DashboardInfoCard title="Due" quantity="$120" />
            </div>
            {/* Second Row Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <DashboardInfoCard title="Total Project" quantity="30" />
                <DashboardInfoCard title="Member" quantity="1,200k" />
                <DashboardInfoCard title="Active Jobs" quantity="3" />
                <DashboardInfoCard title="Job Applications" quantity="46" />
                <Link href="/create-project">
                    <div className="w-full bg-white border-2 border-dashed border-blue-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 rounded-lg cursor-pointer group h-full">
                        <div className="p-6">
                            <div className="text-2xl font-semibold text-center mb-6 text-gray-700 group-hover:text-blue-700 transition-colors">
                                Add Project
                            </div>
                        </div>
                        <div className="px-6 pb-6">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-blue-600 group-hover:bg-blue-700 rounded-full flex items-center justify-center mb-2 transition-colors">
                                    <FiPlus className="w-8 h-8 text-white" />
                                </div>
                                <span className="text-sm text-gray-500">Create new project</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Project Progress Chart */}
                <div className="lg:col-span-2">
                    <ProjectProgressChart data={data} />
                </div>

                {/* Top Performers */}
                <div>
                    <TopPerformers />
                </div>
            </div>            {/* Bottom Section */}
            <div className="flex gap-6">
                {/* Projects - 2/3 */}
                <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Row 1 - Project 1 and 2 */}
                        <ProjectCard project={{
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
                        }} />
                        <ProjectCard project={{
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
                            description: "Secure mobile banking application with biometric authentication",
                            avatar: "https://randomuser.me/api/portraits/men/2.jpg"
                        }} />

                        {/* Row 2 - Project 3 and 4 */}
                        <ProjectCard project={{
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
                            description: "Customer relationship management dashboard with analytics",
                            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
                        }} />
                        <ProjectCard project={{
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
                            description: "Comprehensive LMS with video streaming and assessment tools",
                            avatar: "https://randomuser.me/api/portraits/men/4.jpg"
                        }} />
                    </div>
                </div>

                {/* Urgent Tasks - 1/3 */}
                <div className="w-full lg:w-1/3">
                    <UrgentTasks />
                </div>
            </div>
        </div>
    );
};

export default Page;
