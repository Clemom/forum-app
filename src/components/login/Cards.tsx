import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function Cards() {
  const [form, setForm] = useState({ email: "", password: "" })
  const [msg, setMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    if (data.access_token) {
      localStorage.setItem("token", data.access_token)
      setMsg("✅ Connecté avec succès !")
      setTimeout(() => (window.location.href = "/profile"), 1000)
    } else {
      setMsg("❌ Identifiants invalides")
    }
  }

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Se connecter</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Adresse e-mail</label>
              <Input type="email" placeholder="mail@example.com"
                onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mot de passe</label>
              <Input type="password" placeholder="••••••••"
                onChange={e => setForm({ ...form, password: e.target.value })} />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full" type="submit">Connexion</Button>
            <p className="text-sm text-center text-muted-foreground">
              Pas encore de compte ? <a href="/register" className="text-primary underline">Créer un compte</a>
            </p>
            {msg && <p className="text-center text-sm mt-2">{msg}</p>}
          </CardFooter>
        </Card>
      </form>
    </section>
  )
}
