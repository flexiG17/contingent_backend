/*
  Warnings:

  - You are about to drop the column `educationalProgramId` on the `current_educations` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `metadatas` table. All the data in the column will be lost.
  - You are about to drop the column `paymentsId` on the `student_payments` table. All the data in the column will be lost.
  - You are about to drop the column `agentId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `currentEducationId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `enrollmentId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `internationalInfoId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `metadataId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `oldEducationId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `passportId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `paymentId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `representativeId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `tutorId` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[student_id]` on the table `current_educations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[student_id]` on the table `enrollments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[student_id]` on the table `international_infos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[student_id]` on the table `metadatas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[student_id]` on the table `old_educations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[student_id]` on the table `passports` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[student_id]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `student_id` to the `current_educations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `enrollments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `international_infos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `metadatas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `old_educations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `passports` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `current_educations` DROP FOREIGN KEY `FK_ee43214bfaa54ad7259ed5e4e83`;

-- DropForeignKey
ALTER TABLE `metadatas` DROP FOREIGN KEY `FK_f518f4f051aecbfcca60da242e2`;

-- DropForeignKey
ALTER TABLE `student_payments` DROP FOREIGN KEY `FK_2e8ba56a661fe6a1de06933aa53`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `FK_1a21e177fb148252c3ab75ec1b1`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `FK_28f76a3d5ff4079edc86be38e6a`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `FK_32e00f28d91c75eaaf3e47bcf15`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `FK_5c96950360dd244012098d62337`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `FK_6b29eea895bb48a63cfa4649c1f`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `FK_72694fc8263742a3a697a028ba6`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `FK_7971f13d62ef217539f5da84ddd`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `FK_9e7c04db728e0a5cc43fcb4f700`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `FK_aa9acae5452799058bad352587f`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `FK_f28ab651c181015c3b96e5b7fc6`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `FK_51d635f1d983d505fb5a2f44c52`;

-- AlterTable
ALTER TABLE `current_educations` DROP COLUMN `educationalProgramId`,
    ADD COLUMN `educational_program_id` VARCHAR(36) NULL,
    ADD COLUMN `student_id` VARCHAR(191) NOT NULL,
    MODIFY `form_study` ENUM('Очная', 'Онлайн', 'Гибрид') NOT NULL,
    MODIFY `started_learning` ENUM('Да', 'Нет') NOT NULL;

-- AlterTable
ALTER TABLE `educational_programs` MODIFY `duration` ENUM('1.5 года', '1 год', '') NOT NULL,
    MODIFY `academic_year` ENUM('23-24 г.', '24-25 г.', '25-26 г.', '26-27 г.') NOT NULL;

-- AlterTable
ALTER TABLE `enrollments` ADD COLUMN `student_id` VARCHAR(191) NOT NULL,
    MODIFY `status_1c` ENUM('Прикреплен', 'Не прикреплен') NOT NULL,
    MODIFY `scholarship` ENUM('Да', 'Нет') NOT NULL;

-- AlterTable
ALTER TABLE `international_infos` ADD COLUMN `student_id` VARCHAR(191) NOT NULL,
    MODIFY `RF_location` ENUM('Да', 'Нет') NOT NULL;

-- AlterTable
ALTER TABLE `metadatas` DROP COLUMN `createdById`,
    ADD COLUMN `created_by_id` VARCHAR(36) NULL,
    ADD COLUMN `student_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `old_educations` ADD COLUMN `student_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `passports` ADD COLUMN `student_id` VARCHAR(191) NOT NULL,
    MODIFY `gender` ENUM('Мужской', 'Женский') NOT NULL;

-- AlterTable
ALTER TABLE `payments` ADD COLUMN `student_id` VARCHAR(191) NOT NULL,
    MODIFY `payment_status` ENUM('Оплачено', 'Оплачено частино', 'Не оплачено') NOT NULL;

-- AlterTable
ALTER TABLE `student_payments` DROP COLUMN `paymentsId`,
    ADD COLUMN `payments_id` VARCHAR(36) NULL,
    MODIFY `type` ENUM('Договор', 'Фактический') NOT NULL;

-- AlterTable
ALTER TABLE `students` DROP COLUMN `agentId`,
    DROP COLUMN `currentEducationId`,
    DROP COLUMN `enrollmentId`,
    DROP COLUMN `internationalInfoId`,
    DROP COLUMN `metadataId`,
    DROP COLUMN `oldEducationId`,
    DROP COLUMN `passportId`,
    DROP COLUMN `paymentId`,
    DROP COLUMN `representativeId`,
    DROP COLUMN `tutorId`,
    ADD COLUMN `agent_id` VARCHAR(36) NULL,
    ADD COLUMN `representative_id` VARCHAR(36) NULL,
    ADD COLUMN `tutor_id` VARCHAR(36) NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `createdById`,
    ADD COLUMN `created_by_id` VARCHAR(36) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `current_educations_student_id_key` ON `current_educations`(`student_id`);

-- CreateIndex
CREATE INDEX `current_educations_educational_program_id_idx` ON `current_educations`(`educational_program_id`);

-- CreateIndex
CREATE UNIQUE INDEX `enrollments_student_id_key` ON `enrollments`(`student_id`);

-- CreateIndex
CREATE UNIQUE INDEX `international_infos_student_id_key` ON `international_infos`(`student_id`);

-- CreateIndex
CREATE UNIQUE INDEX `metadatas_student_id_key` ON `metadatas`(`student_id`);

-- CreateIndex
CREATE INDEX `metadatas_created_by_id_idx` ON `metadatas`(`created_by_id`);

-- CreateIndex
CREATE UNIQUE INDEX `old_educations_student_id_key` ON `old_educations`(`student_id`);

-- CreateIndex
CREATE UNIQUE INDEX `passports_student_id_key` ON `passports`(`student_id`);

-- CreateIndex
CREATE UNIQUE INDEX `payments_student_id_key` ON `payments`(`student_id`);

-- CreateIndex
CREATE INDEX `student_payments_payments_id_idx` ON `student_payments`(`payments_id`);

-- CreateIndex
CREATE INDEX `students_tutor_id_idx` ON `students`(`tutor_id`);

-- CreateIndex
CREATE INDEX `students_representative_id_idx` ON `students`(`representative_id`);

-- CreateIndex
CREATE INDEX `students_agent_id_idx` ON `students`(`agent_id`);

-- CreateIndex
CREATE INDEX `users_created_by_id_idx` ON `users`(`created_by_id`);

-- AddForeignKey
ALTER TABLE `current_educations` ADD CONSTRAINT `current_educations_educational_program_id_fkey` FOREIGN KEY (`educational_program_id`) REFERENCES `educational_programs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `current_educations` ADD CONSTRAINT `current_educations_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enrollments` ADD CONSTRAINT `enrollments_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `international_infos` ADD CONSTRAINT `international_infos_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `metadatas` ADD CONSTRAINT `metadatas_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `metadatas` ADD CONSTRAINT `metadatas_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `old_educations` ADD CONSTRAINT `old_educations_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `passports` ADD CONSTRAINT `passports_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `student_payments` ADD CONSTRAINT `student_payments_payments_id_fkey` FOREIGN KEY (`payments_id`) REFERENCES `payments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_agent_id_fkey` FOREIGN KEY (`agent_id`) REFERENCES `agents`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_representative_id_fkey` FOREIGN KEY (`representative_id`) REFERENCES `representatives`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_tutor_id_fkey` FOREIGN KEY (`tutor_id`) REFERENCES `tutors`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
