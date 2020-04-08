
import { savePost } from '../firebase/post.js';

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
        content.value = '';
        titleImg.innerHTML = '';
      }).catch((error) => alert('Error al cargar el post'));
  });
});
};
