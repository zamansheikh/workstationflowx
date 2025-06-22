import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
    title: "Workflow_X | Employee",
    description: "Employee dashboard",
};

export default function RootLayout({ children }) {
    return <Sidebar role="employee">{children}</Sidebar>;
}
