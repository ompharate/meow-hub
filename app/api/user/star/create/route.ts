import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(Req: Request) {
  const { packageId, userId } = await Req.json();
   
  if (!packageId || !userId) {
    return NextResponse.json({ message: "Invalid request" });
  }

  const userPackage = await prisma.package.update({
    where: {
      id: packageId,
    },
    data: {
      isStarted: true,
    },
  });

  console.log(userPackage);

  return NextResponse.json({ message: "packages is started" });
}
