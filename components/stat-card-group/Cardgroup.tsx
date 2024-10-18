import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileBox, FolderLock, Rss } from "lucide-react";

type Props = {};

const StatCardGroup = (props: Props) => {
  return (
    <div className="flex gap-5 text-white">
      <div className="bg-[#EF4444] p-5 gap-5 flex items-center rounded-lg cursor-pointer">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <FileBox /> Packages
        </h1>
        <p className="font-semibold">10</p>
      </div>
      <div className="bg-[#EF4444] p-5 gap-5 flex items-center rounded-lg cursor-pointer">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <Rss /> Public
        </h1>
        <p className="font-semibold">10</p>
      </div>
      <div className="bg-[#EF4444] p-5 gap-5 flex items-center rounded-lg cursor-pointer">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <FolderLock /> Private
        </h1>
        <p className="font-semibold">10</p>
      </div>
    </div>
  );
};

export default StatCardGroup;
