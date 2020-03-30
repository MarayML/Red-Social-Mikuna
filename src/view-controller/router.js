import { components } from '../view/index.js';
import { logUser } from '../firebase/auth.js';
import { getUserById } from '../firebase/post.js';


//  vista de templates
export const viewTemplate = (router) => {
  //  base es la caja basia que debomos llenar - extraido desde el html
  const base = document.getElementById('base');
  // ' ' limpia el contenido de un elemento
  base.innerHTML = '';
  switch (router) {
    case '/':
    case '':
    case '#/':
    { return base.appendChild(components.vistaLogin()); }
    case '#/register':
    { return base.appendChild(components.vistaRegistro()); }
    case '#/mikuna':
    { return logUser((idUser) => getUserById(idUser).then((response) => {
      console.log('entro');
      const userData = {
        idUser: idUser,
        nameUser: response.data().nameUser,
        photoUser: response.data().photoUser,
        colorUser:response.data().colorUser,
        birthUser: response.data().birthUser,
        ocupacionUser: response.data().ocupacionUser,
        emailUser: response.data().emailUser,
      };
      base.appendChild(components.vistaMikuna(userData));
    }).catch(() => base.appendChild(components.vistaLogin())));
      /* return logUser((idUser) => base.appendChild(components.vistaMikuna(idUser))); */ }
    default:
      break;
  }
  return router;
};
