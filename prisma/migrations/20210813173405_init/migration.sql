-- CreateTable
CREATE TABLE "Prescription" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "file" BYTEA NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prescription.email_unique" ON "Prescription"("email");
