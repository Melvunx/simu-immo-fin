import { z } from "zod";

export const projectStatusSchema = z.enum(["draft", "completed", "archived"]);
export const propertyTypeSchema = z.enum([
  "apartment",
  "house",
  "building",
  "commercial",
  "land",
  "other",
]);
export const propertyConditionSchema = z.enum([
  "new",
  "excellent",
  "good",
  "to_refresh",
  "to_renovate",
  "heavy_renovation",
]);
export const financingModeSchema = z.enum([
  "single_loan",
  "multi_loan",
  "smoothed_loan",
]);
export const deferredTypeSchema = z.enum(["none", "partial", "total"]);
export const loanTypeSchema = z.enum([
  "classic",
  "ptz",
  "complementary_zero_rate",
  "interest_only",
  "other",
]);
export const operatingModeSchema = z.enum([
  "unfurnished",
  "lmnp_micro",
  "lmnp_real",
  "short_term",
]);
export const taxRegimeSchema = z.enum([
  "micro_foncier",
  "real_foncier",
  "micro_bic",
  "real_lmnp",
  "short_term_real",
  "short_term_micro",
]);
export const comparableTypeSchema = z.enum([
  "dvf_sale",
  "rent_listing",
  "sale_listing",
]);
export const verdictSchema = z.enum(["buy", "negotiate", "pass", "watch"]);
export const exportTypeSchema = z.enum([
  "investor",
  "bank",
  "summary",
  "premium",
]);

export const uuidSchema = z.uuid();
export const isoDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid ISO date");
export const isoDateTimeSchema = z.string();
export const urlSchema = z.url();
export const trimmedStringSchema = z.string().trim();
export const nullableStringSchema = trimmedStringSchema.nullable().optional();
export const finiteNumberSchema = z.number();
export const nullableNumberSchema = finiteNumberSchema.nullable().optional();
export const positiveNumberSchema = z.number().positive();
export const integerSchema = z.number().int();
export const percentRatioSchema = z.number().min(0).max(1);
export const nullableRatioSchema = percentRatioSchema.nullable().optional();
export const moneySchema = z.number();
export const nullableMoneySchema = moneySchema.nullable().optional();

export const auditFieldsSchema = z.object({
  createdAt: isoDateTimeSchema,
  updatedAt: isoDateTimeSchema,
});
