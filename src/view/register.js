import { registerLogEvent } from '../controller/register-controller.js';
import { hidePassword, showPassword } from '../controller/login-controller.js';


export default () => {
  const base = document.getElementById('base');
  base.innerHTML = ''
  const regContainer = document.createElement('div');
  const registerTemplate = `
  <main class="main-init-register">
    <section class="init-banner"><img src = "./image/index.jpg"></section>
    <section class = "init-login">
  <img class="photo-current-user" id = 'userPhoto' src='./image/photo.png'>
    <h5>Registre sus datos</h5>
  <form>
  <input type="text" name = "Name" id = "input-name" placeholder= "  Name" class="field"><br><br>
  <input type="text" class="field" id="input-birth" placeholder= "  Fecha de nacimiento" onfocus="(this.type='date')" onblur="(this.type='text')"><br><br>
  <select class = "field list-color" name="list_color">
	<option>Color preferido</option>
	<option>Azul</option>
  <option>Rojo</option>
  <option>Morado</option>
  <option>Amarillo</option>
  <option>Rosado</option>
  <option>Naranja</option>
  </select><br><br>
  <input type="text" name = "Ocupacion" id = "input-ocupacion" placeholder= "  Ocupacion" class="field"><br><br>
  <input type="email" name = "Correo" id = "input-email" placeholder= "  Email" class="field"><br><br>
  <input type="password" name = "Contraseña" id = "field-password" placeholder="  Password" class="field"> 
  <span id = "icon-notshow-password" ><i class="icon-inside-field fas fa-eye-slash"></i></span>
  <span id = "icon-show-password" class = "hide" ><i class="icon-inside-field  far fa-eye"></i></span><br><br>
  <p class="ms-error"></p>
  <button type="submit" id = "btn-login" value="Registrar" class="field button">Iniciar</button><br><br>
  <p>¿Ya tienes una cuenta?&nbsp;<a href="#/">Iniciar Sesión</a></p>
  </form>  
</section>
</main>`;

  regContainer.innerHTML = registerTemplate;

  //  eventos
  regContainer.querySelector('button[type = "submit"]').addEventListener('click', registerLogEvent);
  regContainer.querySelector('#icon-notshow-password').addEventListener('click', hidePassword);
  regContainer.querySelector('#icon-show-password').addEventListener('click', showPassword);
  return regContainer;
};
