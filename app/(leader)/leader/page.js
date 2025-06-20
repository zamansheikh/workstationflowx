import DashboardInfoCard from "@/components/DashboardInfoCard";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectProgressChart from "./components/ProjectProgressChart";

const Page = () => {
  return (
    <div className="">
      {/* info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pt-8 md:mt-0">
        <DashboardInfoCard title="Workload" quantity={50000} />
        <DashboardInfoCard title="Target" quantity={1200} />
        <DashboardInfoCard title="Delivery" quantity={1000} />
        <DashboardInfoCard title="Due" quantity={120} />
        <DashboardInfoCard title="Total Project" quantity={30} />
        <DashboardInfoCard title="Members" quantity={1200000} />
        <DashboardInfoCard title="Cancel" quantity={1} />
        <Card className="w-full">
          <CardContent className="flex flex-col justify-between h-full gap-4">
            <Button className="w-full h-[56px]">Add Project</Button>
            <Button className="w-full h-[56px] text-primary" variant="outline">
              Add New Member
            </Button>
          </CardContent>
        </Card>
      </div>
      <ProjectProgressChart />

      {/* company lists */}
      <div className="">
        {/* company list header */}
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-[32px] font-bold">Team list</h2>
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-500/80 underline text-lg font-medium"
          >
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
