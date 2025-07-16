"use client";

import DashboardInfoCard from "@/components/DashboardInfoCard";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import CompanyCard from "./components/CompanyCard";
import SystemAnalyticsChart from "./components/SystemAnalyticsChart";
import RecentActivities from "./components/RecentActivities";
import AuthGuard from "@/components/AuthGuard";

const Page = () => {
  return (
    <AuthGuard requiredRole="admin">
      <div className="p-6 space-y-6">
        {/* info cards */}
        <div className="flex flex-col xl:flex-row gap-4">
          <DashboardInfoCard title="Total Company" quantity={120} />
          <DashboardInfoCard title="Active Company" quantity={120} />
          <DashboardInfoCard title="Total Revenue" quantity={120} />
        </div>

        {/* system analytics and recent activities */}
        <div className="flex flex-col xl:flex-row gap-6">
        {/* system analytics chart */}
        <div className="flex-1">
          <SystemAnalyticsChart />
        </div>

        {/* recent activities */}
        <div className="w-full xl:w-1/3">
          <RecentActivities />
        </div>
      </div>

      {/* company lists */}
      <div>
        {/* company list header */}
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-[32px] font-bold">Company list</h2>
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-500/80 underline text-lg font-medium"
          >
            See All
          </Link>
        </div>

        {/* companies */}
        <div className="flex flex-col xl:flex-row gap-5">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>
    </div>
    </AuthGuard>
  );
};

export default Page;
