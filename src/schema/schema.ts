import z from "zod";
import {
  auditFieldsSchema,
  comparableTypeSchema,
  deferredTypeSchema,
  exportTypeSchema,
  financingModeSchema,
  finiteNumberSchema,
  integerSchema,
  isoDateSchema,
  isoDateTimeSchema,
  loanTypeSchema,
  moneySchema,
  nullableMoneySchema,
  nullableNumberSchema,
  nullableRatioSchema,
  nullableStringSchema,
  operatingModeSchema,
  percentRatioSchema,
  positiveNumberSchema,
  projectStatusSchema,
  propertyConditionSchema,
  propertyTypeSchema,
  taxRegimeSchema,
  trimmedStringSchema,
  urlSchema,
  uuidSchema,
  verdictSchema,
} from "../types/types";

// =========================================================
// CORE DOMAIN SCHEMAS
// =========================================================

export const projectSchema = auditFieldsSchema.extend({
  id: uuidSchema,
  userId: trimmedStringSchema.nullable().optional(),
  title: trimmedStringSchema.min(1),
  sourceUrl: urlSchema.nullable().optional(),
  status: projectStatusSchema,
  city: nullableStringSchema,
  zipcode: nullableStringSchema,
  district: nullableStringSchema,
  notes: nullableStringSchema,
});

export const propertySchema = auditFieldsSchema.extend({
  id: uuidSchema,
  projectId: uuidSchema,
  propertyType: propertyTypeSchema.nullable().optional(),
  title: nullableStringSchema,
  addressLine1: nullableStringSchema,
  addressLine2: nullableStringSchema,
  city: nullableStringSchema,
  zipcode: nullableStringSchema,
  district: nullableStringSchema,
  rooms: nullableNumberSchema,
  bedrooms: integerSchema.nonnegative().nullable().optional(),
  bathrooms: integerSchema.nonnegative().nullable().optional(),
  areaM2: positiveNumberSchema.nullable().optional(),
  floor: nullableStringSchema,
  totalFloors: integerSchema.nonnegative().nullable().optional(),
  hasElevator: z.boolean(),
  hasParking: z.boolean(),
  parkingCount: integerSchema.nonnegative(),
  hasBalcony: z.boolean(),
  balconyAreaM2: nullableNumberSchema,
  hasTerrace: z.boolean(),
  terraceAreaM2: nullableNumberSchema,
  hasGarden: z.boolean(),
  gardenAreaM2: nullableNumberSchema,
  hasCave: z.boolean(),
  hasCellar: z.boolean(),
  condition: propertyConditionSchema.nullable().optional(),
  yearBuilt: integerSchema.min(1800).max(3000).nullable().optional(),
  deliveryYear: integerSchema.min(1800).max(3000).nullable().optional(),
  isVefa: z.boolean(),
  dpe: nullableStringSchema,
  ges: nullableStringSchema,
  energyScore: nullableNumberSchema,
  climateScore: nullableNumberSchema,
  distanceStationMinutes: integerSchema.nonnegative().nullable().optional(),
  stationName: nullableStringSchema,
  tensionScore: nullableNumberSchema,
  listedPrice: nullableMoneySchema,
  agencyFees: nullableMoneySchema,
  feesIncluded: z.boolean(),
  netSellerPrice: nullableMoneySchema,
  notaryFees: nullableMoneySchema,
  furnishingCost: nullableMoneySchema,
  renovationCost: nullableMoneySchema,
  guaranteeFees: nullableMoneySchema,
  bankFees: nullableMoneySchema,
  brokerFees: nullableMoneySchema,
  otherAcquisitionCosts: nullableMoneySchema,
  propertyTaxAnnual: nullableMoneySchema,
  condoChargesMonthly: nullableMoneySchema,
  recoverableChargesRatio: nullableRatioSchema,
  pnoAnnual: nullableMoneySchema,
  gliAnnual: nullableMoneySchema,
  maintenanceAnnual: nullableMoneySchema,
  managementFeesAnnual: nullableMoneySchema,
  cfeAnnual: nullableMoneySchema,
  accountantAnnual: nullableMoneySchema,
  otherOperatingCostsAnnual: nullableMoneySchema,
  totalProjectCost: nullableMoneySchema,
  pricePerM2: nullableMoneySchema,
});

export const financingScenarioSchema = auditFieldsSchema.extend({
  id: uuidSchema,
  projectId: uuidSchema,
  label: trimmedStringSchema.min(1),
  isDefault: z.boolean(),
  financingMode: financingModeSchema,
  downPayment: nullableMoneySchema,
  loanAmount: nullableMoneySchema,
  nominalRate: nullableNumberSchema,
  insuranceMonthly: nullableMoneySchema,
  durationMonths: integerSchema.positive().nullable().optional(),
  deferredMonths: integerSchema.nonnegative().nullable().optional(),
  bankFees: nullableMoneySchema,
  guaranteeFees: nullableMoneySchema,
  brokerFees: nullableMoneySchema,
  monthlyPayment: nullableMoneySchema,
  annualDebtService: nullableMoneySchema,
  totalCreditCost: nullableMoneySchema,
  weightedAverageRate: nullableNumberSchema,
  smoothedMonthlyPayment: nullableMoneySchema,
  notes: nullableStringSchema,
});

export const financingLoanSchema = auditFieldsSchema.extend({
  id: uuidSchema,
  financingScenarioId: uuidSchema,
  loanOrder: integerSchema.positive(),
  label: nullableStringSchema,
  principalAmount: moneySchema,
  outstandingCapital: nullableMoneySchema,
  nominalRate: nullableNumberSchema,
  insuranceMonthly: nullableMoneySchema,
  deferredType: deferredTypeSchema.nullable().optional(),
  deferredMonths: integerSchema.nonnegative().nullable().optional(),
  amortizationMonths: integerSchema.positive().nullable().optional(),
  totalDurationMonths: integerSchema.positive().nullable().optional(),
  monthlyPaymentPhase1: nullableMoneySchema,
  monthlyPaymentPhase2: nullableMoneySchema,
  monthlyPaymentPhase3: nullableMoneySchema,
  phase1Months: integerSchema.nonnegative().nullable().optional(),
  phase2Months: integerSchema.nonnegative().nullable().optional(),
  phase3Months: integerSchema.nonnegative().nullable().optional(),
  loanType: loanTypeSchema.nullable().optional(),
});

export const operatingScenarioSchema = auditFieldsSchema.extend({
  id: uuidSchema,
  projectId: uuidSchema,
  financingScenarioId: uuidSchema.nullable().optional(),
  label: trimmedStringSchema.min(1),
  mode: operatingModeSchema,
  isDefault: z.boolean(),
  monthlyRent: nullableMoneySchema,
  rentCcMonthly: nullableMoneySchema,
  vacancyRate: nullableRatioSchema,
  annualNights: integerSchema.nonnegative().nullable().optional(),
  nightlyRate: nullableMoneySchema,
  occupancyRate: nullableRatioSchema,
  platformFeeRate: nullableRatioSchema,
  cleaningCostAnnual: nullableMoneySchema,
  otherRevenueAnnual: nullableMoneySchema,
  taxRegime: taxRegimeSchema.nullable().optional(),
  marginalTaxRate: nullableRatioSchema,
  socialTaxRate: nullableRatioSchema,
  cfeAnnualOverride: nullableMoneySchema,
  accountantAnnualOverride: nullableMoneySchema,
  managementFeesAnnualOverride: nullableMoneySchema,
  maintenanceAnnualOverride: nullableMoneySchema,
  buildingValueForAmortization: nullableMoneySchema,
  furnitureValueForAmortization: nullableMoneySchema,
  annualBuildingAmortization: nullableMoneySchema,
  annualFurnitureAmortization: nullableMoneySchema,
  annualTotalAmortization: nullableMoneySchema,
  annualRevenue: nullableMoneySchema,
  annualOwnerCharges: nullableMoneySchema,
  annualDebtService: nullableMoneySchema,
  noiAnnual: nullableMoneySchema,
  taxableResultAnnual: nullableMoneySchema,
  taxAnnual: nullableMoneySchema,
  cashflowAnnual: nullableMoneySchema,
  cashflowMonthly: nullableMoneySchema,
  grossYield: nullableNumberSchema,
  netYield: nullableNumberSchema,
  nnnYield: nullableNumberSchema,
  dscr: nullableNumberSchema,
  roe: nullableNumberSchema,
  irr10y: nullableNumberSchema,
  npv10y: nullableMoneySchema,
  breakEvenRentMonthly: nullableMoneySchema,
  breakEvenPrice: nullableMoneySchema,
  verdict: verdictSchema.nullable().optional(),
  verdictReason: nullableStringSchema,
});

export const marketSummarySchema = auditFieldsSchema.extend({
  id: uuidSchema,
  projectId: uuidSchema,
  dvfMedianEurM2: nullableMoneySchema,
  dvfMeanEurM2: nullableMoneySchema,
  dvfP25EurM2: nullableMoneySchema,
  dvfP75EurM2: nullableMoneySchema,
  dvfSampleSize: integerSchema.nonnegative().nullable().optional(),
  dvfTargetPrice: nullableMoneySchema,
  marketRentMedian: nullableMoneySchema,
  marketRentLow: nullableMoneySchema,
  marketRentHigh: nullableMoneySchema,
  marketRentEurM2: nullableMoneySchema,
  rentalTensionLabel: nullableStringSchema,
  rentalTensionScore: nullableNumberSchema,
  priceGapVsMarket: nullableNumberSchema,
  rentGapVsMarket: nullableNumberSchema,
  summary: nullableStringSchema,
});

export const marketComparableSchema = z.object({
  id: uuidSchema,
  projectId: uuidSchema,
  comparableType: comparableTypeSchema,
  source: trimmedStringSchema.min(1),
  sourceUrl: urlSchema.nullable().optional(),
  address: nullableStringSchema,
  city: nullableStringSchema,
  zipcode: nullableStringSchema,
  district: nullableStringSchema,
  propertyType: nullableStringSchema,
  rooms: nullableNumberSchema,
  areaM2: nullableNumberSchema,
  floor: nullableStringSchema,
  condition: nullableStringSchema,
  dpe: nullableStringSchema,
  price: nullableMoneySchema,
  rentMonthly: nullableMoneySchema,
  chargesMonthly: nullableMoneySchema,
  euroPerM2: nullableMoneySchema,
  comparableDate: isoDateSchema.nullable().optional(),
  notes: nullableStringSchema,
  distanceKm: nullableNumberSchema,
  createdAt: isoDateTimeSchema,
});

export const negotiationScenarioSchema = auditFieldsSchema.extend({
  id: uuidSchema,
  projectId: uuidSchema,
  financingScenarioId: uuidSchema.nullable().optional(),
  operatingScenarioId: uuidSchema.nullable().optional(),
  label: trimmedStringSchema.min(1),
  priceAmount: moneySchema,
  deltaPercent: nullableNumberSchema,
  monthlyPayment: nullableMoneySchema,
  cashflowMonthly: nullableMoneySchema,
  nnnYield: nullableNumberSchema,
  dscr: nullableNumberSchema,
  verdict: verdictSchema.nullable().optional(),
});

export const pdfExportSchema = z.object({
  id: uuidSchema,
  projectId: uuidSchema,
  exportType: exportTypeSchema,
  filePath: nullableStringSchema,
  fileName: nullableStringSchema,
  generatedAt: isoDateTimeSchema,
});

// =========================================================
// COMPOSED SCHEMAS
// =========================================================

export const projectBundleSchema = z.object({
  project: projectSchema,
  property: propertySchema.nullable().optional(),
  financingScenarios: z.array(financingScenarioSchema),
  financingLoans: z.array(financingLoanSchema),
  operatingScenarios: z.array(operatingScenarioSchema),
  marketSummary: marketSummarySchema.nullable().optional(),
  marketComparables: z.array(marketComparableSchema),
  negotiationScenarios: z.array(negotiationScenarioSchema),
  pdfExports: z.array(pdfExportSchema),
});

export const propertyCostsBreakdownSchema = z.object({
  acquisition: z.object({
    netSellerPrice: moneySchema,
    agencyFees: moneySchema,
    notaryFees: moneySchema,
    furnishingCost: moneySchema,
    renovationCost: moneySchema,
    guaranteeFees: moneySchema,
    bankFees: moneySchema,
    brokerFees: moneySchema,
    otherAcquisitionCosts: moneySchema,
  }),
  operating: z.object({
    propertyTaxAnnual: moneySchema,
    condoChargesMonthly: moneySchema,
    recoverableChargesRatio: percentRatioSchema,
    nonRecoverableCondoChargesAnnual: moneySchema,
    pnoAnnual: moneySchema,
    gliAnnual: moneySchema,
    maintenanceAnnual: moneySchema,
    managementFeesAnnual: moneySchema,
    cfeAnnual: moneySchema,
    accountantAnnual: moneySchema,
    otherOperatingCostsAnnual: moneySchema,
  }),
});

export const financingPhaseSchema = z.object({
  label: trimmedStringSchema.min(1),
  durationMonths: integerSchema.nonnegative(),
  monthlyDebtService: moneySchema,
});

export const financingComputedSchema = z.object({
  monthlyPayment: moneySchema,
  annualDebtService: moneySchema,
  totalCreditCost: moneySchema,
  weightedAverageRate: finiteNumberSchema,
  smoothedMonthlyPayment: nullableMoneySchema,
  phases: z.array(financingPhaseSchema),
});

export const operatingComputedSchema = z.object({
  annualRevenue: moneySchema,
  annualOwnerCharges: moneySchema,
  annualDebtService: moneySchema,
  noiAnnual: moneySchema,
  taxableResultAnnual: moneySchema,
  taxAnnual: moneySchema,
  cashflowAnnual: moneySchema,
  cashflowMonthly: moneySchema,
  grossYield: finiteNumberSchema,
  netYield: finiteNumberSchema,
  nnnYield: finiteNumberSchema,
  dscr: finiteNumberSchema,
  roe: finiteNumberSchema,
  irr10y: nullableNumberSchema,
  npv10y: nullableMoneySchema,
  breakEvenRentMonthly: moneySchema,
  breakEvenPrice: moneySchema,
  verdict: verdictSchema,
  verdictReason: trimmedStringSchema.min(1),
});

export const negotiationComputedRowSchema = z.object({
  label: trimmedStringSchema.min(1),
  priceAmount: moneySchema,
  deltaPercent: finiteNumberSchema,
  monthlyPayment: moneySchema,
  cashflowMonthly: moneySchema,
  nnnYield: finiteNumberSchema,
  dscr: finiteNumberSchema,
  verdict: verdictSchema,
});

export const marketComputedSchema = z.object({
  dvfMedianEurM2: moneySchema,
  dvfMeanEurM2: moneySchema,
  dvfP25EurM2: moneySchema,
  dvfP75EurM2: moneySchema,
  dvfSampleSize: integerSchema.nonnegative(),
  dvfTargetPrice: moneySchema,
  marketRentMedian: moneySchema,
  marketRentLow: moneySchema,
  marketRentHigh: moneySchema,
  marketRentEurM2: moneySchema,
  rentalTensionLabel: trimmedStringSchema.min(1),
  rentalTensionScore: finiteNumberSchema,
  priceGapVsMarket: finiteNumberSchema,
  rentGapVsMarket: finiteNumberSchema,
  summary: trimmedStringSchema.min(1),
});

// =========================================================
// INPUT SCHEMAS
// =========================================================

export const createProjectInputSchema = z.object({
  project: z.object({
    userId: trimmedStringSchema.nullable().optional(),
    title: trimmedStringSchema.min(1),
    sourceUrl: urlSchema.nullable().optional(),
    city: nullableStringSchema,
    zipcode: nullableStringSchema,
    district: nullableStringSchema,
    notes: nullableStringSchema,
  }),
  property: propertySchema
    .omit({ id: true, projectId: true, createdAt: true, updatedAt: true })
    .partial()
    .optional(),
});

export const updateProjectInputSchema = z.object({
  title: trimmedStringSchema.min(1).optional(),
  sourceUrl: urlSchema.nullable().optional(),
  status: projectStatusSchema.optional(),
  city: nullableStringSchema,
  zipcode: nullableStringSchema,
  district: nullableStringSchema,
  notes: nullableStringSchema,
});

export const upsertPropertyInputSchema = propertySchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial()
  .extend({ projectId: uuidSchema });

export const createFinancingScenarioInputSchema = financingScenarioSchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial()
  .extend({
    projectId: uuidSchema,
    label: trimmedStringSchema.min(1),
  });

export const createFinancingLoanInputSchema = financingLoanSchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial()
  .extend({
    financingScenarioId: uuidSchema,
    principalAmount: moneySchema,
  });

export const createOperatingScenarioInputSchema = operatingScenarioSchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial()
  .extend({
    projectId: uuidSchema,
    label: trimmedStringSchema.min(1),
    mode: operatingModeSchema,
  });

export const createMarketComparableInputSchema = marketComparableSchema
  .omit({ id: true, createdAt: true })
  .partial()
  .extend({
    projectId: uuidSchema,
    source: trimmedStringSchema.min(1),
    comparableType: comparableTypeSchema,
  });

export const createNegotiationScenarioInputSchema = negotiationScenarioSchema
  .omit({ id: true, createdAt: true, updatedAt: true })
  .partial()
  .extend({
    projectId: uuidSchema,
    label: trimmedStringSchema.min(1),
    priceAmount: moneySchema,
  });

export const calculationContextSchema = z.object({
  project: projectSchema,
  property: propertySchema,
  financingScenario: financingScenarioSchema,
  financingLoans: z.array(financingLoanSchema).optional(),
  operatingScenario: operatingScenarioSchema,
  marketSummary: marketSummarySchema.nullable().optional(),
});

export const appErrorShapeSchema = z.object({
  code: trimmedStringSchema.min(1),
  message: trimmedStringSchema.min(1),
  field: trimmedStringSchema.min(1).optional(),
});

export const makeApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    error: appErrorShapeSchema.optional(),
  });
