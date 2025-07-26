/*
  Warnings:

  - You are about to drop the column `area` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `avgTotalPrice` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `bf17Special` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `digitalLessons` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `examPrice` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `eyeTestAvailable` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `eyeTestPrice` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `firstAidAvailable` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `firstAidPrice` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `intensiveCourses` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `isAutomatic` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `isManual` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `languages` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `licenseTypes` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `offersForSeniors` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `onlineRegistration` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerLesson` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerNight` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `priceSpecial` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `registrationTUV` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `socialLinks` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `supportDisabled` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `theoryIncluded` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `theoryPrice` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to drop the column `workingHours` on the `DrivingSchool` table. All the data in the column will be lost.
  - You are about to alter the column `baseFee` on the `DrivingSchool` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Real`.
  - The `branches` column on the `DrivingSchool` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `financingOptions` column on the `DrivingSchool` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `successRate` on the `DrivingSchool` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Real`.

*/
-- AlterTable
ALTER TABLE "DrivingSchool" DROP COLUMN "area",
DROP COLUMN "avgTotalPrice",
DROP COLUMN "bf17Special",
DROP COLUMN "digitalLessons",
DROP COLUMN "examPrice",
DROP COLUMN "eyeTestAvailable",
DROP COLUMN "eyeTestPrice",
DROP COLUMN "firstAidAvailable",
DROP COLUMN "firstAidPrice",
DROP COLUMN "intensiveCourses",
DROP COLUMN "isAutomatic",
DROP COLUMN "isManual",
DROP COLUMN "languages",
DROP COLUMN "licenseTypes",
DROP COLUMN "offersForSeniors",
DROP COLUMN "onlineRegistration",
DROP COLUMN "pricePerLesson",
DROP COLUMN "pricePerNight",
DROP COLUMN "priceSpecial",
DROP COLUMN "registrationTUV",
DROP COLUMN "socialLinks",
DROP COLUMN "supportDisabled",
DROP COLUMN "theoryIncluded",
DROP COLUMN "theoryPrice",
DROP COLUMN "website",
DROP COLUMN "workingHours",
ADD COLUMN     "allowReviews" BOOLEAN DEFAULT true,
ADD COLUMN     "averageFinalPrice" REAL,
ADD COLUMN     "canRespondToReviews" BOOLEAN DEFAULT false,
ADD COLUMN     "firstAidCourseOffered" BOOLEAN,
ADD COLUMN     "firstAidCoursePrice" REAL,
ADD COLUMN     "galleryImageUrls" TEXT[],
ADD COLUMN     "hasDigitalClasses" BOOLEAN,
ADD COLUMN     "hasOnlineRegistration" BOOLEAN,
ADD COLUMN     "licenseClasses" TEXT[],
ADD COLUMN     "logoUrl" TEXT,
ADD COLUMN     "offersIntensiveCourses" BOOLEAN,
ADD COLUMN     "openingHours" TEXT,
ADD COLUMN     "practicalExamFee" REAL,
ADD COLUMN     "pricePerSpecialLesson" REAL,
ADD COLUMN     "pricePerStandardLesson" REAL,
ADD COLUMN     "serviceArea" TEXT,
ADD COLUMN     "socialMediaLinks" JSONB,
ADD COLUMN     "specialOffers" TEXT[],
ADD COLUMN     "specializationInAccompaniedDriving17" BOOLEAN,
ADD COLUMN     "supportForDisabled" BOOLEAN,
ADD COLUMN     "theoryCourseIncluded" BOOLEAN,
ADD COLUMN     "theoryCoursePrice" REAL,
ADD COLUMN     "theoryExamFee" REAL,
ADD COLUMN     "trainingLanguages" TEXT[],
ADD COLUMN     "transmissionType" TEXT[],
ADD COLUMN     "tuevDekraRegistrationIncluded" BOOLEAN,
ADD COLUMN     "videoPresentationUrl" TEXT,
ADD COLUMN     "visionTestOffered" BOOLEAN,
ADD COLUMN     "visionTestPrice" REAL,
ADD COLUMN     "websiteUrl" TEXT,
ALTER COLUMN "baseFee" SET DATA TYPE REAL,
DROP COLUMN "branches",
ADD COLUMN     "branches" JSONB,
DROP COLUMN "financingOptions",
ADD COLUMN     "financingOptions" TEXT[],
ALTER COLUMN "successRate" SET DATA TYPE REAL;
