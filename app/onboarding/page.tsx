"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Lock, Mail } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function OnBoarding() {
  const { user } = useUser();

  const [email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");
  const router = useRouter();

  const handleUserRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!password) {
      setError("PassKey is required");
      return;
    }

    await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify({ email, passKey:password ,userId:user?.id}),
    });

    router.push("/dashboard")
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Lock color="white" className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-6 text-center text-3xl font-extrabold ">
          Onboarding
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <Label className="text-black" htmlFor="email">
                Email address
              </Label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                disabled
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-10 text-black"
                  placeholder="you@example.com"
                  value={email}
                  defaultValue={user?.emailAddresses[0].emailAddress}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label className="text-black" htmlFor="password">
                PassKey
              </Label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  name="passkey"
                  required
                  className="pl-10 text-black"
                  placeholder="Enter a new passkey to access meow-cli"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      {error}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            <div>
              <Button
                variant={"destructive"}
                disabled={loading}
                onClick={handleUserRegister}
                className={cn("w-full", loading ? "opacity-10" : "opacity-100")}
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
