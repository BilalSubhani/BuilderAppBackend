import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { DataService } from './data.service';


import { Data } from './schemas/data.schemas';
import { UpdateDataDto } from './dto/update-data.dto';
import { CreateDataDto } from './dto/create-data.dto';

@Controller('data')
export class DataController {

  constructor(
    private dataService: DataService
  ) {}

  @Get('main')
  getNavbar() {
      return {
          "List":{
              "Item1": {
                  "name": "Home",
                  "link": "/main"
              },
              "Item2": {
                  "name": "About",
                  "link": "/burq"
              },
              "Item3": {
                  "name": "Contact",
                  "link": "/burq"
              }
          },
          "Button":{
              "name": "Back to Burq",
              "link": "/burq"
          }
      };
  }

  @Post()
  async createData(
    @Body() data: CreateDataDto,
  ): Promise<{ message: string; data?: Data }> {
    try {
      // console.log('Received data:', data);
      const newData = await this.dataService.createDataInMongo(data);
      // console.log('Saved data:', newData);
      return { message: 'Data uploaded successfully', data: newData };
    } 
    catch (error) {
      // console.error('Error occurred:', error);
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: error.message,
        message: 'Invalid data provided',
      },  HttpStatus.BAD_REQUEST );
    }
  }

  @Get()
  async getAllData(): Promise<{ message: string; data: Data[] }> {
    try {
      const data = await this.dataService.getAllDataFromMongo();
      return { message: 'Data fetched successfully', data };
    } 
    catch (error) {
      throw new HttpException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
          message: 'Failed to fetch data',
      },HttpStatus.INTERNAL_SERVER_ERROR,);
    }
  }

  @Put(':id')
  async updateData(
      @Param('id') id: string,
      @Body() data: UpdateDataDto,
  ): Promise<{ message: string; data?: Data }> {
    try {
      // console.log('Received data for update:', data);
      const updatedData = await this.dataService.updateDataInMongo(id, data);
      // console.log('Updated data:', updatedData);

      return { message: 'Data updated successfully', data: updatedData };
    } 
    catch (error) {
      // console.error('Error occurred while updating:', error);
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: error.message,
        message: 'Invalid data provided',
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('component/:componentName')
  async getLatestComponentData(
      @Param('componentName') componentName: string,
  ): Promise<{ message: string; data: any }> {
    try {
    const componentData = await this.dataService.getLatestComponentData(componentName);

    if (!componentData) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        message: 'Component data not found',
      }, HttpStatus.NOT_FOUND);
    }

    return { message: 'Latest component data fetched successfully', data: componentData };

    } 
    catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.message,
        message: 'Error occurred while fetching component data',
      },  HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
