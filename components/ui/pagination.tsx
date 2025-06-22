import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export interface PaginationProps extends React.ComponentPropsWithoutRef<"nav"> {
  className?: string;
}

export interface PaginationContentProps extends React.ComponentPropsWithoutRef<"ul"> {
  className?: string;
}

export interface PaginationLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  isActive?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
}

export interface PaginationEllipsisProps extends React.ComponentPropsWithoutRef<"span"> {
  className?: string;
}

function Pagination({ className = "", ...props }: PaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className = "", ...props }: PaginationContentProps) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentPropsWithoutRef<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({
  className = "",
  isActive = false,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "primary" : "ghost",
          size,
        }),
        className,
        "hover:bg-primary hover:text-white"
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className = "", ...props }: PaginationLinkProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      isActive={false}
      {...props}
    >
      <ChevronLeftIcon />
      {/* <span className="hidden sm:block">Previous</span> */}
    </PaginationLink>
  );
}

function PaginationNext({ className = "", ...props }: PaginationLinkProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      isActive={false}
      {...props}
    >
      {/* <span className="hidden sm:block">Next</span> */}
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className = "", ...props }: PaginationEllipsisProps) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
