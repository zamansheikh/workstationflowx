/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4p67afrMzU1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { GrLogout } from "react-icons/gr";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import ChatHeader from "@/app/(main)/chat/components/ChatHeader";
import { usePathname, useRouter } from "next/navigation";
// import { logoutAction } from "@/app/actions/authActions";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import Navbar from "./Navbar";
import { getNavLinks } from "@/utils/navlinks";
import Image from "next/image";
import logoImage from "@/public/logo.svg";

const publicRoutes = ["/", "/career"];

const userAvatar =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Sidebar({ children, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const router = useRouter();

  const handleLogout = async () => {
    // await logoutAction();

    router.push("/");
  };

  if (publicRoutes.includes(pathName)) {
    return;
  }

  return (
    <div className="flex h-screen w-full">
      <div className="hidden fixed min-h-screen h-full lg:block lg:w-64 lg:shrink-0  lg:bg-primary dark:lg:bg-gray-800">
        {/* pc sidbar */}
        <div className="flex h-full flex-col justify-between py-6 px-4">
          <div className="space-y-6">
            {/* sidebar header */}
            <Link
              href="#"
              className="flex items-center justify-center gap-3 font-bold"
              prefetch={false}
            >
              <Image
                src={logoImage}
                alt="workflowstationx_logo"
                width={100}
                height={100}
              />
            </Link>

            {/* sidebar links */}
            <nav className="space-y-1">
              {/* dashboard */}
              {getNavLinks("companyOwner")?.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium  hover:bg-white/20 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50 mb-2 ${
                    pathName === link.path && "bg-white/20"
                  } ${link.unique ? "bg-white text-primary" : "text-white"} ${
                    link.unique &&
                    pathName === link.path &&
                    "bg-transparent border border-white text-white cursor-not-allowed"
                  }`}
                  prefetch={false}
                >
                  {link?.unique && (
                    // <span className="bg-white p-[6px] flex justify-center items-center rounded-full">
                    <span className="p-[6px] flex justify-center items-center rounded-full">
                      <link.icon
                        size={16}
                        color={
                          link.unique && pathName === link.path
                            ? "white"
                            : "rgb(15, 63, 101)"
                        }
                      />
                    </span>
                  )}
                  {link.label}
                </Link>
              ))}
              {/* <Button
                type="submit"
                className="flex w-full justify-start items-center gap-2 text-sm cursor-pointer bg-white hover:bg-white/80 py-4 rounded text-black"
                // variant="ghost"
                // onClick={handleLogout}
              >
                <FiPlus />
                Create Company
              </Button> */}
            </nav>
          </div>

          {/* sidebar footer */}
          <div className="space-y-4">
            {/* <Button
              type="submit"
              className="flex items-center gap-2 text-sm cursor-pointer"
              variant="ghost"
              onClick={() => console.log("to profile page")}
            >
              <FaUserCircle className="size-6" />
              <span>Profile</span>
            </Button> */}
            {/* <Button
              type="submit"
              className="flex items-center gap-2 text-sm cursor-pointer"
              variant="ghost"
              onClick={handleLogout}
            >
              <GrLogout className="size-6" />
              <span>Logout</span>
            </Button> */}
            <Button
              type="submit"
              className="flex w-full justify-start items-center gap-2 text-sm cursor-pointer bg-red-200 hover:bg-red-300/80 py-4 rounded text-red-500"
              // variant="ghost"
              // onClick={handleLogout}
            >
              Log out
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        {/* mobile sidebar */}
        <header className="sticky top-0 z-10 border-b bg-primary px-2 md:px-4 py-3 dark:border-gray-800 dark:bg-gray-900 lg:hidden">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center gap-2 font-bold"
              prefetch={false}
            >
              <Image
                src={logoImage}
                alt="workflowstationx_logo"
                className=" w-28 lg:w-fit"
              />
              {/* <h1 className="text-3xl font-bold">WorkFlow_X</h1> */}
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <AiOutlineMenu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>

              {/* mobile nav links */}
              <SheetContent side="left" className="w-64">
                <div className="flex h-full flex-col justify-between py-6 px-4 mt-4">
                  <div className="space-y-6">
                    <nav className="space-y-1">
                      {getNavLinks("admin")?.map((link) => (
                        <Link
                          key={link.label}
                          href={link.path}
                          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/20 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50 ${
                            pathName === link.path && "bg-white/20"
                          }`}
                          prefetch={false}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="bg-white p-[6px] flex justify-center items-center rounded-full">
                            <link.icon size={16} color="#101010" />
                          </span>

                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* sidebar footer */}
                  <div className="space-y-4">
                    <div className="flex flex-col justify-start items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {/* <Button
                        onClick={() => console.log("to profile page")}
                        className="flex items-center gap-2 text-sm cursor-pointer"
                        variant="ghost"
                      >
                        <FaUserCircle className="size-6" />
                        <span>Profile</span>
                      </Button> */}
                      <Button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-sm cursor-pointer"
                        variant="ghost"
                      >
                        <GrLogout className="size-6" />
                        <span>Logout</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <section className="p-2 pb-0 md:p-5 md:pb-0 lg:ml-64">
          <Navbar />
          {children}
        </section>
      </div>
    </div>
  );
}
