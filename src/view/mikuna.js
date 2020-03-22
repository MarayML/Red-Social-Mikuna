import {
  createPostEvent, paintMikunaPost, iconPrivateEvent, iconsignOutEvent, showMenuPrivacity
} from '../controller/mikuna-controller.js';
import { currentUser } from '../firebase/auth.js';

export default (userData) => {
  // eslint-disable-next-line no-console
  const user = currentUser();
  const mikunaMain = document.createElement('div');
  const postTemplate = `
  <nav class = "nav-bar">
  <section>
  <img class = 'logo-nav' src='./image/logo-nav.jpg'>
  <h2>MIKUNA</h2>
  </section>
  </nav>
  <section class = "display-flex">
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
  <button class="btn-privacy" data-privacy='0'>Privacidad</button><span class = "icon-arrow"><i class="fas fa-caret-down"></i></span>
    <ul name = "hide" class = "ul-private hide">
    <li class="icon-privacity" id="icon-public"><i class="fas fa-lock-open"></i> Publico</li>
    <span class="line-horizontal"></span>
    <li class="icon-privacity" id="icon-private"><i class="fas fa-lock"></i> Solo yo</li>
    </ul>
   </div>
  <textarea id = "content-for-post" name = "Public" placeholder="¿Tienes algo que contarnos?"></textarea>
  <div class = footer-input-post>
  <div><i class="far fa-image icon-post-img"></i></div>
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
  mikunaMain.querySelectorAll('.icon-privacity').forEach((icon) => icon.addEventListener('click', iconPrivateEvent));
  mikunaMain.querySelector('.btn-cerrar-sesion').addEventListener('click', iconsignOutEvent);
  mikunaMain.querySelector('.btn-privacy').addEventListener('click', showMenuPrivacity);
  mikunaMain.querySelector('.icon-arrow').addEventListener('click', showMenuPrivacity);
  return mikunaMain;
};
