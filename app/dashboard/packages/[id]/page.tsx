"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Check,
  Copy,
  Delete,
  Download,
  DownloadCloud,
  Eye,
  GitBranch,
  History,
  Package,
  Star,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function PackageDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const handleCopy = (command: string) => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const { data, isLoading } = useQuery({
    queryKey: ["package"],
    queryFn: async () => {  
      const response = await fetch(`/api/user/packages/${params.id}`);
      const data = await response.json();
      return data.package;
    },
  });
  const [description, setDescription] = useState(data?.description);

  async function deletePackage(id: string) {
    const response = await fetch("/api/user/packages/delete?id=" + id, {
      method: "POST",
    });
    if (response.ok) {
      router.push("/dashboard/packages");
    }
  }


  if (isLoading) return <h1>Loading....</h1>;
  if (data.length === 0)
    return (
      <div className="text-white text-center space-y-10 mt-4">
        <h1 className="font-bold">Sorry User Package is Private</h1>
      </div>
    );

  const downloadPackage = (downloadLink: string) => {
    window.location.href = downloadLink;
  };

  return (
    <div className="min-h-screen  max-w-7xl mx-auto">
      <header className=" border-b border-red-500">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Package className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">{data.name}</h1>
            <Button variant="outline" size="sm">
              <Star className="mr-2 h-4 w-4" />
              Star
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 text-white">
        <div className="shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-white">
                <Calendar className="inline mr-1 h-4 w-4" />
                Last updated: {new Date(data.createdAt).toLocaleString()}
              </span>
              <span className="text-sm text-white">
                <Eye className="inline mr-1 h-4 w-4" />
                {Math.floor(Math.random() * 100)} views
              </span>
              <span className="text-sm text-white">
                <Download className="inline mr-1 h-4 w-4" />
                {Math.floor(Math.random() * 20)} downloads
              </span>
            </div>
            <div className="flex items-center space-x-2">
            
              <Button
                onClick={() => downloadPackage(data.downloadUrl)}
                className="text-black"
                variant="outline"
                size="sm"
              >
                <DownloadCloud />
                Download
              </Button>
              <Button
                onClick={() => deletePackage(data.id)}
                variant="destructive"
                size="sm"
              >
                <Delete />
                Delete
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="download-link">Command</Label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <Input
                id="download-link"
                name="download-link"
                type="text"
                readOnly
                value={`meow fetch ${data.name}`}
                className="flex-1 rounded-none rounded-l-md font-bold border border-red-500"
              />
              <Button
                type="button"
                onClick={(e) => handleCopy(`meow fetch ${data.name}`)}
                className="rounded-none rounded-r-md"
              >
                {copied ? (
                  <Check color="red" className="h-4 w-4" />
                ) : (
                  <Copy color="red" className="h-4 w-4" />
                )}
                <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
              </Button>
            </div>
          </div>

          
        </div>
      </main>
    </div>
  );
}
