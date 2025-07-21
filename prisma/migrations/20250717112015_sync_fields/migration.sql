/*
  Warnings:

  - Made the column `city` on table `DrivingSchool` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "DrivingSchool" ALTER COLUMN "city" SET NOT NULL;
