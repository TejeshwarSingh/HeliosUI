import { Column, Entity } from "typeorm";

@Entity("SSG_DEBUG")
export class SsgDebug {
  @Column("varchar2", { name: "DEBUG_MSG", nullable: true, length: 4000 })
  debugMsg: string | null;
}
