import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RestEvent } from "./RestEvent";

@Index("REST_EVENT_QUEUE_HIST_IDX01", ["restEventId"], {})
@Index("REST_EVENT_QUEUE_HIST_IDX02", ["internalSessionId"], {})
@Index("REST_EVENT_QUEUE_HIST_PK", ["restEventQueueHistId"], { unique: true })
@Entity("REST_EVENT_QUEUE_HIST")
export class RestEventQueueHist {
  @Column("date", { name: "EVENT_DATE" })
  eventDate: Date;

  @PrimaryGeneratedColumn({ type: "number", name: "REST_EVENT_QUEUE_HIST_ID" })
  restEventQueueHistId: number;

  @Column("number", { name: "EMAIL_GROUP_ID", nullable: true })
  emailGroupId: number | null;

  @Column("date", { name: "DATE_MODIFIED", nullable: true })
  dateModified: Date | null;

  @Column("varchar2", { name: "MODIFIED_BY", nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column("date", { name: "DATE_CREATED" })
  dateCreated: Date;

  @Column("varchar2", { name: "CREATED_BY", length: 50 })
  createdBy: string;

  @Column("varchar2", {
    name: "TRIGGER_TABLE_OWNER",
    nullable: true,
    length: 30,
  })
  triggerTableOwner: string | null;

  @Column("varchar2", { name: "TRIGGER_TABLE", nullable: true, length: 50 })
  triggerTable: string | null;

  @Column("varchar2", {
    name: "EVENT_DESCRIPTION",
    nullable: true,
    length: 200,
  })
  eventDescription: string | null;

  @Column("varchar2", { name: "MESSAGE_TYPE", nullable: true, length: 50 })
  messageType: string | null;

  @Column("varchar2", { name: "EVENT_NAME", nullable: true, length: 100 })
  eventName: string | null;

  @Column("varchar2", { name: "PROCESSING_MSG", nullable: true, length: 4000 })
  processingMsg: string | null;

  @Column("varchar2", { name: "STATUS_FLAG", length: 20 })
  statusFlag: string;

  @Column("number", { name: "TRIGGER_TABLE_PK" })
  triggerTablePk: number;

  @Column("number", { name: "REST_EVENT_ID" })
  restEventId: number;

  @Column("date", { name: "PROCESSING_DATE", nullable: true })
  processingDate: Date | null;

  @Column("number", { name: "PROJECT_ID" })
  projectId: number;

  @Column("number", { name: "REST_EVENT_QUEUE_ID" })
  restEventQueueId: number;

  @Column("varchar2", {
    name: "INTERNAL_SESSION_ID",
    nullable: true,
    length: 60,
  })
  internalSessionId: string | null;

  @Column("date", { name: "DEQ_TIME", nullable: true })
  deqTime: Date | null;

  @Column("varchar2", { name: "MESSAGE_GROUP_CD", nullable: true, length: 120 })
  messageGroupCd: string | null;

  @ManyToOne(() => RestEvent, (restEvent) => restEvent.restEventQueueHists)
  @JoinColumn([{ name: "REST_EVENT_ID", referencedColumnName: "restEventId" }])
  restEvent: RestEvent;
}
