import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <p>This is admin page</p>
      <Link href="/" className={buttonVariants({ variant: "default" })}>
        Go To Home Page
      </Link>
    </div>
  );
};

export default Page;
