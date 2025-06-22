import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DashboardCardProps } from "@/types";

const DashboardInfoCard: React.FC<DashboardCardProps> = ({ title, quantity, subtitle }) => {
  return (
    <Card className="w-full">
      <CardHeader className="">
        <CardTitle className="text-2xl font-semibold text-center">
          <span>{title || "N/A"}</span>
        </CardTitle>
        {subtitle && (
          <p className="text-sm text-gray-600 text-center">
            {subtitle}
          </p>
        )}
      </CardHeader>
      <CardContent className="">
        <h3 className="text-[56px] font-extrabold text-center">
          {quantity || "N/A"}
        </h3>
      </CardContent>
    </Card>
  );
};

export default DashboardInfoCard;
