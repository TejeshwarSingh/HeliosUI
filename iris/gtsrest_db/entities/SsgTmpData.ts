import { Column, Entity } from "typeorm";

@Entity("SSG_TMP_DATA")
export class SsgTmpData {
  @Column("number", { name: "AGE_MONTHS", nullable: true })
  ageMonths: number | null;

  @Column("number", {
    name: "AGE_DAYS",
    nullable: true,
    precision: 38,
    scale: 0,
  })
  ageDays: number | null;

  @Column("varchar2", { name: "ENTITY_PROD_REF", nullable: true, length: 50 })
  entityProdRef: string | null;

  @Column("varchar2", { name: "PURCH_ORG_NAME", nullable: true, length: 80 })
  purchOrgName: string | null;

  @Column("varchar2", { name: "PURCH_ORG_CD", nullable: true, length: 10 })
  purchOrgCd: string | null;

  @Column("varchar2", { name: "PROD_DESC", nullable: true, length: 1000 })
  prodDesc: string | null;

  @Column("varchar2", { name: "PROD_MBR_NAME", nullable: true, length: 15 })
  prodMbrName: string | null;

  @Column("varchar2", {
    name: "FIT_FOR_PURPOSE_CD",
    nullable: true,
    length: 10,
  })
  fitForPurposeCd: string | null;

  @Column("varchar2", { name: "CONDITION", nullable: true, length: 50 })
  condition: string | null;

  @Column("varchar2", { name: "SHIPNO", nullable: true, length: 25 })
  shipno: string | null;

  @Column("varchar2", { name: "CONTRACTNO", nullable: true, length: 20 })
  contractno: string | null;

  @Column("number", { name: "PROD_ID", nullable: true })
  prodId: number | null;

  @Column("number", { name: "PHYSICAL_AVAILABLE_QTY2", nullable: true })
  physicalAvailableQty2: number | null;

  @Column("number", { name: "PHYSICAL_AVAILABLE_QTY1", nullable: true })
  physicalAvailableQty1: number | null;

  @Column("varchar2", { name: "UOM2", nullable: true, length: 3 })
  uom2: string | null;

  @Column("number", { name: "OH2", nullable: true })
  oh2: number | null;

  @Column("varchar2", { name: "UOM1", nullable: true, length: 3 })
  uom1: string | null;

  @Column("number", { name: "OH1", nullable: true })
  oh1: number | null;

  @Column("varchar2", { name: "YARD", nullable: true, length: 10 })
  yard: string | null;

  @Column("varchar2", { name: "OWNERSHIP", nullable: true, length: 20 })
  ownership: string | null;

  @Column("varchar2", { name: "INTERIM_FLAG", nullable: true, length: 1 })
  interimFlag: string | null;

  @Column("varchar2", { name: "CMDTY", nullable: true, length: 4000 })
  cmdty: string | null;

  @Column("varchar2", { name: "MISC", nullable: true, length: 4000 })
  misc: string | null;

  @Column("varchar2", { name: "MAKEUP", nullable: true, length: 4000 })
  makeup: string | null;

  @Column("varchar2", { name: "COATING", nullable: true, length: 4000 })
  coating: string | null;

  @Column("varchar2", { name: "ENDCONFIG", nullable: true, length: 4000 })
  endconfig: string | null;

  @Column("varchar2", { name: "DRIFT", nullable: true, length: 4000 })
  drift: string | null;

  @Column("varchar2", { name: "EF", nullable: true, length: 4000 })
  ef: string | null;

  @Column("varchar2", { name: "RANGE", nullable: true, length: 4000 })
  range: string | null;

  @Column("varchar2", { name: "GRADE", nullable: true, length: 4000 })
  grade: string | null;

  @Column("varchar2", { name: "WTHK", nullable: true, length: 4000 })
  wthk: string | null;

  @Column("varchar2", { name: "WT", nullable: true, length: 4000 })
  wt: string | null;

  @Column("varchar2", { name: "OD", nullable: true, length: 4000 })
  od: string | null;

  @Column("varchar2", {
    name: "PROD_ATTR_STRING",
    nullable: true,
    length: 4000,
  })
  prodAttrString: string | null;

  @Column("varchar2", { name: "ACTIVE_FLAG", nullable: true, length: 1 })
  activeFlag: string | null;

  @Column("varchar2", { name: "PROJECT_CD", nullable: true, length: 3 })
  projectCd: string | null;

  @Column("number", { name: "PURCH_ORG_ID", nullable: true })
  purchOrgId: number | null;

  @Column("varchar2", { name: "QUALITY_CD", nullable: true, length: 5 })
  qualityCd: string | null;

  @Column("number", { name: "QUALITY_ID", nullable: true })
  qualityId: number | null;

  @Column("varchar2", { name: "MFG_FACILITY_CD", nullable: true, length: 10 })
  mfgFacilityCd: string | null;

  @Column("varchar2", { name: "CUSTOMS_CLASS_CD", nullable: true, length: 5 })
  customsClassCd: string | null;

  @Column("number", { name: "OO_MT", nullable: true })
  ooMt: number | null;

  @Column("number", { name: "OO_ST", nullable: true })
  ooSt: number | null;

  @Column("number", { name: "OH_MT", nullable: true })
  ohMt: number | null;

  @Column("number", { name: "OH_ST", nullable: true })
  ohSt: number | null;

  @Column("number", { name: "OO2", nullable: true })
  oo2: number | null;

  @Column("number", { name: "OO1", nullable: true })
  oo1: number | null;

  @Column("varchar2", { name: "MKT_DESCRIPTION", nullable: true, length: 1000 })
  mktDescription: string | null;

  @Column("varchar2", { name: "MARKETABILITY_FLAG", nullable: true, length: 1 })
  marketabilityFlag: string | null;

  @Column("number", { name: "INVTRY_ITEM_ID", nullable: true })
  invtryItemId: number | null;

  @Column("varchar2", { name: "OWNER_GRP_NAME", nullable: true, length: 50 })
  ownerGrpName: string | null;

  @Column("varchar2", { name: "OWNER_NAME", nullable: true, length: 60 })
  ownerName: string | null;

  @Column("varchar2", { name: "OWNER_GRP_CD", nullable: true, length: 10 })
  ownerGrpCd: string | null;

  @Column("varchar2", { name: "OWNER_CD", nullable: true, length: 10 })
  ownerCd: string | null;

  @Column("varchar2", {
    name: "PRODUCT_CLASS_NAME",
    nullable: true,
    length: 15,
  })
  productClassName: string | null;

  @Column("number", { name: "RESALE_PRICE", nullable: true })
  resalePrice: number | null;

  @Column("number", { name: "TONS", nullable: true })
  tons: number | null;

  @Column("varchar2", { name: "AGE_YEARS", nullable: true, length: 83 })
  ageYears: string | null;
}
