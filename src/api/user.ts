export async function findUser(id: Number) {
    try {
        const token = localStorage.getItem('token');

        let request = await fetch(`http://localhost:3000/users/${id}`, {
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