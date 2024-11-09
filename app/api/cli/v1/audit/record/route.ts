import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = await prisma.user.findFirst({
      where: { passKey: body.passKey },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found", success: false }, { status: 404 });
    }
    
    if (user.passKey !== body.passKey) {
      return NextResponse.json({ message: "Invalid passKey", success: false }, { status: 401 });
    }

    

    const packageDetails = await prisma.packageDetails.create({
      data: {
        id: nanoid(),
        name: body.repoName,
        downloadUrl: `https://meow-hub-storage.s3.amazonaws.com/${body.repoName}`,
        visibility:body.visibility === "public" ? true : false
      },
    });

    await prisma.package.create({
      data: {
        id: nanoid(),
        packageId: packageDetails.id,
        packageName: body.repoName,
        passKey: body.passKey,
        userId: user.id,
      },
    });
    
    return NextResponse.json({ message: "Audit record created successfully", success: true });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Something went wrong", success: false }, { status: 500 });
  }
}