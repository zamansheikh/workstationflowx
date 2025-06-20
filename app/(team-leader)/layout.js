import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
    title: "Workflow_X | Team Leader",
    description: "Team leader dashboard",
};

export default function RootLayout({ children }) {
    return <Sidebar role="teamLeader">{children}</Sidebar>;
}
