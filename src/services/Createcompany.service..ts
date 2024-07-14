import { Service } from 'typedi';
import { CompanyByCodeDto, CompanyDto } from '../dtos/company.dto';
import { DB } from '../database/analytics';
import { QueryTypes } from 'sequelize';
import { HttpException } from '../exceptions/httpException';
import { deleteCompanyDto } from '../dtos/company.dto';
import { Company } from '../interfaces/company.interface';

@Service()
export class NewService {
  public async getNew() {
    return 'new  project';
  }

  // public async CreateCompany(data: CompanyDto): Promise<number | string> {
  //   // const query = 'select * from company';
  //   // const result = await DB.sequelize.query(query);
  //   const {
  //     CompanyName,
  //     CompanyCode,
  //     CompanyEmailContact,
  //     CompanyPhoneContact,
  //     CompanyBillingStreet,
  //     CompanyBillingBuilding,
  //     CompanyBillingLevel,
  //     CompanyBillingUnit,
  //     CompanyBillingZip,
  //     CompanyRecommendedCreditTerm,
  //     CompanyRecommendedCreditLimit,
  //     CompanyRecommendedRentalLostDays,
  //     CompanyRecommendedBadDebtDays,
  //     AdministratorID,
  //   } = data;

  //   const query = `
  //     CALL uspInsertCompany(
  //       :CompanyName,
  //       :CompanyCode,
  //       :CompanyEmailContact,
  //       :CompanyPhoneContact,
  //       :CompanyBillingStreet,
  //       :CompanyBillingBuilding,
  //       :CompanyBillingLevel,
  //       :CompanyBillingUnit,
  //       :CompanyBillingZip,
  //       :CompanyRecommendedCreditTerm,
  //       :CompanyRecommendedCreditLimit,
  //       :CompanyRecommendedRentalLostDays,
  //       :CompanyRecommendedBadDebtDays,
  //       :AdministratorID,
  //       @NewCompanyID
  //     );
  //   `;
  //   console.log('query', query);
  //   var result = 0;
  //   try {
  //     var results = await DB.sequelize.query(query, {
  //       replacements: {
  //         CompanyName,
  //         CompanyCode,
  //         CompanyEmailContact,
  //         CompanyPhoneContact,
  //         CompanyBillingStreet,
  //         CompanyBillingBuilding,
  //         CompanyBillingLevel,
  //         CompanyBillingUnit,
  //         CompanyBillingZip,
  //         CompanyRecommendedCreditTerm,
  //         CompanyRecommendedCreditLimit,
  //         CompanyRecommendedRentalLostDays,
  //         CompanyRecommendedBadDebtDays,
  //         AdministratorID,
  //       },
  //       raw: true,
  //       type: QueryTypes.RAW,
  //     });

  //     // const newCompanyId = (metadata as any)[0].NewCompanyID;
  //     // console.log('resultSets:', resultSets);
  //     // console.log('metadata:', metadata);
  //     // const newCompanyId = (metadata as any)[0]['@NewCompanyID'];

  //     // console.log('r2 value is ', r2);
  //     console.log('query result', result);
  //     console.log('query results', results);
  //     // const [[{ NewCompanyID }]] = result as any;
  //     //const { NewCompanyID } = result[0][0];
  //     return 0;
  //     console.log(result);
  //   } catch (error) {
  //     if (
  //       error instanceof Error &&
  //       error.name === 'SequelizeDatabaseError' &&
  //       error.message.includes('Duplicate entry')
  //     ) {
  //       throw new HttpException(
  //         400,
  //         'Please enter another company code, it already exists.'
  //       );
  // Handle specific error for duplicate entry
  //     }
  //     console.error(error);
  //     throw new HttpException(
  //       400,
  //       'Company could not be registered, please try again or contact admin.'
  //     );
  //   }
  // }
  public async CreateCompany(data: CompanyDto): Promise<string> {
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
    try {
      await DB.sequelize.query(query, {
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

      console.log('Stored procedure executed successfully');
      return 'Company created successfully';
    } catch (error) {
      console.error('Error executing stored procedure:', error);

      if (error instanceof Error && error.message) {
        throw new HttpException(400, error.message.split('\n')[0]);
      } else {
        throw new HttpException(500, 'Something went wrong');
      }
    }
  }
  public async deleteCompany(data: deleteCompanyDto): Promise<string> {
    const { CompanyName, CompanyCode } = data;
    const query = `
      CALL uspDeleteCompany(:CompanyName, :CompanyCode, @p);
    `;
    try {
      await DB.sequelize.query(query, {
        replacements: {
          CompanyName,
          CompanyCode,
        },
        raw: true,
        type: QueryTypes.RAW,
      });
      console.log('Stored procedure executed successfully');
      return 'Company deleted successfully';
    } catch (error) {
      console.error('Error executing stored procedure:', error);
      if (error instanceof Error && error.message) {
        const filteredMessage = error.message.split('\n')[0];

        throw new HttpException(400, filteredMessage);
      } else {
        throw new HttpException(500, 'Something went wrong');
      }
    }
  }

  // public async getCompanyByCode(data: CompanyByCodeDto): Promise<any> {
  //   const { CompanyCode } = data;
  //   const query = `CALL uspInspectCompany(:CompanyCode);`;
  //   try {
  //     const result: any = await DB.sequelize.query(query, {
  //       replacements: {
  //         CompanyCode: CompanyCode,
  //       },
  //     });
  //     console.log('query result', result);
  //     return result;
  //   } catch (error) {
  //     console.error('Error executing stored procedure:', error);
  //     if (error instanceof Error && error.message) {
  //       throw new HttpException(400, error.message.split('\n')[0]);
  //     }
  //     throw new HttpException(500, 'Something went wrong');
  //   }
  // }

  public async getCompanyByCode(data: CompanyByCodeDto): Promise<any> {
    const { CompanyCode } = data;
    const query = `CALL uspInspectCompany(:CompanyCode);`;
    try {
      const result: any = await DB.sequelize.query(query, {
        replacements: {
          CompanyCode: CompanyCode,
        },
      });
      console.log('Query result:', result);
      if (result.length > 0) {
        return result;
      } else {
        // Return a custom message indicating no company found
        return {
          message: 'No company found for the given Company Code',
        };
      }
    } catch (error) {
      console.error('Error executing stored procedure:', error);
      if (error instanceof Error && error.message) {
        throw new HttpException(400, error.message.split('\n')[0]);
      }
      throw new HttpException(500, 'Something went wrong');
    }
  }
  public async getAllCompanies(): Promise<any> {
    const query = `CALL uspInspectAllCompany()`;
    try {
      const result: any = await DB.sequelize.query(query);
      if (result.length > 0) {
        return result;
      } else {
        // Return a custom message indicating no company found
        return {
          message: 'No company found',
        };
      }
    } catch (error) {
      console.error('Error executing stored procedure:', error);
      if (error instanceof Error && error.message) {
        throw new HttpException(400, error.message.split('\n')[0]);
      }
      throw new HttpException(500, 'Something went wrong');
    }
  }
}
