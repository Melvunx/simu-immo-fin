import {
  CalculationContext,
  CreateFinancingLoanInput,
  CreateFinancingScenarioInput,
  CreateMarketComparableInput,
  CreateNegotiationScenarioInput,
  CreateOperatingScenarioInput,
  FinancingLoan,
  FinancingScenario,
  MarketComparable,
  MarketSummary,
  NegotiationScenario,
  OperatingScenario,
  PdfExport,
  Project,
  ProjectBundle,
  Property,
} from "../types/infer-types";
import {
  calculationContextSchema,
  createFinancingLoanInputSchema,
  createFinancingScenarioInputSchema,
  createMarketComparableInputSchema,
  createNegotiationScenarioInputSchema,
  createOperatingScenarioInputSchema,
  financingLoanSchema,
  financingScenarioSchema,
  marketComparableSchema,
  marketSummarySchema,
  negotiationScenarioSchema,
  operatingScenarioSchema,
  pdfExportSchema,
  projectBundleSchema,
  projectSchema,
  propertySchema,
} from "./schema";

type DecimalLike = {
  toNumber(): number;
};

type DecimalInput = DecimalLike | number | string | null | undefined;

const isDecimalLike = (value: unknown): value is DecimalLike => {
  return (
    typeof value === "object" &&
    value !== null &&
    "toNumber" in value &&
    typeof (value as { toNumber: unknown }).toNumber === "function"
  );
};

const toNumber = (value: DecimalInput): number | null | undefined => {
  if (value === null) return null;

  if (value === undefined) return undefined;

  if (typeof value === "number") return value;

  if (typeof value === "string") return Number(value);

  if (isDecimalLike(value)) return value.toNumber();

  throw new Error("Unsupported numeric value");
};

const toIso = (
  value: Date | string | null | undefined,
): string | null | undefined => {
  if (value === null) return null;

  if (value === undefined) return undefined;

  if (typeof value === "string") return value;

  return value.toISOString();
};

const compactUndefined = <T extends Record<string, unknown>>(obj: T): T => {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined),
  ) as T;
};

export type PrismaProjectRecord = {
  id: string;
  user_id: string | null;
  title: string;
  source_url: string | null;
  status: string | null;
  city: string | null;
  zipcode: string | null;
  district: string | null;
  notes: string | null;
  created_at: Date;
  updated_at: Date;
};

export const mapProjectFromPrisma = (row: PrismaProjectRecord): Project => {
  return projectSchema.parse({
    id: row.id,
    userId: row.user_id,
    title: row.title,
    sourceUrl: row.source_url,
    status: row.status ?? "draft",
    city: row.city,
    zipcode: row.zipcode,
    district: row.district,
    notes: row.notes,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  });
};

export type PrismaPropertyRecord = {
  id: string;
  project_id: string;
  property_type: string | null;
  title: string | null;
  address_line_1: string | null;
  address_line_2: string | null;
  city: string | null;
  zipcode: string | null;
  district: string | null;
  rooms: DecimalInput;
  bedrooms: number | null;
  bathrooms: number | null;
  area_m2: DecimalInput | null;
  floor: string | null;
  total_floors: number | null;
  has_elevator: boolean;
  has_parking: boolean;
  parking_count: number;
  has_balcony: boolean;
  balcony_area_m2: DecimalInput | null;
  has_terrace: boolean;
  terrace_area_m2: DecimalInput | null;
  has_garden: boolean;
  garden_area_m2: DecimalInput | null;
  has_cave: boolean;
  has_cellar: boolean;
  condition: string | null;
  year_built: number | null;
  delivery_year: number | null;
  is_vefa: boolean;
  dpe: string | null;
  ges: string | null;
  energy_score: DecimalInput | null;
  climate_score: DecimalInput | null;
  distance_station_minutes: number | null;
  station_name: string | null;
  tension_score: DecimalInput | null;
  listed_price: DecimalInput | null;
  agency_fees: DecimalInput | null;
  fees_included: boolean;
  net_seller_price: DecimalInput | null;
  notary_fees: DecimalInput | null;
  furnishing_cost: DecimalInput | null;
  renovation_cost: DecimalInput | null;
  guarantee_fees: DecimalInput | null;
  bank_fees: DecimalInput | null;
  broker_fees: DecimalInput | null;
  other_acquisition_costs: DecimalInput | null;
  property_tax_annual: DecimalInput | null;
  condo_charges_monthly: DecimalInput | null;
  recoverable_charges_ratio: DecimalInput | null;
  pno_annual: DecimalInput | null;
  gli_annual: DecimalInput | null;
  maintenance_annual: DecimalInput | null;
  management_fees_annual: DecimalInput | null;
  cfe_annual: DecimalInput | null;
  accountant_annual: DecimalInput | null;
  other_operating_costs_annual: DecimalInput | null;
  total_project_cost: DecimalInput | null;
  price_per_m2: DecimalInput | null;
  created_at: Date;
  updated_at: Date;
};

export const mapPropertyFromPrisma = (row: PrismaPropertyRecord): Property => {
  return propertySchema.parse({
    id: row.id,
    projectId: row.project_id,
    propertyType: row.property_type,
    title: row.title,
    addressLine1: row.address_line_1,
    addressLine2: row.address_line_2,
    city: row.city,
    zipcode: row.zipcode,
    district: row.district,
    rooms: toNumber(row.rooms),
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    areaM2: toNumber(row.area_m2),
    floor: row.floor,
    totalFloors: row.total_floors,
    hasElevator: row.has_elevator,
    hasParking: row.has_parking,
    parkingCount: row.parking_count,
    hasBalcony: row.has_balcony,
    balconyAreaM2: toNumber(row.balcony_area_m2),
    hasTerrace: row.has_terrace,
    terraceAreaM2: toNumber(row.terrace_area_m2),
    hasGarden: row.has_garden,
    gardenAreaM2: toNumber(row.garden_area_m2),
    hasCave: row.has_cave,
    hasCellar: row.has_cellar,
    condition: row.condition,
    yearBuilt: row.year_built,
    deliveryYear: row.delivery_year,
    isVefa: row.is_vefa,
    dpe: row.dpe,
    ges: row.ges,
    energyScore: toNumber(row.energy_score),
    climateScore: toNumber(row.climate_score),
    distanceStationMinutes: row.distance_station_minutes,
    stationName: row.station_name,
    tensionScore: toNumber(row.tension_score),
    listedPrice: toNumber(row.listed_price),
    agencyFees: toNumber(row.agency_fees),
    feesIncluded: row.fees_included,
    netSellerPrice: toNumber(row.net_seller_price),
    notaryFees: toNumber(row.notary_fees),
    furnishingCost: toNumber(row.furnishing_cost),
    renovationCost: toNumber(row.renovation_cost),
    guaranteeFees: toNumber(row.guarantee_fees),
    bankFees: toNumber(row.bank_fees),
    brokerFees: toNumber(row.broker_fees),
    otherAcquisitionCosts: toNumber(row.other_acquisition_costs),
    propertyTaxAnnual: toNumber(row.property_tax_annual),
    condoChargesMonthly: toNumber(row.condo_charges_monthly),
    recoverableChargesRatio: toNumber(row.recoverable_charges_ratio),
    pnoAnnual: toNumber(row.pno_annual),
    gliAnnual: toNumber(row.gli_annual),
    maintenanceAnnual: toNumber(row.maintenance_annual),
    managementFeesAnnual: toNumber(row.management_fees_annual),
    cfeAnnual: toNumber(row.cfe_annual),
    accountantAnnual: toNumber(row.accountant_annual),
    otherOperatingCostsAnnual: toNumber(row.other_operating_costs_annual),
    totalProjectCost: toNumber(row.total_project_cost),
    pricePerM2: toNumber(row.price_per_m2),
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  });
};

export type PrismaFinancingScenarioRecord = {
  id: string;
  project_id: string;
  label: string;
  is_default: boolean;
  financing_mode: string;
  down_payment: DecimalInput | null;
  loan_amount: DecimalInput | null;
  nominal_rate: DecimalInput | null;
  insurance_monthly: DecimalInput | null;
  duration_months: number | null;
  deferred_months: number | null;
  bank_fees: DecimalInput | null;
  guarantee_fees: DecimalInput | null;
  broker_fees: DecimalInput | null;
  monthly_payment: DecimalInput | null;
  annual_debt_service: DecimalInput | null;
  total_credit_cost: DecimalInput | null;
  weighted_average_rate: DecimalInput | null;
  smoothed_monthly_payment: DecimalInput | null;
  notes: string | null;
  created_at: Date;
  updated_at: Date;
};

export const mapFinancingScenarioFromPrisma = (
  row: PrismaFinancingScenarioRecord,
): FinancingScenario => {
  return financingScenarioSchema.parse({
    id: row.id,
    projectId: row.project_id,
    label: row.label,
    isDefault: row.is_default,
    financingMode: row.financing_mode,
    downPayment: toNumber(row.down_payment),
    loanAmount: toNumber(row.loan_amount),
    nominalRate: toNumber(row.nominal_rate),
    insuranceMonthly: toNumber(row.insurance_monthly),
    durationMonths: row.duration_months,
    deferredMonths: row.deferred_months,
    bankFees: toNumber(row.bank_fees),
    guaranteeFees: toNumber(row.guarantee_fees),
    brokerFees: toNumber(row.broker_fees),
    monthlyPayment: toNumber(row.monthly_payment),
    annualDebtService: toNumber(row.annual_debt_service),
    totalCreditCost: toNumber(row.total_credit_cost),
    weightedAverageRate: toNumber(row.weighted_average_rate),
    smoothedMonthlyPayment: toNumber(row.smoothed_monthly_payment),
    notes: row.notes,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  });
};

export type PrismaFinancingLoanRecord = {
  id: string;
  financing_scenario_id: string;
  loan_order: number;
  label: string | null;
  principal_amount: DecimalInput;
  outstanding_capital: DecimalInput | null;
  nominal_rate: DecimalInput | null;
  insurance_monthly: DecimalInput | null;
  deferred_type: string | null;
  deferred_months: number | null;
  amortization_months: number | null;
  total_duration_months: number | null;
  monthly_payment_phase_1: DecimalInput | null;
  monthly_payment_phase_2: DecimalInput | null;
  monthly_payment_phase_3: DecimalInput | null;
  phase_1_months: number | null;
  phase_2_months: number | null;
  phase_3_months: number | null;
  loan_type: string | null;
  created_at: Date;
  updated_at: Date;
};

export const mapFinancingLoanFromPrisma = (
  row: PrismaFinancingLoanRecord,
): FinancingLoan => {
  return financingLoanSchema.parse({
    id: row.id,
    financingScenarioId: row.financing_scenario_id,
    loanOrder: row.loan_order,
    label: row.label,
    principalAmount: toNumber(row.principal_amount),
    outstandingCapital: toNumber(row.outstanding_capital),
    nominalRate: toNumber(row.nominal_rate),
    insuranceMonthly: toNumber(row.insurance_monthly),
    deferredType: row.deferred_type,
    deferredMonths: row.deferred_months,
    amortizationMonths: row.amortization_months,
    totalDurationMonths: row.total_duration_months,
    monthlyPaymentPhase1: toNumber(row.monthly_payment_phase_1),
    monthlyPaymentPhase2: toNumber(row.monthly_payment_phase_2),
    monthlyPaymentPhase3: toNumber(row.monthly_payment_phase_3),
    phase1Months: row.phase_1_months,
    phase2Months: row.phase_2_months,
    phase3Months: row.phase_3_months,
    loanType: row.loan_type,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  });
};

export type PrismaOperatingScenarioRecord = {
  id: string;
  project_id: string;
  financing_scenario_id: string | null;
  label: string;
  mode: string;
  is_default: boolean;
  monthly_rent: DecimalInput | null;
  rent_cc_monthly: DecimalInput | null;
  vacancy_rate: DecimalInput | null;
  annual_nights: number | null;
  nightly_rate: DecimalInput | null;
  occupancy_rate: DecimalInput | null;
  platform_fee_rate: DecimalInput | null;
  cleaning_cost_annual: DecimalInput | null;
  other_revenue_annual: DecimalInput | null;
  tax_regime: string | null;
  marginal_tax_rate: DecimalInput | null;
  social_tax_rate: DecimalInput | null;
  cfe_annual_override: DecimalInput | null;
  accountant_annual_override: DecimalInput | null;
  management_fees_annual_override: DecimalInput | null;
  maintenance_annual_override: DecimalInput | null;
  building_value_for_amortization: DecimalInput | null;
  furniture_value_for_amortization: DecimalInput | null;
  annual_building_amortization: DecimalInput | null;
  annual_furniture_amortization: DecimalInput | null;
  annual_total_amortization: DecimalInput | null;
  annual_revenue: DecimalInput | null;
  annual_owner_charges: DecimalInput | null;
  annual_debt_service: DecimalInput | null;
  noi_annual: DecimalInput | null;
  taxable_result_annual: DecimalInput | null;
  tax_annual: DecimalInput | null;
  cashflow_annual: DecimalInput | null;
  cashflow_monthly: DecimalInput | null;
  gross_yield: DecimalInput | null;
  net_yield: DecimalInput | null;
  nnn_yield: DecimalInput | null;
  dscr: DecimalInput | null;
  roe: DecimalInput | null;
  irr_10y: DecimalInput | null;
  npv_10y: DecimalInput | null;
  break_even_rent_monthly: DecimalInput | null;
  break_even_price: DecimalInput | null;
  verdict: string | null;
  verdict_reason: string | null;
  created_at: Date;
  updated_at: Date;
};

export const mapOperatingScenarioFromPrisma = (
  row: PrismaOperatingScenarioRecord,
): OperatingScenario => {
  return operatingScenarioSchema.parse({
    id: row.id,
    projectId: row.project_id,
    financingScenarioId: row.financing_scenario_id,
    label: row.label,
    mode: row.mode,
    isDefault: row.is_default,
    monthlyRent: toNumber(row.monthly_rent),
    rentCcMonthly: toNumber(row.rent_cc_monthly),
    vacancyRate: toNumber(row.vacancy_rate),
    annualNights: row.annual_nights,
    nightlyRate: toNumber(row.nightly_rate),
    occupancyRate: toNumber(row.occupancy_rate),
    platformFeeRate: toNumber(row.platform_fee_rate),
    cleaningCostAnnual: toNumber(row.cleaning_cost_annual),
    otherRevenueAnnual: toNumber(row.other_revenue_annual),
    taxRegime: row.tax_regime,
    marginalTaxRate: toNumber(row.marginal_tax_rate),
    socialTaxRate: toNumber(row.social_tax_rate),
    cfeAnnualOverride: toNumber(row.cfe_annual_override),
    accountantAnnualOverride: toNumber(row.accountant_annual_override),
    managementFeesAnnualOverride: toNumber(row.management_fees_annual_override),
    maintenanceAnnualOverride: toNumber(row.maintenance_annual_override),
    buildingValueForAmortization: toNumber(row.building_value_for_amortization),
    furnitureValueForAmortization: toNumber(
      row.furniture_value_for_amortization,
    ),
    annualBuildingAmortization: toNumber(row.annual_building_amortization),
    annualFurnitureAmortization: toNumber(row.annual_furniture_amortization),
    annualTotalAmortization: toNumber(row.annual_total_amortization),
    annualRevenue: toNumber(row.annual_revenue),
    annualOwnerCharges: toNumber(row.annual_owner_charges),
    annualDebtService: toNumber(row.annual_debt_service),
    noiAnnual: toNumber(row.noi_annual),
    taxableResultAnnual: toNumber(row.taxable_result_annual),
    taxAnnual: toNumber(row.tax_annual),
    cashflowAnnual: toNumber(row.cashflow_annual),
    cashflowMonthly: toNumber(row.cashflow_monthly),
    grossYield: toNumber(row.gross_yield),
    netYield: toNumber(row.net_yield),
    nnnYield: toNumber(row.nnn_yield),
    dscr: toNumber(row.dscr),
    roe: toNumber(row.roe),
    irr10y: toNumber(row.irr_10y),
    npv10y: toNumber(row.npv_10y),
    breakEvenRentMonthly: toNumber(row.break_even_rent_monthly),
    breakEvenPrice: toNumber(row.break_even_price),
    verdict: row.verdict,
    verdictReason: row.verdict_reason,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  });
};

export type PrismaMarketSummaryRecord = {
  id: string;
  project_id: string;
  dvf_median_eur_m2: DecimalInput | null;
  dvf_mean_eur_m2: DecimalInput | null;
  dvf_p25_eur_m2: DecimalInput | null;
  dvf_p75_eur_m2: DecimalInput | null;
  dvf_sample_size: number | null;
  dvf_target_price: DecimalInput | null;
  market_rent_median: DecimalInput | null;
  market_rent_low: DecimalInput | null;
  market_rent_high: DecimalInput | null;
  market_rent_eur_m2: DecimalInput | null;
  rental_tension_label: string | null;
  rental_tension_score: DecimalInput | null;
  price_gap_vs_market: DecimalInput | null;
  rent_gap_vs_market: DecimalInput | null;
  summary: string | null;
  created_at: Date;
  updated_at: Date;
};

export const mapMarketSummaryFromPrisma = (
  row: PrismaMarketSummaryRecord,
): MarketSummary => {
  return marketSummarySchema.parse({
    id: row.id,
    projectId: row.project_id,
    dvfMedianEurM2: toNumber(row.dvf_median_eur_m2),
    dvfMeanEurM2: toNumber(row.dvf_mean_eur_m2),
    dvfP25EurM2: toNumber(row.dvf_p25_eur_m2),
    dvfP75EurM2: toNumber(row.dvf_p75_eur_m2),
    dvfSampleSize: row.dvf_sample_size,
    dvfTargetPrice: toNumber(row.dvf_target_price),
    marketRentMedian: toNumber(row.market_rent_median),
    marketRentLow: toNumber(row.market_rent_low),
    marketRentHigh: toNumber(row.market_rent_high),
    marketRentEurM2: toNumber(row.market_rent_eur_m2),
    rentalTensionLabel: row.rental_tension_label,
    rentalTensionScore: toNumber(row.rental_tension_score),
    priceGapVsMarket: toNumber(row.price_gap_vs_market),
    rentGapVsMarket: toNumber(row.rent_gap_vs_market),
    summary: row.summary,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  });
};

export type PrismaMarketComparableRecord = {
  id: string;
  project_id: string;
  comparable_type: string;
  source: string;
  source_url: string | null;
  address: string | null;
  city: string | null;
  zipcode: string | null;
  district: string | null;
  property_type: string | null;
  rooms: DecimalInput | null;
  area_m2: DecimalInput | null;
  floor: string | null;
  condition: string | null;
  dpe: string | null;
  price: DecimalInput | null;
  rent_monthly: DecimalInput | null;
  charges_monthly: DecimalInput | null;
  euro_per_m2: DecimalInput | null;
  comparable_date: Date | null;
  notes: string | null;
  distance_km: DecimalInput | null;
  created_at: Date;
};

export const mapMarketComparableFromPrisma = (
  row: PrismaMarketComparableRecord,
): MarketComparable => {
  return marketComparableSchema.parse({
    id: row.id,
    projectId: row.project_id,
    comparableType: row.comparable_type,
    source: row.source,
    sourceUrl: row.source_url,
    address: row.address,
    city: row.city,
    zipcode: row.zipcode,
    district: row.district,
    propertyType: row.property_type,
    rooms: toNumber(row.rooms),
    areaM2: toNumber(row.area_m2),
    floor: row.floor,
    condition: row.condition,
    dpe: row.dpe,
    price: toNumber(row.price),
    rentMonthly: toNumber(row.rent_monthly),
    chargesMonthly: toNumber(row.charges_monthly),
    euroPerM2: toNumber(row.euro_per_m2),
    comparableDate: row.comparable_date
      ? row.comparable_date.toISOString().slice(0, 10)
      : null,
    notes: row.notes,
    distanceKm: toNumber(row.distance_km),
    createdAt: row.created_at.toISOString(),
  });
};

export type PrismaNegotiationScenarioRecord = {
  id: string;
  project_id: string;
  financing_scenario_id: string | null;
  operating_scenario_id: string | null;
  label: string;
  price_amount: DecimalInput;
  delta_percent: DecimalInput | null;
  monthly_payment: DecimalInput | null;
  cashflow_monthly: DecimalInput | null;
  nnn_yield: DecimalInput | null;
  dscr: DecimalInput | null;
  verdict: string | null;
  created_at: Date;
  updated_at: Date;
};

export const mapNegotiationScenarioFromPrisma = (
  row: PrismaNegotiationScenarioRecord,
): NegotiationScenario => {
  return negotiationScenarioSchema.parse({
    id: row.id,
    projectId: row.project_id,
    financingScenarioId: row.financing_scenario_id,
    operatingScenarioId: row.operating_scenario_id,
    label: row.label,
    priceAmount: toNumber(row.price_amount),
    deltaPercent: toNumber(row.delta_percent),
    monthlyPayment: toNumber(row.monthly_payment),
    cashflowMonthly: toNumber(row.cashflow_monthly),
    nnnYield: toNumber(row.nnn_yield),
    dscr: toNumber(row.dscr),
    verdict: row.verdict,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  });
};

export type PrismaPdfExportRecord = {
  id: string;
  project_id: string;
  export_type: string;
  file_path: string | null;
  file_name: string | null;
  generated_at: Date;
};

export const mapPdfExportFromPrisma = (
  row: PrismaPdfExportRecord,
): PdfExport => {
  return pdfExportSchema.parse({
    id: row.id,
    projectId: row.project_id,
    exportType: row.export_type,
    filePath: row.file_path,
    fileName: row.file_name,
    generatedAt: row.generated_at.toISOString(),
  });
};

export type PrismaProjectBundleRecord = {
  project: PrismaProjectRecord;
  property?: PrismaPropertyRecord | null;
  financingScenarios?: PrismaFinancingScenarioRecord[];
  financingLoans?: PrismaFinancingLoanRecord[];
  operatingScenarios?: PrismaOperatingScenarioRecord[];
  marketSummary?: PrismaMarketSummaryRecord | null;
  marketComparables?: PrismaMarketComparableRecord[];
  negotiationScenarios?: PrismaNegotiationScenarioRecord[];
  pdfExports?: PrismaPdfExportRecord[];
};

export const mapProjectBundleFromPrisma = (
  input: PrismaProjectBundleRecord,
): ProjectBundle => {
  return projectBundleSchema.parse({
    project: mapProjectFromPrisma(input.project),
    property: input.property ? mapPropertyFromPrisma(input.property) : null,
    financingScenarios: (input.financingScenarios ?? []).map(
      mapFinancingScenarioFromPrisma,
    ),
    financingLoans: (input.financingLoans ?? []).map(
      mapFinancingLoanFromPrisma,
    ),
    operatingScenarios: (input.operatingScenarios ?? []).map(
      mapOperatingScenarioFromPrisma,
    ),
    marketSummary: input.marketSummary
      ? mapMarketSummaryFromPrisma(input.marketSummary)
      : null,
    marketComparables: (input.marketComparables ?? []).map(
      mapMarketComparableFromPrisma,
    ),
    negotiationScenarios: (input.negotiationScenarios ?? []).map(
      mapNegotiationScenarioFromPrisma,
    ),
    pdfExports: (input.pdfExports ?? []).map(mapPdfExportFromPrisma),
  });
};

export const buildCalculationContext = (args: {
  project: PrismaProjectRecord;
  property: PrismaPropertyRecord;
  financingScenario: PrismaFinancingScenarioRecord;
  financingLoans?: PrismaFinancingLoanRecord[];
  operatingScenario: PrismaOperatingScenarioRecord;
  marketSummary?: PrismaMarketSummaryRecord | null;
}): CalculationContext => {
  return calculationContextSchema.parse({
    project: mapProjectFromPrisma(args.project),
    property: mapPropertyFromPrisma(args.property),
    financingScenario: mapFinancingScenarioFromPrisma(args.financingScenario),
    financingLoans: (args.financingLoans ?? []).map(mapFinancingLoanFromPrisma),
    operatingScenario: mapOperatingScenarioFromPrisma(args.operatingScenario),
    marketSummary: args.marketSummary
      ? mapMarketSummaryFromPrisma(args.marketSummary)
      : null,
  });
};

export const toPrismaCreateFinancingScenario = (
  input: unknown,
): CreateFinancingScenarioInput => {
  return createFinancingScenarioInputSchema.parse(input);
};

export const toPrismaCreateFinancingLoan = (
  input: unknown,
): CreateFinancingLoanInput => {
  return createFinancingLoanInputSchema.parse(input);
};

export const toPrismaCreateOperatingScenario = (
  input: unknown,
): CreateOperatingScenarioInput => {
  return createOperatingScenarioInputSchema.parse(input);
};

export const toPrismaCreateMarketComparable = (
  input: unknown,
): CreateMarketComparableInput => {
  return createMarketComparableInputSchema.parse(input);
};

export const toPrismaCreateNegotiationScenario = (
  input: unknown,
): CreateNegotiationScenarioInput => {
  return createNegotiationScenarioInputSchema.parse(input);
};

export const mapProjectToPrismaCreate = (input: Project) => {
  const parsed = projectSchema.parse(input);
  return compactUndefined({
    id: parsed.id,
    user_id: parsed.userId ?? null,
    title: parsed.title,
    source_url: parsed.sourceUrl ?? null,
    status: parsed.status,
    city: parsed.city ?? null,
    zipcode: parsed.zipcode ?? null,
    district: parsed.district ?? null,
    notes: parsed.notes ?? null,
  });
};

export const mapPropertyToPrismaCreate = (input: Property) => {
  const parsed = propertySchema.parse(input);
  return compactUndefined({
    id: parsed.id,
    project_id: parsed.projectId,
    property_type: parsed.propertyType ?? null,
    title: parsed.title ?? null,
    address_line_1: parsed.addressLine1 ?? null,
    address_line_2: parsed.addressLine2 ?? null,
    city: parsed.city ?? null,
    zipcode: parsed.zipcode ?? null,
    district: parsed.district ?? null,
    rooms: parsed.rooms ?? null,
    bedrooms: parsed.bedrooms ?? null,
    bathrooms: parsed.bathrooms ?? null,
    area_m2: parsed.areaM2 ?? null,
    floor: parsed.floor ?? null,
    total_floors: parsed.totalFloors ?? null,
    has_elevator: parsed.hasElevator,
    has_parking: parsed.hasParking,
    parking_count: parsed.parkingCount,
    has_balcony: parsed.hasBalcony,
    balcony_area_m2: parsed.balconyAreaM2 ?? null,
    has_terrace: parsed.hasTerrace,
    terrace_area_m2: parsed.terraceAreaM2 ?? null,
    has_garden: parsed.hasGarden,
    garden_area_m2: parsed.gardenAreaM2 ?? null,
    has_cave: parsed.hasCave,
    has_cellar: parsed.hasCellar,
    condition: parsed.condition ?? null,
    year_built: parsed.yearBuilt ?? null,
    delivery_year: parsed.deliveryYear ?? null,
    is_vefa: parsed.isVefa,
    dpe: parsed.dpe ?? null,
    ges: parsed.ges ?? null,
    energy_score: parsed.energyScore ?? null,
    climate_score: parsed.climateScore ?? null,
    distance_station_minutes: parsed.distanceStationMinutes ?? null,
    station_name: parsed.stationName ?? null,
    tension_score: parsed.tensionScore ?? null,
    listed_price: parsed.listedPrice ?? null,
    agency_fees: parsed.agencyFees ?? null,
    fees_included: parsed.feesIncluded,
    net_seller_price: parsed.netSellerPrice ?? null,
    notary_fees: parsed.notaryFees ?? null,
    furnishing_cost: parsed.furnishingCost ?? null,
    renovation_cost: parsed.renovationCost ?? null,
    guarantee_fees: parsed.guaranteeFees ?? null,
    bank_fees: parsed.bankFees ?? null,
    broker_fees: parsed.brokerFees ?? null,
    other_acquisition_costs: parsed.otherAcquisitionCosts ?? null,
    property_tax_annual: parsed.propertyTaxAnnual ?? null,
    condo_charges_monthly: parsed.condoChargesMonthly ?? null,
    recoverable_charges_ratio: parsed.recoverableChargesRatio ?? null,
    pno_annual: parsed.pnoAnnual ?? null,
    gli_annual: parsed.gliAnnual ?? null,
    maintenance_annual: parsed.maintenanceAnnual ?? null,
    management_fees_annual: parsed.managementFeesAnnual ?? null,
    cfe_annual: parsed.cfeAnnual ?? null,
    accountant_annual: parsed.accountantAnnual ?? null,
    other_operating_costs_annual: parsed.otherOperatingCostsAnnual ?? null,
    total_project_cost: parsed.totalProjectCost ?? null,
    price_per_m2: parsed.pricePerM2 ?? null,
  });
};
