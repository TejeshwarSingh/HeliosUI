import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RestApiProjSystems } from "./RestApiProjSystems";
import { RestSystemInfcAttr } from "./RestSystemInfcAttr";

@Index("REST_SYSTEM_INFC_IDX01", ["systemId"], {})
@Index("REST_SYSTEM_INFC_IDX02", ["projectId"], {})
@Index("REST_SYSTEM_INFC_PK", ["restSystemInfcId"], {})
@Index(
  "REST_SYSTEM_INFC_UK",
  ["systemId", "interfaceCd", "projectId", "jsonLeftmostTag"],
  {}
)
@Entity("REST_SYSTEM_INFC")
export class RestSystemInfc {
  @Column("number", { name: "SEQ_NO", nullable: true })
  seqNo: number | null;

  @Column("number", { name: "PROJECT_ID", unique: true })
  projectId: number;

  @Column("varchar2", { name: "INTERFACE_CD", unique: true, length: 50 })
  interfaceCd: string;

  @Column("number", { name: "SYSTEM_ID", unique: true })
  systemId: number;

  @PrimaryGeneratedColumn({ type: "number", name: "REST_SYSTEM_INFC_ID" })
  restSystemInfcId: number;

  @Column("date", { name: "DATE_MODIFIED", nullable: true })
  dateModified: Date | null;

  @Column("varchar2", { name: "MODIFIED_BY", nullable: true, length: 50 })
  modifiedBy: string | null;

  @Column("date", { name: "DATE_CREATED", default: () => "SYSDATE" })
  dateCreated: Date;

  @Column("varchar2", { name: "CREATED_BY", length: 50, default: () => "user" })
  createdBy: string;

  @Column("varchar2", { name: "DEBUG_COMMENTS", nullable: true, length: 4000 })
  debugComments: string | null;

  @Column("varchar2", { name: "ACTIVE_YN", length: 1, default: () => "'Y'" })
  activeYn: string;

  @Column("varchar2", { name: "JSON_LEFTMOST_TAG", unique: true, length: 100 })
  jsonLeftmostTag: string;

  @ManyToOne(
    () => RestApiProjSystems,
    (restApiProjSystems) => restApiProjSystems.restSystemInfcs
  )
  @JoinColumn([{ name: "SYSTEM_ID", referencedColumnName: "systemId" }])
  system: RestApiProjSystems;

  @OneToMany(
    () => RestSystemInfcAttr,
    (restSystemInfcAttr) => restSystemInfcAttr.restSystemInfc
  )
  restSystemInfcAttrs: RestSystemInfcAttr[];
}
