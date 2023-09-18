import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RestApiProjSystems } from './RestApiProjSystems';

@Index('REST_APP_CTRL_IDX01', ['systemId'], {})
@Index('REST_APP_CTRL_IDX02', ['projectId'], {})
@Index('REST_APP_CTRL_PK', ['restAppCtrlId'], {})
@Index('REST_APP_CTRL_UK', ['systemId', 'projectId', 'ctrlName'], {
  unique: true,
})
@Entity({ name: 'REST_APP_CTRL', schema: 'GTSREST' }) // { name:'' , schema: 'GTSREST' }
export class RestAppCtrl {
  @Column('date', { name: 'DATE_MODIFIED', nullable: true })
  dateModified: Date | null;

  @Column('varchar2', { name: 'MODIFIED_BY', nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column('date', { name: 'DATE_CREATED', default: () => 'SYSDATE' })
  dateCreated: Date;

  @Column('varchar2', { name: 'CREATED_BY', length: 50, default: () => 'user' })
  createdBy: string;

  @Column('varchar2', { name: 'DEBUG_COMMENTS', nullable: true, length: 4000 })
  debugComments: string | null;

  @Column('varchar2', { name: 'DESCRIPTION', length: 400 })
  description: string;

  @Column('varchar2', { name: 'ALLOW_VAL', length: 1000 })
  allowVal: string;

  @Column('varchar2', { name: 'CTRL_VAL', length: 1000 })
  ctrlVal: string;

  @Column('varchar2', { name: 'CTRL_NAME', unique: true, length: 60 })
  ctrlName: string;

  @Column('number', { name: 'PROJECT_ID', unique: true })
  projectId: number;

  @Column('number', { name: 'SYSTEM_ID', nullable: true, unique: true })
  systemId: number | null;

  @PrimaryGeneratedColumn({ type: 'number', name: 'REST_APP_CTRL_ID' })
  restAppCtrlId: number;

  @ManyToOne(
    () => RestApiProjSystems,
    (restApiProjSystems) => restApiProjSystems.restAppCtrls,
  )
  @JoinColumn([{ name: 'SYSTEM_ID', referencedColumnName: 'systemId' }])
  system: RestApiProjSystems;
}
