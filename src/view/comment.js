/* eslint-disable no-console */
export const paintComment = (post) => {
  console.log(post);
  const id = `#ul-${post.idPost}`;
  const container = document.createElement('li');
  container.innerHTML = '';
  const template = `<div>
  <div class = div-comment>
  <img class="user-photo-comment" src="${post.photoUser}">
  <h6>${post.nameUser}</h6>
  <div>
  <p>${post.content}</p>
  </div>
  `;
  container.innerHTML = template;
  console.log(container);
  console.log(id);
  console.log(document.querySelector(id));
  document.querySelector(id).appendChild(container);
};
