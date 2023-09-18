import { Controller, Get, Param, Query } from '@nestjs/common';
import { resultAlldto } from 'src/common/resultAlldto';
import { RestApiReqLogService } from './rest_api_req_log.service';

@Controller('rest-api-req-log')
export class RestApiReqLogController {
  constructor(private restApiReqLogService: RestApiReqLogService) {}

  @Get()
  async getall(
    @Query('skip') skip = 0,
    @Query('take') take = 5,
    @Query('where') where = '{}',
    @Query('order') order = '{}',
  ): Promise<resultAlldto> {
    console.log('where=' + where);
    return await this.restApiReqLogService.paginate(skip, take, where, order);
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    console.log('logId:' + id);
    return await this.restApiReqLogService.fineOneBy({ logId: id });
  }
}
