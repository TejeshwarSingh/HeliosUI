import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestEventQueueHist } from 'src/entities/RestEventQueueHist';
import { RestEventQueueHistController } from './rest_event_queue_hist.controller';
import { RestEventQueueHistService } from './rest_event_queue_hist.service';

@Module({
  imports: [TypeOrmModule.forFeature([RestEventQueueHist])],
  controllers: [RestEventQueueHistController],
  providers: [RestEventQueueHistService],
})
export class RestEventQueueHistModule {}
