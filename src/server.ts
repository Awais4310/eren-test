import { App } from './app';
import { ValidateEnv } from './utils/validateEnv';
import { newroutes } from './routes/new.routes';
ValidateEnv();
const app = new App([new newroutes()]);

app.listen();
