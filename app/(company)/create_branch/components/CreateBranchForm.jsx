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

const formSchema = z.object({
  companyName: z.string().min(1, { message: "Branch name is required" }),
  companyId: z.string().min(1, { message: "Branch ID is required" }),
  ownerName: z.string().min(1, { message: "Owner name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  maxBranch: z.string().min(1, { message: "Max branch is required" }),
  maxEmployee: z.string().min(1, { message: "Max employee is required" }),
});

const CreateBranchForm = () => {
    const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      branchName: "",
      branchId: "",
      managerName: "",
      email: "",
      phone: "",
      password: "",
      maxTeam: "",
      maxEmployee: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    // Handle form submission here
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Branch Name */}
          <FormField
            control={form.control}
            name="branchName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Branch Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Branch Name"
                    {...field}
                    className="bg-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Branch ID */}
          <FormField
            control={form.control}
            name="branchId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Branch ID</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ID 12345"
                    {...field}
                    className="bg-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Branch Manager Name */}
          <FormField
            control={form.control}
            name="managerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Branch Manager Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Branch Manager Name"
                    {...field}
                    className="bg-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...field}
                    className="bg-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Phone number"
                    {...field}
                    className="bg-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    {...field}
                    className="bg-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Max Team */}
          <FormField
            control={form.control}
            name="maxTeam"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Team</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Example: 3"
                    {...field}
                    className="bg-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Max Employee */}
          <FormField
            control={form.control}
            name="maxEmployee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Employee</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Example: 300"
                    {...field}
                    className="bg-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#0a3b61] hover:bg-[#0a3b61]/90 h-14 font-semibold"
        >
          Create Branch
        </Button>
      </form>
    </Form>
  );
};

export default CreateBranchForm;