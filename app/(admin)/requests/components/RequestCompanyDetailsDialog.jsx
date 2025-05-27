"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HiOutlineXMark } from "react-icons/hi2";
// import { useToast } from "@/hooks/use-toast";

export default function RequestCompanyDetailsDialog({
  open,
  onOpenChange,
  application,
}) {
  //   const { toast } = useToast();

  if (!application) return null;

  const handleApprove = () => {
    console.log("application approved");
    // toast({
    //   title: "Application Approved",
    //   description: `${application.companyName} has been approved successfully.`,
    // });
    onOpenChange(false);
  };

  const handleReject = () => {
    console.log("application rejected");
    // toast({
    //   title: "Application Rejected",
    //   description: `${application.companyName} has been rejected.`,
    //   variant: "destructive",
    // });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-xl font-semibold">
            Company Details
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="company-name"
              className="text-sm font-medium text-gray-700"
            >
              Company Name
            </Label>
            <Input
              id="company-name"
              value={application.companyName}
              readOnly
              className="bg-gray-100 border-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="owner-name"
                className="text-sm font-medium text-gray-700"
              >
                Owner Name
              </Label>
              <Input
                id="owner-name"
                value={application.owner}
                readOnly
                className="bg-gray-100 border-0"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                value={application.email}
                readOnly
                className="bg-gray-100 border-0"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="max-branch"
                className="text-sm font-medium text-gray-700"
              >
                Max Branch
              </Label>
              <Input
                id="max-branch"
                value={application.maxBranch}
                readOnly
                className="bg-gray-100 border-0"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="max-employee"
                className="text-sm font-medium text-gray-700"
              >
                Max Employee
              </Label>
              <Input
                id="max-employee"
                value={application.maxEmployee}
                readOnly
                className="bg-gray-100 border-0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="website"
              className="text-sm font-medium text-gray-700"
            >
              Website <span className="text-gray-500">(Optional)</span>
            </Label>
            <Input
              id="website"
              value={application.website}
              readOnly
              className="bg-gray-100 border-0"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              onClick={handleApprove}
              className="bg-[#0e3c61] hover:bg-[#0e3c61]/90 text-white px-8"
            >
              Approve
            </Button>
            <Button
              onClick={handleReject}
              variant="outline"
              className="border-red-300 bg-red-100 text-red-500 hover:bg-red-100 hover:text-red-500 px-8"
            >
              Reject
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
