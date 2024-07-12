import { Service } from 'typedi';
import { CompanyDto } from '../dtos/company.dto';
import { DB } from '../database/analytics';
import { QueryTypes } from 'sequelize';
import { HttpException } from '../exceptions/httpException';

@Service()
export class NewService {
  public async getNew() {
    return 'new  project';
  }
  public async createCompany(companyData: CompanyDto) {
    // Logic to handle the company creation, e.g., calling the stored procedure.
    // For now, return a dummy response
    return 'your store pro is working';
  }
  public async getdatafromdb(data: CompanyDto): Promise<number | string> {
    // const query = 'select * from company';
    // const result = await DB.sequelize.query(query);
    const {
      CompanyName,
      CompanyCode,
      CompanyEmailContact,
      CompanyPhoneContact,
      CompanyBillingStreet,
      CompanyBillingBuilding,
      CompanyBillingLevel,
      CompanyBillingUnit,
      CompanyBillingZip,
      CompanyRecommendedCreditTerm,
      CompanyRecommendedCreditLimit,
      CompanyRecommendedRentalLostDays,
      CompanyRecommendedBadDebtDays,
      AdministratorID,
    } = data;

    const query = `
      CALL uspInsertCompany(
        :CompanyName, 
        :CompanyCode, 
        :CompanyEmailContact, 
        :CompanyPhoneContact, 
        :CompanyBillingStreet, 
        :CompanyBillingBuilding, 
        :CompanyBillingLevel, 
        :CompanyBillingUnit, 
        :CompanyBillingZip, 
        :CompanyRecommendedCreditTerm, 
        :CompanyRecommendedCreditLimit, 
        :CompanyRecommendedRentalLostDays, 
        :CompanyRecommendedBadDebtDays, 
        :AdministratorID, 
        @NewCompanyID
      );
    `;
    console.log('query', query);
    var result = 0;
    try {
      var results = await DB.sequelize.query(query, {
        replacements: {
          CompanyName,
          CompanyCode,
          CompanyEmailContact,
          CompanyPhoneContact,
          CompanyBillingStreet,
          CompanyBillingBuilding,
          CompanyBillingLevel,
          CompanyBillingUnit,
          CompanyBillingZip,
          CompanyRecommendedCreditTerm,
          CompanyRecommendedCreditLimit,
          CompanyRecommendedRentalLostDays,
          CompanyRecommendedBadDebtDays,
          AdministratorID,
        },
        raw: true,
        type: QueryTypes.RAW,
      });

      // const newCompanyId = (metadata as any)[0].NewCompanyID;
      // console.log('resultSets:', resultSets);
      // console.log('metadata:', metadata);
      // const newCompanyId = (metadata as any)[0]['@NewCompanyID'];

      // console.log('r2 value is ', r2);
      console.log('query result', result);
      console.log('query results', results);
      // const [[{ NewCompanyID }]] = result as any;
      //const { NewCompanyID } = result[0][0];
      return 0;
      console.log(result);
    } catch (error) {
      if (
        error instanceof Error &&
        error.name === 'SequelizeDatabaseError' &&
        error.message.includes('Duplicate entry')
      ) {
        throw new HttpException(
          400,
          'Please enter another company code, it already exists.'
        );
        // Handle specific error for duplicate entry
      }
      console.error(error);
      throw new HttpException(
        400,
        'Company could not be registered, please try again or contact admin.'
      );
     
    }
  }
}
