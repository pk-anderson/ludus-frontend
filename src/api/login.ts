export async function login(email: string, password: string) {
    try {
        let request = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        let result = await request.json();
        return { result };
    } catch (error) {
        window.alert(`Erro: ${error}`);
        throw error;
    }
}
