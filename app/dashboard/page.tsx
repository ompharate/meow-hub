"use client";
import StatCardGroup from "@/components/stat-card-group/Cardgroup";
import { useUser } from "@clerk/nextjs";
import { Book, GitBranch, GitPullRequest, Star } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const { user } = useUser();
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
                    href="/docs/introduction"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Book className="h-4 w-4 mr-2" />
                    Introduction to meow-hub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/introduction"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Book className="h-4 w-4 mr-2" />
                    Getting started with package publishing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/introduction"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Book className="h-4 w-4 mr-2" />
                    How to push and pull packages with meow-cli
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/introduction"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Book className="h-4 w-4 mr-2" />
                    How to make private and public packages
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
