import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

type Props = {
  id: string;
};

export async function POST(req: Request, { params }: { params: Props }) {
   
  try {
    const { id } = params;
   
    const user = await prisma.user.findUnique({
      where: { id },
    });
 
    console.log("user: " + user)

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" });
    }

    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to process request" });
  }
}
