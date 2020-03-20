/* eslint-disable no-console */
import { registerLog } from '../firebase/auth.js';
import { createUserCollection } from '../firebase/post.js';
import { errorEmail, errorPassword } from './login-controller.js';


export const registerLogEvent = (event) => {
  event.preventDefault();
  const name = document.querySelector('#input-name');
  const birth = document.querySelector('#input-birth');
  const ocupacion = document.querySelector('#input-ocupacion');
  const email = document.querySelector('#input-email');
  const password = document.querySelector('#field-password');
  const errorMsg = document.querySelector('.ms-error');
  registerLog(email.value, password.value).then((response) => {
    const userData = {
      idUser: response.user.uid,
      nameUser: name.value,
      photoUser: './image/photo.png',
      birthUser: birth.value,
      ocupacionUser: ocupacion.value,
      emailUser: email.value,
    };
    createUserCollection(userData);
    window.location.hash = '#/mikuna';
  })
    .catch((error) => {
      switch (error.code) {
        case 'auth/invalid-email':
          errorEmail(email, password);
          errorMsg.innerHTML = '**El formato del correo ingresado no es valido, verifica e intente de nuevo**';
          break;
        case 'auth/email-already-in-use':
          errorEmail(email, password);
          errorMsg.innerHTML = '**El correo electrónico proporcionado esta siendo utilizado por otro miembro., verifica e intente de nuevo**';
          break;
        case 'auth/email-already-exists':
          errorEmail(email, password);
          errorMsg.innerHTML = '**El correo electrónico proporcionado esta siendo utilizado por otro miembro., verifica e intente de nuevo**';
          break;
        case 'auth/weak-password':
          errorPassword(email, password);
          errorMsg.innerHTML = '**La contraseña debe tener al menos 6 caracteres**';
          break;
        default:
          errorMsg.innerHTML = error.code;
          break;
      }
    });
};
