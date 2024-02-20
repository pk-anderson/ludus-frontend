import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Search.module.css';
import SearchResult from '../../components/SearchResult/SearchResult';

interface SearchResultItem {
  id: number;
  name: string;
  category: number;
  cover: {
    id: number;
    url: string;
  };
  genres?: { id: number; name: string }[]; 
  summary: string;
}

const Search: React.FC = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div className={styles.searchContainer}>
      {results.map((result: SearchResultItem) => (
        <SearchResult key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Search;
