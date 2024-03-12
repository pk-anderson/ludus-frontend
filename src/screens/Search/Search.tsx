import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Search.module.css';
import SearchResult from '../../components/SearchResult/SearchResult';
import { listGames } from '../../api/listGames';

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

interface SearchResultResponse {
  games: SearchResultItem[];
  totalPages: number;
}

const Search: React.FC = () => {
  const location = useLocation();
  const text = location.state?.text || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [totalPages, setTotalPages] = useState(1); 
  const [hasMoreResults, setHasMoreResults] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result }: { result: SearchResultResponse } = await listGames(currentPage, 10, text);
        
        setSearchResults(result.games);
        setTotalPages(result.totalPages);
        setHasMoreResults(currentPage < result.totalPages);
        
        window.scrollTo({ top: 0});
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [currentPage, text]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <h1 className={styles.resultsHeader}>Results for: {text}</h1>
      {searchResults.map((result: SearchResultItem) => (
        <SearchResult key={result.id} result={result} />
      ))}
      <div className={styles.pagination}>
        <button className={styles.previousButton} onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button className={styles.nextButton} onClick={handleNextPage} disabled={currentPage === totalPages || !hasMoreResults}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Search;
