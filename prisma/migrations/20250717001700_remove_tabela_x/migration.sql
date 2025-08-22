/*
  Warnings:

  - You are about to drop the column `nome` on the `notebook` table. All the data in the column will be lost.
  - Added the required column `modelo` to the `notebook` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notebook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelo" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "disponibilidade" BOOLEAN NOT NULL
);
INSERT INTO "new_notebook" ("disponibilidade", "id", "quantidade") SELECT "disponibilidade", "id", "quantidade" FROM "notebook";
DROP TABLE "notebook";
ALTER TABLE "new_notebook" RENAME TO "notebook";
CREATE UNIQUE INDEX "notebook_id_key" ON "notebook"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
