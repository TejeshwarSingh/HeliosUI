import { Controller, Get, Query } from '@nestjs/common';
import { resultAlldto } from 'src/common/resultAlldto';
import { RestApiProjSystemsService } from './rest_api_proj_systems.service';

@Controller('rest-api-proj-systems')
export class RestApiProjSystemsController {
  constructor(private restApiProjSystemsService: RestApiProjSystemsService) {}

  @Get()
  async getall(
    @Query('skip') skip = 0,
    @Query('take') take = 5,
    @Query('where') where = '{}',
    @Query('order') order = '{}',
  ): Promise<resultAlldto> {
    console.log('where=' + where);
    return await this.restApiProjSystemsService.paginate(
      skip,
      take,
      where,
      order,
    );
  }
}
