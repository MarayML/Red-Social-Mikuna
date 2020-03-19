import {
  facebookLoginEvent,
  googleLoginEvent,
  emailLoginEvent,
  registerView,
  hidePassword,
  showPassword,
} from '../controller/login-controller.js';

export const viewLogin = () => {
  const logContainer = document.createElement('div');
  logContainer.innerHTML = '';
  const loginTemplate = `
    <main class="main-init">
    <section class="init-banner"><img src = "./image/index-2.jpg"></section>
    <section class = "init-login">
    <img src = "./image/logo.jpg">
    <h5>!Bienvenido a nuestra Red Social!</h5>
    <form>
    <input type="email" name = "Correo" placeholder= "  Email" class="field field-login" id = field-email><br><br>
    <input type="password" name = "Contraseña" placeholder="  Password" class="field field-login" id = field-password> 
    <span id = "icon-notshow-password" ><i class="icon-inside-field fas fa-eye-slash"></i></span>
    <span id = "icon-show-password" class = "hide" ><i class="icon-inside-field  far fa-eye"></i></span><br><br>
    <p class="ms-error"></p>
    <button type="submit" id = "btn-login" value="Log in" class="field button">Iniciar Sesion</button>
    <p>O bien ingresa con...<p>
    </form>  
    <div class = "btn-fb-google">
      <a id="icon-facebook" href="#"><i class="fab fa-facebook icon-face"></i></a>
      <a id="icon-google" href="#"><i class="fab fa-google-plus icon-google"></i></a>   
    </div>  
    <p>¿No tienes una cuenta?&nbsp;<a href="#/register" id="registrate">Regístrate.</a></p>
  </section>
  </main>`;

  logContainer.innerHTML = loginTemplate;
  //  eventos
  logContainer.querySelector('#icon-facebook').addEventListener('click', facebookLoginEvent);
  logContainer.querySelector('#icon-google').addEventListener('click', googleLoginEvent);
  logContainer.querySelector('button[type = "submit"]').addEventListener('click', emailLoginEvent);
  logContainer.querySelector('#icon-notshow-password').addEventListener('click', hidePassword);
  logContainer.querySelector('#icon-show-password').addEventListener('click', showPassword);
  logContainer.querySelector('#registrate').addEventListener('click', registerView);
  return logContainer;
};
