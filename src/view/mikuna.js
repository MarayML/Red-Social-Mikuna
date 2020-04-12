import {
  createPostEvent, paintMikunaPost, iconPrivateEvent, iconsignOutEvent, 
  showMenuPrivacity, saveImageEvent, showMyPostEvent,showPerfilEvent,
} from '../controller/mikuna-controller.js';

export default (userData) => {
  const base = document.getElementById('base');
  base.innerHTML = ''
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
      <p>Cumplea&ntildeos: ${userData.birthUser}<p>
      <p>Color: <span class = text${userData.colorUser}>${userData.colorUser}</span> <p>
      <p>Ocupaci&oacute;n: ${userData.ocupacionUser}<p>
      <p>Email: ${userData.emailUser}<p>
  <button class = "btn-perfil" id = "btn-my-perfil">Perfil</button>
  <button class = "btn-perfil" name = 'perfil' id = "btn-my-post">Publicaciones</button>
  <button class = "btn-perfil" id = "btn-cerrar-sesion">Cerrar Sesión</button>
  </section>
  <section class= "social-post">
  <section class = "input-post">
  <div class = header-private>
  <button class="btn-privacy" data-privacy='0'>Privacidad</button><span class = "icon-arrow"><i class="fas fa-caret-down"></i></span>
    <ul name = "hide" class = "ul-private hide">
    <li class="menu-privacity" id="icon-public"><i class="fas fa-lock-open" style = "padding-right:5px"></i> P&uacute;blico</li>
    <span class="line-horizontal"></span>
    <li class="menu-privacity" id="icon-private"><i class="fas fa-lock" style = "padding-right:5px"></i> Solo yo</li>
    </ul>
   </div>
  <textarea class = textarea-post id = "content-for-post" name = "Public" placeholder="¿Tienes algo que contarnos?"></textarea>
  <div class = footer-input-post>
  <label for = "file-upload" class = "icon-post-img"><i class="far fa-image"></i></label>
  <input id="file-upload" type="file" style='display: none;'/>
  <p class = 'nameImg'></p>
  <button id = "button-create-post" class = "btn-publicar">Publicar</button>
  <div>
  </section>
  <div class="container-list-posts" id="container-posts"></div>
  </section>
  </section>
   `;

  mikunaMain.innerHTML = postTemplate;
  paintMikunaPost(userData.idUser);
  mikunaMain.querySelector('#button-create-post').addEventListener('click', createPostEvent);
  mikunaMain.querySelectorAll('.menu-privacity').forEach((icon) => icon.addEventListener('click', iconPrivateEvent));
  mikunaMain.querySelector('#btn-cerrar-sesion').addEventListener('click', iconsignOutEvent);
  mikunaMain.querySelector('.btn-privacy').addEventListener('click', showMenuPrivacity);
  mikunaMain.querySelector('.icon-arrow').addEventListener('click', showMenuPrivacity);
  mikunaMain.querySelector('#file-upload').addEventListener('change', saveImageEvent);
  mikunaMain.querySelector('#btn-my-perfil').addEventListener('click', showPerfilEvent);
  mikunaMain.querySelector('#btn-my-post').addEventListener('click', showMyPostEvent);

  return mikunaMain;
};
