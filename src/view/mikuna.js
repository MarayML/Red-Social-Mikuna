import {
  createPostEvent, paintMikunaPost, iconPrivateEvent, iconsignOutEvent,
} from '../controller/mikuna-controller.js';
import { currentUser } from '../firebase/auth.js';

export default (userData) => {
  // eslint-disable-next-line no-console
  const user = currentUser();
  const mikunaMain = document.createElement('div');
  const postTemplate = `
  <section class = "display-flex">
  <nav class = "nav-bar">HOla</nav>
  <section class="social-perfil">
  <img class="photo-current-user" src='${userData.photoUser}'>
      <h2>${userData.nameUser}</h2>
      <p>${userData.ocupacionUser}<p>
      <p>${userData.emailUser}<p>
  <button class = "btn-cerrar-sesion">Cerrar Sesión</button>
  </section>
  <section class= "social-post">
  <section class = "input-post">
  <div class = header-private>
  <div class = div-input-private>
  <i class="fas fa-lock icon-post-private" id = icon-private></i>
  <i class="fas fa-lock-open icon-post-private" id = icon-not-private></i> 
  </div>
  </div>
  <textarea id = "content-for-post" name = "Public" placeholder="¿Tienes algo que contarnos?"></textarea>
  <div class = footer-input-post>
  <div><i class="fas fa-images icon-post-img"></i></div>
  <button id = "button-create-post" class = "btn-publicar">Publicar</button>
  <div>
  </section>
  <div class="container-list-posts" id="container-posts"></div>
  </section>
  </section>
   `;

  mikunaMain.innerHTML = postTemplate;
  paintMikunaPost(user);
  mikunaMain.querySelector('#button-create-post').addEventListener('click', createPostEvent);
  mikunaMain.querySelectorAll('.icon-post-private').forEach((icon) => icon.addEventListener('click', iconPrivateEvent));
  mikunaMain.querySelector('.btn-cerrar-sesion').addEventListener('click', iconsignOutEvent);
  return mikunaMain;
};
