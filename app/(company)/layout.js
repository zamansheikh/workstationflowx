import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
  title: "Workflow_X | Company",
  description: "This is Company panel",
};

export default function RootLayout({ children }) {
  return <Sidebar>{children}</Sidebar>;
}