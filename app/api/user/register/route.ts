import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  const { passKey, email, userId } = await req.json();

  const newUser = await prisma.user.create({
    data: {
      id: userId,
      passKey,
      email: email,
    },
  });

  if (!newUser) {
    return NextResponse.json(
      { message: "unable to create User" },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "Packages found", newUser });
}