/* eslint-disable no-console */
import { getPost, savePost } from '../firebase/post.js';
import { currentUser, signOut } from '../firebase/auth.js';
import { paintPost } from '../view/template.js';

// llamada a guardar post en el database
export const createPostEvent = (event) => {
  event.preventDefault();
  const contentForPost = document.querySelector('#content-for-post');
  const type = contentForPost.getAttribute('name');
  const user = currentUser();
  savePost(user, contentForPost.value, type).then(() => {
    window.location.hash = '#/mikuna';
  }).catch((error) => console.log(error));
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
  if (event.target.id === 'icon-private') {
    document.querySelector('#content-for-post').setAttribute('name', 'Private');
  } else {
    document.querySelector('#content-for-post').setAttribute('name', 'Public');
    event.classList.add('.active-icon');
  }
};
export const iconsignOutEvent = (event) => {
  event.preventDefault();
  signOut().then(() => {
    window.location.hash = '#/';
  });
};
