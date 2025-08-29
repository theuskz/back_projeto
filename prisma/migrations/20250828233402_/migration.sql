-- CreateTable
CREATE TABLE "salas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "disponibilidade" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "salas_id_key" ON "salas"("id");
