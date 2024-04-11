-- DropForeignKey
ALTER TABLE `international_infos` DROP FOREIGN KEY `international_infos_student_id_fkey`;

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
ALTER TABLE `international_infos` ADD CONSTRAINT `international_infos_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
