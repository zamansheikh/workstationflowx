import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const TeamList = () => {
    const teams = [
        {
            name: "AI- Baseball",
            chat: "Chat",
            phases: [
                { name: "F-end", status: "completed" },
                { name: "API", status: "completed" },
                { name: "B-end", status: "completed" },
                { name: "Deploy", status: "in-progress" }
            ],
            progress: {
                uiux: 62,
                backend: 52
            },
            daysLeft: 7
        },
        {
            name: "AI- Baseball",
            chat: "Chat",
            phases: [
                { name: "F-end", status: "completed" },
                { name: "API", status: "completed" },
                { name: "B-end", status: "in-progress" },
                { name: "Deploy", status: "pending" }
            ],
            progress: {
                uiux: 57,
                backend: 52
            },
            daysLeft: 7
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Team List</h3>
                <Link href="/projects" className="text-blue-500 text-sm hover:underline">
                    See All
                </Link>
            </div>

            <div className="space-y-4">
                {teams.map((team, index) => (
                    <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                                <Avatar className="w-8 h-8">
                                    <AvatarFallback>🐼</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{team.name}</span>
                            </div>
                            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                                {team.chat}
                            </button>
                        </div>

                        <div className="flex space-x-2 mb-3">
                            {team.phases.map((phase, phaseIndex) => (
                                <Badge
                                    key={phaseIndex}
                                    variant={phase.status === 'completed' ? 'default' :
                                        phase.status === 'in-progress' ? 'secondary' : 'outline'}
                                    className="text-xs"
                                >
                                    {phase.name}
                                </Badge>
                            ))}
                        </div>

                        <div className="space-y-2 mb-3">
                            <div className="text-xs text-gray-600">Phase Progress</div>
                            <div className="flex justify-between text-xs">
                                <span>UX/UI</span>
                                <span>{team.progress.uiux}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-orange-400 h-2 rounded-full"
                                    style={{ width: `${team.progress.uiux}%` }}
                                ></div>
                            </div>

                            <div className="flex justify-between text-xs">
                                <span>Backend</span>
                                <span>{team.progress.backend}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-orange-400 h-2 rounded-full"
                                    style={{ width: `${team.progress.backend}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="text-center text-red-500 text-sm font-medium">
                            {team.daysLeft} days left
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamList;
