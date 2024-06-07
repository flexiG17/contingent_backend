/*
  Warnings:

  - Made the column `birth_date` on table `passport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `amount` on table `student_payment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `agent` MODIFY `second_email` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `contact` MODIFY `phone_number` VARCHAR(255) NULL,
    MODIFY `first_email` VARCHAR(255) NULL,
    MODIFY `second_email` VARCHAR(255) NULL,
    MODIFY `student_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `enrollment` MODIFY `status` ENUM('Зачислен', 'Не зачислен', 'Отчислен') NULL,
    MODIFY `order_number` VARCHAR(255) NULL,
    MODIFY `enrollment_date` DATETIME(0) NULL,
    MODIFY `expulsion_order` VARCHAR(255) NULL,
    MODIFY `expulsion_date` DATETIME(0) NULL,
    MODIFY `contract_number` VARCHAR(255) NULL,
    MODIFY `status_1c` ENUM('Прикреплен', 'Не прикреплен') NULL,
    MODIFY `scholarship` ENUM('Да', 'Нет') NULL,
    MODIFY `student_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `international_info` MODIFY `RF_location` ENUM('Да', 'Нет') NULL,
    MODIFY `residence_place` VARCHAR(255) NULL,
    MODIFY `entry_date` DATETIME(0) NULL,
    MODIFY `departure_date` DATETIME(0) NULL,
    MODIFY `estimated_receipt_date` DATETIME(0) NULL,
    MODIFY `actual_receipt_date_invitation` DATETIME(0) NULL,
    MODIFY `application_source` VARCHAR(255) NULL,
    MODIFY `visa_validity` DATETIME(0) NULL,
    MODIFY `transfer_to_international_service` DATETIME(0) NULL,
    MODIFY `transfer_to_MVD` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `metadata` MODIFY `is_archived` BOOLEAN NULL DEFAULT false,
    MODIFY `comments` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `old_education` MODIFY `level_education` VARCHAR(255) NULL,
    MODIFY `name_educational_institution` VARCHAR(255) NULL,
    MODIFY `location_educational_institution` VARCHAR(255) NULL,
    MODIFY `graduation_year` INTEGER NULL,
    MODIFY `direction_number` VARCHAR(255) NULL,
    MODIFY `student_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `passport` MODIFY `country` VARCHAR(255) NULL,
    MODIFY `birth_place` VARCHAR(255) NULL,
    MODIFY `citizenship` VARCHAR(255) NULL,
    MODIFY `passport_issued` VARCHAR(255) NULL,
    MODIFY `birth_date` DATETIME(0) NOT NULL;

-- AlterTable
ALTER TABLE `payment` MODIFY `contract_amount` INTEGER NULL,
    MODIFY `payment_status` ENUM('Оплачено', 'Оплачено частино', 'Не оплачено') NULL;

-- AlterTable
ALTER TABLE `representative` MODIFY `second_email` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `student` MODIFY `russian_name` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `student_payment` MODIFY `amount` INTEGER NOT NULL;
