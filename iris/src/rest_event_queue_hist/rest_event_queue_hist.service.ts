import { Injectable } from '@nestjs/common';
import { RestEventQueueHist } from 'gtsrest_db/entities/RestEventQueueHist';
import { AbstractService } from 'src/common/abstract.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class RestEventQueueHistService extends AbstractService {
  constructor(
    @InjectRepository(RestEventQueueHist)
    private RestApiReqLogRepository: Repository<RestEventQueueHist>,
    protected readonly dataSource: DataSource,
  ) {
    super(dataSource, RestApiReqLogRepository);
  }
}
