import { CloudinaryService } from '../cloudinary.service';
import { Controller, Post, UploadedFile, UseInterceptors, Body, Get, Param } from '@nestjs/common';
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


    @Get('images/:public_id')
    async fetchImage(@Param('public_id') publicId: string) {
        try {
            const url = this.CloudinaryService.getImage(publicId);
            return { url };
        } catch (error) {
            console.log('Error fetching image:', error);
            throw new Error('Failed to fetch image');
        }
    }

    @Get('videos/:public_id')
    async fetchVideo(@Param('public_id') publicId: string) {
        try {
            const url = this.CloudinaryService.getVideo(publicId);
            return { url };
        } catch (error) {
            console.log('Error fetching video:', error);
            throw new Error('Failed to fetch video');
        }
    }
}