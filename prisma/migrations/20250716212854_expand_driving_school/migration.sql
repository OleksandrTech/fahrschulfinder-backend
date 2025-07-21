/*
  Warnings:

  - Added the required column `bf17Special` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `digitalLessons` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eyeTestAvailable` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstAidAvailable` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intensiveCourses` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isManual` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `offersForSeniors` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `onlineRegistration` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerLesson` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationTUV` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supportDisabled` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `theoryIncluded` to the `DrivingSchool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DrivingSchool" ADD COLUMN     "area" TEXT,
ADD COLUMN     "avgTotalPrice" DECIMAL(65,30),
ADD COLUMN     "baseFee" DECIMAL(65,30),
ADD COLUMN     "bf17Special" BOOLEAN NOT NULL,
ADD COLUMN     "branches" TEXT[],
ADD COLUMN     "digitalLessons" BOOLEAN NOT NULL,
ADD COLUMN     "examPrice" DECIMAL(65,30),
ADD COLUMN     "eyeTestAvailable" BOOLEAN NOT NULL,
ADD COLUMN     "eyeTestPrice" DECIMAL(65,30),
ADD COLUMN     "financingOptions" TEXT,
ADD COLUMN     "firstAidAvailable" BOOLEAN NOT NULL,
ADD COLUMN     "firstAidPrice" DECIMAL(65,30),
ADD COLUMN     "intensiveCourses" BOOLEAN NOT NULL,
ADD COLUMN     "isAutomatic" BOOLEAN,
ADD COLUMN     "isManual" BOOLEAN NOT NULL,
ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "licenseTypes" TEXT[],
ADD COLUMN     "offersForSeniors" BOOLEAN NOT NULL,
ADD COLUMN     "onlineRegistration" BOOLEAN NOT NULL,
ADD COLUMN     "pricePerLesson" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "pricePerNight" DECIMAL(65,30),
ADD COLUMN     "priceSpecial" DECIMAL(65,30),
ADD COLUMN     "registrationTUV" BOOLEAN NOT NULL,
ADD COLUMN     "socialLinks" TEXT[],
ADD COLUMN     "successRate" DECIMAL(65,30),
ADD COLUMN     "supportDisabled" BOOLEAN NOT NULL,
ADD COLUMN     "theoryIncluded" BOOLEAN NOT NULL,
ADD COLUMN     "theoryPrice" DECIMAL(65,30),
ADD COLUMN     "workingHours" TEXT;
