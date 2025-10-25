import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function Cards() {
  return (
    <section className="mx-auto max-w-md px-4 py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Se connecter</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Adresse e-mail</label>
            <Input type="email" placeholder="mail@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mot de passe</label>
            <Input type="password" placeholder="••••••••" />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full">Connexion</Button>
          <p className="text-sm text-center text-muted-foreground">
            Inscrivez-vous et commencez à débattre ! <a href="/register" className="text-primary underline">Se connecter</a>
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}
