import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const TeamMembers = () => {
    const members = [
        {
            name: "Zaman Sheikh",
            role: "Team Leader",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            status: "online"
        },
        {
            name: "Abdullah Al Kafi",
            role: "Backend Developer",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
            status: "online"
        },
        {
            name: "Picklu Nath",
            role: "UI/UX Designer",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
            status: "away"
        },
        {
            name: "Sakib A Hasan",
            role: "Flutter Developer",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
            status: "offline"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'online': return 'bg-green-500';
            case 'away': return 'bg-yellow-500';
            case 'offline': return 'bg-gray-400';
            default: return 'bg-gray-400';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">My Team</h3>
                <button className="text-blue-500 text-sm hover:underline">View All</button>
            </div>

            <div className="space-y-3">
                {members.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                        <div className="relative">
                            <Avatar className="w-10 h-10">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(member.status)}`}></div>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-sm">{member.name}</p>
                            <p className="text-xs text-gray-500">{member.role}</p>
                        </div>
                        <Badge
                            variant="outline"
                            className={`text-xs capitalize ${member.status === 'online' ? 'text-green-600 border-green-200' :
                                    member.status === 'away' ? 'text-yellow-600 border-yellow-200' :
                                        'text-gray-600 border-gray-200'
                                }`}
                        >
                            {member.status}
                        </Badge>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
