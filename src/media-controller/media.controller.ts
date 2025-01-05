import { CloudinaryService } from '../cloudinary.service';
import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('media')
export class MediaController {
    constructor(private readonly CloudinaryService: CloudinaryService) {}

    @Post('upload/image')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(
        @UploadedFile() file: Express.Multer.File,
        @Body('public_id') publicId: string,
    ) {
        try {
            const result = await this.CloudinaryService.uploadImage(file.path, publicId);
            return result;
        } catch (error) {
            console.log('Error uploading image:', error);
            throw new Error('Failed to upload image');
        }
    }

    @Post('upload/video')
    @UseInterceptors(FileInterceptor('file'))
    async uploadVideo(
        @UploadedFile() file: Express.Multer.File,
        @Body('public_id') publicId: string,
    ) {
        try {
            const result = await this.CloudinaryService.uploadVideo(file.path, publicId);
            return result;
        } catch (error) {
            console.log('Error uploading video:', error);
            throw new Error('Failed to upload video');
        }
    }
}
