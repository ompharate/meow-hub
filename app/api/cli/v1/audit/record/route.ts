import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const user = await prisma.user.findFirst({
      where: { passKey: body.passKey },
    });

    if (!user) return;

    if (user.passKey !== body.passKey) {
      return NextResponse.json({ message: "Invalid passKey" }, { status: 401 });
    }

    const packageDetails = await prisma.packageDetails.create({
      data: {
        id: nanoid(),
        name: body.repoName,
        downloadUrl: `https://meow-hub-storage.s3.amazonaws.com/${body.repoName}}`,
      },
    });

    await prisma.package.create({
      data: {
        id: nanoid(),
        packageId: packageDetails.id,
        packageName: body.repoName,
        passKey: body.passKey,
        userId: user?.id,
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
