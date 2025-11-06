import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"

const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    try {
        if (!filePath) {
            throw new Error("File path is required");
        }

        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
            folder: "shop-images"
        });

        // Delete the temporary file after successful upload
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        return result.secure_url;
    } catch (error) {
        // Clean up the temporary file even if upload fails
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        console.error("Cloudinary upload error:", error);
        throw new Error(`Failed to upload image: ${error.message}`);
    }
}

export default uploadOnCloudinary