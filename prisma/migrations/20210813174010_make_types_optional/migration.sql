-- DropIndex
DROP INDEX "Prescription.email_unique";

-- AlterTable
ALTER TABLE "Prescription" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "file" DROP NOT NULL;
