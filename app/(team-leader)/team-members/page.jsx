"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function TeamMembersList() {
    const teamMembersData = [
        {
            id: "#TM001",
            name: "Rafiq Hossain",
            email: "rafiq.hossain@company.com",
            phone: "+880 17 1234 5678",
            position: "Senior Frontend Developer",
            joiningDate: "2023-03-15",
            status: "active",
            performance: "excellent",
            image: "https://randomuser.me/api/portraits/men/11.jpg",
            currentProject: "E-commerce Platform"
        },
        {
            id: "#TM002",
            name: "Nusrat Jahan",
            email: "nusrat.jahan@company.com",
            phone: "+880 16 8765 4321",
            position: "UI/UX Designer",
            joiningDate: "2023-02-10",
            status: "active",
            performance: "good",
            image: "https://randomuser.me/api/portraits/women/21.jpg",
            currentProject: "Mobile Banking App"
        },
        {
            id: "#TM003",
            name: "Tanvir Ahmed",
            email: "tanvir.ahmed@company.com",
            phone: "+880 19 3344 5566",
            position: "Backend Developer",
            joiningDate: "2023-01-25",
            status: "active",
            performance: "excellent",
            image: "https://randomuser.me/api/portraits/men/31.jpg",
            currentProject: "CRM Dashboard"
        },
        {
            id: "#TM004",
            name: "Farzana Rahman",
            email: "farzana.rahman@company.com",
            phone: "+880 18 1122 3344",
            position: "Full Stack Developer",
            joiningDate: "2023-05-01",
            status: "active",
            performance: "good",
            image: "https://randomuser.me/api/portraits/women/41.jpg",
            currentProject: "Learning Management System"
        },
        {
            id: "#TM005",
            name: "Sabbir Khan",
            email: "sabbir.khan@company.com",
            phone: "+880 15 9988 7766",
            position: "DevOps Engineer",
            joiningDate: "2023-04-12",
            status: "active",
            performance: "excellent",
            image: "https://randomuser.me/api/portraits/men/51.jpg",
            currentProject: "Healthcare Portal"
        },
        {
            id: "#TM006",
            name: "Rashida Begum",
            email: "rashida.begum@company.com",
            phone: "+880 14 5544 3322",
            position: "QA Engineer",
            joiningDate: "2023-06-08",
            status: "active",
            performance: "good",
            image: "https://randomuser.me/api/portraits/women/61.jpg",
            currentProject: "Inventory Management"
        },
        {
            id: "#TM007",
            name: "Mizanur Rahman",
            email: "mizanur.rahman@company.com",
            phone: "+880 13 7788 9900",
            position: "Junior Developer",
            joiningDate: "2023-07-20",
            status: "active",
            performance: "average",
            image: "https://randomuser.me/api/portraits/men/71.jpg",
            currentProject: "E-commerce Platform"
        },
    ];

    const getStatusBadge = (status) => {
        const variants = {
            active: "bg-green-100 text-green-800 hover:bg-green-200",
            inactive: "bg-red-100 text-red-800 hover:bg-red-200",
            onLeave: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
        };
        return variants[status] || "bg-gray-100 text-gray-800 hover:bg-gray-200";
    };

    const getPerformanceBadge = (performance) => {
        const variants = {
            excellent: "bg-green-100 text-green-800 hover:bg-green-200",
            good: "bg-blue-100 text-blue-800 hover:bg-blue-200",
            average: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
            poor: "bg-red-100 text-red-800 hover:bg-red-200"
        };
        return variants[performance] || "bg-gray-100 text-gray-800 hover:bg-gray-200";
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Team Members</h1>
                    <p className="text-gray-600 mt-1">Manage your team members and their performance</p>
                </div>
                <div className="text-sm text-gray-500">
                    Total Members: {teamMembersData.length}
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-[#0e3c61]">
                            <TableRow>
                                <TableHead className="text-white font-medium pl-8">
                                    Team Member
                                </TableHead>
                                <TableHead className="text-white font-medium">Email</TableHead>
                                <TableHead className="text-white font-medium">Phone</TableHead>
                                <TableHead className="text-white font-medium">
                                    Position
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Current Project
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Performance
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Status
                                </TableHead>
                                <TableHead className="text-white font-medium">
                                    Joining Date
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teamMembersData.map((member) => (
                                <TableRow key={member.id} className="hover:bg-gray-50">
                                    <TableCell className="font-medium pl-8">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-100"
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-gray-900">
                                                    {member.name}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {member.id}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-gray-700">{member.email}</TableCell>
                                    <TableCell className="text-sm text-gray-700">{member.phone}</TableCell>
                                    <TableCell className="text-sm font-medium text-gray-900">{member.position}</TableCell>
                                    <TableCell className="text-sm text-gray-700">{member.currentProject}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="secondary"
                                            className={`text-xs font-medium ${getPerformanceBadge(member.performance)}`}
                                        >
                                            {member.performance.charAt(0).toUpperCase() + member.performance.slice(1)}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="secondary"
                                            className={`text-xs font-medium ${getStatusBadge(member.status)}`}
                                        >
                                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-sm text-gray-700">{member.joiningDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
