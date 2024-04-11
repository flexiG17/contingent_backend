/*
  Warnings:

  - You are about to drop the `agents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contacts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `current_educations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `educational_programs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `enrollments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `international_infos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `metadatas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `old_educations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `passports` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `representatives` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tutors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `contacts` DROP FOREIGN KEY `contacts_student_id_fkey`;

-- DropForeignKey
ALTER TABLE `current_educations` DROP FOREIGN KEY `current_educations_educational_program_id_fkey`;

-- DropForeignKey
ALTER TABLE `current_educations` DROP FOREIGN KEY `current_educations_student_id_fkey`;

-- DropForeignKey
ALTER TABLE `enrollments` DROP FOREIGN KEY `enrollments_student_id_fkey`;

-- DropForeignKey
ALTER TABLE `international_infos` DROP FOREIGN KEY `international_infos_student_id_fkey`;

-- DropForeignKey
ALTER TABLE `metadatas` DROP FOREIGN KEY `metadatas_created_by_id_fkey`;

-- DropForeignKey
ALTER TABLE `metadatas` DROP FOREIGN KEY `metadatas_student_id_fkey`;

-- DropForeignKey
ALTER TABLE `old_educations` DROP FOREIGN KEY `old_educations_student_id_fkey`;

-- DropForeignKey
ALTER TABLE `passports` DROP FOREIGN KEY `passports_student_id_fkey`;

-- DropForeignKey
ALTER TABLE `payments` DROP FOREIGN KEY `payments_student_id_fkey`;

-- DropForeignKey
ALTER TABLE `student_payments` DROP FOREIGN KEY `student_payments_payments_id_fkey`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `students_agent_id_fkey`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `students_representative_id_fkey`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `students_tutor_id_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_created_by_id_fkey`;

-- DropTable
DROP TABLE `agents`;

-- DropTable
DROP TABLE `contacts`;

-- DropTable
DROP TABLE `current_educations`;

-- DropTable
DROP TABLE `educational_programs`;

-- DropTable
DROP TABLE `enrollments`;

-- DropTable
DROP TABLE `international_infos`;

-- DropTable
DROP TABLE `metadatas`;

-- DropTable
DROP TABLE `old_educations`;

-- DropTable
DROP TABLE `passports`;

-- DropTable
DROP TABLE `payments`;

-- DropTable
DROP TABLE `representatives`;

-- DropTable
DROP TABLE `student_payments`;

-- DropTable
DROP TABLE `students`;

-- DropTable
DROP TABLE `tutors`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `agent` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `first_email` VARCHAR(255) NOT NULL,
    `second_email` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact` (
    `id` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `first_email` VARCHAR(255) NOT NULL,
    `second_email` VARCHAR(255) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `contact_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `current_education` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('Контракт', 'Квота') NOT NULL,
    `form_study` ENUM('Очная', 'Онлайн', 'Гибрид') NOT NULL,
    `started_learning` ENUM('Да', 'Нет') NOT NULL,
    `date_started_learning` DATETIME(0) NOT NULL,
    `desired_level` VARCHAR(255) NOT NULL,
    `specialty_code` VARCHAR(255) NOT NULL,
    `specialty_direction` VARCHAR(255) NOT NULL,
    `education_field` VARCHAR(255) NOT NULL,
    `organization` VARCHAR(255) NOT NULL,
    `educational_program_id` VARCHAR(36) NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `current_education_student_id_key`(`student_id`),
    INDEX `current_education_educational_program_id_idx`(`educational_program_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `educational_program` (
    `id` VARCHAR(191) NOT NULL,
    `hours_number` ENUM('1008', '868', '728', '588', '504', '352', '288', '144', '108', '72') NOT NULL,
    `duration` ENUM('1.5 года', '1 год', '') NOT NULL,
    `academic_year` ENUM('23-24 г.', '24-25 г.', '25-26 г.', '26-27 г.') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enrollment` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('Зачислен', 'Не зачислен', 'Отчислен') NOT NULL,
    `order_number` VARCHAR(255) NOT NULL,
    `enrollment_date` DATETIME(0) NOT NULL,
    `expulsion_order` VARCHAR(255) NOT NULL,
    `expulsion_date` DATETIME(0) NOT NULL,
    `contract_number` VARCHAR(255) NOT NULL,
    `status_1c` ENUM('Прикреплен', 'Не прикреплен') NOT NULL,
    `scholarship` ENUM('Да', 'Нет') NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `enrollment_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `international_info` (
    `id` VARCHAR(191) NOT NULL,
    `RF_location` ENUM('Да', 'Нет') NOT NULL,
    `residence_place` VARCHAR(255) NOT NULL,
    `entry_date` DATETIME(0) NOT NULL,
    `departure_date` DATETIME(0) NOT NULL,
    `estimated_receipt_date` DATETIME(0) NOT NULL,
    `actual_receipt_date_invitation` DATETIME(0) NOT NULL,
    `application_source` VARCHAR(255) NOT NULL,
    `visa_validity` DATETIME(0) NOT NULL,
    `transfer_to_international_service` DATETIME(0) NOT NULL,
    `transfer_to_MVD` DATETIME(0) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `international_info_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `metadata` (
    `id` VARCHAR(191) NOT NULL,
    `is_archived` BOOLEAN NOT NULL DEFAULT false,
    `comments` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,
    `created_by_id` VARCHAR(36) NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `metadata_student_id_key`(`student_id`),
    INDEX `metadata_created_by_id_idx`(`created_by_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `old_education` (
    `id` VARCHAR(191) NOT NULL,
    `level_education` VARCHAR(255) NOT NULL,
    `name_educational_institution` VARCHAR(255) NOT NULL,
    `location_educational_institution` VARCHAR(255) NOT NULL,
    `graduation_year` INTEGER NOT NULL,
    `direction_number` VARCHAR(255) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `old_education_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `passport` (
    `id` VARCHAR(191) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `gender` ENUM('Мужской', 'Женский') NOT NULL,
    `birth_place` VARCHAR(255) NOT NULL,
    `citizenship` VARCHAR(255) NOT NULL,
    `passport_number` VARCHAR(255) NOT NULL,
    `passport_expiration` DATETIME(0) NULL,
    `passport_issued` VARCHAR(255) NOT NULL,
    `passport_issue_date` DATETIME(0) NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `passport_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` VARCHAR(191) NOT NULL,
    `contract_amount` INTEGER NOT NULL,
    `payment_status` ENUM('Оплачено', 'Оплачено частино', 'Не оплачено') NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `payment_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_payment` (
    `id` VARCHAR(191) NOT NULL,
    `ordinal` INTEGER NOT NULL,
    `type` ENUM('Договор', 'Фактический') NOT NULL,
    `date` DATETIME(0) NOT NULL,
    `amount` INTEGER NULL,
    `payment_id` VARCHAR(36) NULL,

    INDEX `student_payment_payment_id_idx`(`payment_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `representative` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `first_email` VARCHAR(255) NOT NULL,
    `second_email` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `id` VARCHAR(191) NOT NULL,
    `latin_name` VARCHAR(255) NOT NULL,
    `russian_name` VARCHAR(255) NOT NULL,
    `agent_id` VARCHAR(36) NULL,
    `representative_id` VARCHAR(36) NULL,
    `tutor_id` VARCHAR(36) NULL,

    INDEX `student_tutor_id_idx`(`tutor_id`),
    INDEX `student_representative_id_idx`(`representative_id`),
    INDEX `student_agent_id_idx`(`agent_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tutor` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('Администратор', 'Редактор', 'Читатель') NOT NULL DEFAULT 'Читатель',
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,
    `created_by_id` VARCHAR(36) NULL,

    INDEX `user_created_by_id_idx`(`created_by_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contact` ADD CONSTRAINT `contact_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `current_education` ADD CONSTRAINT `current_education_educational_program_id_fkey` FOREIGN KEY (`educational_program_id`) REFERENCES `educational_program`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `current_education` ADD CONSTRAINT `current_education_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enrollment` ADD CONSTRAINT `enrollment_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `international_info` ADD CONSTRAINT `international_info_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `metadata` ADD CONSTRAINT `metadata_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `metadata` ADD CONSTRAINT `metadata_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `old_education` ADD CONSTRAINT `old_education_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `passport` ADD CONSTRAINT `passport_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_payment` ADD CONSTRAINT `student_payment_payment_id_fkey` FOREIGN KEY (`payment_id`) REFERENCES `payment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_agent_id_fkey` FOREIGN KEY (`agent_id`) REFERENCES `agent`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_representative_id_fkey` FOREIGN KEY (`representative_id`) REFERENCES `representative`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_tutor_id_fkey` FOREIGN KEY (`tutor_id`) REFERENCES `tutor`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
