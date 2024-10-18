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
import { useQuery } from "@tanstack/react-query";
import { getAllPackages } from "@/lib/api";

interface PackageType {
  id: string;
  packageName: string;
  userId: string;
  packageId: string;
  passKey: string;
  description?: string; // Assuming these properties may exist
  version?: string; // Adjust according to your API response
  lastUpdated?: string; // Adjust according to your API response
}

const AllPackages: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allPackages"],
    queryFn: getAllPackages,
  });

  console.log("data is coming:", data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  if (data?.packages.length <= 0) {
    return (
      <div className="text-white text-center space-y-10 mt-4">
        <h1>No packages found. Please push your first package using meow-cli.</h1>
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
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.packages.map((pack: PackageType) => (
            <TableRow className="hover:bg-transparent cursor-pointer" key={pack.id}>
              <TableCell className="font-medium">{pack.packageName}</TableCell>
              <TableCell>{pack.description || "No description available"}</TableCell>
              <TableCell>{pack.version || "N/A"}</TableCell>
              <TableCell>{pack.lastUpdated || "N/A"}</TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="ghost">
                  <Star className="h-4 w-4 mr-2" />
                  Star
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-center">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  );
};

export default AllPackages;
