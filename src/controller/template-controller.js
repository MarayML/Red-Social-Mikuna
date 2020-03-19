/* eslint-disable no-console */
import {
  deletePost, getPostById, updatePostPrivacity, updatePostLike, editPost, saveComment, getComment,
} from '../firebase/post.js';
import { currentUser } from '../firebase/auth.js';
import { paintComment } from '../view/comment.js';

export const deletePostEvent = (event) => {
  event.preventDefault();
  const btnDelete = event.target; // hay muchos iconos delete
  const postId = btnDelete.closest('.container-posts').id;
  const userId = btnDelete.closest('.container-posts').querySelector('.header-post').id;
  if (currentUser().id === userId) {
    deletePost(postId)
      .then(() => {
        window.location.hash = '#/mikuna';
        // console.log(doc);
      })
      .catch(() => {
        // console.log(error);
      });
  }
};
export const editPostEvent = () => {
  // e.preventDefault();
  // const idPost = btnEdit.closest('.container-posts').id;
  // console.log(e);
  document.querySelector('#edit-text-post').innerHTML = document.querySelector('.text-post').textContent;
};

export const savePostEvent = (idPost) => {
  const newText = document.querySelector('.textareaEdit').value;
  // console.log(idPost);
  editPost(idPost, newText)
    .then(() => {
      // console.log('se actualizo!', doc);
    })
    .catch(() => {
      // console.log('falló', error);
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

/*
export const privacityPostEvent = (event) => {
  const postId = event.target.closest('.container-posts').id;
  const value = event.target[event.target.value].innerText;
  updatePostPrivacity(postId, 'privacity', value);
}; */

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
  const id = `#li-${postId}`;
  const comment = document.querySelector(id);
  saveComment(currentUser(), postId, comment.value);
};
