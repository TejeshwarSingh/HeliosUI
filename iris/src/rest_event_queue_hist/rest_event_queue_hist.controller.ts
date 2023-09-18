import { Controller, Get, Param, Query, Headers } from '@nestjs/common';
import { resultAlldto } from 'src/common/resultAlldto';
import { RestEventQueueHistService } from './rest_event_queue_hist.service';

// RestEventQueueHistService
@Controller('system_cd/:system_cd/project_cd/:project_cd/rest-event-queue-hist')
export class RestEventQueueHistController {
  constructor(private restEventQueueHistService: RestEventQueueHistService) {}

  @Get() // 'system_cd/:system_cd/project_cd/:project_cd'
  async getall(
    @Query('skip') skip = 0,
    @Query('take') take = 5,
    @Query('where') where = '{}',
    @Query('order') order = '{}',
    @Param('system_cd') system_cd: string,
    @Param('project_cd') project_cd: string,
    @Headers('x-user') dbuser: string,
  ): Promise<resultAlldto> {
    console.log('where=' + where);
    //console.log('dbuser=' + dbuser);
    return await this.restEventQueueHistService.paginateSession(
      skip,
      take,
      where,
      order,
      system_cd,
      project_cd,
      dbuser,
    );
  }
}
