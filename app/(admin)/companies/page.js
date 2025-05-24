import PaginationComponent from "@/components/PaginationComponent";
import CompanyCard from "../admin/components/CompanyCard";

const Page = () => {
  return (
    <div>
      {/* page title */}
      <h2 className="text-[32px] font-bold mb-8">Company list</h2>

      {/* company lists */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {Array(8)
          .fill("c")
          .map((_, i) => (
            <CompanyCard key={i} />
          ))}
      </div>

      {/* pagination */}
      <PaginationComponent />
    </div>
  );
};

export default Page;
