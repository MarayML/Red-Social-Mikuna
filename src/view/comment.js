import { deleteCommentEvent, ownerComment } from '../controller/comment-controller.js';

export const paintComment = (comment,idComment) => {
  const id = `#ul-${comment.idPost}`;
  const container = document.createElement('li');
  container.classList.add('div-comment');
  container.id = idComment;
  container.innerHTML = '';
  const template = `<section class = "comment ${comment.colorUser}">
  <article class = "header-comment">
  <img class="user-photo-comment" src="${comment.photoUser}"/>
  <h6>${comment.nameUser}</h6>
  </article>
  <p>${comment.content}</p>
  </section>
  <div class = ${(ownerComment(comment.uidUser)) ? 'delete-comment' : 'hide'}><i class="far fa-trash-alt"></i></div>
  `;
  container.innerHTML = template;
  document.querySelector(id).appendChild(container);
  container.querySelector('.delete-comment').addEventListener('click', deleteCommentEvent);

};
