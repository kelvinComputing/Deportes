const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function loginApi(username: string, password: string) {
	try {
		const res = await fetch(`${API_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({ username, password }),
		})

		if (!res.ok) {
			throw new Error("Error en login")
		}
// 
		const data = await res.json()
		return data
	} catch (err) {
		console.error("Login API error:", err)
		throw err
	}
}
