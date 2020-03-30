import { currentUser } from '../firebase/auth.js'
import { deleteComment, getPostById, updatePostComment } from '../firebase/post.js'

export const ownerComment = (idUser) => ((idUser === currentUser()) ? true : false);

export const deleteCommentEvent = (event) => {
event.preventDefault();
const commentId = event.target.closest('.div-comment').id;
let postId = event.target.closest('ul').id
postId = postId.slice(3,postId.length);
const idUser = currentUser();
getPostById(postId).then((doc) => {
    let arrayComment = doc.data().comment;
    arrayComment = arrayComment.filter((id) => id !== idUser);
    updatePostComment(postId, arrayComment);
    deleteComment(commentId);
  });
}
