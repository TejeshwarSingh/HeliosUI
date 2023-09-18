import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { RestApiProjSystems } from '../entities/RestApiProjSystems';
import { AbstractService } from '../common/abstract.service';

@Injectable()
export class RestApiProjSystemsService extends AbstractService {
  constructor(
    @InjectRepository(RestApiProjSystems)
    private RestApiProjSystemsRepository: Repository<RestApiProjSystems>,
    protected readonly dataSource: DataSource,
  ) {
    super(dataSource, RestApiProjSystemsRepository);
  }
}
