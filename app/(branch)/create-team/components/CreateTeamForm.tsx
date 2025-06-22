"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Calendar, CheckCircle } from "lucide-react";

const formSchema = z.object({
    teamName: z.string().min(1, { message: "Team name is required" }),
    teamId: z.string().min(1, { message: "Team ID is required" }),
    teamLeaderName: z.string().min(1, { message: "Team leader name is required" }),
    teamLeaderEmail: z.string().email({ message: "Invalid email address" }),
    teamLeaderPhone: z.string().min(1, { message: "Phone number is required" }),
    teamLeaderPassword: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),
    maxMembers: z.string().min(1, { message: "Max team members is required" }),
    department: z.string().min(1, { message: "Department is required" }),
    projectType: z.string().min(1, { message: "Project type is required" }),
    targetKPI: z.string().min(1, { message: "Target KPI is required" }),
});

const CreateTeamForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            teamName: "",
            teamId: "",
            teamLeaderName: "",
            teamLeaderEmail: "",
            teamLeaderPhone: "",
            teamLeaderPassword: "",
            maxMembers: "",
            department: "",
            projectType: "",
            targetKPI: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            console.log("Team Creation Data:", values);
            // Here you would typically send the data to your backend
            // await createTeam(values);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Show success message or redirect
            alert("Team created successfully!");
            form.reset();
        } catch (error) {
            console.error("Error creating team:", error);
            alert("Failed to create team. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    const departments = [
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "Mobile Development",
        "DevOps",
        "Quality Assurance",
        "UI/UX Design",
        "Data Science",
        "Machine Learning",
        "Product Management"
    ];

    const projectTypes = [
        "Web Application",
        "Mobile Application",
        "Desktop Application",
        "E-commerce Platform",
        "CRM System",
        "ERP System",
        "API Development",
        "Database Design",
        "Cloud Migration",
        "AI/ML Project"
    ];

    return (
        <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card className="border border-blue-200 bg-blue-50">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-blue-600 font-medium">Team Setup</p>
                                <p className="text-xs text-blue-500">Configure team details</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-green-200 bg-green-50">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <Target className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-green-600 font-medium">Goals</p>
                                <p className="text-xs text-green-500">Set team objectives</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-purple-200 bg-purple-50">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-purple-600 font-medium">Timeline</p>
                                <p className="text-xs text-purple-500">Project scheduling</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border border-orange-200 bg-orange-50">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-sm text-orange-600 font-medium">Launch</p>
                                <p className="text-xs text-orange-500">Ready to start</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Team Information Section */}
                    <div className="space-y-6">
                        <div className="pb-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <Users className="w-5 h-5 text-blue-600" />
                                Team Information
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">Configure basic team details and settings</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Team Name */}
                            <FormField
                                control={form.control}
                                name="teamName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Team Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="e.g., Alpha Developers"
                                                {...field}
                                                className="bg-gray-50 border-gray-200 focus:bg-white"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Team ID */}
                            <FormField
                                control={form.control}
                                name="teamId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Team ID</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="e.g., #12403"
                                                {...field}
                                                className="bg-gray-50 border-gray-200 focus:bg-white"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Department */}
                            <FormField
                                control={form.control}
                                name="department"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Department</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-gray-50 border-gray-200 focus:bg-white">
                                                    <SelectValue placeholder="Select department" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {departments.map((dept) => (
                                                    <SelectItem key={dept} value={dept}>
                                                        {dept}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Project Type */}
                            <FormField
                                control={form.control}
                                name="projectType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-gray-50 border-gray-200 focus:bg-white">
                                                    <SelectValue placeholder="Select project type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {projectTypes.map((type) => (
                                                    <SelectItem key={type} value={type}>
                                                        {type}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Max Members */}
                            <FormField
                                control={form.control}
                                name="maxMembers"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Maximum Team Members</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="e.g., 8"
                                                {...field}
                                                className="bg-gray-50 border-gray-200 focus:bg-white"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Target KPI */}
                            <FormField
                                control={form.control}
                                name="targetKPI"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Target KPI (Monthly)</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="e.g., 30000"
                                                {...field}
                                                className="bg-gray-50 border-gray-200 focus:bg-white"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Team Leader Information Section */}
                    <div className="space-y-6">
                        <div className="pb-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <Target className="w-5 h-5 text-green-600" />
                                Team Leader Information
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">Configure team leader details and credentials</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Team Leader Name */}
                            <FormField
                                control={form.control}
                                name="teamLeaderName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Team Leader Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="e.g., John Doe"
                                                {...field}
                                                className="bg-gray-50 border-gray-200 focus:bg-white"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Team Leader Email */}
                            <FormField
                                control={form.control}
                                name="teamLeaderEmail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Team Leader Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="john.doe@company.com"
                                                {...field}
                                                className="bg-gray-50 border-gray-200 focus:bg-white"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Team Leader Phone */}
                            <FormField
                                control={form.control}
                                name="teamLeaderPhone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Team Leader Phone</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="+1 (555) 123-4567"
                                                {...field}
                                                className="bg-gray-50 border-gray-200 focus:bg-white"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Team Leader Password */}
                            <FormField
                                control={form.control}
                                name="teamLeaderPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Team Leader Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Enter secure password"
                                                {...field}
                                                className="bg-gray-50 border-gray-200 focus:bg-white"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-6 border-t border-gray-200">
                        <Button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Creating Team...
                                </div>
                            ) : (
                                "Create Team"
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default CreateTeamForm;
