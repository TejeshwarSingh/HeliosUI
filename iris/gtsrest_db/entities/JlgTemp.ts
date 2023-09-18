import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("JLG_TEMP")
export class JlgTemp {
  @Column("varchar2", {
    name: "CURRENT_SCHEMA",
    nullable: true,
    length: 100,
    default: () => "sys_context('userenv','current_schema')",
  })
  currentSchema: string | null;

  @Column("varchar2", {
    name: "THE_USER",
    nullable: true,
    length: 100,
    default: () => "user",
  })
  theUser: string | null;

  @Column("timestamp", {
    name: "DATE_CREATED",
    nullable: true,
    scale: 6,
    default: () => "systimestamp",
  })
  dateCreated: Date | null;

  @Column("varchar2", { name: "MESSAGE", nullable: true, length: 4000 })
  message: string | null;

  @PrimaryGeneratedColumn({ type: "number", name: "ID" })
  id: number;
}
