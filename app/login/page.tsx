"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FiEye, FiEyeOff, FiUser, FiLock, FiArrowRight } from "react-icons/fi";
import { setAuthState, getRoleRedirectPath } from "@/utils/auth";
import Link from "next/link";

interface LoginFormData {
    email: string;
    password: string;
}

const LoginPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (error) setError("");
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                const userRole = data.data.user.role;
                
                // Store authentication data
                setAuthState(data.data.user, data.data.tokens);

                // Redirect based on role
                router.push(getRoleRedirectPath(userRole));
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (err) {
            setError('Connection error. Please check if the backend is running.');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    const getDemoCredentials = () => {
        return { email: "admin20250716000000@workstationflowx.com", password: "Admin123!" };
    };

    const fillDemoCredentials = () => {
        const demoData = getDemoCredentials();
        setFormData(prev => ({
            ...prev,
            email: demoData.email,
            password: demoData.password
        }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
            <div className="max-w-md w-full mx-4">
                <Card className="shadow-xl border-0">
                    <CardHeader className="space-y-1 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                <FiUser className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                            Sign In
                        </CardTitle>
                        <p className="text-gray-600">
                            Access your WorkstationFlowX account
                        </p>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            {/* Email Input */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email Address
                                </Label>
                                <div className="relative">
                                    <FiUser className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password
                                </Label>
                                <div className="relative">
                                    <FiLock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={(e) => handleInputChange("password", e.target.value)}
                                        className="pl-10 pr-10"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                            </div>

                            {/* Demo Credentials Button */}
                            <Button
                                type="button"
                                variant="outline"
                                onClick={fillDemoCredentials}
                                className="w-full text-sm"
                            >
                                Use Demo Credentials (Admin)
                            </Button>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                                    <p className="text-sm text-red-600">{error}</p>
                                </div>
                            )}

                            {/* Login Button */}
                            <Button
                                type="submit"
                                disabled={loading || !formData.email || !formData.password}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Signing in...
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        Sign In
                                        <FiArrowRight className="w-4 h-4" />
                                    </div>
                                )}
                            </Button>
                        </form>

                        {/* Additional Links */}
                        <div className="mt-6 text-center">
                            <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                                Forgot your password?
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
