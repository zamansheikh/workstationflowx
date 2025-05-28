"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { useToast } from "@/hooks/use-toast";

export default function EmployeeList() {
  //   const { toast } = useToast();

  const employeeData = [
    {
      id: "#56F667F",
      owner: "Rafiq Hossain",
      email: "rafiq.hossain@example.com",
      phone: "+880 17 1234 5678",
      position: "Frontend Developer",
      joiningDate: "2024-03-15",
      status: "rejected",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: "#89D234C",
      owner: "Nusrat Jahan",
      email: "nusrat.jahan@example.com",
      phone: "+880 16 8765 4321",
      position: "UI/UX Designer",
      joiningDate: "2024-02-10",
      status: "approved",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      id: "#45A9B1E",
      owner: "Tanvir Ahmed",
      email: "tanvir.ahmed@example.com",
      phone: "+880 19 3344 5566",
      position: "Backend Developer",
      joiningDate: "2024-01-25",
      status: "rejected",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      id: "#72K4D9Z",
      owner: "Farzana Rahman",
      email: "farzana.rahman@example.com",
      phone: "+880 18 1122 3344",
      position: "Full Stack Developer",
      joiningDate: "2024-05-01",
      status: "approved",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
    },
    {
      id: "#39L8V2Q",
      owner: "Mehedi Hasan",
      email: "mehedi.hasan@example.com",
      phone: "+880 15 9988 7766",
      position: "DevOps Engineer",
      joiningDate: "2024-04-18",
      status: "rejected",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      id: "#91X7C5T",
      owner: "Afsana Mimi",
      email: "afsana.mimi@example.com",
      phone: "+880 14 5566 7788",
      position: "QA Engineer",
      joiningDate: "2024-06-01",
      status: "pending",
      image: "https://randomuser.me/api/portraits/women/61.jpg",
    },
    {
      id: "#22M5J3B",
      owner: "Shahriar Kabir",
      email: "shahriar.kabir@example.com",
      phone: "+880 13 4455 6677",
      position: "Frontend Developer",
      joiningDate: "2024-03-29",
      status: "rejected",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "rejected":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "pending":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const handleView = (id) => {
    // toast({
    //   title: "Viewing application",
    //   description: `You are viewing application #${id}`,
    // });
    console.log(id);
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#0e3c61] text-white">
            <TableRow>
              <TableHead className="text-white font-medium pl-8">
                Employee
              </TableHead>
              <TableHead className="text-white font-medium">Email</TableHead>
              <TableHead className="text-white font-medium">Phone</TableHead>
              <TableHead className="text-white font-medium">Position</TableHead>
              <TableHead className="text-white font-medium">Joining Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-x-scroll">
            {employeeData.map((application) => (
              <TableRow key={application.id}>
                <TableCell className="font-medium pl-8 flex items-center gap-2">
                  <img
                    src={application.image}
                    alt={application.owner}
                    className="inline-block h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{application.owner}</span>
                    <span className="text-xs text-gray-500">{application.id}</span>
                  </div>
                </TableCell>
                <TableCell>{application.email}</TableCell>
                <TableCell>{application.phone}</TableCell>
                <TableCell>
                  
                    {application.position}
                </TableCell>
                <TableCell>
                  {application.joiningDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
