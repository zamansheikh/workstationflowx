import DashboardInfoCard from "@/components/DashboardInfoCard";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import CompanyCard from "./components/CompanyCard";

const Page = () => {
  return (
    // <div className="flex flex-col justify-between h-[77.7vh] bg-red-400">
    <div className="flex flex-col justify-between gap-6 xl:gap-0 h-[77vh]">
      {/* info cards */}
      <div className="flex flex-col xl:flex-row gap-4 pt-8 md:mt-0">
        <DashboardInfoCard title="Total Company" quantity={120} />
        <DashboardInfoCard title="Active Company" quantity={120} />
        <DashboardInfoCard title="Total Revenue" quantity={120} />
      </div>

      {/* company lists */}
      <div className="">
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
        <div className="flex flex-col xl:flex-row gap-5 pb-4">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
