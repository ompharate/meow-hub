import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

const s3Client = new S3Client({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.accessKeyId as string,
    secretAccessKey: process.env.secretAccessKey as string,
  },
});

export async function POST(req: Request) {
  const { filename, contentType }: { filename: string; contentType: string } =
    await req.json();
  console.log(filename, contentType);
  const command = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_AWS_S3 as string,
    Key: filename,
    ContentType: contentType,
  });

  try {
    const url = await getSignedUrl(s3Client, command);
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    return NextResponse.json(
      { error: "Failed to generate presigned URL" },
      { status: 500 }
    );
  }
}