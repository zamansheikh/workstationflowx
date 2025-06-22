import Link from "next/link";
import React from "react";
import Image from "next/image";

const Employee = () => {
  const employees = [
    {
      id: "#56F667F",
      owner: "Rafiq Hossain",
      position: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: "#89D234C",
      owner: "Nusrat Jahan",
      position: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      id: "#45A9B1E",
      owner: "Tanvir Ahmed",
      position: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
    },
  ];

  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-lg shadow-md h-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold">Employee</h1>
        <Link
          href="/employee"
          className="text-blue-500 hover:text-blue-500/80 underline text-lg font-medium"
        >
          See All
        </Link>
      </div>
      {employees.map((employee, index) => (
        <div key={index} className="p-4 mb-4 bg-[#E7ECEF] rounded-lg">
          <div className="flex items-center mb-3">
            <Image
              src={employee.image}
              alt={employee.owner}
              width={48}
              height={48}
              className="rounded-full mr-3"
            />
            <div>
              <h3 className="text-xl font-semibold">{employee.owner}</h3>
              <p className="text-sm text-gray-600">{employee.position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employee;
