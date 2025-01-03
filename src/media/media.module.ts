import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { FileSchema } from './schemas/file.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'File', schema: FileSchema }])
  ],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}