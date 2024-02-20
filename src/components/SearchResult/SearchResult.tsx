import React from 'react';
import styles from './SearchResult.module.css';

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
    const defaultCoverUrl = 'nocover.png'; 
  
    return (
      <div className={styles.searchResult}>
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
