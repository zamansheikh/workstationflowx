"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/logo-black.png";

const roles = [
  {
    title: "Admin",
    description: "Manage companies, view requests, and oversee the entire system",
    route: "/admin",
    color: "bg-primary",
    features: ["Create Companies", "View All Companies", "Manage Requests", "System Overview"]
  },
  {
    title: "Company Owner",
    description: "Manage your company branches and employees",
    route: "/company",
    color: "bg-primary",
    features: ["Create Branches", "Manage Employees", "Company Analytics", "Branch Overview"]
  },
  {
    title: "Branch Manager",
    description: "Manage teams within your branch",
    route: "/branch",
    color: "bg-primary",
    features: ["Create Teams", "Manage Branch Employees", "Team Analytics", "Branch Performance"]
  },
  {
    title: "Team Leader",
    description: "Lead your team and manage projects",
    route: "/team-leader",
    color: "bg-primary",
    features: ["Create Projects", "Manage Team Members", "Project Analytics", "Team Performance"]
  },
  {
    title: "Employee",
    description: "View assigned projects and track your progress",
    route: "/employee-dashboard",
    color: "bg-primary",
    features: ["View My Projects", "Update Task Progress", "Team Communication", "Performance Tracking"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Image
                src={logoImage}
                alt="WorkstationFlowX Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            WorkstationFlowX
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose your role to access the dashboard
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <Link href="/login">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Login to Dashboard
              </Button>
            </Link>
            <Link href="/jobs">
              <Button variant="outline" className="px-8 py-3">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 shadow-lg">
              <CardContent className="p-6">
                {/* Role Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${role.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl text-primary-foreground font-bold">
                      {role.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {role.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {role.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>                {/* Access Button */}
                <Button
                  className={`w-full ${role.color} hover:bg-primary/90 text-primary-foreground font-semibold py-3`}
                  variant="default"
                  size="default"
                  asChild
                >
                  <Link href={role.route}>
                    Access {role.title} Dashboard
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">
            WorkstationFlowX - Complete Workflow Management System
          </p>
          <p className="text-xs mt-2">
            Organize your teams, manage projects, and track progress efficiently
          </p>
        </div>
      </div>
    </div>
  );
}
