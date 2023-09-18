import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { RestApiReqLog } from 'src/entities/RestApiReqLog';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class RestApiReqLogService extends AbstractService {
  constructor(
    @InjectRepository(RestApiReqLog)
    private RestApiReqLogRepository: Repository<RestApiReqLog>,
    protected readonly dataSource: DataSource,
  ) {
    super(dataSource, RestApiReqLogRepository);
  }
}
