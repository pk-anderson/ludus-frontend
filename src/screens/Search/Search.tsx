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

const Search: React.FC = () => {
  const location = useLocation();
  const text = location.state?.text || [];
  const totalPages = location.state?.totalPages || [];
  console.log(totalPages)
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [hasMoreResults, setHasMoreResults] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const  result   = await listGames(currentPage, 10, text);
        const newResults = result;
        
        if (newResults.length > 0) {
          setSearchResults(newResults);
          setHasMoreResults(true); // Há mais resultados disponíveis
        } else {
          setHasMoreResults(false); // Não há mais resultados disponíveis
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [currentPage, text]);

  const handleNextPage = async () => {
    if (hasMoreResults) {
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
      {searchResults.map((result: SearchResultItem) => (
        <SearchResult key={result.id} result={result} />
      ))}
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={handleNextPage} disabled={!hasMoreResults}>
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Search;
