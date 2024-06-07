-- AlterTable
ALTER TABLE `current_education` MODIFY `form_study` ENUM('Очная', 'Онлайн', 'Гибрид') NULL,
    MODIFY `started_learning` ENUM('Да', 'Нет') NULL,
    MODIFY `date_started_learning` DATETIME(0) NULL,
    MODIFY `desired_level` VARCHAR(255) NULL,
    MODIFY `specialty_code` VARCHAR(255) NULL,
    MODIFY `specialty_direction` VARCHAR(255) NULL,
    MODIFY `education_field` VARCHAR(255) NULL,
    MODIFY `organization` VARCHAR(255) NULL;
