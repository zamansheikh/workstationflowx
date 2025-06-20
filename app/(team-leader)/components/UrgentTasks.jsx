import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const UrgentTasks = () => {
    const tasks = [
        {
            projectName: "Project Name",
            clientName: "Client Name",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            projectName: "Project Name",
            clientName: "Client Name",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            projectName: "Project Name",
            clientName: "Client Name",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            projectName: "Project Name",
            clientName: "Client Name",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg"
        },
        {
            projectName: "Project Name",
            clientName: "Client Name",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
            projectName: "Project Name",
            clientName: "Client Name",
            avatar: "https://randomuser.me/api/portraits/men/6.jpg"
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Urgent Task</h3>
                <Link href="/projects" className="text-blue-500 text-sm hover:underline">
                    See All
                </Link>
            </div>

            <div className="space-y-3">
                {tasks.map((task, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={task.avatar} alt={task.clientName} />
                            <AvatarFallback>{task.clientName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <p className="font-medium text-sm">{task.projectName}</p>
                            <p className="text-xs text-gray-500">{task.clientName}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UrgentTasks;
