// company.interface.ts
export interface Company {
  CompanyID: number;
  CompanyName: string;
  CompanyCode: string;
  CompanyEmailContact: string;
  CompanyPhoneContact: string;
  CompanyBillingStreet: string;
  CompanyBillingBuilding: string;
  CompanyBillingLevel: string;
  CompanyBillingUnit: string;
  CompanyBillingZip: string;
  CompanyRecommendedCreditTerm: string;
  CompanyRecommendedCreditLimit: string;
  CompanyRecommendedRentalLostDays: string;
  CompanyRecommendedBadDebtDays: string;
  CompanyLastTransaction: string;
  CompanyCreateDate: string;
  AdministratorID: number;
  TerminationDate: string;
  //NewCompanyID: number;
}
