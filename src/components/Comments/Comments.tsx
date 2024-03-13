import React from 'react';
import styles from './Comments.module.css'; 

export interface Comment {
  username: string;
  content: string;
  like_count: number;
  dislike_count: number;
  profile_pic: string;
}

interface GameCommentProps {
  comment: Comment;
}

const GameComment: React.FC<GameCommentProps> = ({ comment }) => {
  const defaultPhoto = '/nophoto.jpg'
  const userPhoto = comment?.profile_pic || defaultPhoto; 
  console.log(userPhoto)
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
      </div>
    </div>
  );
};

export default GameComment;
