-- CreateTable
CREATE TABLE "ShopNote" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "urgent" BOOLEAN NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "noteId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "ShopNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
