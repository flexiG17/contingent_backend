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
