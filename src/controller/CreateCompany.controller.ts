import { NewService } from '../services/Createcompany.service.';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import {
  CompanyByCodeDto,
  CompanyDto,
  deleteCompanyDto,
} from '../dtos/company.dto';

export class NewController {
  public getNew = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newService = Container.get(NewService);
      const result = await newService.getNew();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  public getCreateCompany = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const CompanyData: CompanyDto = req.body;
      const newService = Container.get(NewService);
      const result = await newService.CreateCompany(CompanyData);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  };
  public deleteCompany = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const CompanyData: deleteCompanyDto = req.body;
      const newService = Container.get(NewService);
      const result = await newService.deleteCompany(CompanyData);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  };
  public getCompanyByCode = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const CompanyCode: CompanyByCodeDto = req.body;
      const newService = Container.get(NewService);
      const result = await newService.getCompanyByCode(CompanyCode);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  public getAllCompanies = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const newService = Container.get(NewService);
      const result = await newService.getAllCompanies();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
