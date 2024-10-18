/*
  Warnings:

  - The primary key for the `PackageDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Package" DROP CONSTRAINT "Package_packageId_fkey";

-- AlterTable
ALTER TABLE "Package" ALTER COLUMN "packageId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PackageDetails" DROP CONSTRAINT "PackageDetails_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PackageDetails_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "PackageDetails_id_seq";

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "PackageDetails"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
