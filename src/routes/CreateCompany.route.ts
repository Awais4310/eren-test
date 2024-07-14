import { NewController } from '../controller/CreateCompany.controller';
import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
export class CreateCompanyRoute implements Routes {
  public path = '/company';
  public router = Router();
  public controller = new NewController();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getNew);

    this.router.post(`${this.path}/create`, this.controller.getCreateCompany);

    this.router.delete(`${this.path}/delete`, this.controller.deleteCompany);
    this.router.post(
      `${this.path}/CompanyByCode`,
      this.controller.getCompanyByCode
    );

    this.router.get(
      `${this.path}/ViwAllcompanies`,
      this.controller.getAllCompanies
    );
  }
}
