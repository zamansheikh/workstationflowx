"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { cn } from "@/lib/utils";

const Page = () => {
    const projects = [{
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
    ];

    return (
        <div className="p-6 space-y-6">            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
                    <p className="text-gray-600 mt-1">Manage and track all your projects</p>
                </div>
                <Link
                    href="/create-project"
                    className={cn(
                        buttonVariants({ variant: "default", size: "default" }),
                        "bg-blue-600 hover:bg-blue-700 text-white"
                    )}
                >
                    Create New Project
                </Link>
            </div>{/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Page;
