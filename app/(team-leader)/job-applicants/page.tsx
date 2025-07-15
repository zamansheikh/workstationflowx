"use client";

import { useState, useEffect } from "react";
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
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiSearch, FiDownload, FiExternalLink, FiStar, FiMessageSquare } from "react-icons/fi";
import { MdOutlinePeople, MdOutlineCheck, MdOutlineClose } from "react-icons/md";
import { JobApplication } from "@/types";
import { useSearchParams } from "next/navigation";

const JobApplicantsPage = () => {
    const searchParams = useSearchParams();
    const jobId = searchParams.get('jobId');
    
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [filterExperience, setFilterExperience] = useState<string>("all");
    const [filterScore, setFilterScore] = useState<string>("all");
    const [selectedApplicant, setSelectedApplicant] = useState<JobApplication | null>(null);

    // Mock data - in real app, this would come from API
    const applicants: JobApplication[] = [
        {
            id: "APP-001",
            jobPostId: "JOB-001",
            applicantName: "Sarah Johnson",
            applicantEmail: "sarah.johnson@email.com",
            applicantPhone: "+880 1234 567890",
            resume: "https://example.com/resume-sarah.pdf",
            coverLetter: "I am excited to apply for the Senior React Developer position...",
            experience: "4 years",
            education: "Bachelor's in Computer Science",
            skills: ["React", "TypeScript", "Next.js", "Node.js"],
            portfolio: "https://sarahjohnson.dev",
            linkedIn: "https://linkedin.com/in/sarahjohnson",
            github: "https://github.com/sarahjohnson",
            status: "pending",
            appliedAt: "2024-01-16T10:30:00Z",
            score: 85
        },
        {
            id: "APP-002",
            jobPostId: "JOB-001",
            applicantName: "Michael Chen",
            applicantEmail: "michael.chen@email.com",
            applicantPhone: "+880 1234 567891",
            resume: "https://example.com/resume-michael.pdf",
            coverLetter: "With 5 years of experience in React development...",
            experience: "5 years",
            education: "Master's in Software Engineering",
            skills: ["React", "TypeScript", "GraphQL", "AWS"],
            portfolio: "https://michaelchen.dev",
            linkedIn: "https://linkedin.com/in/michaelchen",
            github: "https://github.com/michaelchen",
            status: "shortlisted",
            appliedAt: "2024-01-17T14:20:00Z",
            reviewedAt: "2024-01-18T09:15:00Z",
            score: 92,
            notes: "Excellent technical skills, strong portfolio"
        },
        {
            id: "APP-003",
            jobPostId: "JOB-001",
            applicantName: "Emily Rodriguez",
            applicantEmail: "emily.rodriguez@email.com",
            applicantPhone: "+880 1234 567892",
            resume: "https://example.com/resume-emily.pdf",
            coverLetter: "I am passionate about creating user-friendly interfaces...",
            experience: "3 years",
            education: "Bachelor's in Computer Science",
            skills: ["React", "JavaScript", "CSS", "HTML"],
            portfolio: "https://emilyrodriguez.dev",
            linkedIn: "https://linkedin.com/in/emilyrodriguez",
            status: "reviewed",
            appliedAt: "2024-01-18T11:45:00Z",
            reviewedAt: "2024-01-19T16:30:00Z",
            score: 78,
            notes: "Good skills but needs more experience with TypeScript"
        },
        {
            id: "APP-004",
            jobPostId: "JOB-001",
            applicantName: "David Kim",
            applicantEmail: "david.kim@email.com",
            applicantPhone: "+880 1234 567893",
            resume: "https://example.com/resume-david.pdf",
            coverLetter: "As a senior developer with extensive React experience...",
            experience: "6 years",
            education: "Bachelor's in Information Technology",
            skills: ["React", "TypeScript", "Next.js", "Redux", "MongoDB"],
            portfolio: "https://davidkim.dev",
            linkedIn: "https://linkedin.com/in/davidkim",
            github: "https://github.com/davidkim",
            status: "rejected",
            appliedAt: "2024-01-19T08:15:00Z",
            reviewedAt: "2024-01-20T12:00:00Z",
            score: 65,
            notes: "Overqualified for the position"
        }
    ];

    const filteredApplicants = applicants.filter(applicant => {
        const matchesSearch = applicant.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            applicant.applicantEmail.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || applicant.status === filterStatus;
        const matchesExperience = filterExperience === "all" || 
                                (filterExperience === "junior" && parseInt(applicant.experience) <= 2) ||
                                (filterExperience === "mid" && parseInt(applicant.experience) >= 3 && parseInt(applicant.experience) <= 5) ||
                                (filterExperience === "senior" && parseInt(applicant.experience) > 5);
        const matchesScore = filterScore === "all" ||
                           (filterScore === "high" && (applicant.score || 0) >= 80) ||
                           (filterScore === "medium" && (applicant.score || 0) >= 60 && (applicant.score || 0) < 80) ||
                           (filterScore === "low" && (applicant.score || 0) < 60);
        
        return matchesSearch && matchesStatus && matchesExperience && matchesScore;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'reviewed': return 'bg-blue-100 text-blue-800';
            case 'shortlisted': return 'bg-green-100 text-green-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            case 'hired': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-600';
        if (score >= 60) return 'text-yellow-600';
        return 'text-red-600';
    };

    const updateApplicantStatus = (applicantId: string, newStatus: string) => {
        console.log(`Updating applicant ${applicantId} status to ${newStatus}`);
        // Here you would typically make an API call to update the status
        alert(`Applicant status updated to ${newStatus}`);
    };

    const addNotes = (applicantId: string, notes: string) => {
        console.log(`Adding notes to applicant ${applicantId}: ${notes}`);
        // Here you would typically make an API call to save the notes
        alert("Notes saved successfully!");
    };

    const statusCounts = {
        pending: applicants.filter(a => a.status === 'pending').length,
        reviewed: applicants.filter(a => a.status === 'reviewed').length,
        shortlisted: applicants.filter(a => a.status === 'shortlisted').length,
        rejected: applicants.filter(a => a.status === 'rejected').length,
        hired: applicants.filter(a => a.status === 'hired').length
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Job Applicants</h1>
                    <p className="text-gray-600">Review and manage job applications</p>
                </div>
                <Button variant="outline">
                    <FiDownload className="mr-2 h-4 w-4" />
                    Export Applications
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                        <MdOutlinePeople className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{applicants.length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending</CardTitle>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statusCounts.pending}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Reviewed</CardTitle>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statusCounts.reviewed}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Shortlisted</CardTitle>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statusCounts.shortlisted}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Hired</CardTitle>
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{statusCounts.hired}</div>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center flex-wrap">
                <div className="relative flex-1 max-w-md">
                    <FiSearch className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search applicants..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent className="">
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="reviewed">Reviewed</SelectItem>
                        <SelectItem value="shortlisted">Shortlisted</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                        <SelectItem value="hired">Hired</SelectItem>
                    </SelectContent>
                </Select>
                <Select value={filterExperience} onValueChange={setFilterExperience}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by experience" />
                    </SelectTrigger>
                    <SelectContent className="">
                        <SelectItem value="all">All Experience</SelectItem>
                        <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior (5+ years)</SelectItem>
                    </SelectContent>
                </Select>
                <Select value={filterScore} onValueChange={setFilterScore}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by score" />
                    </SelectTrigger>
                    <SelectContent className="">
                        <SelectItem value="all">All Scores</SelectItem>
                        <SelectItem value="high">High (80+)</SelectItem>
                        <SelectItem value="medium">Medium (60-79)</SelectItem>
                        <SelectItem value="low">Low (&lt;60)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Applicants Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Applications ({filteredApplicants.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Applicant</TableHead>
                                <TableHead>Experience</TableHead>
                                <TableHead>Score</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Applied Date</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredApplicants.map((applicant) => (
                                <TableRow key={applicant.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={`https://ui-avatars.com/api/?name=${applicant.applicantName}&background=random`} />
                                                <AvatarFallback>{applicant.applicantName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-medium">{applicant.applicantName}</div>
                                                <div className="text-sm text-gray-500">{applicant.applicantEmail}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{applicant.experience}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1">
                                            <FiStar className="h-4 w-4 text-yellow-500" />
                                            <span className={`font-medium ${getScoreColor(applicant.score || 0)}`}>
                                                {applicant.score || 'N/A'}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge className={getStatusColor(applicant.status)}>
                                            {applicant.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {new Date(applicant.appliedAt).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button 
                                                        variant="outline" 
                                                        size="sm"
                                                        onClick={() => setSelectedApplicant(applicant)}
                                                    >
                                                        View
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                                                    <DialogHeader className="">
                                                        <DialogTitle className="">Applicant Details</DialogTitle>
                                                    </DialogHeader>
                                                    {selectedApplicant && (
                                                        <div className="space-y-6">
                                                            {/* Basic Info */}
                                                            <div className="flex items-center gap-4">
                                                                <Avatar className="h-16 w-16">
                                                                    <AvatarImage src={`https://ui-avatars.com/api/?name=${selectedApplicant.applicantName}&background=random`} />
                                                                    <AvatarFallback>{selectedApplicant.applicantName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                                                </Avatar>
                                                                <div className="flex-1">
                                                                    <h3 className="text-xl font-semibold">{selectedApplicant.applicantName}</h3>
                                                                    <p className="text-gray-600">{selectedApplicant.applicantEmail}</p>
                                                                    <p className="text-gray-600">{selectedApplicant.applicantPhone}</p>
                                                                </div>
                                                                <div className="text-right">
                                                                    <Badge className={getStatusColor(selectedApplicant.status)}>
                                                                        {selectedApplicant.status}
                                                                    </Badge>
                                                                    <div className="mt-2 flex items-center gap-1">
                                                                        <FiStar className="h-4 w-4 text-yellow-500" />
                                                                        <span className={`font-medium ${getScoreColor(selectedApplicant.score || 0)}`}>
                                                                            {selectedApplicant.score || 'N/A'}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Experience & Education */}
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div>
                                                                    <h4 className="font-medium mb-2">Experience</h4>
                                                                    <p className="text-sm text-gray-600">{selectedApplicant.experience}</p>
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-medium mb-2">Education</h4>
                                                                    <p className="text-sm text-gray-600">{selectedApplicant.education}</p>
                                                                </div>
                                                            </div>

                                                            {/* Skills */}
                                                            <div>
                                                                <h4 className="font-medium mb-2">Skills</h4>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {selectedApplicant.skills.map((skill, index) => (
                                                                        <Badge key={index} variant="outline">
                                                                            {skill}
                                                                        </Badge>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Cover Letter */}
                                                            <div>
                                                                <h4 className="font-medium mb-2">Cover Letter</h4>
                                                                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                                                                    {selectedApplicant.coverLetter}
                                                                </p>
                                                            </div>

                                                            {/* Links */}
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                <Button 
                                                                    variant="outline" 
                                                                    onClick={() => window.open(selectedApplicant.resume, '_blank')}
                                                                    className="w-full"
                                                                >
                                                                    <FiDownload className="mr-2 h-4 w-4" />
                                                                    Resume
                                                                </Button>
                                                                {selectedApplicant.portfolio && (
                                                                    <Button 
                                                                        variant="outline" 
                                                                        onClick={() => window.open(selectedApplicant.portfolio, '_blank')}
                                                                        className="w-full"
                                                                    >
                                                                        <FiExternalLink className="mr-2 h-4 w-4" />
                                                                        Portfolio
                                                                    </Button>
                                                                )}
                                                                {selectedApplicant.linkedIn && (
                                                                    <Button 
                                                                        variant="outline" 
                                                                        onClick={() => window.open(selectedApplicant.linkedIn, '_blank')}
                                                                        className="w-full"
                                                                    >
                                                                        <FiExternalLink className="mr-2 h-4 w-4" />
                                                                        LinkedIn
                                                                    </Button>
                                                                )}
                                                            </div>

                                                            {/* Status Update */}
                                                            <div className="border-t pt-4">
                                                                <h4 className="font-medium mb-2">Update Status</h4>
                                                                <div className="flex gap-2">
                                                                    <Button 
                                                                        size="sm" 
                                                                        variant="outline"
                                                                        onClick={() => updateApplicantStatus(selectedApplicant.id, 'reviewed')}
                                                                    >
                                                                        Mark as Reviewed
                                                                    </Button>
                                                                    <Button 
                                                                        size="sm" 
                                                                        className="bg-green-600 hover:bg-green-700"
                                                                        onClick={() => updateApplicantStatus(selectedApplicant.id, 'shortlisted')}
                                                                    >
                                                                        <MdOutlineCheck className="mr-1 h-4 w-4" />
                                                                        Shortlist
                                                                    </Button>
                                                                    <Button 
                                                                        size="sm" 
                                                                        variant="outline"
                                                                        className="border-red-300 text-red-600 hover:bg-red-50"
                                                                        onClick={() => updateApplicantStatus(selectedApplicant.id, 'rejected')}
                                                                    >
                                                                        <MdOutlineClose className="mr-1 h-4 w-4" />
                                                                        Reject
                                                                    </Button>
                                                                </div>
                                                            </div>

                                                            {/* Notes */}
                                                            <div>
                                                                <h4 className="font-medium mb-2">Notes</h4>
                                                                <textarea
                                                                    className="w-full p-3 border rounded-md"
                                                                    placeholder="Add notes about this applicant..."
                                                                    defaultValue={selectedApplicant.notes || ''}
                                                                    rows={3}
                                                                />
                                                                <Button 
                                                                    size="sm" 
                                                                    className="mt-2"
                                                                    onClick={() => {
                                                                        const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
                                                                        addNotes(selectedApplicant.id, textarea.value);
                                                                    }}
                                                                >
                                                                    <FiMessageSquare className="mr-2 h-4 w-4" />
                                                                    Save Notes
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </DialogContent>
                                            </Dialog>
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

export default JobApplicantsPage;
