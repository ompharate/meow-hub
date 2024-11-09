import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(Req: Request) {
  const { packageId, userId } = await Req.json();
  console.log(packageId)
  if (!packageId || !userId) {
    return NextResponse.json({ message: "Invalid request" });
  }

  const userPackage = await prisma.package.update({
    where: {
      id: packageId,
    },
    data: {
      isStarted: false,
    },
  });

  console.log(userPackage);

  return NextResponse.json({ message: "packages star is removed" });
}
