import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestApiProjSystems } from '../entities/RestApiProjSystems';

import { RestApiProjSystemsController } from './rest_api_proj_systems.controller';
import { RestApiProjSystemsService } from './rest_api_proj_systems.service';

@Module({
  imports: [TypeOrmModule.forFeature([RestApiProjSystems])],
  controllers: [RestApiProjSystemsController],
  providers: [RestApiProjSystemsService],
})
export class RestApiProjSystemsModule {}
