import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
  title: "Workflow_X | Leader",
  description: "This is leader panel",
};

export default function RootLayout({ children }) {
  return <Sidebar>{children}</Sidebar>;
}
