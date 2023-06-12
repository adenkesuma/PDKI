-- CreateTable
CREATE TABLE `news` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `publishedDate` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NULL,
    `video` VARCHAR(191) NULL,
    `tags` VARCHAR(191) NULL,
    `category` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `member` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `namaSertifikat` VARCHAR(191) NOT NULL,
    `subspesialisasi` VARCHAR(191) NOT NULL,
    `asalInstitusi` VARCHAR(191) NOT NULL,
    `pasFoto` VARCHAR(191) NOT NULL,
    `noSeri` VARCHAR(191) NOT NULL,
    `noSerkom` VARCHAR(191) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` DATETIME(3) NOT NULL,
    `noIdi` VARCHAR(191) NOT NULL,
    `npaPdki` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `member_noSeri_key`(`noSeri`),
    UNIQUE INDEX `member_noSerkom_key`(`noSerkom`),
    UNIQUE INDEX `member_noIdi_key`(`noIdi`),
    UNIQUE INDEX `member_npaPdki_key`(`npaPdki`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `video` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `videoUrl` VARCHAR(191) NOT NULL,
    `thubmnailUrl` VARCHAR(191) NULL,
    `harga` VARCHAR(191) NULL,
    `publishedDate` DATETIME(3) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `tags` VARCHAR(191) NOT NULL,
    `views` VARCHAR(191) NOT NULL,
    `instructor` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
