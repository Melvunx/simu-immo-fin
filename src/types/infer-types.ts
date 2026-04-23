import z from "zod";
import {
  appErrorShapeSchema,
  calculationContextSchema,
  createFinancingLoanInputSchema,
  createFinancingScenarioInputSchema,
  createMarketComparableInputSchema,
  createNegotiationScenarioInputSchema,
  createOperatingScenarioInputSchema,
  createProjectInputSchema,
  financingComputedSchema,
  financingLoanSchema,
  financingPhaseSchema,
  financingScenarioSchema,
  marketComparableSchema,
  marketComputedSchema,
  marketSummarySchema,
  negotiationComputedRowSchema,
  negotiationScenarioSchema,
  operatingComputedSchema,
  operatingScenarioSchema,
  pdfExportSchema,
  projectBundleSchema,
  projectSchema,
  propertyCostsBreakdownSchema,
  propertySchema,
  updateProjectInputSchema,
  upsertPropertyInputSchema,
} from "../schema/schema";

import {
  comparableTypeSchema,
  deferredTypeSchema,
  exportTypeSchema,
  financingModeSchema,
  loanTypeSchema,
  operatingModeSchema,
  projectStatusSchema,
  propertyConditionSchema,
  propertyTypeSchema,
  taxRegimeSchema,
  verdictSchema,
} from "./types";

export type ProjectStatus = z.infer<typeof projectStatusSchema>;
export type PropertyType = z.infer<typeof propertyTypeSchema>;
export type PropertyCondition = z.infer<typeof propertyConditionSchema>;
export type FinancingMode = z.infer<typeof financingModeSchema>;
export type DeferredType = z.infer<typeof deferredTypeSchema>;
export type LoanType = z.infer<typeof loanTypeSchema>;
export type OperatingMode = z.infer<typeof operatingModeSchema>;
export type TaxRegime = z.infer<typeof taxRegimeSchema>;
export type ComparableType = z.infer<typeof comparableTypeSchema>;
export type Verdict = z.infer<typeof verdictSchema>;
export type ExportType = z.infer<typeof exportTypeSchema>;

export type Project = z.infer<typeof projectSchema>;
export type Property = z.infer<typeof propertySchema>;
export type FinancingScenario = z.infer<typeof financingScenarioSchema>;
export type FinancingLoan = z.infer<typeof financingLoanSchema>;
export type OperatingScenario = z.infer<typeof operatingScenarioSchema>;
export type MarketSummary = z.infer<typeof marketSummarySchema>;
export type MarketComparable = z.infer<typeof marketComparableSchema>;
export type NegotiationScenario = z.infer<typeof negotiationScenarioSchema>;
export type PdfExport = z.infer<typeof pdfExportSchema>;

export type ProjectBundle = z.infer<typeof projectBundleSchema>;
export type PropertyCostsBreakdown = z.infer<
  typeof propertyCostsBreakdownSchema
>;
export type FinancingPhase = z.infer<typeof financingPhaseSchema>;
export type FinancingComputed = z.infer<typeof financingComputedSchema>;
export type OperatingComputed = z.infer<typeof operatingComputedSchema>;
export type NegotiationComputedRow = z.infer<
  typeof negotiationComputedRowSchema
>;
export type MarketComputed = z.infer<typeof marketComputedSchema>;

export type CreateProjectInput = z.infer<typeof createProjectInputSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectInputSchema>;
export type UpsertPropertyInput = z.infer<typeof upsertPropertyInputSchema>;
export type CreateFinancingScenarioInput = z.infer<
  typeof createFinancingScenarioInputSchema
>;
export type CreateFinancingLoanInput = z.infer<
  typeof createFinancingLoanInputSchema
>;
export type CreateOperatingScenarioInput = z.infer<
  typeof createOperatingScenarioInputSchema
>;
export type CreateMarketComparableInput = z.infer<
  typeof createMarketComparableInputSchema
>;
export type CreateNegotiationScenarioInput = z.infer<
  typeof createNegotiationScenarioInputSchema
>;
export type CalculationContext = z.infer<typeof calculationContextSchema>;
export type AppErrorShape = z.infer<typeof appErrorShapeSchema>;

// =========================================================
// SAFE PARSERS
// =========================================================

export const parseProject = (input: unknown) => projectSchema.parse(input);

export const parseProperty = (input: unknown) => propertySchema.parse(input);

export const parseFinancingScenario = (input: unknown) =>
  financingScenarioSchema.parse(input);

export const parseFinancingLoan = (input: unknown) =>
  financingLoanSchema.parse(input);

export const parseOperatingScenario = (input: unknown) =>
  operatingScenarioSchema.parse(input);

export const parseMarketSummary = (input: unknown) =>
  marketSummarySchema.parse(input);

export const parseMarketComparable = (input: unknown) =>
  marketComparableSchema.parse(input);

export const parseNegotiationScenario = (input: unknown) =>
  negotiationScenarioSchema.parse(input);

export const parseProjectBundle = (input: unknown) =>
  projectBundleSchema.parse(input);
