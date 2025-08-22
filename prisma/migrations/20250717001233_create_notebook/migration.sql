-- CreateTable
CREATE TABLE "notebook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "disponibilidade" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "notebook_id_key" ON "notebook"("id");
