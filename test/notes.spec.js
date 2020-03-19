import MockFirebase from 'mock-cloud-firestore';
import { getPostById, editPost } from '../src/firebase/post.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        post_1: {
          contentPost: 'Texto posteado',
          likes: [],
          nameUser: 'Lourdes Vilchez',
          photoUser: 'https://lh3.googleusercontent.com/a-/AAuE7mBZcEnJbbp5jLu7GUN_QFQKnST8qypxffXrg7IO',
          privacity: 'Private',
          publicationDate: new Date(),
          uidUser: 'jwmcmlxbpxZ9h9LuCPc5TtI2ZP13',
        },
        post_2: {
          contentPost: 'Texto posteado-2',
          likes: [],
          nameUser: 'Patricia Barrientos',
          photoUser: 'https://lh6.googleusercontent.com/-cZJX-BPBDsg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rerXIjx2UyEzUiaGVvjmGb_-DB5HA/photo.jpg',
          privacity: 'Public',
          publicationDate: new Date(),
          uidUser: 'gqx6LowZp9Zua8LJMCiWU1iq9kJ2',
        },
      },
    },

  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('Editar post', () => {
  it('Debería modificar/editar el contenido de un post', (done) => editPost('post_1', 'Contenido editado')
    .then(() => getPostById('post_1')
      .then((doc) => {
        // eslint-disable-next-line no-console
        console.log(doc);
        expect(doc.data().contentPost).toBe('Contenido editado');
        done();
      })));
});
