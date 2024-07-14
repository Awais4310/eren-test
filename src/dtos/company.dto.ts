import { Matches } from 'class-validator';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CompanyDto {
  @IsNotEmpty({ message: 'Company Name is required' })
  @IsString()
  public CompanyName: string;

  @IsNotEmpty({ message: 'Company Code is required' })
  @IsString()
  public CompanyCode: string;

  @IsNotEmpty({ message: 'Contact Email is required' })
  @IsEmail()
  public CompanyEmailContact: string;

  // @IsNotEmpty({ message: 'Contact Phone is required' })
  // @IsString()
  // public CompanyPhoneContact: string;
  @IsNotEmpty({ message: 'Contact Phone is required' })
  @IsString()
  @Matches(/^\d{8}$/, {
    message: 'Singapore phone numbers must be 8 digits long',
  })
  public CompanyPhoneContact: string;

  @IsString()
  @IsOptional()
  public CompanyBillingStreet: string;

  @IsOptional()
  @IsString()
  public CompanyBillingBuilding: string;

  @IsString()
  public CompanyBillingLevel: string;

  @IsString()
  @Length(0, 8, {
    message: 'Unit field must be between 0 and 8 characters long',
  })
  public CompanyBillingUnit: string;

  @IsString()
  public CompanyBillingZip: string;

  @IsNumber()
  public CompanyRecommendedCreditTerm: number;

  @IsNumber()
  public CompanyRecommendedCreditLimit: number;

  @IsNumber()
  public CompanyRecommendedRentalLostDays: number;

  @IsNumber()
  public CompanyRecommendedBadDebtDays: number;

  @IsString()
  public AdministratorID: string;
}
export class returnCompanyDto {
  @IsNotEmpty({ message: 'CompanyID is required' })
  @IsNumber()
  public CompanyID: number;
}
export class deleteCompanyDto {
  @IsNotEmpty({ message: 'company name is required' })
  @IsString()
  public CompanyName: string;

  @IsNotEmpty({ message: 'company code is required' })
  @IsString()
  public CompanyCode: String;
}
export class CompanyByCodeDto {
  @IsNotEmpty({ message: 'company code is required' })
  @IsString()
  public CompanyCode: String;
}
