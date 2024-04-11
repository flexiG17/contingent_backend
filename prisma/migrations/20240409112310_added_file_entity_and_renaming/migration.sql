-- CreateTable
CREATE TABLE `file` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `size` INTEGER NOT NULL,
    `path` VARCHAR(255) NOT NULL,
    `section` ENUM('Passport', 'Visa', 'Payment', 'Housing', 'Default') NOT NULL DEFAULT 'Default',
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,
    `created_by_id` VARCHAR(36) NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `file_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `file` ADD CONSTRAINT `file_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `file` ADD CONSTRAINT `file_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
