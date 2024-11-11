import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Package ID not provided" }, { status: 400 });
    }

  
    const userMainPackage = await prisma.package.deleteMany({
      where: {
        packageId: id, 
      },
    });

  
    const userPackage = await prisma.packageDetails.delete({
      where: { id: id },
    });

    if (!userPackage) {
      return NextResponse.json({ success: false, error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: userPackage });

  } catch (error) {
    console.error("Error deleting package:", error);
    return NextResponse.json({ success: false, error: "Failed to delete package" }, { status: 500 });
  }
}
