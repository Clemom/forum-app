import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"

export default function Profile() {
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      setError("Non connecté.")
      return
    }

    fetch("http://localhost:3000/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized")
        return res.json()
      })
      .then(setUser)
      .catch(() => setError("Session invalide ou expirée."))
  }, [])

  if (error) {
    return (
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <p>{error}</p>
        <a href="/login" className="text-primary underline mt-2">Se connecter</a>
      </main>
    )
  }

  function handleLogout() {
    localStorage.removeItem("token")
    window.location.href = "/login"
  }   


  if (!user) {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <p>Chargement...</p>
      </main>
    )
  }

  return (
    <main className="flex items-center justify-center h-screen">
        <Card className="w-[400px] text-center">
        <CardHeader>
            <CardTitle className="text-2xl font-bold">Mon profil</CardTitle>
        </CardHeader>
        <CardContent>
            <p><strong>Nom :</strong> {user.username}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>Créé le :</strong> {new Date(user.createdAt).toLocaleDateString()}</p>

            <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
            Déconnexion
            </button>
        </CardContent>
        </Card>
    </main>
  )
}
