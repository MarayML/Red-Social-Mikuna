import { viewLogin } from './login.js';
import viewRegister from './register.js';
import Different from './404.js';
import viewMikuna from './mikuna.js';

const components = {
  vistaLogin: viewLogin,
  vistaRegistro: viewRegister,
  different: Different,
  vistaMikuna: viewMikuna,
};
export { components };
