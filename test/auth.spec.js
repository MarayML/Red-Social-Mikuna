import {
  emailLog, facebookLog, googleLog, registerLog, signOut, currentUser,
} from '../src/firebase/auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();

mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

// iniciando tests

describe('Inicio de sesion con email y password', () => {
  it('Debería ser una funcion', () => {
    expect(typeof emailLog).toBe('function');
  });

  it('Debería poder iniciar sesion', () => emailLog('front@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('front@gmail.com');
    }));
});

describe('Inicio de sesion con facebook', () => {
  it('Debería ser una funcion', () => {
    expect(typeof facebookLog).toBe('function');
  });

  describe('Debería poder iniciar sesion con cuenta de facebook', () => {
    it('Deberia poder iniciar sesión', () => facebookLog()
      .then((user) => {
        expect(user.isAnonymous).toBe(false);
      }));
  });
});

describe('Inicio de sesion con google', () => {
  it('Debería ser una funcion', () => {
    expect(typeof googleLog).toBe('function');
  });

  describe('Debería poder iniciar sesion con cuenta de google', () => {
    it('Deberia poder iniciar sesión', () => googleLog()
      .then((user) => {
        expect(user.isAnonymous).toBe(false);
      }));
  });
});

describe('Registrar un usuario con email y password', () => {
  it('Debería ser una funcion', () => {
    expect(typeof registerLog).toBe('function');
  });

  it('Debería poder registrar un usuario', () => registerLog('prueba123@gmail.com', '123456')
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

describe('Cerrar sesión', () => {
  it('deberia ser una función', () => {
    expect(typeof signOut).toBe('function');
  });

  it('Debería cerrar sesión del usuario', () => signOut()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});

describe('Verifica si el usuario esta conectado', () => {
  it('deberia ser una función', () => {
    expect(typeof currentUser).toBe('function');
  });

  it('Deberia mostrar el usuario activo', () => {
    emailLog('front@gmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('front@gmail.com');
      });
  });
});
