/*
  Warnings:

  - Made the column `student_id` on table `file` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `file` DROP FOREIGN KEY `file_student_id_fkey`;

-- AlterTable
ALTER TABLE `file` MODIFY `student_id` VARCHAR(36) NOT NULL;

-- AddForeignKey
ALTER TABLE `file` ADD CONSTRAINT `file_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
