"use client";
import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const DATA = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Packages",
    path: "/dashboard/packages",
  },
  {
    id: 3,
    title: "Meow-cli",
    path: "/docs/introduction",
  },
  {
    id: 4,
    title: "Star",
    path: "/dashboard/Star",
  },
];

interface Page {
  id: number;
  title: string;
  path: string;
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Page[]>([]);
  const [pages, setPages] = useState<Page[]>(DATA);

  const router = useRouter();

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = pages.filter((page) =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [searchTerm, pages]);

  return (
    <div className="relative">
      <Input
        className="w-64 pl-8 border border-[#EF4444]"
        placeholder="Search or jump to..."
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />

      {suggestions.length > 0 && (
        <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md text-black">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                router.push(suggestion.path);
              }}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
