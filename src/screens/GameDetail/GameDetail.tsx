import React from 'react';
import { useLocation } from 'react-router-dom';
import { categoryStrings } from '../constants';
import GameComment from '../../components/Comments/Comments';
import { Comment } from '../../components/Comments/Comments';


function GameDetail() {
  const { state } = useLocation();
  const game = state?.result;
  const comments = state?.comments; 

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
      {comments && comments.map((comment: Comment, index: number) => ( 
        <GameComment key={index} comment={comment} />
      ))}
    </div>
  );
}

export default GameDetail;
