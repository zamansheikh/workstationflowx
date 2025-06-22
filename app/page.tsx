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
    color: "bg-red-500",
    features: ["Create Companies", "View All Companies", "Manage Requests", "System Overview"]
  },
  {
    title: "Company Owner",
    description: "Manage your company branches and employees",
    route: "/company",
    color: "bg-blue-500",
    features: ["Create Branches", "Manage Employees", "Company Analytics", "Branch Overview"]
  },
  {
    title: "Branch Manager",
    description: "Manage teams within your branch",
    route: "/branch",
    color: "bg-green-500",
    features: ["Create Teams", "Manage Branch Employees", "Team Analytics", "Branch Performance"]
  },
  {
    title: "Team Leader",
    description: "Lead your team and manage projects",
    route: "/team-leader",
    color: "bg-purple-500",
    features: ["Create Projects", "Manage Team Members", "Project Analytics", "Team Performance"]
  },
  {
    title: "Employee",
    description: "View assigned projects and track your progress",
    route: "/employee-dashboard",
    color: "bg-orange-500",
    features: ["View My Projects", "Update Task Progress", "Team Communication", "Performance Tracking"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src={logoImage}
              alt="WorkstationFlowX Logo"
              width={120}
              height={120}
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            WorkstationFlowX
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose your role to access the dashboard
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                {/* Role Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${role.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl text-white font-bold">
                      {role.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {role.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {role.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>                {/* Access Button */}
                <Button
                  className={`w-full ${role.color} hover:opacity-90 text-white font-semibold py-3`}
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
        <div className="text-center mt-12 text-gray-500">
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
