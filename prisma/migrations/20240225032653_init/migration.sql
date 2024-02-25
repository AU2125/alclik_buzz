-- CreateTable
CREATE TABLE "Team" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "ip" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Response" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "respondedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_ip_key" ON "Team"("ip");
