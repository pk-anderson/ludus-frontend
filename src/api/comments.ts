export async function listComments(page: Number, limit: Number, type: string, id: number) {
    try {
        const token = localStorage.getItem('token');

        let request = await fetch(`http://localhost:3000/comments/${id}?page=${page}&limit=${limit}&type=${type}`, {
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

export async function createComment(id: number, content: string, type: string) {
  try {
      const token = localStorage.getItem('token');

      let request = await fetch(`http://localhost:3000/comments/create`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          entity_id: id,
          content: content,
          comment_type: type
        }),
      });
      let result = await request.json();
      return { result };
  } catch (error) {
      window.alert(`Erro: ${error}`);
      throw error;
  }
}