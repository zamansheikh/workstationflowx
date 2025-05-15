import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const DashboardInfoCard = ({ title, quantity }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">
          {title || "N/A"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-[56px] font-extrabold text-center">
          {quantity || "N/A"}
        </h3>
      </CardContent>
    </Card>
  );
};

export default DashboardInfoCard;
