import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { categoryStrings } from '../constants';
import GameComment from '../../components/Comments/Comments';
import { Comment } from '../../components/Comments/Comments';
import { listComments, createComment } from '../../api/comments';
import styles from './GameDetail.module.css';
import Button from '../../components/Button/Button';
import { findGameDetails } from '../../api/games';
import {
  addToLibrary,
  removeFromLibrary
} from '../../api/userLibrary';
import { 
  findRating,
  saveRating
 } from '../../api/ratings';

function GameDetail() {
  const { state } = useLocation();
  const game = state?.result;
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasMoreComments, setHasMoreComments] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [gameInLibrary, setGameInLibrary] = useState(false);
  const [rating, setRating] = useState<number | null>(null); // State para a classificação do jogo
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const currentUserId = storedUser.id || 0;

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

  const fetchGameDetails = async () => {
    try {
      const data = await findGameDetails(game.id);
      setGameInLibrary(data.result.game_in_library);
      setRating(data.result.rating); // Define a classificação atual do jogo
    } catch (error) {
      console.error('Error fetching game details:', error);
    }
  };

  useEffect(() => {
    fetchComments();
    fetchGameDetails();
  }, [currentPage, game.id]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      console.log(newComment);
      await createComment(game.id, newComment, 'game');
      fetchComments();
      setCurrentPage(1);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(newComment)
    setNewComment(e.target.value);
  };

  const handleAddToLibrary = async () => {
    try {
      await addToLibrary(game.id);
      setGameInLibrary(true);
    } catch (error) {
      console.error('Error adding game to library:', error);
    }
  };

  const handleRemoveFromLibrary = async () => {
    try {
      await removeFromLibrary(game.id);
      setGameInLibrary(false);
    } catch (error) {
      console.error('Error removing game from library:', error);
    }
  };

  const handleRatingClick = async (ratingValue: number) => {
    try {
      await saveRating(game.id, ratingValue);
      setRating(ratingValue); 
    } catch (error) {
      console.error('Error saving rating:', error);
    }
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
      <div className={styles.gameDetailContainer}>
        <div className={styles.basicInfoContainer}>
          <h1 className={styles.gameTitle}>{game.name}</h1>
          <div className={styles.imageContainer}>
            <img className={styles.cover} src={game.cover.url} alt={game.name} />
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.infoHeader}>
                <div className={styles.generalInfo}>
                  <div className={styles.categoryContainer}>
                      <p><span className={styles.label}>Category:</span> {categoryStrings[game.category]}</p>
                      <p><span className={styles.label}>Genres:</span> {game.genres && game.genres.map((genre: { id: number; name: string }, index: number) => (
                      <span key={genre.id}>
                        {genre.name}
                        {index < game.genres.length - 1 && ', '}
                      </span>
                    ))}
                    </p>
                  </div>
                <div className={styles.buttonContainer}>
                  {gameInLibrary ? (
                    <Button
                      text="Remove From Collection"
                      height={40}
                      width={160}
                      backgroundColor="#ff4d4d"
                      textSize={16}
                      textColor="#ffffff"
                      borderRadius={25}
                      onClick={handleRemoveFromLibrary}
                    />
                  ) : (
                    <Button
                      text="Add to Collection"
                      height={40}
                      width={120}
                      backgroundColor="#32CD32"
                      textSize={16}
                      textColor="#ffffff"
                      borderRadius={25}
                      onClick={handleAddToLibrary}
                    />
                  )}
                  <div className={styles.ratingContainer}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`${styles.star} ${
                          index < (rating ?? 0) ? styles.filled : ''
                        }`}
                        onClick={() => handleRatingClick(index + 1)}
                      >
                        &#9733;
                      </span>
                    ))}
                </div>
                </div>
                </div>
                <div className={styles.summaryContainer}>
                  <h2>Summary</h2>
                  <p className={styles.summary}>{game.summary}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsSection}>
          <h2 className={styles.commentsTitle}>Comments:</h2>
          <div className={styles.addCommentContainer}>
            <textarea value={newComment} onChange={handleChange} />
            <button
              className={styles.addCommentButton}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              Add Comment
            </button>
          </div>
        </div>
        <div className={styles.commentsListContainer}>
          {comments.map((comment: Comment, index: number) => (
            <GameComment key={index} comment={comment} currentUserId={currentUserId} fetchComments={fetchComments} />
          ))}
        </div>
      </div>
      <div className={styles.pagination}>
        <button className={styles.previousButton} onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button className={styles.nextButton} onClick={handleNextPage} disabled={!hasMoreComments}>
          Next
        </button>
      </div>
    </div>
  );
}

export default GameDetail;


