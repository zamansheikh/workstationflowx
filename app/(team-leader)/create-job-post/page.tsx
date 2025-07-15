"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FiPlus, FiX, FiSave, FiEye } from "react-icons/fi";
import { JobPost } from "@/types";

const CreateJobPostPage = () => {
    const router = useRouter();
    const [jobData, setJobData] = useState<Partial<JobPost>>({
        title: "",
        department: "",
        location: "",
        type: "full-time",
        experience: "",
        salary: "",
        description: "",
        requirements: [],
        skills: [],
        benefits: [],
        deadline: "",
        status: "draft"
    });

    const [newRequirement, setNewRequirement] = useState("");
    const [newSkill, setNewSkill] = useState("");
    const [newBenefit, setNewBenefit] = useState("");

    const handleInputChange = (field: keyof JobPost, value: string) => {
        setJobData(prev => ({ ...prev, [field]: value }));
    };

    const addRequirement = () => {
        if (newRequirement.trim()) {
            setJobData(prev => ({
                ...prev,
                requirements: [...(prev.requirements || []), newRequirement.trim()]
            }));
            setNewRequirement("");
        }
    };

    const removeRequirement = (index: number) => {
        setJobData(prev => ({
            ...prev,
            requirements: prev.requirements?.filter((_, i) => i !== index) || []
        }));
    };

    const addSkill = () => {
        if (newSkill.trim()) {
            setJobData(prev => ({
                ...prev,
                skills: [...(prev.skills || []), newSkill.trim()]
            }));
            setNewSkill("");
        }
    };

    const removeSkill = (index: number) => {
        setJobData(prev => ({
            ...prev,
            skills: prev.skills?.filter((_, i) => i !== index) || []
        }));
    };

    const addBenefit = () => {
        if (newBenefit.trim()) {
            setJobData(prev => ({
                ...prev,
                benefits: [...(prev.benefits || []), newBenefit.trim()]
            }));
            setNewBenefit("");
        }
    };

    const removeBenefit = (index: number) => {
        setJobData(prev => ({
            ...prev,
            benefits: prev.benefits?.filter((_, i) => i !== index) || []
        }));
    };

    const handleSubmit = (status: 'draft' | 'active') => {
        const newJob: JobPost = {
            ...jobData,
            id: `JOB-${Date.now()}`,
            status,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            createdBy: "Zaman Sheikh", // This would come from auth context
            applicationsCount: 0,
            shareableLink: `https://workstationflowx.com/jobs/JOB-${Date.now()}`
        } as JobPost;

        console.log("Creating job post:", newJob);
        // Here you would typically send this to your API
        
        if (status === 'active') {
            alert("Job post published successfully!");
        } else {
            alert("Job post saved as draft!");
        }
        
        router.push('/job-posts');
    };

    const previewJob = () => {
        // Generate preview link
        const previewData = encodeURIComponent(JSON.stringify(jobData));
        window.open(`/job-preview?data=${previewData}`, '_blank');
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Create Job Post</h1>
                    <p className="text-gray-600">Create a new job posting for your team</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={previewJob}>
                        <FiEye className="mr-2 h-4 w-4" />
                        Preview
                    </Button>
                    <Button variant="outline" onClick={() => handleSubmit('draft')}>
                        <FiSave className="mr-2 h-4 w-4" />
                        Save Draft
                    </Button>
                    <Button 
                        className="bg-purple-600 hover:bg-purple-700"
                        onClick={() => handleSubmit('active')}
                    >
                        Publish Job
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Form */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Basic Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="title">Job Title *</Label>
                                    <Input
                                        id="title"
                                        placeholder="e.g., Senior React Developer"
                                        value={jobData.title}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="department">Department *</Label>
                                    <Input
                                        id="department"
                                        placeholder="e.g., Engineering"
                                        value={jobData.department}
                                        onChange={(e) => handleInputChange('department', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <Label htmlFor="location">Location *</Label>
                                    <Input
                                        id="location"
                                        placeholder="e.g., Remote, Dhaka"
                                        value={jobData.location}
                                        onChange={(e) => handleInputChange('location', e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="type">Job Type *</Label>
                                    <Select 
                                        value={jobData.type} 
                                        onValueChange={(value: 'full-time' | 'part-time' | 'contract' | 'internship') => 
                                            handleInputChange('type', value)
                                        }
                                    >
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent className="">
                                            <SelectItem value="full-time">Full-time</SelectItem>
                                            <SelectItem value="part-time">Part-time</SelectItem>
                                            <SelectItem value="contract">Contract</SelectItem>
                                            <SelectItem value="internship">Internship</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="experience">Experience Level *</Label>
                                    <Input
                                        id="experience"
                                        placeholder="e.g., 3-5 years"
                                        value={jobData.experience}
                                        onChange={(e) => handleInputChange('experience', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="salary">Salary Range</Label>
                                    <Input
                                        id="salary"
                                        placeholder="e.g., $70,000 - $90,000"
                                        value={jobData.salary}
                                        onChange={(e) => handleInputChange('salary', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="deadline">Application Deadline *</Label>
                                    <Input
                                        id="deadline"
                                        type="date"
                                        value={jobData.deadline}
                                        onChange={(e) => handleInputChange('deadline', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="description">Job Description *</Label>
                                <textarea
                                    id="description"
                                    className="w-full p-3 border rounded-md min-h-[120px] resize-none"
                                    placeholder="Provide a detailed description of the role, responsibilities, and what the candidate will be doing..."
                                    value={jobData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    required
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Requirements */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Requirements</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Add a requirement..."
                                    value={newRequirement}
                                    onChange={(e) => setNewRequirement(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addRequirement()}
                                />
                                <Button onClick={addRequirement} variant="outline">
                                    <FiPlus className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {jobData.requirements?.map((req, index) => (
                                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                                        {req}
                                        <FiX 
                                            className="h-3 w-3 cursor-pointer hover:text-red-500" 
                                            onClick={() => removeRequirement(index)}
                                        />
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Skills */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Required Skills</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Add a skill..."
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                                />
                                <Button onClick={addSkill} variant="outline">
                                    <FiPlus className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {jobData.skills?.map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                                        {skill}
                                        <FiX 
                                            className="h-3 w-3 cursor-pointer hover:text-red-500" 
                                            onClick={() => removeSkill(index)}
                                        />
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Benefits */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Benefits & Perks</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Add a benefit..."
                                    value={newBenefit}
                                    onChange={(e) => setNewBenefit(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addBenefit()}
                                />
                                <Button onClick={addBenefit} variant="outline">
                                    <FiPlus className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {jobData.benefits?.map((benefit, index) => (
                                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                                        {benefit}
                                        <FiX 
                                            className="h-3 w-3 cursor-pointer hover:text-red-500" 
                                            onClick={() => removeBenefit(index)}
                                        />
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Preview Sidebar */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-6">
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">{jobData.title || "Job Title"}</h3>
                                <p className="text-sm text-gray-600">{jobData.department || "Department"} • {jobData.location || "Location"}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <span className="font-medium">Type:</span>
                                    <br />
                                    {jobData.type || "Not specified"}
                                </div>
                                <div>
                                    <span className="font-medium">Experience:</span>
                                    <br />
                                    {jobData.experience || "Not specified"}
                                </div>
                            </div>

                            {jobData.salary && (
                                <div className="text-sm">
                                    <span className="font-medium">Salary:</span>
                                    <br />
                                    {jobData.salary}
                                </div>
                            )}

                            {jobData.deadline && (
                                <div className="text-sm">
                                    <span className="font-medium">Deadline:</span>
                                    <br />
                                    {jobData.deadline}
                                </div>
                            )}

                            {jobData.skills && jobData.skills.length > 0 && (
                                <div className="text-sm">
                                    <span className="font-medium">Skills:</span>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {jobData.skills.slice(0, 3).map((skill, index) => (
                                            <Badge key={index} variant="outline" className="text-xs">
                                                {skill}
                                            </Badge>
                                        ))}
                                        {jobData.skills.length > 3 && (
                                            <Badge variant="outline" className="text-xs">
                                                +{jobData.skills.length - 3} more
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className="text-xs text-gray-500 pt-2 border-t">
                                Once published, this job will be available at:
                                <br />
                                <span className="font-mono">workstationflowx.com/jobs/[ID]</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CreateJobPostPage;
