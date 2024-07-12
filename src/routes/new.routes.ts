import { NewController } from '../controller/new.controller';
import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
export class newroutes implements Routes {
  public path = '/new';
  public router = Router();
  public controller = new NewController();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getNew);
    this.router.post(`${this.path}/erenPK`, this.controller.createCompany);
    this.router.post(`${this.path}/data`, this.controller.getdatfromdb);
  }
}
