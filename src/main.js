import { viewTemplate } from './view-controller/router.js';

const init = () => {
  const app = firebase.initializeApp({
    apiKey: "AIzaSyBo8EpJ6fCQUNqnKIG4RrydMH6ViPxR34M",
    authDomain: "mikuna-2f0e9.firebaseapp.com",
    databaseURL: "https://mikuna-2f0e9.firebaseio.com",
    projectId: "mikuna-2f0e9",
    storageBucket: "mikuna-2f0e9.appspot.com",
    messagingSenderId: "576889277146",
    appId: "1:576889277146:web:f90a0289ab7ce339e1f3e3",
    measurementId: "G-0MPDMGRHXB"
  });
  viewTemplate(window.location.hash);
  window.addEventListener('hashchange', () => viewTemplate(window.location.hash));
  return app;
};
window.addEventListener('load', init);
