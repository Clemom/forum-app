import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function Cards() {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" })
  const [msg, setMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.password !== form.confirm) {
      setMsg("❌ Les mots de passe ne correspondent pas")
      return
    }

    const res = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
      }),
    })

    const data = await res.json()
    if (res.ok) setMsg(`✅ Compte créé : ${data.email}`)
    else setMsg("❌ Erreur lors de l’inscription")
  }

  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Créer un compte</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom d'utilisateur</label>
              <Input type="text" placeholder="JohnDoe"
                onChange={e => setForm({ ...form, username: e.target.value })} />
            </div>

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

            <div>
              <label className="block text-sm font-medium mb-1">Confirmer le mot de passe</label>
              <Input type="password" placeholder="••••••••"
                onChange={e => setForm({ ...form, confirm: e.target.value })} />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full" type="submit">S'inscrire</Button>
            <p className="text-sm text-center text-muted-foreground">
              Déjà un compte ? <a href="/login" className="text-primary underline">Se connecter</a>
            </p>
            {msg && <p className="text-center text-sm mt-2">{msg}</p>}
          </CardFooter>
        </Card>
      </form>
    </section>
  )
}
