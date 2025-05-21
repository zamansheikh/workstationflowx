import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CreateCompanyForm from "./components/createCompanyForm";

export default function CreateCompanyFormPage() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Create Company</CardTitle>
      </CardHeader>
      <CardContent>
        <CreateCompanyForm />
      </CardContent>
    </Card>
  );
}
