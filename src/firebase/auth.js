// Register
export const registerLog = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

// Login con google
export const googleLog = () => firebase.auth()
  .signInWithPopup(new firebase.auth.GoogleAuthProvider());

// Login con email y password // Inicio de sesion
export const emailLog = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

// Login con facebook
export const facebookLog = () => firebase.auth()
  .signInWithPopup(new firebase.auth.FacebookAuthProvider());

// usuario actual
export const currentUser = () => {
  const user = firebase.auth().currentUser;
  const userData = {
    id: user.uid,
    name: (user.displayName === null) ? 'Anonimo' : user.displayName,
    email: user.email,
    photo: (user.photoURL === null) ? './image/photo.png' : user.photoURL,
  };
  return userData;
};

// observador usuario logueado
export const logUser = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(user.uid);
    }
  });
};

// cerrar sesion
export const signOut = () => firebase.auth().signOut();
