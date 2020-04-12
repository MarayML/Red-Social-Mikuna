import { savePerfilEvent, showPhotoEvent } from '../controller/perfil-controller.js'


export default (dataUser) => {
  const base = document.getElementById('base');
  base.innerHTML = ''
  const regContainer = document.createElement('div');
  const registerTemplate = `
  <main class="main-init-perfil">
  <section class="init-banner"><img src = "./image/index.jpg"></section>
  <section class = "init-login">
  <label for = "photo-upload" class = "icon-post-img"> 
  <img class="photo-current-user" data-change = 'false' title= "Cambiar foto de perfil" id = 'userPhoto' src='${dataUser.photoUser}'>
  </label>
  <input id="photo-upload" type="file" style='display: none;'/>
  <h6 class = "hide porcent"></h6>
  <h5>Registre sus datos</h5>
  <form>
  <input type="text" name = "Name" id = "input-name" title = "Usuario" class="field" value = ${dataUser.nameUser} required><br><br>
  <input type="text" class="field" id="input-birth" title = "Fecha nacimiento" value = "${dataUser.birthUser}" onfocus="(this.type='date')" onblur="(this.type='text')"><br><br>
  <select class = "field list-color" name="list_color">
  <option>Color preferido</option>
  <option>Azul</option>
  <option>Rojo</option>
  <option>Morado</option>
  <option>Amarillo</option>
  <option>Rosado</option>
  <option>Naranja</option>
  </select><br><br>
  <input type="text" name = "Ocupacion" id = "input-ocupacion" title = "Ocupacion" value = "${dataUser.ocupacionUser}" class="field"><br><br>
  <p class="ms-error"></p>
  <button type="submit" id = "btn-save" class="field button">Guardar</button><br><br>
  <p>Regresar <a href="#/mikuna">Mikuna</a></p>
  </form>  
</section>
</main>`; 

  regContainer.innerHTML = registerTemplate;


  regContainer.querySelector('button[type = "submit"]').addEventListener('click', savePerfilEvent);
  regContainer.querySelector('#photo-upload').addEventListener('change', showPhotoEvent);
  return regContainer;
};
