"use client";

import DashboardInfoCard from "@/components/DashboardInfoCard";
import React from "react";
import Link from "next/link";
import MyProjectsChart from "../components/MyProjectsChart";
import MyTasks from "../components/MyTasks";
import TeamMembers from "../components/TeamMembers";

const data = [
    { name: "Project A", Completed: 85, Pending: 15 },
    { name: "Project B", Completed: 60, Pending: 40 },
    { name: "Project C", Completed: 90, Pending: 10 },
    { name: "Project D", Completed: 45, Pending: 55 },
];

const Page = () => {
    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">My Dashboard</h1>
                    <p className="text-gray-600">Welcome back! Here's your work overview</p>
                </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <DashboardInfoCard title="Assigned Projects" quantity="5" />
                <DashboardInfoCard title="Completed Tasks" quantity="23" />
                <DashboardInfoCard title="Pending Tasks" quantity="7" />
                <DashboardInfoCard title="This Month Hours" quantity="120h" />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Project Progress Chart */}
                <div className="lg:col-span-2">
                    <MyProjectsChart data={data} />
                </div>

                {/* Team Members */}
                <div>
                    <TeamMembers />
                </div>
            </div>

            {/* My Tasks */}
            <div>
                <MyTasks />
            </div>
        </div>
    );
};

export default Page;
