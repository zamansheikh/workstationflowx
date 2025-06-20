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
        <div className="flex flex-col justify-between gap-6 xl:gap-0 h-[77vh]">
            {/* info cards */}
            <div className="flex flex-col xl:flex-row gap-4 pt-8 md:mt-0">
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
            <div className="">
                {/* team list header */}
                <div className="flex w-full justify-between items-center mb-6">
                    <h2 className="text-[32px] font-bold">Team List</h2>
                    <Link
                        href="#"
                        className="text-blue-500 hover:text-blue-500/80 underline text-lg font-medium"
                    >
                        See All
                    </Link>
                </div>

                {/* teams */}
                <div className="flex flex-col xl:flex-row gap-5 pb-4">
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
            </div>
        </div>
    );
};

export default Page;
