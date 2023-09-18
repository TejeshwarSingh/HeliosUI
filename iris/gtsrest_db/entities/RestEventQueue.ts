import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RestEvent } from "./RestEvent";

@Index("REST_EVENT_QUEUE_IDX01", ["restEventId"], {})
@Index("REST_EVENT_QUEUE_IDX02", ["messageGroupCd"], {})
@Index("REST_EVENT_QUEUE_IDX03", ["internalSessionId"], {})
@Index("REST_EVENT_QUEUE_PK", ["restEventQueueId"], { unique: true })
@Index("REST_EVENT_QUEUE_UK", ["restEventId", "triggerTablePk"], {
  unique: true,
})
@Entity("REST_EVENT_QUEUE")
export class RestEventQueue {
  @Column("date", { name: "DATE_MODIFIED", nullable: true })
  dateModified: Date | null;

  @Column("varchar2", { name: "MODIFIED_BY", nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column("date", { name: "DATE_CREATED" })
  dateCreated: Date;

  @Column("varchar2", { name: "CREATED_BY", length: 50 })
  createdBy: string;

  @Column("varchar2", { name: "PROCESSING_MSG", nullable: true, length: 4000 })
  processingMsg: string | null;

  @Column("varchar2", { name: "STATUS_FLAG", length: 20 })
  statusFlag: string;

  @Column("number", { name: "TRIGGER_TABLE_PK", unique: true })
  triggerTablePk: number;

  @Column("timestamp with time zone", { name: "EVENT_DATE", scale: 6 })
  eventDate: Date;

  @Column("number", { name: "PROJECT_ID" })
  projectId: number;

  @PrimaryGeneratedColumn({ type: "number", name: "REST_EVENT_QUEUE_ID" })
  restEventQueueId: number;

  @Column("number", { name: "REST_EVENT_ID", unique: true })
  restEventId: number;

  @Column("varchar2", {
    name: "INTERNAL_SESSION_ID",
    nullable: true,
    length: 60,
  })
  internalSessionId: string | null;

  @Column("varchar2", { name: "MESSAGE_GROUP_CD", nullable: true, length: 120 })
  messageGroupCd: string | null;

  @Column("date", { name: "DEQ_TIME", nullable: true })
  deqTime: Date | null;

  @ManyToOne(() => RestEvent, (restEvent) => restEvent.restEventQueues)
  @JoinColumn([{ name: "REST_EVENT_ID", referencedColumnName: "restEventId" }])
  restEvent: RestEvent;
}
