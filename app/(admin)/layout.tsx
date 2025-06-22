import Sidebar from "@/components/layout/Sidebar";
import { ReactNode } from "react";

export const metadata = {
  title: "Workflow_X | Admin",
  description: "This is admin panel",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <Sidebar role="admin">{children}</Sidebar>;
}
