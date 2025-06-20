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
    ]; return (
        <div className="bg-white rounded-lg shadow p-6 h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Top Performer</h3>
                <Link href="/team-members" className="text-blue-500 text-sm hover:underline">
                    See All
                </Link>
            </div>

            <div className="space-y-4">
                {performers.map((performer, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <Avatar className="w-12 h-12">
                            <AvatarImage src={performer.avatar} alt={performer.name} />
                            <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                                {performer.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <p className="font-semibold text-sm text-gray-800">{performer.name}</p>
                            <p className="text-sm text-gray-500">{performer.position}</p>
                        </div>
                        <div className="text-right">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 text-xs font-bold">#{index + 1}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add some padding to match chart height */}
            <div className="mt-8">
                <div className="border-t pt-4">
                    <div className="text-center">
                        <Link
                            href="/team-members"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                            View All Team Members
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPerformers;
