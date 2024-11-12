import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  const { packageId, description } = await req.json();
    console.log(packageId, description);
  await prisma.packageDetails.update({
    where: {
      id: packageId,
    },
    data: {
      description: description,
    },
  });

  return NextResponse.json({ message: "Packages found" });
}