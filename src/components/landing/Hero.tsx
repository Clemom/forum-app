import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Prêt à poster ton premier sujet ?
      </h1>

      <p className="mt-4 text-muted-foreground">
        Crée un compte et lance ton débat.
      </p>

      <div className="mt-8 flex items-center justify-center gap-3">
        <Button asChild>
          <Link to="/register">Commencer</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href="#features">Voir les features</a>
        </Button>
      </div>
    </section>
  )
}
