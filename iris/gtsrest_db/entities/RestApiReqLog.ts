import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("REST_API_REQ_LOG_IDX01", ["scriptName"], {})
@Index("REST_API_REQ_LOG_IDX02", ["extMsgId"], {})
@Index("REST_API_REQ_LOG_IDX03", ["parentLogId"], {})
@Index("REST_API_REQ_LOG_IDX04", ["logId", "sysNc00033"], {})
@Index("REST_API_REQ_LOG_IDX05", ["internalSessionId"], {})
@Index("REST_API_REQ_LOG_PK", ["logId"], {})
@Index("REST_API_REQ_LOG_UK01", ["internalMsgId"], {})
@Entity("REST_API_REQ_LOG")
export class RestApiReqLog {
  @Column("number", { name: "EMAIL_GROUP_ID", nullable: true })
  emailGroupId: number | null;

  @Column("varchar2", { name: "PROJECT_CD", nullable: true, length: 5 })
  projectCd: string | null;

  @Column("varchar2", { name: "INTERNAL_URL_VER", nullable: true, length: 20 })
  internalUrlVer: string | null;

  @Column("varchar2", { name: "SYSTEM_CD", nullable: true, length: 20 })
  systemCd: string | null;

  @Column("varchar2", { name: "MESSAGE_TYPE", nullable: true, length: 50 })
  messageType: string | null;

  @Column("date", { name: "DATE_MODIFIED", nullable: true })
  dateModified: Date | null;

  @Column("varchar2", { name: "MODIFIED_BY", nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column("date", { name: "DATE_CREATED", default: () => "SYSDATE" })
  dateCreated: Date;

  @Column("varchar2", { name: "CREATED_BY", length: 50, default: () => "user" })
  createdBy: string;

  @Column("number", { name: "PARENT_LOG_ID", nullable: true })
  parentLogId: number | null;

  @Column("varchar2", { name: "EXT_REF_ID", nullable: true, length: 80 })
  extRefId: string | null;

  @Column("varchar2", { name: "ITIMS_REF_ID", nullable: true, length: 80 })
  itimsRefId: string | null;

  @Column("varchar2", {
    name: "MSG_REQ_PAYLOADS",
    nullable: true,
    length: 4000,
  })
  msgReqPayloads: string | null;

  @Column("varchar2", { name: "MSG_REQ_TYPE", nullable: true, length: 80 })
  msgReqType: string | null;

  @Column("clob", { name: "MSG_RESP_TEXT", nullable: true })
  msgRespText: string | null;

  @Column("clob", { name: "MSG_REQ_TEXT", nullable: true })
  msgReqText: string | null;

  @Column("varchar2", { name: "EXT_MSG_ID", nullable: true, length: 60 })
  extMsgId: string | null;

  @Column("varchar2", {
    name: "INTERNAL_MSG_ID",
    nullable: true,
    unique: true,
    length: 60,
    default: () => "sys_guid()",
  })
  internalMsgId: string | null;

  @Column("varchar2", { name: "X_USER_NAME", nullable: true, length: 100 })
  xUserName: string | null;

  @Column("varchar2", { name: "QUERY_STRING", nullable: true, length: 4000 })
  queryString: string | null;

  @Column("varchar2", { name: "PATH_INFO", nullable: true, length: 4000 })
  pathInfo: string | null;

  @Column("varchar2", { name: "SERVER_NAME", nullable: true, length: 500 })
  serverName: string | null;

  @Column("varchar2", { name: "REMOTE_ADDRESS", nullable: true, length: 500 })
  remoteAddress: string | null;

  @Column("varchar2", { name: "SCRIPT_NAME", nullable: true, length: 4000 })
  scriptName: string | null;

  @Column("varchar2", { name: "SERVER_PORT", nullable: true, length: 20 })
  serverPort: string | null;

  @Column("varchar2", { name: "RESULT_MSG", nullable: true, length: 4000 })
  resultMsg: string | null;

  @Column("varchar2", { name: "RESULT_STATUS", nullable: true, length: 20 })
  resultStatus: string | null;

  @Column("varchar2", { name: "REQUEST_METHOD", nullable: true, length: 20 })
  requestMethod: string | null;

  @Column("varchar2", { name: "LOG_INFO", nullable: true, length: 4000 })
  logInfo: string | null;

  @Column("timestamp with time zone", {
    name: "LOG_DATE",
    nullable: true,
    scale: 6,
    default: () => "current_timestamp",
  })
  logDate: Date | null;

  @PrimaryGeneratedColumn({ type: "number", name: "LOG_ID" })
  logId: number;

  @Column("varchar2", { name: "KEYNAME", nullable: true, length: 120 })
  keyname: string | null;

  @Column("varchar2", {
    name: "INTERNAL_SESSION_ID",
    nullable: true,
    length: 60,
  })
  internalSessionId: string | null;

  @ManyToOne(
    () => RestApiReqLog,
    (restApiReqLog) => restApiReqLog.restApiReqLogs
  )
  @JoinColumn([{ name: "PARENT_LOG_ID", referencedColumnName: "logId" }])
  parentLog: RestApiReqLog;

  @OneToMany(() => RestApiReqLog, (restApiReqLog) => restApiReqLog.parentLog)
  restApiReqLogs: RestApiReqLog[];
}
