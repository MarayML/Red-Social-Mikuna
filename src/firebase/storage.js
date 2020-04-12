
import { savePost } from '../firebase/post.js';
import { currentUser } from "../firebase/auth.js";
import { updateDataUser } from "../firebase/post.js";


export const savePostImg = (dataPost, userData) => {
  const storageRef = firebase.storage().ref();
  const file = dataPost.fichero.files[0];
  const uploadTask = storageRef.child('post/' + file.name).put(file);
  const titleImg = document.querySelector('.nameImg');
  const content = document.querySelector('#content-for-post');
  uploadTask.on('state_changed', function (snapshot) {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    titleImg.innerHTML = Math.round(progress) + '%';
  }, function (error) {
    alert('Error al cargar la imagen');
  }, function () {
    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      dataPost.url = downloadURL;
      savePost(userData, dataPost).then(() => {
        dataPost.fichero.value = '';
        content.value = '';
        titleImg.innerHTML = '';
      }).catch((error) => alert('Error al cargar el post'));
  });
});
};

export const savePhotoUser = (file, dataUser) => {
  const image = document.querySelector('#userPhoto');
 const storageRef = firebase.storage().ref();
  const uploadTask = storageRef.child('users/' + currentUser()).put(file.files[0]);
  uploadTask.on('state_changed', function (snapshot) {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  }, function (error) {
    alert('Error al cargar la imagen');
  }, function () {
    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      dataUser.photoUser = downloadURL;
      updateDataUser(dataUser);
  });
});
};

export const showPhotoUser = (file) => {
  const image = document.querySelector('#userPhoto');
 const storageRef = firebase.storage().ref();
 const uploadTask = storageRef.child('temp/' + currentUser()).put(file.files[0]);
 const porcent = document.querySelector('.porcent');
  uploadTask.on('state_changed', function (snapshot) {
    porcent.classList.remove('hide');
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    porcent.innerHTML = Math.round(progress) + '%';
  }, function (error) {
    alert('Error al cargar la imagen');
    alert(error.message);
  }, function () {
    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      porcent.classList.add('hide');
      image.setAttribute('src', downloadURL);
      image.dataset.change = 'true';
  });
});
};