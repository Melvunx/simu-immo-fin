export type ProjectStatus = "draft" | "completed" | "archived";

export type PropertyType =
  | "apartment"
  | "house"
  | "building"
  | "commercial"
  | "land"
  | "other";

export type PropertyCondition =
  | "new"
  | "excellent"
  | "good"
  | "to_refresh"
  | "to_renovate"
  | "heavy_renovation";

export type FinancingMode = "single_loan" | "multi_loan" | "smoothed_loan";

export type DeferredType = "none" | "partial" | "total";

export type LoanType =
  | "classic"
  | "ptz"
  | "complementary_zero_rate"
  | "interest_only"
  | "other";

export type OperatingMode =
  | "unfurnished"
  | "lmnp_micro"
  | "lmnp_real"
  | "short_term";

export type TaxRegime =
  | "micro_foncier"
  | "real_foncier"
  | "micro_bic"
  | "real_lmnp"
  | "short_term_real"
  | "short_term_micro";

export type ComparableType = "dvf_sale" | "rent_listing" | "sale_listing";

export type Verdict = "buy" | "negotiate" | "pass" | "watch";

export type ExportType = "investor" | "bank" | "summary" | "premium";

export type UUID = string;
export type ISODateString = string;
export type ISODateTimeString = string;