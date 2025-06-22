"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CreateBranchForm from "./components/CreateBranchForm";

const CreateBranch = () => {
   return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Create Branch</CardTitle>
      </CardHeader>
      <CardContent>
        <CreateBranchForm />
      </CardContent>
    </Card>
  );
};

export default CreateBranch;