"use client";
import React from "react";
import { FileBox, FolderLock, Rss } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "@clerk/nextjs";

type Props = {};

const StatCardGroup = (props: Props) => {
  const { user } = useUser();
  const { data, isLoading, error } = useQuery({
    queryKey: ["stat-cards"],
    queryFn: async () => {
      const response = await fetch("api/user/stats?id=" + user?.id);
      return await response.json();
    },  
  });

  return (
    <div className="flex gap-5 text-white">
      <div className="bg-[#EF4444] p-5 gap-5 flex items-center rounded-lg cursor-pointer">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <FileBox /> Packages
        </h1>
        <p className="font-semibold">{data?.packageCount}</p>
      </div>
      <div className="bg-[#EF4444] p-5 gap-5 flex items-center rounded-lg cursor-pointer">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <Rss /> Public
        </h1>
        <p className="font-semibold">{data?.publicPackages}</p>
      </div>
      <div className="bg-[#EF4444] p-5 gap-5 flex items-center rounded-lg cursor-pointer">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <FolderLock /> Private
        </h1>
        <p className="font-semibold">{data?.privatePackages}</p>
      </div>
    </div>
  );
};

export default StatCardGroup;
