'use client';

import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
} from "recharts";

const data = [
    { month: "Jan", Companies: 15, Branches: 45, Revenue: 2500 },
    { month: "Feb", Companies: 25, Branches: 78, Revenue: 3200 },
    { month: "Mar", Companies: 40, Branches: 120, Revenue: 4100 },
    { month: "Apr", Companies: 55, Branches: 165, Revenue: 5200 },
    { month: "May", Companies: 75, Branches: 225, Revenue: 6800 },
    { month: "Jun", Companies: 95, Branches: 285, Revenue: 8200 },
    { month: "Jul", Companies: 110, Branches: 330, Revenue: 9500 },
    { month: "Aug", Companies: 120, Branches: 360, Revenue: 10200 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any; label?: any }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border rounded shadow text-sm">
                <p className="font-semibold mb-2">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <p key={index} style={{ color: entry.color }}>
                        {entry.name}: {entry.name === 'Revenue' ? `$${entry.value}k` : entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export default function SystemAnalyticsChart() {
    return (
        <div className="w-full p-4 bg-white rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">System Analytics Overview</h2>
                <div className="flex gap-4 pr-4">
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#0A3355]"></span>
                        <span className="text-sm font-medium">Companies</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#F6A96B]"></span>
                        <span className="text-sm font-medium">Branches</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#10B981]"></span>
                        <span className="text-sm font-medium">Revenue</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 12, fontWeight: 'bold' }}
                            stroke="#6b7280"
                        />
                        <YAxis
                            tick={{ fontSize: 12, fontWeight: 'bold' }}
                            stroke="#6b7280"
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="Companies"
                            stroke="#0A3355"
                            strokeWidth={3}
                            dot={{ fill: '#0A3355', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: '#0A3355', strokeWidth: 2 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Branches"
                            stroke="#F6A96B"
                            strokeWidth={3}
                            dot={{ fill: '#F6A96B', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: '#F6A96B', strokeWidth: 2 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Revenue"
                            stroke="#10B981"
                            strokeWidth={3}
                            dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
