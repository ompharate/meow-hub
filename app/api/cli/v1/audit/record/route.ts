import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    console.log(body)
    await prisma.package.create({
      data: {
        packageId: 414,
        packageName: body.repoName,
        passKey: body.passKey,
        userId: 123456,
      },
    });
    return NextResponse.json({ message: "audit record created successfully" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}