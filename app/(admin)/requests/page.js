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
import { useState } from "react";
import RequestCompanyDetailsDialog from "./components/RequestCompanyDetailsDialog";
// import { useToast } from "@/hooks/use-toast";

const applications = [
  {
    id: 1,
    owner: "Johan Smith",
    email: "infojohan@gmail.com",
    phone: "+880 18 4385 888",
    status: "rejected",
    companyName: "BdCallingLTD",
    maxBranch: "3",
    maxEmployee: "300",
    website: "http://bdcalling.com",
  },
  {
    id: 2,
    owner: "Shakib Al Hasan",
    email: "shakib@gmail.com",
    phone: "+880 18 4385 888",
    status: "approved",
    companyName: "Tech Solutions Ltd",
    maxBranch: "5",
    maxEmployee: "150",
    website: "http://techsolutions.com",
  },
  {
    id: 3,
    owner: "Johan Smith",
    email: "infojohan@gmail.com",
    phone: "+880 18 4385 888",
    status: "rejected",
    companyName: "Digital Agency",
    maxBranch: "2",
    maxEmployee: "50",
    website: "http://digitalagency.com",
  },
  {
    id: 4,
    owner: "Johan Smith",
    email: "infojohan@gmail.com",
    phone: "+880 18 4385 888",
    status: "approved",
    companyName: "Innovation Hub",
    maxBranch: "4",
    maxEmployee: "200",
    website: "http://innovationhub.com",
  },
  {
    id: 5,
    owner: "Johan Smith",
    email: "infojohan@gmail.com",
    phone: "+880 18 4385 888",
    status: "rejected",
    companyName: "StartUp Inc",
    maxBranch: "1",
    maxEmployee: "25",
    website: "http://startup.com",
  },
  {
    id: 6,
    owner: "Johan Smith",
    email: "infojohan@gmail.com",
    phone: "+880 18 4385 888",
    status: "pending",
    companyName: "Future Tech",
    maxBranch: "6",
    maxEmployee: "400",
    website: "http://futuretech.com",
  },
  {
    id: 7,
    owner: "Johan Smith",
    email: "infojohan@gmail.com",
    phone: "+880 18 4385 888",
    status: "rejected",
    companyName: "Global Systems",
    maxBranch: "8",
    maxEmployee: "500",
    website: "http://globalsystems.com",
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
export default function RequestPage() {
  //   const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleView = (application) => {
    setSelectedRequest(application);
    setIsDialogOpen(true);
    // toast({
    //   title: "Viewing application",
    //   description: `You are viewing application #${id}`,
    // });
    console.log(application);
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#0e3c61] text-white">
            <TableRow>
              <TableHead className="text-white font-medium pl-8">
                Owner
              </TableHead>
              <TableHead className="text-white font-medium">Email</TableHead>
              <TableHead className="text-white font-medium">Phone</TableHead>
              <TableHead className="text-white font-medium">Status</TableHead>
              <TableHead className="text-white font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-x-scroll">
            {applications.map((application) => (
              <TableRow
                key={application.id}
                onClick={() => setIsDialogOpen(true)}
              >
                <TableCell className="font-medium pl-8">
                  {application.owner}
                </TableCell>
                <TableCell>{application.email}</TableCell>
                <TableCell>{application.phone}</TableCell>
                <TableCell>
                  <Badge
                    className={`${getStatusColor(
                      application.status
                    )} font-normal px-4 py-[6px]`}
                    variant="outline"
                  >
                    {application.status.charAt(0).toUpperCase() +
                      application.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    onClick={() => handleView(application)}
                    className="text-primary"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <RequestCompanyDetailsDialog
        application={selectedRequest}
        onOpenChange={setIsDialogOpen}
        open={isDialogOpen}
      />
    </div>
  );
}
