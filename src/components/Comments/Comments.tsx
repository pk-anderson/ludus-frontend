import React from 'react';
import styles from './Comments.module.css'; 

export interface Comment {
  username: string;
  content: string;
  like_count: number;
  dislike_count: number;
}

interface GameCommentProps {
  comment: Comment;
}

const GameComment: React.FC<GameCommentProps> = ({ comment }) => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.contentContainer}>
        <h3 className={styles.commentAuthor}>{comment.username}</h3>
        <p className={styles.commentContent}>{comment.content}</p>
      </div>
      <div className={styles.likesContainer}>
        <i className={`fas fa-thumbs-up ${styles.likeIcon}`}></i>
        <p className={styles.commentLikes}>{comment.like_count}</p>
      </div>
    </div>
  );
};

export default GameComment;
