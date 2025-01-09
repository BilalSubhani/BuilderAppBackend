import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// Modules, Services & Controllers

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MediaModule } from './media/media.module';
import { CloudinaryService } from './cloudinary.service';
import { MediaController } from './media-controller/media.controller';
import { MulterModule } from '@nestjs/platform-express';
import { DataModule } from './data-controller/data.module';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UsersModule,
    AuthModule,
    MediaModule, 
    DataModule,
    MulterModule.register({
      dest: './uploads',
    }),
    GatewayModule,
  ],
  controllers: [AppController, MediaController,],
  providers: [AppService, CloudinaryService],
})
export class AppModule {}
