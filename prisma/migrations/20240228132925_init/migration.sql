/*
  Warnings:

  - You are about to drop the column `title` on the `Item` table. All the data in the column will be lost.
  - Added the required column `fromDate` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "title",
ADD COLUMN     "fromDate" TIMESTAMP(3) NOT NULL;
