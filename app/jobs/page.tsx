"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FiSearch, FiMapPin, FiClock, FiDollarSign, FiUsers } from "react-icons/fi";
import { JobPost } from "@/types";

const JobListingPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState<string>("all");
    const [filterLocation, setFilterLocation] = useState<string>("all");

    // Mock job data - in real app, this would come from API
    const jobPosts: JobPost[] = [
        {
            id: "JOB-001",
            title: "Senior React Developer",
            department: "Engineering",
            location: "Remote",
            type: "full-time",
            experience: "3-5 years",
            salary: "$70,000 - $90,000",
            description: "We are looking for a senior React developer to join our team...",
            requirements: ["3+ years React experience", "TypeScript proficiency", "Next.js knowledge"],
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
            benefits: ["Health Insurance", "Remote Work", "Flexible Hours"],
            deadline: "2024-02-15",
            status: "active",
            createdAt: "2024-01-15",
            updatedAt: "2024-01-15",
            createdBy: "Team Leader",
            applicationsCount: 23,
            shareableLink: "https://workstationflowx.com/jobs/JOB-001"
        },
        {
            id: "JOB-002",
            title: "UI/UX Designer",
            department: "Design",
            location: "Dhaka, Bangladesh",
            type: "full-time",
            experience: "2-4 years",
            salary: "$50,000 - $65,000",
            description: "Looking for a creative UI/UX designer to enhance user experience...",
            requirements: ["2+ years UI/UX experience", "Figma proficiency", "Portfolio required"],
            skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
            benefits: ["Health Insurance", "Creative Environment", "Learning Budget"],
            deadline: "2024-02-20",
            status: "active",
            createdAt: "2024-01-12",
            updatedAt: "2024-01-12",
            createdBy: "Team Leader",
            applicationsCount: 15,
            shareableLink: "https://workstationflowx.com/jobs/JOB-002"
        },
        {
            id: "JOB-003",
            title: "Marketing Intern",
            department: "Marketing",
            location: "Hybrid",
            type: "internship",
            experience: "0-1 years",
            salary: "$20,000 - $30,000",
            description: "Great opportunity for students to gain marketing experience...",
            requirements: ["Marketing student", "Good communication skills", "Social media knowledge"],
            skills: ["Social Media", "Content Creation", "Analytics"],
            benefits: ["Mentorship", "Flexible Schedule", "Certificate"],
            deadline: "2024-02-25",
            status: "active",
            createdAt: "2024-01-10",
            updatedAt: "2024-01-10",
            createdBy: "Team Leader",
            applicationsCount: 8,
            shareableLink: "https://workstationflowx.com/jobs/JOB-003"
        }
    ];

    const filteredJobs = jobPosts.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === "all" || job.type === filterType;
        const matchesLocation = filterLocation === "all" || job.location.toLowerCase().includes(filterLocation.toLowerCase());
        return matchesSearch && matchesType && matchesLocation && job.status === 'active';
    });

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'full-time': return 'bg-blue-100 text-blue-800';
            case 'part-time': return 'bg-purple-100 text-purple-800';
            case 'contract': return 'bg-orange-100 text-orange-800';
            case 'internship': return 'bg-pink-100 text-pink-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover exciting opportunities and build your career with us
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-8 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <FiSearch className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                                placeholder="Search jobs, companies, or locations..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 py-3"
                            />
                        </div>
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="px-4 py-3 border rounded-md bg-white min-w-[150px]"
                        >
                            <option value="all">All Types</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                        </select>
                        <select
                            value={filterLocation}
                            onChange={(e) => setFilterLocation(e.target.value)}
                            className="px-4 py-3 border rounded-md bg-white min-w-[150px]"
                        >
                            <option value="all">All Locations</option>
                            <option value="remote">Remote</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="hybrid">Hybrid</option>
                        </select>
                    </div>
                </div>

                {/* Results Summary */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
                    </p>
                </div>

                {/* Job Listings */}
                <div className="space-y-6">
                    {filteredJobs.map((job) => (
                        <Card key={job.id} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                                    {job.title}
                                                </h3>
                                                <p className="text-gray-600 mb-3">{job.department}</p>
                                            </div>
                                            <Badge className={getTypeColor(job.type)}>
                                                {job.type}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <FiMapPin className="h-4 w-4" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <FiClock className="h-4 w-4" />
                                                <span>{job.experience}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <FiDollarSign className="h-4 w-4" />
                                                <span>{job.salary}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <FiUsers className="h-4 w-4" />
                                                <span>{job.applicationsCount} applicants</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 mb-4 line-clamp-2">
                                            {job.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {job.skills.slice(0, 4).map((skill, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                            {job.skills.length > 4 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{job.skills.length - 4} more
                                                </Badge>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-500">
                                                Deadline: {new Date(job.deadline).toLocaleDateString()}
                                            </div>
                                            <Link href={`/jobs/${job.id}`}>
                                                <Button className="bg-blue-600 hover:bg-blue-700">
                                                    Apply Now
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* No Results */}
                {filteredJobs.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-500 mb-4">
                            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                        <p className="text-gray-600 mb-4">
                            Try adjusting your search criteria or check back later for new opportunities.
                        </p>
                        <Button 
                            variant="outline" 
                            onClick={() => {
                                setSearchTerm("");
                                setFilterType("all");
                                setFilterLocation("all");
                            }}
                        >
                            Clear filters
                        </Button>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Don't see the right opportunity?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Join our talent pool to be notified when new positions become available.
                    </p>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        Join Talent Pool
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default JobListingPage;
