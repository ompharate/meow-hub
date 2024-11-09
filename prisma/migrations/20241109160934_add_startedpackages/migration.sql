-- CreateTable
CREATE TABLE "startedPackages" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,

    CONSTRAINT "startedPackages_pkey" PRIMARY KEY ("id")
);
