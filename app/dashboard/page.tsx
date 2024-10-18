"use client";
import AlertComp from "@/components/alert";
import StatCardGroup from "@/components/stat-card-group/Cardgroup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useUser } from "@clerk/nextjs";
import {
  Bell,
  Book,
  GitBranch,
  GitPullRequest,
  Package,
  Plus,
  Search,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="min-h-screen  max-w-7xl mx-auto">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4 text-white ">
            {user?.emailAddresses[0].emailAddress}
          </h1>
          <StatCardGroup />
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-white">
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <GitPullRequest className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <p className="font-medium">Pull request merged</p>
                  <p className="text-sm text-gray-500">
                    react-awesome-component: Add new Button component
                  </p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <GitBranch className="h-6 w-6 text-purple-500 mt-1" />
                <div>
                  <p className="font-medium">New branch created</p>
                  <p className="text-sm text-gray-500">
                    node-data-processor: feature/async-processing
                  </p>
                  <p className="text-xs text-gray-400">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Star className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <p className="font-medium">Package starred</p>
                  <p className="text-sm text-gray-500">
                    vue-state-manager received a new star
                  </p>
                  <p className="text-xs text-gray-400">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Documentation</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Book className="h-4 w-4 mr-2" />
                    Getting started with package publishing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Book className="h-4 w-4 mr-2" />
                    Best practices for package management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Book className="h-4 w-4 mr-2" />
                    Security guidelines for package developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Book className="h-4 w-4 mr-2" />
                    API documentation for package integration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
