import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    console.log(body)
    const packageDetails = await prisma.packageDetails.create({
      data: {
        name: body.repoName,
        downloadUrl:`https://meow-hub-storage.s3.amazonaws.com/${body.repoName}}`
      },
    });

    await prisma.package.create({
      data:{
        packageId: packageDetails.id,
        packageName: body.repoName,
        passKey: body.passKey,
        userId: 9,
      }
    })

    return NextResponse.json({ message: "audit record created successfully" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}