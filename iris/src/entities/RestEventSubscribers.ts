import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RestEvent } from './RestEvent';
import { RestApiProjSystems } from './RestApiProjSystems';
import { RestEventSubTran } from './RestEventSubTran';

@Index('REST_EVENT_SUBSCRIBERS_IDX01', ['restEventId'], {})
@Index('REST_EVENT_SUBSCRIBERS_IDX02', ['systemId'], {})
@Index('REST_EVENT_SUBSCRIBERS_PK', ['restEventSubscribersId'], {
  unique: true,
})
@Index(
  'REST_EVENT_SUBSCRIBERS_UK',
  ['projectId', 'restEventId', 'systemId', 'processOrder'],
  { unique: true },
)
@Entity({ name: 'REST_EVENT_SUBSCRIBERS', schema: 'GTSREST' }) // { name:'' , schema: 'GTSREST' }
export class RestEventSubscribers {
  @Column('varchar2', { name: 'EXTERNAL_URL', nullable: true, length: 4000 })
  externalUrl: string | null;

  @Column('varchar2', { name: 'DEPENDS_ON', nullable: true, length: 400 })
  dependsOn: string | null;

  @Column('varchar2', { name: 'INTERNAL_URL', nullable: true, length: 4000 })
  internalUrl: string | null;

  @Column('date', { name: 'DATE_MODIFIED', nullable: true })
  dateModified: Date | null;

  @Column('varchar2', { name: 'MODIFIED_BY', nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column('date', { name: 'DATE_CREATED' })
  dateCreated: Date;

  @Column('varchar2', { name: 'CREATED_BY', length: 50 })
  createdBy: string;

  @Column('varchar2', { name: 'PROCESSING_MSG', nullable: true, length: 4000 })
  processingMsg: string | null;

  @Column('number', { name: 'PROCESS_ORDER', unique: true })
  processOrder: number;

  @Column('varchar2', {
    name: 'INTERNAL_URL_HANDLER',
    nullable: true,
    length: 15,
  })
  internalUrlHandler: string | null;

  @Column('varchar2', { name: 'INTERNAL_URL_VER', nullable: true, length: 20 })
  internalUrlVer: string | null;

  @Column('varchar2', {
    name: 'EXTERNAL_URL_HANDLER',
    nullable: true,
    length: 15,
  })
  externalUrlHandler: string | null;

  @Column('number', { name: 'REST_EVENT_ID', unique: true })
  restEventId: number;

  @Column('number', { name: 'PROJECT_ID', unique: true })
  projectId: number;

  @Column('number', { name: 'SYSTEM_ID', nullable: true, unique: true })
  systemId: number | null;

  @PrimaryGeneratedColumn({ type: 'number', name: 'REST_EVENT_SUBSCRIBERS_ID' })
  restEventSubscribersId: number;

  @Column('varchar2', { name: 'ACTIVE_YN', length: 1, default: () => "'Y'" })
  activeYn: string;

  @ManyToOne(() => RestEvent, (restEvent) => restEvent.restEventSubscribers)
  @JoinColumn([{ name: 'REST_EVENT_ID', referencedColumnName: 'restEventId' }])
  restEvent: RestEvent;

  @ManyToOne(
    () => RestApiProjSystems,
    (restApiProjSystems) => restApiProjSystems.restEventSubscribers,
  )
  @JoinColumn([{ name: 'SYSTEM_ID', referencedColumnName: 'systemId' }])
  system: RestApiProjSystems;

  @OneToMany(
    () => RestEventSubTran,
    (restEventSubTran) => restEventSubTran.restEventSubscribers,
  )
  restEventSubTrans: RestEventSubTran[];
}
