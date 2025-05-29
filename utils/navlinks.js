import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { RiSettings2Line } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

const adminNavLinks = [
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

const companyOwnerNavLinks = [
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

const branchOwnerNavLinks = [
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
    path: "/employee",
    icon: RiSettings2Line,
    label: "Employee",
  },
];

const teamLeaderNavLinks = [
  {
    path: "/teamLeader",
    icon: MdOutlineDashboard,
    label: "Overview",
  },
  {
    path: "/project",
    icon: MdOutlineChatBubbleOutline,
    label: "Project",
  },
  {
    path: "/members",
    icon: RiSettings2Line,
    label: "Members",
  },
  {
    path: "/members",
    icon: RiSettings2Line,
    label: "KPI",
  },
  {
    path: "/members",
    icon: RiSettings2Line,
    label: "Analytics",
  },
];

export const getNavLinks = (role) => {
  switch (role) {
    case "admin":
      return adminNavLinks;
    case "companyOwner":
      return companyOwnerNavLinks;
    case "branchOwner":
      return branchOwnerNavLinks;
    case "teamLeader":
      return teamLeaderNavLinks;
    default:
      return [];
  }
};
