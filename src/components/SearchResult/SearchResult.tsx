import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchResult.module.css';
import { listComments } from '../../api/comments';

interface Genre {
  id: number;
  name: string;
}

interface Cover {
  id: number;
  url: string;
}

interface SearchResultProps {
  result: {
    id: number;
    name: string;
    category: number;
    cover?: Cover;
    genres?: Genre[];
    summary: string;
  };
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const navigate = useNavigate();
  const defaultCoverUrl = 'nocover.png';

  const handleClick = async () => {
    try {
      navigate(`/games/${result.id}`, { state: { result } });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  

  return (
    <div className={styles.searchResult} onClick={handleClick}>
      {result.cover ? (
        <img src={result.cover.url} alt={result.name} className={styles.coverImage} />
      ) : (
        <img src={defaultCoverUrl} alt="Default Cover" className={styles.coverImage} />
      )}
      <div className={styles.details}>
        <h2 className={styles.title}>{result.name}</h2>
        {result.genres && (
          <ul className={styles.genreList}>
            {result.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
        <p className={styles.summary}>{result.summary}</p>
      </div>
    </div>
  );
};

export default SearchResult;
