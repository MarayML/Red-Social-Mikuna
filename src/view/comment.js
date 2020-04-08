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
  <div class = ${(ownerComment(comment.uidUser)) ? 'icon-close' : 'hide'}><i class="fa fa-times-circle"></i></div>
  </article>
  <p>${comment.content}</p>
  </section>
  `;
  container.innerHTML = template;
  document.querySelector(id).appendChild(container);
  container.querySelector('.icon-close').addEventListener('click', deleteCommentEvent);

};
