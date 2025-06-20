"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Edit } from "lucide-react";

const ProjectCard = ({ project }) => {
    const [hoveredBadge, setHoveredBadge] = useState(null);

    // Default project data matching the image design
    const defaultProject = {
        client: "AI- Baseball",
        technologies: [
            { name: "R&D", color: "bg-green-500", developer: "Picklu" },
            { name: "UX/UI", color: "bg-orange-400", developer: "Kafi" },
            { name: "F-end", color: "bg-gray-300 text-gray-700", developer: "Rafiq" },
            { name: "API", color: "bg-gray-300 text-gray-700", developer: "Tanvir" },
            { name: "B-end", color: "bg-orange-400", developer: "Sabbir" },
            { name: "Deploy", color: "bg-gray-300 text-gray-700", developer: "DevOps Team" }
        ],
        phases: [
            { name: "UX/UI", progress: 52, developer: "Picklu" },
            { name: "Backend", progress: 52, developer: "Kafi" }
        ],
        daysLeft: 7
    };

    // Ensure we have valid data with proper fallbacks
    const projectData = {
        client: project?.client || defaultProject.client,
        technologies: project?.technologies || defaultProject.technologies,
        phases: project?.phases || defaultProject.phases,
        daysLeft: project?.daysLeft || defaultProject.daysLeft
    };

    const getDaysLeftColor = (days) => {
        if (days <= 3) return "text-red-500";
        if (days <= 7) return "text-orange-500";
        return "text-green-500";
    };

    return (
        <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 h-full">
            <CardContent className="p-4 flex flex-col h-full">
                {/* Header with Client Name and Chat Button */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{projectData.client}</h3>
                    <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 text-sm"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Chat
                    </Button>
                </div>                {/* Technology/Phase Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {projectData.technologies && Array.isArray(projectData.technologies) && projectData.technologies.map((tech, index) => (
                        <div key={index} className="relative">
                            <Badge
                                className={`${tech.color} ${tech.color.includes('text-') ? '' : 'text-white'} hover:opacity-80 transition-opacity cursor-pointer px-2 py-1 text-xs font-medium rounded-md border-0`}
                                onMouseEnter={() => setHoveredBadge(`tech-${index}`)}
                                onMouseLeave={() => setHoveredBadge(null)}
                            >
                                {tech.name}
                            </Badge>
                            {hoveredBadge === `tech-${index}` && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap z-20">
                                    {tech.developer}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-gray-800"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* Phase Progress Section */}
                <div className="mb-4 flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Phase Progress</h4>

                    {projectData.phases && Array.isArray(projectData.phases) && projectData.phases.map((phase, index) => (
                        <div key={index} className="mb-3 last:mb-0">
                            <div className="flex items-center justify-between mb-2">
                                <div className="relative">
                                    <span
                                        className="text-sm text-gray-700 cursor-pointer hover:text-gray-900"
                                        onMouseEnter={() => setHoveredBadge(`phase-${index}`)}
                                        onMouseLeave={() => setHoveredBadge(null)}
                                    >
                                        {phase.name}
                                    </span>
                                    {hoveredBadge === `phase-${index}` && (
                                        <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap z-20">
                                            {phase.developer}
                                            <div className="absolute top-full left-2 border-2 border-transparent border-t-gray-800"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-orange-500">{phase.progress}%</span>
                                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-xs font-medium text-orange-600">{phase.progress}%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-orange-400 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${phase.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer with Days Left and Edit Button */}
                <div className="flex items-center justify-between mt-auto">
                    <span className={`text-lg font-semibold ${getDaysLeftColor(projectData.daysLeft)}`}>
                        {projectData.daysLeft} days left
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-gray-50 transition-colors border-gray-300 text-gray-700 px-3 py-1.5 text-sm"
                    >
                        <Edit className="w-4 h-4 mr-1.5" />
                        Edit
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
