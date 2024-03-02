export async function addToLibrary(id: number) {
    try {
        const token = localStorage.getItem('token');
  
        let request = await fetch(`http://localhost:3000/games/${id}/library`, {
          method: "POST",
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

  export async function listLibrary(userId: number) {
    try {
  
        const token = localStorage.getItem('token');
        let request = await fetch(`http://localhost:3000/games/${userId}/library`, {
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

  export async function removeFromLibrary(id: number) {
    try {
        const token = localStorage.getItem('token');
  
        let request = await fetch(`http://localhost:3000/games/${id}/library`, {
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