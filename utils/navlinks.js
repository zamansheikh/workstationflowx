import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { RiSettings2Line } from "react-icons/ri";

const adminNavLinks = [
  {
    path: "/dashboard",
    icon: MdOutlineDashboard,
    label: "Dashboard",
  },
  {
    path: "/chat",
    icon: MdOutlineChatBubbleOutline,
    label: "Chat",
  },
  {
    path: "#",
    icon: RiSettings2Line,
    label: "Your Apps",
  },
];

const companyOwnerNavLinks = [
  {
    path: "/dashboard",
    icon: MdOutlineDashboard,
    label: "Dashboard",
  },
  {
    path: "/chat",
    icon: MdOutlineChatBubbleOutline,
    label: "Chat",
  },
  {
    path: "#",
    icon: RiSettings2Line,
    label: "Your Apps",
  },
];

const branchOwnerNavLinks = [
  {
    path: "/dashboard",
    icon: MdOutlineDashboard,
    label: "Dashboard",
  },
  {
    path: "/chat",
    icon: MdOutlineChatBubbleOutline,
    label: "Chat",
  },
  {
    path: "#",
    icon: RiSettings2Line,
    label: "Your Apps",
  },
];

const teamLeaderNavLinks = [
  {
    path: "/dashboard",
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
