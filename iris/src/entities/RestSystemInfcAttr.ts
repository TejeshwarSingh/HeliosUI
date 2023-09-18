import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RestSystemInfc } from './RestSystemInfc';

@Index('REST_SYSTEM_INFC_ATTR_IDX01', ['restSystemInfcId'], {})
@Index('REST_SYSTEM_INFC_ATTR_PK', ['restSystemInfcAttrId'], {})
@Index('REST_SYSTEM_INFC_ATTR_UK', ['restSystemInfcId', 'attributeName'], {})
@Entity({ name: 'REST_SYSTEM_INFC_ATTR', schema: 'GTSREST' }) // { name:'' , schema: 'GTSREST' }
export class RestSystemInfcAttr {
  @Column('number', { name: 'SEQ_NO', nullable: true })
  seqNo: number | null;

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

  @Column('number', { name: 'PROJECT_ID' })
  projectId: number;

  @Column('varchar2', { name: 'NOTES', nullable: true, length: 4000 })
  notes: string | null;

  @Column('varchar2', {
    name: 'MAPPED_ITIMS_COLUMN_NAME',
    nullable: true,
    length: 60,
  })
  mappedItimsColumnName: string | null;

  @Column('varchar2', {
    name: 'MAPPED_ITIMS_TABLE_NAME',
    nullable: true,
    length: 60,
  })
  mappedItimsTableName: string | null;

  @Column('varchar2', {
    name: 'VALUE_TO_DEFAULT',
    nullable: true,
    length: 1000,
  })
  valueToDefault: string | null;

  @Column('varchar2', {
    name: 'DEFAULT_VALUE_YN',
    length: 1,
    default: () => "'N'",
  })
  defaultValueYn: string;

  @Column('varchar2', { name: 'REQUIRED_YN', length: 1, default: () => "'N'" })
  requiredYn: string;

  @Column('varchar2', {
    name: 'IN_TRANSFER_PAYLOAD_YN',
    length: 1,
    default: () => "'Y'",
  })
  inTransferPayloadYn: string;

  @Column('varchar2', { name: 'ATTRIBUTE_NAME', unique: true, length: 100 })
  attributeName: string;

  @Column('number', { name: 'REST_SYSTEM_INFC_ID', unique: true })
  restSystemInfcId: number;

  @PrimaryGeneratedColumn({ type: 'number', name: 'REST_SYSTEM_INFC_ATTR_ID' })
  restSystemInfcAttrId: number;

  @ManyToOne(
    () => RestSystemInfc,
    (restSystemInfc) => restSystemInfc.restSystemInfcAttrs,
  )
  @JoinColumn([
    { name: 'REST_SYSTEM_INFC_ID', referencedColumnName: 'restSystemInfcId' },
  ])
  restSystemInfc: RestSystemInfc;
}
