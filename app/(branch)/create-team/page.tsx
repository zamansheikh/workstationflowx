"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CreateTeamForm from "./components/CreateTeamForm";

const CreateTeamPage = () => {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">Create Team</CardTitle>
            </CardHeader>
            <CardContent>
                <CreateTeamForm />
            </CardContent>
        </Card>
    );
};

export default CreateTeamPage;
