import { showPhotoUser, savePhotoUser } from '../firebase/storage.js'
import { currentUser } from "../firebase/auth.js";
import { updateDataUser } from "../firebase/post.js";

export const savePerfilEvent = (event) => {
    event.preventDefault();
    const colorIndex = document.querySelector('.list-color').options.selectedIndex;
    const image = document.querySelector('#userPhoto').getAttribute('src');
    const dataUser = {
        idUser: currentUser(),
        nameUser: document.querySelector('#input-name').value,
        birthUser: document.querySelector('#input-birth').value,
        colorUser: document.querySelector('.list-color').options[colorIndex].text,
        ocupacionUser: document.querySelector('#input-ocupacion').value,
    }
    if (document.querySelector('#userPhoto').dataset.change === 'false') {
        dataUser.photoUser = image;
        updateDataUser(dataUser);
    }
    else {
        const file = document.querySelector('#photo-upload');
        savePhotoUser(file, dataUser);
    }
    window.location.hash = '#/mikuna';
}

export const showPhotoEvent = (event) => {
    event.preventDefault();
    const file = document.querySelector('#photo-upload');
  //  if (event.target.parentNode.parentNode.getAttribute('class').includes('main-init-perfil'))
    showPhotoUser(file);
}
