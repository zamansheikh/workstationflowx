"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FiUpload, FiExternalLink, FiMapPin, FiClock, FiDollarSign, FiUsers } from "react-icons/fi";
import { JobPost } from "@/types";

const PublicJobApplicationPage = () => {
    const params = useParams();
    const jobId = params.jobId as string;
    
    const [formData, setFormData] = useState({
        applicantName: "",
        applicantEmail: "",
        applicantPhone: "",
        experience: "",
        education: "",
        coverLetter: "",
        portfolio: "",
        linkedIn: "",
        github: "",
        skills: [] as string[],
        resume: null as File | null
    });

    const [newSkill, setNewSkill] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Mock job data - in real app, this would come from API based on jobId
    const jobPost: JobPost = {
        id: jobId,
        title: "Senior React Developer",
        department: "Engineering",
        location: "Remote",
        type: "full-time",
        experience: "3-5 years",
        salary: "$70,000 - $90,000",
        description: "We are looking for a senior React developer to join our team and help build amazing user interfaces. You will be working on cutting-edge projects with modern technologies and collaborate with a talented team of developers and designers.",
        requirements: [
            "3+ years of experience with React and JavaScript",
            "Strong knowledge of TypeScript",
            "Experience with Next.js framework",
            "Understanding of modern CSS frameworks (Tailwind CSS preferred)",
            "Experience with version control (Git)",
            "Good understanding of RESTful APIs",
            "Strong problem-solving skills",
            "Excellent communication skills"
        ],
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "Git"],
        benefits: [
            "Competitive salary",
            "Health insurance",
            "Remote work flexibility",
            "Professional development budget",
            "Flexible working hours",
            "Modern development tools",
            "Collaborative team environment"
        ],
        deadline: "2024-02-15",
        status: "active",
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15",
        createdBy: "Zaman Sheikh",
        applicationsCount: 23,
        shareableLink: `https://workstationflowx.com/jobs/${jobId}`
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const addSkill = () => {
        if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
            setFormData(prev => ({
                ...prev,
                skills: [...prev.skills, newSkill.trim()]
            }));
            setNewSkill("");
        }
    };

    const removeSkill = (skillToRemove: string) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill !== skillToRemove)
        }));
    };

    const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFormData(prev => ({ ...prev, resume: file }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            console.log("Application submitted:", formData);
            alert("Application submitted successfully! We'll get back to you soon.");
            
            // Reset form
            setFormData({
                applicantName: "",
                applicantEmail: "",
                applicantPhone: "",
                experience: "",
                education: "",
                coverLetter: "",
                portfolio: "",
                linkedIn: "",
                github: "",
                skills: [],
                resume: null
            });
            
        } catch (error) {
            alert("Error submitting application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                    <Badge className={getTypeColor(jobPost.type)}>
                                        {jobPost.type}
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl">{jobPost.title}</CardTitle>
                                <p className="text-gray-600">{jobPost.department}</p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <FiMapPin className="h-4 w-4 text-gray-500" />
                                        <span>{jobPost.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <FiClock className="h-4 w-4 text-gray-500" />
                                        <span>{jobPost.experience} experience</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <FiDollarSign className="h-4 w-4 text-gray-500" />
                                        <span>{jobPost.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <FiUsers className="h-4 w-4 text-gray-500" />
                                        <span>{jobPost.applicationsCount} applications</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t">
                                    <h4 className="font-medium mb-2">Apply by</h4>
                                    <p className="text-sm text-red-600">
                                        {new Date(jobPost.deadline).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>

                                <div className="pt-4 border-t">
                                    <h4 className="font-medium mb-2">Required Skills</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {jobPost.skills.map((skill, index) => (
                                            <Badge key={index} variant="outline" className="text-xs">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Application Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Apply for this position</CardTitle>
                                <p className="text-gray-600">
                                    Fill out the form below to apply for this position. All fields marked with * are required.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Personal Information</h3>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="applicantName">Full Name *</Label>
                                                <Input
                                                    id="applicantName"
                                                    placeholder="Enter your full name"
                                                    value={formData.applicantName}
                                                    onChange={(e) => handleInputChange('applicantName', e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="applicantEmail">Email Address *</Label>
                                                <Input
                                                    id="applicantEmail"
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    value={formData.applicantEmail}
                                                    onChange={(e) => handleInputChange('applicantEmail', e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="applicantPhone">Phone Number *</Label>
                                                <Input
                                                    id="applicantPhone"
                                                    placeholder="Enter your phone number"
                                                    value={formData.applicantPhone}
                                                    onChange={(e) => handleInputChange('applicantPhone', e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="experience">Years of Experience *</Label>
                                                <Input
                                                    id="experience"
                                                    placeholder="e.g., 3 years"
                                                    value={formData.experience}
                                                    onChange={(e) => handleInputChange('experience', e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="education">Education *</Label>
                                            <Input
                                                id="education"
                                                placeholder="e.g., Bachelor's in Computer Science"
                                                value={formData.education}
                                                onChange={(e) => handleInputChange('education', e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Skills</h3>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="Add a skill..."
                                                value={newSkill}
                                                onChange={(e) => setNewSkill(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                                            />
                                            <Button type="button" onClick={addSkill} variant="outline">
                                                Add
                                            </Button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.skills.map((skill, index) => (
                                                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                                                    {skill}
                                                    <button 
                                                        type="button"
                                                        onClick={() => removeSkill(skill)}
                                                        className="ml-1 hover:text-red-500"
                                                    >
                                                        ×
                                                    </button>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Resume Upload */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Resume *</h3>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                            <div className="text-center">
                                                <FiUpload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                                <div className="text-sm text-gray-600">
                                                    <label htmlFor="resume" className="cursor-pointer">
                                                        <span className="text-blue-600 hover:underline">Upload your resume</span>
                                                        <input
                                                            id="resume"
                                                            type="file"
                                                            accept=".pdf,.doc,.docx"
                                                            onChange={handleResumeUpload}
                                                            className="sr-only"
                                                            required
                                                        />
                                                    </label>
                                                    <p className="mt-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                                                {formData.resume && (
                                                    <p className="mt-2 text-sm text-green-600">
                                                        ✓ {formData.resume.name}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cover Letter */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Cover Letter *</h3>
                                        <textarea
                                            className="w-full p-3 border rounded-md min-h-[120px] resize-none"
                                            placeholder="Tell us why you're interested in this position and how your skills match our requirements..."
                                            value={formData.coverLetter}
                                            onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Optional Links */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Links (Optional)</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="portfolio">Portfolio Website</Label>
                                                <Input
                                                    id="portfolio"
                                                    placeholder="https://yourportfolio.com"
                                                    value={formData.portfolio}
                                                    onChange={(e) => handleInputChange('portfolio', e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                                                <Input
                                                    id="linkedIn"
                                                    placeholder="https://linkedin.com/in/yourprofile"
                                                    value={formData.linkedIn}
                                                    onChange={(e) => handleInputChange('linkedIn', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="github">GitHub Profile</Label>
                                            <Input
                                                id="github"
                                                placeholder="https://github.com/yourusername"
                                                value={formData.github}
                                                onChange={(e) => handleInputChange('github', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-6">
                                        <Button 
                                            type="submit" 
                                            className="w-full bg-blue-600 hover:bg-blue-700" 
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Job Details */}
                        <Card className="mt-6">
                            <CardHeader>
                                <CardTitle>About this role</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-medium mb-2">Job Description</h4>
                                    <p className="text-gray-600">{jobPost.description}</p>
                                </div>

                                <div>
                                    <h4 className="font-medium mb-2">Requirements</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                                        {jobPost.requirements.map((req, index) => (
                                            <li key={index}>{req}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium mb-2">Benefits</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                                        {jobPost.benefits.map((benefit, index) => (
                                            <li key={index}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicJobApplicationPage;
