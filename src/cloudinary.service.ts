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
            if (publicId) {
                v2.uploader.destroy(publicId, { resource_type: 'video' }, (destroyError, destroyResult) => {
                    if (destroyError) {
                        return reject(destroyError);
                    }
                    v2.uploader.upload(
                        filePath,
                        {
                            resource_type: 'video',
                            folder: 'videos',
                            public_id: publicId,
                        },
                        (uploadError, uploadResult) => {
                            if (uploadError) {
                                return reject(uploadError);
                            }
                            resolve(uploadResult);
                        }
                    );
                });
            } else {
                v2.uploader.upload(
                    filePath,
                    {
                        resource_type: 'video',
                        folder: 'videos',
                    },
                    (uploadError, uploadResult) => {
                        if (uploadError) {
                            return reject(uploadError);
                        }
                        resolve(uploadResult);
                    }
                );
            }
        });
    }
    getImage(publicId: string): string {
        const timestamp = new Date().getTime();
        return v2.url(`images/${publicId}`, {
            resource_type: 'image',
            version: timestamp
        });
    }
    
    getVideo(publicId: string): string {
        const timestamp = new Date().getTime(); 
        return v2.url(`videos/${publicId}`, {
            resource_type: 'video',
            version: timestamp
        });
    }
}
