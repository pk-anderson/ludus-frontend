import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Collection.module.css';
import { useLocation } from 'react-router-dom';

const Collection: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 9;
    const location = useLocation();
    const games = location.state?.games || [];
    
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div className={styles.myCollectionContainer}>
            <div className={styles.dividerContainer}>
                <div className={styles.dividerButton}>
                    <Button
                        text="Sort By"
                        height={40}
                        width={80} 
                        backgroundColor="#ca8324" 
                        textSize={16}
                        textColor="#ffffff"
                        borderRadius={25}
                    />
                </div>
                <hr className={styles.collectionDivider} />
            </div>

            <div className={styles.gamesContainer}>
                {currentGames.map((game: any) => (
                    <Link className={styles.gameLink} to={`/games/${game.id}`} state={{ result: game }}>
                        <div className={styles.gameContainer}>
                            <img src={game.cover.url} alt={game.name} className={styles.gameCover} />
                            <p className={styles.gameTitle}>{game.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.pagination}>
                <button className={styles.previousButton} onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button className={styles.nextButton} onClick={handleNextPage} disabled={currentPage === Math.ceil(games.length / gamesPerPage)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Collection;
