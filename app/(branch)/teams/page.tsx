"use client";

import React from "react";
import TeamCard from "../components/TeamCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
    const teams = [
        {
            teamName: "deCoders Clan",
            teamId: "#12403",
            teamLeader: "Zaman Sheikh",
            runningProjects: 8,
            deliveredProjects: 200,
            workload: "30k"
        },
        {
            teamName: "Alpha Developers",
            teamId: "#12404",
            teamLeader: "Ahmed Hassan",
            runningProjects: 12,
            deliveredProjects: 150,
            workload: "45k"
        },
        {
            teamName: "Tech Innovators",
            teamId: "#12405",
            teamLeader: "Sara Khan",
            runningProjects: 6,
            deliveredProjects: 180,
            workload: "25k"
        },
        {
            teamName: "Code Masters",
            teamId: "#12406",
            teamLeader: "Ali Raza",
            runningProjects: 10,
            deliveredProjects: 220,
            workload: "40k"
        },
        {
            teamName: "Digital Creators",
            teamId: "#12407",
            teamLeader: "Fatima Ali",
            runningProjects: 7,
            deliveredProjects: 165,
            workload: "32k"
        },
        {
            teamName: "Solution Squad",
            teamId: "#12408",
            teamLeader: "Omar Sheikh",
            runningProjects: 9,
            deliveredProjects: 195,
            workload: "38k"
        }
    ];

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Teams Management</h1>
                    <p className="text-gray-600 mt-2">Manage and monitor your branch teams</p>
                </div>                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    variant="default"
                    size="default"
                    asChild
                >
                    <Link href="/create-team">
                        Create New Team
                    </Link>
                </Button>
            </div>

            {/* Teams Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team, index) => (
                    <TeamCard
                        key={index}
                        teamName={team.teamName}
                        teamId={team.teamId}
                        teamLeader={team.teamLeader}
                        runningProjects={team.runningProjects}
                        deliveredProjects={team.deliveredProjects}
                        workload={team.workload}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
