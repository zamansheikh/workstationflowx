"use client";

import DashboardInfoCard from "@/components/DashboardInfoCard";
import React from "react";
import Link from "next/link";
import DeliveryProgressChart from "../components/DeliveryProgressChart";
import Employee from "../components/Employee";
import TeamCard from "../components/TeamCard";

const data = [
    {
        name: "ALPHA",
        Target: 20000,
        Delivery: 5000,
    },
    {
        name: "DCODER",
        Target: 20000,
        Delivery: 5000,
    },
    {
        name: "SILENT",
        Target: 20000,
        Delivery: 5000,
    },
    {
        name: "SUA",
        Target: 20000,
        Delivery: 5000,
    },
    {
        name: "BBS",
        Target: 20000,
        Delivery: 5000,
    },
    {
        name: "SBS",
        Target: 20000,
        Delivery: 5000,
    },
];

const Page = () => {
    return (
        <div className="p-6 space-y-6">
            {/* info cards */}
            <div className="flex flex-col xl:flex-row gap-4">
                <DashboardInfoCard title="Total Teams" quantity={6} />
                <DashboardInfoCard title="Monthly Target" quantity="$120k" />
                <DashboardInfoCard title="Monthly Delivery" quantity="$30k" />
                <DashboardInfoCard title="Monthly Due" quantity="$90k" />
            </div>

            {/* delivery progress and employee section */}
            <div className="flex flex-col xl:flex-row gap-6">
                {/* delivery progress chart */}
                <div className="flex-1">
                    <DeliveryProgressChart data={data} title="Team Progress" />
                </div>

                {/* employees */}
                <div className="w-full xl:w-1/3">
                    <Employee />
                </div>
            </div>

            {/* teams lists */}
            <div>
                {/* team list header */}
                <div className="flex w-full justify-between items-center mb-6">
                    <h2 className="text-[32px] font-bold">Team List</h2>
                    <Link
                        href="#"
                        className="text-blue-500 hover:text-blue-500/80 underline text-lg font-medium"
                    >
                        See All
                    </Link>
                </div>                {/* teams */}
                <div className="flex flex-col xl:flex-row gap-5">
                    <TeamCard
                        teamName="Frontend Team"
                        teamId="#12401"
                        teamLeader="John Doe"
                        runningProjects={5}
                        deliveredProjects={150}
                        workload="25k"
                    />
                    <TeamCard
                        teamName="Backend Team"
                        teamId="#12402"
                        teamLeader="Jane Smith"
                        runningProjects={3}
                        deliveredProjects={120}
                        workload="20k"
                    />
                    <TeamCard
                        teamName="Mobile Team"
                        teamId="#12403"
                        teamLeader="Mike Johnson"
                        runningProjects={4}
                        deliveredProjects={100}
                        workload="18k"
                    />
                </div>
            </div>
        </div>
    );
};

export default Page;
