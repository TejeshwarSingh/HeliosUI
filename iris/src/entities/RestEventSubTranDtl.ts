import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RestEventSubTran } from './RestEventSubTran';

@Index('REST_EVENT_SUB_TRAN_DTL_IDX01', ['restEventSubTranId'], {})
@Index('REST_EVENT_SUB_TRAN_DTL_IDX02', ['restEventSubscribersId'], {})
@Index(
  'REST_EVENT_SUB_TRAN_DTL_IDX03',
  [
    'restEventSubTranId',
    'recordType',
    'udfn01',
    'udfn02',
    'statusFlag',
    'projectId',
  ],
  {},
)
@Index(
  'REST_EVENT_SUB_TRAN_DTL_IDX04',
  [
    'restEventSubTranId',
    'recordType',
    'udfc01',
    'udfc02',
    'statusFlag',
    'projectId',
  ],
  {},
)
@Index('REST_EVENT_SUB_TRAN_DTL_IDX05', ['internalSessionId'], {})
@Index('REST_EVENT_SUB_TRAN_DTL_PK', ['restEventSubTranDtlId'], {
  unique: true,
})
@Entity({ name: 'REST_EVENT_SUB_TRAN_DTL', schema: 'GTSREST' }) // { name:'' , schema: 'GTSREST' }
export class RestEventSubTranDtl {
  @Column('date', { name: 'DATE_MODIFIED', nullable: true })
  dateModified: Date | null;

  @Column('varchar2', { name: 'MODIFIED_BY', nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column('date', { name: 'DATE_CREATED' })
  dateCreated: Date;

  @Column('varchar2', { name: 'CREATED_BY', length: 50 })
  createdBy: string;

  @Column('date', { name: 'UDFD10', nullable: true })
  udfd10: Date | null;

  @Column('date', { name: 'UDFD09', nullable: true })
  udfd09: Date | null;

  @Column('date', { name: 'UDFD08', nullable: true })
  udfd08: Date | null;

  @Column('date', { name: 'UDFD07', nullable: true })
  udfd07: Date | null;

  @Column('date', { name: 'UDFD06', nullable: true })
  udfd06: Date | null;

  @Column('date', { name: 'UDFD05', nullable: true })
  udfd05: Date | null;

  @Column('date', { name: 'UDFD04', nullable: true })
  udfd04: Date | null;

  @Column('date', { name: 'UDFD03', nullable: true })
  udfd03: Date | null;

  @Column('date', { name: 'UDFD02', nullable: true })
  udfd02: Date | null;

  @Column('date', { name: 'UDFD01', nullable: true })
  udfd01: Date | null;

  @Column('varchar2', { name: 'UDFC10', nullable: true, length: 4000 })
  udfc10: string | null;

  @Column('varchar2', { name: 'UDFC09', nullable: true, length: 4000 })
  udfc09: string | null;

  @Column('varchar2', { name: 'UDFC08', nullable: true, length: 4000 })
  udfc08: string | null;

  @Column('varchar2', { name: 'UDFC07', nullable: true, length: 4000 })
  udfc07: string | null;

  @Column('varchar2', { name: 'UDFC06', nullable: true, length: 4000 })
  udfc06: string | null;

  @Column('varchar2', { name: 'UDFC05', nullable: true, length: 4000 })
  udfc05: string | null;

  @Column('varchar2', { name: 'UDFC04', nullable: true, length: 4000 })
  udfc04: string | null;

  @Column('varchar2', { name: 'UDFC03', nullable: true, length: 4000 })
  udfc03: string | null;

  @Column('varchar2', { name: 'UDFC02', nullable: true, length: 120 })
  udfc02: string | null;

  @Column('varchar2', { name: 'UDFC01', nullable: true, length: 120 })
  udfc01: string | null;

  @Column('number', { name: 'UDFN10', nullable: true })
  udfn10: number | null;

  @Column('number', { name: 'UDFN09', nullable: true })
  udfn09: number | null;

  @Column('number', { name: 'UDFN08', nullable: true })
  udfn08: number | null;

  @Column('number', { name: 'UDFN07', nullable: true })
  udfn07: number | null;

  @Column('number', { name: 'UDFN06', nullable: true })
  udfn06: number | null;

  @Column('number', { name: 'UDFN05', nullable: true })
  udfn05: number | null;

  @Column('number', { name: 'UDFN04', nullable: true })
  udfn04: number | null;

  @Column('number', { name: 'UDFN03', nullable: true })
  udfn03: number | null;

  @Column('number', { name: 'UDFN02', nullable: true })
  udfn02: number | null;

  @Column('number', { name: 'UDFN01', nullable: true })
  udfn01: number | null;

  @Column('varchar2', { name: 'INTERNAL_SESSION_ID', length: 60 })
  internalSessionId: string;

  @Column('number', { name: 'PROJECT_ID' })
  projectId: number;

  @Column('varchar2', { name: 'PROCESSING_MSG', nullable: true, length: 4000 })
  processingMsg: string | null;

  @Column('varchar2', { name: 'STATUS_FLAG', length: 20 })
  statusFlag: string;

  @Column('varchar2', { name: 'RECORD_TYPE', length: 20 })
  recordType: string;

  @Column('number', { name: 'REST_EVENT_SUBSCRIBERS_ID' })
  restEventSubscribersId: number;

  @Column('number', { name: 'REST_EVENT_SUB_TRAN_ID' })
  restEventSubTranId: number;

  @PrimaryGeneratedColumn({
    type: 'number',
    name: 'REST_EVENT_SUB_TRAN_DTL_ID',
  })
  restEventSubTranDtlId: number;

  @ManyToOne(
    () => RestEventSubTran,
    (restEventSubTran) => restEventSubTran.restEventSubTranDtls,
  )
  @JoinColumn([
    {
      name: 'REST_EVENT_SUB_TRAN_ID',
      referencedColumnName: 'restEventSubTranId',
    },
  ])
  restEventSubTran: RestEventSubTran;
}
