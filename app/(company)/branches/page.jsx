import React from "react";
import BranchCard from "../components/BranchCard";
import PaginationComponent from "@/components/PaginationComponent";

const BranchList = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-7">Branch List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {Array(8)
          .fill("c")
          .map((_, i) => (
            <BranchCard key={i} />
          ))}
      </div>

      {/* pagination */}
      <PaginationComponent />
    </div>
  );
};

export default BranchList;
