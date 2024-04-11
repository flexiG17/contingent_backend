/*
  Warnings:

  - You are about to alter the column `student_id` on the `file` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.

*/
-- DropForeignKey
ALTER TABLE `file` DROP FOREIGN KEY `file_student_id_fkey`;

-- AlterTable
ALTER TABLE `file` MODIFY `student_id` VARCHAR(36) NULL;

-- AddForeignKey
ALTER TABLE `file` ADD CONSTRAINT `file_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
