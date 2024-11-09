import PackageDetailPage from "@/app/dashboard/packages/[id]/page";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { passKey, repoName }: { passKey: string; repoName: string } =
    await req.json();
   
  const downloadPackage = await prisma.packageDetails.findFirst({
    where: {
      name: repoName,
    },
  });

 

  return NextResponse.json({
    success: true,
    downloadUrl: downloadPackage?.downloadUrl,
  });
}