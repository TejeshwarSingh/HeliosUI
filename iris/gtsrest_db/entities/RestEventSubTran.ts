import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RestEventSubscribers } from "./RestEventSubscribers";
import { RestEventSubTranDtl } from "./RestEventSubTranDtl";

@Index("REST_EVENT_SUB_TRAN_IDX01", ["restEventSubscribersId"], {})
@Index("REST_EVENT_SUB_TRAN_IDX02", ["restEventQueueId"], {})
@Index("REST_EVENT_SUB_TRAN_PK", ["restEventSubTranId"], { unique: true })
@Entity("REST_EVENT_SUB_TRAN")
export class RestEventSubTran {
  @Column("number", { name: "REST_EVENT_ID" })
  restEventId: number;

  @Column("number", { name: "PROJECT_ID" })
  projectId: number;

  @Column("varchar2", { name: "SYSTEM_CD", nullable: true, length: 20 })
  systemCd: string | null;

  @Column("varchar2", { name: "DEPENDS_ON", nullable: true, length: 400 })
  dependsOn: string | null;

  @Column("number", { name: "PROCESS_ORDER", nullable: true })
  processOrder: number | null;

  @Column("varchar2", {
    name: "INTERNAL_URL_HANDLER",
    nullable: true,
    length: 15,
  })
  internalUrlHandler: string | null;

  @Column("varchar2", { name: "INTERNAL_URL_VER", nullable: true, length: 20 })
  internalUrlVer: string | null;

  @Column("varchar2", { name: "INTERNAL_URL", nullable: true, length: 4000 })
  internalUrl: string | null;

  @Column("varchar2", {
    name: "EXTERNAL_URL_HANDLER",
    nullable: true,
    length: 15,
  })
  externalUrlHandler: string | null;

  @Column("varchar2", { name: "EXTERNAL_URL", nullable: true, length: 4000 })
  externalUrl: string | null;

  @Column("date", { name: "DATE_MODIFIED", nullable: true })
  dateModified: Date | null;

  @Column("varchar2", { name: "MODIFIED_BY", nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column("date", { name: "DATE_CREATED" })
  dateCreated: Date;

  @Column("varchar2", { name: "CREATED_BY", length: 50 })
  createdBy: string;

  @Column("clob", { name: "EXTERNAL_RESPONSE_PAYLOAD", nullable: true })
  externalResponsePayload: string | null;

  @Column("clob", { name: "EXTERNAL_REQUEST_PAYLOAD", nullable: true })
  externalRequestPayload: string | null;

  @Column("clob", { name: "INTERNAL_REQUEST_PAYLOAD", nullable: true })
  internalRequestPayload: string | null;

  @Column("varchar2", { name: "PROCESSING_MSG", nullable: true, length: 4000 })
  processingMsg: string | null;

  @Column("varchar2", { name: "STATUS_FLAG", nullable: true, length: 20 })
  statusFlag: string | null;

  @Column("varchar2", { name: "EXTERNAL_MSG_ID", nullable: true, length: 60 })
  externalMsgId: string | null;

  @Column("varchar2", { name: "INTERNAL_MSG_ID", nullable: true, length: 60 })
  internalMsgId: string | null;

  @Column("number", { name: "TRIGGER_TABLE_PK" })
  triggerTablePk: number;

  @Column("varchar2", { name: "TRIGGER_TABLE_OWNER", length: 30 })
  triggerTableOwner: string;

  @Column("varchar2", { name: "TRIGGER_TABLE", length: 50 })
  triggerTable: string;

  @Column("varchar2", { name: "MESSAGE_TYPE", length: 50 })
  messageType: string;

  @Column("number", { name: "REST_EVENT_QUEUE_ID" })
  restEventQueueId: number;

  @Column("number", { name: "REST_EVENT_SUBSCRIBERS_ID" })
  restEventSubscribersId: number;

  @PrimaryGeneratedColumn({ type: "number", name: "REST_EVENT_SUB_TRAN_ID" })
  restEventSubTranId: number;

  @ManyToOne(
    () => RestEventSubscribers,
    (restEventSubscribers) => restEventSubscribers.restEventSubTrans
  )
  @JoinColumn([
    {
      name: "REST_EVENT_SUBSCRIBERS_ID",
      referencedColumnName: "restEventSubscribersId",
    },
  ])
  restEventSubscribers: RestEventSubscribers;

  @OneToMany(
    () => RestEventSubTranDtl,
    (restEventSubTranDtl) => restEventSubTranDtl.restEventSubTran
  )
  restEventSubTranDtls: RestEventSubTranDtl[];
}
