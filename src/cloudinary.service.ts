import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
    constructor() {
        v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }

    async uploadImage(
        filePath: string,
        publicId: string,
    ): Promise<UploadApiResponse | UploadApiErrorResponse> {
        return new Promise((resolve, reject) => {
            v2.uploader.upload(
                filePath,
                { folder: 'images', public_id: publicId },
                (error, result) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(result);
                },
            );
        });
    }

    async uploadVideo(
        filePath: string,
        publicId: string,
      ): Promise<UploadApiResponse | UploadApiErrorResponse> {
        return new Promise((resolve, reject) => {
          v2.uploader.upload(
            filePath,
            {
              resource_type: 'video',
              folder: 'videos',
              public_id: publicId,
            },
            (error, result) => {
              if (error) {
                return reject(error);
              }
              resolve(result);
            },
          );
        });
      }
      

      getImage(publicId: string): string {
        return v2.url(`images/${publicId}`, { resource_type: 'image' });
    }
    
    getVideo(publicId: string): string {
        return v2.url(`videos/${publicId}`, { resource_type: 'video' });
    }
    
}
