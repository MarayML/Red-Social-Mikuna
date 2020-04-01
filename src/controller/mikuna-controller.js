/* eslint-disable no-console */
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
  const file = document.querySelector('#file-upload');
  console.log(file.files[0]);
  console.log(event);
  
  
 // saveImage(file);
}

// llamada a guardar post en el database
export const createPostEvent = (event) => {
  event.preventDefault();
  const contentForPost = document.querySelector('#content-for-post');
  const type = contentForPost.getAttribute('name');
  const userId = currentUser();
  getUserById(userId).then((user) => {
    savePost(user.data(), userId, contentForPost.value, type).then(() => {
      contentForPost.value = '';
      window.location.hash = '#/mikuna';
    }).catch((error) => {
      alert(error.message);
      console.log('primera promesa');      
    });
  }).catch((error) => {
    alert(error.message);
    console.log('segunda promesa');      
  });
};

// llamada a repintar la red social
export const paintMikunaPost = (user) => {
  getPost()
    .onSnapshot((querySnapshot) => {
      document.querySelector('.container-list-posts').innerHTML = ' ';
      querySnapshot.forEach((post) => {
        if (post.data().privacity === 'Public' || (post.data().uidUser === user.id && post.data().privacity === 'Private')) { paintPost(post.data(), post.id); }
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
