export type UploadFilesType = {
  Passport?: Express.Multer.File[];
  Visa?: Express.Multer.File[];
  Payment?: Express.Multer.File[];
  Housing?: Express.Multer.File[];
  Default: Express.Multer.File[];
};
