import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-semibold">Feature Ideas</Link>

        <nav className="flex gap-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Accueil</Link>
          <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">Connexion</Link>
          <Link to="/register" className="text-sm text-muted-foreground hover:text-foreground">Inscription</Link>
        </nav>

        <Button asChild>
          <Link to="/login">Se connecter</Link>
        </Button>
      </div>
    </header>
  )
}
