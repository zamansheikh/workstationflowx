import { Badge } from "@/components/ui/badge";

const MyTasks = () => {
    const tasks = [
        {
            id: "TSK-001",
            project: "E-commerce Dashboard",
            task: "Design user profile page",
            priority: "High",
            status: "In Progress",
            dueDate: "2024-01-15",
            progress: 75
        },
        {
            id: "TSK-002",
            project: "Mobile Banking App",
            task: "Implement transaction history",
            priority: "Medium",
            status: "Pending",
            dueDate: "2024-01-20",
            progress: 0
        },
        {
            id: "TSK-003",
            project: "CRM System",
            task: "Bug fixes in contact module",
            priority: "High",
            status: "In Progress",
            dueDate: "2024-01-12",
            progress: 90
        },
        {
            id: "TSK-004",
            project: "Learning Management",
            task: "Create course upload feature",
            priority: "Low",
            status: "Completed",
            dueDate: "2024-01-10",
            progress: 100
        }
    ];

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High': return 'bg-red-100 text-red-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'Low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'In Progress': return 'bg-blue-100 text-blue-800';
            case 'Pending': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">My Tasks</h3>
                <button className="text-blue-500 hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-3 px-2 font-medium text-gray-600">Task ID</th>
                            <th className="text-left py-3 px-2 font-medium text-gray-600">Project</th>
                            <th className="text-left py-3 px-2 font-medium text-gray-600">Task</th>
                            <th className="text-left py-3 px-2 font-medium text-gray-600">Priority</th>
                            <th className="text-left py-3 px-2 font-medium text-gray-600">Status</th>
                            <th className="text-left py-3 px-2 font-medium text-gray-600">Progress</th>
                            <th className="text-left py-3 px-2 font-medium text-gray-600">Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-2 text-sm font-mono">{task.id}</td>
                                <td className="py-3 px-2 text-sm font-medium">{task.project}</td>
                                <td className="py-3 px-2 text-sm">{task.task}</td>
                                <td className="py-3 px-2">
                                    <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
                                        {task.priority}
                                    </Badge>
                                </td>
                                <td className="py-3 px-2">
                                    <Badge className={`text-xs ${getStatusColor(task.status)}`}>
                                        {task.status}
                                    </Badge>
                                </td>
                                <td className="py-3 px-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full"
                                                style={{ width: `${task.progress}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-xs text-gray-600">{task.progress}%</span>
                                    </div>
                                </td>
                                <td className="py-3 px-2 text-sm text-gray-600">{task.dueDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTasks;
