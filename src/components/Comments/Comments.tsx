import React, { useState } from 'react';
import styles from './Comments.module.css';
import { deleteComment } from '../../api/comments';

export interface Comment {
  id: number;
  username: string;
  content: string;
  like_count: number;
  dislike_count: number;
  profile_pic: string;
  user_id: number;
}

interface GameCommentProps {
  comment: Comment;
  currentUserId: number;
  fetchComments: () => void;
}

const GameComment: React.FC<GameCommentProps> = ({ comment, currentUserId, fetchComments }) => {
  const defaultPhoto = '/nophoto.jpg';
  const userPhoto = comment?.profile_pic || defaultPhoto;
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteComment = async () => {
    try {
      await deleteComment(comment.id);
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
    setShowConfirmation(false);
  };

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.photoContainer}>
          <img className={styles.userPhoto} src={userPhoto} alt="" />
        </div>
        <div className={styles.authorContainer}>
          <h3 className={styles.commentAuthor}>{comment.username}</h3>
          <p className={styles.commentContent}>{comment.content}</p>
        </div>
      </div>
      <div className={styles.likesContainer}>
        <i className={`fas fa-thumbs-up ${styles.likeIcon}`}></i>
        <p className={styles.commentLikes}>{comment.like_count}</p>
        {comment.user_id === currentUserId && (
          <i
            className={`fas fa-trash-alt ${styles.deleteIcon}`}
            onClick={toggleConfirmation}
          ></i>
        )}
        {showConfirmation && (
          <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
              <p>Are you sure you want to delete the comment?</p>
              <div className={styles.modalButtons}>
                <button onClick={handleDeleteComment}>Yes</button>
                <button onClick={toggleConfirmation}>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameComment;
