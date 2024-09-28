/*
  Warnings:

  - You are about to drop the column `passkey` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `passkey` on the `User` table. All the data in the column will be lost.
  - Added the required column `passKey` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passKey` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Package" DROP COLUMN "passkey",
ADD COLUMN     "passKey" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passkey",
ADD COLUMN     "passKey" VARCHAR(255) NOT NULL;
