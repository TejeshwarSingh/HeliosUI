import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { RestAppCtrl } from './RestAppCtrl';
import { RestEventSubscribers } from './RestEventSubscribers';
import { RestSystemInfc } from './RestSystemInfc';

@Index('REST_API_PROJ_SYS_UK01', ['systemCd', 'projectCd'], {})
@Index('REST_API_SYSTEMS_PK', ['systemId'], {})
@Entity({ name: 'REST_API_PROJ_SYSTEMS', schema: 'GTSREST' }) // { name:zzz , schema: 'GTSREST' }
export class RestApiProjSystems {
  @Column('date', { name: 'DATE_MODIFIED', nullable: true })
  dateModified: Date | null;

  @Column('varchar2', { name: 'MODIFIED_BY', nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column('date', { name: 'DATE_CREATED', default: () => 'SYSDATE' })
  dateCreated: Date;

  @Column('varchar2', { name: 'CREATED_BY', length: 50, default: () => 'user' })
  createdBy: string;

  @Column('varchar2', { name: 'ACTIVE_YN', length: 1, default: () => "'Y'" })
  activeYn: string;

  @Column('number', { name: 'PROJECT_ID' })
  projectId: number;

  @Column('varchar2', { primary: true, name: 'PROJECT_CD', length: 5 })
  projectCd: string;

  @Column('varchar2', { primary: true, name: 'SYSTEM_CD', length: 20 })
  systemCd: string;

  @PrimaryGeneratedColumn({ type: 'number', name: 'SYSTEM_ID' })
  systemId: number;

  @OneToMany(() => RestAppCtrl, (restAppCtrl) => restAppCtrl.system)
  restAppCtrls: RestAppCtrl[];

  @OneToMany(
    () => RestEventSubscribers,
    (restEventSubscribers) => restEventSubscribers.system,
  )
  restEventSubscribers: RestEventSubscribers[];

  @OneToMany(() => RestSystemInfc, (restSystemInfc) => restSystemInfc.system)
  restSystemInfcs: RestSystemInfc[];
}
