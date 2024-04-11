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

-- AlterTable
ALTER TABLE `agents` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `metadatas` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `representatives` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `tutors` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `users` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `metadatas` ADD CONSTRAINT `metadatas_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `old_educations` ADD CONSTRAINT `old_educations_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `passports` ADD CONSTRAINT `passports_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_payments` ADD CONSTRAINT `student_payments_payments_id_fkey` FOREIGN KEY (`payments_id`) REFERENCES `payments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
