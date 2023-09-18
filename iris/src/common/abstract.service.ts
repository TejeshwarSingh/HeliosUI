import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { resultAlldto } from './resultAlldto';

@Injectable()
export abstract class AbstractService {
  protected constructor(
    protected readonly dataSource: DataSource,
    protected readonly repository: Repository<any>,
  ) {}

  ///////////// all records //////
  async all(): Promise<any[]> {
    return this.repository.find();
  }

  async paginate(
    skip: number,
    take: number,
    where: string,
    order: string,
  ): Promise<resultAlldto> {
    const w = JSON.parse(where);
    const orderby = JSON.parse(order);
    const options = { where: w, order: orderby, skip: skip, take: take }; //, skip: skip, take: take // offset: skip, limit: take
    console.log('options=' + JSON.stringify(options));

    const data = await this.repository.find(options);
    const skip2 = skip + take;
    const options2 = { where: w, skip: skip2, take: 1 };
    const nextdata = await this.repository.find(options2);
    const nextrec = !!nextdata.length;

    return {
      data: data,
      meta: {
        skip: skip,
        take: take,
        more: nextrec,
      },
    };
  }

  async paginateSession(
    skip: number,
    take: number,
    where: string,
    order: string,
    system_cd: string,
    project_cd: string,
    dbuser: string,
  ): Promise<resultAlldto> {
    const queryRunner = this.dataSource.createQueryRunner();
    queryRunner.startTransaction();
    await this.repository.query(
      'call rest_utl.set_session_system_cd(:system_cd) ',
      [system_cd],
    );
    //console.log('1. SetAppUser ' + JSON.stringify(dbuser));
    await this.repository.query(
      `call tims2ctxset.SetAppUser(pappuser => :dbuser,i_ProjectCD => :projectcd) `,
      [dbuser, project_cd],
    );
    //console.log('2. SetAppUser ' + JSON.stringify(dbuser));

    const session_out = await this.repository.query(
      'select   gtsrest.rest_utl.get_session_system_cd  session_system_cd,tims2ctxset.getAppUser AppUser from dual',
    );
    console.log(
      'project_cd:' +
        project_cd +
        ' session_out:' +
        JSON.stringify(session_out),
    );

    return await this.paginate(skip, take, where, order);
  }

  async create(data): Promise<any> {
    return this.repository.save(data);
  }

  async fineOneBy(condition): Promise<any> {
    return this.repository.findOneBy(condition);
  }

  async update(id: number, data): Promise<any> {
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
