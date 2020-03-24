/* eslint-disable no-console */
import {
  deletePost, getPostById, updatePostPrivacity, updatePostLike, 
  editPost, saveComment, getComment,getUserById,
} from '../firebase/post.js';
import { currentUser } from '../firebase/auth.js';
import { paintComment } from '../view/comment.js';

export const deletePostEvent = (event) => {
  event.preventDefault();
  const btnDelete = event.target;
  const menu = btnDelete.closest('.menu-edit-delete');
  const postId = btnDelete.closest('.container-posts').id;
  deletePost(postId).then(() => {
    menu.classList.add('hide');
    window.location.hash = '#/mikuna';
  }).catch((error) => {
    alert(error.messaje);
  });
};

export const editPostEvent = (event) => {
  event.preventDefault();
  const btnEdit = event.target;
  const menu = btnEdit.closest('.menu-edit-delete');
  const postId = btnEdit.closest('.container-posts').id;
  const post = document.getElementById(postId);
  const ptexto = post.querySelector('#ptexto');
  const areatexto = post.querySelector('#areatexto');
  const save = post.querySelector('.icon-save');
  ptexto.classList.add('hide');
  areatexto.classList.remove('hide');
  menu.classList.add('hide');
  save.classList.remove('hide');
}

export const savePostEvent = (event) => {
  event.preventDefault();
  const btnSave = event.target;
  const postId = btnSave.closest('.container-posts').id;
  const post = document.getElementById(postId);
  const save = post.querySelector('.icon-save');
  const ptexto = post.querySelector('#ptexto');
  const areatexto = post.querySelector('#areatexto');
  editPost(postId, areatexto.value)
    .then((response) => {
      save.classList.add('hide');
      areatexto.classList.add('hide');
      ptexto.value = areatexto.value;
      ptexto.classList.remove('hide');
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const ownerPost = (userPost) => ((userPost.uidUser === currentUser().id) ? 1 : 0);


export const privacityPostEvent = (event) => {
  // eslint-disable-next-line no-unused-vars
  const postId = event.target.closest('.container-posts').id;
  let value = '';
  if (event.target.id === 'icon-private') value = 'Public';
  else value = 'Private';
  updatePostPrivacity(postId, value);
};

export const likePostEvent = (event) => {
  const postId = event.target.closest('.container-posts').id;
  const idUser = currentUser().id;
  getPostById(postId)
    .then((doc) => {
      let arrayLike = doc.data().likes;
      if (arrayLike.includes(idUser)) {
        arrayLike = arrayLike.filter((id) => id !== idUser);
      } else {
        arrayLike.push(idUser);
      }
      updatePostLike(postId, arrayLike);
    });
};

export const paintLikes = (userPost) => {
  if (userPost.likes.includes(currentUser().id)) return true;
  return false;
};


export const menuPostEvent = (event) => {
  event.preventDefault();
  const postId = event.target.closest('.container-posts').id;
  const id = `#nav-${postId}`;
  const element = document.querySelector(id);
  if (element.getAttribute('name') === 'hide') {
    element.classList.remove('hide');
    element.setAttribute('name', 'show');
  } else {
    element.classList.add('hide');
    element.setAttribute('name', 'hide');
  }
};

const paintCommentEvent = (postId) => {
  const id = `#ul-${postId}`;
  getComment(postId)
    .onSnapshot((querySnapshot) => {
      document.querySelector(id).innerHTML = ' ';
      querySnapshot.forEach((post) => {
        paintComment(post.data());
      });
    });
};

export const showCommentEvent = (event) => {
  event.preventDefault();
  const postId = event.target.closest('.container-posts').id;
  const id = `#comment-${postId}`;
  const element = document.querySelector(id);
  if (element.getAttribute('name') === 'hide') {
    element.classList.remove('hide');
    element.setAttribute('name', 'show');
    paintCommentEvent(postId);
  } else {
    element.classList.add('hide');
    element.setAttribute('name', 'hide');
  }
};

export const saveCommentEvent = (event) => {
  event.preventDefault();
  const postId = event.target.closest('.container-posts').id;
  const post = document.getElementById(postId);
  const comment = post.querySelector('.text-comment');
  //  const id = `#li-${postId}`;
  //  const comment = document.querySelector(id);
  const userId = currentUser().id;
  getUserById(userId).then((user) => {
  saveComment(userId, user.data(), postId, comment.value);
  comment.value = '';
  }).catch((error) => alert(error.message))
  };
