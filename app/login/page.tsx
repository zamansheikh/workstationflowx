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
import Image from "next/image";
import logoImage from "@/public/logo-black.png";

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



    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Card className="shadow-lg">
                    <CardHeader className="space-y-1 text-center pb-6">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                                <Image
                                    src={logoImage}
                                    alt="WorkstationFlowX Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                            Welcome Back
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                            Sign in to your WorkstationFlowX account
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form onSubmit={handleLogin} className="space-y-4">
                            {/* Email Input */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                                    Email Address
                                </Label>
                                <div className="relative">
                                    <FiUser className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
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
                                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                                    Password
                                </Label>
                                <div className="relative">
                                    <FiLock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
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
                                        className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-destructive/15 border border-destructive/30 rounded-md p-3">
                                    <p className="text-sm text-destructive">{error}</p>
                                </div>
                            )}

                            {/* Login Button */}
                            <Button
                                type="submit"
                                disabled={loading || !formData.email || !formData.password}
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
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
                            <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/80">
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
