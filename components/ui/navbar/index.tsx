import { Bell, Package, Plus, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../input";
import { Button } from "../button";

import React from "react";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="text-white border-b border-[#EF4444]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-white" />
              <span className="text-xl font-semibold">Meow-Hub</span>
            </Link>
            <nav className="hidden md:flex ml-10 space-x-4">
              <Link
                href="/dashboard"
                className=" hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/packages"
                className=" hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Packages
              </Link>
              <Link
                href="#"
                className=" hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Star
              </Link>
              <Link
                href="#"
                className=" hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Meow-cli
              </Link>
             
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                className="w-64 pl-8 border border-[#EF4444]"
                placeholder="Search or jump to..."
                type="search"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Plus className="h-5 w-5" />
            </Button>
           <UserButton/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
