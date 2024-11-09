import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const userId = url.searchParams.get("id");

  if (!userId) {
    return NextResponse.json({ message: "User ID not provided" });
  }

  const allPackages = await prisma.package.count({
    where: {
      userId: userId,
    },
  });
  const publicPackages = await prisma.package.count({
    where: {
      userId: userId,
      packageDetails: {
        visibility: true,
      },
    },
  });
  const privatePackages = await prisma.package.count({
    where: {
      userId: userId,
      packageDetails: {
        visibility: false,
      },
    },
  });

  console.log(allPackages, publicPackages, privatePackages);

  return NextResponse.json({
    packageCount: allPackages,
    publicPackages,
    privatePackages,
  });
}
