-- CreateTable
CREATE TABLE `agents` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `first_email` VARCHAR(255) NOT NULL,
    `second_email` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contacts` (
    `id` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `first_email` VARCHAR(255) NOT NULL,
    `second_email` VARCHAR(255) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `contacts_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `current_educations` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('Контракт', 'Квота') NOT NULL,
    `form_study` ENUM('Очная') NOT NULL,
    `started_learning` ENUM('Да') NOT NULL,
    `date_started_learning` DATETIME(0) NOT NULL,
    `desired_level` VARCHAR(255) NOT NULL,
    `specialty_code` VARCHAR(255) NOT NULL,
    `specialty_direction` VARCHAR(255) NOT NULL,
    `education_field` VARCHAR(255) NOT NULL,
    `organization` VARCHAR(255) NOT NULL,
    `educationalProgramId` VARCHAR(36) NULL,

    INDEX `FK_ee43214bfaa54ad7259ed5e4e83`(`educationalProgramId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `educational_programs` (
    `id` VARCHAR(191) NOT NULL,
    `hours_number` ENUM('1008', '868', '728', '588', '504', '352', '288', '144', '108', '72') NOT NULL,
    `duration` ENUM('') NOT NULL,
    `academic_year` ENUM('23-24 г.') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enrollments` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('Зачислен', 'Не зачислен', 'Отчислен') NOT NULL,
    `order_number` VARCHAR(255) NOT NULL,
    `enrollment_date` DATETIME(0) NOT NULL,
    `expulsion_order` VARCHAR(255) NOT NULL,
    `expulsion_date` DATETIME(0) NOT NULL,
    `contract_number` VARCHAR(255) NOT NULL,
    `status_1c` ENUM('Прикреплен') NOT NULL,
    `scholarship` ENUM('Да') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `international_infos` (
    `id` VARCHAR(191) NOT NULL,
    `RF_location` ENUM('Да') NOT NULL,
    `residence_place` VARCHAR(255) NOT NULL,
    `entry_date` DATETIME(0) NOT NULL,
    `departure_date` DATETIME(0) NOT NULL,
    `estimated_receipt_date` DATETIME(0) NOT NULL,
    `actual_receipt_date_invitation` DATETIME(0) NOT NULL,
    `application_source` VARCHAR(255) NOT NULL,
    `visa_validity` DATETIME(0) NOT NULL,
    `transfer_to_international_service` DATETIME(0) NOT NULL,
    `transfer_to_MVD` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `metadatas` (
    `id` VARCHAR(191) NOT NULL,
    `is_archived` TINYINT NOT NULL DEFAULT 0,
    `comments` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `createdById` VARCHAR(36) NULL,

    INDEX `FK_f518f4f051aecbfcca60da242e2`(`createdById`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `old_educations` (
    `id` VARCHAR(191) NOT NULL,
    `level_education` VARCHAR(255) NOT NULL,
    `name_educational_institution` VARCHAR(255) NOT NULL,
    `location_educational_institution` VARCHAR(255) NOT NULL,
    `graduation_year` INTEGER NOT NULL,
    `direction_number` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `passports` (
    `id` VARCHAR(191) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `gender` ENUM('Мужской') NOT NULL,
    `birth_place` VARCHAR(255) NOT NULL,
    `citizenship` VARCHAR(255) NOT NULL,
    `passport_number` VARCHAR(255) NOT NULL,
    `passport_expiration` DATETIME(0) NULL,
    `passport_issued` VARCHAR(255) NOT NULL,
    `passport_issue_date` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payments` (
    `id` VARCHAR(191) NOT NULL,
    `contract_amount` INTEGER NOT NULL,
    `payment_status` ENUM('Оплачено') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `representatives` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `first_email` VARCHAR(255) NOT NULL,
    `second_email` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_payments` (
    `id` VARCHAR(191) NOT NULL,
    `ordinal` INTEGER NOT NULL,
    `type` ENUM('Договор') NOT NULL,
    `date` DATETIME(0) NOT NULL,
    `amount` INTEGER NULL,
    `paymentsId` VARCHAR(36) NULL,

    INDEX `FK_2e8ba56a661fe6a1de06933aa53`(`paymentsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` VARCHAR(191) NOT NULL,
    `latin_name` VARCHAR(255) NOT NULL,
    `russian_name` VARCHAR(255) NOT NULL,
    `agentId` VARCHAR(36) NULL,
    `representativeId` VARCHAR(36) NULL,
    `tutorId` VARCHAR(36) NULL,
    `currentEducationId` VARCHAR(36) NULL,
    `internationalInfoId` VARCHAR(36) NULL,
    `passportId` VARCHAR(36) NULL,
    `enrollmentId` VARCHAR(36) NULL,
    `paymentId` VARCHAR(36) NULL,
    `oldEducationId` VARCHAR(36) NULL,
    `metadataId` VARCHAR(36) NULL,

    UNIQUE INDEX `REL_7971f13d62ef217539f5da84dd`(`currentEducationId`),
    UNIQUE INDEX `REL_1a21e177fb148252c3ab75ec1b`(`internationalInfoId`),
    UNIQUE INDEX `REL_9e7c04db728e0a5cc43fcb4f70`(`passportId`),
    UNIQUE INDEX `REL_28f76a3d5ff4079edc86be38e6`(`enrollmentId`),
    UNIQUE INDEX `REL_72694fc8263742a3a697a028ba`(`paymentId`),
    UNIQUE INDEX `REL_6b29eea895bb48a63cfa4649c1`(`oldEducationId`),
    UNIQUE INDEX `REL_32e00f28d91c75eaaf3e47bcf1`(`metadataId`),
    INDEX `FK_5c96950360dd244012098d62337`(`tutorId`),
    INDEX `FK_aa9acae5452799058bad352587f`(`representativeId`),
    INDEX `FK_f28ab651c181015c3b96e5b7fc6`(`agentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tutors` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('Администратор', 'Редактор', 'Читатель') NOT NULL DEFAULT 'Читатель',
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `createdById` VARCHAR(36) NULL,

    INDEX `FK_51d635f1d983d505fb5a2f44c52`(`createdById`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `current_educations` ADD CONSTRAINT `FK_ee43214bfaa54ad7259ed5e4e83` FOREIGN KEY (`educationalProgramId`) REFERENCES `educational_programs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `metadatas` ADD CONSTRAINT `FK_f518f4f051aecbfcca60da242e2` FOREIGN KEY (`createdById`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `student_payments` ADD CONSTRAINT `FK_2e8ba56a661fe6a1de06933aa53` FOREIGN KEY (`paymentsId`) REFERENCES `payments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `FK_1a21e177fb148252c3ab75ec1b1` FOREIGN KEY (`internationalInfoId`) REFERENCES `international_infos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `FK_28f76a3d5ff4079edc86be38e6a` FOREIGN KEY (`enrollmentId`) REFERENCES `enrollments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `FK_32e00f28d91c75eaaf3e47bcf15` FOREIGN KEY (`metadataId`) REFERENCES `metadatas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `FK_5c96950360dd244012098d62337` FOREIGN KEY (`tutorId`) REFERENCES `tutors`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `FK_6b29eea895bb48a63cfa4649c1f` FOREIGN KEY (`oldEducationId`) REFERENCES `old_educations`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `FK_72694fc8263742a3a697a028ba6` FOREIGN KEY (`paymentId`) REFERENCES `payments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `FK_7971f13d62ef217539f5da84ddd` FOREIGN KEY (`currentEducationId`) REFERENCES `current_educations`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `FK_9e7c04db728e0a5cc43fcb4f700` FOREIGN KEY (`passportId`) REFERENCES `passports`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `FK_aa9acae5452799058bad352587f` FOREIGN KEY (`representativeId`) REFERENCES `representatives`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `FK_f28ab651c181015c3b96e5b7fc6` FOREIGN KEY (`agentId`) REFERENCES `agents`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `FK_51d635f1d983d505fb5a2f44c52` FOREIGN KEY (`createdById`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
