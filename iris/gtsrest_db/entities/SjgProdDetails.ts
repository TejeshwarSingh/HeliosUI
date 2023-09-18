import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { SjgProducts } from "./SjgProducts";

@Entity("SJG_PROD_DETAILS")
export class SjgProdDetails {
  @Column("varchar2", { name: "UOM", nullable: true, length: 20 })
  uom: string | null;

  @Column("varchar2", { name: "PROD_MATERIAL", nullable: true, length: 20 })
  prodMaterial: string | null;

  @Column("number", { name: "PROD_OD", nullable: true })
  prodOd: number | null;

  @ManyToOne(() => SjgProducts, (sjgProducts) => sjgProducts.sjgProdDetails)
  @JoinColumn([{ name: "PROD_ID", referencedColumnName: "prodId" }])
  prod: SjgProducts;
}
