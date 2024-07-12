import { NewService } from '../services/new.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import { CompanyDto } from '../dtos/company.dto';
import { returnCompanyDto } from '../dtos/company.dto';

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
  public createCompany = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyData: CompanyDto = req.body;
      const newService = Container.get(NewService);
      const result = await newService.createCompany(companyData);
      res.status(201).json({ result });
    } catch (error) {
      next(error);
    }
  };
  public getdatfromdb = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data: CompanyDto = req.body;
      const newService = Container.get(NewService);
      const result = await newService.getdatafromdb(data);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
