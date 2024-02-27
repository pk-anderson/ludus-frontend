import React from 'react';

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
    <div>
      <h3>{comment.username}</h3>
      <p>{comment.content}</p>
      <p>Likes: {comment.like_count}</p>
      <p>Dislikes: {comment.dislike_count}</p>
    </div>
  );
};

export default GameComment;
