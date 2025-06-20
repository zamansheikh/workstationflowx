import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const TeamCard = ({
    teamName = "deCoders Clan",
    teamId = "#12403",
    teamLeader = "Zaman Sheikh",
    runningProjects = 8,
    deliveredProjects = 200,
    workload = "30k"
}) => {
    return (
        <Card className="w-full bg-white shadow-md rounded-lg">
            <CardContent className="p-6">
                {/* Team Header */}
                <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src="/demo-logo.jpg" alt="Team Avatar" />
                        <AvatarFallback className="bg-gray-200">
                            🐼
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">{teamName}</h3>
                        <p className="text-sm text-gray-500">ID: {teamId}</p>
                    </div>
                </div>

                {/* Team Details */}
                <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Team Leader:</span>
                        <span className="text-gray-800">{teamLeader}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Running Projects:</span>
                        <span className="text-gray-800">{runningProjects}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Delivered Projects:</span>
                        <span className="text-gray-800">{deliveredProjects}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Workload:</span>
                        <span className="text-gray-800">{workload}</span>
                    </div>
                </div>

                {/* Delivery Status */}
                <div className="border-t pt-3 text-center">
                    <p className="text-sm text-gray-500">
                        <span className="text-red-500 font-semibold">Delivery: 120k/200k</span>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default TeamCard;
