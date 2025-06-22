import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
    title: "Workflow_X | Branch Manager",
    description: "Branch manager dashboard",
};

export default function RootLayout({ children }) {
    return <Sidebar role="branchManager">{children}</Sidebar>;
}
