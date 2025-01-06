import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DataSchema } from './schemas/data.schemas';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'Data', schema: DataSchema}]),
    ],
    controllers: [DataController],
    providers: [DataService],
})
export class DataModule {}
