const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wanderlust_DEV',
    allowedFormats: ["png", "jpg", "jpeg"], // supports promises as well
    public_id: (req, file) => {
      // 'computed-filename-using-request',
      // You can customize the public_id here
      // For example, you can use the current timestamp and the original file name
      return `${Date.now()}-${file.originalname.split('.')[0]}`;
    }
  },
});

module.exports = {
  cloudinary,
  storage
};