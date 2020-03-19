import {
  deletePostEvent, likePostEvent, ownerPost, privacityPostEvent,
  showCommentEvent, paintLikes, menuPostEvent, saveCommentEvent,
} from '../controller/template-controller.js';

export const paintPost = (userPost, idPost) => {
  const container = document.createElement('div');
  container.classList.add('container-posts');
  container.id = idPost;
  let datePost = userPost.publicationDate.toDate().toString();
  datePost = datePost.substring(0, datePost.indexOf('GMT'));
  const autorPost = ownerPost(userPost);
  container.innerHTML = '';
  const template = `<section class = header-post id="${userPost.uidUser}">
    <div class = header-name-photo>
    <img class="post-user-photo" src="${userPost.photoUser}">
    <h2 class = user-name-post>${userPost.nameUser}<h2>
    <div class = ${(autorPost === 0) ? 'hide' : 'icon-privacity'}>
    <span class = ${(userPost.privacity === 'Public') ? 'hide' : ''} ><i class="fas fa-lock" id = icon-private></i></span>
    <span class = ${(userPost.privacity === 'Private') ? 'hide' : ''}><i class="fas fa-lock-open" id = icon-not-private></i></span>
    </div>
    </div>
    <div class = ${(autorPost === 0) ? 'hide' : 'menu-barras'}>
    <i class="fas fa-bars" id = icon-barra></i>
    <nav name = 'hide' class = "menu-edit-delete hide" id = nav-${idPost}>
      <ul class = ul-edit-delete>
      <li><i class="fas fa-edit margin-left" id = "icon-edit-post"></i> Editar</li>
      <span class="line-horizontal"></span>
      <li><i class="fas fa-trash-alt margin-left" id="icon-delete-post"></i> Eliminar</li>
    </ul>      
  </nav>
    </div>
    </section>
    <div class = date-post><h1>${datePost}<h1></div>
    <h6 class = text-likes>Likes ${userPost.likes.length}</h6>
    <p class = text-post>${userPost.contentPost}</p>
    <section class = footer-post>
    <div class = div-likes>
    <i class="far fa-thumbs-up margin-left ${(paintLikes(userPost)) ? 'selected' : ''}" id = "icon-like"></i>
    </div>
    <div><i id = "icon-comment" class="far fa-comments"></i>
    <nav name = 'hide' class = "list-comment hide" id = comment-${idPost}>
    <ul class = ul-comments>
    <li><input type="text" name="lastname" class = text-comment id = li-${idPost}><i class="far fa-save save-comment"></i></li>
    <span class="line-horizontal"></span>
    <ul id = ul-${idPost}>
    </ul>
    </ul> 
    </nav>
    </div>
    </section>`;

  container.innerHTML = template;
  document.querySelector('.container-list-posts').appendChild(container);

  // eventos
  container.querySelector('#icon-barra').addEventListener('click', menuPostEvent);
  container.querySelector('#icon-private').addEventListener('click', privacityPostEvent);
  container.querySelector('#icon-not-private').addEventListener('click', privacityPostEvent);
  container.querySelector('#icon-like').addEventListener('click', likePostEvent);
  container.querySelector('#icon-delete-post').addEventListener('click', deletePostEvent);
  container.querySelector('#icon-comment').addEventListener('click', showCommentEvent);
  container.querySelector('.save-comment').addEventListener('click', saveCommentEvent);

  /*  container.querySelector('#icon-save-post').addEventListener('click', (event) => {
    event.preventDefault();
    savePostEvent(idPost);
  }); */


  // container.querySelector('#icon-edit-post').addEventListener('click', editPostEvent);
  container.querySelector('#icon-edit-post').addEventListener('click', (e) => {
    e.preventDefault();
    const btnEdit = e.target;
    const postId = btnEdit.closest('.container-posts').id;
    const divTextareaPost = document.createElement('div');
    divTextareaPost.innerHTML = '';
    const textareaPost = `
        <textarea class='textareaEdit' id='edit-text-post'></textarea>
        `;
    divTextareaPost.innerHTML = textareaPost;
    divTextareaPost.querySelector('textarea#edit-text-post').value = userPost.contentPost;
    document.querySelector(`#${postId}`).appendChild(divTextareaPost);
    document.querySelector('.text-post').classList.add('hide');
    document.querySelector('.textareaEdit').classList.remove('hide');
    // editPostEvent(e);
  });
  return container;
};