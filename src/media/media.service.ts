import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from './schemas/file.schema';

@Injectable()
export class MediaService {

  constructor(
    @InjectModel('File') 
    private readonly fileModel: Model<File>
  ) {}

  async storeFile(file: Express.Multer.File) {
    const newFile = new this.fileModel({
      filename: file.originalname,
      contentType: file.mimetype,
      data: file.buffer,
    });

    return newFile.save();
  }

  async getFile(fileId: string) {
    const file = await this.fileModel.findById(fileId).exec();
    if (!file) {
      throw new Error('File not found');
    }
    return file;
  }
}