"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from "@/components/ui/dialog";
import Link from "next/link";
import { FiPlus, FiSearch, FiExternalLink, FiCopy, FiEdit, FiTrash2 } from "react-icons/fi";
import { MdOutlineWork, MdOutlinePeople, MdOutlineVisibility } from "react-icons/md";
import { JobPost } from "@/types";

const JobPostsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);

    // Mock data - in real app, this would come from API
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
            createdBy: "Zaman Sheikh",
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
            createdBy: "Zaman Sheikh",
            applicationsCount: 15,
            shareableLink: "https://workstationflowx.com/jobs/JOB-002"
        },
        {
            id: "JOB-003",
            title: "DevOps Engineer",
            department: "Operations",
            location: "Hybrid",
            type: "full-time",
            experience: "4-6 years",
            salary: "$80,000 - $100,000",
            description: "DevOps engineer needed to manage cloud infrastructure...",
            requirements: ["4+ years DevOps experience", "AWS/Azure knowledge", "Docker/Kubernetes"],
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
            benefits: ["Health Insurance", "Stock Options", "Professional Development"],
            deadline: "2024-02-10",
            status: "closed",
            createdAt: "2024-01-05",
            updatedAt: "2024-01-20",
            createdBy: "Zaman Sheikh",
            applicationsCount: 8,
            shareableLink: "https://workstationflowx.com/jobs/JOB-003"
        }
    ];

    const filteredJobs = jobPosts.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || job.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800';
            case 'closed': return 'bg-red-100 text-red-800';
            case 'draft': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
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

    const copyShareableLink = (link: string) => {
        navigator.clipboard.writeText(link);
        // You can add a toast notification here
        alert("Link copied to clipboard!");
    };

    const handleDeleteJob = (jobId: string) => {
        if (confirm("Are you sure you want to delete this job post?")) {
            // Handle delete logic here
            console.log("Deleting job:", jobId);
        }
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Job Posts</h1>
                    <p className="text-gray-600">Manage your job postings and track applications</p>
                </div>
                <Link href="/create-job-post">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                        <FiPlus className="mr-2 h-4 w-4" />
                        Create Job Post
                    </Button>
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                        <MdOutlineWork className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{jobPosts.filter(j => j.status === 'active').length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                        <MdOutlinePeople className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{jobPosts.reduce((sum, job) => sum + job.applicationsCount, 0)}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Closed Jobs</CardTitle>
                        <MdOutlineWork className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{jobPosts.filter(j => j.status === 'closed').length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Draft Jobs</CardTitle>
                        <MdOutlineWork className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{jobPosts.filter(j => j.status === 'draft').length}</div>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
                <div className="relative flex-1 max-w-md">
                    <FiSearch className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search jobs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border rounded-md bg-white"
                >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="closed">Closed</option>
                    <option value="draft">Draft</option>
                </select>
            </div>

            {/* Job Posts Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Job Posts ({filteredJobs.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Job Title</TableHead>
                                <TableHead>Department</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Applications</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Deadline</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredJobs.map((job) => (
                                <TableRow key={job.id}>
                                    <TableCell>
                                        <div>
                                            <div className="font-medium">{job.title}</div>
                                            <div className="text-sm text-gray-500">{job.location}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{job.department}</TableCell>
                                    <TableCell>
                                        <Badge className={getTypeColor(job.type)}>
                                            {job.type}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/job-applicants?jobId=${job.id}`} className="text-blue-600 hover:underline">
                                            {job.applicationsCount} applicants
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Badge className={getStatusColor(job.status)}>
                                            {job.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{job.deadline}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        onClick={() => setSelectedJob(job)}
                                                    >
                                                        <MdOutlineVisibility className="h-4 w-4" />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-2xl">
                                                    <DialogHeader className="">
                                                        <DialogTitle className="">Job Details</DialogTitle>
                                                    </DialogHeader>
                                                    {selectedJob && (
                                                        <div className="space-y-4">
                                                            <div>
                                                                <h3 className="font-semibold">{selectedJob.title}</h3>
                                                                <p className="text-sm text-gray-600">{selectedJob.department} • {selectedJob.location}</p>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div>
                                                                    <p className="text-sm font-medium">Type</p>
                                                                    <Badge className={getTypeColor(selectedJob.type)}>
                                                                        {selectedJob.type}
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-medium">Experience</p>
                                                                    <p className="text-sm">{selectedJob.experience}</p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-medium">Salary</p>
                                                                    <p className="text-sm">{selectedJob.salary}</p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-medium">Deadline</p>
                                                                    <p className="text-sm">{selectedJob.deadline}</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-medium mb-2">Shareable Link</p>
                                                                <div className="flex gap-2">
                                                                    <Input 
                                                                        value={selectedJob.shareableLink} 
                                                                        readOnly 
                                                                        className="flex-1"
                                                                    />
                                                                    <Button 
                                                                        variant="outline" 
                                                                        size="sm"
                                                                        onClick={() => copyShareableLink(selectedJob.shareableLink)}
                                                                    >
                                                                        <FiCopy className="h-4 w-4" />
                                                                    </Button>
                                                                    <Button 
                                                                        variant="outline" 
                                                                        size="sm"
                                                                        onClick={() => window.open(selectedJob.shareableLink, '_blank')}
                                                                    >
                                                                        <FiExternalLink className="h-4 w-4" />
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </DialogContent>
                                            </Dialog>
                                            <Button 
                                                variant="ghost" 
                                                size="sm"
                                                onClick={() => copyShareableLink(job.shareableLink)}
                                            >
                                                <FiCopy className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                                <FiEdit className="h-4 w-4" />
                                            </Button>
                                            <Button 
                                                variant="ghost" 
                                                size="sm"
                                                onClick={() => handleDeleteJob(job.id)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <FiTrash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default JobPostsPage;
