export const register = async (username, email, password) => {
    console.log(username, email, password)
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}addUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username" : username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}
