import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { RiSettings2Line } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { NavLink } from "@/types";

const adminNavLinks: NavLink[] = [
  {
    path: "/admin",
    icon: MdOutlineDashboard,
    label: "Overview",
  },
  {
    path: "/companies",
    icon: MdOutlineChatBubbleOutline,
    label: "Companies",
  },
  {
    path: "/requests",
    icon: RiSettings2Line,
    label: "Requests",
  },
  {
    path: "/create_company",
    unique: true,
    icon: FiPlus,
    label: "Create Company",
  },
];

const companyOwnerNavLinks: NavLink[] = [
  {
    path: "/company",
    icon: MdOutlineDashboard,
    label: "Overview",
  },
  {
    path: "/branches",
    icon: MdOutlineChatBubbleOutline,
    label: "Branch",
  },
  {
    path: "/employee",
    icon: RiSettings2Line,
    label: "Employee",
  },
  {
    path: "/create_branch",
    unique: true,
    icon: FiPlus,
    label: "Create Branch",
  },
];

const branchManagerNavLinks: NavLink[] = [
  {
    path: "/branch",
    icon: MdOutlineDashboard,
    label: "Overview",
  },
  {
    path: "/teams",
    icon: MdOutlineChatBubbleOutline,
    label: "Teams",
  },
  {
    path: "/branch-employees",
    icon: RiSettings2Line,
    label: "Employees",
  },
  {
    path: "/create-team",
    unique: true,
    icon: FiPlus,
    label: "Create Team",
  },
];

const teamLeaderNavLinks: NavLink[] = [
  {
    path: "/team-leader",
    icon: MdOutlineDashboard,
    label: "Overview",
  },
  {
    path: "/projects",
    icon: MdOutlineChatBubbleOutline,
    label: "Projects",
  },
  {
    path: "/team-members",
    icon: RiSettings2Line,
    label: "Members",
  },
  {
    path: "/kpi",
    icon: RiSettings2Line,
    label: "KPI",
  },
  {
    path: "/analytics",
    icon: RiSettings2Line,
    label: "Analytics",
  },
  {
    path: "/create-project",
    unique: true,
    icon: FiPlus,
    label: "Create Project",
  },
];

const employeeNavLinks: NavLink[] = [
  {
    path: "/employee-dashboard",
    icon: MdOutlineDashboard,
    label: "Overview",
  },
  {
    path: "/my-projects",
    icon: MdOutlineChatBubbleOutline,
    label: "My Projects",
  },
  {
    path: "/my-team",
    icon: RiSettings2Line,
    label: "My Team",
  },
  {
    path: "/my-performance",
    icon: RiSettings2Line,
    label: "Performance",
  },
];

export const getNavLinks = (role: string): NavLink[] => {
  switch (role) {
    case "admin":
      return adminNavLinks;
    case "companyOwner":
      return companyOwnerNavLinks;
    case "branchManager":
      return branchManagerNavLinks;
    case "teamLeader":
      return teamLeaderNavLinks;
    case "employee":
      return employeeNavLinks;
    default:
      return [];
  }
};
