"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function ProjectProgressChart() {
  const data = [
    { name: "sug_go", target: 100, delivery: 53 },
    { name: "frank", target: 100, delivery: 72 },
    { name: "flash", target: 100, delivery: 20 },
    { name: "mehedi", target: 100, delivery: 58 },
    { name: "awekis", target: 100, delivery: 70 },
    { name: "nahum", target: 100, delivery: 10 },
    { name: "SBS", target: 100, delivery: 20 },
  ];

  return (
    <div className="w-full p-6 mt-4 bg-white rounded-3xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Project Progress</h2>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#0F3E64" }}
            ></div>
            <span className="text-gray-700">Target</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#5C2E1A" }}
            ></div>
            <span className="text-gray-700">Delivery</span>
          </div>
        </div>
      </div>

      <ChartContainer
        config={{
          target: {
            label: "Target",
            color: "#0F3E64",
          },
          delivery: {
            label: "Delivery",
            color: "#5C2E1A",
          },
        }}
        className="h-[300px]"
      >
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 24 }}
          barGap={4}
        >
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#333", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            tickFormatter={(value) => `${value}%`}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#666", fontSize: 12 }}
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <Bar
            dataKey="target"
            fill="#0F3E64"
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey="delivery"
            fill="#5C2E1A"
            radius={[4, 4, 0, 0]}
            maxBarSize={40}
          />
          <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
