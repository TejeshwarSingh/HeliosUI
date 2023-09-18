import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("REST_INTEGRATION_RPT_IDX01", ["dateCreated"], {})
@Index("REST_INTEGRATION_RPT_IDX03", ["integrationType"], {})
@Index("REST_INTEGRATION_RPT_IDX04", ["systemCd"], {})
@Index("REST_INTEGRATION_RPT_PK", ["restIntegrationRptId"], {})
@Entity("REST_INTEGRATION_RPT")
export class RestIntegrationRpt {
  @Column("date", { name: "DATE_MODIFIED", nullable: true })
  dateModified: Date | null;

  @Column("varchar2", { name: "MODIFIED_BY", nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column("date", { name: "ROW_DATE_CREATED", default: () => "SYSDATE" })
  rowDateCreated: Date;

  @Column("varchar2", { name: "ERROR_MSG", nullable: true, length: 4000 })
  errorMsg: string | null;

  @Column("char", { name: "DIRECTION", nullable: true, length: 8 })
  direction: string | null;

  @Column("timestamp with time zone", {
    name: "LOG_DATE",
    nullable: true,
    scale: 6,
  })
  logDate: Date | null;

  @Column("date", { name: "DATE_CREATED", nullable: true })
  dateCreated: Date | null;

  @Column("number", { name: "INVTRY_ALLOC_ID", nullable: true })
  invtryAllocId: number | null;

  @Column("varchar2", { name: "PROCESS_STATE", nullable: true, length: 1 })
  processState: string | null;

  @Column("varchar2", { name: "TALLY_TYPE", nullable: true, length: 4 })
  tallyType: string | null;

  @Column("varchar2", { name: "TALLY_HDR_NO", nullable: true, length: 10 })
  tallyHdrNo: string | null;

  @Column("varchar2", {
    name: "SRC_LINE_EXT_REF_NO",
    nullable: true,
    length: 200,
  })
  srcLineExtRefNo: string | null;

  @Column("varchar2", {
    name: "SRC_HDR_EXT_REF_NO",
    nullable: true,
    length: 200,
  })
  srcHdrExtRefNo: string | null;

  @Column("varchar2", {
    name: "SRC_REQ_EXT_REF_NO",
    nullable: true,
    length: 200,
  })
  srcReqExtRefNo: string | null;

  @Column("varchar2", { name: "SRC_LINE_ID", nullable: true, length: 200 })
  srcLineId: string | null;

  @Column("varchar2", { name: "SRC_HDR_NO_OR_ID", nullable: true, length: 200 })
  srcHdrNoOrId: string | null;

  @Column("varchar2", { name: "SRC_REQ_NO", nullable: true, length: 50 })
  srcReqNo: string | null;

  @Column("varchar2", { name: "SRC_TYPE", nullable: true, length: 50 })
  srcType: string | null;

  @Column("varchar2", { name: "SYSTEM_CD", nullable: true, length: 20 })
  systemCd: string | null;

  @Column("varchar2", { name: "RESULT_STATUS", nullable: true, length: 20 })
  resultStatus: string | null;

  @Column("varchar2", { name: "CREATED_BY", nullable: true, length: 50 })
  createdBy: string | null;

  @Column("varchar2", { name: "INTEGRATION_TYPE", nullable: true, length: 50 })
  integrationType: string | null;

  @Column("number", { name: "PROJECT_ID", nullable: true })
  projectId: number | null;

  @Column("varchar2", { name: "PROJECT_CD", nullable: true, length: 10 })
  projectCd: string | null;

  @Column("number", { name: "LOG_ID", nullable: true })
  logId: number | null;

  @PrimaryGeneratedColumn({ type: "number", name: "REST_INTEGRATION_RPT_ID" })
  restIntegrationRptId: number;
}
