import { Module } from '@nestjs/common';
import { RestApiReqLogController } from './rest_api_req_log.controller';
import { RestApiReqLogService } from './rest_api_req_log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestApiReqLog } from 'src/entities/RestApiReqLog';

@Module({
  imports: [TypeOrmModule.forFeature([RestApiReqLog])],
  controllers: [RestApiReqLogController],
  providers: [RestApiReqLogService],
})
export class RestApiReqLogModule {}
