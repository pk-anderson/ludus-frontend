export async function listGames(page: number, limit: number, text: string) {
  try {
    console.log(page)
    console.log(limit)
    console.log(text)
      const token = localStorage.getItem('token');
      console.log(token)
      let request = await fetch(`http://localhost:3000/games/list?page=${page}&limit=${limit}&text=${text}`, {
        method: "GET",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      let result = await request.json();
      console.log(result)

      return result; 
      
  } catch (error) {
      window.alert(`Erro: ${error}`);
      throw error;
  }
}
