
export async function saveRating(gameId: Number, rating: Number) {
    try {
        const token = localStorage.getItem('token');

        let request = await fetch(`http://localhost:3000/ratings/save`, {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            game_id: gameId,
            rating: rating,
          }),
        });
        let result = await request.json();
        return { result };
    } catch (error) {
        window.alert(`Erro: ${error}`);
        throw error;
    }
}

export async function deleteRating(gameId: Number) {
  try {
      const token = localStorage.getItem('token');

      let request = await fetch(`http://localhost:3000/ratings/game/${gameId}`, {
        method: "DELETE",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      let result = await request.json();
      return { result };
  } catch (error) {
      window.alert(`Erro: ${error}`);
      throw error;
  }
}