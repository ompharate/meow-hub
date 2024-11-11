import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const userId = searchParams.get("userId");

  if (!userId) return NextResponse.json({ message: "user not found" });
  const packages = await prisma.package.findMany({
    where: {
      userId: userId,
      isStarted: true,
    },
  });

  if (!packages) {
    return NextResponse.json(
      { message: "No packages found", packages: [] },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "Packages found", packages });
}