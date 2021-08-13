/*
  Warnings:

  - The primary key for the `Prescription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Prescription` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Prescription" DROP CONSTRAINT "Prescription_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "Prescription_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Prescription.id_unique" ON "Prescription"("id");
