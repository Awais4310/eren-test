import { App } from './app';
import { ValidateEnv } from './utils/validateEnv';
import { CreateCompanyRoute } from './routes/CreateCompany.route';
ValidateEnv();
const app = new App([new CreateCompanyRoute()]);

app.listen();
