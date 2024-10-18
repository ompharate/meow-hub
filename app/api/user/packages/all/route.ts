import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const packages = await prisma.package.findMany();

  if (!packages) {
    return NextResponse.json({ message: "No packages found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Packages found", packages });
}