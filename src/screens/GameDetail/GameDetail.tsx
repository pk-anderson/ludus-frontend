import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { categoryStrings } from '../constants';
import GameComment from '../../components/Comments/Comments';
import { Comment } from '../../components/Comments/Comments';
import { listComments, createComment } from '../../api/comments';

function GameDetail() {
  const { state } = useLocation();
  const game = state?.result;
  console.log(game)
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const [hasMoreComments, setHasMoreComments] = useState(true);
  const [newComment, setNewComment] = useState('');

  const fetchComments = async () => {
    try {
      const response = await listComments(currentPage, 10, 'game', game.id);
      const { comments, totalPages } = response.result;
      
      setComments(comments);
      setTotalPages(totalPages);
      setHasMoreComments(currentPage < totalPages);
      
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [currentPage, game.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createComment(game.id, newComment, 'game');
      fetchComments();
      setCurrentPage(1); 
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
      window.scrollTo({ top: 500 });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
      window.scrollTo({ top: 500 });
    }
  };

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.cover.url} alt={game.name} style={{ maxWidth: '200px' }} />
      <p>Category: {categoryStrings[game.category]}</p>
      <h2>Genres:</h2>
      <ul>
        {game.genres && game.genres.map((genre: { id: number; name: string }) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <p>{game.summary}</p>
      <h2>Comments:</h2>
      <form onSubmit={handleSubmit}>
          <textarea value={newComment} onChange={handleChange} />
          <button type="submit">Add Comment</button>
      </form>
      {comments.map((comment: Comment, index: number) => ( 
        <GameComment key={index} comment={comment} />
      ))}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={handleNextPage} disabled={!hasMoreComments}>
          Próximo
        </button>
      </div>
    </div>
  );
}

export default GameDetail;
