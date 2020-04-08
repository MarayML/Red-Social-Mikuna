import { currentUser } from "../firebase/auth.js";

export const savePost = (user, post) => firebase.firestore().collection('posts').add({
    uidUser: currentUser(),
    nameUser: user.nameUser,
    photoUser: user.photoUser,
    colorUser: user.colorUser,
    contentPost: post.contentPost,
    likes: [],
    comment: [],
    photoPost: post.url,
    privacity: post.privacityPost,
    publicationDate: new Date(),
  });
 

export const saveComment = (userId, user, idpost, contentC) => firebase.firestore().collection('comments')
  .add({
    uidUser: userId,
    nameUser: user.nameUser,
    photoUser: user.photoUser,
    colorUser: user.colorUser,
    idPost: idpost,
    content: contentC,
  });

export const createUserCollection = (userData) => {
  firebase.firestore().collection('users').doc(userData.idUser)
    .set({
      nameUser: (userData.nameUser === null) ? 'An&oacute;nimo' : userData.nameUser,
      photoUser: (userData.photoUser === null) ? './image/photo.png' : userData.photoUser,
      birthUser: (userData.birthUser === null) ? '' : userData.birthUser,
      colorUser: userData.colorUser,
      ocupacionUser: userData.ocupacionUser,
      emailUser: userData.emailUser,
    });
};

export const getUserById = (idUser) => firebase.firestore().collection('users').doc(idUser).get();

// obtener post
export const getPost = () => firebase.firestore().collection('posts').orderBy('publicationDate', 'desc');

export const getComment = (postId) => firebase.firestore().collection('comments').where('idPost', '==', postId);

export const getPostById = (idPost) => firebase.firestore().collection('posts').doc(idPost).get();

// borrar post
export const deletePost = (idPost) => {
  firebase.firestore().collection('posts').doc(idPost).delete();
  firebase.firestore().collection('comments').where('idPost','==',idPost)
  .get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    doc.ref.delete();
  });
}); 
}
// editar post
export const editPost = (idPost, newText) => firebase.firestore().collection('posts').doc(idPost).update({
  contentPost: newText,
});

export const updatePostLike = (idPost, value) => {
  firebase.firestore().collection('posts').doc(idPost).update({
    likes: value,
  });
};

export const updatePostComment = (idPost, value) => {
  firebase.firestore().collection('posts').doc(idPost).update({
    comment: value,
  });
};

export const updatePostPrivacity = (idPost, value) => {
  firebase.firestore().collection('posts').doc(idPost).update({
    privacity: value,
  });
};

export const updatePostPhoto = (idPost, value) => {
  firebase.firestore().collection('posts').doc(idPost).update({
    photoPost: value,
  });
};

export const deleteComment = (commentId) =>   {
  firebase.firestore().collection('comments').doc(commentId).delete();
}

