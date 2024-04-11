import { file_section } from '@prisma/client';

export const UploadFilesConst = [
  { name: file_section.Passport, maxCount: 3 },
  { name: file_section.Visa, maxCount: 3 },
  { name: file_section.Payment, maxCount: 3 },
  { name: file_section.Housing, maxCount: 3 },
  { name: file_section.Default, maxCount: 3 },
];
