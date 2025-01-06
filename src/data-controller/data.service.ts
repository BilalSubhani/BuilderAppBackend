import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Data } from './schemas/data.schemas';
import { Model } from 'mongoose';


import { CreateDataDto } from './dto/create-data.dto';
import { UpdateDataDto } from './dto/update-data.dto';

@Injectable()
export class DataService {
    constructor(
        @InjectModel(Data.name)
        private readonly dataModel: Model<Data>,
    ) {}

    async createDataInMongo(data: CreateDataDto): Promise<Data> {
        try {
        const latestData = await this.dataModel
            .findOne()
            .sort({ version: -1 })
            .exec();

        let newVersion = 1;
        if (latestData) {
            newVersion = latestData.version + 1;
            await this.dataModel.deleteMany({ version: { $lt: newVersion - 1 } });
        }

        const newData = new this.dataModel({ ...data, version: newVersion });

        return await newData.save();
        } catch (error) {
        throw new Error(`Error creating data: ${error.message}`);
        }
    }

    async getAllDataFromMongo(): Promise<Data[]> {
        try {
        return await this.dataModel.find().sort({ version: -1 }).exec();
        } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
        }
    }

    async updateDataInMongo(id: string, data: UpdateDataDto): Promise<Data> {
        try {
        const existingData = await this.dataModel.findById(id).exec();

        if (!existingData) {
            throw new Error('Data not found');
        }

        const newVersion = existingData.version + 1;
        const updatedData = await this.dataModel.findByIdAndUpdate(
            id,
            { ...data, version: newVersion },
            { new: true },
        ).exec();

        await this.dataModel.deleteMany({
            _id: id,
            version: { $lt: newVersion },
        });

        return updatedData;
        } catch (error) {
        throw new Error(`Error updating data: ${error.message}`);
        }
    }

    async getLatestComponentData(componentName: string): Promise<any> {
        try {
          const latestData = await this.dataModel
            .findOne()
            .sort({ version: -1 }) 
            .select(`components.${componentName}`)
            .exec();
    
          if (!latestData) {
            return null;
          }
    
          return latestData.components[componentName];
        } catch (error) {
          throw new Error(`Error fetching component data: ${error.message}`);
        }
    }
}
