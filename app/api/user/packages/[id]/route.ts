import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

interface paramsType {
  id: string;
}

export async function GET(req: Request, { params }: { params: paramsType }) {
  const user = auth();
  const { id } = params;
  
  if (!id) return NextResponse.json({ message: "Invalid id", success: false });

  const requestedPackage = await prisma.package.findFirst({
    where: {
      id: id,
    },
  });

  const pkgDetails = await prisma.packageDetails.findFirst({
    where :{
        id:requestedPackage?.packageId
    }
  })

  if(!pkgDetails?.visibility && requestedPackage?.userId !== user.userId) {
    return NextResponse.json({
        message:"you are not allowed to visit this package",
        package:[],
        success:false
    })
  }

  console.log(pkgDetails);

  return NextResponse.json({
    package: pkgDetails,
    success: true,
  });
}
