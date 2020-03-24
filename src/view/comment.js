/* eslint-disable no-console */
export const paintComment = (post) => {
  console.log(post);
  const id = `#ul-${post.idPost}`;
  const container = document.createElement('li');
  container.innerHTML = '';
  const template = `<div class = div-comment>
  <div class = header-comment>
  <img class="user-photo-comment" src="${post.photoUser}">
  <h6>${post.nameUser}</h6>
  <div>
  <textarea readonly>${post.content}</textarea>
  </div>
  <div><i class="fa fa-trash-alt"></i></div>
  `;
  container.innerHTML = template;
  document.querySelector(id).appendChild(container);
};
