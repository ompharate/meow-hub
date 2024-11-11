"use client";
import React from "react";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPackages } from "@/lib/api";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const AllPackages: React.FC = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["allPackages", user?.id],
    queryFn: () => getAllPackages(user?.id),
  });

  const starPackageCreateMutation = useMutation({
    mutationFn: async ({
      packageId,
      userId,
    }: {
      packageId: string;
      userId: any;
    }) => {
      await fetch("/api/user/star/create", {
        method: "POST",
        body: JSON.stringify({ packageId, userId }),
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allPackages", user?.id],
      });
    },
  });
  const starPackageRemoveMutation = useMutation({
    mutationFn: async ({
      packageId,
      userId,
    }: {
      packageId: string;
      userId: any;
    }) => {
      alert(packageId)
      await fetch("/api/user/star/remove", {
        method: "POST",
        body: JSON.stringify({ packageId, userId }),
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allPackages", user?.id],
      });
    },
  });

  console.log("data is coming:", data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (data && data?.packages.length <= 0) {
    return (
      <div className="text-white text-center space-y-10 mt-4">
        <h1>
          No packages found. Please push your first package using meow-cli.
        </h1>
        <Button size="sm" variant={"secondary"}>
          Learn more
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white">All Packages</h1>
      <Table className="text-white">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Package Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.packages?.map((pack: any) => (
            <TableRow
              className="hover:bg-transparent cursor-pointer"
              key={pack.id}
            >
              <TableCell className="font-medium">
                <Link href={`/dashboard/packages/${pack.id}`}>
                  {pack.packageName}
                </Link>
              </TableCell>
              <TableCell>
                {pack.description || "No description available"}
              </TableCell>
              <TableCell>{pack.version || "N/A"}</TableCell>
              <TableCell>{pack?.packageDetails?.createdAt || "N/A"}</TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => {
                    pack.isStarted
                      ? starPackageRemoveMutation.mutate({
                          packageId: pack.id,
                          userId: user?.id,
                        })
                      : starPackageCreateMutation.mutate({
                          packageId: pack.id,
                          userId: user?.id,
                        });
                  }}
                  size="sm"
                  variant={pack.isStarted ? "secondary" : "ghost"}
                >
                  <Star className="h-4 w-4 mr-2" />
                  Star
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllPackages;
