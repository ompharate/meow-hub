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
import { Button } from "../ui/button";
import {  useQuery, } from "@tanstack/react-query";
import {  getAllStarPackages } from "@/lib/api";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const AllStarPackages: React.FC = () => {
  const { user } = useUser();

  const { data, isLoading, error } = useQuery({
    queryKey: ["allPackages", user?.id],
    queryFn: () => getAllStarPackages(user?.id),
  });

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

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllStarPackages;
