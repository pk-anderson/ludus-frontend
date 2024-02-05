export async function login(email: string, password: string) {
    try {
        console.log(email)
        console.log(password)
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
        console.log(request)
        let result = await request.json();
        let authorization = request.headers.get('authorization');
        console.log(authorization)
        return { result, authorization };
    } catch (error) {
        window.alert(`Erro: ${error}`);
        throw error;
    }
}
