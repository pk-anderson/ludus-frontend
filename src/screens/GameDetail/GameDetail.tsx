import React from 'react';
import { useLocation } from 'react-router-dom';
import { categoryStrings } from '../constants';

function GameDetail() {
  const { state } = useLocation();
  const game = state?.result;

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
    </div>
  );
}

export default GameDetail;
