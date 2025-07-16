"use client";

import DashboardInfoCard from "@/components/DashboardInfoCard";
import React from "react";
import BranchCard from "../components/BranchCard";
import Link from "next/link";
import DeliveryProgressChart from "../components/DeliveryProgressChart";
import Employee from "../components/Employee";
import AuthGuard from "@/components/AuthGuard";
const data = [
  {
    name: "JVAI",
    Target: 100000,
    Delivery: 85000,
  },
  {
    name: "STA",
    Target: 150000,
    Delivery: 120000,
  },
  {
    name: "SMT",
    Target: 90000,
    Delivery: 95000,
  },
  {
    name: "SUA",
    Target: 150000,
    Delivery: 70000,
  },
  {
    name: "BBS",
    Target: 100000,
    Delivery: 110000,
  },
  {
    name: "BVS",
    Target: 80000,
    Delivery: 60000,
  },
  {
    name: "BSD",
    Target: 130000,
    Delivery: 130000,
  },
  {
    name: "SBS",
    Target: 100000,
    Delivery: 80000,
  },
];

const CompanyHome = () => {
  return (
    <AuthGuard requiredRole="companyOwner">
      <div>
      <div className="flex flex-col xl:flex-row gap-4">
        <DashboardInfoCard title="Total Branch" quantity={120} />
        <DashboardInfoCard title="Monthly Target" quantity={`$${120}`} />
        <DashboardInfoCard title="Monthly Delivery" quantity={`$${120}`} />
        <DashboardInfoCard title="Monthly Due" quantity={`$${120}`} />
      </div>

      <div className="my-5 grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <DeliveryProgressChart
            title="Zone Delivery Overview"
            data={data}
            targetKey="Target"
            deliveryKey="Delivery"
          />
        </div>
        <div className="col-span-1">
          <Employee />
        </div>
      </div>

      {/* Branch lists */}
      <div className="">
        <div className="flex w-full justify-between items-center mb-4">
          <h2 className="text-[32px] font-bold">Branch list</h2>
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-500/80 underline text-lg font-medium"
          >
            See All
          </Link>
        </div>
        <div className="flex flex-col xl:flex-row gap-5 pb-4">
          <BranchCard />
          <BranchCard />
          <BranchCard />
          <BranchCard />
        </div>
      </div>
    </div>
    </AuthGuard>
  );
};

export default CompanyHome;
