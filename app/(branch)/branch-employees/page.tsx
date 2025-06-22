"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function BranchEmployeeList() {
    const employeeData = [
        {
            id: "#56F667F",
            owner: "Rafiq Hossain",
            email: "rafiq.hossain@example.com",
            phone: "+880 17 1234 5678",
            position: "Frontend Developer",
            team: "Alpha Team",
            joiningDate: "2024-03-15",
            status: "active",
            image: "https://randomuser.me/api/portraits/men/11.jpg",
        },
        {
            id: "#89D234C",
            owner: "Nusrat Jahan",
            email: "nusrat.jahan@example.com",
            phone: "+880 16 8765 4321",
            position: "UI/UX Designer",
            team: "Design Team",
            joiningDate: "2024-02-10",
            status: "active",
            image: "https://randomuser.me/api/portraits/women/21.jpg",
        },
        {
            id: "#45A9B1E",
            owner: "Tanvir Ahmed",
            email: "tanvir.ahmed@example.com",
            phone: "+880 19 3344 5566",
            position: "Backend Developer",
            team: "Development Team",
            joiningDate: "2024-01-25",
            status: "active",
            image: "https://randomuser.me/api/portraits/men/31.jpg",
        },
        {
            id: "#72K4D9Z",
            owner: "Farzana Rahman",
            email: "farzana.rahman@example.com",
            phone: "+880 18 1122 3344",
            position: "Full Stack Developer",
            team: "Alpha Team",
            joiningDate: "2024-05-01",
            status: "active",
            image: "https://randomuser.me/api/portraits/women/41.jpg",
        },
        {
            id: "#39L8V2Q",
            owner: "Mehedi Hasan",
            email: "mehedi.hasan@example.com",
            phone: "+880 15 9988 7766",
            position: "DevOps Engineer",
            team: "Infrastructure Team",
            joiningDate: "2024-04-18",
            status: "on-leave",
            image: "https://randomuser.me/api/portraits/men/51.jpg",
        },
        {
            id: "#91X7C5T",
            owner: "Afsana Mimi",
            email: "afsana.mimi@example.com",
            phone: "+880 14 5566 7788",
            position: "QA Engineer",
            team: "Quality Team",
            joiningDate: "2024-06-01",
            status: "active",
            image: "https://randomuser.me/api/portraits/women/61.jpg",
        },
        {
            id: "#22M5J3B",
            owner: "Shahriar Kabir",
            email: "shahriar.kabir@example.com",
            phone: "+880 13 4455 6677",
            position: "Frontend Developer",
            team: "Development Team",
            joiningDate: "2024-03-29",
            status: "active",
            image: "https://randomuser.me/api/portraits/men/71.jpg",
        },
        {
            id: "#88P9K2W",
            owner: "Sadia Akter",
            email: "sadia.akter@example.com",
            phone: "+880 12 3456 7890",
            position: "Product Manager",
            team: "Product Team",
            joiningDate: "2024-02-28",
            status: "active",
            image: "https://randomuser.me/api/portraits/women/81.jpg",
        },
    ];

    const getStatusBadge = (status) => {
        const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
        switch (status) {
            case "active":
                return `${baseClasses} bg-green-100 text-green-800`;
            case "on-leave":
                return `${baseClasses} bg-yellow-100 text-yellow-800`;
            case "inactive":
                return `${baseClasses} bg-red-100 text-red-800`;
            default:
                return `${baseClasses} bg-gray-100 text-gray-800`;
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-7">
                <div>
                    <h1 className="text-3xl font-semibold">Branch Employee List</h1>
                    <p className="text-gray-600 mt-2">
                        Manage employees within this branch
                    </p>
                </div>
                <div className="text-sm text-gray-500">
                    Total Employees: {employeeData.length}
                </div>
            </div>

            <div className="rounded-md border overflow-hidden bg-white shadow">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-[#0e3c61] text-white">
                            <TableRow>
                                <TableHead className="text-white font-medium pl-8">
                                    Employee
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Email
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Phone
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Position
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Team
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Joining Date
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Status
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {employeeData.map((employee) => (
                                <TableRow key={employee.id} className="hover:bg-gray-50">
                                    <TableCell className="font-medium pl-8 flex items-center gap-2">
                                        <Image
                                            src={employee.image}
                                            alt={employee.owner}
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold">
                                                {employee.owner}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {employee.id}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{employee.email}</TableCell>
                                    <TableCell>{employee.phone}</TableCell>
                                    <TableCell>{employee.position}</TableCell>
                                    <TableCell>
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                            {employee.team}
                                        </span>
                                    </TableCell>
                                    <TableCell>{employee.joiningDate}</TableCell>
                                    <TableCell>
                                        <span className={getStatusBadge(employee.status)}>
                                            {employee.status.replace("-", " ")}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
