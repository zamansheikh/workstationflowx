"use client";

import DashboardInfoCard from "@/components/DashboardInfoCard";
import React from "react";
import Link from "next/link";
import ProjectProgressChart from "../components/ProjectProgressChart";
import TopPerformers from "../components/TopPerformers";
import TeamList from "../components/TeamList";
import UrgentTasks from "../components/UrgentTasks";
import ProjectCard from "../components/ProjectCard";
import { FiPlus } from "react-icons/fi";

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
            {/* Dashboard Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardInfoCard title="Active Projects" value="8" subtext="2 completed this week" />
                <DashboardInfoCard title="Team Members" value="12" subtext="3 new members" />
                <DashboardInfoCard title="Tasks Completed" value="45" subtext="15% increase from last week" />
                <DashboardInfoCard title="Avg. Performance" value="78%" subtext="5% improvement" />
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Project Progress - 2/3 */}
                <div className="lg:col-span-2">
                    <ProjectProgressChart data={data} />
                </div>

                {/* Add Project Button */}
                <div className="flex flex-col">
                    <Link 
                        href="/projects/create" 
                        className="group bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-200 p-8 flex flex-col items-center justify-center text-center hover:bg-blue-50 min-h-[280px]"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                            <FiPlus className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                            Add New Project
                        </h3>
                        <p className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                            Create and manage new projects for your team
                        </p>
                    </Link>
                </div>

                {/* Top Performers */}
                <div>
                    <TopPerformers />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex gap-6">
                {/* Projects - 2/3 */}
                <div className="w-full lg:w-2/3">
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
