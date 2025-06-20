"use client";

import DashboardInfoCard from "@/components/DashboardInfoCard";
import React from "react";
import Link from "next/link";
import ProjectProgressChart from "../components/ProjectProgressChart";
import TopPerformers from "../components/TopPerformers";
import TeamList from "../components/TeamList";
import UrgentTasks from "../components/UrgentTasks";
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
            </div>            {/* Second Row Cards */}            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <DashboardInfoCard title="Total Project" quantity="30" />
                <DashboardInfoCard title="Member" quantity="1,200k" />
                <DashboardInfoCard title="Cancel" quantity="1" />
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
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Team List */}
                <TeamList />

                {/* Urgent Tasks */}
                <UrgentTasks />
            </div>
        </div>
    );
};

export default Page;
