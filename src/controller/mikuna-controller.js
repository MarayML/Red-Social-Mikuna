/* eslint-disable no-console */
import { savePostImg } from '../firebase/storage.js'
import { getPost, savePost, getUserById } from '../firebase/post.js';
import { currentUser, signOut } from '../firebase/auth.js';
import { paintPost } from '../view/template.js';

export const showMenuPrivacity = (event) => {
  event.preventDefault();
  const menu = document.querySelector('.ul-private');
  if (menu.classList.value.includes('hide'))
    menu.classList.remove('hide');
  else
    menu.classList.add('hide');
}

export const saveImageEvent = (event) =>{
  event.preventDefault();
  const file = document.querySelector('#file-upload');
  document.querySelector('.nameImg').innerHTML = file.files[0].name;
}

export const showMyPostEvent = (event) =>{
  event.preventDefault();
  console.log(event.target);  
  if(event.target.getAttribute('name') == 'perfil'){
  event.target.innerHTML = 'Mikuna';
  event.target.setAttribute('name','Mikuna');
  paintMyPost(currentUser());
  }else{
  event.target.innerHTML = 'Publicaciones'
  event.target.setAttribute('name','perfil');
  paintMikunaPost(currentUser());
}
}

export const paintMyPost = (id) =>{
  getPost()
    .onSnapshot((querySnapshot) => {
      document.querySelector('.container-list-posts').innerHTML = ' ';
      querySnapshot.forEach((post) => {
        if (post.data().uidUser === id) { 
          paintPost(post.data(), post.id); }
      });
    });
}

// llamada a guardar post en el database
export const createPostEvent = (event) => {
  event.preventDefault();
  const file = document.querySelector('#file-upload');
  const contentForPost = document.querySelector('#content-for-post');
  const type = contentForPost.getAttribute('name');
  const dataPost = {
    fichero: file,
    contentPost: contentForPost.value,
    privacityPost: type
  }
  getUserById(currentUser()).then((user) => {
    if(file.value !== '')
      savePostImg(dataPost, user.data());
    else {
      dataPost.url = '';
      savePost(user.data(), dataPost);
      contentForPost.value = '';
    }
    }).catch((error) => {
      alert(error.message);
    })
};

// llamada a repintar la red social
export const paintMikunaPost = (id) => {
  getPost()
    .onSnapshot((querySnapshot) => {
      document.querySelector('.container-list-posts').innerHTML = ' ';
      querySnapshot.forEach((post) => {
        if (post.data().privacity === 'Public' || (post.data().uidUser === id && post.data().privacity === 'Private')) { 
          paintPost(post.data(), post.id); }
      });
    });
};

export const iconPrivateEvent = (event) => {
  event.preventDefault();
  const menu = document.querySelector('.ul-private');
  const button =  document.querySelector('.btn-privacy');
  if (event.target.id === 'icon-private') {
    document.querySelector('#content-for-post').setAttribute('name', 'Private');
    button.textContent = 'Solo Yo';
    menu.classList.add('hide');
  } else {
    document.querySelector('#content-for-post').setAttribute('name', 'Public');
    button.textContent = 'Publico';
    menu.classList.add('hide');
  }
};
export const iconsignOutEvent = (event) => {
  event.preventDefault();
  signOut().then(() => {
    window.location.hash = '#/';
  });
};
