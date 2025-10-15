/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Workflow` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Workflow` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Workflow" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
