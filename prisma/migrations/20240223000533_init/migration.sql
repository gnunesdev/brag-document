-- CreateTable
CREATE TABLE "Values" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ItemToValues" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToValues_AB_unique" ON "_ItemToValues"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToValues_B_index" ON "_ItemToValues"("B");

-- AddForeignKey
ALTER TABLE "_ItemToValues" ADD CONSTRAINT "_ItemToValues_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToValues" ADD CONSTRAINT "_ItemToValues_B_fkey" FOREIGN KEY ("B") REFERENCES "Values"("id") ON DELETE CASCADE ON UPDATE CASCADE;
