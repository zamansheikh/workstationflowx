'use client';

import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 border rounded shadow text-sm">
                <p className="font-semibold">{payload[0].payload.name}</p>
                <p className="text-green-600">Completed: {payload[0].value}%</p>
                <p className="text-orange-400">Pending: {payload[1].value}%</p>
            </div>
        );
    }
    return null;
};

export default function MyProjectsChart({ title = "My Projects Progress", data = [] }) {
    return (
        <div className="w-full p-4 bg-white rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <div className="flex gap-4 pr-4">
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-green-500"></span>
                        <span className="text-sm font-medium">Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                        <span className="text-sm font-medium">Pending</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid vertical={false} strokeDasharray="1 3" />
                        <XAxis dataKey="name" tick={{ fontWeight: 'bold' }} />
                        <YAxis
                            tickFormatter={(value) => `${value}%`}
                            domain={[0, 100]}
                            tick={{ fontWeight: 'bold' }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="Completed" fill="#10B981" barSize={30} radius={[10, 10, 0, 0]} />
                        <Bar dataKey="Pending" fill="#F6A96B" barSize={30} radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
