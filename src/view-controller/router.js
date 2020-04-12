import { components } from '../view/index.js';
import { logUser } from '../firebase/auth.js';
import { getUserById } from '../firebase/post.js';

export const viewTemplate = (router) => {
  const base = document.getElementById('base');
  base.innerHTML = '';
  switch (router) {
    case '/':
    case '':
    case '#/':
      { return base.appendChild(components.vistaLogin()); }
    case '#/register':
      { return base.appendChild(components.vistaRegistro()); }
    case '#/mikuna':
      {
        return logUser((idUser) => getUserById(idUser).then((response) => {
          base.appendChild(components.vistaMikuna(response.data()));
        }).catch(() => base.appendChild(components.vistaLogin())));
        /* return logUser((idUser) => base.appendChild(components.vistaMikuna(idUser))); */
      }
    case '#/perfil':
      {
        return logUser((idUser) => getUserById(idUser).then((response) => {
          base.appendChild(components.vistaPerfil(response.data()));
        }).catch((error)=>alert(error.message)));
      }
    default:
      break;
  }
  return router;
};
