import {
  ComparableType,
  DeferredType,
  ExportType,
  FinancingMode,
  ISODateString,
  ISODateTimeString,
  LoanType,
  OperatingMode,
  ProjectStatus,
  PropertyCondition,
  PropertyType,
  TaxRegime,
  UUID,
  Verdict,
} from "../types/types";

export interface AuditFields {
  createdAt: ISODateTimeString;
  updatedAt: ISODateTimeString;
}

export interface Project extends AuditFields {
  id: UUID;
  userId?: string | null;
  title: string;
  sourceUrl?: string | null;
  status: ProjectStatus;
  city?: string | null;
  zipcode?: string | null;
  district?: string | null;
  notes?: string | null;
}

export interface Property extends AuditFields {
  id: UUID;
  projectId: UUID;
  propertyType?: PropertyType | null;
  title?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  zipcode?: string | null;
  district?: string | null;
  rooms?: number | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  areaM2?: number | null;
  floor?: string | null;
  totalFloors?: number | null;
  hasElevator: boolean;
  hasParking: boolean;
  parkingCount: number;
  hasBalcony: boolean;
  balconyAreaM2?: number | null;
  hasTerrace: boolean;
  terraceAreaM2?: number | null;
  hasGarden: boolean;
  gardenAreaM2?: number | null;
  hasCave: boolean;
  hasCellar: boolean;
  condition?: PropertyCondition | null;
  yearBuilt?: number | null;
  deliveryYear?: number | null;
  isVefa: boolean;
  dpe?: string | null;
  ges?: string | null;
  energyScore?: number | null;
  climateScore?: number | null;
  distanceStationMinutes?: number | null;
  stationName?: string | null;
  tensionScore?: number | null;
  listedPrice?: number | null;
  agencyFees?: number | null;
  feesIncluded: boolean;
  netSellerPrice?: number | null;
  notaryFees?: number | null;
  furnishingCost?: number | null;
  renovationCost?: number | null;
  guaranteeFees?: number | null;
  bankFees?: number | null;
  brokerFees?: number | null;
  otherAcquisitionCosts?: number | null;
  propertyTaxAnnual?: number | null;
  condoChargesMonthly?: number | null;
  recoverableChargesRatio?: number | null;
  pnoAnnual?: number | null;
  gliAnnual?: number | null;
  maintenanceAnnual?: number | null;
  managementFeesAnnual?: number | null;
  cfeAnnual?: number | null;
  accountantAnnual?: number | null;
  otherOperatingCostsAnnual?: number | null;
  totalProjectCost?: number | null;
  pricePerM2?: number | null;
}

export interface FinancingScenario extends AuditFields {
  id: UUID;
  projectId: UUID;
  label: string;
  isDefault: boolean;
  financingMode: FinancingMode;
  downPayment?: number | null;
  loanAmount?: number | null;
  nominalRate?: number | null;
  insuranceMonthly?: number | null;
  durationMonths?: number | null;
  deferredMonths?: number | null;
  bankFees?: number | null;
  guaranteeFees?: number | null;
  brokerFees?: number | null;
  monthlyPayment?: number | null;
  annualDebtService?: number | null;
  totalCreditCost?: number | null;
  weightedAverageRate?: number | null;
  smoothedMonthlyPayment?: number | null;
  notes?: string | null;
}

export interface FinancingLoan extends AuditFields {
  id: UUID;
  financingScenarioId: UUID;
  loanOrder: number;
  label?: string | null;
  principalAmount: number;
  outstandingCapital?: number | null;
  nominalRate?: number | null;
  insuranceMonthly?: number | null;
  deferredType?: DeferredType | null;
  deferredMonths?: number | null;
  amortizationMonths?: number | null;
  totalDurationMonths?: number | null;
  monthlyPaymentPhase1?: number | null;
  monthlyPaymentPhase2?: number | null;
  monthlyPaymentPhase3?: number | null;
  phase1Months?: number | null;
  phase2Months?: number | null;
  phase3Months?: number | null;
  loanType?: LoanType | null;
}

export interface OperatingScenario extends AuditFields {
  id: UUID;
  projectId: UUID;
  financingScenarioId?: UUID | null;
  label: string;
  mode: OperatingMode;
  isDefault: boolean;
  monthlyRent?: number | null;
  rentCcMonthly?: number | null;
  vacancyRate?: number | null;
  annualNights?: number | null;
  nightlyRate?: number | null;
  occupancyRate?: number | null;
  platformFeeRate?: number | null;
  cleaningCostAnnual?: number | null;
  otherRevenueAnnual?: number | null;
  taxRegime?: TaxRegime | null;
  marginalTaxRate?: number | null;
  socialTaxRate?: number | null;
  cfeAnnualOverride?: number | null;
  accountantAnnualOverride?: number | null;
  managementFeesAnnualOverride?: number | null;
  maintenanceAnnualOverride?: number | null;
  buildingValueForAmortization?: number | null;
  furnitureValueForAmortization?: number | null;
  annualBuildingAmortization?: number | null;
  annualFurnitureAmortization?: number | null;
  annualTotalAmortization?: number | null;
  annualRevenue?: number | null;
  annualOwnerCharges?: number | null;
  annualDebtService?: number | null;
  noiAnnual?: number | null;
  taxableResultAnnual?: number | null;
  taxAnnual?: number | null;
  cashflowAnnual?: number | null;
  cashflowMonthly?: number | null;
  grossYield?: number | null;
  netYield?: number | null;
  nnnYield?: number | null;
  dscr?: number | null;
  roe?: number | null;
  irr10y?: number | null;
  npv10y?: number | null;
  breakEvenRentMonthly?: number | null;
  breakEvenPrice?: number | null;
  verdict?: Verdict | null;
  verdictReason?: string | null;
}

export interface MarketSummary extends AuditFields {
  id: UUID;
  projectId: UUID;
  dvfMedianEurM2?: number | null;
  dvfMeanEurM2?: number | null;
  dvfP25EurM2?: number | null;
  dvfP75EurM2?: number | null;
  dvfSampleSize?: number | null;
  dvfTargetPrice?: number | null;
  marketRentMedian?: number | null;
  marketRentLow?: number | null;
  marketRentHigh?: number | null;
  marketRentEurM2?: number | null;
  rentalTensionLabel?: string | null;
  rentalTensionScore?: number | null;
  priceGapVsMarket?: number | null;
  rentGapVsMarket?: number | null;
  summary?: string | null;
}

export interface MarketComparable {
  id: UUID;
  projectId: UUID;
  comparableType: ComparableType;
  source: string;
  sourceUrl?: string | null;
  address?: string | null;
  city?: string | null;
  zipcode?: string | null;
  district?: string | null;
  propertyType?: string | null;
  rooms?: number | null;
  areaM2?: number | null;
  floor?: string | null;
  condition?: string | null;
  dpe?: string | null;
  price?: number | null;
  rentMonthly?: number | null;
  chargesMonthly?: number | null;
  euroPerM2?: number | null;
  comparableDate?: ISODateString | null;
  notes?: string | null;
  distanceKm?: number | null;
  createdAt: ISODateTimeString;
}

export interface NegotiationScenario extends AuditFields {
  id: UUID;
  projectId: UUID;
  financingScenarioId?: UUID | null;
  operatingScenarioId?: UUID | null;
  label: string;
  priceAmount: number;
  deltaPercent?: number | null;
  monthlyPayment?: number | null;
  cashflowMonthly?: number | null;
  nnnYield?: number | null;
  dscr?: number | null;
  verdict?: Verdict | null;
}

export interface PdfExport {
  id: UUID;
  projectId: UUID;
  exportType: ExportType;
  filePath?: string | null;
  fileName?: string | null;
  generatedAt: ISODateTimeString;
}

export interface ProjectBundle {
  project: Project;
  property?: Property | null;
  financingScenarios: FinancingScenario[];
  financingLoans: FinancingLoan[];
  operatingScenarios: OperatingScenario[];
  marketSummary?: MarketSummary | null;
  marketComparables: MarketComparable[];
  negotiationScenarios: NegotiationScenario[];
  pdfExports: PdfExport[];
}

export interface PropertyCostsBreakdown {
  acquisition: {
    netSellerPrice: number;
    agencyFees: number;
    notaryFees: number;
    furnishingCost: number;
    renovationCost: number;
    guaranteeFees: number;
    bankFees: number;
    brokerFees: number;
    otherAcquisitionCosts: number;
  };
  operating: {
    propertyTaxAnnual: number;
    condoChargesMonthly: number;
    recoverableChargesRatio: number;
    nonRecoverableCondoChargesAnnual: number;
    pnoAnnual: number;
    gliAnnual: number;
    maintenanceAnnual: number;
    managementFeesAnnual: number;
    cfeAnnual: number;
    accountantAnnual: number;
    otherOperatingCostsAnnual: number;
  };
}

export interface FinancingPhase {
  label: string;
  durationMonths: number;
  monthlyDebtService: number;
}

export interface FinancingComputed {
  monthlyPayment: number;
  annualDebtService: number;
  totalCreditCost: number;
  weightedAverageRate: number;
  smoothedMonthlyPayment?: number;
  phases: FinancingPhase[];
}

export interface OperatingComputed {
  annualRevenue: number;
  annualOwnerCharges: number;
  annualDebtService: number;
  noiAnnual: number;
  taxableResultAnnual: number;
  taxAnnual: number;
  cashflowAnnual: number;
  cashflowMonthly: number;
  grossYield: number;
  netYield: number;
  nnnYield: number;
  dscr: number;
  roe: number;
  irr10y?: number;
  npv10y?: number;
  breakEvenRentMonthly: number;
  breakEvenPrice: number;
  verdict: Verdict;
  verdictReason: string;
}

export interface NegotiationComputedRow {
  label: string;
  priceAmount: number;
  deltaPercent: number;
  monthlyPayment: number;
  cashflowMonthly: number;
  nnnYield: number;
  dscr: number;
  verdict: Verdict;
}

export interface MarketComputed {
  dvfMedianEurM2: number;
  dvfMeanEurM2: number;
  dvfP25EurM2: number;
  dvfP75EurM2: number;
  dvfSampleSize: number;
  dvfTargetPrice: number;
  marketRentMedian: number;
  marketRentLow: number;
  marketRentHigh: number;
  marketRentEurM2: number;
  rentalTensionLabel: string;
  rentalTensionScore: number;
  priceGapVsMarket: number;
  rentGapVsMarket: number;
  summary: string;
}

export interface CreateProjectInput {
  project: Pick<
    Project,
    "title" | "sourceUrl" | "city" | "zipcode" | "district" | "notes"
  > & {
    userId?: string | null;
  };
  property?: Partial<Omit<Property, keyof AuditFields | "id" | "projectId">>;
}

export interface UpdateProjectInput {
  title?: string;
  sourceUrl?: string | null;
  status?: ProjectStatus;
  city?: string | null;
  zipcode?: string | null;
  district?: string | null;
  notes?: string | null;
}

export interface UpsertPropertyInput extends Partial<
  Omit<Property, keyof AuditFields | "id" | "projectId">
> {
  projectId: UUID;
}

export interface CreateFinancingScenarioInput extends Partial<
  Omit<FinancingScenario, keyof AuditFields | "id" | "projectId">
> {
  projectId: UUID;
  label: string;
}

export interface CreateFinancingLoanInput extends Partial<
  Omit<
    FinancingLoan,
    keyof AuditFields | "id" | "financingScenarioId" | "principalAmount"
  >
> {
  financingScenarioId: UUID;
  principalAmount: number;
}

export interface CreateOperatingScenarioInput extends Partial<
  Omit<
    OperatingScenario,
    keyof AuditFields | "id" | "projectId" | "label" | "mode"
  >
> {
  projectId: UUID;
  label: string;
  mode: OperatingMode;
}

export interface CreateMarketComparableInput extends Partial<
  Omit<
    MarketComparable,
    "id" | "projectId" | "source" | "comparableType" | "createdAt"
  >
> {
  projectId: UUID;
  source: string;
  comparableType: ComparableType;
}

export interface CreateNegotiationScenarioInput extends Partial<
  Omit<
    NegotiationScenario,
    keyof AuditFields | "id" | "projectId" | "label" | "priceAmount"
  >
> {
  projectId: UUID;
  label: string;
  priceAmount: number;
}

export interface CalculationContext {
  project: Project;
  property: Property;
  financingScenario: FinancingScenario;
  financingLoans?: FinancingLoan[];
  operatingScenario: OperatingScenario;
  marketSummary?: MarketSummary | null;
}

export interface AppErrorShape {
  code: string;
  message: string;
  field?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: AppErrorShape;
}
