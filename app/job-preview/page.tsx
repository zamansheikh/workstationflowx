"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FiMapPin, FiClock, FiDollarSign, FiUsers, FiArrowLeft } from "react-icons/fi";
import { JobPost } from "@/types";

const JobPreviewPage = () => {
    const searchParams = useSearchParams();
    const [jobData, setJobData] = useState<Partial<JobPost> | null>(null);

    useEffect(() => {
        const data = searchParams.get('data');
        if (data) {
            try {
                const parsedData = JSON.parse(decodeURIComponent(data));
                setJobData(parsedData);
            } catch (error) {
                console.error('Error parsing job data:', error);
            }
        }
    }, [searchParams]);

    if (!jobData) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">No job data found</h2>
                    <p className="text-gray-600">Please go back and try again.</p>
                </div>
            </div>
        );
    }

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
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <img 
                                src="/logo-black.png" 
                                alt="WorkstationFlowX" 
                                className="h-8 w-auto mr-3"
                            />
                            <h1 className="text-xl font-semibold text-gray-900">WorkstationFlowX</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary">Preview Mode</Badge>
                            <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => window.close()}
                            >
                                <FiArrowLeft className="mr-2 h-4 w-4" />
                                Back to Editor
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Job Details */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-8">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <img 
                                        src="/logo-black.png" 
                                        alt="Company Logo" 
                                        className="h-8 w-auto"
                                    />
                                    <Badge className={getTypeColor(jobData.type || '')}>
                                        {jobData.type || 'Not specified'}
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl">{jobData.title || 'Job Title'}</CardTitle>
                                <p className="text-gray-600">{jobData.department || 'Department'}</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <FiMapPin className="h-4 w-4 text-gray-500" />
                                        <span>{jobData.location || 'Location not specified'}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <FiClock className="h-4 w-4 text-gray-500" />
                                        <span>{jobData.experience || 'Experience not specified'}</span>
                                    </div>
                                    {jobData.salary && (
                                        <div className="flex items-center gap-2 text-sm">
                                            <FiDollarSign className="h-4 w-4 text-gray-500" />
                                            <span>{jobData.salary}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2 text-sm">
                                        <FiUsers className="h-4 w-4 text-gray-500" />
                                        <span>0 applications</span>
                                    </div>
                                </div>

                                {jobData.deadline && (
                                    <div className="pt-4 border-t">
                                        <h4 className="font-medium mb-2">Apply by</h4>
                                        <p className="text-sm text-red-600">
                                            {new Date(jobData.deadline).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                )}

                                {jobData.skills && jobData.skills.length > 0 && (
                                    <div className="pt-4 border-t">
                                        <h4 className="font-medium mb-2">Required Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {jobData.skills.map((skill, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="pt-4 border-t">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                        Apply Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Job Description */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>About this role</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-medium mb-2">Job Description</h4>
                                    <p className="text-gray-600">
                                        {jobData.description || 'Job description will appear here...'}
                                    </p>
                                </div>

                                {jobData.requirements && jobData.requirements.length > 0 && (
                                    <div>
                                        <h4 className="font-medium mb-2">Requirements</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                            {jobData.requirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {jobData.benefits && jobData.benefits.length > 0 && (
                                    <div>
                                        <h4 className="font-medium mb-2">Benefits & Perks</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                            {jobData.benefits.map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {!jobData.requirements?.length && !jobData.benefits?.length && (
                                    <div className="text-center py-8">
                                        <p className="text-gray-500">
                                            Add requirements and benefits to see them here in the preview.
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobPreviewPage;
