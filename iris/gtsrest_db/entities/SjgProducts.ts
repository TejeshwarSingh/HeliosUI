import { Column, Entity, Index, OneToMany } from "typeorm";
import { SjgProdDetails } from "./SjgProdDetails";

@Index("TABLE1_PK", ["prodId"], { unique: true })
@Entity("SJG_PRODUCTS")
export class SjgProducts {
  @Column("varchar2", { name: "PROD_DESC", nullable: true, length: 50 })
  prodDesc: string | null;

  @Column("number", { primary: true, name: "PROD_ID" })
  prodId: number;

  @OneToMany(() => SjgProdDetails, (sjgProdDetails) => sjgProdDetails.prod)
  sjgProdDetails: SjgProdDetails[];
}
