import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RestEventQueue } from './RestEventQueue';
import { RestEventQueueHist } from './RestEventQueueHist';
import { RestEventSubscribers } from './RestEventSubscribers';

@Index('REST_EVENT_PK', ['restEventId'], { unique: true })
@Index(
  'REST_EVENT_UK',
  ['eventName', 'triggerTable', 'triggerTableOwner', 'messageType'],
  { unique: true },
)
@Entity({ name: 'REST_EVENT', schema: 'GTSREST' }) // { name:'' , schema: 'GTSREST' }
export class RestEvent {
  @Column('date', { name: 'DATE_MODIFIED', nullable: true })
  dateModified: Date | null;

  @Column('varchar2', { name: 'MODIFIED_BY', nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column('date', { name: 'DATE_CREATED' })
  dateCreated: Date;

  @Column('varchar2', { name: 'CREATED_BY', length: 50 })
  createdBy: string;

  @Column('varchar2', { name: 'TRIGGER_TABLE_OWNER', unique: true, length: 30 })
  triggerTableOwner: string;

  @Column('varchar2', { name: 'TRIGGER_TABLE', unique: true, length: 50 })
  triggerTable: string;

  @Column('varchar2', {
    name: 'EVENT_DESCRIPTION',
    nullable: true,
    length: 200,
  })
  eventDescription: string | null;

  @Column('varchar2', { name: 'EVENT_NAME', unique: true, length: 100 })
  eventName: string;

  @PrimaryGeneratedColumn({ type: 'number', name: 'REST_EVENT_ID' })
  restEventId: number;

  @Column('varchar2', { name: 'ACTIVE_YN', length: 1, default: () => "'Y'" })
  activeYn: string;

  @Column('varchar2', { name: 'PROCESSING_MSG', nullable: true, length: 4000 })
  processingMsg: string | null;

  @Column('varchar2', { name: 'MESSAGE_TYPE', unique: true, length: 50 })
  messageType: string;

  @OneToMany(() => RestEventQueue, (restEventQueue) => restEventQueue.restEvent)
  restEventQueues: RestEventQueue[];

  @OneToMany(
    () => RestEventQueueHist,
    (restEventQueueHist) => restEventQueueHist.restEvent,
  )
  restEventQueueHists: RestEventQueueHist[];

  @OneToMany(
    () => RestEventSubscribers,
    (restEventSubscribers) => restEventSubscribers.restEvent,
  )
  restEventSubscribers: RestEventSubscribers[];
}
