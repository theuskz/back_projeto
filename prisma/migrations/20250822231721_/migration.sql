/*
  Warnings:

  - Added the required column `patrimonio` to the `notebook` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notebook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelo" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "disponibilidade" BOOLEAN NOT NULL,
    "patrimonio" TEXT NOT NULL
);
INSERT INTO "new_notebook" ("disponibilidade", "id", "modelo", "quantidade") SELECT "disponibilidade", "id", "modelo", "quantidade" FROM "notebook";
DROP TABLE "notebook";
ALTER TABLE "new_notebook" RENAME TO "notebook";
CREATE UNIQUE INDEX "notebook_id_key" ON "notebook"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
