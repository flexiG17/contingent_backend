import { diskStorage } from 'multer';

export const myStorage = diskStorage({
  // Specify where to save the file
  destination: (req, file, cb) => {
    cb(null, './upload');
  },
  // Specify the file name
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});