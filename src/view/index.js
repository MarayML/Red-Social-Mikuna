import { viewLogin } from './login.js';
import viewRegister from './register.js';
import Different from './404.js';
import viewMikuna from './mikuna.js';
import viewPerfil from './perfil.js';


const components = {
  vistaLogin: viewLogin,
  vistaRegistro: viewRegister,
  different: Different,
  vistaMikuna: viewMikuna,
  vistaPerfil: viewPerfil
};
export { components };
