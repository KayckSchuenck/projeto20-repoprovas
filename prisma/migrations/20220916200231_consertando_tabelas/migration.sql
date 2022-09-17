/*
  Warnings:

  - Made the column `termId` on table `disciplines` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teacherId` on table `teachersDisciplines` required. This step will fail if there are existing NULL values in that column.
  - Made the column `disciplineId` on table `teachersDisciplines` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "disciplines" DROP CONSTRAINT "disciplines_termId_fkey";

-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_teacherId_fkey";

-- AlterTable
ALTER TABLE "disciplines" ALTER COLUMN "termId" SET NOT NULL;

-- AlterTable
ALTER TABLE "teachersDisciplines" ALTER COLUMN "teacherId" SET NOT NULL,
ALTER COLUMN "disciplineId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_termId_fkey" FOREIGN KEY ("termId") REFERENCES "terms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
