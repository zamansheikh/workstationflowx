// import { SelectComponent } from "@/components/SelectComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const userAvatar =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Navbar() {
  return (
    <div className="bg-primary flex justify-between items-center px-4 lg:p-3 lg:px-5 rounded-lg mb-3 lg:mb-6 sticky top-0 z-10">
      {/* welcome msg */}
      <div className="text-white py-3 lg:py-3 rounded-lg lg:rounded-xl">
        <h1 className="text-[32px] font-extrabold">Welcome,</h1>
        <h4 className="text-xl font-medium">John</h4>
      </div>

      {/* user details */}
      <div className="flex items-center gap-3 font-bold">
        <Avatar>
          <AvatarImage src={userAvatar} alt={"N/A"} />
          <AvatarFallback className="bg-gradient-to-r from-[#00ACDA] to-[#43D4FB] text-sm">
            N/A
          </AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-xl font-medium text-white">
            {"John Doe" || "N/A"}
          </h4>
          <span className="text-sm font-light text-[#ffffff]">
            {"Admin" || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
