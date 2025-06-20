import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const RecentActivities = () => {
    const activities = [
        {
            type: "company_created",
            title: "New Company Registered",
            description: "TechCorp Solutions submitted registration",
            time: "2 hours ago",
            status: "pending",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            type: "company_approved",
            title: "Company Approved",
            description: "DataFlow Inc. has been approved",
            time: "4 hours ago",
            status: "approved",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            type: "branch_created",
            title: "New Branch Created",
            description: "BDCalling opened Dhaka Branch",
            time: "6 hours ago",
            status: "active",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            type: "company_request",
            title: "Registration Request",
            description: "InnovateLab submitted documents",
            time: "8 hours ago",
            status: "pending",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            type: "system_alert",
            title: "System Maintenance",
            description: "Scheduled maintenance completed",
            time: "12 hours ago",
            status: "completed",
            avatar: "/logo.svg"
        },
        {
            type: "company_rejected",
            title: "Application Rejected",
            description: "XYZ Corp application needs revision",
            time: "1 day ago",
            status: "rejected",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'approved':
            case 'active':
            case 'completed': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getTypeIcon = (type) => {
        switch (type) {
            case 'company_created':
            case 'company_approved': return '🏢';
            case 'branch_created': return '🏪';
            case 'company_request': return '📋';
            case 'system_alert': return '⚙️';
            case 'company_rejected': return '❌';
            default: return '📌';
        }
    };

    return (
        <div className="p-5 bg-white rounded-lg shadow-md h-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Recent Activities</h1>
                <Link
                    href="/requests"
                    className="text-blue-500 hover:text-blue-500/80 underline text-sm font-medium"
                >
                    View All
                </Link>
            </div>

            <div className="space-y-3 max-h-[200px] overflow-y-auto">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="relative">
                            <Avatar className="w-10 h-10">
                                <AvatarImage src={activity.avatar} alt="Avatar" />
                                <AvatarFallback className="bg-blue-100">
                                    {getTypeIcon(activity.type)}
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="text-sm font-medium text-gray-900 truncate">
                                    {activity.title}
                                </h4>
                                <Badge className={`text-xs ${getStatusColor(activity.status)}`}>
                                    {activity.status}
                                </Badge>
                            </div>

                            <p className="text-xs text-gray-600 mb-1">
                                {activity.description}
                            </p>

                            <p className="text-xs text-gray-400">
                                {activity.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                    <Link
                        href="/create_company"
                        className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-center transition-colors"
                    >
                        Create Company
                    </Link>
                    <Link
                        href="/requests"
                        className="text-xs bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-center transition-colors"
                    >
                        View Requests
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecentActivities;
