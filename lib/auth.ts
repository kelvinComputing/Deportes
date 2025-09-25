import { cookies } from "next/headers"

export interface User {
  id_usuario: number
  id_club_cookie: number
  tipo_de_user: "ADMINISTRADOR" | "atleta"
}

export async function getUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies()

    const id_usuario = cookieStore.get("id_usuario")
    const id_club_cookie = cookieStore.get("id_club_cookie")
    const tipo_de_user = cookieStore.get("tipo_de_user")

    if (!id_usuario || !tipo_de_user) {
      return null
    }

    return {
      id_usuario: Number(id_usuario.value),
      id_club_cookie: id_club_cookie ? Number(id_club_cookie.value) : 0,
      tipo_de_user: tipo_de_user.value as User["tipo_de_user"],
    }
  } catch (error) {
    console.error("Error getting user:", error)
    return null
  }
}

export async function requireAuth(allowedRoles?: string[]) {
  const user = await getUser()

  if (!user) {
    return { user: null, error: "No autenticado" }
  }

  if (allowedRoles && !allowedRoles.includes(user.tipo_de_user)) {
    return { user: null, error: "No autorizado" }
  }

  return { user, error: null }
}
