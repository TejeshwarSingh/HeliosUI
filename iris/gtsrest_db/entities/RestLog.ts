import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("REST_LOG_IDX01", ["refInternalMsgId"], {})
@Index("REST_LOG_IDX02", ["oracleAudsid"], {})
@Index("REST_LOG_IDX03", ["groupingKey"], {})
@Index("REST_LOG_IDX04", ["projectId"], {})
@Index("REST_LOG_IDX05", ["pdate"], {})
@Index("REST_LOG_IDX06", ["refLogId"], {})
@Index("REST_LOG_IDX07", ["internalSessionId"], {})
@Index("REST_LOG_PK", ["restLogId"], {})
@Entity("REST_LOG")
export class RestLog {
  @Column("date", { name: "PDATE", default: () => "TRUNC(SYSDATE)" })
  pdate: Date;

  @Column("date", { name: "DATE_MODIFIED", nullable: true })
  dateModified: Date | null;

  @Column("varchar2", { name: "MODIFIED_BY", nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column("date", { name: "DATE_CREATED", default: () => "SYSDATE" })
  dateCreated: Date;

  @Column("varchar2", { name: "CREATED_BY", length: 50, default: () => "USER" })
  createdBy: string;

  @Column("varchar2", { name: "DEBUG_COMMENTS", nullable: true, length: 4000 })
  debugComments: string | null;

  @Column("varchar2", {
    name: "FORMAT_ERROR_BACKTRACE",
    nullable: true,
    length: 4000,
  })
  formatErrorBacktrace: string | null;

  @Column("varchar2", {
    name: "FORMAT_ERROR_STACK",
    nullable: true,
    length: 4000,
  })
  formatErrorStack: string | null;

  @Column("number", { name: "REF_LOG_ID", nullable: true })
  refLogId: number | null;

  @Column("varchar2", {
    name: "REF_INTERNAL_MSG_ID",
    nullable: true,
    length: 60,
  })
  refInternalMsgId: string | null;

  @Column("varchar2", { name: "GROUPING_KEY", nullable: true, length: 200 })
  groupingKey: string | null;

  @Column("number", { name: "ORACLE_AUDSID", nullable: true })
  oracleAudsid: number | null;

  @Column("number", { name: "PROJECT_ID" })
  projectId: number;

  @Column("varchar2", { name: "MODULE", nullable: true, length: 100 })
  module: string | null;

  @Column("clob", { name: "LOG_DESC_CLOB", nullable: true })
  logDescClob: string | null;

  @Column("varchar2", { name: "LOG_DESC", length: 4000 })
  logDesc: string;

  @Column("varchar2", { name: "LOG_CD", length: 10 })
  logCd: string;

  @PrimaryGeneratedColumn({ type: "number", name: "REST_LOG_ID" })
  restLogId: number;

  @Column("number", { name: "REF_REST_EVENT_QUEUE_ID", nullable: true })
  refRestEventQueueId: number | null;

  @Column("varchar2", {
    name: "INTERNAL_SESSION_ID",
    nullable: true,
    length: 60,
  })
  internalSessionId: string | null;
}
