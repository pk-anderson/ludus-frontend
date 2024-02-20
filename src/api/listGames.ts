export async function listGames(page: Number, limit: Number, text: string) {
    try {
        const token = localStorage.getItem('token');

        let request = await fetch(`http://localhost:3000/games/list?page=${page}&limit=${limit}&text=${text}`, {
          method: "GET",
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
