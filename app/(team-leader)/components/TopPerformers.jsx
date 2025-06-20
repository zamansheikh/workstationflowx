import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const TopPerformers = () => {
    const performers = [
        {
            name: "Abdullah Al Kafi",
            position: "Backend Developer",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Picklu Nath",
            position: "UI/UX Designer",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            name: "Sakib A Hasan",
            position: "Flutter Developer",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Top Performer</h3>
                <Link href="/team-members" className="text-blue-500 text-sm hover:underline">
                    See All
                </Link>
            </div>

            <div className="space-y-3">
                {performers.map((performer, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={performer.avatar} alt={performer.name} />
                            <AvatarFallback>{performer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <p className="font-medium text-sm">{performer.name}</p>
                            <p className="text-xs text-gray-500">{performer.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopPerformers;
